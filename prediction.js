(() => {
  'use strict';
  const app = document.getElementById('app');
  const bank = [...(window.CAT2026_VARC || []), ...(window.CAT2026_DILR || []), ...(window.CAT2026_QA || [])];
  const config = window.CAT_SELECTED_PAPER || window.CAT_PAPER_CATALOG[0];
  const NUMBER = config.number;
  const sections = ['VARC', 'DILR', 'QA'];
  const sectionNames = ['Verbal Ability and Reading Comprehension', 'Data Interpretation and Logical Reasoning', 'Quantitative Ability'];
  const starts = [0, 24, 46];
  const lengths = [24, 22, 22];
  const KEY = config.storageKey;
  const PAPER = config.paperId;
  const SECTION_MS = 40 * 60 * 1000;
  const STATUS_TEXT = {a:'Answered', na:'Not Answered', nv:'Not Visited', m:'Marked for Review', am:'Answered & Marked for Review'};
  let state = null, view = 'home', interval = null, pendingConfirmation = null;
  let storageAvailable = true, storedSnapshot = null;
  // Exam-screen state that is never persisted, as on the real test software: an unsaved
  // choice (saved only by "Save & Next" or "Mark for Review & Next"), an open panel, display options.
  let draft = null, overlay = null, paletteHidden = false, magnify = 0, lastPassage = {group:null, scroll:0};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sum = a => a.reduce((x,y)=>x+y,0);
  const answered = (q, attempt=state) => attempt && Object.prototype.hasOwnProperty.call(attempt.answers,q.id) && String(attempt.answers[q.id]).trim() !== '';
  const answerLabel = q => q.type === 'MCQ' ? `${String.fromCharCode(65+q.answer)}. ${q.options[q.answer]}` : String(q.answer);
  const userLabel = q => !answered(q) ? 'Unanswered' : q.type === 'MCQ' ? `${String.fromCharCode(65+state.answers[q.id])}. ${q.options[state.answers[q.id]]}` : String(state.answers[q.id]);
  function isCorrect(q, attempt=state) {
    if (!answered(q,attempt)) return false;
    const value = attempt.answers[q.id];
    if (q.type === 'MCQ') return value === q.answer;
    const raw = String(value).trim();
    return /^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw) && Number.isFinite(Number(raw)) && Number(raw) === Number(q.answer);
  }
  function mark(q, attempt=state) { return !answered(q,attempt) ? 0 : isCorrect(q,attempt) ? 3 : q.type === 'MCQ' ? -1 : 0; }
  function getSummary(attempt=state) {
    return sections.map(section => {
      const qs=bank.filter(q=>q.section===section), attempted=qs.filter(q=>answered(q,attempt)).length;
      const correct=qs.filter(q=>isCorrect(q,attempt)).length;
      return {section, attempted, correct, wrong:attempted-correct, unattempted:qs.length-attempted, score:sum(qs.map(q=>mark(q,attempt))), maximum:qs.length*3};
    });
  }
  // Data tables in DILR sets are stored as "a | b | c" lines; show them as real tables.
  function rich(text) {
    const out=[];
    for (const block of String(text ?? '').split(/\n{2,}/)) {
      const lines=block.split('\n');let para=[],i=0;
      const flush=()=>{if(para.length){out.push(`<p>${para.map(esc).join('<br>')}</p>`);para=[];}};
      while(i<lines.length){
        if(lines[i].includes(' | ')){
          let j=i;while(j<lines.length&&lines[j].includes(' | '))j++;
          if(j-i>=2){
            flush();const [head,...rows]=lines.slice(i,j).map(l=>l.split(' | ').map(c=>c.trim()));
            out.push(`<div class="cbt-table-wrap"><table class="cbt-table"><thead><tr>${head.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
            i=j;continue;
          }
        }
        para.push(lines[i]);i++;
      }
      flush();
    }
    return out.join('');
  }
  function decodeAttempt(raw) {
    try {
      const parsed=JSON.parse(raw||'null');
      if (!parsed || parsed.paper!==PAPER || !['exam','practice'].includes(parsed.mode) || !['active','complete'].includes(parsed.stage) || !Number.isInteger(parsed.current) || parsed.current<0 || parsed.current>=bank.length || !Number.isInteger(parsed.sectionIndex) || parsed.sectionIndex<0 || parsed.sectionIndex>2 || !parsed.answers || !parsed.flags || !parsed.visited || !parsed.times) return null;
      if(parsed.mode==='exam' && (!Number.isFinite(parsed.deadline)||!Number.isFinite(parsed.lastTouch))) return null;
      parsed.answers=Object.fromEntries(bank.filter(q=>Object.prototype.hasOwnProperty.call(parsed.answers,q.id)).map(q=>[q.id,parsed.answers[q.id]]).filter(([id,v])=>{const q=bank.find(x=>x.id===id);return q.type==='MCQ'?Number.isInteger(v)&&v>=0&&v<4:typeof v==='string'&&v.length<=32}));
      return parsed;
    } catch { return null; }
  }
  function adoptSaved(raw) { storedSnapshot=raw;state=decodeAttempt(raw); }
  function restore() {
    try { adoptSaved(localStorage.getItem(KEY)); }
    catch { storageAvailable=false; }
  }
  function storageConflict(raw) {
    adoptSaved(raw);clearInterval(interval);draft=null;overlay=null;
    // A competing editor yields control; reader editions remain read-only.
    if(view!=='reader'&&view!=='solutions'){view='home';renderHome();}
    pendingConfirmation=null;document.getElementById('confirmDialog').close();
    toast('This paper changed in another tab. The saved version was loaded; resume from the desk to continue here.');
    return false;
  }
  function refreshSaved() {
    try {
      const raw=localStorage.getItem(KEY);
      if(raw!==storedSnapshot)return storageConflict(raw);
    } catch { storageAvailable=false; }
    return true;
  }
  function persist(replace=false) {
    // Reading a paper, viewing solutions or leaving a desk must never save a snapshot.
    if(!state||view!=='test')return true;
    try {
      const raw=localStorage.getItem(KEY);
      if(!replace&&raw!==storedSnapshot)return storageConflict(raw);
      const next=JSON.stringify(state);
      if(next!==raw)localStorage.setItem(KEY,next);
      storedSnapshot=next;
    } catch { storageAvailable=false; }
    return true;
  }
  function toast(text) { const el=document.getElementById('toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3500); }
  function confirmAction(title, message, label, callback) {
    document.getElementById('confirmTitle').textContent=title;
    document.getElementById('confirmText').textContent=message;
    document.getElementById('acceptConfirm').textContent=label;
    pendingConfirmation=callback;document.getElementById('confirmDialog').showModal();
  }
  function examChrome(on) { document.body.classList.toggle('cbt-mode', on); if(!on) Calc.hide(); }
  function touch(now=Date.now()) {
    if(!state||state.stage!=='active') return;
    const q=bank[state.current];
    const end=state.mode==='exam'?Math.min(now,state.deadline):now;
    if(q&&state.visited[q.id]&&end>state.lastTouch) state.times[q.id]=(Number(state.times[q.id])||0)+end-state.lastTouch;
    state.lastTouch=now;
  }
  function syncClock() {
    if(!state||state.stage!=='active'||state.mode!=='exam')return false;
    const now=Date.now();touch(now);let changed=false;
    while(state.stage==='active' && now>=state.deadline) {
      changed=true;
      if(state.sectionIndex===2){state.stage='complete';state.completedAt=state.deadline;break;}
      state.sectionIndex++;state.current=starts[state.sectionIndex];state.deadline+=SECTION_MS;
    }
    if(changed) {
      // Time ends a section exactly as on the test software: an unsaved choice is not counted.
      draft=null;overlay=null;
      if(!persist())return true;
      if(view==='test') {
        if(state.stage==='complete') renderResults();
        else {state.visited[bank[state.current].id]=true;renderTest();toast(`Time is up. ${sections[state.sectionIndex]} has started.`);}
      }
    }
    return changed;
  }
  function begin(mode) {
    refreshSaved();
    const go=(replace=false)=>{
      clearInterval(interval);draft=null;overlay=null;
      const now=Date.now();state={paper:PAPER,mode,stage:'active',sectionIndex:0,current:0,answers:{},flags:{},visited:{V01:true},times:{},startedAt:now,lastTouch:now,deadline:now+SECTION_MS};
      view='test';if(!persist(replace))return;renderTest();startTicker();
    };
    if(state)confirmAction('Start a fresh attempt?', `This replaces only the saved attempt for Paper ${NUMBER}. Other papers are unchanged. You can export a completed result before replacing it.`, 'Start fresh',()=>go(true));else go();
  }
  function startTicker() { clearInterval(interval); interval=setInterval(()=>{if(state?.stage==='active'&&view==='test'){syncClock();if(view==='test'){updateClock();persist();}}},1000); }
  function updateClock() {
    const el=document.getElementById('sectionClock');if(!el||!state)return;
    if(state.mode==='practice'){el.textContent='Untimed';return;}
    const s=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));
    el.textContent=`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
    el.classList.toggle('low',s<=300);
  }
  function statusOf(q) {
    const a=answered(q), f=!!state.flags[q.id];
    return a&&f?'am':f?'m':a?'a':state.visited[q.id]?'na':'nv';
  }
  function sectionCounts(i) {
    const c={a:0,na:0,nv:0,m:0,am:0};
    bank.slice(starts[i],starts[i]+lengths[i]).forEach(q=>c[statusOf(q)]++);
    return c;
  }
  function renderHome() {
    if(view==='test'){touch();if(!persist())return;}view='home';draft=null;overlay=null;examChrome(false);const model=window.catForecast();
    const rows=window.CAT_EVIDENCE.rows;
    app.innerHTML=`${state?`<div class="resume-card"><div><b>${state.stage==='active'?'Your attempt is saved':'Your result is saved'}</b><p>${state.mode==='exam'?'Timed exam':'Untimed practice'} · ${bank.filter(q=>answered(q)).length}/68 answered${state.stage==='active'&&state.mode==='exam'?' · The exam clock continues while you are away.':''}</p></div><button class="button primary" data-action="resume">${state.stage==='complete'?'Review result':'Resume attempt'} →</button></div>`:''}
      <div class="intro-grid"><div><p class="eyebrow">CAT 2026 / Prediction paper ${NUMBER} · ${esc(config.title)}</p><h1>The full paper.<br><em>Make your attempt.</em></h1><p class="intro-text">68 original questions built around the forecast CAT 2026 structure, on an exam screen laid out like the computer-based test: section tabs, Time Left, a colour-coded question palette, Save & Next, Mark for Review & Next, a Question Paper view and an on-screen calculator.</p><div class="actions"><button class="button primary" data-action="exam">Start 120-minute exam →</button><button class="button subtle" data-action="practice">Practise without timer</button></div><div class="actions"><a href="${config.paperPdf}" class="button" download>↓ Question paper PDF</a><a href="${config.solutionsPdf}" class="button" download>↓ Solutions PDF</a></div><p class="cover-disclaimer">An original prediction mock with original questions. The actual CAT 2026 questions are unreleased; no question-match rate or percentile is claimed. The exam screen is an independent practice interface, not the official software.</p></div><aside class="cover-card"><p class="eyebrow">COMPLETE / ORIGINAL / WORKED</p><strong class="big-number">68</strong><p>questions · 204 possible marks</p><div class="cover-lines"><div><span>Verbal Ability & RC</span><b>24 / 40 min</b></div><div><span>Data Interpretation & LR</span><b>22 / 40 min</b></div><div><span>Quantitative Ability</span><b>22 / 40 min</b></div></div><p style="margin-top:20px;margin-bottom:0">Correct +3 · Wrong MCQ −1<br>Wrong TITA 0 · Unanswered 0<br>TITA answers are whole numbers</p></aside></div>
      <div class="paper-switcher"><a href="papers.html">← All ${window.CAT_PAPER_CATALOG.length} papers</a><label>Choose another paper <select id="paperPicker">${window.CAT_PAPER_CATALOG.map(p=>`<option value="${p.number}" ${p.number===NUMBER?'selected':''}>${p.number} · ${esc(p.title)}</option>`).join('')}</select></label></div>
      <div class="stat-strip"><div><strong>4</strong><span>full original RC passages</span></div><div><strong>5</strong><span>connected DILR sets</span></div><div><strong>68</strong><span>worked explanations</span></div><div><strong>40′</strong><span>locked sections in exam mode</span></div></div>
      <div class="block-head"><div><p class="eyebrow">Why this paper has this shape</p><h2>The strongest signals determine the structure.</h2></div><a href="validation.html#officialMock">See the official-mock check ↗</a></div>
      <div class="basis-grid"><article class="basis-card"><span class="pill VARC">VARC · 24</span><h3>16 RC + 8 Verbal Ability</h3><p>Four passages of four questions each, which the official mock's instructions also state. The other eight are two each of summaries, paragraph completion or sentence placement, parajumbles and odd-sentence questions, the reported 2025 mix.</p></article><article class="basis-card"><span class="pill DILR">DILR · 22</span><h3>Five sets: 5 / 5 / 4 / 4 / 4</h3><p>The official mock says every DILR set has four or five questions. With 22 questions that allows only two sets of five and three of four. Contexts and logical models are authored practice choices, not predictions of the official sets.</p></article><article class="basis-card"><span class="pill QA">QA · 22</span><h3>Topic counts inside the forecast</h3><p>${config.qa[0]} Arithmetic, ${config.qa[1]} Algebra, ${config.qa[2]} Geometry, ${config.qa[3]} Numbers and ${config.qa[4]} Modern Math. ${esc(config.basis||'One plausible practice scenario within the observed ranges.')} <a href="topics.html">See the topic forecast</a>. Topic boundaries differ across analysts; difficulty labels are editorial.</p></article></div>
      <section class="section-block"><div class="block-head"><div><p class="eyebrow">Traceable evidence / chronological tests</p><h2>How many questions might each QA family get?</h2><p class="fine">The same model powers this forecast and the multi-year evidence lab. Observed ranges are not confidence intervals for 2026.</p></div><a class="button" href="validation.html">Audit methods, years & errors →</a></div><div class="forecast-table"><table><thead><tr><th>Source QA family</th><th>Model count /22</th><th>Observed source range</th></tr></thead><tbody>${window.CAT_EVIDENCE.families.map((f,i)=>`<tr><td>${f}</td><td>${model.means[i].toFixed(2)}<div class="mini-bar"><i style="width:${model.means[i]/22*100}%"></i></div></td><td>${model.spread[i].join('–')}</td></tr>`).join('')}</tbody></table></div>
      <p class="data-note">${esc(window.CAT_EVIDENCE.convention)}</p><details class="evidence"><summary>Inspect source rows, model selection and limitations</summary><p>Sample: ${model.study.questions} reported QA allocations in ${model.study.slots} complete slots across ${model.study.years.length} exam years (${model.study.years.join(', ')}). The ${model.study.folds.length} evaluation targets use earlier exam years only. Slots are averaged within each year before applying a declared weighting rule.</p><p>2026 method: <b>${window.CATForecastEngine.methods.find(m=>m.id===model.study.forecast.selectedMethod).name}</b>, selected using completed historical tests. The separately evaluated past-only selector has mean absolute error ${model.selectorMAE.toFixed(2)} questions per reported family; the last-year baseline has ${model.baselineMAE.toFixed(2)}. This is retrospective count validation, not a probability of predicting question text.</p><div class="forecast-table"><table><thead><tr><th>Source</th>${window.CAT_EVIDENCE.families.map(f=>`<th>${f}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><td><a href="${r.source}" target="_blank" rel="noreferrer">${r.year} S${r.slot} ↗</a></td>${r.counts.map(n=>`<td>${n}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p><b>Classification conflict:</b> 2025 Slot 1’s overall and slot-specific tables disagree on Algebra/Modern Math. The evidence lab lets you recompute the study with the alternative and with those two families merged.</p><p>${esc(window.CAT_EVIDENCE.exclusions)}</p><p><b>Authorship:</b> a public CAT convenor name does not identify the authors of individual exam questions. No professor-specialisation signal is used in this mock.</p></details></section>
      <div class="download-band"><div><h2>Prefer paper and a rough notebook?</h2><p>Read all 68 questions online or open the separate solutions edition.</p></div><div class="actions"><button class="button accent" data-action="reader">Read question paper →</button><button class="button accent" data-action="solutions">Read worked solutions →</button></div></div>
      <p class="data-note">Exam mode runs VARC → DILR → QA for 40 minutes each and moves on automatically when time ends; you may also submit a section early. It cannot be paused, and closing this tab does not stop the clock. Practice mode is untimed and lets you switch sections. As on the test software, a choice is saved only when you press Save & Next or Mark for Review & Next. An on-screen calculator with memory, square root, percentage and reciprocal keys is built in. Saved answers stay in this browser when storage is available. No login is required.</p>${!storageAvailable?'<p class="storage-warning">Browser storage is unavailable. Keep this tab open; answers cannot be restored after a reload.</p>':''}`;
  }
  const avatar='<svg class="cbt-avatar" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#dbe6f0"/><circle cx="32" cy="24" r="12" fill="#8197ad"/><path d="M9 60c2-14 11-21 23-21s21 7 23 21z" fill="#8197ad"/></svg>';
  const calcIcon='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" fill="#fff" stroke="#6b4a12" stroke-width="1.5"/><rect x="7" y="5" width="10" height="4" fill="#6b4a12"/><g fill="#6b4a12"><circle cx="8.5" cy="13" r="1.2"/><circle cx="12" cy="13" r="1.2"/><circle cx="15.5" cy="13" r="1.2"/><circle cx="8.5" cy="17" r="1.2"/><circle cx="12" cy="17" r="1.2"/><circle cx="15.5" cy="17" r="1.2"/></g></svg>';
  function frame(inner) {
    return `<div class="cbt ${paletteHidden?'palette-hidden':''} zoom-${magnify}">
      <div class="cbt-brand"><div class="cbt-brand-name"><b>CAT 2026</b> · Prediction Mock ${NUMBER}</div><div class="cbt-brand-note">Independent practice interface · original questions · not the official CAT software</div></div>
      <div class="cbt-bar"><span class="cbt-exam">CAT 2026 Prediction Mock ${NUMBER} · ${state.mode==='exam'?'Timed exam':'Practice, untimed'}</span><div class="cbt-links"><button type="button" data-action="magnify" title="Change text size">Screen Magnifier</button><button type="button" data-action="instructions"><i class="ico i-info" aria-hidden="true">i</i>Instructions</button><button type="button" data-action="questionPaper"><i class="ico i-paper" aria-hidden="true">≡</i>Question Paper</button><button type="button" class="cbt-exit" data-action="home">Exit to desk</button></div></div>
      ${inner}
      <div class="cbt-foot">Original practice questions · Screen layout modelled on computer-based CAT practice tests</div></div>`;
  }
  function summaryTable(i) {
    const c=sectionCounts(i);
    return `<div class="cbt-table-wrap"><table class="cbt-sum"><thead><tr><th>Section Name</th><th>No. of Questions</th><th>Answered</th><th>Not Answered</th><th>Marked for Review</th><th>Answered & Marked for Review (will be evaluated)</th><th>Not Visited</th></tr></thead><tbody><tr><td>${sections[i]}</td><td>${lengths[i]}</td><td>${c.a}</td><td>${c.na}</td><td>${c.m}</td><td>${c.am}</td><td>${c.nv}</td></tr></tbody></table></div>`;
  }
  function summaryScreen() {
    const si=state.sectionIndex, exam=state.mode==='exam', last=si===2;
    const tables=exam
      ? [`<h3>${sections[si]} <small>(current section)</small></h3>${summaryTable(si)}`,
         ...[0,1,2].filter(i=>i<si).map(i=>`<h3>${sections[i]} <small>(submitted · cannot be viewed or edited)</small></h3>${summaryTable(i)}`),
         ...[0,1,2].filter(i=>i>si).map(i=>`<p class="cbt-yet"><b>${sections[i]}</b> (yet to attempt)</p>`)].join('')
      : [0,1,2].map(i=>`<h3>${sections[i]}</h3>${summaryTable(i)}`).join('');
    const target=exam?(last?'the QA section and end the test':`the ${sections[si]} section`):'the entire paper';
    const ask=overlay==='summary'
      ? `<p>Do you want to submit ${target}? Choose Yes to continue or No to go back.${exam?` After submitting, you cannot return to ${sections[si]}.`:''} Unsaved choices are not counted.</p><div class="cbt-ask-buttons"><button type="button" class="cbt-btn" data-action="summaryYes">Yes</button><button type="button" class="cbt-btn" data-action="summaryNo">No</button></div>`
      : `<p>Are you sure you want to submit ${target}?</p><div class="cbt-ask-buttons"><button type="button" class="cbt-btn primary" data-action="confirmYes">Yes</button><button type="button" class="cbt-btn" data-action="confirmNo">No</button></div>`;
    return `<div class="cbt-summary"><div class="cbt-summary-time"><span>${exam?'Time Left':'Practice'} : <b id="sectionClock"></b></span></div>${overlay==='summary'?`<h2>Exam Summary</h2>${tables}`:''}<div class="cbt-ask">${ask}</div></div>`;
  }
  function instructionsHtml() {
    return `<ol class="cbt-instr">
      <li>The paper has three sections in a fixed order: VARC (24 questions), DILR (22) and QA (22). Each section has 40 minutes; the clock at the top right shows the time left in the current section.</li>
      <li>When the 40 minutes end, the section is submitted automatically and the next one starts. In this practice screen you may also submit a section early with <b>Submit</b>; in the real CAT the next section opens only when the time is over.</li>
      <li>Marking: a correct answer earns 3 marks. A wrong MCQ costs 1 mark. A wrong or unanswered TITA (type-in-the-answer) question costs nothing.</li>
      <li>Every MCQ has four options and exactly one correct answer. For a TITA question, type a whole number with the keypad, such as 50 (not 50.0 or 050). For a parajumble, key in the four sentence numbers in order, such as 2413.</li>
      <li>A choice is saved only when you press <b>Save & Next</b> or <b>Mark for Review & Next</b>. If you jump to another question from the palette without saving, the choice on the current question is lost.</li>
      <li><b>Mark for Review & Next</b> saves the choice and flags the question. Answered questions that are marked for review are still evaluated.</li>
      <li><b>Clear Response</b> removes the saved answer of the current question.</li>
      <li>Palette colours: <span class="qs st-nv" aria-hidden="true"><span>1</span></span> not visited, <span class="qs st-na" aria-hidden="true"><span>2</span></span> visited but not answered, <span class="qs st-a" aria-hidden="true"><span>3</span></span> answered, <span class="qs st-m" aria-hidden="true"><span>4</span></span> marked for review without an answer, <span class="qs st-am" aria-hidden="true"><span>5</span></span> answered and marked for review.</li>
      <li><b>Question Paper</b> lists every question of the current section; the clock keeps running while it is open.</li>
      <li>The calculator button opens an on-screen calculator. Drag its title bar to move it. It supports memory keys, square root, percentage and reciprocal.</li></ol>`;
  }
  function questionPaperHtml() {
    const si=state.sectionIndex, qs=bank.slice(starts[si],starts[si]+lengths[si]);let lastGroup=null;
    return qs.map((q,i)=>{
      let context='';
      if(q.passage&&q.groupId!==lastGroup){lastGroup=q.groupId;context=`<details class="cbt-qp-passage"><summary>${esc(q.groupTitle||'Passage')} · show text</summary>${rich(q.passage)}</details>`;}
      return `${context}<div class="cbt-qp-item"><b>Q.${i+1})</b><div>${rich(q.question)}${q.type==='MCQ'?`<ol type="A" class="cbt-qp-opts">${q.options.map(o=>`<li>${esc(o)}</li>`).join('')}</ol>`:''}<p class="cbt-qp-marks">Marks for correct answer: <b class="pos">3</b> ; Negative Marks: <b class="neg">${q.type==='MCQ'?1:0}</b></p></div></div>`;
    }).join('');
  }
  function modal() {
    if(overlay!=='paper'&&overlay!=='instructions')return '';
    const paper=overlay==='paper';
    return `<div class="cbt-modal" role="dialog" aria-modal="true" aria-labelledby="cbtModalTitle"><div class="cbt-modal-head"><b id="cbtModalTitle">${paper?'Question Paper':'Instructions'}</b><button type="button" data-action="closeOverlay">Close ✕</button></div>${paper?'<p class="cbt-modal-note">The timer keeps running while you read this question paper. Close it to return to answering.</p>':''}<div class="cbt-modal-body">${paper?questionPaperHtml():instructionsHtml()}</div></div>`;
  }
  function questionBody(q) {
    if(q.type==='MCQ')return `<div class="cbt-options" role="group" aria-label="Answer choices">${q.options.map((option,i)=>`<button type="button" class="cbt-option" data-option="${i}" aria-pressed="${draft.value===i}"><span class="radio" aria-hidden="true"></span><span class="opt-text">${esc(option)}</span></button>`).join('')}</div>`;
    const keys=['7','8','9','4','5','6','1','2','3','0','.','-'];
    return `<div class="cbt-tita"><label class="cbt-tita-label" for="titaAnswer">Your answer</label><input id="titaAnswer" inputmode="numeric" maxlength="16" autocomplete="off" spellcheck="false" value="${esc(draft.value??'')}"><div class="cbt-keypad" role="group" aria-label="On-screen keypad"><button type="button" class="wide" data-key="back">Backspace</button>${keys.map(k=>`<button type="button" data-key="${k}">${k}</button>`).join('')}<div class="arrows"><button type="button" data-key="left" aria-label="Move cursor left">←</button><button type="button" data-key="right" aria-label="Move cursor right">→</button></div><button type="button" class="wide" data-key="clear">Clear All</button></div><p class="cbt-hint">Type a whole number, such as 50 (not 50.0 or 050).${q.section==='VARC'&&/sequence|order/i.test(q.question)?' Key in the four sentence numbers in order.':''}</p></div>`;
  }
  function renderTest() {
    if(!state||state.stage!=='active')return renderResults();
    view='test';examChrome(true);
    const q=bank[state.current];state.visited[q.id]=true;
    if(!draft||draft.id!==q.id)draft={id:q.id,value:answered(q)?state.answers[q.id]:(q.type==='MCQ'?null:'')};
    const si=state.sectionIndex,start=starts[si],subset=bank.slice(start,start+lengths[si]),counts=sectionCounts(si);
    const oldPassage=app.querySelector('.cbt-passage');
    if(oldPassage)lastPassage={group:oldPassage.dataset.group,scroll:oldPassage.scrollTop};
    const tabs=sections.map((s,i)=>{const c=sectionCounts(i);return `<button type="button" data-section="${i}" ${i===si?'class="active"':''} ${state.mode==='exam'&&i!==si?'disabled':''} title="${s}: ${c.a+c.am} answered, ${c.m+c.am} marked, ${c.nv} not visited">${s}<i class="ico i-info" aria-hidden="true">i</i></button>`;}).join('');
    const body=overlay==='summary'||overlay==='confirm'?summaryScreen():`<div class="cbt-body">
      <section class="cbt-main" aria-label="Question area">
        <div class="cbt-sections"><span class="cbt-label">Sections</span><div class="cbt-tabs" role="group" aria-label="Sections">${tabs}</div><button type="button" class="cbt-calc" data-action="calculator" aria-label="Open the calculator" title="Calculator">${calcIcon}</button></div>
        <div class="cbt-timebar"><span class="cbt-cur">${sections[si]}<small>${sectionNames[si]}</small></span><span class="cbt-time">Time Left : <b id="sectionClock"></b></span></div>
        <div class="cbt-qhead"><b>Question No. ${state.current-start+1}</b><span class="cbt-marks">Marks for correct answer: <b class="pos">3</b> | Negative Marks: <b class="neg">${q.type==='MCQ'?1:0}</b></span></div>
        <div class="cbt-qarea ${q.passage?'split':''}" data-question-id="${q.id}">${q.passage?`<div class="cbt-passage ${q.section==='DILR'?'dilr':''}" data-group="${esc(q.groupId||q.id)}" tabindex="0"><h3>${esc(q.groupTitle||'Read the following text')}</h3>${rich(q.passage)}</div>`:''}<div class="cbt-question"><div class="question-text">${rich(q.question)}</div>${questionBody(q)}</div></div>
        <div class="cbt-actions"><div><button type="button" class="cbt-btn" data-action="flag">Mark for Review & Next</button><button type="button" class="cbt-btn" data-action="clear">Clear Response</button></div><button type="button" class="cbt-btn primary" data-action="next">Save & Next</button></div>
      </section>
      <button type="button" class="cbt-collapse" data-action="togglePalette" aria-expanded="${!paletteHidden}" aria-label="${paletteHidden?'Show':'Hide'} the question palette">${paletteHidden?'‹':'›'}</button>
      <aside class="cbt-side" aria-label="Question palette">
        <div class="cbt-profile">${avatar}<div><b>Candidate</b><small>Paper ${NUMBER} · ${state.mode==='exam'?'timed':'practice'}</small></div></div>
        <div class="cbt-legend">${['a','na','nv','m'].map(k=>`<div><span class="qs st-${k}" aria-hidden="true"><span>${counts[k]}</span></span>${STATUS_TEXT[k]}</div>`).join('')}<div class="wide"><span class="qs st-am" aria-hidden="true"><span>${counts.am}</span></span>Answered & Marked for Review (will be evaluated)</div></div>
        <div class="cbt-secname">${sections[si]}</div><div class="cbt-choose">Choose a Question</div>
        <div class="palette-grid">${subset.map((item,i)=>{const st=statusOf(item);return `<button type="button" data-index="${start+i}" class="qs st-${st}${state.current===start+i?' current':''}" aria-label="Question ${i+1}, ${STATUS_TEXT[st]}" title="${STATUS_TEXT[st]}"${state.current===start+i?' aria-current="true"':''}><span>${i+1}</span></button>`;}).join('')}</div>
        <div class="cbt-submit"><button type="button" class="cbt-btn primary" data-action="submit">Submit</button></div>
      </aside>${modal()}</div>`;
    app.innerHTML=frame(body);
    const passage=app.querySelector('.cbt-passage');
    if(passage&&passage.dataset.group===lastPassage.group)passage.scrollTop=lastPassage.scroll;
    updateClock();persist();
  }
  function goTo(index) {
    if(syncClock())return;
    if(!state||state.stage!=='active')return;
    const from=starts[state.sectionIndex];
    if(!Number.isInteger(index)||index<from||index>=from+lengths[state.sectionIndex])return;
    // Jumping from the palette does not save the current choice, as the test instructions warn.
    touch();draft=null;overlay=null;state.current=index;state.lastTouch=Date.now();renderTest();
  }
  function saveAndNext(review) {
    if(view!=='test'||!state||state.stage!=='active'||overlay)return;
    if(!refreshSaved()||!state||state.stage!=='active')return;
    touch();const q=bank[state.current],value=draft&&draft.id===q.id?draft.value:null;
    if(q.type==='MCQ'){if(Number.isInteger(value))state.answers[q.id]=value;}
    else{const text=String(value??'').trim();if(text)state.answers[q.id]=text;else delete state.answers[q.id];}
    if(review)state.flags[q.id]=true;else delete state.flags[q.id];
    const start=starts[state.sectionIndex];
    state.current=state.current+1<start+lengths[state.sectionIndex]?state.current+1:start;
    state.lastTouch=Date.now();draft=null;
    if(persist())renderTest();
  }
  function clearResponse() {
    if(view!=='test'||!state||state.stage!=='active'||overlay)return;
    if(!refreshSaved()||!state||state.stage!=='active')return;
    const q=bank[state.current];draft={id:q.id,value:q.type==='MCQ'?null:''};delete state.answers[q.id];
    if(persist())renderTest();
  }
  function openSummary() {
    if(view!=='test'||!state||state.stage!=='active')return;
    touch();draft=null;overlay='summary';renderTest();
  }
  function submitSection() {
    if(!refreshSaved()||!state||state.stage!=='active')return;
    touch();overlay=null;draft=null;
    if(state.mode==='practice'||state.sectionIndex===2){state.stage='complete';state.completedAt=Date.now();if(persist())renderResults();return;}
    const done=sections[state.sectionIndex];
    state.sectionIndex++;state.current=starts[state.sectionIndex];state.deadline=Date.now()+SECTION_MS;state.lastTouch=Date.now();
    if(persist()){renderTest();toast(`${done} submitted. ${sections[state.sectionIndex]} has started.`);}
  }
  function keypad(key) {
    const input=document.getElementById('titaAnswer');if(!input||view!=='test'||!state||state.stage!=='active')return;
    let value=input.value,start=input.selectionStart??value.length,end=input.selectionEnd??start;
    if(key==='back'){if(start===end&&start>0){value=value.slice(0,start-1)+value.slice(end);start--;}else{value=value.slice(0,start)+value.slice(end);}}
    else if(key==='clear'){value='';start=0;}
    else if(key==='left')start=Math.max(0,start-1);
    else if(key==='right')start=Math.min(value.length,start+1);
    else if(value.length<16){value=value.slice(0,start)+key+value.slice(end);start++;}
    input.value=value;
    if(!matchMedia('(pointer: coarse)').matches)input.focus();
    input.setSelectionRange(start,start);
    draft={id:bank[state.current].id,value};
  }
  function renderResults() {
    if(!state)return renderHome();if(state.stage!=='complete')return renderTest();
    view='results';clearInterval(interval);examChrome(false);draft=null;overlay=null;const stats=getSummary();
    const total=sum(stats.map(s=>s.score)),correct=sum(stats.map(s=>s.correct)),attempts=sum(stats.map(s=>s.attempted));
    app.innerHTML=`<div class="results-hero"><div><p class="eyebrow">${state.mode==='exam'?'Timed exam':'Practice'} / Completed</p><h2>Your result, with the reasoning.</h2><p>Raw marks on this original mock. It has no calibrated CAT percentile.</p></div><div class="result-score">${total}<small> / 204</small></div></div><div class="stat-strip"><div><strong>${attempts}/68</strong><span>attempted</span></div><div><strong>${correct}</strong><span>correct</span></div><div><strong>${attempts?Math.round(correct/attempts*100):0}%</strong><span>attempt accuracy</span></div><div><strong>${68-attempts}</strong><span>unanswered</span></div></div><div class="forecast-table"><table><thead><tr><th>Section</th><th>Score</th><th>Correct</th><th>Wrong</th><th>Unanswered</th></tr></thead><tbody>${stats.map(s=>`<tr><td>${s.section}</td><td>${s.score}/${s.maximum}</td><td>${s.correct}</td><td>${s.wrong}</td><td>${s.unattempted}</td></tr>`).join('')}</tbody></table></div><div class="actions"><button class="button primary" data-action="export">Download result JSON</button><button class="button" data-action="home">Back to desk</button><button class="button" data-action="reader">Question paper</button></div><section class="section-block"><h2>Review every decision</h2><p class="fine">Use the filters to work through mistakes and skipped questions. Recorded time includes time spent on a question while this attempt was active, including time away from the tab.</p><div class="review-filter"><label>Section <select id="reviewSection"><option value="all">All sections</option>${sections.map(s=>`<option>${s}</option>`).join('')}</select></label><label>Result <select id="reviewStatus"><option value="all">All questions</option><option value="wrong">Wrong</option><option value="unanswered">Unanswered</option><option value="correct">Correct</option><option value="flagged">Marked for review</option></select></label></div><div id="reviewList"></div></section>`;renderReview();
  }
  function renderReview() {
    const section=document.getElementById('reviewSection').value,status=document.getElementById('reviewStatus').value;
    const filtered=bank.filter(q=>(section==='all'||q.section===section)&&(status==='all'||status==='flagged'&&state.flags[q.id]||status==='correct'&&isCorrect(q)||status==='wrong'&&answered(q)&&!isCorrect(q)||status==='unanswered'&&!answered(q)));
    document.getElementById('reviewList').innerHTML=filtered.map(q=>{const result=!answered(q)?'Unanswered':isCorrect(q)?'Correct':'Wrong';return `<details class="review-item"><summary><span class="pill ${q.section}">${q.id}</span><span>${esc(q.subtopic||q.topic)}</span><span class="review-status ${result==='Correct'?'correct':result==='Wrong'?'wrong':''}">${result} · ${mark(q)>0?'+':''}${mark(q)}</span></summary>${q.passage?`<div class="review-passage">${esc(q.passage)}</div>`:''}<p class="question-text">${esc(q.question)}</p>${q.options.length?`<ol type="A" class="review-options">${q.options.map(o=>`<li>${esc(o)}</li>`).join('')}</ol>`:''}<p class="review-answer"><b>Your answer:</b> ${esc(userLabel(q))}<br><b>Correct answer:</b> ${esc(answerLabel(q))}<br><b>Recorded time:</b> ${Math.round((state.times[q.id]||0)/1000)} seconds · Editorial difficulty: ${esc(q.difficulty)}</p><div class="solution">${esc(q.solution)}</div></details>`}).join('')||'<p class="fine">No questions match these filters.</p>';
  }
  function renderReader(solutions=false) {
    if(view==='test'){touch();if(!persist())return;}view=solutions?'solutions':'reader';draft=null;overlay=null;examChrome(false);
    app.innerHTML=`<div class="reader-controls"><button class="button" data-action="home">← Back to desk</button><div class="actions" style="margin:0"><button class="button" data-action="${solutions?'reader':'solutions'}">${solutions?'Question edition':'Worked solutions'}</button><button class="button primary" data-action="print">Print / Save as PDF</button></div></div><div class="paper-cover"><p class="eyebrow">Independent CAT preparation / Original mock</p><h1>CAT 2026<br>Prediction Paper ${NUMBER}</h1><h2>${solutions?'Answer key & worked solutions':'Question paper'}</h2><p>68 questions · 120 minutes · Maximum 204 marks</p><p class="fine">This is an original practice paper informed by recent CAT patterns and the forecast in this study. It is not the official CAT 2026 paper and does not claim to reproduce unreleased questions. Its difficulty has not been calibrated on a candidate cohort.</p><table><thead><tr><th>Section</th><th>Questions</th><th>Time</th><th>Marks</th></tr></thead><tbody><tr><td>Verbal Ability & Reading Comprehension</td><td>24</td><td>40 minutes</td><td>72</td></tr><tr><td>Data Interpretation & Logical Reasoning</td><td>22</td><td>40 minutes</td><td>66</td></tr><tr><td>Quantitative Ability</td><td>22</td><td>40 minutes</td><td>66</td></tr></tbody></table><p style="margin-top:24px">Correct answer: +3. Incorrect MCQ: −1. Incorrect TITA or unanswered question: 0. Each MCQ has exactly one correct option. TITA answers are whole numbers.</p><p class="paper-reference">Design reference: <a href="https://www.imsindia.com/cat-exam-analysis/">IMS CAT 2025 exam analysis</a> and the instructions of the official CAT 2026 mock (released 6 November 2026). The 24/22/22 structure, four-question RC passages and four- or five-question DILR sets inform this mock. Original contexts and exact question allocations are authoring choices. Method and source limitations: validation.html. Practice profile: ${esc(config.title)}.</p></div>${solutions?`<section class="print-section"><h2>Quick answer key</h2><div class="key-grid">${bank.map(q=>`<div><b>${q.id}</b>${q.type==='MCQ'?String.fromCharCode(65+q.answer):esc(q.answer)}</div>`).join('')}</div></section>`:''}${sections.map(s=>{let lastGroup=null;return `<section class="print-section"><h2>${s} · ${s==='VARC'?24:22} questions</h2>${bank.filter(q=>q.section===s).map(q=>{let context='';if(q.passage&&(!q.groupId||q.groupId!==lastGroup)){context=`<article class="print-group"><h3>${esc(q.groupTitle||'Read the following text')}</h3><div class="text">${esc(q.passage)}</div></article>`;lastGroup=q.groupId;}return `${context}<article class="print-question" id="${q.id}"><h3>${q.id}. ${esc(q.question)} <span class="pill">${q.type}</span></h3>${q.options.length?`<ol type="A">${q.options.map(o=>`<li>${esc(o)}</li>`).join('')}</ol>`:solutions?'':'<div class="answer-space"></div>'}${solutions?`<p><b>Answer: ${esc(answerLabel(q))}</b></p><div class="solution">${esc(q.solution)}</div>`:''}</article>`}).join('')}</section>`}).join('')}`;
    window.scrollTo({top:0});
  }
  function exportResult() {
    if(state?.stage!=='complete')return;
    const data={paper:PAPER,mode:state.mode,completedAt:new Date(state.completedAt).toISOString(),sections:getSummary(),responses:bank.map(q=>({id:q.id,topic:q.subtopic||q.topic,response:state.answers[q.id]??null,correctAnswer:q.answer,correct:isCorrect(q),marks:mark(q),milliseconds:state.times[q.id]||0}))};
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`CAT-2026-Paper${NUMBER}-result.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  // On-screen calculator: immediate-execution keys like a standard desktop calculator.
  const Calc=(()=>{
    let el=null,display='0',acc=null,op=null,fresh=true,memory=0,expr='',error=false;
    const symbol={'+':'+','-':'−','*':'×','/':'÷'};
    const format=x=>{if(!Number.isFinite(x))return 'Error';const r=Number(x.toPrecision(12));let t=String(r);if(t.replace('-','').length>15)t=r.toExponential(9).replace(/\.?0+e/,'e');return t;};
    const current=()=>Number(display);
    const apply=(a,o,b)=>o==='+'?a+b:o==='-'?a-b:o==='*'?a*b:b===0?NaN:a/b;
    function fail(){error=true;display='Error';acc=null;op=null;fresh=true;expr='';}
    function press(k){
      if(error&&k!=='C'&&k!=='CE'){if(/^[0-9.]$/.test(k)){error=false;display='0';fresh=true;}else return paint();}
      if(/^[0-9]$/.test(k)){if(fresh){display=k;fresh=false;}else if(display.replace(/[-.]/g,'').length<15)display=display==='0'?k:display==='-0'?'-'+k:display+k;}
      else if(k==='.'){if(fresh){display='0.';fresh=false;}else if(!display.includes('.'))display+='.';}
      else if(symbol[k]){
        const v=current();
        if(op!==null&&!fresh){const r=apply(acc,op,v);if(!Number.isFinite(r)){fail();return paint();}acc=r;display=format(r);}
        else if(op===null)acc=v;
        op=k;fresh=true;expr=`${format(acc)} ${symbol[k]}`;
      }
      else if(k==='='){if(op!==null){const v=current(),r=apply(acc,op,v),line=`${format(acc)} ${symbol[op]} ${format(v)} =`;acc=null;op=null;fresh=true;if(!Number.isFinite(r))fail();else{display=format(r);expr=line;}}}
      else if(k==='sqrt'){const v=current();if(v<0)fail();else{display=format(Math.sqrt(v));fresh=true;}}
      else if(k==='inv'){const v=current();if(v===0)fail();else{display=format(1/v);fresh=true;}}
      else if(k==='pct'){const v=current();display=format(op!==null&&acc!==null?acc*v/100:v/100);fresh=true;}
      else if(k==='neg'){if(display!=='0')display=display.startsWith('-')?display.slice(1):'-'+display;}
      else if(k==='back'){if(!fresh){display=display.length>1&&display!=='-0'&&!/^-\d$/.test(display)?display.slice(0,-1):'0';if(display==='0'||display==='-')display='0';}}
      else if(k==='CE'){display='0';fresh=true;error=false;}
      else if(k==='C'){display='0';acc=null;op=null;fresh=true;expr='';error=false;}
      else if(k==='MC')memory=0;
      else if(k==='MR'){display=format(memory);fresh=true;}
      else if(k==='MS')memory=current();
      else if(k==='M+')memory+=current();
      else if(k==='M-')memory-=current();
      paint();
    }
    function paint(){if(!el)return;el.querySelector('.calc-value').textContent=display;el.querySelector('.calc-expr').textContent=expr||' ';el.querySelector('.calc-mem').textContent=memory!==0?'M':'';}
    const layout=[['MC','MC','mem'],['MR','MR','mem'],['MS','MS','mem'],['M+','M+','mem'],['M-','M−','mem'],['back','←',''],['CE','CE','clr'],['C','C','clr'],['neg','±',''],['sqrt','√',''],['7','7',''],['8','8',''],['9','9',''],['/','÷','op'],['pct','%',''],['4','4',''],['5','5',''],['6','6',''],['*','×','op'],['inv','1/x',''],['1','1',''],['2','2',''],['3','3',''],['-','−','op'],['=','=','eq'],['0','0','zero'],['.','.',''],['+','+','op']];
    function build(){
      el=document.createElement('div');el.className='calc';el.hidden=true;el.setAttribute('role','dialog');el.setAttribute('aria-label','Calculator');el.tabIndex=-1;
      el.innerHTML=`<div class="calc-head"><b>Calculator</b><button type="button" data-calc-close aria-label="Close the calculator">✕</button></div><div class="calc-screen"><div class="calc-expr">&nbsp;</div><div><span class="calc-mem"></span><span class="calc-value" aria-live="polite">0</span></div></div><div class="calc-keys">${layout.map(([k,label,cls])=>`<button type="button" data-calc="${k}" class="${cls}" aria-label="${k==='sqrt'?'square root':k==='inv'?'reciprocal':k==='pct'?'percent':k==='neg'?'change sign':k==='back'?'backspace':label}">${label}</button>`).join('')}</div>`;
      document.body.appendChild(el);
      el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-calc-close'))return hide();press(b.dataset.calc);});
      el.addEventListener('keydown',e=>{
        const map={Enter:'=','=':'=',Backspace:'back',Delete:'CE','%':'pct'},k=map[e.key]||(/^[0-9.+\-*/]$/.test(e.key)?e.key:null);
        if(e.key==='Escape'){e.preventDefault();hide();return;}
        if(k){e.preventDefault();press(k);}
      });
      const head=el.querySelector('.calc-head');let drag=null;
      head.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;const r=el.getBoundingClientRect();drag={dx:e.clientX-r.left,dy:e.clientY-r.top};head.setPointerCapture(e.pointerId);});
      head.addEventListener('pointermove',e=>{if(!drag)return;const w=el.offsetWidth,h=el.offsetHeight;el.style.left=Math.min(Math.max(0,e.clientX-drag.dx),innerWidth-w)+'px';el.style.top=Math.min(Math.max(0,e.clientY-drag.dy),innerHeight-h)+'px';el.style.right='auto';el.style.bottom='auto';});
      head.addEventListener('pointerup',()=>{drag=null;});
    }
    function show(){if(!el)build();el.hidden=false;paint();el.focus({preventScroll:true});}
    function hide(){if(el)el.hidden=true;}
    return {show,hide,toggle(){if(!el||el.hidden)show();else hide();},press};
  })();
  app.addEventListener('click',event=>{
    const target=event.target.closest('button');if(!target)return;
    if(target.dataset.option!==undefined){
      if(view!=='test'||!state||state.stage!=='active'||overlay||syncClock())return;
      const q=bank[state.current];draft={id:q.id,value:Number(target.dataset.option)};
      app.querySelectorAll('.cbt-option').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.option)===draft.value)));return;
    }
    if(target.dataset.key!==undefined){keypad(target.dataset.key);return;}
    if(target.dataset.index!==undefined){goTo(Number(target.dataset.index));return;}
    if(target.dataset.section!==undefined){if(state?.mode!=='practice'||state.stage!=='active')return;touch();draft=null;overlay=null;state.sectionIndex=Number(target.dataset.section);state.current=starts[state.sectionIndex];renderTest();return;}
    const action=target.dataset.action;
    if(['clear','flag','next','submit','summaryYes','confirmYes'].includes(action)&&syncClock())return;
    switch(action){
      case'exam':begin('exam');break;case'practice':begin('practice');break;
      case'home':renderHome();break;
      case'resume':if(!refreshSaved()||!state)break;view='test';draft=null;overlay=null;syncClock();if(!state||view!=='test')break;if(state.stage==='complete'){if(persist())renderResults();}else renderTest();startTicker();break;
      case'next':saveAndNext(false);break;case'flag':saveAndNext(true);break;
      case'clear':clearResponse();break;
      case'submit':openSummary();break;
      case'summaryYes':overlay='confirm';renderTest();break;
      case'confirmYes':submitSection();break;
      case'summaryNo':case'confirmNo':case'closeOverlay':overlay=null;renderTest();break;
      case'questionPaper':overlay=overlay==='paper'?null:'paper';renderTest();break;
      case'instructions':overlay=overlay==='instructions'?null:'instructions';renderTest();break;
      case'magnify':magnify=(magnify+1)%3;renderTest();toast(['Normal text size','Larger text','Largest text'][magnify]);break;
      case'togglePalette':paletteHidden=!paletteHidden;renderTest();break;
      case'calculator':Calc.toggle();break;
      case'export':exportResult();break;
      case'reader':renderReader(false);break;case'solutions':renderReader(true);break;
      case'print':window.print();break;
    }
  });
  app.addEventListener('input',event=>{
    if(event.target.id==='titaAnswer'&&view==='test'&&state?.stage==='active'){
      const input=event.target,clean=input.value.replace(/[^0-9.\-]/g,'').slice(0,16);
      if(clean!==input.value)input.value=clean;
      draft={id:bank[state.current].id,value:clean};
    }
  });
  app.addEventListener('keydown',event=>{
    if(event.target.id==='titaAnswer'&&event.key==='Enter'){event.preventDefault();saveAndNext(false);}
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&view==='test'&&(overlay==='paper'||overlay==='instructions')&&!event.target.closest?.('.calc')){overlay=null;renderTest();}
  });
  app.addEventListener('change',event=>{
    if(['reviewSection','reviewStatus'].includes(event.target.id))renderReview();
    if(event.target.id==='paperPicker'){
      const selected=window.CAT_PAPER_CATALOG.find(p=>p.number===event.target.value);
      if(selected){if(view==='test'){touch();if(!persist())return;}location.href=selected.href;}
    }
  });
  document.getElementById('cancelConfirm').onclick=()=>{pendingConfirmation=null;document.getElementById('confirmDialog').close();};
  document.getElementById('acceptConfirm').onclick=()=>{document.getElementById('confirmDialog').close();const fn=pendingConfirmation;pendingConfirmation=null;fn?.();};
  window.addEventListener('pagehide',()=>{if(view==='test'){touch();persist();}});
  document.addEventListener('visibilitychange',()=>{if(view==='test'){if(syncClock())return;touch();persist();}});
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)refreshSaved();});
  // Expose pure helpers for verifying raw scoring and bank consistency.
  window.CATPaper={bank,mark,isCorrect,getSummary,renderReader,paperVersion:PAPER,number:NUMBER,storageKey:KEY,config,calculator:Calc};
  if(bank.length!==68||sections.some((s,i)=>bank.filter(q=>q.section===s).length!==lengths[i])){
    app.innerHTML='<p class="loading">The paper files did not load completely. Refresh this page after checking the three section files.</p>';return;
  }
  restore();syncClock();
  const edition=new URLSearchParams(location.search).get('view');
  if(edition==='paper'||edition==='solutions')renderReader(edition==='solutions');else renderHome();
  if(state?.stage==='active')startTicker();
})();
