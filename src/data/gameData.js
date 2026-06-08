// ============================================================
// THE EKATERINBURG GAZETTE — GAME DATA
// Complete RPG content: characters, prologue, 4 eras, 9 questions, true ending
// ============================================================

/**
 * CHARACTER DEFINITIONS
 * Keys are used throughout the game to reference characters.
 * `image` paths are relative to the public directory.
 */
const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL;

export const CHARACTERS = {
  anastasia: {
    name: 'Anastasia',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/1_Anastasia.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/1_Anastasia.png`,
    type: 'ghost',
  },
  maria: {
    name: 'Maria',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/2_Maria.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/2_Maria.png`,
    type: 'ghost',
  },
  ivan: {
    name: 'Ivan Petrov',
    title: 'Soviet Press Officer',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/3_IvanPetrov.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/3_IvanPetrov.png`,
    type: 'npc',
  },
  volkov: {
    name: 'Colonel Dmitri Volkov',
    title: 'White Russian Royalist Émigré',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/4_ColonelDmitriVolkov.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/4_ColonelDmitriVolkov.png`,
    type: 'npc',
  },
  chuck: {
    name: 'Chuck Morrison',
    title: 'Hollywood Film Producer',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/5_ChuckMorrison.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/5_ChuckMorrison.png`,
    type: 'npc',
  },
  kasimova: {
    name: 'Dr. Elena Kasimova',
    title: 'Forensic Geneticist',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/6_DrElenaKasimova.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/6_DrElenaKasimova.png`,
    type: 'npc',
  },
  family: {
    name: 'The Romanov Family',
    image: `${PUBLIC_ASSET_BASE}characters/optimized/7_WholeFamily_ending.webp`,
    fallbackImage: `${PUBLIC_ASSET_BASE}characters/7_WholeFamily_ending.png`,
    type: 'ending',
  },
};

/**
 * PROLOGUE
 * Displayed before Era 1 begins.
 */
export const PROLOGUE = {
  title: '☠ THE EKATERINBURG GAZETTE ☠',
  subtitle: '— SPECIAL EVENING EDITION —',
  narration: [
    'July 17, 1918. Ekaterinburg, Russia.',
    'In the basement of the Ipatiev House, the Romanov imperial family — Tsar Nicholas II, Tsarina Alexandra, and their five children — were executed by Bolshevik firing squad.',
    'But the Soviet regime told the world only the Tsar had been shot. The fate of the Tsarina and the children was hidden, denied, and distorted for nearly a century.',
    'Two of those children — Anastasia and Maria — have been wandering as ghosts ever since. Unable to rest, unable to remember their own deaths clearly, trapped between contradictory stories.',
    'They need your help to walk through the fog of propaganda, impostor myths, Hollywood fantasies, and scientific evidence — to finally learn the truth of what happened to them.',
    'Will you guide them home?',
  ],
};

/**
 * ERAS
 * Array of 4 era objects, each containing intro scenes, questions, and transitions.
 * Total: 9 questions across all eras (2 + 3 + 2 + 2).
 */
export const ERAS = [
  // ================================================================
  // ERA 1: EXECUTION & EARLY RUMORS (1918–1920s)
  // ================================================================
  {
    id: 'era1',
    title: 'Execution & Early Rumors',
    subtitle: 'Soviet Cover-Up & The First Lies',
    yearRange: '1918–1920s',
    npcKey: 'ivan',

    introScene: {
      anastasiaLines: [
        'I remember being taken downstairs... the cellar was cold. Papa was carrying Alexei. Mama brought her pillows.',
        'Then there was shouting. And flashes. And pain.',
        'But the newspapers from that time say we were safe. They say we were sent to Perm. Did we survive?',
      ],
      mariaLines: [
        'I don\'t feel alive, sister. But I don\'t remember dying either. The stories are all different. Please — help us find the truth in these old papers.',
      ],
      npcIntro: 'Ah, you are inquiring about the Romanov affair? Allow me to set the record straight. I am an officer of the Soviet press bureau.',
    },

    questions: [
      {
        id: 'q1',
        npcDialogue: 'Comrade, the official Izvestia report of July 19, 1918, states clearly: only the former Tsar Nicholas Romanov was executed by the Ural Regional Soviet. His wife and children were evacuated to a safe location in the Perm region for their own protection. This is the documented truth. Why do you question the Soviet state?',
        choices: [
          {
            id: 'A',
            text: 'Because the coded telegram from Ural Soviet Chairman Beloborodov to Sverdlov in Moscow confirms that ALL 11 persons were executed — the Perm evacuation story was a deliberate diplomatic cover-up to avoid provoking the German Empire.',
            isCorrect: true,
          },
          {
            id: 'B',
            text: 'I have no reason to doubt the official Izvestia report. The Soviet government would not lie to its own people.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'Perhaps the family really was evacuated. There are many reports of Romanov sightings in Perm.',
            isCorrect: false,
          },
        ],
        wrongResponse: {
          npc: 'Precisely, comrade. The Soviet state acts in the interest of the people. Now — do you have any further questions, or will you accept the official record?',
          ghost: 'Wait... something feels wrong. That answer didn\'t help us at all. The fog is still here. Please, look deeper into the documents. There must be something the officer isn\'t telling us.',
        },
        correctResponse: {
          npc: 'How... how did you find that telegram? That dispatch was encoded! The Perm story was... was a political necessity. The German Kaiser would have retaliated if he knew we executed his cousin\'s wife and children. It was... state security.',
          anastasia: 'A political necessity... So Perm was a lie. We were never on that train. We never left the cellar.',
          maria: 'Then why does the fog remain? If we know the truth now, why can\'t we rest? Because knowing the lie isn\'t enough. We need to know everything — every layer of deception that was built on top of our deaths.',
        },
      },
      {
        id: 'q2',
        npcDialogue: 'Very well — suppose the execution did occur as you claim. But consider this: the White Army investigator Nikolai Sokolov searched the Koptyaki forest and the Ganina Yama mine shaft in 1919. He found fragments — some clothing, some bone chips, personal items. But he recovered NO complete bodies. Not one. If the entire family was truly killed, where are the remains? Doesn\'t the absence of bodies prove that at least SOME of the children could have survived and escaped?',
        choices: [
          {
            id: 'A',
            text: 'Yes — if Sokolov couldn\'t find complete bodies, then maybe some children did survive and were smuggled out.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'The investigation was unreliable. We can\'t trust White Army evidence during a civil war.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'No. Sokolov found burned clothing fragments, bone fragments, personal items like the Tsarina\'s emerald earring, and bullet marks in the cellar walls. The absence of complete bodies proves the Bolsheviks destroyed the remains with acid and fire — it proves body destruction, not survival.',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'You see? Even you cannot account for the missing remains. Perhaps the Soviet state was more merciful than you think.',
          ghost: 'No... that doesn\'t feel right. The fog thickens when you choose that path. Please look at what Sokolov actually found — the physical evidence in the forest.',
        },
        correctResponse: {
          npc: 'The acid... yes. Yurovsky\'s own notes describe the sulfuric acid. And the bonfires near the railway ties. We tried to erase them completely. We almost succeeded.',
          anastasia: 'They burned us. They poured acid on our bodies. They tried to make us disappear.',
          maria: 'But we didn\'t disappear. We\'re still here. Trapped between the lie they told the world... and the truth they buried in the forest. We understand now — the Soviet state created two versions of our death. A public lie and a secret truth. And the gap between them... that gap is where the rumors were born.',
        },
      },
    ],

    transition: {
      narratorText: 'The Soviet cover-up created a vacuum of truth. Into that vacuum stepped the impostors. For the next sixty years, the most famous of them — a woman pulled from a Berlin canal in 1920 — would claim to be Grand Duchess Anastasia. She was supported by monarchists, celebrities, and desperate relatives. The real ghosts watched in horror as a stranger wore their name.',
    },
  },

  // ================================================================
  // ERA 2: RISE OF IMPOSTORS & ROYALIST CLAIMS (1920s–1950s)
  // ================================================================
  {
    id: 'era2',
    title: 'Rise of Impostors & Royalist Claims',
    subtitle: 'Anna Anderson & The Monarchist Dream',
    yearRange: '1920s–1950s',
    npcKey: 'volkov',

    introScene: {
      anastasiaLines: [
        'Who is that woman? She\'s using MY name. She\'s telling people she IS me. But I\'ve never seen her face before.',
      ],
      mariaLines: [
        'The officer at the table — he believes her. He\'s spent his whole life in exile believing that at least one of us survived. His hope is keeping the lie alive.',
      ],
      npcIntro: 'You dare question the identity of Grand Duchess Anastasia? I have devoted my life to restoring the honor of the Romanov dynasty. Anna Anderson IS the surviving princess, and I will prove it to you.',
    },

    questions: [
      {
        id: 'q3',
        npcDialogue: 'Anna Anderson remembered the secret family nickname \'Shvybzik\' — a pet name Anastasia used for herself that was known only within the innermost circle of the imperial court! She drew detailed layouts of the Winter Palace from pure memory! Only the REAL Anastasia Nikolaevna could possess such intimate knowledge!',
        choices: [
          {
            id: 'A',
            text: 'That does sound quite convincing. How would an ordinary woman know such private details?',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'Perhaps she really is Anastasia. The nickname evidence is strong.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'Scholars have proven that this so-called \'intimate knowledge\' was either already publicly available in émigré memoirs, deliberately coached to her by supporters like Gleb Botkin — the son of the Romanov family\'s physician — or was inconsistently recalled and only \'triggered\' after she was shown photographs and books.',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'You see! Even a stranger can feel the truth of her identity! The blood of the Romanovs calls out!',
          ghost: 'No... I can feel the deception in those words. That woman\'s memories aren\'t hers — they were fed to her. Look more carefully at the court records. Who was coaching her?',
        },
        correctResponse: {
          npc: 'Coached? Gleb Botkin was a loyalist! He would never fabricate evidence for the Grand Duchess!',
          anastasia: 'Gleb was Dr. Botkin\'s son — our family doctor who died beside us in the cellar. Of course Gleb wanted to believe. But wanting something to be true doesn\'t make it true.',
          maria: 'And the palace layouts? Those details were published in émigré magazines years before Anderson ever drew them. She was reading our history and pretending it was her memory.',
        },
      },
      {
        id: 'q4',
        npcDialogue: 'Then explain THIS — Anna Anderson\'s body is covered in scars. Deep wounds across her head, her chest, her limbs. These are the marks of bayonet strikes and gunshot wounds from the execution! Her physical trauma is undeniable proof that she survived the massacre at Ipatiev House!',
        choices: [
          {
            id: 'A',
            text: 'Those scars actually match the medical records of Franziska Schanzkowska — a Polish munitions factory worker who was injured in an industrial explosion at the AEG ammunition plant in Berlin. German investigators, including the Romanov family\'s own former tutor Pierre Gilliard, traced Anderson\'s identity back to Schanzkowska in 1929.',
            isCorrect: true,
          },
          {
            id: 'B',
            text: 'Industrial injuries and combat wounds can look similar. The scars alone don\'t prove anything either way.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'Gunshot wounds would leave very specific marks. If doctors confirmed them as execution wounds, that is strong evidence.',
            isCorrect: false,
          },
        ],
        wrongResponse: {
          npc: 'Ambiguity serves truth! Until someone disproves the wounds, they stand as testament to her survival!',
          ghost: 'That\'s not how truth works. You can\'t build proof on what ISN\'T disproven. Find the investigation that traced those scars to their real origin.',
        },
        correctResponse: {
          npc: 'Schanzkowska... A factory worker? But... but Pierre Gilliard was Anastasia\'s own tutor. He knew her face, her voice, her handwriting. If Gilliard himself said she was an imposter...',
          anastasia: 'He did say it. In 1929, Gilliard published \'La Fausse Anastasie\' — \'The False Anastasia.\' He proved that this woman couldn\'t speak Russian, couldn\'t write in Anastasia\'s hand, and that her German carried a distinct Polish accent. She wasn\'t me. She was never me.',
          maria: 'Her scars came from a bomb factory, not from a firing squad. The world confused an industrial accident with an imperial execution.',
        },
      },
      {
        id: 'q5',
        npcDialogue: 'You scholars think you know everything from your dusty papers! But what about FAMILY recognition? Grand Duchess Olga Alexandrovna — the Tsar\'s own SISTER — traveled to Berlin and visited Anna Anderson at the Mommsen Clinic. Even Olga was moved to tears! Even the blood of the Romanovs responded! If the Tsar\'s own sister nearly believed, how can you sit here and deny her?!',
        choices: [
          {
            id: 'A',
            text: 'If Olga was moved to tears, there must be genuine truth to Anderson\'s claim. Family intuition is more reliable than academic analysis.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'Family recognition is the strongest form of proof. No scholar can override what a sister knows in her heart.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'Actually, Grand Duchess Olga\'s formal deposition states the exact opposite of what you\'re claiming. Olga testified that Anderson did NOT speak or understand a single word of Russian, did NOT recognize Olga when she entered the room, and that Anderson\'s facial features — particularly her ears and nose — did not match Anastasia\'s at all. Olga\'s official conclusion was: "This woman is NOT my niece."',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'The heart knows what the mind denies! Olga\'s tears prove more than any deposition!',
          ghost: 'But what did Olga actually SAY in her official statement? Not what the monarchists claim she felt — what she formally testified under oath. Find her deposition.',
        },
        correctResponse: {
          npc: 'Olga said that? She testified she was NOT Anastasia? Then I have spent forty years in this café... defending a ghost who never existed. A Polish woman wearing the mask of a princess. Perhaps... perhaps I needed Anastasia to be alive more than she needed to be real. Because if she survived, then the dynasty survived. And if the dynasty survived, then my exile has meaning.',
          anastasia: 'She stole my name. She stole sixty years of the world\'s attention. But she could never steal my language. I never forgot Russian — and she never learned it.',
          maria: 'The Colonel isn\'t evil, sister. He is broken. He needed the myth because the truth was too painful — that we are all dead, and the old Russia died with us. But the myth didn\'t die with Anderson. It grew even larger. It went to Hollywood.',
        },
      },
    ],

    transition: {
      narratorText: 'Anna Anderson\'s legal case was dismissed by the Hamburg Supreme Court in 1970 — declared legally unresolvable. But the myth had already escaped the courtroom. In 1956, Ingrid Bergman starred in "Anastasia," winning an Academy Award for portraying the lost princess. In 1997, Fox Animation turned the execution into a children\'s musical. The world didn\'t want the truth. It wanted a fairy tale. The ghosts watched as their murder was set to music.',
    },
  },

  // ================================================================
  // ERA 3: WESTERN MEDIA & POP-CULTURE ADAPTATION (1950s–1990s)
  // ================================================================
  {
    id: 'era3',
    title: 'Western Media & Pop-Culture Adaptation',
    subtitle: 'Hollywood, Animation & The Fairy Tale Machine',
    yearRange: '1950s–1990s',
    npcKey: 'chuck',

    introScene: {
      anastasiaLines: [
        'What is this place? It\'s so bright. There\'s music... a waltz. And a woman in a diamond gown who looks like me. But she\'s smiling. She\'s dancing.',
        'There was no waltz in Ekaterinburg. There was a cellar, and a wall, and the sound of gunfire.',
      ],
      mariaLines: [
        'They made a movie about us, sister. But in the movie, we didn\'t die. In the movie, we escaped. We found love. We lived happily ever after.',
      ],
      npcIntro: 'Ladies and gentlemen! Welcome to the magic of cinema! I\'m Chuck Morrison, and I\'ve brought the Romanov story to the silver screen — twice! The 1956 Bergman classic AND the \'97 animated hit! Between us, we\'ve made over $200 million worldwide. The public LOVES this story!',
    },

    questions: [
      {
        id: 'q6',
        npcDialogue: 'Look, pal — the 1956 Ingrid Bergman film and the 1997 animated feature gave the Romanov family something history never could: a HAPPY ending! The Tsar\'s daughter survives, rediscovers her identity, falls in love, and reunites with her grandmother in Paris! Isn\'t that BETTER than dwelling on some gruesome basement execution? Why drag audiences through horror when you can give them hope?',
        choices: [
          {
            id: 'A',
            text: 'A happy ending helps people process grief and move forward. There\'s healing in hopeful stories.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'Entertainment has no obligation to be historically accurate. Films are art, not textbooks.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'No — scholars argue that these films depoliticize the murder by erasing the Bolshevik context and class conflict, commodify genuine trauma by turning a state-executed massacre into a romantic adventure, and convert a historical atrocity into imperial nostalgia packaged for profit. The \'happy ending\' is built on real corpses.',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'See? Even YOU prefer the fairy tale! That\'s human nature, baby!',
          ghost: 'That\'s not healing — that\'s erasure. What do the historians and scholars in the archives say about what these films actually DO to public understanding?',
        },
        correctResponse: {
          npc: 'Hey now — I\'m just giving the people what they want! Romance! Mystery! You can\'t blame a producer for knowing his audience!',
          anastasia: 'You didn\'t give us a happy ending. You gave us a false one. You turned the worst night of our lives into a product — a fairy tale to sell popcorn and plush toys.',
          maria: 'In your animated film, I don\'t even exist. You erased four of us and kept only the one whose name was most marketable. We aren\'t characters in your story, Mr. Morrison. We were real people who bled real blood on a real cellar floor.',
        },
      },
      {
        id: 'q7',
        npcDialogue: 'Okay, fine, you want specifics? In the animated film, little Anastasia escapes the revolution, loses her memory, and years later reunites with her grandmother at a Paris opera. The audience CRIES. Millions of children grew up believing this story. They learned about Russia, about royalty, about resilience! What\'s the HARM in a beautiful myth?',
        choices: [
          {
            id: 'A',
            text: 'Children\'s movies don\'t need to be historically accurate. The emotional lesson matters more than factual precision.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'The myth keeps the Romanov memory alive. Without these films, most people would never know the family existed.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'The harm is precisely what scholars identify: it erases revolutionary context, sanitizes state violence, displaces political accountability, reinforces imperial nostalgia by making the Romanovs glamorous and sympathetic, and exploits public ignorance about the unresolved remains to keep the profitable myth alive. These films turn collective historical trauma into what researchers describe as a \'capitalist emotional product\' — a marketable fairy tale constructed on the graves of murdered children.',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'Art inspires! That\'s what movies do!',
          ghost: 'Inspiration built on lies isn\'t art — it\'s propaganda with better lighting. Look at what the scholars say about how these films exploit ambiguity and public ignorance.',
        },
        correctResponse: {
          npc: 'A fairy tale built on graves... I never... I never thought of it that way. We just saw a great story. A lost princess, a grand romance. We never asked what we were building it on top of.',
          anastasia: 'You built it on top of US. On our bones. On the acid and the fire and the pit in the forest. You turned our murder into a waltz.',
          maria: 'We didn\'t dance in Ekaterinburg, Mr. Morrison. We bled. But the fantasy is finally breaking apart. Because in 1991, someone started digging in the forest again. And this time, they found what the Soviets tried to erase.',
        },
      },
    ],

    transition: {
      narratorText: 'In 1991, the primary burial site near Ekaterinburg was officially exhumed. Nine skeletons were recovered. In 1994, mitochondrial DNA from the remains was compared to a living royal relative — and matched. In 2007, a second grave was discovered, containing the burned fragments of the two missing children. In 2009, the final DNA analysis was published. The myth\'s last refuge — "maybe some survived" — was scientifically demolished. The ghosts stand at the threshold of their final truth.',
    },
  },

  // ================================================================
  // ERA 4: FORENSIC EXHUMATION & FINAL DNA VERDICT (1991–2009)
  // ================================================================
  {
    id: 'era4',
    title: 'Forensic Exhumation & Final DNA Verdict',
    subtitle: 'Science Speaks — The Bones Remember',
    yearRange: '1991–2009',
    npcKey: 'kasimova',

    introScene: {
      anastasiaLines: [
        'This place is different. No propaganda posters. No courtroom gavels. No movie cameras. Just... data. Numbers. Sequences.',
      ],
      mariaLines: [
        'The air feels different here. Lighter. As if the truth is close. Very close.',
      ],
      npcIntro: 'You\'ve come a long way — through Soviet lies, impostor myths, and Hollywood fantasies. Now we are in the domain of science. No ideology. No romance. Only evidence. I have the forensic results that will answer your question once and for all. But you need to understand the evidence to accept it. Are you ready?',
    },

    questions: [
      {
        id: 'q8',
        npcDialogue: 'In 1994, our team published a landmark paper comparing mitochondrial DNA extracted from the nine skeletons found near Ekaterinburg against a living royal relative. Mitochondrial DNA is inherited exclusively through the maternal line — mother to child, unbroken across generations. We needed a living person who shared the same maternal lineage as Tsarina Alexandra. The match confirmed the identity of the Tsarina and three of her daughters beyond reasonable doubt. Which royal relative\'s mtDNA bloodline provided this critical confirmation?',
        choices: [
          {
            id: 'A',
            text: 'Queen Victoria — the great-grandmother of Alexandra.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'Grand Duke Georgij Romanov — Nicholas II\'s brother.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'Prince Philip, Duke of Edinburgh — he shared the same maternal lineage (mtDNA) as Tsarina Alexandra through their common ancestor Princess Alice of Hesse. The remains matched Prince Philip\'s mtDNA sequence with 100% concordance.',
            isCorrect: true,
          },
          {
            id: 'D',
            text: 'The Duke of Fife — a paternal relative of Nicholas II.',
            isCorrect: false,
          },
        ],
        wrongResponse: {
          npc: 'Close, but not quite. Remember — we needed someone from the MATERNAL line of Alexandra, still living in the 1990s, whose DNA could be directly compared. Think about who among European royalty shares Alexandra\'s mother\'s lineage.',
          ghost: 'The answer is in the genetics papers. A prince from the British royal family who is connected to us through our mother\'s bloodline. Find his name.',
        },
        correctResponse: {
          npc: 'Exactly. Prince Philip\'s mitochondrial DNA was a perfect match to the Tsarina\'s remains and three of the daughters. This maternal lineage — inherited through Princess Alice of Hesse — created an unbroken chain of genetic evidence. Additionally, we identified Tsar Nicholas II through his brother Grand Duke Georgij\'s remains. Nicholas had a rare C/T heteroplasmy at position 16169 in his mtDNA — and Georgij showed the identical mutation, independently confirming the Tsar\'s identity. And Anna Anderson? Her DNA — extracted from a hospital biopsy sample preserved since 1979 — did NOT match Prince Philip or any Romanov lineage. Instead, it matched a man named Carl Maucher — a maternal relative of the Polish factory worker Franziska Schanzkowska. Anderson was Schanzkowska. The impostor myth was genetically demolished.',
          anastasia: 'Prince Philip... a distant cousin we never met. But his blood carried our mother\'s signature. After eighty years of lies, science spoke for us.',
          maria: 'And the woman who stole your name, sister — science proved she was a stranger from a Polish bomb factory. Not a Romanov. Never a Romanov.',
        },
      },
      {
        id: 'q9',
        npcDialogue: 'Excellent. But one critical mystery remained after 1994. The primary grave contained only NINE bodies — the Tsar, the Tsarina, THREE daughters, and four attendants. Two of the children were MISSING: Tsarevich Alexei and one of his sisters. Skeptics argued this gap meant at least two children might have survived. For over a decade, the survival myth clung to this final absence. What discovery in 2007 finally and permanently closed this gap?',
        choices: [
          {
            id: 'A',
            text: 'A previously unknown confession letter from a Bolshevik guard was discovered in a Moscow archive, describing exactly how the remaining two children were killed.',
            isCorrect: false,
          },
          {
            id: 'B',
            text: 'New pages of the Yurovsky Note were found, providing a precise description of a second burial location.',
            isCorrect: false,
          },
          {
            id: 'C',
            text: 'The \'Second Grave\' was discovered near Porosenkov Log — approximately 70 meters from the primary burial site. It contained burned and fragmented remains of a young male (aged 12–15) and a young female (aged 15–19). Autosomal STR parentage analysis confirmed these remains as the biological children of Nicholas II and Alexandra, with a likelihood ratio of millions to one. Combined with mtDNA matching Prince Philip\'s lineage, this accounted for ALL five Romanov children. No one survived.',
            isCorrect: true,
          },
        ],
        wrongResponse: {
          npc: 'Documents and confessions are useful, but in forensic science, we need PHYSICAL evidence — bones, DNA, genetic markers. What was physically recovered that filled the gap of the two missing children?',
          ghost: 'The answer isn\'t in a letter or a note. It\'s in the ground. What did they dig up in 2007?',
        },
        correctResponse: {
          npc: 'The 2009 paper by Coble and colleagues in PLOS ONE was the final word. The autosomal STR profiles, the mitochondrial sequences, the Y-chromosome markers — everything converged. The first grave held nine people. The second grave held the last two children. Together, they account for everyone: Nicholas II. Alexandra. Olga. Tatiana. Maria. Anastasia. Alexei. Dr. Botkin. Anna Demidova. Alexei Trupp. Ivan Kharitonov. Eleven people. All killed. All recovered. All identified. The survival theory is genetically, archaeologically, and statistically untenable.',
          anastasia: 'You found us. Every bone. Every fragment. Every child.',
          maria: 'No one was left behind. No one was abandoned in a foreign country pretending to be someone else. We are all here. Together. In the earth where they tried to erase us. The myths are over. The lies, the impostors, the movies, the court cases — they\'re all over. Science brought us home.',
        },
      },
    ],

    transition: {
      narratorText: '',
    },
  },
];

/**
 * TRUE ENDING
 * Displayed after completing all 9 questions across all 4 eras.
 */
export const TRUE_ENDING = {
  anastasiaLines: [
    'For ninety years, we wandered through the fog.',
    'Through Soviet telegrams that said we were safe in Perm.',
    'Through courtrooms where a stranger wore my name.',
    'Through movie theaters where our murder became a waltz.',
    'But you walked with us. Through every lie, every myth, every distortion.',
    'And you helped us find what was always there — buried in the forest, written in our DNA.',
  ],
  mariaLines: [
    'The bones have spoken. The archives have spoken. The science has spoken.',
    'We are Anastasia and Maria Romanov.',
    'We died on July 17, 1918, in the cellar of the Ipatiev House.',
    'We died beside our parents, our brother, and our sisters.',
    'And now — finally — we can rest.',
  ],
  finalText: 'THE BONES HAVE SPOKEN. THE MYTH ENDS HERE. THE ROMANOV CHILDREN — ALL FIVE — REST TOGETHER AT LAST.',
};

/**
 * TOTAL QUESTION COUNT
 * Used by progress bar and game engine.
 */
export const TOTAL_QUESTIONS = ERAS.reduce((sum, era) => sum + era.questions.length, 0);
