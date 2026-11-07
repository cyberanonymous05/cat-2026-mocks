/* Original practice material. These questions are a CAT-style mock, not a real or leaked CAT 2026 paper. */
(function () {
  'use strict';

  const archives = `Historians are sometimes told that digitisation will finally free them from the prejudices of the archive. Once millions of documents become searchable, the argument runs, the eccentric interests of earlier collectors will matter less: patterns invisible to an individual reader will emerge from the aggregate. This promise confuses two different obstacles. A researcher may previously have been unable to locate an existing record; alternatively, the activity being studied may never have generated a record that an institution considered worth keeping. Search can radically reduce the first difficulty without touching the second.

Consider a municipal archive that preserves licences issued to street traders. A digital count might suggest that women's participation in street commerce rose sharply after a particular year. Yet the change could reflect a new rule requiring family assistants, many of them women, to obtain separate licences. The archive would then register the expansion of an administrative category rather than the beginning of an economic activity. More data from the same series might make the apparent trend look increasingly precise while leaving its interpretation wrong. Precision describes the stability of a measurement; it does not certify that the measurement answers the intended question.

This does not make official records useless or imply that every silence conceals the same excluded population. Both conclusions would turn a warning about evidence into permission to invent it. The historian needs to investigate how documents were produced: who had to report, what reporting cost, which conduct attracted enforcement, and what happened to records after collection. A gap becomes informative only in relation to a plausible process that could have produced it. Even then, an account of that process establishes possibilities and limits; it does not automatically supply the missing voices.

Other sources can help, but they do not stand outside these problems. Oral testimony has its own occasions and audiences; a household account book selects what its keeper found significant. Their value lies partly in their different selection mechanisms. When sources generated under different incentives converge, confidence may increase. When they disagree, the disagreement can expose the institutional work that a seemingly neutral category performed. Combining sources is therefore not simply a matter of filling empty cells in an otherwise settled table.

The best digital archive would make its own conditions of visibility easier to inspect. Alongside searchable documents, it would describe changes in collection rules, classification systems and survival rates, including what remains unknown. Such features may yield fewer immediate answers than an attractive graph, but they enable better questions. Scale can enlarge the historian's field of vision; understanding how that field was constructed keeps enlargement from being mistaken for completeness.`;

  const darkness = `Cities usually describe artificial light as a quantity to be supplied. A street is inadequately lit; a junction needs brighter lamps; a square has been successfully illuminated. This vocabulary makes darkness look like a leftover, what remains wherever a service has not yet arrived. For many urban organisms, however, darkness is itself a condition that infrastructure either preserves or destroys. A river can remain physically continuous while becoming difficult for a nocturnal animal to traverse because a sequence of lights interrupts its route.

The issue is not adequately captured by counting bulbs or adding up their electricity use. A lamp that consumes less energy can emit light that has a greater effect on a particular species. Direction, wavelength and timing matter alongside intensity. Nor do all species respond alike. An illuminated feeding site may benefit one predator while exposing another animal to danger. Consequently, the discovery of more animals around a lamp is not, on its own, evidence that the lamp has improved the habitat. The observed gathering may even depend on a depletion elsewhere.

Thinking in terms of temporal habitat changes the questions asked of a lighting plan. Instead of asking only whether a riverside path is bright enough throughout the night, planners might ask who uses which segments, at what hours, and during which seasons. Lighting a crossing during the evening commute and shielding a neighbouring riverbank after midnight are not logically incompatible objectives. A useful plan could make room for both, although deciding how much room requires local evidence and public deliberation. Darkness need not mean that every light is switched off simultaneously.

There is nevertheless a danger in treating adjustable technology as an automatic reconciliation of competing needs. Motion sensors may illuminate a path whenever a person arrives, but frequent activation can erase the very dark intervals that a species requires. A system can therefore satisfy its engineering specification and fail its ecological purpose. The relevant test is not whether the sensor works; it is whether the resulting pattern of light and darkness supports the activity for which a dark interval was intended. Testing that proposition requires observation beyond the boundaries of the installed equipment.

Human requirements are also uneven. People who work late, walk slowly or depend on an unfamiliar route may experience a lighting reduction differently from an able resident returning early to a familiar home. Their concerns cannot be dismissed by invoking nature as a single overriding interest. The case for temporal habitat is instead a case for making neglected consequences visible within a shared decision. Its ambition is neither the permanently bright city nor the uniformly dark one, but a city capable of asking what a particular light does, for whom, and at what time.`;

  const automation = `A familiar defence of automation says that it removes routine tasks so that skilled workers can devote themselves to judgement. The claim is persuasive when routine work and judgement are independent activities, like carrying a suitcase and deciding where to travel. In many occupations they are not. What looks routine to an observer may be the repeated encounter through which a worker learns what ordinary conditions feel like, and therefore notices when a case is becoming unusual. Removing the encounters can remove part of the machinery that produces judgement.

An experienced technician may benefit greatly from a system that summarises hundreds of measurements. Years of inspecting the underlying records have already supplied a sense of plausible variation. A novice receiving the same summary does not inherit that history. Both may produce equally satisfactory decisions on ordinary days, especially when the system is reliable. Their apparent equivalence can disappear when a sensor deteriorates or an unfamiliar combination of conditions arises. Success with the tool is evidence about current performance, not necessarily about the knowledge available when the tool becomes misleading.

The distinction is between using a stock of expertise and maintaining the process by which that stock is renewed. Organisations often measure the former because speed, cost and immediate error rates are visible. The latter may be neglected precisely because accumulated expertise continues to support performance for several years after opportunities to acquire it have diminished. By the time the loss becomes apparent, experienced staff may have left and the remaining staff may have had little reason to practise independent interpretation. A productive arrangement can thus quietly consume an educational resource.

This argument does not require every worker to repeat every task that software can perform. Repetition without attention may teach little, and some manual procedures were poor teachers even before automation. The question is which encounters generate useful discrimination and how to preserve those encounters economically. A training system might occasionally withhold its recommendation until the learner records a diagnosis, then expose the evidence behind disagreements. Simulations of rare failures can help as well, provided that their cues do not make the intended lesson obvious. Training that rewards recognition of a familiar exercise can exaggerate preparedness for an unfamiliar event.

The proper comparison is therefore not between automation and an imagined past in which everyone understood everything. It is between alternative arrangements for producing reliable work and replenishing the understanding on which reliability depends. Some tools can support both: they may reveal patterns that were previously too costly to examine. But that educational effect is a design achievement, not a dividend that follows automatically from labour saved. A system that frees experts to exercise judgement must also leave a route by which someone can become an expert.`;

  const repair = `Arguments for a right to repair often begin with a simple contrast: an object that can be opened, understood and mended gives its owner more control than one sealed against intervention. This is a strong starting point, but a weak stopping point. A repairable design does not itself create a functioning repair economy. An owner also needs parts, diagnostic information, suitable tools and someone with the time or ability to use them. The difference between a repair that is technically possible and one that is practically available can be considerable.

Take a washing machine whose pump is attached with ordinary screws. If the only replacement pump is withdrawn three years after sale, accessible screws offer limited consolation. Conversely, stocking every component indefinitely imposes costs, and some unused parts will eventually become waste. The problem is not solved by declaring either manufacturers or consumers uniquely irresponsible. It involves a coordination question: who should bear the cost of keeping future repair possible when the timing and volume of demand are uncertain? Standards, commitments about availability and pooled inventories offer different answers, each with trade-offs.

Information creates a related difficulty. A fault code can make diagnosis quick, but only if its meaning is available to the person attempting the repair. Releasing a manual once may be insufficient if later software changes how a component operates. Access has a duration as well as a moment of delivery. This is why repair should be understood as a relationship that can extend across an object's working life, rather than as a property settled completely at the factory gate. The relationship need not be monopolised by the original seller; independent workshops and user communities can sustain important parts of it.

Environmental claims require similar care. Keeping a product in service avoids some impacts associated with producing a replacement, but repair is not environmentally preferable under every conceivable condition. An exceptionally inefficient old appliance may consume enough additional resources to change the comparison. That possibility does not justify treating all older products as obsolete. It means that the relevant comparison includes production, use and likely remaining service, rather than celebrating either longevity or novelty in isolation. A policy can make repair available while allowing informed decisions about when to use it.

Community repair events illustrate both the promise and the limits of voluntary action. They can circulate practical knowledge and recover objects that would otherwise be discarded. They cannot reliably compensate for components that no one can obtain or information withheld from everyone outside an authorised network. Celebrating the ingenious volunteer while ignoring those constraints risks converting a systemic obstacle into an individual test of resourcefulness. The right to repair becomes substantial when the conditions for ordinary, repeatable repair are secured, so that success does not depend on finding an unusually determined person.`;

  window.CAT2026_VARC = [
    {
      id: 'V01', section: 'VARC', topic: 'RC · Central argument', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC1', groupTitle: 'RC 1 · What an archive allows us to see', passage: archives,
      question: 'Which statement best captures the central argument of the passage?',
      options: [
        "Digital archives should prioritise records of excluded groups because administrative sources primarily document official prejudice.",
        "Combining official records with personal testimony enables historians to reconstruct a complete account that either source would conceal.",
        "The biases of institutional record keeping make large numerical studies less reliable than close readings of individual documents.",
        "Digitisation strengthens historical inquiry when greater access is accompanied by scrutiny of how the surviving evidence was produced and selected."
      ],
      answer: 3,
      solution: "Option D joins the passage’s two commitments: digital scale is useful, and its evidential limits must be investigated. B promises completeness, expressly rejected in the final sentence, and treats supplementation as mechanically filling gaps. C invents a ranking between quantitative study and close reading; either can misunderstand how evidence was selected. A converts a methodological argument about document production into an unsupported acquisition priority and an overly sweeping claim about what administrative records primarily contain."
    },
    {
      id: 'V02', section: 'VARC', topic: 'RC · Application', difficulty: "Moderate", type: 'MCQ',
      groupId: 'RC1', groupTitle: 'RC 1 · What an archive allows us to see', passage: archives,
      question: 'Which finding would most directly support an interpretation analogous to the passage’s alternative explanation of the rise in women’s trading licences?',
      options: [
        'Hospital admissions rose after a factory opened, and independent household surveys recorded a simultaneous rise in respiratory illness.',
        'The number of registered tenants rose abruptly when an unchanged tenant population became subject to individual rather than household registration.',
        'Digitised shipping registers revealed more vessels than a historian had found by manually sampling the same registers.',
        'Letters describing an unrecorded protest survived in a family collection, although municipal files contained no mention of it.'
      ],
      answer: 1,
      solution: 'Option B reproduces the relevant mechanism exactly: a changed administrative counting rule creates an apparent increase without an increase in the underlying activity or population. A supplies independent evidence for a real change, which points away from that mechanism. C concerns improved retrieval of already existing records, the first obstacle distinguished in paragraph one. D illustrates different source coverage, but does not explain a numerical trend through a change in classification or reporting requirements.'
    },
      {
      id: 'V03', section: 'VARC', topic: 'RC · Inference', difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC1', groupTitle: 'RC 1 · What an archive allows us to see', passage: archives,
      question: 'The author would be most likely to agree with which statement about an absence in an archive?',
      options: [
        "An absence can constrain or inform interpretation when connected to a defensible account of record production, without revealing its missing contents.",
        "Once a discriminatory reporting rule is identified, a historian can infer the scale of the activity excluded by that rule.",
        "An absence is historically meaningful only when another source supplies the exact information that is missing.",
        "An absence should be treated as evidence of institutional exclusion unless the historian can establish accidental document loss."
      ],
      answer: 0,
      solution: "Option A reflects the third paragraph’s careful distinction: understanding a gap’s production can establish possibilities and limits, but cannot automatically recover voices or facts. C adds a requirement for exact replacement evidence that the author never imposes. B illegitimately moves from identifying a selection mechanism to quantifying the excluded activity. D supplies a presumption of exclusion even though the author explicitly rejects the idea that every silence conceals the same kind of excluded population."
    },
    {
      id: 'V04', section: 'VARC', topic: 'RC · Function of a claim', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC1', groupTitle: 'RC 1 · What an archive allows us to see', passage: archives,
      question: 'What purpose does the discussion of oral testimony and household account books primarily serve?',
      options: [
        "It establishes that personal sources are less affected by institutional interests than official records.",
        "It extends the need to examine selection beyond official records and shows how differently generated evidence can improve interpretation.",
        "It shifts the argument from the reliability of sources to the superior interpretive skills of historians who use several media.",
        "It explains why disagreement between sources should normally be resolved in favour of the source with fewer reporting costs."
      ],
      answer: 1,
      solution: "Option B captures both moves in paragraph four: alternative sources also select, and differences in selection can make convergence or disagreement informative. A introduces an unsupported comparative ranking; the passage says that such sources have their own audiences and occasions. D invents a rule for adjudicating disagreement, whereas disagreement can itself reveal institutional processes. C changes the subject to historians’ relative ability, which is not discussed. The paragraph develops the same evidential argument rather than abandoning it."
    },
    {
      id: 'V05', section: 'VARC', topic: 'RC · Central argument', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC2', groupTitle: 'RC 2 · The city after dark', passage: darkness,
      question: 'Which proposal is most consistent with the passage as a whole?',
      options: [
        'Set a single maximum illumination level for every street, since ecological harm is chiefly a result of excessive brightness.',
        'Plan and assess lighting through its changing effects on human and nonhuman activity, using local evidence and negotiated priorities.',
        'Replace conventional lamps with efficient sensor-controlled lamps, since responsive equipment reconciles the principal competing needs.',
        'Establish uninterrupted darkness as the default public entitlement and require late-night users to adapt their travel accordingly.'
      ],
      answer: 1,
      solution: 'Option B includes temporal habitat, differences among organisms and people, empirical assessment and public deliberation. A reduces multiple relevant variables to intensity and imposes a uniformity the passage resists. C mistakes a possible tool for a guaranteed reconciliation; paragraph four supplies a direct counterexample involving frequent sensor activation. D overlooks the explicit requirement to consider people who work late or have other particular needs. The author supports contextual decisions rather than an overriding entitlement to either light or darkness.'
    },
    {
      id: 'V06', section: 'VARC', topic: "RC · Assumption", difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC2', groupTitle: 'RC 2 · The city after dark', passage: darkness,
      question: "Two riverbank lighting plans use identical lamps and provide the same total number of dark hours per night. One provides a continuous dark period; the other divides darkness into short intervals. A council observes the same nightly total of animal detections under both plans and concludes that their ecological effects are equivalent. Which assumption connecting its evidence to its conclusion is most directly called into question by the passage?",
      options: [
        "Identical lamps provide an appropriate control for differences in wavelength and direction between the plans.",
        "Observing the plans over comparable nights reduces the risk of attributing seasonal population changes to lighting.",
        "A plan can preserve an ecologically useful period of darkness without leaving the riverbank unlit for the whole night.",
        "Ecologically important differences in the timing and continuity of darkness would be reflected in the nightly aggregate detection count."
      ],
      answer: 3,
      solution: "Option D identifies the bridge from equal counts to equivalent ecological effects. That bridge fails if, for example, both plans attract the same number of animals but only the uninterrupted dark period permits a necessary activity. Paragraphs two and four distinguish observed gathering or correct equipment operation from the relevant ecological outcome. Equal total dark hours likewise need not preserve the required pattern. A and B describe useful controls, but even perfect control of lamp properties and seasonal variation would not validate the aggregate count as a measure of ecological equivalence. C is compatible with the passage’s support for partial, context-sensitive darkness; the argument does not require continuous darkness throughout the night."
    },
    {
      id: 'V07', section: 'VARC', topic: 'RC · Author’s distinction', difficulty: "Moderate", type: 'MCQ',
      groupId: 'RC2', groupTitle: 'RC 2 · The city after dark', passage: darkness,
      question: 'The distinction between meeting an “engineering specification” and achieving an “ecological purpose” implies that:',
      options: [
        'correct operation of a device is insufficient evidence of success when success depends on the environmental pattern produced by its use.',
        'engineering specifications cannot incorporate ecological knowledge because devices and organisms operate on different timescales.',
        'sensor-operated lighting is generally more ecologically damaging than permanently illuminated lighting.',
        'an ecological purpose can be evaluated only after all artificial lighting has been removed from the study area.'
      ],
      answer: 0,
      solution: 'Option A expresses the means–outcome distinction: a sensor may activate correctly while repeated activation eliminates biologically necessary dark intervals. B turns a possible failure of the chosen specification into an impossibility of designing a better one. C asserts a general comparison absent from the text; the example establishes conditional failure, not universal superiority or inferiority. D invents an exclusive testing method. The passage requires observing relevant effects beyond equipment boundaries, not first removing all lights.'
    },
    {
      id: 'V08', section: 'VARC', topic: 'RC · Inference', difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC2', groupTitle: 'RC 2 · The city after dark', passage: darkness,
      question: 'Which inference about “temporal habitat” is best supported by the passage?',
      options: [
        "It is relevant primarily where humans and wildlife use the same space at entirely different times.",
        "It converts disagreements about lighting into technical questions that ecological monitoring can settle without value judgements.",
        "It can reveal an interruption in a habitat that a map showing only the physical continuity of a river would miss.",
        "It requires city planners to assign equal weight to every species affected by a proposed lighting change."
      ],
      answer: 2,
      solution: "Option C follows from the opening river example: a physically continuous route can be functionally interrupted by lighting, whose timing also matters. A imposes a restriction not present in the argument; the concept is useful even when uses overlap and negotiation is necessary. B suppresses public deliberation and the distribution of human consequences, both explicitly retained by the author. D invents a rule of equal weighting. Making effects visible creates material for a decision; it does not predetermine the weights used."
    },
    {
      id: 'V09', section: 'VARC', topic: 'RC · Central argument', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC3', groupTitle: 'RC 3 · Where expertise comes from', passage: automation,
      question: 'Which statement best summarises the author’s main argument?',
      options: [
        'Because routine work is the chief source of professional skill, organisations should retain manual procedures until all workers have become experts.',
        'Automation is most valuable when its immediate productivity gains are used to fund longer periods of classroom instruction.',
        'Automation should be evaluated and designed with attention to both current performance and the experiences through which expertise is renewed.',
        'The reliability of automated systems depends chiefly on recruiting experienced workers who can identify unusual situations.'
      ],
      answer: 2,
      solution: 'Option C encompasses the distinction between using and renewing expertise and the concluding call to design for both. A overstates routine work as the chief source, ignores poor forms of repetition and imposes an unsupported moratorium. B specifies classroom instruction and funding as the solution, neither of which is argued. D focuses on drawing down an existing supply of experienced staff, precisely the incomplete arrangement the author criticises. The passage asks how organisations continue producing experts as well as using them.'
    },
    {
      id: 'V10', section: 'VARC', topic: "RC · Weaken an explanation", difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC3', groupTitle: 'RC 3 · Where expertise comes from', passage: automation,
      question: "An organisation introduces automation, after which routine performance remains strong. A critic argues that this success may conceal a weakening of the process by which new workers acquire independent judgement. Which finding would most directly weaken that specific concern about this organisation?",
      options: [
        "New workers match earlier recruits on independent tests using the same failure scenarios that both groups practised during training.",
        "New workers and experienced workers give equally accurate answers to unfamiliar cases when the automated recommendation is available.",
        "Experienced workers retain their earlier level of unaided accuracy on unfamiliar cases after several years of using the automated system.",
        "After the same training period, new workers match comparable pre-automation recruits on unaided tests of unfamiliar cases in which familiar surface cues have been altered."
      ],
      answer: 3,
      solution: "Option D tests renewal directly: workers trained after automation independently handle unfamiliar cases as well as comparable earlier recruits, without relying on the tool or on familiar exercise cues. This is evidence against the specific claim that the new arrangement is weakening acquisition, although it would not prove that every skill or future case is covered. A tests unaided performance but leaves open the passage’s warning about recognising practised scenarios rather than transferring judgement. B retains the automated recommendation, so equal answers can conceal different underlying understanding. C shows preservation of an existing stock of expertise, not whether new workers are acquiring it. Those three findings are compatible with the critic’s particular concern."
    },
    {
      id: 'V11', section: 'VARC', topic: "RC · Experimental design", difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC3', groupTitle: 'RC 3 · Where expertise comes from', passage: automation,
      question: "Trainees diagnose cases before seeing an automated recommendation and then receive feedback. Their scores improve, but each practised failure has always appeared with a conspicuous visual cue. Which assessment would best distinguish improved discrimination of the underlying fault from recognition of that familiar cue?",
      options: [
        "Use additional cases with new numerical values but the same correspondence between the visual cue and the fault, requiring an unaided diagnosis.",
        "Ask trainees to explain, after seeing the system’s recommendation, which features of a familiar case support that recommendation.",
        "Require evidence-based diagnoses before advice on cases where the familiar cue appears without the fault and where the fault appears without the cue.",
        "Compare the speed and confidence of unaided diagnoses on familiar cases before and after the training programme."
      ],
      answer: 2,
      solution: "Option C separates the superficial cue from the underlying fault in both directions. A learner relying on cue recognition will tend to produce false positives when the cue appears alone and false negatives when the fault appears without it. Requiring a diagnosis and supporting evidence before advice also preserves a test of independent interpretation. A changes case values but leaves the cue–fault association intact, so either learning mechanism could produce good scores. B can reveal some understanding but does not isolate independent diagnosis: the recommendation has already supplied an answer to explain. D can detect greater fluency on familiar material without showing transfer. C therefore most directly discriminates between the two explanations for the score improvement."
    },
    {
      id: 'V12', section: 'VARC', topic: 'RC · Assumption challenged', difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC3', groupTitle: 'RC 3 · Where expertise comes from', passage: automation,
      question: 'Which assumption in the familiar defence of automation does the opening paragraph most directly challenge?',
      options: [
        "Removing routine activity leaves intact the processes that develop and sustain the judgement workers are expected to exercise.",
        "Automated systems can sometimes execute routine tasks more efficiently than people.",
        "Professional judgement can be improved through repeated encounters with cases.",
        "Skilled workers prefer exercising judgement to performing repetitive tasks."
      ],
      answer: 0,
      solution: "Option A identifies the hidden independence assumption challenged by the suitcase analogy and the discussion of ordinary encounters. Removing a task may remove part of the process that creates the capacity needed for the remaining task. D concerns preferences, which the author does not investigate. B is compatible with the argument: efficient automation can still create a learning problem. C is largely supported, with qualifications about useful rather than mindless repetition; it is not the premise being attacked."
    },
    {
      id: 'V13', section: 'VARC', topic: 'RC · Central argument', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC4', groupTitle: 'RC 4 · Making repair ordinary', passage: repair,
      question: 'Which statement most accurately expresses the passage’s central claim?',
      options: [
        'A meaningful right to repair requires sustained practical conditions for repair, extending beyond a product’s physically accessible design.',
        'Repair policy should primarily transfer responsibility for spare parts from manufacturers to independent workshops and user communities.',
        'The environmental value of repair is uncertain enough that governments should focus on improving the efficiency of new products instead.',
        'Voluntary repair communities offer the most economical way to overcome manufacturers’ reluctance to keep old products working.'
      ],
      answer: 0,
      solution: 'Option A covers the opening distinction, the ongoing availability of parts and information, and the final demand for ordinary, repeatable repair. B chooses a particular allocation of responsibility where the author presents several possibilities and trade-offs. C exaggerates a qualification about environmental comparisons into a rejection of repair policy. D elevates voluntary action despite the final paragraph’s explicit account of constraints it cannot overcome. Physical access is valuable, but the passage’s point is that it is insufficient by itself.'
    },
    {
      id: 'V14', section: 'VARC', topic: "RC · Research design", difficulty: 'Hard', type: 'MCQ',
      groupId: 'RC4', groupTitle: 'RC 4 · Making repair ordinary', passage: repair,
      question: "Two appliance models are equally easy to open, and both came with diagnostic manuals. Five years later, a smaller proportion of attempted repairs succeeds for one model. A reviewer attributes the difference to its owners being less resourceful. Which investigation would best test the alternative explanation suggested by the passage?",
      options: [
        "Compare owners’ reported repair experience and willingness to spend time on repairs, matching them by the original purchase price.",
        "For comparable faults and access to skilled labour, compare whether compatible parts and usable, updated instructions were obtainable when each repair was attempted.",
        "Have technicians compare disassembly times and the clarity of the manuals originally supplied, without consulting later parts or software records.",
        "Compare the models’ expected remaining service and energy use to establish whether the failed repairs would have been environmentally worthwhile."
      ],
      answer: 1,
      solution: "Option B investigates the passage’s alternative: an attempted repair can fail because continuing access to parts and information has broken down, even when the design was accessible and a manual was initially delivered. Matching fault complexity and skilled-labour access makes a difference in those continuing conditions more informative. The study would test that explanation, not prove it merely by being proposed. A mainly investigates the reviewer’s individual-resourcefulness explanation and leaves the institutional alternative unmeasured. C examines initial physical and informational accessibility while deliberately omitting whether they remain usable after changes. D addresses whether a repair would be environmentally desirable, which is distinct from why an attempted repair could not be completed."
    },
    {
      id: 'V15', section: 'VARC', topic: 'RC · Author’s position', difficulty: "Moderate", type: 'MCQ',
      groupId: 'RC4', groupTitle: 'RC 4 · Making repair ordinary', passage: repair,
      question: 'Which statement about environmental policy would the author most likely endorse?',
      options: [
        'If repair is technically possible, extending an appliance’s life is environmentally preferable to purchasing a replacement.',
        'Policy should preserve a practical repair option while allowing the choice to depend on production impacts, use impacts and expected remaining service.',
        'Because old appliances may be inefficient, practical access to repair should depend on proof that repair has the lower total environmental impact.',
        'Replacement should be preferred whenever a new appliance has lower energy consumption during use, regardless of its production impacts.'
      ],
      answer: 1,
      solution: 'Option B directly reflects the fourth paragraph’s distinction between making repair available and choosing it in a particular case. A makes longevity universally preferable, which the inefficient-appliance example rejects. C turns informed choice into a prerequisite for access, a restriction the author does not propose. D considers only the use phase and excludes production, despite the instruction to include both and likely remaining service. The qualification about repair’s benefits calls for fuller comparison, not a presumption for universal repair or universal replacement.'
    },
    {
      id: 'V16', section: 'VARC', topic: 'RC · Function and tone', difficulty: 'Moderate', type: 'MCQ',
      groupId: 'RC4', groupTitle: 'RC 4 · Making repair ordinary', passage: repair,
      question: 'The discussion of the “unusually determined person” primarily serves to:',
      options: [
        "suggest that repair enthusiasts exaggerate the difficulty of tasks that ordinary consumers could perform with enough effort.",
        "argue that professional repair services should replace voluntary community initiatives.",
        "warn that exceptional individual successes can distract from whether the wider conditions for routine repair are available.",
        "show that personal attachment to objects is more important to successful repair than technical information."
      ],
      answer: 2,
      solution: "Option C captures the final paragraph’s caution: admiration for ingenuity can hide systematic constraints, while a substantial right should support repeatable ordinary success. A reverses the argument by shifting blame to insufficient effort. B invents a proposal to displace volunteers even though their knowledge-sharing value is acknowledged. D introduces attachment and ranks it above information, contrary to the examples of inaccessible components and manuals. The tone is appreciative of voluntary work but critical of using it as a substitute for enabling conditions."
    },
    {
      id: 'V17', section: 'VARC', topic: 'VA · Paragraph summary', difficulty: 'Hard', type: 'MCQ',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'Choose the option that best summarises the paragraph.\n\nPublic consultation is often judged by how many people participate. Yet an invitation to comment may arrive after the consequential choices have been fixed, leaving participants to choose a colour for a building whose location they oppose. Low participation can therefore express a realistic assessment of influence rather than civic indifference. Equally, a crowded meeting need not show that influence is substantial: the disputed decision may simply matter enough for people to attend despite expecting little effect. Participation figures become interpretable only when related to what participants could change and whether reasons offered in discussion altered the decision process. Counting voices is useful, but it cannot substitute for examining the power attached to them.',
      options: [
        'Participation in consultation increases when citizens believe their contributions will influence major decisions rather than cosmetic details.',
        'Public consultation is meaningful only if participants have the authority to reverse decisions made before their involvement.',
        'Participation counts alone cannot establish the quality of consultation; they must be interpreted alongside participants’ opportunities for influence and the treatment of their reasons.',
        'Low attendance often reflects citizens’ limited influence, whereas high attendance establishes that the issue matters more than the consultation process.'
      ],
      answer: 2,
      solution: 'Option C preserves the main relationship: numbers are useful but require interpretation through actual opportunities and responsiveness. A turns the paragraph into a general prediction about attendance and omits the warning that high turnout can coexist with low expected influence. B imposes full reversal authority as a necessary condition, which is not stated. D makes the crowded-meeting example conclusive (“establishes”) and omits the proposed criterion for evaluating consultation. The paragraph says these explanations are possible, not that attendance identifies them by itself.'
    },
    {
      id: 'V18', section: 'VARC', topic: 'VA · Paragraph summary', difficulty: 'Hard', type: 'MCQ',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'Choose the option that best summarises the paragraph.\n\nA translation can reproduce every explicit claim in a text and still alter what the text asks its reader to do. A joke may depend on a delay before a familiar expression becomes strange; a political slogan may derive force from sounding borrowed rather than new. Moving these effects into another language sometimes requires changing the wording that appears most faithful in isolation. This does not grant translators unlimited licence. The change should be defensible in relation to the text’s activity and the new reader’s resources. Fidelity is consequently neither a fixed distance from the original wording nor permission to create an independent work; it is an accountable judgement about which relations must survive the move.',
      options: [
        "A faithful translation reproduces explicit claims while allowing translators to devise new effects suited to the receiving culture.",
        "The effects of jokes and slogans cannot survive literal translation because different languages supply readers with incompatible cultural resources.",
        "Translators should give priority to readers’ reactions over explicit claims whenever the two cannot be preserved simultaneously.",
        "Faithful translation may require justified changes in wording to preserve how a text operates for readers, without becoming unrestricted reinvention."
      ],
      answer: 3,
      solution: "Option D integrates the paragraph’s positive proposal and its boundary: wording can change to preserve relevant relations, but the choice must be accountable. B universalises illustrative possibilities into impossibility and invents incompatibility between cultures. C establishes an absolute priority over claims that the paragraph does not give. A treats newly devised effects as automatically permissible and retains exact claims as the definition of fidelity, missing the argument that explicit claims alone may fail to preserve the text’s activity."
    },
    {
      id: 'V19', section: 'VARC', topic: 'VA · Sentence insertion', difficulty: 'Moderate', type: 'MCQ',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'The sentence below is missing from the paragraph. Choose the position (1), (2), (3) or (4) where it best fits.\n\nMissing sentence: The missing entry is the time between planting those saplings and their becoming effective sources of shade.\n\nParagraph:\n(1) City tree inventories often report gains and losses as a count of individual trees. On that measure, replacing ten mature trees with ten newly planted saplings appears to restore what was removed. (2) During that unrecorded interval, residents may lose protection from summer heat even though the inventory shows a balanced total. A numerical recovery can therefore conceal a prolonged reduction in a service that people actually use. (3) This does not make counting trees pointless; counts remain useful for tracking planting activity and checking whether promised replacements arrived. It means that evaluating the consequences of replacement also requires measures that register the age and development of the trees. (4)',
      options: ['Position (1)', 'Position (2)', 'Position (3)', 'Position (4)'], answer: 1,
      solution: 'Position (2) supplies both links required by the paragraph. “Those saplings” refers to the newly planted replacements immediately before it, and “that unrecorded interval” immediately after it refers to the time the inserted sentence defines. At (1), the saplings have not been introduced. At (3) or (4), the paragraph would already have used “that unrecorded interval” without supplying the interval’s antecedent. The insertion also explains how an apparently balanced count can conceal a temporary loss of shade.'
    },
    {
      id: 'V20', section: 'VARC', topic: 'VA · Sentence insertion', difficulty: "Moderate", type: 'MCQ',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'The sentence below is missing from the paragraph. Choose the position (1), (2), (3) or (4) where it best fits.\n\nMissing sentence: The second kind of disagreement can expose a difference in what the teams have actually chosen to measure.\n\nParagraph:\n(1) When studies report incompatible numbers, the disagreement may be presented as a contest in which one team must have made a mistake. Before choosing a winner, however, it helps to distinguish two situations. (2) Teams may obtain different results while applying the same measurement rules to comparable cases. Alternatively, they may use different rules while describing their measurements with the same familiar label. (3) Such a difference can remain hidden if discussion focuses exclusively on whether each team calculated its result correctly. Recognising it changes the task from identifying a computational error to examining the relation between a label and the procedures that give it meaning. (4)',
      options: ['Position (1)', 'Position (2)', 'Position (3)', 'Position (4)'], answer: 2,
      solution: 'Position (3) follows the two situations, so “the second kind” has an explicit referent: teams using different rules under one label. It also provides the exact referent for the next sentence’s “Such a difference”, namely a difference in what is measured. At (1), neither kind exists in the discourse. At (2), the two situations have been announced but not specified, prematurely identifying the second. At (4), the explanation arrives after its dependent elaboration and interrupts the paragraph’s completed conclusion.'
    },
    {
      id: 'V21', section: 'VARC', topic: 'VA · Parajumble', difficulty: 'Moderate', type: 'TITA',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: "The four sentences below form a coherent paragraph when arranged correctly. Enter the correct sequence of sentence numbers without spaces.\n\n1. The unresolved descriptions constitute what might be called interpretive debt, which remains after the files themselves are accessible.\n2. A museum can digitise every object in a collection within a few months.\n3. Paying down that debt requires revisiting earlier curatorial judgements, so it cannot be measured by the number of files uploaded.\n4. Its catalogue, however, may take years to replace obsolete descriptions inherited from earlier curators.",
      options: [], answer: '2413',
      solution: "The sequence is 2–4–1–3. Sentence 2 introduces the museum and digitisation. Sentence 4’s “Its catalogue” refers to that museum and introduces the obsolete descriptions that take longer to replace. Sentence 1’s “The unresolved descriptions” requires that introduction and names the problem “interpretive debt”. Sentence 3’s “that debt” must follow the sentence that introduces this concept, and explains what resolving it involves. These dependencies give 2 before 4 before 1 before 3; in particular, 2–4–3–1 would refer to “that debt” before any debt had been introduced."
    },
    {
      id: 'V22', section: 'VARC', topic: 'VA · Parajumble', difficulty: 'Moderate', type: 'TITA',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'The four sentences below form a coherent paragraph when arranged correctly. Enter the correct sequence of sentence numbers without spaces.\n\n1. At first, the resulting difference in germination seemed to demonstrate the superiority of one soil.\n2. That overlooked difference meant that the trial could not isolate soil as the cause of the result.\n3. To compare two soils, a gardener planted one batch of seeds in each and kept watering and sunlight the same.\n4. Yet the seeds assigned to the two soils had also been stored at different temperatures before planting.',
      options: [], answer: '3142',
      solution: 'The sequence is 3–1–4–2. Sentence 3 establishes the trial and controlled conditions. Sentence 1 reports the initial interpretation of its result. Sentence 4’s “Yet” introduces the previously unmentioned difference in seed storage, undermining that interpretation. Sentence 2’s “That overlooked difference” refers to the storage temperatures and states the causal consequence. The markers “At first”, “Yet” and “That overlooked difference” fix the movement from design to apparent finding, complication and revised conclusion.'
    },
    {
      id: 'V23', section: 'VARC', topic: 'VA · Odd sentence out', difficulty: 'Moderate', type: 'TITA',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'Four of the five sentences below form a coherent paragraph. Enter the number of the sentence that does not belong.\n\n1. A flood warning can lower the loss from a storm if it prompts residents to move valuables upstairs.\n2. The resulting low loss does not, by itself, show that the warning exaggerated the danger.\n3. Weather agencies often express rainfall forecasts as the probability of exceeding a specified amount.\n4. Indeed, judging the warning by the damage actually observed can penalise it for inducing successful precautions.\n5. Its value must therefore be assessed against an estimate of what would have happened without those precautions.',
      options: [], answer: '3',
      solution: 'Sentence 3 is the odd one out. Sentences 1–2–4–5 form a specific argument about evaluating a warning when the warning itself changes the observed outcome: precautions reduce damage, so the observed damage alone is an inadequate test. Sentence 3 discusses the form in which rainfall probabilities are expressed. It shares the general weather topic but neither develops the intervention effect nor supports the proposed comparison with a no-precautions outcome. All four remaining sentences have clear backward links within that argument.'
    },
    {
      id: 'V24', section: 'VARC', topic: 'VA · Odd sentence out', difficulty: 'Moderate', type: 'TITA',
      groupId: null, groupTitle: 'Verbal ability', passage: '',
      question: 'Four of the five sentences below form a coherent paragraph. Enter the number of the sentence that does not belong.\n\n1. For that reason, a model can lose accuracy even when the physical objects it encounters have not changed.\n2. A classification system inherits the distinctions made by the people who labelled its training examples.\n3. When those people revise a category boundary, yesterday’s correctly labelled example may no longer carry the accepted label.\n4. Faster processors allow classification systems to inspect larger collections of images in a given time.\n5. Maintaining accuracy therefore requires checking whether category definitions, as well as the objects being classified, have changed.',
      options: [], answer: '4',
      solution: 'Sentence 4 is the odd one out. The coherent order is 2–3–1–5: human labelling establishes distinctions; a revised boundary changes accepted labels; a model can consequently lose accuracy without physical change; monitoring must therefore include category definitions. Sentence 4 concerns processing speed and collection size, which neither explains changing labels nor follows from them. Its vocabulary overlaps with classification, but its causal subject is computational throughput rather than the dependence of measured accuracy on human category definitions.'
    }
  ];
}());
