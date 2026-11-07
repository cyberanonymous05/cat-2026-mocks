/* Sourced analyst counts, assembled retrospectively. v3.0 2026-09-08, v4.0 2026-11-05.
   Primary numerical panel: IMS only, complete explicit QA family counts.
   Missing years/slots are not imputed. Supplementary providers are not fitted.
   v4.0 adds 2022 Slots 1 and 3 and 2023 Slots 1-3 (see each row's sourceAccess). */
window.CAT_HISTORY={
  version:'CAT-count-study-v4.0',reviewed:'2026-11-05',provider:'IMS India',
  qaLabels:['Arithmetic','Algebra','Geometry','Numbers','Modern Math'],
  varcLabels:['RC','Summary','Sentence placement','Odd sentence','Parajumbles'],
  sectionLabels:['VARC','DILR','QA'],
  rows:[
    {year:2021,slot:2,qa:[9,5,3,2,3],varc:[16,3,0,2,3],sections:[24,20,22],dilr:[6,6,4,4],source:'https://www.imsindia.com/cat-2021-slot-2-analysis/',sourceAccess:'Full provider page; root URL redirects to blog URL.'},
    {year:2021,slot:3,qa:[10,4,3,1,4],varc:[16,3,0,2,3],sections:[24,20,22],dilr:[6,6,4,4],source:'https://www.imsindia.com/cat-2021-slot-3-analysis/',sourceAccess:'Full provider page; root URL redirects to blog URL.'},
    {year:2022,slot:1,qa:[8,5,3,3,3],varc:[16,3,2,0,3],sections:[24,20,22],dilr:[5,5,5,5],source:'https://techassignments.imsindia.com/?p=2831',sourceAccess:'Opened directly on 2026-11-05 (IMS-hosted page); QA, VARC and DILR tables read from the page.',note:'Para-completion (2) is placed in the sentence-placement column, as for 2022 Slot 2.'},
    {year:2022,slot:2,qa:[8,6,3,1,4],varc:[16,3,2,0,3],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.imsindia.com/blog/cat/cat-2022-slot-2-analysis/',sourceAccess:'Full provider article content in search index; direct opening unavailable.'},
    {year:2022,slot:3,qa:[8,5,4,2,3],varc:[16,3,2,0,3],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.imsindia.com/cat-2022-slot-3-analysis/',sourceAccess:'Direct opening returned 404. Counts read from IMS page content in search results; IMS overall page gave the same QA split.',note:'MCQ/TITA mix differs between IMS pages; topic counts do not. Para-completion (2) is placed in the sentence-placement column.'},
    {year:2023,slot:1,qa:[7,8,4,1,2],source:'https://www.imsindia.com/blog/cat/cat-2023-slot-1-analysis/',sourceAccess:'Direct opening returned 404/410 for 2023 pages. Counts read from IMS page content in search results; IMS overall page gave the same split.',note:'Career Launcher reports 9/8/3/1/1 for this slot (supplementary, not fitted). VARC and DILR detail was not recovered from IMS.'},
    {year:2023,slot:2,qa:[7,8,2,2,3],alternativeQA:[7,8,3,2,2],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.imsindia.com/cat-2023-overall-analysis/',alternativeSource:'https://www.imsindia.com/blog/cat/cat-2023-slot-2-analysis/',sourceAccess:'Direct opening not possible. Counts read from IMS page content in search results.',note:'IMS overall table: Geometry 2, Modern Math 3. IMS slot article: Geometry 3, Modern Math 2. Overall table is selected, matching the 2025 Slot 1 rule.'},
    {year:2023,slot:3,qa:[8,4,3,3,4],source:'https://www.imsindia.com/blog/cat/cat-2023-slot-3-analysis/',sourceAccess:'Direct opening returned 410. Counts read from IMS page content in search results; IMS overall page gave the same split.',note:'VARC and DILR detail was not recovered from IMS.'},
    {year:2024,slot:1,qa:[8,7,3,1,3],varc:[16,3,3,2,0],sections:[24,22,22],dilr:[5,5,4,4,4],source:'https://www.imsindia.com/blog/cat/cat-exam-analysis-2024/',sourceAccess:'Full provider article content in search index; direct opening returned 410.'},
    {year:2024,slot:2,qa:[8,5,3,3,3],varc:[16,3,3,2,0],sections:[24,22,22],dilr:[5,5,4,4,4],source:'https://www.imsindia.com/blog/cat/cat-2024-slot-2-analysis/',sourceAccess:'Full provider article content in search index; direct opening returned 410.'},
    {year:2025,slot:1,qa:[8,4,3,3,4],varc:[16,2,2,2,2],sections:[24,22,22],dilr:[5,5,4,4,4],tita:[4,11,8],source:'https://www.imsindia.com/cat-overall-analysis-2025/',alternativeQA:[8,5,3,3,3],alternativeSource:'https://www.imsindia.com/cat-2025-slot-1-analysis/',sourceAccess:'Full provider page. TITA counts from the IMS slot page, read 2026-11-06.',note:'Overall table selected; slot-specific table reallocates one Modern Math question to Algebra. Source prose also differs.'},
    {year:2025,slot:2,qa:[8,5,3,2,4],varc:[16,2,2,2,2],sections:[24,22,22],dilr:[5,5,4,4,4],tita:[4,11,8],source:'https://www.imsindia.com/cat-2025-slot-2-analysis/',sourceAccess:'Full provider page. TITA counts read 2026-11-06.'},
    {year:2025,slot:3,qa:[7,4,3,4,4],varc:[16,2,2,2,2],sections:[24,22,22],dilr:[5,5,4,4,4],tita:[4,11,8],source:'https://www.imsindia.com/cat-2025-slot-3-analysis/',sourceAccess:'Full provider page. TITA counts read 2026-11-06.'}
  ],
  /* TITA (non-MCQ) counts are [VARC, DILR, QA]. Only 2025 has them from IMS; this row is context, never fitted. */
  supplementaryTita:[
    {year:2024,slot:1,provider:'Career Launcher',tita:[2,10,8],source:'https://www.careerlauncher.com/cat/analysis-cut-off/2024/slot1/',note:'Read from a search-result summary, not opened directly. Another provider reported about 10 QA TITA questions for this slot.'}
  ],
  /* Official CAT mocks, recorded from the live mock screens on 2026-11-06. Only counts and question
     types were recorded; no question text is stored. QA family labels were assigned by this project
     (logarithms, progressions and counting functions in Modern Math, as in the 2022 IMS convention),
     so they are not provider counts and are never fitted. */
  officialMocks:{
    2025:{released:'2025-11-12',convenor:'IIM Kozhikode',id:'32842@@M214',
      url:'https://cdn4.digialm.com//OnlineAssessment/index.html?32842@@M214',
      releaseSource:'https://www.careers360.com/mba/articles/cat-2025-official-mock-test-released-iimcat-ac-in',
      accessed:'2026-11-06',sections:[24,22,22],minutesPerSection:40,
      varc:[16,3,3,2,0],tita:[2,10,8],dilrSets:[4,4,4,5,5],dilrTitaBySet:[1,0,4,3,2],
      qa:[9,4,3,2,4],qaAlternative:[9,5,3,2,3],qaBorderline:7,
      rules:{dilrSetSizes:[4,5],rcQuestionsPerPassage:4,titaWholeNumber:true}},
    2026:{released:'2026-11-06',convenor:'IIM Indore',id:'32842@@M218',
      url:'https://cdn4.digialm.com//OnlineAssessment/index.html?32842@@M218',
      linkPdf:'https://g03.tcsion.com//per/g03/pub/726/EForms/image/ImageDocUpload/71161/8/1175320.pdf',
      accessed:'2026-11-06',sameQuestionsAs:2025,
      sameEvidence:'Same four RC passage IDs, same five DILR set IDs and sizes, same text-length and image fingerprint for all 22 QA questions, same MCQ/TITA counts; only the order is shuffled.',
      sections:[24,22,22],minutesPerSection:40,
      varc:[16,3,3,2,0],tita:[2,10,8],dilrSets:[4,5,4,5,4],dilrTitaBySet:[0,2,1,3,4],
      qa:[9,4,3,2,4],qaAlternative:[9,5,3,2,3],qaBorderline:7,
      rules:{mcqOptions:4,marksMCQ:[3,-1,0],marksTITA:[3,0,0],titaWholeNumber:true,dilrSetSizes:[4,5],rcQuestionsPerPassage:4,sectionOrder:['VARC','DILR','QA'],onScreenCalculator:true,saveOnlyWithSaveAndNext:true},
      officialStatements:['The mock-link PDF says CAT 2026 has 120 minutes for non-PwBD candidates, 40 minutes per section.','The same PDF says the mock uses selected questions from previous CAT papers and is not meant to reveal the CAT 2026 pattern; counts and timing in the mock are indicative.','The 4 Nov 2026 media release says the test is on 29 November 2026 in three shifts, with admit cards from 6 November.','Disputes fall under the CAT Centre 2026 in Indore, and the help desk uses an iimidr.ac.in address, which supports IIM Indore as convenor.']}
  },
  supplementaryRows:[
    {year:2023,slot:1,provider:'Career Launcher',qa:[9,8,3,1,1],varc:[16,2,2,2,2],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.careerlauncher.com/cat/analysis-cut-off/2023/slot1/',note:'Published topic-total cells; listed subtopic sums and TITA descriptions contain inconsistencies. Supplementary, not fitted.'},
    {year:2023,slot:2,provider:'Career Launcher',qa:[9,7,3,3,0],varc:[16,2,2,2,2],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.careerlauncher.com/cat/analysis-cut-off/2023/slot2/',note:'Published topic-total cells; Numbers subtopic list does not reproduce the reported total. Supplementary, not fitted.'},
    {year:2023,slot:3,provider:'Career Launcher',qa:[8,7,3,4,0],varc:[16,2,2,2,2],sections:[24,20,22],dilr:[5,5,5,5],source:'https://www.careerlauncher.com/cat/analysis-cut-off/2023/slot3/',note:'Published topic-total cells; Numbers subtopic list does not reproduce the reported total. Supplementary, not fitted.'}
  ],
  /* Convening IIM by exam year, from secondary reporting (Careers360, Cracku, Free Press Journal),
     reviewed 2026-11-05. For 2026 the official portal was read on 2026-11-05 and 2026-11-06 and
     points to IIM Indore (see officialMocks[2026].officialStatements). A convening IIM is not a
     verified author of individual questions. */
  convenors:{2020:'IIM Indore',2021:'IIM Ahmedabad',2022:'IIM Bangalore',2023:'IIM Lucknow',2024:'IIM Calcutta',2025:'IIM Kozhikode',2026:'IIM Indore'},
  /* IIM Indore's most recent CAT. Different format, so reference only; never fitted. */
  indore2020:{
    questions:76,sections:[26,24,26],minutesPerSection:40,slots:3,
    source:'https://cracku.in/blog/cat-2020-slot-1-analysis/',
    note:'Section totals read directly from Cracku slot pages (VARC 26, DILR 24, QA 26). No reliable 2020 topic table was recovered: the only one found did not sum to 26 per slot, so it is not used.'
  },
  notes:[
    'The primary model uses thirteen complete IMS QA reports from 2021, 2022, 2023, 2024 and 2025: 286 reported question allocations, not 286 independent predictions. Evaluation targets are 2022, 2023, 2024 and 2025. No calendar year inside the covered span is missing.',
    'v4.0 added five rows (2022 Slots 1 and 3, 2023 Slots 1-3). Only 2022 Slot 1 was opened directly. The others were read from IMS page content in search results because direct IMS URLs returned 404 or 410, the same access limit already noted for 2022 Slot 2 and 2024. These rows are less verified than directly opened pages.',
    '2023 Slot 2 has two conflicting IMS tables: overall page Geometry 2 / Modern Math 3, slot article Geometry 3 / Modern Math 2. The overall table is primary and the other is a sensitivity row, as for 2025 Slot 1. Under the alternative, the raw selector changes its 2026 choice, so treat the raw 2026 split as sensitive to this single cell.',
    '2021 Slot 1 is excluded because IMS lists no Numbers row (the four stated counts sum to 22). No implicit zero is inserted under this strict complete-explicit-cell rule. 2022 Slots 1 and 3 are now included; see above.',
    '2024 Slot 3 stays excluded. IMS overall table leaves Modern Math blank; the slot page table (8/7/3/1/3 with Modern Math 3) equals the Slot 1 vector, while its narrative gives Algebra 5. Copy error cannot be ruled out, so no value is used.',
    'Career Launcher 2023 counts differ from IMS 2023 counts (for example Slot 1 9/8/3/1/1 against 7/8/4/1/2). Providers classify borderline questions differently, so a count error of about one question per category is classification noise before any forecasting error.',
    'Taxonomy remains uncertain even within one provider. The 2022 report places functions, logarithms and progressions in Modern Math, while some later descriptions place functions in Algebra. Combining Algebra and Modern Math reduces this known boundary issue but does not establish complete question-level consistency.',
    'Geometry is not fixed at 3: 2022 Slot 3 and 2023 Slot 1 report 4, and the 2023 Slot 2 overall table reports 2. It is the steadiest family, not a constant.',
    'Every CAT in 2021-2025 was convened by a different IIM, so each setter appears once and no setter-specific style can be estimated. IIM Indore last convened CAT in 2020, in a 76-question pandemic format that is not comparable to the current 68-question format.',
    'Source pages were inspected in September and November 2026; some historical articles were available only through indexed provider content while direct URLs returned errors. Source links may therefore fail. No archived pre-exam snapshot is claimed. Detailed recovery notes are saved in research-2021-2022.json and research-2023-2024.json.',
    'Small, incomplete modern-format coverage can bias the study toward stable structure. The model does not analyse every paper since 1991, infer the authors of individual questions, estimate exam difficulty, or predict exact future question text. No calibrated confidence interval, percentile or question-match probability is provided.',
    'DILR arrays are sorted set-size multisets, not the source’s set order or topic frequencies. VARC arrays are [RC, summary, sentence placement, odd sentence, parajumbles]. Rows without varc or dilr fields (2023 Slots 1 and 3, 2023 Slot 2 VARC) are skipped by the VARC and DILR studies, not imputed.',
    'Official CAT 2026 mock (released 6 November 2026): its instructions give 24/22/22 questions, 40 minutes per section, four questions per RC passage, four or five questions per DILR set and whole-number TITA answers. With 22 DILR questions, sets of four or five allow only one layout, 5/5/4/4/4. The mock-link PDF states the 120-minute, 40-per-section timing for CAT 2026 itself.',
    'The 2026 official mock repeats the 2025 official mock question for question, in a new order. Scored against the real 2025 paper, the 2025 mock got the section counts and DILR layout right (as did simply repeating 2024) but not the Verbal Ability mix (3/3/2/0 against 2/2/2/2) or the TITA count (20 against 23). The 2026 mock therefore confirms format rules but carries no new information about CAT 2026 topics.',
    'TITA counts per section come from IMS for 2025 only (4/11/8 in all three slots). The 2026 TITA forecast repeats 2025; one 2024 slot report gives 2/10/8, so 20 to 23 is the recent range.'
  ]
};
