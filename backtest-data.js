/* Retrospective dataset assembled 2026-09-07. Not a prediction published in 2024.
   The forecast function receives only training data. Actual values are used
   exclusively by evaluation and display. No rule is selected against 2025. */
window.CAT_BACKTEST = {
  version: '2024-mean-to-2025-v1',
  assembled: '2026-09-07',
  cutoffYear: 2024,
  targetYear: 2025,
  training: {
    qaFamilies: ['Arithmetic','Algebra','Geometry','Numbers','Modern Math'],
    qaRows: [
      {year:2024,slot:1,counts:[8,7,3,1,3],source:'https://www.imsindia.com/blog/cat/cat-exam-analysis-2024/'},
      {year:2024,slot:2,counts:[8,5,3,3,3],source:'https://www.imsindia.com/blog/cat/cat-2024-slot-2-analysis/'}
    ],
    sectionLabels: ['VARC','DILR','QA'], sectionCounts: [24,22,22],
    varcLabels: ['RC','Para summary','Sentence placement','Odd sentence','Parajumbles'], varcCounts: [16,3,3,2,0],
    dilrSizes: [5,5,4,4,4],
    structureSource: 'https://www.imsindia.com/blog/cat/cat-exam-analysis-2024/',
    varcSource: 'https://www.imsindia.com/blog/cat/cat-2024-slot-2-analysis/'
  },
  actual: [
    {year:2025,slot:1,qa:[8,4,3,3,4],sections:[24,22,22],varc:[16,2,2,2,2],dilr:[5,5,4,4,4],source:'https://www.imsindia.com/cat-overall-analysis-2025/', alternativeQA:[8,5,3,3,3], alternativeSource:'https://www.imsindia.com/cat-2025-slot-1-analysis/'},
    {year:2025,slot:2,qa:[8,5,3,2,4],sections:[24,22,22],varc:[16,2,2,2,2],dilr:[5,5,4,4,4],source:'https://www.imsindia.com/cat-2025-slot-2-analysis/'},
    {year:2025,slot:3,qa:[7,4,3,4,4],sections:[24,22,22],varc:[16,2,2,2,2],dilr:[5,5,4,4,4],source:'https://www.imsindia.com/cat-2025-slot-3-analysis/'}
  ]
};
window.buildHistoricalForecast = function(training) {
  if(training.qaRows.some(r=>r.year>2024))throw new Error('Training contains data after the cutoff.');
  const qa=training.qaFamilies.map((_,i)=>training.qaRows.reduce((s,r)=>s+r.counts[i],0)/training.qaRows.length);
  return {qa,sections:[...training.sectionCounts],varc:[...training.varcCounts],dilr:[...training.dilrSizes]};
};
window.evaluateHistoricalForecast = function(prediction,actual) {
  const compare = (key) => {
    const predicted=actual.flatMap(()=>prediction[key]),observed=actual.flatMap(r=>r[key]);
    const total=observed.reduce((s,n)=>s+n,0);
    const common=observed.reduce((s,n,i)=>s+Math.min(n,predicted[i]),0);
    const absolute=observed.reduce((s,n,i)=>s+Math.abs(n-predicted[i]),0);
    const exact=observed.filter((n,i)=>n===predicted[i]).length;
    return {common,total,overlap:100*common/total,mae:absolute/observed.length,exact,cells:observed.length,absolute};
  };
  return {qa:compare('qa'),varc:compare('varc'),sections:compare('sections'),dilr:compare('dilr')};
};
