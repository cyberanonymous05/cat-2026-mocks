/* Topic-level evidence for the CAT 2026 forecast, assembled 2026-11-07.
   QA sub-topic counts per shift: Cracku slot tables (one provider, one labelling scheme, 2020-2025),
   read from the HTML of cracku.in/cat-quant-topic-wise-weightage on 2026-11-07. Every row sums to the
   section size (26 in 2020, 22 from 2021). 2020 was IIM Indore's last CAT.
   Question types by topic: 2IIM question-paper pages, which tag every question with a topic and show
   options (MCQ) or only an answer (TITA). Only pages that carry those tags are used: 2017-2020 and 2024.
   2IIM topic tags are mapped to this project's groups; linear and quadratic equations share one 2IIM tag,
   so 2IIM rows use the merged group EQ. DILR set types and RC themes: IMS slot analyses for 2024-2025,
   described here in this project's own short words. Nothing here is official CAT data. */
window.CAT_TOPICS = {
  version: 'CAT-topic-study-v1.0', reviewed: '2026-11-07', targetYear: 2026, total: 22,
  groups: [
    {key: 'RAM', short: 'Ratio, averages & mixtures', label: 'Ratio, proportion, averages & mixtures', family: 'Arithmetic', looksLike: 'ratios and proportion, averages, mixtures and alligation, partnership shares'},
    {key: 'PLI', short: 'Percent, profit & interest', label: 'Percentages, profit & loss, interest', family: 'Arithmetic', looksLike: 'percentage change, discounts and profit, simple and compound interest'},
    {key: 'TSDW', short: 'Speed, distance & work', label: 'Time, speed, distance & work', family: 'Arithmetic', looksLike: 'relative speed, trains, boats, races and circular tracks; work rates and pipes'},
    {key: 'LIN', short: 'Linear equations & inequalities', label: 'Linear equations & inequalities', family: 'Algebra', looksLike: 'equations built from a word problem, integer solutions, inequalities, modulus'},
    {key: 'QUAD', short: 'Quadratics', label: 'Quadratic & polynomial equations', family: 'Algebra', looksLike: 'roots and coefficients, symmetric identities, quadratics with a parameter'},
    {key: 'LOG', short: 'Logs & exponents', label: 'Logarithms, exponents & surds', family: 'Algebra', looksLike: 'log laws and change of base, exponential equations, indices and surds'},
    {key: 'FUNC', short: 'Functions', label: 'Functions & graphs', family: 'Algebra', looksLike: 'composition, functional equations, graphs, maxima and minima'},
    {key: 'PROG', short: 'Progressions', label: 'Progressions & series', family: 'Modern Math', looksLike: 'AP and GP terms and sums, telescoping series'},
    {key: 'GEO', short: 'Geometry', label: 'Geometry & mensuration', family: 'Geometry', looksLike: 'triangles, circles and tangents, quadrilaterals, solids, coordinate geometry'},
    {key: 'NUM', short: 'Number system', label: 'Number system', family: 'Number Systems', looksLike: 'divisibility and factors, remainders, digits, HCF and LCM'},
    {key: 'PNC', short: 'P&C and probability', label: 'Permutations, combinations & probability', family: 'Modern Math', looksLike: 'counting arrangements and selections, probability'},
    {key: 'SETS', short: 'Sets & Venn', label: 'Sets & Venn diagrams', family: 'Modern Math', looksLike: 'two- and three-set Venn counts, inclusion and exclusion'}
  ],
  cracku: {
    provider: 'Cracku', source: 'https://cracku.in/cat-quant-topic-wise-weightage', accessed: '2026-11-07',
    note: 'Column order follows groups. Cracku lists "Mixture solution" separately in 2025 (added to RAM) and lists linear equations and inequalities separately in 2020-2021 (added together). Percentage questions sit with averages and ratios in 2020-2021.',
    rows: [
      {year: 2020, slot: 1, counts: [4, 2, 4, 3, 1, 4, 2, 0, 3, 1, 2, 0]},
      {year: 2020, slot: 2, counts: [3, 2, 5, 5, 1, 1, 1, 1, 4, 1, 1, 1]},
      {year: 2020, slot: 3, counts: [3, 2, 4, 4, 1, 4, 3, 0, 2, 3, 0, 0]},
      {year: 2021, slot: 1, counts: [4, 2, 3, 4, 1, 1, 0, 2, 3, 1, 1, 0]},
      {year: 2021, slot: 2, counts: [5, 1, 3, 3, 2, 1, 1, 2, 3, 0, 1, 0]},
      {year: 2021, slot: 3, counts: [4, 1, 3, 5, 1, 1, 1, 1, 4, 0, 1, 0]},
      {year: 2022, slot: 1, counts: [5, 3, 1, 2, 1, 0, 3, 1, 3, 1, 1, 1]},
      {year: 2022, slot: 2, counts: [5, 1, 2, 2, 1, 1, 2, 3, 3, 1, 1, 0]},
      {year: 2022, slot: 3, counts: [2, 1, 5, 3, 3, 1, 1, 1, 3, 1, 1, 0]},
      {year: 2023, slot: 1, counts: [2, 2, 4, 3, 2, 2, 0, 2, 3, 2, 0, 0]},
      {year: 2023, slot: 2, counts: [3, 3, 2, 3, 2, 1, 1, 2, 2, 3, 0, 0]},
      {year: 2023, slot: 3, counts: [3, 1, 3, 4, 1, 1, 1, 3, 3, 2, 0, 0]},
      {year: 2024, slot: 1, counts: [5, 2, 2, 1, 2, 2, 1, 2, 2, 3, 0, 0]},
      {year: 2024, slot: 2, counts: [4, 2, 2, 2, 2, 2, 1, 1, 3, 2, 1, 0]},
      {year: 2024, slot: 3, counts: [3, 3, 2, 2, 0, 3, 2, 1, 3, 3, 0, 0]},
      {year: 2025, slot: 1, counts: [3, 3, 2, 4, 2, 1, 0, 2, 3, 1, 1, 0]},
      {year: 2025, slot: 2, counts: [3, 2, 2, 4, 2, 1, 1, 2, 3, 2, 0, 0]},
      {year: 2025, slot: 3, counts: [3, 1, 4, 2, 1, 1, 2, 1, 3, 3, 0, 1]}
    ]
  },
  /* group:type for every question, in page order. EQ = linear or quadratic equations and inequalities. */
  twoIIM: {
    provider: '2IIM', source: 'https://online.2iim.com/CAT-question-paper/', accessed: '2026-11-07',
    groups: ['RAM', 'PLI', 'TSDW', 'EQ', 'LOG', 'FUNC', 'PROG', 'GEO', 'NUM', 'PNC', 'SETS'],
    note: 'Pages for 2021-2023 and 2025 show no per-question topic tag, so those years are not used here.',
    rows: [
      {year: 2017, slot: 1, setter: 'IIM Lucknow', items: 'PLI:T TSDW:T RAM:T TSDW:T PLI:T PLI:M TSDW:M RAM:M PLI:M RAM:M PLI:M PLI:M EQ:M RAM:M GEO:M GEO:M GEO:M GEO:M GEO:T GEO:T LOG:M EQ:M LOG:M LOG:M PNC:M EQ:T FUNC:T EQ:T PNC:T GEO:M PROG:M PNC:M FUNC:M PROG:M'},
      {year: 2017, slot: 2, setter: 'IIM Lucknow', items: 'NUM:T TSDW:T RAM:M TSDW:M PLI:M RAM:M PLI:M TSDW:M PLI:M PLI:M RAM:M TSDW:M TSDW:M RAM:M GEO:M GEO:M GEO:M GEO:T GEO:T GEO:T NUM:M LOG:M FUNC:M EQ:M LOG:M LOG:T PROG:T NUM:T PNC:T PNC:T FUNC:T FUNC:M PROG:M PROG:M'},
      {year: 2018, slot: 1, setter: 'IIM Calcutta', items: 'RAM:M GEO:M FUNC:T TSDW:M RAM:T RAM:M RAM:M TSDW:M GEO:M NUM:T LOG:M LOG:M GEO:T NUM:T PLI:T EQ:M TSDW:T GEO:M PLI:M PROG:M NUM:T SETS:T TSDW:T GEO:M LOG:M RAM:M LOG:M TSDW:M GEO:M GEO:M TSDW:T SETS:M FUNC:T RAM:M'},
      {year: 2018, slot: 2, setter: 'IIM Calcutta', items: 'TSDW:M PROG:M RAM:M GEO:T PROG:T GEO:M NUM:T GEO:M LOG:M PNC:T RAM:M GEO:M NUM:M EQ:T GEO:M PROG:M TSDW:T NUM:M RAM:M TSDW:T TSDW:M TSDW:M EQ:T RAM:M GEO:M NUM:M TSDW:T PLI:T PROG:T FUNC:T SETS:M SETS:M RAM:M LOG:M'},
      {year: 2019, slot: 1, setter: 'IIM Kozhikode', items: 'PLI:T LOG:M GEO:T SETS:M GEO:M PLI:M GEO:M GEO:T FUNC:T PROG:M PLI:T NUM:M PLI:M TSDW:M TSDW:M PROG:T GEO:M PLI:M TSDW:T PROG:M GEO:M TSDW:M RAM:M LOG:M RAM:M LOG:M GEO:M GEO:T EQ:T TSDW:T EQ:M TSDW:M FUNC:T RAM:M'},
      {year: 2019, slot: 2, setter: 'IIM Kozhikode', items: 'LOG:M RAM:M NUM:M GEO:M PROG:M NUM:T GEO:M EQ:M PLI:M FUNC:T GEO:T TSDW:M EQ:M TSDW:T TSDW:M RAM:M PLI:T GEO:M LOG:M GEO:M TSDW:M NUM:T RAM:M GEO:M EQ:M NUM:T PLI:M PROG:M PROG:T RAM:M LOG:T PLI:T PLI:M TSDW:T'},
      {year: 2020, slot: 1, setter: 'IIM Indore', items: 'NUM:T FUNC:M PLI:T TSDW:M LOG:T LOG:M TSDW:M RAM:M LOG:M NUM:M EQ:T PLI:T NUM:M TSDW:M EQ:M GEO:T GEO:M GEO:M TSDW:M NUM:M LOG:M GEO:M PLI:M RAM:M PROG:T RAM:T'},
      {year: 2020, slot: 2, setter: 'IIM Indore', items: 'TSDW:M GEO:M RAM:M EQ:T LOG:M PROG:M NUM:T PLI:T GEO:M EQ:M PLI:M EQ:T SETS:M FUNC:M TSDW:M GEO:M EQ:M EQ:M TSDW:M TSDW:M GEO:T TSDW:T PLI:M EQ:M RAM:T NUM:T'},
      {year: 2020, slot: 3, setter: 'IIM Indore', items: 'LOG:M NUM:T LOG:M TSDW:T GEO:M RAM:T NUM:M PLI:M FUNC:M LOG:T LOG:T NUM:M TSDW:M PLI:M EQ:M PNC:T RAM:M RAM:M GEO:M PLI:T TSDW:M TSDW:M EQ:M GEO:T GEO:M NUM:M'},
      {year: 2024, slot: 1, setter: 'IIM Calcutta', items: 'RAM:T EQ:M LOG:M FUNC:M TSDW:T PLI:M FUNC:M EQ:M PNC:T NUM:M RAM:T PLI:M EQ:M PROG:M TSDW:M GEO:M RAM:M FUNC:T GEO:T EQ:T PLI:M LOG:T'},
      {year: 2024, slot: 2, setter: 'IIM Calcutta', items: 'NUM:M EQ:M LOG:M FUNC:M GEO:M TSDW:T PLI:T PROG:M LOG:T RAM:M PNC:T PLI:T EQ:T GEO:T PLI:M EQ:M TSDW:M GEO:M RAM:M EQ:M EQ:T EQ:M'},
      {year: 2024, slot: 3, setter: 'IIM Calcutta', items: 'EQ:T EQ:M EQ:M GEO:M PLI:M NUM:M GEO:T PLI:M TSDW:M RAM:T PLI:T PLI:M RAM:T PNC:T TSDW:M LOG:T PROG:M EQ:T RAM:M FUNC:M GEO:M LOG:M'}
    ]
  },
  /* A convening IIM's previous turn, six years earlier, against its next paper. */
  setterPairs: [
    {setter: 'IIM Lucknow', earlier: 2017, later: 2023},
    {setter: 'IIM Calcutta', earlier: 2018, later: 2024},
    {setter: 'IIM Kozhikode', earlier: 2019, later: 2025}
  ],
  indore: {
    years: [2013, 2014, 2020],
    note: 'IIM Indore also convened CAT 2013 (computer-based, 60 questions in two sections) and CAT 2014 (100 questions in two sections, 170 minutes). Neither format is comparable with today’s three 40-minute sections, so only 2020 is used.',
    paper2020: {questions: 76, sections: [26, 24, 26], qaTita: 8,
      dilr: '24 questions in five sets (two of six, three of four), described as more logical reasoning than data interpretation, with several incomplete-data puzzles.',
      varc: '26 questions: 18 reading comprehension and 8 verbal ability (parajumbles, odd sentence and summaries).',
      source: 'https://online.2iim.com/CAT-2020-Analysis-slot-1-slot-2-and-slot-3/'}
  },
  dilr: {
    provider: 'IMS India', accessed: '2026-11-07',
    kinds: {chart: 'DI from a chart', table: 'DI from a table', arrangement: 'Arrangement', network: 'Routes, networks & schedules', games: 'Games, tournaments & ratings', puzzle: 'Other logic puzzle'},
    shifts: [
      {year: 2024, slot: 1, source: 'https://techassignments.imsindia.com/?p=10115', sets: [
        {size: 4, tita: 1, area: 'DI', kind: 'chart', label: 'Stock prices on a candlestick chart'},
        {size: 4, tita: 2, area: 'DI', kind: 'chart', label: 'Visits to countries on a bar graph'},
        {size: 5, tita: 5, area: 'LR', kind: 'games', label: 'Six-team tournament in two groups'},
        {size: 4, tita: 1, area: 'LR', kind: 'games', label: 'Star ratings given by web surfers'},
        {size: 5, tita: 1, area: 'DI', kind: 'table', label: 'Two-candidate election data'}]},
      {year: 2024, slot: 2, source: 'https://techassignments.imsindia.com/?p=10119', sets: [
        {size: 5, tita: 3, area: 'LR', kind: 'games', label: 'Ratings of eight gymnasts'},
        {size: 4, tita: 0, area: 'DI', kind: 'chart', label: 'Six firms on two graphs'},
        {size: 4, tita: 2, area: 'LR', kind: 'network', label: 'Walkways around a lake'},
        {size: 5, tita: 3, area: 'LR', kind: 'arrangement', label: 'Numbers 1 to 10 placed in slots'},
        {size: 4, tita: 2, area: 'DI', kind: 'chart', label: 'Cumulative e-commerce ratings'}]},
      {year: 2024, slot: 3, source: 'https://techassignments.imsindia.com/?p=10116', sets: [
        {size: 4, tita: 0, area: 'DI', kind: 'chart', label: 'App subscriptions on a bar graph'},
        {size: 5, tita: 3, area: 'DI', kind: 'chart', label: 'Room temperature on a line graph'},
        {size: 4, tita: 4, area: 'LR', kind: 'network', label: 'Roads and cash machines'},
        {size: 5, tita: 2, area: 'LR', kind: 'puzzle', label: 'Protein and carbohydrate in food items'},
        {size: 4, tita: 1, area: 'DI', kind: 'table', label: 'GDP table of ten countries'}]},
      {year: 2025, slot: 1, source: 'https://www.imsindia.com/cat-2025-slot-1-analysis/', sets: [
        {size: 5, tita: 4, area: 'DI', kind: 'table', label: 'Performance ratings of six employees'},
        {size: 4, tita: 0, area: 'DI', kind: 'table', label: 'Import and export data of five countries'},
        {size: 5, tita: 1, area: 'LR', kind: 'arrangement', label: 'Four people, seven chairs in a circle'},
        {size: 4, tita: 2, area: 'LR', kind: 'puzzle', label: 'Five people answering yes or no'},
        {size: 4, tita: 4, area: 'LR', kind: 'network', label: 'Trains moving between stations'}]},
      {year: 2025, slot: 2, source: 'https://www.imsindia.com/cat-2025-slot-2-analysis/', sets: [
        {size: 5, tita: null, area: 'DI', kind: 'table', label: 'Weighted pollution index'},
        {size: 4, tita: null, area: 'DI', kind: 'chart', label: 'Authors and books on two bar graphs'},
        {size: 4, tita: null, area: 'DI', kind: 'chart', label: 'Scatter plot of yearly indices'},
        {size: 4, tita: null, area: 'LR', kind: 'puzzle', label: 'Ranking six balls in four holes'},
        {size: 5, tita: null, area: 'LR', kind: 'arrangement', label: 'Musicians'}]},
      {year: 2025, slot: 3, source: 'https://www.imsindia.com/cat-2025-slot-3-analysis/', sets: [
        {size: 4, tita: 3, area: 'LR', kind: 'network', label: 'Six friends calling each other'},
        {size: 4, tita: 2, area: 'DI', kind: 'chart', label: 'Four friends solving puzzles, on a chart'},
        {size: 4, tita: 0, area: 'LR', kind: 'arrangement', label: 'Seven students in a circle'},
        {size: 5, tita: 3, area: 'DI', kind: 'table', label: 'Currency exchange among four countries'},
        {size: 5, tita: 3, area: 'DI', kind: 'chart', label: 'Trade balance: imports and exports'}]}
    ]
  },
  rc: {
    provider: 'IMS India', accessed: '2026-11-07',
    themes: {science: 'Science, nature & environment', technology: 'Technology & AI', society: 'Economics, business, history & law', culture: 'Arts, literature & language', mind: 'Philosophy & psychology'},
    shifts: [
      {year: 2024, slot: 1, passages: [['technology', 'Digital rights over streamed content'], ['culture', 'Craftsmanship and creativity'], ['science', 'Bringing back bandicoots'], ['society', 'A critique of behavioural economics']]},
      {year: 2024, slot: 2, passages: [['society', 'The spice trade'], ['technology', 'Unintended effects of technology'], ['science', 'Peer review of research'], ['science', 'Conflict between carnivores and people']]},
      {year: 2024, slot: 3, passages: [['society', 'A liquor brand’s success'], ['science', 'Contaminating space'], ['culture', 'Endangered languages'], ['technology', 'Why AI needs regulating', true]]},
      {year: 2025, slot: 1, passages: [['mind', 'Diagnosing mental disorders in the past'], ['society', 'Income inequality and growth'], ['culture', 'Objections to electronic music'], ['science', 'Complex systems and rare extreme events']]},
      {year: 2025, slot: 2, passages: [['science', 'How a fish adapted and evolved'], ['technology', 'Biases of AI', true], ['culture', 'Place in literature'], ['mind', 'Science and culture']]},
      {year: 2025, slot: 3, passages: [['science', 'Harm done by dams'], ['technology', 'AI and ethical decisions', true], ['society', 'A forest law'], ['culture', 'Tribal art']]}
    ]
  },
  /* Verbal-ability types per shift: [summary, sentence placement or completion, odd sentence, parajumbles]. */
  va: [
    {year: 2022, mix: [3, 2, 0, 3]}, {year: 2023, mix: [2, 2, 2, 2]}, {year: 2024, mix: [3, 3, 2, 0]}, {year: 2025, mix: [2, 2, 2, 2]}
  ],
  /* Forecast sub-topic of every QA question in the ten practice papers, in question order. */
  mocks: {
    '01': 'PLI RAM RAM TSDW TSDW PLI RAM RAM QUAD LOG LIN QUAD FUNC FUNC GEO GEO GEO NUM NUM PROG PNC LIN',
    '02': 'PLI RAM TSDW TSDW RAM PLI PLI LIN QUAD LOG LIN QUAD FUNC GEO GEO GEO PROG NUM NUM LIN PNC PROG',
    '03': 'PLI TSDW RAM RAM TSDW RAM TSDW LIN LOG QUAD PROG QUAD FUNC LIN FUNC GEO GEO GEO NUM NUM PROG PNC',
    '04': 'PLI TSDW TSDW RAM RAM PLI PROG TSDW RAM PLI QUAD LIN LOG LIN FUNC GEO GEO GEO NUM NUM PNC LIN',
    '05': 'RAM RAM TSDW PLI TSDW RAM PLI RAM LOG QUAD QUAD LIN FUNC LIN GEO GEO GEO NUM NUM NUM PNC PROG',
    '06': 'PLI LIN GEO TSDW NUM PROG TSDW QUAD NUM RAM GEO PNC RAM LOG PLI PROG GEO NUM PLI LIN SETS TSDW',
    '07': 'PLI TSDW LIN GEO TSDW RAM NUM QUAD LIN RAM LOG GEO NUM PLI FUNC GEO PNC RAM LOG LIN PROG TSDW',
    '08': 'PLI QUAD TSDW GEO TSDW QUAD PNC PLI NUM PLI LOG GEO RAM LIN RAM NUM PROG PROG TSDW GEO SETS LIN',
    '09': 'PLI QUAD TSDW LOG PLI PNC GEO LIN TSDW LIN NUM RAM FUNC GEO TSDW RAM LOG LOG LIN RAM TSDW FUNC',
    '10': 'SETS QUAD TSDW NUM PLI GEO LIN TSDW NUM LIN RAM GEO QUAD LOG PLI PNC RAM LIN GEO NUM TSDW PROG'
  },
  /* DI or LR for each DILR set of the ten papers, in set order. */
  mockDilr: {
    '01': 'DI LR LR LR LR', '02': 'DI LR DI DI LR', '03': 'DI LR DI LR LR', '04': 'DI LR DI LR DI', '05': 'LR DI DI LR LR',
    '06': 'LR DI LR DI LR', '07': 'LR DI LR LR LR', '08': 'DI LR LR DI LR', '09': 'LR DI LR LR LR', '10': 'DI DI LR LR LR'
  },
  scenarios: {'07': 'IIM Indore lean', '09': 'IIM Indore 2020 replay'}
};
