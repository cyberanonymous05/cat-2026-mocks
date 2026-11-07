/* Original CAT-style practice questions. A forecast mock, not the actual CAT 2026 paper. */
window.CAT2026_QA = [
  {
    id: 'Q01', section: 'QA', topic: 'Arithmetic', subtopic: 'Profit, loss and successive discounts',
    difficulty: 'Easy', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'A shopkeeper buys 300 identical notebooks at the same cost per notebook and marks each 50% above cost. She sells 40% of the stock at a discount of 20% on the marked price. She then sells 75% of the remaining stock at a discount of 10% on the marked price, and sells all the rest at cost. What is her overall profit percentage?',
    options: ['21.5%', '23.75%', '26.25%', '28.5%'], answer: 1,
    solution: 'Let the cost of one notebook be 100, so its marked price is 150. The first sale covers 120 notebooks at 120 each. Of the 180 remaining notebooks, 135 sell at 135 each and 45 sell at 100 each. Total cost = 300 × 100 = 30,000. Revenue = 120 × 120 + 135 × 135 + 45 × 100 = 37,125. Profit percentage = 7,125/30,000 × 100 = 23.75%. The second 75% applies to the remaining stock, not to the original 300.'
  },
  {
    id: 'Q02', section: 'QA', topic: 'Arithmetic', subtopic: 'Mixtures and successive replacement',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'A vessel contains 60 litres of a milk–water mixture in the ratio 3:2. A quantity of the well-mixed liquid is removed and replaced by the same volume of water. After mixing thoroughly, 15 litres are removed and replaced by 15 litres of pure milk. The final milk–water ratio is 5:3. How many litres were removed in the first operation?',
    options: [], answer: '10',
    solution: 'Initially there are 36 litres of milk. If x litres are removed first, the milk left is 36 − 3x/5. The second withdrawal removes one-fourth of the mixture, so milk after the subsequent addition is (3/4)(36 − 3x/5) + 15 = 42 − 9x/20. The final milk quantity is 60 × 5/8 = 37.5 litres. Thus 9x/20 = 4.5 and x = 10. Check: milk quantities after the two complete operations are 30 and 37.5 litres respectively.'
  },
  {
    id: 'Q03', section: 'QA', topic: 'Arithmetic', subtopic: 'Averages and subgroup totals',
    difficulty: 'Easy', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'The average score of 24 candidates is 65. Removing the four highest-scoring candidates reduces the average to 62. Removing the four lowest-scoring candidates from the original group instead raises the average to 69. What is the average score of the 16 candidates who are in neither of these two groups?',
    options: ['62.50', '65.00', '67.50', '66.25'], answer: 3,
    solution: 'The original total is 24 × 65 = 1,560. The top four total 1,560 − 20 × 62 = 320. The bottom four total 1,560 − 20 × 69 = 180. Hence the middle 16 total 1,560 − 320 − 180 = 1,060 and average 1,060/16 = 66.25. Both removals in the question start from the original group.'
  },
  {
    id: 'Q04', section: 'QA', topic: 'Arithmetic', subtopic: 'Boats, streams and simultaneous rates',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'On one day, a motorboat covers 36 km downstream and 24 km upstream in a total of 6 hours. On another day, with the same speed in still water and the same current, it covers 24 km downstream and 36 km upstream in 6.5 hours. If the current subsequently doubles while the boat’s speed in still water stays unchanged, how far can the boat travel upstream in 2.5 hours? Ignore turning time.',
    options: ['15 km', '12 km', '18 km', '20 km'], answer: 0,
    solution: 'Let p and q be the hours required per kilometre downstream and upstream. Then 36p + 24q = 6 and 24p + 36q = 6.5. Solving gives p = 1/12 and q = 1/8; the original downstream and upstream speeds are therefore 12 and 8 km/h. Still-water speed = (12 + 8)/2 = 10 km/h; current = (12 − 8)/2 = 2 km/h. With current doubled to 4 km/h, upstream speed is 6 km/h. Required distance = 6 × 2.5 = 15 km.'
  },
  {
    id: 'Q05', section: 'QA', topic: 'Arithmetic', subtopic: 'Time and work with changing teams',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'Working at constant individual rates, A and B together complete a job in 12 days, B and C in 15 days, and C and A in 20 days. On a fresh job, A and B work together for the first 4 days. A and C then work together for the next 8 days. C alone completes the remaining work. How many days elapse from the start until the job is finished?',
    options: [], answer: '28',
    solution: 'Write the daily rates as a, b and c. Adding the three pair rates gives 2(a + b + c) = 1/12 + 1/15 + 1/20 = 1/5, so a + b + c = 1/10 and c = 1/10 − 1/12 = 1/60. The first two stages complete 4/12 + 8/20 = 1/3 + 2/5 = 11/15 of the job. C needs (4/15)/(1/60) = 16 more days. Total elapsed time = 4 + 8 + 16 = 28 days.'
  },
  {
    id: 'Q06', section: 'QA', topic: 'Arithmetic', subtopic: 'Compound interest and cash withdrawals',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'An investment earns 10% per year, compounded annually, for two years. Immediately after the second year’s interest is credited, the investor withdraws ₹4,100. The remaining balance earns 20% during the third year and becomes ₹9,600. The withdrawn money is held without earning interest. What is the total gain after three years, expressed as a percentage of the original investment?',
    options: ['31%', '35%', '37%', '41%'], answer: 2,
    solution: 'The balance immediately after withdrawal was 9,600/1.2 = ₹8,000. Hence the balance before withdrawal was ₹12,100, making the original investment 12,100/(1.1)² = ₹10,000. Final wealth attributable to the investment is ₹9,600 + ₹4,100 = ₹13,700. Total gain is ₹3,700, or 37% of the initial ₹10,000. This asks for cumulative gain, not an annualised return.'
  },
  {
    id: 'Q07', section: 'QA', topic: 'Arithmetic', subtopic: 'Repeated transfers between mixtures',
    difficulty: 'Hard', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'Vessels A and B each contain 60 litres. Initially their milk–water ratios are 2:1 and 1:2 respectively. One round consists of transferring x litres from A to B, mixing B thoroughly, and then transferring x litres from B back to A and mixing A thoroughly. Exactly two such rounds are performed using the same x, where 0 < x < 60. The ratio of the quantities of milk finally in A and B is 13:11. What is x?',
    options: ['10 litres', '20 litres', '15 litres', '30 litres'], answer: 1,
    solution: 'Suppose a round starts with a litres of milk in A and b in B. After the full round, A contains (60a + xb)/(60 + x) and B contains (xa + 60b)/(60 + x). Thus the milk difference is multiplied by (60 − x)/(60 + x) each round. Initially the difference is 40 − 20 = 20 litres. Total milk remains 60 litres, so the final 13:11 ratio means 32.5 and 27.5 litres, a difference of 5. Therefore 20[(60 − x)/(60 + x)]² = 5. Since 0 < x < 60, the ratio is positive and equals 1/2. Hence 120 − 2x = 60 + x, giving x = 20 litres. The differences after successive rounds are 10 and 5 litres.'
  },
  {
    id: 'Q08', section: 'QA', topic: 'Arithmetic', subtopic: 'Alligation, integer packages and minimum cost',
    difficulty: 'Hard', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'A manufacturer must prepare exactly 180 kg of a mixture containing 20% of an active ingredient by mass. Three supplies contain 10%, 25% and 40% of that ingredient and cost ₹40, ₹50 and ₹70 per kg respectively. They are sold only in sealed packs of 15 kg, 20 kg and 10 kg respectively. Every purchased pack must be used in full, and at most 80 kg of the 25% supply is available. What is the minimum total purchase cost, in rupees?',
    options: [], answer: '8700',
    solution: 'Let x, y, z be the purchased kilograms of the 10%, 25%, 40% supplies. We need x + y + z = 180 and 10x + 25y + 40z = 3,600, so y + 2z = 120 and x = 60 + z. Write y = 20b. Then z = 60 − 10b and x = 120 − 10b. The 15 kg packaging condition on x requires b to be a multiple of 3. Availability gives 0 ≤ b ≤ 4, so only b = 0 or 3 is possible. For b = 0, quantities are (120, 0, 60) and cost ₹9,000. For b = 3, quantities are (90, 60, 30) and cost 90 × 40 + 60 × 50 + 30 × 70 = ₹8,700. Both obey all pack sizes; the latter is the minimum.'
  },
  {
    id: 'Q09', section: 'QA', topic: 'Algebra', subtopic: 'Symmetric expressions and identities',
    difficulty: 'Easy', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'Positive real numbers x and y satisfy x + y = 6 and x² + y² = 20. What is the value of x²/y + y²/x?',
    options: ['9', '7', '8', '10'], answer: 0,
    solution: 'From (x + y)² = x² + y² + 2xy, we get 36 = 20 + 2xy, so xy = 8. The requested expression is (x³ + y³)/(xy). Now x³ + y³ = (x + y)³ − 3xy(x + y) = 216 − 144 = 72. Therefore the value is 72/8 = 9. The numbers themselves are 2 and 4, which also provide a quick check.'
  },
  {
    id: 'Q10', section: 'QA', topic: 'Algebra', subtopic: 'Logarithms and change of base',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'Find the sum of all real values of x for which log₂(x) + logₓ(16) = 5. Here logarithms must be defined over the real numbers.',
    options: [], answer: '18',
    solution: 'The domain is x > 0 and x ≠ 1. Put t = log₂(x), so t ≠ 0 and logₓ(16) = 4/t. Thus t + 4/t = 5, or t² − 5t + 4 = 0. The two values of t are 1 and 4, giving x = 2 and x = 16. Both satisfy the original equation and domain. Their sum is 18. Negative t produces a negative left-hand side and supplies no additional solution.'
  },
  {
    id: 'Q11', section: 'QA', topic: 'Algebra', subtopic: 'Rational inequalities and absolute values',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'How many integers x simultaneously satisfy |x − 3| + |x − 8| ≤ 9 and [(x − 2)(x − 7)]/(x − 4) ≤ 0? The rational expression must be defined.',
    options: ['4', '6', '5', '7'], answer: 2,
    solution: 'The absolute-value inequality gives 1 ≤ x ≤ 10: between 3 and 8 its left side is 5, and outside that interval the extra distance is counted twice. The critical points of the rational expression are 2, 4 and 7. Its sign is non-positive on (−∞, 2] and (4, 7]; x = 4 is excluded. Intersecting with [1, 10] leaves integers 1, 2, 5, 6 and 7. There are 5.'
  },
  {
    id: 'Q12', section: 'QA', topic: 'Algebra', subtopic: 'Absolute-value quadratics and parameter bounds',
    difficulty: 'Hard', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'For how many positive integers k does the equation |x² − 6x + 5| = k|x − 3| have exactly three distinct positive real roots whose sum is less than 20?',
    options: ['8', '10', '11', '9'], answer: 3,
    solution: 'Set t = |x − 3| ≥ 0. The equation becomes |t² − 4| = kt. Its two positive solutions are a = (√(k² + 16) − k)/2 and b = (√(k² + 16) + k)/2, with 0 < a < 2 < b, ab = 4 and b − a = k. The four distinct real x-values are 3 ± a and 3 ± b. The first pair is always positive. Exactly three are positive when b ≥ 3; equality would require k = b − 4/b = 5/3, which is not an integer. Thus the integer condition is k ≥ 2. The positive-root sum is (3 − a) + (3 + a) + (3 + b) = 9 + b, so it is below 20 exactly when b < 11. Since b − 4/b increases for positive b, this means k < 11 − 4/11 = 117/11. The admissible integers are 2 through 10: 9 values.'
  },
  {
    id: 'Q13', section: 'QA', topic: 'Algebra', subtopic: 'Function composition and inverse operations',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'For real t ≠ −2, define f(t) = (2t + 3)/(t + 2). If f(f(f(x))) = 19/11 and every intermediate expression is defined, find x.',
    options: [], answer: '-1',
    solution: 'Solving y = (2t + 3)/(t + 2) for t gives t = (3 − 2y)/(y − 2), provided y ≠ 2. Work backward: an output of 19/11 comes from 5/3; an output of 5/3 comes from 1; an output of 1 comes from −1. Hence x = −1. Direct verification is f(−1) = 1, f(1) = 5/3 and f(5/3) = 19/11. None of the three inputs is −2. The inverse is unique at each stage, so no second valid x is missed.'
  },
  {
    id: 'Q14', section: 'QA', topic: 'Algebra', subtopic: 'Constrained optimisation and symmetric expressions',
    difficulty: 'Hard', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'Positive real numbers x, y and z satisfy x + y + z = 9 and xy + yz + zx = 24. What is the largest possible value of xyz?',
    options: ['20', '18', '24', '27'], answer: 0,
    solution: 'Let a = x − 2, b = y − 2 and c = z − 2. Then a + b + c = 3 and ab + bc + ca = 0. Also abc = xyz − 20. We claim abc ≤ 0. If abc were positive, either all three variables would be positive, making ab + bc + ca positive, or two would be negative. In the latter case write a = −u, b = −v, c = 3 + u + v with u, v > 0. Then ab + bc + ca = uv − (u + v)(3 + u + v) < 0, again impossible. Therefore xyz ≤ 20. Equality is attained at (x, y, z) = (2, 2, 5), which satisfies both original conditions. The maximum is 20.'
  },
  {
    id: 'Q15', section: 'QA', topic: 'Geometry', subtopic: 'Triangle area and inradius',
    difficulty: 'Easy', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'A triangular plot has side lengths 13 m, 14 m and 15 m. A circular pond is constructed inside it so that the pond’s boundary touches all three sides. What is the radius of the pond?',
    options: ['3 m', '4.5 m', '4 m', '6 m'], answer: 2,
    solution: 'The semiperimeter is s = (13 + 14 + 15)/2 = 21. Heron’s formula gives the triangle’s area as √[21 × 8 × 7 × 6] = √7,056 = 84 square metres. For an incircle, area = rs, so r = 84/21 = 4 m.'
  },
  {
    id: 'Q16', section: 'QA', topic: 'Geometry', subtopic: 'Trapezium diagonals and area ratios',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'ABCD is a convex trapezium with AB parallel to CD, AB = 12 cm and CD = 20 cm. Diagonals AC and BD intersect at O. What is the ratio of the combined areas of triangles AOB and COD to the combined areas of triangles AOD and BOC?',
    options: ['8:7', '4:3', '16:15', '17:15'], answer: 3,
    solution: 'Triangles AOB and COD are similar with linear ratio 12:20 = 3:5. Let the trapezium’s height be h. O’s distances from AB and CD are 3h/8 and 5h/8. Their areas are therefore (1/2) × 12 × 3h/8 = 9h/4 and (1/2) × 20 × 5h/8 = 25h/4, summing to 17h/2. The trapezium’s total area is (12 + 20)h/2 = 16h, leaving 15h/2 for the other two triangles. The required ratio is 17:15. No assumption that the trapezium is isosceles is needed.'
  },
  {
    id: 'Q17', section: 'QA', topic: 'Geometry', subtopic: 'Tangent circles inside an isosceles triangle',
    difficulty: 'Hard', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'An isosceles triangle has base 16 cm and equal sides 17 cm. Two congruent circles lie entirely inside the triangle, one on each side of its axis of symmetry. Each circle touches the base and the nearer equal side, and the two circles touch one another. Find their common radius, in centimetres.',
    options: [], answer: '3',
    solution: 'Place the base from (0, 0) to (16, 0). The apex is (8, 15), because the altitude is √(17² − 8²) = 15. If the common radius is r, both centres have height r. Tangency to one another and symmetry put them at (8 − r, r) and (8 + r, r). The left equal side has equation 15x − 8y = 0. Distance from the left centre to that line is [15(8 − r) − 8r]/17 = (120 − 23r)/17, which must equal r. Thus 120 = 40r and r = 3. The centres are (5, 3) and (11, 3); their separation is 6 and each circle also remains clear of the opposite equal side.'
  },
  {
    id: 'Q18', section: 'QA', topic: 'Number Systems', subtopic: 'Simultaneous remainders and arithmetic progressions',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'Find the sum of all three-digit positive integers that leave a remainder of 3 when divided by 7, leave a remainder of 5 when divided by 11, and are divisible by 4.',
    options: ['1,192', '1,500', '1,384', '1,808'], answer: 1,
    solution: 'Write N = 7a + 3. The condition modulo 11 gives 7a ≡ 2 (mod 11), hence a ≡ 5 (mod 11) and N = 38 + 77k. Modulo 4, this is N ≡ 2 + k, so k ≡ 2 (mod 4). Therefore N = 192 + 308t for integer t. The three-digit values are 192, 500 and 808; the preceding term is negative and the following term is 1,116. Their sum is 1,500.'
  },
  {
    id: 'Q19', section: 'QA', topic: 'Number Systems', subtopic: 'Prime exponents in factorial ratios',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'Let N = 100!/(30! × 30! × 40!). Find the largest non-negative integer k for which 12ᵏ is a divisor of N.',
    options: [], answer: '2',
    solution: 'Since 12 = 2² × 3, calculate the exponents of 2 and 3 in N. For 2: the exponents in 100!, 30! and 40! are 50 + 25 + 12 + 6 + 3 + 1 = 97, 15 + 7 + 3 + 1 = 26, and 20 + 10 + 5 + 2 + 1 = 38. Thus the exponent in N is 97 − 26 − 26 − 38 = 7. For 3: the corresponding exponents are 33 + 11 + 3 + 1 = 48, 10 + 3 + 1 = 14, and 13 + 4 + 1 = 18. Thus N has 48 − 14 − 14 − 18 = 2 factors of 3. Therefore k = min(floor(7/2), 2) = 2. The factorial ratio is an integer multinomial coefficient.'
  },
  {
    id: 'Q20', section: 'QA', topic: 'Modern Math', subtopic: 'Common terms of arithmetic progressions',
    difficulty: 'Easy', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'Two lists contain the positive terms of the arithmetic progressions 3, 8, 13, 18, … and 5, 12, 19, 26, …, respectively. Each list stops before its first term greater than 500. How many numbers occur in both lists?',
    options: ['12', '13', '14', '15'], answer: 2,
    solution: 'The first common term is 33. Subsequent common terms differ by lcm(5, 7) = 35, so they are 33 + 35j for j ≥ 0. The upper bound gives j ≤ (500 − 33)/35 = 467/35, whose integer part is 13. Thus j runs from 0 to 13, giving 14 common terms. The last is 488 and the next, 523, exceeds the limit.'
  },
  {
    id: 'Q21', section: 'QA', topic: 'Modern Math', subtopic: 'Linear arrangements with positional restrictions',
    difficulty: 'Moderate', type: 'TITA', groupId: null, groupTitle: '', passage: '',
    question: 'Six distinct students A, B, C, D, E and F stand in a row. A and B must not stand next to each other, E must not occupy either end, and C must stand somewhere to the left of D. How many arrangements are possible?',
    options: [], answer: '168',
    solution: 'First ignore the C-before-D condition. E has four permitted positions and the others can be arranged in 5! ways, giving 480. Subtract arrangements with A and B adjacent. Treat AB or BA as one block: there are 2 × 5! = 240 block arrangements. Of these, E is at an end in 2 × 2 × 4! = 96, so 144 have E away from both ends. Therefore 480 − 144 = 336 satisfy the A/B and E restrictions. Swapping C with D preserves those restrictions and pairs each C-before-D arrangement with a D-before-C arrangement. Exactly half remain: 336/2 = 168.'
  },
  {
    id: 'Q22', section: 'QA', topic: 'Algebra', subtopic: 'Integer solutions of two linear purchase equations',
    difficulty: 'Moderate', type: 'MCQ', groupId: null, groupTitle: '', passage: '',
    question: 'A stationery shop sells pens at ₹15 each, pencils at ₹4 each and erasers at ₹3 each. Riya buys 20 items in all, at least one of each kind, and spends exactly ₹120. How many pens does she buy?',
    options: ['4', '3', '5', '6'], answer: 0,
    solution: 'Let the numbers of pens, pencils and erasers be p, q and r. Then p + q + r = 20 and 15p + 4q + 3r = 120. Subtracting three times the first equation from the second gives 12p + q = 60, so q = 60 − 12p and r = 20 − p − q = 11p − 40. Both q and r must be at least 1, so p ≤ 4 and p ≥ 4. Hence p = 4, with 12 pencils and 4 erasers.'
  }
];
