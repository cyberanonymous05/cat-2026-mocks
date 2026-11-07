# CAT 2026 research summary

Generated 2026-11-07T10:47:24.081Z. Dataset CAT-count-study-v4.0; sources reviewed 2026-11-05.

This is a retrospective QA topic-count study using 13 complete IMS India slot reports from 2021, 2022, 2023, 2024, 2025. It contains 286 reported allocations, not that many independent predictions. Historical outcomes were already known when the study was assembled. Supplementary providers are excluded from every fitted result.

## Coverage and evaluation

There are 4 target-year folds: 2022, 2023, 2024, 2025. Missing years within the covered interval: none. A missing year remains a gap; the most recent available year can be older than the immediately preceding calendar year. Slots within a year are correlated.

| Target year | Training years | Training slots | Target slots | Method selected before target evaluation | QA MAE |
| --- | --- | ---: | ---: | --- | ---: |
| 2022 | 2021 | 2 | 3 | Last-year baseline | 0.800 |
| 2023 | 2021, 2022 | 5 | 3 | Last-year baseline | 1.022 |
| 2024 | 2021, 2022, 2023 | 8 | 2 | Last-year baseline | 0.533 |
| 2025 | 2021, 2022, 2023, 2024 | 10 | 3 | Last-year baseline | 0.800 |

Year-level results have equal weight. Within each training year, available slots have equal weight. Recency uses a fixed two-calendar-year half-life. The selector consults only completed earlier folds; ties favour last-year, then equal-year, recency and ensemble. The uniform null is never a selection candidate.

## What the comparison found

| Rule | Raw MAE | Raw allocation overlap | Broad MAE | Broad allocation overlap |
| --- | ---: | ---: | ---: | ---: |
| Last-year baseline | 0.789 | 91.04% | 0.722 | 93.43% |
| Equal-year history | 0.828 | 90.59% | 0.783 | 92.88% |
| Recency, 2-year half-life | 0.806 | 90.84% | 0.745 | 93.23% |
| Fixed three-rule ensemble | 0.797 | 90.94% | 0.737 | 93.30% |
| Uniform null baseline | 1.853 | 78.94% | 1.950 | 82.27% |
| Chronological selector | 0.789 | 91.04% | 0.722 | 93.43% |

For raw groups, the selector ties the last-year baseline on MAE (0.789). It establishes no improvement over that simple baseline. For broad groups, the selector ties the last-year baseline on MAE (0.722). It establishes no improvement over that simple baseline. The selected 2026 raw-group method is **Last-year baseline**; the broad-group method is **Last-year baseline**.

MAE is error in the number of questions per category. Allocation overlap is 100 × (1 − absolute error / (2 × 22 × target-slot count)); the table averages this measure over target years. It is not the percentage of exam questions predicted. Exact raw count cells for the selector: 14/55. Merging Algebra with Modern Math reduces one classification-boundary problem and also makes the comparison coarser; a higher broad overlap does not show improved exact-question prediction.

## The 2026 preparation scenario

| QA family | Unrounded expected count | Integer practice allocation | Observed count range |
| --- | ---: | ---: | ---: |
| Arithmetic | 7.667 | 8 | 7–10 |
| Algebra | 4.333 | 4 | 4–8 |
| Geometry | 3.000 | 3 | 2–4 |
| Numbers | 3.000 | 3 | 1–4 |
| Modern Math | 4.000 | 4 | 2–4 |

The integer allocation totals 22 using largest-remainder rounding. Unrounded values drive all scores. Observed ranges and historical errors describe this incomplete sample; they are not calibrated prediction intervals. This scenario supports topic balance in practice and does not establish future difficulty or exact question text.

## Most-likely allocation (the best single guess)

Instead of averaging, this rule builds a probability for each count of each family from the earlier slots (year-equal weights, two-year recency half-life, fixed before scoring) and picks the integer allocation totalling 22 that maximises the expected number of exactly-right families. Compared on the same 4 test years with last year's mean and with that mean rounded to integers (the fair baseline, since a fractional forecast cannot match a count exactly):

| Grouping | Most-likely MAE | Most-likely exact families | Rounded last-year MAE | Rounded last-year exact | Last-year mean MAE |
| --- | ---: | ---: | ---: | ---: | ---: |
| Five families | 0.750 | 38% | 0.783 | 41% | 0.789 |
| Four merged groups | 0.625 | 54% | 0.771 | 41% | 0.722 |

On the merged groups the rule is better than rounded last year on error and exact hits; on the five raw families error improves slightly but exact hits do not (38% against 41%), so no raw-family gain is established. Four test years is a small sample, and the half-life was fixed after trying a few variants; unsmoothed variants gave the same scores except a one-year half-life on the raw families. Most-likely allocation for 2026: merged groups [8, 8, 3, 3] (Arithmetic 8 (67%), Algebra + Modern Math 8 (60%), Geometry 3 (84%), Numbers 3 (35%)); five families [8, 4, 3, 3, 4] (Arithmetic 8 (67%), Algebra 4 (34%), Geometry 3 (84%), Numbers 3 (35%), Modern Math 4 (50%)). Percentages are model probabilities from a small sample, not calibrated odds. The Algebra against Modern Math split is close to a coin flip (Algebra 4 at 34% against 5 at 37%).

## What did not help

A damped linear trend (half of the fitted yearly drift carried forward, damping fixed before scoring) did not beat the last-year baseline: raw MAE 0.856 against 0.789, broad 0.779 against 0.722. Arithmetic is drifting down and Numbers up, but the drift is smaller than the year-to-year noise.

Slot-to-slot noise inside one exam year gives a rough floor: predicting each slot from the other slots of the same year misses by 0.787 raw (0.783 broad). The last-year baseline already misses by 0.789 raw (0.722 broad). The room left for a better QA count rule is therefore close to zero; the remaining error is how different slots of one exam differ.

## Setter effect (IIM Indore)

IIM Indore convenes CAT 2026 (secondary reporting, supported by the official portal: disputes fall under the CAT Centre 2026 in Indore and the help desk uses an iimidr.ac.in address). Convening IIMs were 2021 IIM Ahmedabad, 2022 IIM Bangalore, 2023 IIM Lucknow, 2024 IIM Calcutta, 2025 IIM Kozhikode. Every consecutive pair of years changed the convening IIM, so the IMS family panel cannot estimate a setter style; the topic-level section below tests it with 2017-2019 papers. Indore's last CAT (2020) used a different format (76 questions: 26/24/26). What the data does show: the yearly QA mix moved by about 1.4 of 22 questions between consecutive years, with a new convening IIM each time. A new setter in 2026 should be treated as that much expected movement, not as a known shift in any direction.

## Verbal Ability type mix and DILR layout

Verbal Ability is the 8 non-RC VARC questions; RC was 16 in every recovered report. The type mix changed in 3 of 3 year-to-year transitions. Last-year MAE 1.167, equal-year 1.000, equal split 0.667. Selected 2026 mix (Summary, Sentence placement, Odd sentence, Parajumbles): [2, 2, 2, 2]. Presence across 4 years: Summary 4/4, Sentence placement 3/4, Odd sentence 3/4, Parajumbles 3/4.

DILR layout changed in 2 of 4 transitions. Carrying last year's layout got the question total right in 75% of test years and the exact set sizes in 50%. 2026 default: 22 questions as 5 / 5 / 4 / 4 / 4. Contexts and constraint types are not modelled.

## Official CAT 2026 mock (released 2026-11-06)

Confirmed format: 24/22/22 questions and 40 minutes per section (the mock-link PDF states the 120-minute, 40-per-section timing for CAT 2026 itself), four questions per RC passage, four or five questions per DILR set, MCQ +3/−1, TITA +3/0 with whole-number answers. With 22 DILR questions the set rule allows only 5 / 5 / 4 / 4 / 4.

The 2026 mock repeats the 2025 mock question for question (Same four RC passage IDs, same five DILR set IDs and sizes, same text-length and image fingerprint for all 22 QA questions, same MCQ/TITA counts; only the order is shuffled.), so it carries no new information about 2026 topics. Scored against the real 2025 paper, the 2025 mock matched section counts and DILR layout (repeating 2024 matched too), but showed Verbal Ability 3/3/2/0 against 2/2/2/2 actual (MAE 1.000; equal split 0.000) and TITA 2/10/8 = 20 against 4/11/8 = 23. Its QA mix (labels assigned by this project) had MAE 0.533 raw (0.800 with alternative labels) and 0.667 merged, against 0.800 and 0.500 for repeating 2024: no reliable gain.

TITA forecast for 2026: 4 / 11 / 8 (VARC / DILR / QA) = 23, repeating 2025; reported totals range 20–23.

## Topic-level forecast (QA sub-topics)

Counts per shift come from Cracku's tables for 2020-2025 (18 shifts, one labelling scheme, including IIM Indore's 2020 paper); each year counts 0.7 times the year after it (half-life 2 years). Rolling test on 2022, 2023, 2024, 2025: error 0.724 questions per topic against 0.986 for an equal split and a shift-to-shift floor of 0.678. Typed-answer share by topic comes from 348 2IIM-tagged questions (2017-2020, 2024).

| Topic | Most likely | Likely range (80%) | Appears in a shift | Typed-answer share |
| --- | ---: | ---: | ---: | ---: |
| Ratio, proportion, averages & mixtures | 3 | 2–5 | 100% | 22% |
| Percentages, profit & loss, interest | 2 | 1–3 | 100% | 36% |
| Time, speed, distance & work | 2 | 2–4 | 100% | 34% |
| Linear equations & inequalities | 4 | 2–4 | 100% | 35% |
| Quadratic & polynomial equations | 2 | 1–2 | 91% | 35% |
| Logarithms, exponents & surds | 1 | 1–3 | 96% | 25% |
| Functions & graphs | 1 | 0–2 | 80% | 46% |
| Progressions & series | 2 | 1–2 | 96% | 29% |
| Geometry & mensuration | 3 | 2–3 | 100% | 28% |
| Number system | 2 | 1–3 | 94% | 46% |
| Permutations, combinations & probability | 0 | 0–1 | 43% | 72% |
| Sets & Venn diagrams | 0 | 0–1 | 17% | 21% |

Same-setter test: IIM Lucknow 2017→2023 r = -0.411; IIM Calcutta 2018→2024 r = 0.109; IIM Kozhikode 2019→2025 r = 0.328; pooled slope -0.033. No sign that a convening IIM repeats its earlier topic mix, so the forecast is not tilted towards IIM Indore's 2020 paper. Practice Papers 07 and 09 cover that scenario (IIM Indore lean; IIM Indore 2020 replay).

## Source sensitivity

Conflicting IMS tables exist for 2023 Slot 2 ([7, 8, 2, 2, 3] against [7, 8, 3, 2, 2]) and 2025 Slot 1 ([8, 4, 3, 3, 4] against [8, 5, 3, 3, 3]). Swapping all of them and re-running every fold gives raw selector MAE 0.792 (overlap 91.00%), raw 2026 method **Fixed three-rule ensemble** and raw forecast [7.888, 5.176, 3.078, 2.470, 3.388]. The broad-group study changes (selector MAE 0.714, forecast [7.667, 8.333, 3.000, 3.000]). So the raw 2026 split depends on the disputed table cells (swapping 2023 Slot 2 alone is enough to change the raw method) and should be held loosely. See the audit for both complete reruns and source URLs.

## Sources and gaps

- 2021 Slot 2: [IMS India analysis](https://www.imsindia.com/cat-2021-slot-2-analysis/). Full provider page; root URL redirects to blog URL.
- 2021 Slot 3: [IMS India analysis](https://www.imsindia.com/cat-2021-slot-3-analysis/). Full provider page; root URL redirects to blog URL.
- 2022 Slot 1: [IMS India analysis](https://techassignments.imsindia.com/?p=2831). Opened directly on 2026-11-05 (IMS-hosted page); QA, VARC and DILR tables read from the page.
- 2022 Slot 2: [IMS India analysis](https://www.imsindia.com/blog/cat/cat-2022-slot-2-analysis/). Full provider article content in search index; direct opening unavailable.
- 2022 Slot 3: [IMS India analysis](https://www.imsindia.com/cat-2022-slot-3-analysis/). Direct opening returned 404. Counts read from IMS page content in search results; IMS overall page gave the same QA split.
- 2023 Slot 1: [IMS India analysis](https://www.imsindia.com/blog/cat/cat-2023-slot-1-analysis/). Direct opening returned 404/410 for 2023 pages. Counts read from IMS page content in search results; IMS overall page gave the same split.
- 2023 Slot 2: [IMS India analysis](https://www.imsindia.com/cat-2023-overall-analysis/). Direct opening not possible. Counts read from IMS page content in search results.
- 2023 Slot 3: [IMS India analysis](https://www.imsindia.com/blog/cat/cat-2023-slot-3-analysis/). Direct opening returned 410. Counts read from IMS page content in search results; IMS overall page gave the same split.
- 2024 Slot 1: [IMS India analysis](https://www.imsindia.com/blog/cat/cat-exam-analysis-2024/). Full provider article content in search index; direct opening returned 410.
- 2024 Slot 2: [IMS India analysis](https://www.imsindia.com/blog/cat/cat-2024-slot-2-analysis/). Full provider article content in search index; direct opening returned 410.
- 2025 Slot 1: [IMS India analysis](https://www.imsindia.com/cat-overall-analysis-2025/). Full provider page. TITA counts from the IMS slot page, read 2026-11-06.
- 2025 Slot 2: [IMS India analysis](https://www.imsindia.com/cat-2025-slot-2-analysis/). Full provider page. TITA counts read 2026-11-06.
- 2025 Slot 3: [IMS India analysis](https://www.imsindia.com/cat-2025-slot-3-analysis/). Full provider page. TITA counts read 2026-11-06.

- The primary model uses thirteen complete IMS QA reports from 2021, 2022, 2023, 2024 and 2025: 286 reported question allocations, not 286 independent predictions. Evaluation targets are 2022, 2023, 2024 and 2025. No calendar year inside the covered span is missing.
- v4.0 added five rows (2022 Slots 1 and 3, 2023 Slots 1-3). Only 2022 Slot 1 was opened directly. The others were read from IMS page content in search results because direct IMS URLs returned 404 or 410, the same access limit already noted for 2022 Slot 2 and 2024. These rows are less verified than directly opened pages.
- 2023 Slot 2 has two conflicting IMS tables: overall page Geometry 2 / Modern Math 3, slot article Geometry 3 / Modern Math 2. The overall table is primary and the other is a sensitivity row, as for 2025 Slot 1. Under the alternative, the raw selector changes its 2026 choice, so treat the raw 2026 split as sensitive to this single cell.
- 2021 Slot 1 is excluded because IMS lists no Numbers row (the four stated counts sum to 22). No implicit zero is inserted under this strict complete-explicit-cell rule. 2022 Slots 1 and 3 are now included; see above.
- 2024 Slot 3 stays excluded. IMS overall table leaves Modern Math blank; the slot page table (8/7/3/1/3 with Modern Math 3) equals the Slot 1 vector, while its narrative gives Algebra 5. Copy error cannot be ruled out, so no value is used.
- Career Launcher 2023 counts differ from IMS 2023 counts (for example Slot 1 9/8/3/1/1 against 7/8/4/1/2). Providers classify borderline questions differently, so a count error of about one question per category is classification noise before any forecasting error.
- Taxonomy remains uncertain even within one provider. The 2022 report places functions, logarithms and progressions in Modern Math, while some later descriptions place functions in Algebra. Combining Algebra and Modern Math reduces this known boundary issue but does not establish complete question-level consistency.
- Geometry is not fixed at 3: 2022 Slot 3 and 2023 Slot 1 report 4, and the 2023 Slot 2 overall table reports 2. It is the steadiest family, not a constant.
- Every CAT in 2021-2025 was convened by a different IIM, so each setter appears once and no setter-specific style can be estimated. IIM Indore last convened CAT in 2020, in a 76-question pandemic format that is not comparable to the current 68-question format.
- Source pages were inspected in September and November 2026; some historical articles were available only through indexed provider content while direct URLs returned errors. Source links may therefore fail. No archived pre-exam snapshot is claimed. Detailed recovery notes are saved in research-2021-2022.json and research-2023-2024.json.
- Small, incomplete modern-format coverage can bias the study toward stable structure. The model does not analyse every paper since 1991, infer the authors of individual questions, estimate exam difficulty, or predict exact future question text. No calibrated confidence interval, percentile or question-match probability is provided.
- DILR arrays are sorted set-size multisets, not the source’s set order or topic frequencies. VARC arrays are [RC, summary, sentence placement, odd sentence, parajumbles]. Rows without varc or dilr fields (2023 Slots 1 and 3, 2023 Slot 2 VARC) are skipped by the VARC and DILR studies, not imputed.
- Official CAT 2026 mock (released 6 November 2026): its instructions give 24/22/22 questions, 40 minutes per section, four questions per RC passage, four or five questions per DILR set and whole-number TITA answers. With 22 DILR questions, sets of four or five allow only one layout, 5/5/4/4/4. The mock-link PDF states the 120-minute, 40-per-section timing for CAT 2026 itself.
- The 2026 official mock repeats the 2025 official mock question for question, in a new order. Scored against the real 2025 paper, the 2025 mock got the section counts and DILR layout right (as did simply repeating 2024) but not the Verbal Ability mix (3/3/2/0 against 2/2/2/2) or the TITA count (20 against 23). The 2026 mock therefore confirms format rules but carries no new information about CAT 2026 topics.
- TITA counts per section come from IMS for 2025 only (4/11/8 in all three slots). The 2026 TITA forecast repeats 2025; one 2024 slot report gives 2/10/8, so 20 to 23 is the recent range.

## Reproduce and use

Run `node tests/export-audit.cjs` from the project folder. The JSON audit saves input SHA-256 hashes, all settings, complete raw/broad fold results and the alternative-source reruns. The CSV contains the primary rows only. Start the website with `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://localhost:8000.

The accompanying 68-question paper is original practice material. No actual CAT 2026 paper, confidential question content, exact-paper guarantee or question-match probability is claimed.
