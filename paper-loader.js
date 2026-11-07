(async function(){
  'use strict';
  const requested=new URLSearchParams(location.search).get('paper')||'01';
  const number=/^\d{1,2}$/.test(requested)?String(Number(requested)).padStart(2,'0'):'';
  const paper=window.CAT_PAPER_CATALOG.find(p=>p.number===number);
  const app=document.getElementById('app');
  if(!paper){app.innerHTML='<h1>Paper not found.</h1><p>Select a paper from the <a href="papers.html">five-paper library</a>.</p>';return;}
  window.CAT_SELECTED_PAPER=paper;
  document.title=`CAT 2026 · Paper ${paper.number} · ${paper.title}`;
  document.querySelector('.edition').textContent=`PAPER ${paper.number} / ORIGINAL PRACTICE`;
  document.getElementById('footerPaperPdf').href=paper.paperPdf;
  document.getElementById('footerSolutionsPdf').href=paper.solutionsPdf;
  const load=src=>new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src=src;script.onload=resolve;
    script.onerror=()=>reject(new Error('Unable to load '+src));document.body.appendChild(script);
  });
  try{
    await Promise.all(paper.files.map(load));
    const names=['VARC','DILR','QA'],sizes=[24,22,22];
    if(names.some((s,i)=>!Array.isArray(window['CAT2026_'+s])||window['CAT2026_'+s].length!==sizes[i]))throw new Error('Incomplete section data.');
    await load('prediction.js');
  }catch(error){
    app.replaceChildren();const h=document.createElement('h1');h.textContent=`Paper ${paper.number} could not load.`;
    const p=document.createElement('p');p.textContent='One or more paper files are unavailable. Your existing saved attempts have not been changed.';
    const a=document.createElement('a');a.href='papers.html';a.textContent='Return to the paper library →';app.append(h,p,a);
    console.error(error);
  }
})();
