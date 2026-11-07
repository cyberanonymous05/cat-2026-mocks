/* Pure chronological count forecasting. No DOM, clock, network or target-year
   outcomes are read by fixedForecast. This is a retrospective study, not a
   previously published prediction. All method settings are explicit below. */
(function (global) {
  'use strict';
  const methods = [
    {id:'last',name:'Last-year baseline',rule:'Mean of the latest available year’s slots.'},
    {id:'annual',name:'Equal-year history',rule:'Mean of yearly means; every training year gets equal weight.'},
    {id:'recency',name:'Recency, 2-year half-life',rule:'Yearly means weighted by 2^((year − latest year)/2).'},
    {id:'ensemble',name:'Fixed three-rule ensemble',rule:'Equal average of last-year, equal-year and recency forecasts.'},
    {id:'uniform',name:'Uniform null baseline',rule:'22/5 for each original family, then merge if using broad groups.'}
  ];
  const labels = {
    raw:['Arithmetic','Algebra','Geometry','Numbers','Modern Math'],
    broad:['Arithmetic','Algebra + Modern Math','Geometry','Numbers']
  };
  const sum = a => a.reduce((s,x)=>s+x,0);
  const mean = a => sum(a)/a.length;
  const vectorMean = rows => rows[0].map((_,i)=>mean(rows.map(r=>r[i])));
  const yearsOf = rows => [...new Set(rows.map(r=>r.year))].sort((a,b)=>a-b);
  function validateRows(rows) {
    if(!Array.isArray(rows)||!rows.length)throw new Error('At least one complete source row is required.');
    const keys=new Set();
    for(const r of rows){
      if(!Number.isInteger(r.year)||!Number.isInteger(r.slot)||r.slot<1||r.slot>3)throw new Error('Invalid exam year or slot.');
      const key=r.year+'-'+r.slot;if(keys.has(key))throw new Error('Duplicate year-slot row: '+key);keys.add(key);
      if(!Array.isArray(r.qa)||r.qa.length!==5||Array.from(r.qa).some(x=>!Number.isInteger(x)||x<0)||sum(r.qa)!==22)throw new Error('QA row must contain five nonnegative integer counts totaling 22: '+key);
      if(!/^https:\/\//.test(r.source||''))throw new Error('Source URL required: '+key);
    }
  }
  function project(vector,taxonomy='raw') {
    if(!labels[taxonomy])throw new Error('Unknown taxonomy.');
    return taxonomy==='broad'?[vector[0],vector[1]+vector[4],vector[2],vector[3]]:[...vector];
  }
  function annualRows(rows,taxonomy='raw') {
    return yearsOf(rows).map(year=>({year,slots:rows.filter(r=>r.year===year).length,counts:vectorMean(rows.filter(r=>r.year===year).map(r=>project(r.qa,taxonomy)))}));
  }
  function fixedForecast(training,targetYear,method='last',taxonomy='raw') {
    validateRows(training);
    if(!Number.isInteger(targetYear)||training.some(r=>r.year>=targetYear))throw new Error('Training must be strictly before the target exam year.');
    if(!methods.some(m=>m.id===method))throw new Error('Unknown forecast method.');
    const annual=annualRows(training,taxonomy),latest=annual[annual.length-1];
    if(method==='last')return [...latest.counts];
    if(method==='annual')return vectorMean(annual.map(r=>r.counts));
    if(method==='uniform')return project([4.4,4.4,4.4,4.4,4.4],taxonomy);
    if(method==='recency'){
      const weights=annual.map(r=>Math.pow(2,(r.year-latest.year)/2)),total=sum(weights);
      return latest.counts.map((_,i)=>sum(annual.map((r,j)=>r.counts[i]*weights[j]))/total);
    }
    return vectorMean(['last','annual','recency'].map(id=>fixedForecast(training,targetYear,id,taxonomy)));
  }
  function evaluate(prediction,actual,taxonomy='raw') {
    validateRows(actual);
    if(!Array.isArray(prediction)||prediction.length!==labels[taxonomy]?.length||Array.from(prediction).some(x=>!Number.isFinite(x)||x<0)||Math.abs(sum(prediction)-22)>1e-7)throw new Error('Forecast must be a 22-question allocation in the selected taxonomy.');
    const errors=actual.map(r=>project(r.qa,taxonomy).map((x,i)=>Math.abs(x-prediction[i])));
    const absolute=sum(errors.flat()),total=actual.length*22,cells=actual.length*prediction.length;
    return {mae:absolute/cells,absolute,total,cells,overlap:100*(1-absolute/(2*total)),exact:errors.flat().filter(e=>e<1e-9).length,maxError:Math.max(...errors.flat()),perFamily:prediction.map((_,i)=>mean(errors.map(row=>row[i])))};
  }
  // Largest remainders preserve the total. Ties follow displayed family order.
  // Only a scenario display is rounded; all primary scoring uses real means.
  function roundAllocation(counts) {
    if(!Array.isArray(counts)||!counts.length||Array.from(counts).some(x=>!Number.isFinite(x)||x<0)||Math.abs(sum(counts)-22)>1e-7)throw new Error('Allocation must sum to 22.');
    const result=counts.map(Math.floor),remaining=22-sum(result);
    const order=counts.map((x,i)=>({i,remainder:x-Math.floor(x)})).sort((a,b)=>Math.abs(b.remainder-a.remainder)<1e-9?a.i-b.i:b.remainder-a.remainder);
    for(let i=0;i<remaining;i++)result[order[i].i]++;
    return result;
  }
  // Selection only sees completed, earlier evaluation years. The uniform null
  // is a diagnostic, not a candidate. Exact score ties favour simpler methods.
  function chooseMethod(previousFolds) {
    if(!previousFolds.length)return 'last';
    let chosen='last',best=Infinity;
    for(const m of methods.filter(m=>m.id!=='uniform')){
      const error=mean(previousFolds.map(f=>f.methods[m.id].metrics.mae));
      if(error<best-1e-9){best=error;chosen=m.id;}
    }
    return chosen;
  }
  function runStudy(rows,taxonomy='raw') {
    validateRows(rows);
    const years=yearsOf(rows),folds=[];
    for(const year of years.slice(1)){
      const training=rows.filter(r=>r.year<year),actual=rows.filter(r=>r.year===year);
      const selectedMethod=chooseMethod(folds); // deliberately before current results
      const results=Object.fromEntries(methods.map(m=>{
        const prediction=fixedForecast(training,year,m.id,taxonomy);
        return [m.id,{prediction,rounded:roundAllocation(prediction),metrics:evaluate(prediction,actual,taxonomy)}];
      }));
      folds.push({year,trainingYears:yearsOf(training),trainingSlots:training.length,targetSlots:actual.length,methods:results,selectedMethod,selected:results[selectedMethod]});
    }
    const summarize=entries=>({mae:mean(entries.map(e=>e.mae)),overlap:mean(entries.map(e=>e.overlap)),exact:sum(entries.map(e=>e.exact)),cells:sum(entries.map(e=>e.cells)),annualMAE:entries.map(e=>e.mae)});
    const summary=folds.length?Object.fromEntries(methods.map(m=>[m.id,summarize(folds.map(f=>f.methods[m.id].metrics))])):{};
    if(folds.length)summary.selector=summarize(folds.map(f=>f.selected.metrics));
    const targetYear=years[years.length-1]+1,selectedMethod=chooseMethod(folds);
    const prediction=fixedForecast(rows,targetYear,selectedMethod,taxonomy);
    const observed=labels[taxonomy].map((_,i)=>[Math.min(...rows.map(r=>project(r.qa,taxonomy)[i])),Math.max(...rows.map(r=>project(r.qa,taxonomy)[i]))]);
    const maxHistoricalErrors=labels[taxonomy].map((_,i)=>folds.length?Math.max(...folds.flatMap(f=>rows.filter(r=>r.year===f.year).map(r=>Math.abs(project(r.qa,taxonomy)[i]-f.selected.prediction[i])))):null);
    return {taxonomy,labels:labels[taxonomy],years,slots:rows.length,questions:rows.length*22,folds,summary,forecast:{targetYear,selectedMethod,prediction,rounded:roundAllocation(prediction),observed,maxHistoricalErrors}};
  }
  /* ---- v4.0 diagnostics ---------------------------------------------------
     These read the same rows but never feed runStudy or chooseMethod, so the
     selector, its folds and its audit trail are unaffected by them. */
  function roundTo(counts,total) {
    const result=counts.map(Math.floor),remaining=total-sum(result);
    const order=counts.map((x,i)=>({i,remainder:x-Math.floor(x)})).sort((a,b)=>Math.abs(b.remainder-a.remainder)<1e-9?a.i-b.i:b.remainder-a.remainder);
    for(let i=0;i<remaining;i++)result[order[i].i]++;
    return result;
  }
  // Damping is fixed before any scoring: half of the fitted yearly drift is carried forward.
  // Needs three exam years; with fewer it returns the last-year forecast.
  function dampedTrend(training,targetYear,taxonomy='raw',damping=0.5) {
    validateRows(training);
    if(!Number.isInteger(targetYear)||training.some(r=>r.year>=targetYear))throw new Error('Training must be strictly before the target exam year.');
    const annual=annualRows(training,taxonomy),latest=annual[annual.length-1];
    if(annual.length<3)return [...latest.counts];
    const xs=annual.map(a=>a.year),mx=mean(xs),sxx=sum(xs.map(x=>(x-mx)**2));
    const drifted=latest.counts.map((_,i)=>{
      const ys=annual.map(a=>a.counts[i]),my=mean(ys);
      const slope=sum(xs.map((x,j)=>(x-mx)*(ys[j]-my)))/sxx;
      return Math.max(0,latest.counts[i]+damping*slope*(targetYear-latest.year));
    });
    const total=sum(drifted);
    return drifted.map(x=>x*22/total);
  }
  function trendExperiment(rows,taxonomy='raw',damping=0.5) {
    validateRows(rows);
    const years=yearsOf(rows),folds=years.slice(1).map(year=>{
      const training=rows.filter(r=>r.year<year),actual=rows.filter(r=>r.year===year);
      return {year,last:evaluate(fixedForecast(training,year,'last',taxonomy),actual,taxonomy).mae,
        trend:evaluate(dampedTrend(training,year,taxonomy,damping),actual,taxonomy).mae};
    });
    const last=folds.length?mean(folds.map(f=>f.last)):null,trend=folds.length?mean(folds.map(f=>f.trend)):null;
    const targetYear=years[years.length-1]+1;
    return {damping,folds,summary:{last,trend},beatsLastYear:folds.length>0&&trend<last-1e-9,targetYear,forecast:dampedTrend(rows,targetYear,taxonomy,damping)};
  }
  // Leave-one-slot-out: forecast each slot with the mean of the other slots in the same year.
  // Even a forecaster who knew the year's mix would miss by about this much, so it is a rough floor.
  function withinYearNoise(rows,taxonomy='raw') {
    validateRows(rows);
    const perYear=yearsOf(rows).map(year=>({year,slots:rows.filter(r=>r.year===year)})).filter(y=>y.slots.length>1)
      .map(y=>({year:y.year,slots:y.slots.length,mae:mean(y.slots.map(r=>evaluate(vectorMean(y.slots.filter(o=>o!==r).map(o=>project(o.qa,taxonomy))),[r],taxonomy).mae))}));
    return {years:perYear,mae:perYear.length?mean(perYear.map(y=>y.mae)):null};
  }
  // Year-to-year movement of the yearly mean. When every consecutive pair has a different convening IIM,
  // this movement already contains whatever a new setter changes, with no way to separate the two.
  function setterSwing(rows,taxonomy='raw',convenors={}) {
    validateRows(rows);
    const annual=annualRows(rows,taxonomy),names=labels[taxonomy];
    const transitions=annual.slice(1).map((a,i)=>{
      const p=annual[i],delta=a.counts.map((x,j)=>Math.abs(x-p.counts[j]));
      const known=convenors[p.year]!==undefined&&convenors[a.year]!==undefined;
      return {from:p.year,to:a.year,delta,churn:sum(delta)/2,newConvenor:known?convenors[p.year]!==convenors[a.year]:null};
    });
    if(!transitions.length)return {labels:names,transitions,meanDelta:null,maxDelta:null,meanChurn:null,allNewConvenor:false};
    return {labels:names,transitions,
      meanDelta:names.map((_,j)=>mean(transitions.map(t=>t.delta[j]))),
      maxDelta:names.map((_,j)=>Math.max(...transitions.map(t=>t.delta[j]))),
      meanChurn:mean(transitions.map(t=>t.churn)),
      allNewConvenor:transitions.every(t=>t.newConvenor===true)};
  }
  // Per-family probability of each count 0..22, from year-equal slot weights times a fixed recency decay.
  function countDistribution(training,taxonomy='raw',halfLife=2) {
    validateRows(training);
    const years=yearsOf(training),latest=years[years.length-1],n=labels[taxonomy].length;
    const dist=Array.from({length:n},()=>Array(23).fill(0));
    for(const y of years){
      const slots=training.filter(r=>r.year===y),w=(halfLife?Math.pow(2,(y-latest)/halfLife):1)/slots.length;
      for(const r of slots)project(r.qa,taxonomy).forEach((c,i)=>{dist[i][c]+=w;});
    }
    return dist.map(d=>{const t=sum(d);return d.map(x=>x/t);});
  }
  // The integer allocation summing to `total` that maximises the expected number of exactly-right family counts.
  // Ties keep the first allocation found with counts tried in ascending order.
  function modalAllocation(dist,total=22) {
    let best=-1,alloc=null;
    (function walk(i,left,acc,value){
      if(i===dist.length-1){if(value+dist[i][left]>best+1e-12){best=value+dist[i][left];alloc=[...acc,left];}return;}
      for(let c=0;c<=left;c++)walk(i+1,left-c,[...acc,c],value+dist[i][c]);
    })(0,total,[],0);
    return {allocation:alloc,expectedHits:best};
  }
  // Compares the most-likely allocation with the last-year mean and with the same mean rounded to integers.
  function modalExperiment(rows,taxonomy='raw',halfLife=2) {
    validateRows(rows);
    const years=yearsOf(rows),folds=years.slice(1).map(year=>{
      const training=rows.filter(r=>r.year<year),actual=rows.filter(r=>r.year===year);
      const lastMean=fixedForecast(training,year,'last',taxonomy);
      const modal=modalAllocation(countDistribution(training,taxonomy,halfLife)).allocation;
      const score=p=>{const e=evaluate(p,actual,taxonomy);return {mae:e.mae,exactRate:e.exact/e.cells};};
      return {year,modal:score(modal),lastRounded:score(roundAllocation(lastMean)),lastMean:score(lastMean)};
    });
    const avg=(key,field)=>folds.length?mean(folds.map(f=>f[key][field])):null;
    const summary=Object.fromEntries(['modal','lastRounded','lastMean'].map(k=>[k,{mae:avg(k,'mae'),exactRate:avg(k,'exactRate')}]));
    const dist=countDistribution(rows,taxonomy,halfLife),chosen=modalAllocation(dist);
    return {halfLife,folds,summary,
      beatsRoundedLast:folds.length>0&&summary.modal.mae<summary.lastRounded.mae-1e-9,
      forecast:{targetYear:years[years.length-1]+1,allocation:chosen.allocation,expectedHits:chosen.expectedHits,
        probabilities:dist.map((d,i)=>d.map((p,c)=>({count:c,p})).filter(x=>x.p>=0.04).map(x=>({count:x.count,p:x.p}))),
        probabilityOfChosen:chosen.allocation.map((c,i)=>dist[i][c])}};
  }
  const vaLabels=['Summary','Sentence placement','Odd sentence','Parajumbles'],vaMethods=['last','annual','uniform'];
  // Verbal Ability is the 8 non-RC VARC questions; RC is 16 in every recovered report.
  function runVARCStudy(rows) {
    validateRows(rows);
    const data=rows.filter(r=>Array.isArray(r.varc));
    for(const r of data)if(r.varc.length!==5||r.varc.some(x=>!Number.isInteger(x)||x<0)||sum(r.varc.slice(1))!==8)throw new Error('VARC row must be [RC, then four Verbal Ability counts totalling 8]: '+r.year+'-'+r.slot);
    const years=yearsOf(data),means=years.map(year=>({year,mix:vectorMean(data.filter(r=>r.year===year).map(r=>r.varc.slice(1)))}));
    const predict=(trainYears,id)=>{
      const m=means.filter(y=>trainYears.includes(y.year));
      return id==='last'?[...m[m.length-1].mix]:id==='annual'?vectorMean(m.map(y=>y.mix)):vaLabels.map(()=>2);
    };
    const choose=prev=>{
      if(!prev.length)return 'last';
      let chosen='last',best=Infinity;
      for(const id of vaMethods){const e=mean(prev.map(f=>f.methods[id].mae));if(e<best-1e-9){best=e;chosen=id;}}
      return chosen;
    };
    const folds=[];
    for(const year of years.slice(1)){
      const train=years.filter(y=>y<year),actual=data.filter(r=>r.year===year);
      const results=Object.fromEntries(vaMethods.map(id=>{
        const prediction=predict(train,id);
        return [id,{prediction,mae:mean(actual.map(r=>mean(r.varc.slice(1).map((x,i)=>Math.abs(x-prediction[i])))))}];
      }));
      folds.push({year,trainingYears:train,methods:results,selectedMethod:choose(folds)});
    }
    const summary=folds.length?Object.fromEntries(vaMethods.map(id=>[id,{mae:mean(folds.map(f=>f.methods[id].mae)),annualMAE:folds.map(f=>f.methods[id].mae)}])):{};
    const selectedMethod=choose(folds),prediction=years.length?predict(years,selectedMethod):null;
    const same=(a,b)=>a.every((x,i)=>Math.abs(x-b[i])<1e-9);
    const changed=means.slice(1).filter((m,i)=>!same(m.mix,means[i].mix)).length;
    return {labels:vaLabels,years,folds,summary,
      presence:vaLabels.map((label,j)=>({label,yearsPresent:means.filter(y=>y.mix[j]>0).length,years:means.length})),
      changes:{changed,transitions:Math.max(0,means.length-1)},
      rcAlways16:data.every(r=>r.varc[0]===16),
      forecast:{targetYear:years.length?years[years.length-1]+1:null,selectedMethod,prediction,rounded:prediction?roundTo(prediction,8):null}};
  }
  // DILR: how many questions and how the sets are sized. Contexts and constraint types are not modelled.
  function runDILRStudy(rows) {
    validateRows(rows);
    const data=rows.filter(r=>Array.isArray(r.dilr)&&r.dilr.length);
    for(const r of data)if(r.dilr.some(x=>!Number.isInteger(x)||x<1))throw new Error('DILR set sizes must be positive integers: '+r.year+'-'+r.slot);
    const years=yearsOf(data),shapeOf=r=>[...r.dilr].sort((a,b)=>b-a);
    const yearShape=year=>{
      const counts={};data.filter(r=>r.year===year).forEach(r=>{const k=shapeOf(r).join('|');counts[k]=(counts[k]||0)+1;});
      return Object.entries(counts).sort((a,b)=>b[1]-a[1]||(a[0]<b[0]?-1:1))[0][0].split('|').map(Number);
    };
    const l1=(a,b)=>{let s=0;for(let i=0;i<Math.max(a.length,b.length);i++)s+=Math.abs((a[i]||0)-(b[i]||0));return s;};
    const shapes=years.map(year=>({year,shape:yearShape(year),total:sum(yearShape(year))}));
    const folds=years.slice(1).map((year,k)=>{
      const predicted=shapes[k].shape,actual=data.filter(r=>r.year===year);
      return {year,predicted,predictedTotal:sum(predicted),
        totalCorrect:actual.filter(r=>sum(r.dilr)===sum(predicted)).length/actual.length,
        setSizeError:mean(actual.map(r=>l1(predicted,shapeOf(r)))),
        exactShape:actual.filter(r=>l1(predicted,shapeOf(r))===0).length/actual.length};
    });
    const changed=shapes.slice(1).filter((s,i)=>s.shape.join('|')!==shapes[i].shape.join('|')).length;
    const latest=shapes[shapes.length-1];
    return {years:shapes,folds,
      summary:folds.length?{totalCorrect:mean(folds.map(f=>f.totalCorrect)),exactShape:mean(folds.map(f=>f.exactShape)),setSizeError:mean(folds.map(f=>f.setSizeError))}:{},
      changes:{changed,transitions:Math.max(0,shapes.length-1)},
      forecast:latest?{targetYear:latest.year+1,shape:[...latest.shape],total:latest.total}:null};
  }
  // Every multiset of allowed set sizes that adds up to the section total, largest sets first.
  function setLayouts(total,sizes){
    if(!Number.isInteger(total)||total<1||!Array.isArray(sizes)||!sizes.length||sizes.some(s=>!Number.isInteger(s)||s<1))throw new Error('Layouts need a positive total and positive integer set sizes.');
    const sorted=[...new Set(sizes)].sort((a,b)=>b-a),out=[];
    const walk=(left,from,acc)=>{if(left===0){out.push([...acc]);return;}for(let i=from;i<sorted.length;i++)if(sorted[i]<=left){acc.push(sorted[i]);walk(left-sorted[i],i,acc);acc.pop();}};
    walk(total,0,[]);
    return out;
  }
  // An official mock against the real paper of the same year, beside "repeat last year".
  // A comparison of recorded counts only; nothing here feeds any forecast.
  function mockBacktest(rows,mock,year){
    validateRows(rows);
    const actual=rows.filter(r=>r.year===year);
    if(!mock||!actual.length)return null;
    const earlier=rows.filter(r=>r.year<year),priorYear=earlier.length?Math.max(...earlier.map(r=>r.year)):null;
    const prior=priorYear===null?[]:rows.filter(r=>r.year===priorYear);
    const meanOf=(list,key)=>{const v=list.filter(r=>Array.isArray(r[key])&&r[key].length);return v.length?vectorMean(v.map(r=>r[key])):null;};
    const mae=(a,b)=>mean(a.map((x,i)=>Math.abs(x-b[i])));
    const shape=a=>[...a].sort((x,y)=>y-x).join('|');
    const withSections=actual.filter(r=>Array.isArray(r.sections)),withDilr=actual.filter(r=>Array.isArray(r.dilr)),priorDilr=prior.find(r=>Array.isArray(r.dilr));
    const vaActual=meanOf(actual,'varc'),vaPrior=meanOf(prior,'varc'),titaActual=meanOf(actual,'tita');
    const qa={};
    for(const taxonomy of ['raw','broad'])qa[taxonomy]={
      mock:evaluate(project(mock.qa,taxonomy),actual,taxonomy).mae,
      mockAlternative:mock.qaAlternative?evaluate(project(mock.qaAlternative,taxonomy),actual,taxonomy).mae:null,
      lastYear:earlier.length?evaluate(fixedForecast(earlier,year,'last',taxonomy),actual,taxonomy).mae:null};
    return {year,priorYear,slots:actual.length,
      sectionsMatch:withSections.length?withSections.every(r=>r.sections.join('|')===mock.sections.join('|')):null,
      dilrLayoutMatch:withDilr.length?withDilr.every(r=>shape(r.dilr)===shape(mock.dilrSets)):null,
      lastYearDilrLayoutMatch:withDilr.length&&priorDilr?withDilr.every(r=>shape(r.dilr)===shape(priorDilr.dilr)):null,
      va:vaActual?{mock:mock.varc.slice(1),actual:vaActual.slice(1),mockMAE:mae(mock.varc.slice(1),vaActual.slice(1)),
        lastYearMAE:vaPrior?mae(vaPrior.slice(1),vaActual.slice(1)):null,equalSplitMAE:mae([2,2,2,2],vaActual.slice(1))}:null,
      tita:titaActual?{mock:[...mock.tita],actual:titaActual,difference:mock.tita.map((x,i)=>x-titaActual[i]),totalDifference:sum(mock.tita)-sum(titaActual)}:null,
      qa};
  }
  // TITA split per section: repeat the latest year that reports it. The range is descriptive only.
  function titaForecast(rows,supplementary=[]){
    validateRows(rows);
    const data=rows.filter(r=>Array.isArray(r.tita)&&r.tita.length===3);
    if(!data.length)return null;
    const years=yearsOf(data),basisYear=years[years.length-1],bySection=vectorMean(data.filter(r=>r.year===basisYear).map(r=>r.tita));
    const all=[...data,...supplementary.filter(r=>Array.isArray(r.tita)&&r.tita.length===3)],totals=all.map(r=>sum(r.tita));
    return {targetYear:basisYear+1,basisYear,bySection,total:sum(bySection),range:[Math.min(...totals),Math.max(...totals)],
      sectionRanges:[0,1,2].map(i=>[Math.min(...all.map(r=>r.tita[i])),Math.max(...all.map(r=>r.tita[i]))])};
  }
  // ---- Topic level (sub-topic groups). Rows: {year, slot, counts[]}; each row sums to its section size. ----
  const shareOf=r=>{const n=sum(r.counts);if(!(n>0))throw new Error('Topic row has no questions');return r.counts.map(c=>c/n);};
  const yearShares=(rows,y)=>vectorMean(rows.filter(r=>r.year===y).map(shareOf));
  const recencyWeight=(year,target,halfLife)=>Math.pow(2,(year-(target-1))/halfLife);
  // Recency-weighted count distribution per group, every shift rescaled to `total` questions.
  // A fractional rescaled count splits its weight between the two nearest whole counts.
  function topicDistributions(rows,targetYear,halfLife=2,total=22) {
    const k=rows[0].counts.length,dist=Array.from({length:k},()=>Array(total+1).fill(0));
    for(const y of [...new Set(rows.map(r=>r.year))]){
      const slots=rows.filter(r=>r.year===y),w=recencyWeight(y,targetYear,halfLife)/slots.length;
      for(const r of slots){const n=sum(r.counts);r.counts.forEach((c,i)=>{const x=c*total/n,lo=Math.floor(x+1e-9),f=x-lo;dist[i][lo]+=w*(1-f);if(f>1e-9)dist[i][lo+1]+=w*f;});}
    }
    return dist.map(d=>{const t=sum(d);return d.map(p=>p/t);});
  }
  // Whole-number allocation summing to `total` that maximises the expected number of exactly right groups.
  function bestAllocation(dist,total=22) {
    let best=new Map([[0,{value:0,allocation:[]}]]);
    for(const d of dist){
      const next=new Map();
      for(const [used,{value,allocation}] of best)for(let c=0;used+c<=total;c++){
        if(c>0&&d[c]===0)continue;
        const v=value+d[c],cur=next.get(used+c);
        if(!cur||v>cur.value+1e-12)next.set(used+c,{value:v,allocation:[...allocation,c]});
      }
      best=next;
    }
    const r=best.get(total);if(!r)throw new Error('No allocation reaches the total');
    return {allocation:r.allocation,expectedHits:r.value};
  }
  const quantile=(d,p)=>{let acc=0;for(let i=0;i<d.length;i++){acc+=d[i];if(acc>=p-1e-9)return i;}return d.length-1;};
  function topicForecast(rows,{targetYear,halfLife=2,total=22}={}) {
    const target=targetYear??Math.max(...rows.map(r=>r.year))+1,dist=topicDistributions(rows,target,halfLife,total),best=bestAllocation(dist,total);
    return {targetYear:target,halfLife,expectedHits:best.expectedHits,allocation:best.allocation,
      groups:dist.map((d,i)=>({mean:sum(d.map((p,c)=>p*c)),mostLikely:best.allocation[i],range:[quantile(d,.1),quantile(d,.9)],pAtLeastOne:1-d[0],dist:d}))};
  }
  // Rolling test: forecast each later year from all earlier years, for several recency half-lives.
  function topicBacktest(rows,halfLives=[0.5,1,2,3,5,Infinity],total=22) {
    const years=[...new Set(rows.map(r=>r.year))].sort((a,b)=>a-b),targets=years.slice(2),k=rows[0].counts.length;
    const errorFor=(pred,t)=>mean(rows.filter(r=>r.year===t).map(r=>mean(r.counts.map((c,i)=>Math.abs(pred[i]-c*total/sum(r.counts))))));
    const predict=(t,h)=>{const train=years.filter(y=>y<t),w=train.map(y=>recencyWeight(y,t,h)),tw=sum(w),m=train.map(y=>yearShares(rows,y));
      return Array.from({length:k},(_,i)=>total*sum(m.map((v,j)=>w[j]*v[i]))/tw);};
    const byHalfLife=halfLives.map(h=>{const errors=targets.map(t=>errorFor(predict(t,h),t));return {halfLife:h,errors,mae:mean(errors)};});
    const uniform=targets.map(t=>errorFor(Array(k).fill(total/k),t));
    const noise=[];
    for(const y of years){const slots=rows.filter(r=>r.year===y);if(slots.length<2)continue;
      for(const r of slots){const others=slots.filter(o=>o!==r),m=vectorMean(others.map(shareOf)).map(v=>v*total);noise.push(mean(r.counts.map((c,i)=>Math.abs(m[i]-c*total/sum(r.counts)))));}}
    return {targets,byHalfLife,uniform:{errors:uniform,mae:mean(uniform)},noiseFloor:mean(noise)};
  }
  // 2IIM rows carry 'GROUP:T' or 'GROUP:M' per question. Returns per-row group shares and type tallies.
  function taggedRows(rows,groups) {
    return rows.map(r=>{const items=r.items.trim().split(/\s+/).map(x=>{const [g,t]=x.split(':');if(!groups.includes(g)||!['T','M'].includes(t))throw new Error('Bad tag '+x);return {g,t};});
      return {...r,n:items.length,shares:groups.map(g=>items.filter(i=>i.g===g).length/items.length),items};});
  }
  // TITA share by group with light smoothing (two pseudo-questions at the overall rate).
  function titaTendency(rows,groups,pseudo=2) {
    const tagged=taggedRows(rows,groups),all=tagged.flatMap(r=>r.items),overall=all.filter(i=>i.t==='T').length/all.length;
    return {overall,questions:all.length,groups:groups.map(g=>{const q=all.filter(i=>i.g===g),t=q.filter(i=>i.t==='T').length;return {group:g,questions:q.length,tita:t,rate:(t+pseudo*overall)/(q.length+pseudo)};})};
  }
  // Does a convening IIM repeat its previous turn's topic tilt? Tilts are measured inside each provider's own rows.
  function setterRepeatTest(earlyRows,lateRows,pairs) {
    const yearsOf=rs=>[...new Set(rs.map(r=>r.year))];
    const tilt=(rs,y)=>{const others=yearsOf(rs).filter(v=>v!==y),base=vectorMean(others.map(v=>vectorMean(rs.filter(r=>r.year===v).map(r=>r.shares))));
      return vectorMean(rs.filter(r=>r.year===y).map(r=>r.shares)).map((v,i)=>v-base[i]);};
    const pearson=(a,b)=>{const ma=mean(a),mb=mean(b),cov=sum(a.map((x,i)=>(x-ma)*(b[i]-mb)));return cov/Math.sqrt(sum(a.map(x=>(x-ma)**2))*sum(b.map(x=>(x-mb)**2)));};
    let num=0,den=0;
    const results=pairs.map(p=>{const e=tilt(earlyRows,p.earlier),l=tilt(lateRows,p.later);num+=sum(e.map((x,i)=>x*l[i]));den+=sum(e.map(x=>x*x));return {...p,r:pearson(e,l)};});
    return {pairs:results,pooledSlope:num/den,meanR:mean(results.map(r=>r.r))};
  }
  global.CATForecastEngine={methods,labels,validateRows,project,annualRows,fixedForecast,evaluate,roundAllocation,chooseMethod,runStudy,
    dampedTrend,trendExperiment,withinYearNoise,setterSwing,runVARCStudy,runDILRStudy,roundTo,
    countDistribution,modalAllocation,modalExperiment,setLayouts,mockBacktest,titaForecast,
    topicDistributions,bestAllocation,topicForecast,topicBacktest,taggedRows,titaTendency,setterRepeatTest};
})(window);
