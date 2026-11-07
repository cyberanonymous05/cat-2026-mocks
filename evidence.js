/* Dashboard adapter: the same model serves historical folds and 2026. */
window.CAT_EVIDENCE = {
  reviewed: window.CAT_HISTORY.reviewed,
  families: ['Arithmetic', 'Algebra', 'Geometry', 'Numbers', 'Modern Math'],
  rows: window.CAT_HISTORY.rows.map(r=>({...r,counts:[...r.qa],alternative:r.alternativeQA})),
  exclusions: window.CAT_HISTORY.notes.join(' '),
  structureSource: 'https://www.imsindia.com/cat-exam-analysis/',
  convention: 'Historical counts retain the reporting source’s categories. Mock tags use our study syllabus, so individual Algebra and Modern Math counts are not directly comparable. The practice papers include logarithms and functions under Algebra. Their displayed topic mixes are authored syllabus-coverage scenarios, not rounded model forecasts.'
};

window.catForecast = function () {
  const study=window.CATForecastEngine.runStudy(window.CAT_HISTORY.rows,'raw');
  return {means:study.forecast.prediction,spread:study.forecast.observed,baselineMAE:study.summary.last.mae,selectorMAE:study.summary.selector.mae,combinedShare:(study.forecast.prediction[0]+study.forecast.prediction[1])/22*100,study};
};
