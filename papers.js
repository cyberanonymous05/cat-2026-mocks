(function(){
  'use strict';
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function progress(p){
    try{
      const s=JSON.parse(localStorage.getItem(p.storageKey)||'null');
      if(s?.paper!==p.paperId||!['active','complete'].includes(s.stage)||!s.answers)return {state:'not-started',label:'Not started'};
      const count=Math.min(68,Object.values(s.answers).filter(x=>String(x??'').trim()!=='').length);
      if(s.stage==='complete')return {state:'complete',label:'Completed'};
      const expired=s.mode==='exam'&&Number.isFinite(s.deadline)&&Number.isInteger(s.sectionIndex)&&Date.now()>=s.deadline+(2-s.sectionIndex)*40*60*1000;
      return {state:'active',label:expired?'Time ended · open result':`${count}/68 answered`};
    }catch{return {state:'not-started',label:'Not started'};}
  }
  function render(){
    const filter=document.getElementById('paperFilter').value;
    const papers=window.CAT_PAPER_CATALOG.map(p=>({...p,progress:progress(p)})).filter(p=>filter==='all'||p.progress.state===filter);
    document.getElementById('paperGrid').innerHTML=papers.map(p=>`<article class="library-card" data-paper="${p.number}"><div class="library-card-top"><span class="paper-number">${p.number}</span><span class="attempt-badge ${p.progress.state}">${esc(p.progress.label)}</span></div><p class="paper-focus">${esc(p.focus)} · ${esc(p.level)} practice</p><h3>${esc(p.title)}</h3><p class="paper-note">${esc(p.note)}</p><p class="paper-mix"><b>68 questions · 120 minutes · 204 marks</b><br>24 VARC / 22 DILR / 22 QA<br>QA study mix: ${p.qa.join(' / ')}<br>Arithmetic / Algebra / Geometry / Numbers / Modern Math</p><div class="actions"><a class="button primary" href="${p.href}">${p.progress.state==='complete'?'Open saved result':p.progress.state==='active'?'Continue paper':'Open paper'} →</a><a class="button" href="${p.href}&view=paper">Read paper</a><a class="button" href="${p.href}&view=solutions">Worked solutions</a></div><div class="pdf-links"><a href="${p.paperPdf}" download>Question PDF ↓</a><a href="${p.solutionsPdf}" download>Solutions PDF ↓</a></div></article>`).join('')||'<p class="empty-library">No papers in this group yet. Change the filter to see the full collection.</p>';
  }
  document.getElementById('paperFilter').addEventListener('change',render);
  window.addEventListener('pageshow',render);window.addEventListener('storage',render);render();
})();
