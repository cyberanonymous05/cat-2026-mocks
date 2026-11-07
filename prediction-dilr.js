/* Original CAT-style practice material. These are forecast-inspired questions,
   not the actual CAT 2026 paper or a claim about confidential exam content. */
(() => {
  const subscriptions = `SET 1 — Subscription audit

A learning platform sells three monthly plans: Basic at ₹100, Standard at ₹150 and Premium at ₹250. Each subscriber buys exactly one plan. The following table gives the number of subscribers and the revenue collected in four cities in one month. There are no discounts, taxes or refunds in this original snapshot.

City | Total subscribers | Revenue (₹)
A    | 180               | 27,000
B    | 180               | 27,000
C    | 200               | 31,000
D    | 200               | 33,000

Additional information:
• Premium subscribers in A and B are in the ratio 4:3.
• Basic subscribers in C and A are in the ratio 5:4.
• Standard subscribers in A and C are in the ratio 3:2.
• There are 180 Premium subscribers across the four cities together.

All subscriber counts are whole numbers. Any change described in a question applies only to that question and starts from the original snapshot.`;
  const subscriptionWork = `Let b, s and p be a city's Basic, Standard and Premium counts. Subtracting ₹100 times its total subscriber count from its revenue gives 50s + 150p. Therefore s + 3p equals 180, 180, 220 and 260 in A, B, C and D respectively.
Put p_A = t. Then b_A = 2t, s_A = 180 − 3t and p_B = 3t/4. The Basic-count ratio gives b_C = 5t/2. Since b_C = 2p_C − 20, p_C = 5t/4 + 10 and s_C = 190 − 15t/4. Now s_A:s_C = 3:2 gives 2(180 − 3t) = 3(190 − 15t/4), so t = 40. The total Premium count then fixes p_D = 50.
The reconstructed counts, in the order Basic / Standard / Premium, are:
A: 80 / 60 / 40
B: 60 / 90 / 30
C: 100 / 40 / 60
D: 40 / 110 / 50.`;

  const schedule = `SET 2 — The eight-workshop programme

Eight workshops, A through H, occupy eight sessions from Monday through Thursday, with one morning and one evening session each day. Exactly one workshop occupies each session, and every workshop occurs once.

The workstreams are:
Analytics: A and E
Finance: B and F
Marketing: C and G
Operations: D and H

The programme satisfies all these conditions:
• The two workshops from the same workstream are never on the same day.
• A is in a morning session. A and F are on the same day.
• H is in an evening session.
• G is in the same session of the day as C, on the day immediately after C.
• E occupies the session immediately after B in chronological order. This may be the evening of the same day or the morning of the next day.
• D occurs later than G.

For questions asking for a session number, Monday morning is 1, Monday evening is 2, Tuesday morning is 3, and so on through Thursday evening, which is 8. Additional conditions in different questions are independent.`;
  const scheduleWork = `A and F must form a morning/evening pair, in that order. Consider the possible day and session of C; G is exactly two chronological positions later, D must be later than G, and H must be an evening workshop on a day different from D. Place the consecutive B–E pair and the A–F day-pair in the remaining positions, rejecting any same-workstream day.
The exhaustive valid programmes are below. Each slash separates days; within a day the morning workshop is written first.
1. AF / BE / CH / GD
2. AF / CH / GB / ED
3. AF / CH / GD / BE
4. BE / AF / CH / GD
5. BE / CH / GD / AF
6. CH / GB / ED / AF
7. CH / GD / AF / BE
8. CH / GD / BE / AF.
For a compact exhaustiveness check, C can be in positions 1, 3 or 5. These cases produce 3, 3 and 2 programmes respectively. An evening C would force G into an evening session and leaves no placement of the A–F day-pair, B–E consecutive pair and evening H that also keeps D after G and D on a different day from H.`;

  const tournament = `SET 3 — The five-team league

Teams A, B, C, D and E play a single round-robin league: every pair meets exactly once. A win earns 3 points, a draw earns 1 point for each team and a loss earns 0 points. There are no penalties, bonus points or abandoned games in the original league.

The final points table is:
Team | Points
A    | 8
B    | 7
C    | 5
D    | 4
E    | 2

It is also known that A drew with B, and C defeated D. Rankings are determined by points in descending order. Changes in a question apply only to that question; the original table determines any reference to an opponent finishing higher.`;
  const tournamentWork = `In four games, A's 8 points require 2 wins and 2 draws; B's 7 require 2 wins, 1 draw and 1 loss; C's 5 require 1 win, 2 draws and 1 loss; E's 2 require 2 draws and 2 losses. D cannot have four draws because it lost to C, so D has 1 win, 1 draw and 2 losses.
B's only draw is against A. B must beat E, since E never wins, and must beat C, whose only win is already against D. Therefore B loses to D. Having used its only win against B, D must draw with E, since E never wins, and lose to A. C's remaining games against A and E must both be draws. A then beats E.
All ten results are thus fixed:
A–B draw; A–C draw; A beats D; A beats E;
B beats C; D beats B; B beats E;
C beats D; C–E draw; D–E draw.`;

  const allocation = `SET 4 — Packing the relief consignment

A relief agency must pack exactly 100 cartons, containing a total of 250 kg of rice and 150 kg of pulses. It can use four standard carton types. Every carton contains 4 kg in total, and its contents cannot be changed.

Type | Rice (kg) | Pulses (kg) | Packing cost per carton (₹)
A    | 3         | 1           | 40
B    | 2         | 2           | 50
C    | 1         | 3           | 35
D    | 4         | 0           | 60

The number of A cartons is exactly twice the number of C cartons. At most 40 A cartons and at most 50 B cartons can be packed. At least 12 C cartons and at least 15 D cartons must be packed. All carton counts are non-negative integers.

In addition to the per-carton packing costs, there is one fixed surcharge of ₹500 if fewer than 18 D cartons are packed; there is no surcharge otherwise. The packing cost in every question includes this surcharge wherever applicable. Any subsidy mentioned in a question applies only to that question.`;
  const allocationWork = `Write the carton counts as a, b, c and d. The total count is a + b + c + d = 100, and the pulses constraint is a + 2b + 3c = 150. Since a = 2c, we get 2b + 5c = 150. Thus c must be even: write c = 2k. Then a = 4k, b = 75 − 5k and d = 25 − k.
The bounds imply 6 ≤ k ≤ 10. Every integer k in that interval is feasible and satisfies the rice constraint as well. Before the surcharge the cost is 5250 − 80k. The surcharge applies exactly when k > 7.
The complete feasible table is:
k | A  | B  | C  | D  | Cost including surcharge (₹)
6 | 24 | 45 | 12 | 19 | 4,770
7 | 28 | 40 | 14 | 18 | 4,690
8 | 32 | 35 | 16 | 17 | 5,110
9 | 36 | 30 | 18 | 16 | 5,030
10| 40 | 25 | 20 | 15 | 4,950.`;

  const network = `SET 5 — Routing through two hubs

A warehouse W must send exactly 100 crates through two intermediate hubs, A and B, to two destinations, C and D. Exactly 60 crates must reach C and exactly 40 must reach D. A crate travels along precisely one of these four routes: W–A–C, W–A–D, W–B–C or W–B–D. There are no losses, storage, return trips or transfers between A and B.

Each directed link has the following capacity and cost. A capacity is an upper limit, and the listed cost is charged per crate that uses that link.

Link | Capacity (crates) | Cost per crate (₹)
W→A  | 60                | 1
W→B  | 70                | 2
A→C  | 40                | 2
A→D  | 30                | 4
B→C  | 50                | 4
B→D  | 30                | 1

The number of crates on every link must be a non-negative multiple of 5. Total transportation cost is the sum of the costs incurred on all links. A routing pattern is specified only by the number of crates on each of the six links: interchanging individual crates does not create a different pattern. A changed capacity in a question applies only to that question.`;
  const networkWork = `Let x be the A→C flow and y the A→D flow. Conservation then gives W→A = x + y, W→B = 100 − x − y, B→C = 60 − x and B→D = 40 − y. The link limits reduce to
10 ≤ x ≤ 40, 10 ≤ y ≤ 30, and 30 ≤ x + y ≤ 60,
with x and y multiples of 5. These inequalities also guarantee every original link limit and both destination requirements.
Adding the six link costs gives
(x + y) + 2(100 − x − y) + 2x + 4y + 4(60 − x) + (40 − y)
= 480 − 3x + 2y rupees.`;

  window.CAT2026_DILR = [
    {
      id: 'D01', section: 'DILR', topic: 'Missing-data DI · revenue and ratios', difficulty: 'Moderate', type: 'TITA',
      groupId: 'DL1', groupTitle: 'Subscription audit', passage: subscriptions,
      question: 'How many Standard subscribers are there in city B?', options: [], answer: '90',
      solution: `${subscriptionWork}\nCity B therefore has 90 Standard subscribers.`
    },
    {
      id: 'D02', section: 'DILR', topic: 'Missing-data DI · category totals', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL1', groupTitle: 'Subscription audit', passage: subscriptions,
      question: 'Across all four cities, what is the total number of subscribers who are on either the Basic plan or the Premium plan?',
      options: ['420', '440', '460', '480'], answer: 2,
      solution: `${subscriptionWork}\nThe Basic total is 80 + 60 + 100 + 40 = 280. Adding the 180 Premium subscribers gives 460. Each subscriber has exactly one plan, so there is no overlap to subtract.`
    },
    {
      id: 'D03', section: 'DILR', topic: 'Missing-data DI · changing proportions', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL1', groupTitle: 'Subscription audit', passage: subscriptions,
      question: 'Some Standard subscribers move from city D to city B, retaining their plan. No other subscriber count changes. The proportion of Standard subscribers becomes the same in B and D. How many subscribers moved?',
      options: [], answer: '10',
      solution: `${subscriptionWork}\nLet x Standard subscribers move. Both the Standard count and the total count change in each city. Equating the new proportions gives (90 + x)/(180 + x) = (110 − x)/(200 − x). Cross-multiplication gives 18,000 + 110x − x² = 19,800 − 70x − x²; hence 180x = 1,800 and x = 10. The resulting proportions are 100/190 in both cities.`
    },
    {
      id: 'D04', section: 'DILR', topic: 'Missing-data DI · weighted refunds', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL1', groupTitle: 'Subscription audit', passage: subscriptions,
      question: 'In city A, 10% of Basic subscribers, 20% of Standard subscribers and 25% of Premium subscribers receive a full refund. Everyone else receives no refund. What revenue, in rupees, does the platform retain from city A?',
      options: ['21,400', '21,900', '22,400', '23,000'], answer: 1,
      solution: `${subscriptionWork}\nRefunds go to 8 Basic, 12 Standard and 10 Premium subscribers. The refund is 8 × 100 + 12 × 150 + 10 × 250 = ₹5,100. Retained revenue is ₹27,000 − ₹5,100 = ₹21,900.`
    },
    {
      id: 'D05', section: 'DILR', topic: 'Missing-data DI · percentage comparison', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL1', groupTitle: 'Subscription audit', passage: subscriptions,
      question: 'The Basic price increases by 10%, the Standard price by 20%, and the Premium price remains unchanged. Subscriber counts do not change. Which city has the greatest percentage increase in revenue?',
      options: ['A', 'B', 'C', 'D'], answer: 1,
      solution: `${subscriptionWork}\nThe increases per Basic and Standard subscriber are ₹10 and ₹30 respectively. Revenue increases in A, B, C and D are ₹2,600, ₹3,300, ₹2,200 and ₹3,700. Divide each by its original revenue: approximately 9.63%, 12.22%, 7.10% and 11.21%. City B has the greatest percentage increase; D has the greatest absolute increase but a larger original revenue.`
    },
    {
      id: 'D06', section: 'DILR', topic: 'Scheduling · exhaustive arrangements', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL2', groupTitle: 'The eight-workshop programme', passage: schedule,
      question: 'How many complete programmes satisfy all the conditions?', options: [], answer: '8',
      solution: `${scheduleWork}\nThere are exactly 8 complete programmes.`
    },
    {
      id: 'D07', section: 'DILR', topic: 'Scheduling · necessary inference', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL2', groupTitle: 'The eight-workshop programme', passage: schedule,
      question: 'Which statement must be true?',
      options: ['B is in a morning session.', 'E is in an evening session.', 'G is on Thursday.', 'C is in a morning session.'], answer: 3,
      solution: `${scheduleWork}\nC is a morning workshop in every programme. B is an evening workshop in programmes 2 and 6; E is a morning workshop in those same programmes; G can occur on Tuesday, Wednesday or Thursday. Thus only the statement about C is necessary.`
    },
    {
      id: 'D08', section: 'DILR', topic: 'Scheduling · conditional deduction', difficulty: 'Moderate', type: 'TITA',
      groupId: 'DL2', groupTitle: 'The eight-workshop programme', passage: schedule,
      question: 'If E is on Thursday morning, what is the session number of H?', options: [], answer: '4',
      solution: `${scheduleWork}\nOnly programme 2 has E on Thursday morning: AF / CH / GB / ED. H is therefore on Tuesday evening, session 4. The B–E adjacency crosses from Wednesday evening to Thursday morning here.`
    },
    {
      id: 'D09', section: 'DILR', topic: 'Scheduling · conditional possibilities', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL2', groupTitle: 'The eight-workshop programme', passage: schedule,
      question: 'If A is on Monday, how many distinct sessions can B occupy across all valid programmes?', options: [], answer: '3',
      solution: `${scheduleWork}\nA on Monday restricts the programme to rows 1, 2 and 3. B is then in session 3 (Tuesday morning), session 6 (Wednesday evening), or session 7 (Thursday morning). There are 3 distinct possible sessions.`
    },
    {
      id: 'D10', section: 'DILR', topic: 'Scheduling · feasible ordered pair', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL2', groupTitle: 'The eight-workshop programme', passage: schedule,
      question: 'Which ordered pair can occupy Wednesday morning and Wednesday evening, respectively?',
      options: ['G and H', 'E and D', 'A and D', 'D and G'], answer: 1,
      solution: `${scheduleWork}\nProgramme 6, CH / GB / ED / AF, has E and D on Wednesday. No programme has G and H together. A must share its day with F, so A and D is impossible. D cannot precede G, so D and G is impossible.`
    },
    {
      id: 'D11', section: 'DILR', topic: 'Games and tournaments · aggregate points', difficulty: 'Moderate', type: 'TITA',
      groupId: 'DL3', groupTitle: 'The five-team league', passage: tournament,
      question: 'How many games in the league ended in a draw?', options: [], answer: '4',
      solution: `There are 5 × 4 / 2 = 10 games. If every game were decisive, they would distribute 30 points in total. A drawn game distributes only 2 points instead of 3, reducing that total by 1. The actual table sums to 8 + 7 + 5 + 4 + 2 = 26, so there were 30 − 26 = 4 draws.\n\n${tournamentWork}`
    },
    {
      id: 'D12', section: 'DILR', topic: 'Games and tournaments · reconstructing results', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL3', groupTitle: 'The five-team league', passage: tournament,
      question: 'In which listed game did the first-named team defeat the second-named team?',
      options: ['A against C', 'B against D', 'D against B', 'E against C'], answer: 2,
      solution: `${tournamentWork}\nD defeated B. A–C and E–C were draws, and B lost to D.`
    },
    {
      id: 'D13', section: 'DILR', topic: 'Games and tournaments · rank-based bonus', difficulty: 'Moderate', type: 'TITA',
      groupId: 'DL3', groupTitle: 'The five-team league', passage: tournament,
      question: 'After the league, each team receives 2 additional points for each victory against a team that finished higher in the original table. By how many points does D’s adjusted total exceed C’s adjusted total?',
      options: [], answer: '1',
      solution: `${tournamentWork}\nD's only win is against B, which finished higher, so D receives a 2-point bonus and has 6 points. C's only win is against D, which finished lower, so C receives no bonus and stays on 5. D exceeds C by 1 point. The higher/lower comparison is based on the original table, not the adjusted table.`
    },
    {
      id: 'D14', section: 'DILR', topic: 'Games and tournaments · counterfactual ranking', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL3', groupTitle: 'The five-team league', passage: tournament,
      question: 'Suppose the result of the B–D game alone were reversed, with its original loser becoming the winner. What would the final ranking be, from highest points to lowest?',
      options: ['B, A, C, E, D', 'A, B, C, E, D', 'B, A, C, D, E', 'A, C, B, D, E'], answer: 0,
      solution: `${tournamentWork}\nOriginally D beat B. Reversing that result adds 3 to B and removes 3 from D. The new points are A = 8, B = 10, C = 5, D = 1 and E = 2. The ranking is B, A, C, E, D, with no tie.`
    },
    {
      id: 'D15', section: 'DILR', topic: 'Quantitative allocation · integer feasibility', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL4', groupTitle: 'Packing the relief consignment', passage: allocation,
      question: 'How many distinct feasible allocations of carton counts are possible? Two allocations differ only if the count of at least one carton type differs.',
      options: [], answer: '5',
      solution: `${allocationWork}\nThe five integers k = 6, 7, 8, 9, 10 give five distinct feasible allocations.`
    },
    {
      id: 'D16', section: 'DILR', topic: 'Quantitative allocation · conditional minimum', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL4', groupTitle: 'Packing the relief consignment', passage: allocation,
      question: 'If the agency insists on avoiding the ₹500 surcharge, what is the smallest possible number of B cartons?',
      options: ['25', '30', '35', '40'], answer: 3,
      solution: `${allocationWork}\nAvoiding the surcharge requires d ≥ 18, or 25 − k ≥ 18, so k ≤ 7. Among the feasible k values, only 6 and 7 remain. Their B counts are 45 and 40; the smallest is 40.`
    },
    {
      id: 'D17', section: 'DILR', topic: 'Quantitative allocation · piecewise cost', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL4', groupTitle: 'Packing the relief consignment', passage: allocation,
      question: 'What is the minimum possible packing cost, in rupees?', options: [], answer: '4690',
      solution: `${allocationWork}\nThe least cost is ₹4,690 at k = 7, with A = 28, B = 40, C = 14 and D = 18. Moving to k = 8 lowers the per-carton component by ₹80 but triggers the ₹500 surcharge; checking the remaining plans confirms none is cheaper.`
    },
    {
      id: 'D18', section: 'DILR', topic: 'Quantitative allocation · threshold subsidy', difficulty: 'Hard', type: 'MCQ',
      groupId: 'DL4', groupTitle: 'Packing the relief consignment', passage: allocation,
      question: 'A donor now offers a subsidy of ₹20 for every C carton, but only if the consignment contains at least 18 C cartons. The surcharge rule remains unchanged. Which allocation minimises the agency’s net cost after this subsidy? Counts below are in the order A, B, C, D.',
      options: ['28, 40, 14, 18', '32, 35, 16, 17', '40, 25, 20, 15', '36, 30, 18, 16'], answer: 2,
      solution: `${allocationWork}\nOnly k = 9 and k = 10 qualify, because they have 18 and 20 C cartons. Their net costs are ₹5,030 − ₹360 = ₹4,670 and ₹4,950 − ₹400 = ₹4,550. The other plans remain at ₹4,770, ₹4,690 and ₹5,110. The minimum is therefore ₹4,550 at A = 40, B = 25, C = 20, D = 15.`
    },
    {
      id: 'D19', section: 'DILR', topic: 'Networks and distribution · counting flows', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL5', groupTitle: 'Routing through two hubs', passage: network,
      question: 'How many feasible routing patterns are possible?', options: [], answer: '29',
      solution: `${networkWork}\nCount the allowed y values for each x. For x = 10, 15, 20, 25, 30, 35 and 40, the respective numbers of y values are 3, 4, 5, 5, 5, 4 and 3. For example, x = 10 requires y = 20, 25 or 30, while x = 40 allows y = 10, 15 or 20. The total is 3 + 4 + 5 + 5 + 5 + 4 + 3 = 29. Every pair (x,y) fixes all six link flows uniquely.`
    },
    {
      id: 'D20', section: 'DILR', topic: 'Networks and distribution · minimum cost', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'DL5', groupTitle: 'Routing through two hubs', passage: network,
      question: 'What is the minimum possible total transportation cost?',
      options: ['₹380', '₹390', '₹400', '₹410'], answer: 0,
      solution: `${networkWork}\nThe expression 480 − 3x + 2y decreases as x increases and increases as y increases. The jointly feasible choice x = 40 and y = 10 reaches both favourable extremes and satisfies x + y = 50. Its cost is ₹480 − ₹120 + ₹20 = ₹380. The six flows W→A, W→B, A→C, A→D, B→C and B→D are 50, 50, 40, 10, 20 and 30 respectively.`
    },
    {
      id: 'D21', section: 'DILR', topic: 'Networks and distribution · exact-cost constraint', difficulty: 'Hard', type: 'TITA',
      groupId: 'DL5', groupTitle: 'Routing through two hubs', passage: network,
      question: 'If the total transportation cost is exactly ₹400, how many crates travel on W→B?', options: [], answer: '40',
      solution: `${networkWork}\nA cost of ₹400 requires 3x − 2y = 80. Since x and y are multiples of 5, put x = 5u and y = 5v: 3u − 2v = 16. Hence u is even, and the bounds give x in {10, 20, 30, 40}. Substituting these values gives y = −25, −10, 5 and 20 respectively. Only x = 40, y = 20 satisfies the network bounds. Thus W→B = 100 − 40 − 20 = 40 crates.`
    },
    {
      id: 'D22', section: 'DILR', topic: 'Networks and distribution · capacity disruption', difficulty: 'Hard', type: 'MCQ',
      groupId: 'DL5', groupTitle: 'Routing through two hubs', passage: network,
      question: 'The capacity of A→C is temporarily reduced from 40 crates to 25 crates. All other capacities, costs and delivery requirements remain unchanged. What is the new minimum total transportation cost?',
      options: ['₹395', '₹410', '₹420', '₹425'], answer: 3,
      solution: `${networkWork}\nNow x ≤ 25. The cost is minimised at the largest feasible x and smallest feasible y, namely x = 25 and y = 10. Their sum is 35, so all source-link capacities are satisfied. The cost is ₹480 − 3 × ₹25 + 2 × ₹10 = ₹425. The corresponding flows are W→A = 35, W→B = 65, A→C = 25, A→D = 10, B→C = 35 and B→D = 30, all within their limits.`
    }
  ];
})();
