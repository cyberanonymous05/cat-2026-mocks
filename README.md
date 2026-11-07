# CAT Intelligence — ten complete practice papers and forecast research

Open the local website at [http://localhost:8000](http://localhost:8000).

- [Topic forecast](topics.html): how many questions to expect from each of twelve Quant topics, the usual question form (MCQ or typed answer), DILR set types and the VARC mix, with IIM Indore's earlier paper tested.
- [Forecast validation](validation.html): the expanded, source-linked historical study, method comparison, 2026 count forecast and source-sensitivity controls.
- [Ten-paper library](papers.html): 680 original CAT-style questions on an exam screen laid out like the computer-based test (section tabs, Time Left, colour-coded question palette, Save & Next, Mark for Review & Next, Question Paper view, on-screen calculator), timed exams or untimed practice, independent saved attempts and worked solutions.
- [Dashboard](index.html): preparation syllabus, historical paper index and research notes.
- [2025 replay](backtest.html): the original, separate 2024-to-2025 prediction-and-reveal exercise.

## What improved

**v4.2 (2026-11-07): topic-level forecast, IIM Indore, mocks rebuilt to follow it.** The forecast now goes below the five families to twelve Quant topics, using Cracku's shift tables for 2020–2025 (18 shifts, one labelling scheme, including IIM Indore's 2020 paper) and 348 questions from 2017–2020 and 2024 that 2IIM tags with topic and type. Most likely 2026 mix: ratio, averages and mixtures 3; percent, profit and interest 2; speed, distance and work 2 (range 2–4); linear equations and inequalities 4 (2–4); quadratics 2; logs and exponents 1; functions 1; progressions 2; geometry 3; number system 2; P&C and probability 0–1; sets 0–1. Older years were tested, not assumed: forecasting 2022–2025 from earlier years only, letting each year count 0.7 times the next (half-life 2 years) gave 0.72 questions per topic, against 0.75 using mostly the last year, 0.74 weighting every year equally and 0.99 for an equal split. Two shifts of the same year differ by 0.68, so little room is left. P&C and probability is usually a typed answer (8 of 10 tagged); number system and functions about half; geometry, logarithms and ratio questions mostly MCQ.

IIM Indore last set CAT in 2020 (and in 2013–2014, in formats too different to compare). Its 2020 paper had more time-speed-distance, logarithms and functions and almost no progressions, and logic-heavy DILR. Whether a setter repeats itself was tested on the three IIMs that set CAT twice since 2017 (Lucknow 2017→2023, Calcutta 2018→2024, Kozhikode 2019→2025): correlations −0.41, +0.11 and +0.33, pooled slope −0.03. No repeat was found, so the central forecast is not tilted towards Indore 2020; Paper 07 leans towards it and Paper 09 replays it as scenarios. DILR in 2024–2025 had two or three data-interpretation sets in every shift; AI was an RC subject in three of the last six shifts.

All ten papers were brought inside the topic forecast: 25 QA questions were replaced with new, independently checked ones (mostly linear equations and inequalities, progressions, logarithms and time-speed-distance, replacing surplus P&C, number-system and geometry questions), and Papers 04 and 05 exchanged two DILR sets so that each has two or three DI sets. `tests/validate-topics.cjs` checks the data, the forecast figures and that every regular paper sits inside every likely range. Paper 01 keeps one DI set, and Papers 07 and 09 are scenarios.

**v4.1 (2026-11-06): the official CAT 2026 mock.** The official mock went live on iimcat.ac.in on 6 November 2026. Its instructions and the mock-link PDF confirm 24 / 22 / 22 questions, 40 minutes per section (stated for CAT 2026 itself), four questions per RC passage, four or five questions per DILR set, MCQ +3 / −1, TITA +3 / 0 and whole-number TITA answers. With 22 DILR questions, sets of four or five allow only one layout, `5 / 5 / 4 / 4 / 4`, so the DILR forecast now follows from an official rule rather than from carrying 2025 forward. Only counts and question types were recorded from the mock screens, never question text.

The 2026 mock repeats the 2025 official mock question for question (same RC passage and DILR set identifiers, same QA fingerprint and type counts, new order), so it carries no new information about 2026 topics. Scored against the real 2025 paper, the 2025 mock matched section counts and DILR layout (as repeating 2024 also did) but showed a Verbal Ability mix of 3 / 3 / 2 / 0 against the actual 2 / 2 / 2 / 2 and 20 TITA questions against 23. Its QA mix, with labels assigned in this project, was no better than repeating 2024 on merged groups (error 0.67 against 0.50). The TITA forecast for 2026 is therefore 4 / 11 / 8 = 23 (VARC / DILR / QA), repeating IMS's 2025 counts, with 20 to 23 the recent range. `mockBacktest`, `titaForecast` and `setLayouts` in `forecast-engine.js` reproduce these figures, and the evidence page shows them under "Official CAT 2026 mock".

**v4.0 (2026-11-05).** The main study now uses thirteen complete IMS QA reports covering 2021, 2022, 2023, 2024 and 2025: 286 reported question allocations, with no missing calendar year. Four chronological tests target 2022, 2023, 2024 and 2025 using only earlier exam-year inputs (v3.0 had three tests and a 2023 gap). Five rows were added: 2022 Slots 1 and 3 and 2023 Slots 1 to 3. Only 2022 Slot 1 was opened directly; the other four were read from IMS page content in search results because direct IMS URLs returned 404 or 410, so they are less verified than the rest. The study compares a last-year baseline, equal-year history, fixed recency weighting, their fixed ensemble and a uniform null baseline. A separate selector chooses a method using only earlier completed tests.

The selector again ties the last-year baseline; no added method improved its historical result. Primary-source results:

| QA grouping | Annual-average absolute error per category | Annual-average count overlap | Exact count cells |
|---|---:|---:|---:|
| Five reported families | 0.7889 questions | 91.04% | 14/55 |
| Four groups, merging Algebra + Modern Math | 0.7222 questions | 93.43% | 15/44 |

Scores average slots within each target year, then weight the four target years equally. Merging categories reduces a known classification conflict and makes overlap easier to achieve; these two percentages are not comparable measures of question-prediction skill. The interface also recomputes results using the conflicting IMS tables (2023 Slot 2 and 2025 Slot 1).

The selected 2026 rule is the mean of the available 2025 slots. In the source order Arithmetic, Algebra, Geometry, Numbers, Modern Math, it forecasts `[7.6667, 4.3333, 3, 3, 4]`. Its rounded, 22-question scenario is `[8, 4, 3, 3, 4]`. Historical scoring uses unrounded counts. This forecast is sensitive to the disputed 2023 Slot 2 table: swapping it changes the raw selector to the fixed ensemble.

**Most-likely allocation (best single guess).** Instead of averaging, this picks the whole-number allocation totalling 22 that maximises the expected number of exactly-right families, from per-family count probabilities (year-equal weights, two-year recency half-life). Against last year's mean rounded to whole questions, on the same four test years: merged groups error 0.625 against 0.771 and exact families 54% against 41%; five raw families error 0.750 against 0.783 but exact families 38% against 41%, so no raw-family gain is established. 2026 most-likely: merged groups `[8, 8, 3, 3]`; five families `[8, 4, 3, 3, 4]`. The Algebra against Modern Math split is close to a coin flip. Four test years is small, and the half-life was fixed after trying a few variants.

**What was tried and did not help.** A damped linear trend scored worse than repeating last year (raw error 0.856 against 0.789). Slot-to-slot spread inside one exam year is about 0.787, almost the same as the last-year error, so little room remains for a better QA count rule.

**IIM Indore as setter.** IIM Indore convenes CAT 2026 (secondary reporting, supported by the official portal: disputes fall under the CAT Centre 2026 in Indore and the help desk uses an iimidr.ac.in address). Every CAT from 2021 to 2025 had a different convening IIM, so the family-level panel cannot estimate a setter style; the v4.2 topic study tests it with 2017–2019 papers and finds no repeat. Indore's last CAT (2020) used a different 76-question format. The QA mix moved about 1.4 of 22 questions between consecutive years, each time with a new convening IIM.

**VARC and DILR.** Verbal Ability (the 8 non-RC VARC questions) changed type mix in 3 of 3 year pairs; an equal split (2 / 2 / 2 / 2) beat repeating last year. DILR set layout changed in 2 of 4 year pairs; carrying last year's `5 / 5 / 4 / 4 / 4` got the question total right in 3 of 4 test years. These are descriptive tests on four VARC years and five DILR years.

This study was assembled in September and November 2026, after the historical exams were known. The chronological calculations are reproducible, but this is not a previously published or genuinely blind forecast. Count overlap does not measure matched question text, and future accuracy remains unmeasured.

## The ten papers and downloads

Each of the ten complete papers contains 24 VARC, 22 DILR and 22 QA questions: 45 MCQ and 23 TITA, with four original RC passages, a Verbal Ability mix of two summaries, two placement or completion items, two parajumbles and two odd-sentence items, and five connected DILR sets of 5 / 5 / 4 / 4 / 4. The collection totals 680 questions, 40 RC passages and 50 DILR sets. Every question has a worked solution, and every TITA answer is a whole number, as the official mock requires. These are original preparation materials, not official or leaked CAT 2026 papers.

| Paper | Practice emphasis | QA family count: Arithmetic / Algebra / Geometry / Numbers / Modern Math | DI / LR sets |
|---|---|---|---|
| [01](prediction.html?paper=01) | Topic forecast, the original paper | 8 / 7 / 3 / 2 / 2 | 1 / 4 |
| [02](prediction.html?paper=02) | Topic forecast | 8 / 6 / 3 / 2 / 3 | 3 / 2 |
| [03](prediction.html?paper=03) | Topic forecast, harder | 7 / 7 / 3 / 2 / 3 | 2 / 3 |
| [04](prediction.html?paper=04) | Topic forecast, arithmetic-rich | 9 / 6 / 3 / 2 / 2 | 3 / 2 |
| [05](prediction.html?paper=05) | Topic forecast, harder | 8 / 6 / 3 / 3 / 2 | 2 / 3 |
| [06](prediction.html?paper=06) | Most likely family mix (about 17%) | 8 / 4 / 3 / 3 / 4 | 2 / 3 |
| [07](prediction.html?paper=07) | IIM Indore lean (scenario) | 8 / 7 / 3 / 2 / 2 | 1 / 4 |
| [08](prediction.html?paper=08) | Third most likely family mix (about 14%) | 8 / 5 / 3 / 2 / 4 | 2 / 3 |
| [09](prediction.html?paper=09) | IIM Indore 2020 replay (scenario) | 9 / 9 / 2 / 1 / 1 | 1 / 4 |
| [10](prediction.html?paper=10) | Topic forecast | 8 / 7 / 3 / 2 / 2 | 2 / 3 |

Every regular paper has each of the twelve Quant topics inside its likely range on the [topic forecast](topics.html), and the papers differ from each other roughly as much as two shifts of one CAT do. Family counts follow each question's own label, so logarithms and functions count as Algebra and progressions, P&C and sets as Modern Math; analysts' family counts differ for the same reason. Percentages are model probabilities from a small sample, not calibrated odds. Difficulty labels and topic mixes are practice scenarios, not calibrated performance estimates or competing predictions of the exact future paper. Logarithms and functions are tagged Algebra in this practice taxonomy. These allocations are not rounded copies of the source-taxonomy forecast.

The exam screen follows computer-based test conventions: a choice is saved only by Save & Next or Mark for Review & Next, jumping from the palette discards an unsaved choice, Clear Response removes a saved answer, answered-and-marked questions are evaluated, and Submit shows an exam summary before a second confirmation. Exam mode runs each section for 40 minutes in order and advances automatically; in this practice screen a section may also be submitted early. Closing the tab does not pause the timer. Practice mode is untimed. The on-screen calculator has memory keys, square root, percentage and reciprocal and can be dragged. Each paper has its own saved attempt in browser storage; switching papers preserves the other attempts. On 2026-11-07 every paper changed version (01–05 to v3, 06–10 to v2) because questions were replaced to follow the topic forecast; attempts saved under earlier versions stay in browser storage but are no longer shown. Clearing browser data removes saved attempts. Use the same browser and hostname to resume: localhost and 127.0.0.1 have separate storage. Scoring is +3 for correct answers, −1 for wrong MCQ, and 0 for wrong TITA or unanswered questions. The raw result is not a calibrated CAT percentile.

Use one editing tab per paper. Read-only question/solution tabs do not save attempts. If a competing tab changes the same paper, a stale editor returns to the desk and loads the saved version before letting you resume; it does not merge simultaneous edits. Starting fresh requires confirmation when an attempt already exists.

- [All ten question papers and ten solution PDFs](CAT-2026-Ten-Papers-PDFs.zip)
- [Individual PDFs, question readers and worked solutions](papers.html)
- [Forecast audit JSON](CAT-2026-Forecast-Audit.json)
- [Sourced topic data CSV](CAT-2021-2025-Topic-Data.csv)
- [Study pack ZIP](CAT-2026-Study-Pack.zip)

The separate 2025 replay retains its original results: QA overlap 90.91%, with 6/15 exact cells and MAE 0.8; VARC overlap 91.67%, falling to 75% when RC is excluded. It misses the return of parajumbles. Its 9/9 exact section-count matches concern structure only. These are single-transition results, separate from the multi-year QA study above.

## Coverage and source limits

The numerical panel contains IMS reports only. Missing cells and unavailable slots are excluded: 2021 Slot 1 (no Numbers row) and 2024 Slot 3 (inconsistent table). VARC and DILR detail was not recovered for 2023 Slots 1 and 3. Career Launcher material for 2023 remains supplementary and is not fitted into this IMS panel.

Some older IMS articles were recoverable only through indexed provider content; their direct links may return errors. Counts use coaching classifications, not an official IIM topic taxonomy, and classification boundaries can change even within IMS. The source notes identify these gaps and conflicts. Source access in 2026 does not establish immutable pre-exam snapshots.

The 1991–2025 index is not a completed question-by-question audit of every paper. The model does not validate exact questions, RC subjects, DILR contexts, difficulty or author-specific predictions. The official CAT portal was read on 5–6 November 2026 (media release, mock-link PDF and the official mocks for 2025 and 2026); earlier convenors remain secondary reporting. A convenor is not a verified author of individual questions.

## Files and verification

`history-data.js` stores the primary historical rows and source notes. `forecast-engine.js` provides the chronological forecast and scoring functions plus the v4.0 diagnostics (trend experiment, slot-noise floor, setter swing, VARC and DILR studies); `validation.js` renders the study. `topic-data.js` holds the v4.2 topic-level evidence (Cracku shift tables, 2IIM question tags, IMS DILR sets and RC subjects, and the topic of every practice question); `topics.html` and `topics.js` render the topic forecast with `topicForecast`, `topicBacktest`, `titaTendency` and `setterRepeatTest` from the engine. `backtest-data.js` and `backtest.js` retain the separate 2025 replay. `evidence.js` supports the dashboard. The three `prediction-*.js` section files contain Paper 01; `papers/paper-02-*.js` through `papers/paper-10-*.js` contain the other nine. `paper-catalog.js` declares exactly ten releases; `paper-loader.js` loads only the selected paper. `prediction.js` handles attempts, timing, the exam screen, the calculator, review and printing; `cbt.css` styles the exam screen. Papers 06–10 are generated and checked by `tests/build-qa-06-10.py` (QA keys plus independent calculations) and `tests/dilr-series-06-10.py` (DILR sets solved by exhaustive enumeration). Answers are delivered to the browser, so this is a personal practice application.

Start the server:

```bash
python3 -m http.server 8000 --bind 127.0.0.1   # run inside the project folder
```

From the project folder, run:

```bash
node tests/validate-history.cjs
node tests/validate-model.cjs
node tests/validate-extensions.cjs
node tests/validate-series.cjs
node tests/validate-varc-series.cjs
node tests/validate-topics.cjs
python3 tests/validate-qa-series.py
python3 tests/validate-dilr-series.py
python3 tests/dilr-series-06-10.py
python3 tests/browser-check.py
python3 tests/browser-storage.py
python3 tests/export-pdfs.py          # or: python3 tests/export-pdfs-chrome.py (installed Chrome, server on port 8765)
node tests/export-audit.cjs
python3 tests/export-pack.py
python3 tests/browser-series.py --check-downloads
```

The checks cover historical calculations, all 680 question schemas, whole-number TITA answers, distinct passages/sets, topic allocations, independent quantitative calculations, DILR constraint enumeration, per-paper storage, scoring, timed transitions, mobile overflow and downloads. Structural checks do not establish verbal-answer correctness; Papers 02–10 also received an author review of RC inferences, distractors and paragraph ordering. Exporters regenerate twenty PDFs, a PDF hash/page-count manifest, the audit downloads, a twenty-PDF ZIP and the complete website study pack. Only whitelisted release files enter the packs; unused drafts are excluded.

In this workspace, Node is available at `/opt/conda/lib/python3.11/site-packages/playwright/driver/node`. The QA validator uses SymPy. Browser checks and PDF exports use installed Playwright Chromium and require access to the running local server. If moving the project to another computer, install these test dependencies and adjust the Chromium executable path in the browser/export scripts; the website itself needs only Python's static server and a modern browser.
