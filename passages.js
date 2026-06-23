const PASSAGES = [
  {
    id: 'migration',
    title: 'The Great Migration',
    wordCount: 201,
    text: `Every autumn, one of nature's most dramatic spectacles unfolds across the skies of North America. Hundreds of millions of birds leave their summer breeding grounds and travel thousands of miles to reach warmer wintering areas in the south. This annual journey, known as bird migration, is one of the most energy-intensive and dangerous undertakings in the animal kingdom.

The birds navigate using a remarkable combination of tools. Many species use the position of the sun during the day and the stars at night. Others detect Earth's magnetic field through clusters of iron-rich cells in their beaks, essentially carrying a built-in compass. Young birds making the trip for the first time often rely on an inherited sense of direction, while experienced adults can recognise landmarks along familiar routes.

Not all migrants travel by air. Some shorebirds fly non-stop for up to nine days over open ocean, burning stored fat as fuel. Others travel in short hops, resting and feeding along the way. The Arctic tern holds the record for the longest migration of any animal — travelling from pole to pole and back again each year, covering around 70,000 kilometres in total.

Climate change is already disrupting these ancient patterns, shifting the timing of seasons and reducing the availability of food along key migration routes.`,
    questions: [
      { q: 'How do birds navigate at night?', options: ['By following rivers and coastlines', 'By using the stars', 'By tracking temperature changes', 'By listening to infrasound'], answer: 1 },
      { q: 'What fuels birds on long non-stop ocean crossings?', options: ['Extra water stored in their feathers', 'Insects caught mid-flight', 'Stored body fat', 'Carbohydrates from seeds eaten before departure'], answer: 2 },
      { q: 'Which animal holds the record for the longest annual migration?', options: ['The monarch butterfly', 'The humpback whale', 'The Arctic tern', 'The bar-tailed godwit'], answer: 2 }
    ]
  },
  {
    id: 'deep-sea',
    title: 'Life in the Deep Ocean',
    wordCount: 198,
    text: `Below a depth of 200 metres, sunlight fades to nothing. The deep ocean — everything below this threshold — covers more than 60 percent of Earth's surface and remains the least explored environment on the planet. The pressure at the bottom of the Mariana Trench is over a thousand times greater than at sea level, equivalent to having 50 jumbo jets stacked on top of you.

Despite these crushing conditions, life thrives in extraordinary variety. Many deep-sea creatures produce their own light through a process called bioluminescence. Anglerfish dangle glowing lures to attract prey in the darkness. Firefly squid pulse with blue light to communicate with potential mates. Scientists estimate that bioluminescence occurs in up to 90 percent of deep-sea animals.

Food is scarce at depth. Most deep-sea creatures rely on what oceanographers call marine snow — a slow, continuous rain of dead plankton, faecal pellets, and organic debris drifting down from the surface. When a large whale dies and sinks, it creates what biologists call a whale fall: a sudden feast that can sustain an entire community of specialised organisms for decades.

Our understanding of the deep ocean is still in its infancy. More people have walked on the Moon than have descended to the deepest point of the ocean.`,
    questions: [
      { q: 'At what depth does sunlight effectively disappear in the ocean?', options: ['50 metres', '100 metres', '200 metres', '500 metres'], answer: 2 },
      { q: 'What is "marine snow"?', options: ['Ice crystals that form in polar waters', 'A type of bioluminescent display', 'Organic debris drifting down from the surface', 'Microscopic salt crystals'], answer: 2 },
      { q: 'What happens when a whale sinks to the ocean floor?', options: ['It dissolves within days due to pressure', 'It creates a long-lasting food source called a whale fall', 'It is consumed immediately by giant squid', 'It becomes trapped in sediment and fossilises'], answer: 1 }
    ]
  },
  {
    id: 'bread',
    title: 'The History of Bread',
    wordCount: 205,
    text: `Bread is one of the oldest prepared foods in human history. Evidence of flatbreads made from wild grains has been found at archaeological sites in Jordan dating back more than 14,000 years — predating the invention of agriculture. Early humans ground grains between stones, mixed the flour with water, and cooked the paste on hot rocks. The result was dense, nutritious, and portable: an ideal food for a nomadic life.

The discovery of leavening — probably accidental — transformed bread entirely. When wild yeast spores land in a dough mixture and are given time, they consume sugars and release carbon dioxide gas, which gets trapped in the gluten network and causes the dough to rise. Baked, this produces a lighter, chewier loaf with a complex flavour developed during fermentation. The ancient Egyptians were among the first to master leavened bread on a large scale, and their bakers held a respected status in society.

For most of human history, the type of bread you ate signalled your place in the social order. White bread, made from refined flour with the bran removed, was expensive and associated with the wealthy. Coarser dark breads were the staple of the poor.

Today that hierarchy has flipped: wholegrain breads are marketed as premium, while cheap white loaves line supermarket shelves.`,
    questions: [
      { q: 'How old is the earliest evidence of bread-making?', options: ['Around 5,000 years', 'Around 8,000 years', 'Around 14,000 years', 'Around 20,000 years'], answer: 2 },
      { q: 'What causes leavened bread to rise?', options: ['Heat expanding the water in the dough', 'Carbon dioxide produced by yeast', 'Air beaten into the mixture during kneading', 'A chemical reaction between salt and flour'], answer: 1 },
      { q: 'In historical social hierarchies, what did white bread represent?', options: ['Poverty and lack of choice', 'Wealth and high status', 'Purity in religious contexts', 'A staple for soldiers and labourers'], answer: 1 }
    ]
  },
  {
    id: 'sleep',
    title: 'Why We Sleep',
    wordCount: 203,
    text: `Sleep is not a passive state of unconsciousness. While your body rests, your brain is running one of its most complex and vital programmes — cycling through distinct stages of activity that each serve a different purpose. Getting this wrong, even occasionally, has consequences far beyond feeling tired.

During non-REM sleep, particularly the deep slow-wave stages that dominate the early part of the night, the brain consolidates memories from the day, transferring information from the hippocampus into longer-term storage across the cortex. This is when the events of your waking hours are sorted, strengthened, and integrated with what you already know. People who sleep well after learning a new skill perform measurably better at it the next day than those who stay awake.

REM sleep — the stage most associated with vivid dreaming — appears to serve a different function: emotional processing. During REM, the brain replays emotionally charged memories in a neurochemical environment stripped of the stress hormone noradrenaline. This may explain why sleep, over time, softens the emotional intensity of painful experiences. Matthew Walker, a sleep scientist at the University of California, Berkeley, describes this as "overnight therapy".

Chronic sleep deprivation is linked to increased risk of Alzheimer's disease, cardiovascular illness, obesity, depression, and a significantly shortened lifespan.`,
    questions: [
      { q: 'What happens to memories during deep non-REM sleep?', options: ['They are deleted to make space for new ones', 'They are transferred into longer-term storage', 'They are replayed as dreams', 'They are encrypted to prevent false recall'], answer: 1 },
      { q: 'What does Matthew Walker mean by "overnight therapy"?', options: ['A medically supervised sleep treatment for PTSD', 'The way REM sleep softens the emotional impact of painful memories', 'The use of sleep-tracking apps to improve mental health', 'Counselling sessions conducted in a drowsy, relaxed state'], answer: 1 },
      { q: 'Which hormone is notably absent during REM sleep, aiding emotional processing?', options: ['Cortisol', 'Serotonin', 'Noradrenaline', 'Melatonin'], answer: 2 }
    ]
  },
  {
    id: 'internet',
    title: 'How the Internet Actually Works',
    wordCount: 207,
    text: `Most people use the internet every day without having any idea what it physically is. The answer is surprisingly concrete: the internet is, at its core, a vast network of cables — many of them running along the ocean floor — that connect computers and data centres around the world. When you load a webpage, a request travels from your device through your router, along cables to your internet service provider, and then across a web of interconnected networks until it reaches the server storing the page. The response makes the same journey in reverse, typically in under a second.

Data travels across this infrastructure in packets — small chunks of information, each labelled with its origin and destination. A single email might be broken into dozens of packets that travel different routes and are reassembled at the other end. The system that governs how packets are addressed and routed is called the Internet Protocol, or IP. Each device on the internet has an IP address, a numerical label that functions like a postal address.

The physical backbone of the internet consists of fibre-optic cables that carry data as pulses of light. A single cable thinner than a garden hose can carry more than 400 terabits of data per second — enough to transmit every film ever made in moments.

Wireless connections, including Wi-Fi and mobile data, only cover the last short distance between a cable and your device.`,
    questions: [
      { q: 'What does the internet physically consist of at its core?', options: ['Satellites orbiting the Earth', 'A vast network of cables', 'Wireless radio towers', 'Government-controlled switching stations'], answer: 1 },
      { q: 'What is a "packet" in the context of internet data?', options: ['A compressed file format', 'A small labelled chunk of data sent across the network', 'A secure encrypted tunnel between two devices', 'A type of router used in data centres'], answer: 1 },
      { q: 'What carries data through the physical backbone of the internet?', options: ['Copper telephone wires', 'Satellite microwave signals', 'Fibre-optic cables using pulses of light', 'Coaxial cables using electrical signals'], answer: 2 }
    ]
  },
  {
    id: 'pompeii',
    title: 'The Last Day of Pompeii',
    wordCount: 210,
    text: `On the morning of 24 August, AD 79, the residents of Pompeii had no reason to suspect it would be their last. The city, a prosperous Roman port on the Bay of Naples, was home to around 11,000 people. Mount Vesuvius, looming to the north, had been quiet for centuries. The Romans did not even have a word for volcano.

At around midday, Vesuvius erupted with catastrophic force, sending a column of ash and pumice 30 kilometres into the sky. For several hours, the city was buried under a steady rain of volcanic debris. Many residents fled; others sheltered indoors, believing the worst would pass.

The fatal blow came in the early hours of the following morning, when a pyroclastic surge — a superheated avalanche of gas and ash travelling at hundreds of kilometres per hour — swept down the mountain and engulfed the city. Death was almost instantaneous.

Pompeii remained buried and largely forgotten for nearly 1,700 years. When excavations began in earnest in the 18th century, archaeologists discovered the city preserved in extraordinary detail: loaves of bread still in ovens, graffiti on walls, and the ghostly voids left by human bodies that had decomposed within the hardened ash. By pouring plaster into these voids, researchers created haunting casts of the victims in their final moments.`,
    questions: [
      { q: 'Approximately how many people lived in Pompeii at the time of the eruption?', options: ['Around 3,000', 'Around 11,000', 'Around 25,000', 'Around 50,000'], answer: 1 },
      { q: 'What was the immediate cause of death for most of Pompeii\'s victims?', options: ['Being buried under falling pumice', 'A pyroclastic surge of superheated gas and ash', 'Flooding from the Bay of Naples', 'Collapsing buildings'], answer: 1 },
      { q: 'How were casts of the victims created during excavations?', options: ['Using 3D scanning technology', 'By carefully removing ash layer by layer', 'By pouring plaster into voids left by decomposed bodies', 'By analysing DNA found in the volcanic rock'], answer: 2 }
    ]
  },
  {
    id: 'placebo',
    title: 'The Power of the Placebo',
    wordCount: 204,
    text: `A sugar pill with no active ingredient should, by any rational account, do nothing. Yet decades of research show that placebos — inert treatments given to patients who believe they are receiving real medicine — can produce measurable, sometimes dramatic, physical effects. Patients given placebos have experienced reduced pain, lowered blood pressure, and improved symptoms in conditions ranging from irritable bowel syndrome to depression.

The mechanisms behind the placebo effect are not fully understood, but they are genuinely biological. Brain imaging studies show that patients who respond to placebo painkillers release their own natural opioids — endorphins — in response to taking them. The expectation of relief, it seems, can trigger the brain's own pain-relief systems.

What makes the placebo effect stranger still is that it can work even when patients know they are taking a placebo. In a series of trials, patients with chronic pain were told explicitly that the pills they were taking contained no active ingredient — and still reported significant improvement. Researchers believe that the ritual of taking a pill, combined with the therapeutic relationship with a doctor, may be enough to produce real effects even in the absence of deception.

The placebo effect has important implications for how we design and interpret clinical trials, and for understanding the relationship between mind and body.`,
    questions: [
      { q: 'Which of the following has been shown to respond to placebo treatment?', options: ['Bone fractures', 'Colour blindness', 'Irritable bowel syndrome', 'Hearing loss'], answer: 2 },
      { q: 'What biological mechanism helps explain placebo pain relief?', options: ['Increased blood flow to injured areas', 'Release of the patient\'s own natural opioids (endorphins)', 'Reduction in cortisol levels caused by relaxation', 'Temporary numbing of nerve pathways'], answer: 1 },
      { q: 'What did researchers find when patients were told they were taking a placebo?', options: ['The placebo effect disappeared completely', 'Patients refused to continue the trial', 'Patients still reported significant improvement', 'Results were identical to taking nothing at all'], answer: 2 }
    ]
  },
  {
    id: 'colour',
    title: 'How We See Colour',
    wordCount: 199,
    text: `Colour does not exist in the physical world. What exists are wavelengths of electromagnetic radiation — light — ranging from around 380 nanometres (violet) to 700 nanometres (red). Colour is what your brain creates when it interprets signals from specialised cells in the eye called cones. In this sense, colour is entirely a product of the mind.

Most humans have three types of cone cells, each sensitive to different ranges of wavelengths: roughly corresponding to red, green, and blue. The brain compares the signals from these three types and constructs the experience of colour from the differences between them. This is why screens can reproduce millions of colours using just three coloured pixels.

Around 8 percent of men and 0.5 percent of women have a form of colour vision deficiency — commonly called colour blindness — in which one type of cone is absent or functions differently. The most common form makes it difficult to distinguish between red and green.

A small number of people, almost exclusively women, are thought to be tetrachromats: they carry four types of cone cell rather than three, and may be able to perceive distinctions between colours that appear identical to everyone else. Whether tetrachromacy translates into a richer conscious experience of colour remains an open and fascinating question.`,
    questions: [
      { q: 'Where does colour actually exist, according to the passage?', options: ['In the wavelengths of light themselves', 'In the surface of objects that reflect light', 'In the brain, as an interpretation of light signals', 'In the lens of the eye, which filters wavelengths'], answer: 2 },
      { q: 'How do screens reproduce so many colours?', options: ['By using thousands of tiny mirrors that angle light differently', 'By combining just three coloured pixels', 'By emitting precise wavelengths for each colour', 'By adjusting the brightness of white light through coloured filters'], answer: 1 },
      { q: 'What is a tetrachromat?', options: ['A person who cannot see any colour at all', 'A person with four types of cone cell who may see more colour distinctions', 'A person whose cones are more sensitive to blue wavelengths', 'A person who can see ultraviolet light'], answer: 1 }
    ]
  },
  {
    id: 'marathon',
    title: 'Breaking the Two-Hour Marathon',
    wordCount: 206,
    text: `On 12 October 2019, Eliud Kipchoge of Kenya ran 42.195 kilometres in 1 hour, 59 minutes and 40 seconds — becoming the first human being to run a marathon in under two hours. The achievement, staged on a closed circuit in Vienna, was the culmination of years of scientific planning, and it changed what many people believed was physically possible.

The two-hour barrier had long been considered a physiological frontier. Calculations based on human oxygen consumption, muscle efficiency, and energy availability suggested it might be at the very edge of human capability, if not beyond it. Kipchoge's team left nothing to chance. The course was flat and sheltered from wind. Pacers ran in precise formation around him to minimise air resistance. He wore a prototype shoe containing a carbon-fibre plate that improved running economy by around four percent — a small figure that, over 42 kilometres, adds up to roughly two minutes.

While the record is not ratified by World Athletics — due to the use of rotating pacers and other controlled conditions — it stands as a landmark in human endurance. Kipchoge himself described the achievement as a message: "No human is limited."

The result has since accelerated research into running shoes, pacing strategy, and the outer limits of aerobic performance.`,
    questions: [
      { q: 'Where did Eliud Kipchoge run his sub-two-hour marathon?', options: ['Berlin', 'Tokyo', 'Vienna', 'London'], answer: 2 },
      { q: 'By how much did the prototype shoe improve Kipchoge\'s running economy?', options: ['Around one percent', 'Around two percent', 'Around four percent', 'Around eight percent'], answer: 2 },
      { q: 'Why is the record not ratified by World Athletics?', options: ['Kipchoge\'s age disqualified him from official records', 'The course was shorter than a standard marathon', 'The controlled conditions included rotating pacers', 'GPS tracking was not used to verify the distance'], answer: 2 }
    ]
  },
  {
    id: 'coffee',
    title: 'The Science of Coffee',
    wordCount: 202,
    text: `Coffee is the most widely consumed psychoactive substance in the world. Its active ingredient, caffeine, works by blocking adenosine receptors in the brain. Adenosine is a chemical that builds up throughout the day and makes you feel increasingly sleepy; by occupying its receptors, caffeine prevents this signal from getting through, keeping you alert. It does not actually give you energy — it simply stops you from feeling tired.

The catch is that adenosine continues to accumulate even while caffeine is blocking its receptors. When the caffeine eventually wears off — typically after five to seven hours — all the adenosine that has built up floods the receptors at once, producing the familiar crash. Drinking more coffee delays the crash but also raises the baseline: the more caffeine you consume regularly, the more receptors your brain grows, and the more caffeine you need to achieve the same effect. This is tolerance.

The timing of caffeine matters more than most people realise. Cortisol, the body's natural alerting hormone, peaks shortly after waking. Drinking coffee during this window reduces caffeine's effectiveness and accelerates tolerance. Many sleep researchers recommend waiting 90 minutes after waking before having your first cup — letting cortisol do its job before caffeine takes over.

Caffeine consumed within six hours of bedtime measurably disrupts sleep quality, even when people feel they fall asleep without difficulty.`,
    questions: [
      { q: 'How does caffeine keep you alert?', options: ['It releases adrenaline into the bloodstream', 'It blocks adenosine receptors in the brain', 'It stimulates the production of dopamine', 'It increases blood flow to the frontal cortex'], answer: 1 },
      { q: 'Why does a caffeine crash occur?', options: ['Blood sugar drops rapidly after caffeine is metabolised', 'Accumulated adenosine floods the receptors when caffeine wears off', 'Dehydration caused by caffeine reduces brain function', 'Caffeine depletes serotonin reserves'], answer: 1 },
      { q: 'When do sleep researchers suggest having your first coffee of the day?', options: ['Immediately upon waking, before cortisol peaks', 'During breakfast, to aid digestion', 'About 90 minutes after waking', 'Only after completing any physical exercise'], answer: 2 }
    ]
  },
  {
    id: 'language',
    title: 'How Children Learn Language',
    wordCount: 208,
    text: `By the age of five, most children have mastered the fundamentals of their native language — a feat that has astonished linguists for decades. They can produce and understand thousands of words, apply grammatical rules they have never been explicitly taught, and even invent new sentences that no one has said before. They do all this without formal instruction, and largely without being corrected.

The linguist Noam Chomsky proposed in the 1950s that humans are born with an innate capacity for language — a "language acquisition device" hardwired into the brain that predisposes children to find and learn the grammar of whatever language surrounds them. This would explain why children in all cultures acquire language at roughly the same pace and pass through similar developmental stages.

Not everyone accepts Chomsky's nativist account. Rival theories emphasise the role of social interaction and statistical learning: children are extraordinarily good at detecting patterns, and given enough exposure to language, they can extract its structure through experience alone. On this view, there is nothing specifically linguistic about the infant brain — just a powerful general learning mechanism.

The debate remains unresolved. What is beyond dispute is that the critical period for language acquisition is early childhood. Children who grow up without exposure to language before adolescence never fully acquire it — a finding with sobering implications for how we think about early development.`,
    questions: [
      { q: 'What did Noam Chomsky propose about language acquisition?', options: ['Children learn language purely through imitation', 'Humans are born with an innate capacity for language', 'Language is too complex for children to learn without formal teaching', 'Grammar must be explicitly corrected for children to learn it properly'], answer: 1 },
      { q: 'What do rival theories to Chomsky\'s emphasise?', options: ['The role of written language in developing grammar', 'Social interaction and statistical pattern learning', 'The importance of a bilingual environment in early childhood', 'Brain size as the key factor in language ability'], answer: 1 },
      { q: 'What happens to children who are not exposed to language before adolescence?', options: ['They develop a simplified but functional language system', 'They never fully acquire language', 'They can still learn language normally as adults', 'They develop strong non-verbal communication skills instead'], answer: 1 }
    ]
  },
  {
    id: 'fungi',
    title: 'The Hidden Kingdom of Fungi',
    wordCount: 200,
    text: `Fungi are neither plants nor animals. They form their own separate kingdom of life — one that is, in many ways, closer to animals than to plants, sharing a common ancestor with them far back in evolutionary history. There are an estimated 3.8 million species of fungi on Earth, of which only around 150,000 have been formally described. The rest remain largely unknown.

The part of a fungus most people recognise — the mushroom — is only the fruiting body, equivalent to the apple on a tree. The organism itself lives mostly underground, as a vast network of thin filaments called mycelium. A single teaspoon of healthy forest soil can contain hundreds of kilometres of mycelial threads. Through these networks, trees in a forest exchange carbon, nitrogen, water, and chemical distress signals — a system so sophisticated it has been nicknamed the "wood wide web".

Fungi are the great recyclers of the natural world. Without them, dead plant matter would accumulate indefinitely, locking up nutrients that living organisms need. They break down cellulose and lignin — the tough structural materials in wood — that almost nothing else can digest.

Medicinal fungi have given us some of our most important treatments: penicillin, the first antibiotic, was derived from a mould, and several immunosuppressant drugs used in organ transplants come from fungal sources.`,
    questions: [
      { q: 'How many species of fungi are estimated to exist on Earth?', options: ['Around 150,000', 'Around 500,000', 'Around 3.8 million', 'Around 10 million'], answer: 2 },
      { q: 'What is the "wood wide web"?', options: ['An online database of tree species and their habitats', 'The mycelial network through which trees exchange nutrients and signals', 'A root system connecting trees of the same species', 'A term for the canopy layer where most forest life exists'], answer: 1 },
      { q: 'What was penicillin derived from?', options: ['A deep-sea bacterium', 'A tropical plant extract', 'A mould (fungus)', 'A synthetic compound developed in a lab'], answer: 2 }
    ]
  }
];
