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
      {
        q: 'How do birds navigate at night?',
        options: ['By following rivers and coastlines', 'By using the stars', 'By tracking temperature changes', 'By listening to infrasound'],
        answer: 1
      },
      {
        q: 'What fuels birds on long non-stop ocean crossings?',
        options: ['Extra water stored in their feathers', 'Insects caught mid-flight', 'Stored body fat', 'Carbohydrates from seeds eaten before departure'],
        answer: 2
      },
      {
        q: 'Which animal holds the record for the longest annual migration?',
        options: ['The monarch butterfly', 'The humpback whale', 'The Arctic tern', 'The bar-tailed godwit'],
        answer: 2
      }
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
      {
        q: 'At what depth does sunlight effectively disappear in the ocean?',
        options: ['50 metres', '100 metres', '200 metres', '500 metres'],
        answer: 2
      },
      {
        q: 'What is "marine snow"?',
        options: ['Ice crystals that form in polar waters', 'A type of bioluminescent display', 'Organic debris drifting down from the surface', 'Microscopic salt crystals'],
        answer: 2
      },
      {
        q: 'What happens when a whale sinks to the ocean floor?',
        options: ['It dissolves within a few days due to pressure', 'It creates a long-lasting food source called a whale fall', 'It is consumed immediately by giant squid', 'It becomes trapped in sediment and fossilises'],
        answer: 1
      }
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
      {
        q: 'How old is the earliest evidence of bread-making?',
        options: ['Around 5,000 years', 'Around 8,000 years', 'Around 14,000 years', 'Around 20,000 years'],
        answer: 2
      },
      {
        q: 'What causes leavened bread to rise?',
        options: ['Heat expanding the water in the dough', 'Carbon dioxide produced by yeast', 'Air beaten into the mixture during kneading', 'A chemical reaction between salt and flour'],
        answer: 1
      },
      {
        q: 'In historical social hierarchies, what did white bread represent?',
        options: ['Poverty and lack of choice', 'Wealth and high status', 'Purity in religious contexts', 'A staple for soldiers and labourers'],
        answer: 1
      }
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
      {
        q: 'What happens to memories during deep non-REM sleep?',
        options: ['They are deleted to make space for new ones', 'They are transferred into longer-term storage', 'They are replayed as dreams', 'They are encrypted to prevent false recall'],
        answer: 1
      },
      {
        q: 'What does Matthew Walker mean by "overnight therapy"?',
        options: ['A medically supervised sleep treatment for PTSD', 'The way REM sleep softens the emotional impact of painful memories', 'The use of sleep-tracking apps to improve mental health', 'Counselling sessions conducted in a drowsy, relaxed state'],
        answer: 1
      },
      {
        q: 'Which hormone is notably absent during REM sleep, aiding emotional processing?',
        options: ['Cortisol', 'Serotonin', 'Noradrenaline', 'Melatonin'],
        answer: 2
      }
    ]
  }
];
