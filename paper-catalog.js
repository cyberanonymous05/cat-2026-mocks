/* Ten practice papers. Since 2026-11-07 every paper's Quant topics sit inside the topic-level forecast
   (topics.html): 25 questions were replaced across the ten papers, and Papers 04 and 05 exchanged two
   DILR sets so that each has two or three DI sets. Paper 07 leans towards, and Paper 09 replays,
   IIM Indore's 2020 topic mix as scenarios. Versions changed, so attempts saved on the earlier
   versions stay in the browser but are not shown. qa is the family count by each question's own
   label (Arithmetic, Algebra, Geometry, Number Systems, Modern Math). */
window.CAT_PAPER_CATALOG = [
  {number:'01',version:'v3',title:'The original forecast',focus:'Topic forecast',level:'Mixed',qa:[8,7,3,2,2],note:'The first complete paper, updated so every Quant topic sits inside the 2026 topic forecast.',basis:'Every one of its twelve Quant topics sits inside the 2026 topic forecast’s likely range.'},
  {number:'02',version:'v3',title:'Build the baseline',focus:'Topic forecast',level:'Mixed',qa:[8,6,3,2,3],note:'Broad coverage of all the likely topics, with three linear-equation and two progression questions.',basis:'Every Quant topic sits inside the 2026 topic forecast’s likely range.'},
  {number:'03',version:'v3',title:'Patterns & inference',focus:'Topic forecast',level:'Stretch',qa:[7,7,3,2,3],note:'Harder algebra and close reading, with every topic count inside the forecast.',basis:'Every Quant topic sits inside the 2026 topic forecast’s likely range; the questions are harder than average.'},
  {number:'04',version:'v3',title:'Rates, ratios & decisions',focus:'Topic forecast',level:'Mixed',qa:[9,6,3,2,2],note:'Nine arithmetic questions and three data-interpretation sets, at the busy end of the forecast.',basis:'Every Quant topic sits inside the 2026 topic forecast’s likely range, with arithmetic at its upper end.'},
  {number:'05',version:'v3',title:'Decode the constraints',focus:'Topic forecast',level:'Stretch',qa:[8,6,3,3,2],note:'Logic-heavy DILR with two data-interpretation sets, and three number-system questions.',basis:'Every Quant topic sits inside the 2026 topic forecast’s likely range.'},
  {number:'06',version:'v2',title:'The central forecast',focus:'Topic forecast',level:'Mixed',qa:[8,4,3,3,4],note:'Closest to the single most likely 2026 family mix (8/4/3/3/4), with every topic inside the forecast.',basis:'Its family mix is the count model’s most likely allocation (about 17%), and every topic sits inside the topic forecast.'},
  {number:'07',version:'v2',title:'IIM Indore lean',focus:'Indore scenario',level:'Mixed',qa:[8,7,3,2,2],note:'Leans towards IIM Indore’s 2020 paper: more time-speed-distance, logarithms and linear equations, and four logic sets.',basis:'A scenario: it leans towards IIM Indore’s 2020 topic mix while staying inside the topic forecast.'},
  {number:'08',version:'v2',title:'Modern Math holds four',focus:'Topic forecast',level:'Mixed',qa:[8,5,3,2,4],note:'The third most likely family mix (8/5/3/2/4), with two progressions and a sets question.',basis:'Its family mix is the count model’s third most likely allocation (about 14%), and every topic sits inside the topic forecast.'},
  {number:'09',version:'v2',title:'IIM Indore 2020 replay',focus:'Indore scenario',level:'Stretch',qa:[9,9,2,1,1],note:'Follows IIM Indore’s 2020 topic mix: four time-speed-distance, three logarithm and two function questions, no progressions, and four logic sets.',basis:'A scenario, not the central forecast: its topic counts copy IIM Indore’s 2020 paper, which had no progressions and more logarithms.'},
  {number:'10',version:'v2',title:'Equations take the lead',focus:'Topic forecast',level:'Mixed',qa:[8,7,3,2,2],note:'Three linear-equation questions, a sets question and two data-interpretation sets.',basis:'Every Quant topic sits inside the 2026 topic forecast’s likely range.'}
].map(p=>({...p,questions:68,minutes:120,
  storageKey:`cat2026.prediction${p.number}.attempt.${p.version}`,
  paperId:`CAT2026-P${p.number}-${p.version}`,
  href:`prediction.html?paper=${p.number}`,
  paperPdf:`CAT-2026-Prediction-Paper-${p.number}.pdf`,
  solutionsPdf:`CAT-2026-Prediction-Solutions-${p.number}.pdf`,
  files:['varc','dilr','qa'].map(section=>p.number==='01'?`prediction-${section}.js`:`papers/paper-${p.number}-${section}.js`)
}));
