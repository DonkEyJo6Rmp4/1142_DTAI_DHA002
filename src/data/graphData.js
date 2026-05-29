// ============================================================================
// graphData.js — Knowledge Graph for the Romanov Archive (53 Papers)
// Property graph: nodes (documents, persons, events) + typed edges
// ============================================================================

// ---------------------------------------------------------------------------
// DOCUMENT NODES  (53 papers — one per file in the archive)
// ---------------------------------------------------------------------------
// Naming: doc_1 … doc_53
// stance comes from the [Deception] / [Obsession] / [Forensic] prefix
// era is assigned by the document's historical period / subject matter

export const GRAPH_NODES = [

  // ========== DECEPTION documents (Soviet / revolutionary narratives) ==========

  { id: 'doc_1',  type: 'document', label: 'Diary of the Russian Revolution',       stance: 'Deception', era: 1, description: 'Houghteling\'s 1918 diary entries chronicling events of the Russian Revolution from an American witness.',                          fullName: '[Deception] A Diary of the Russian Revolution Houghteling 1918 - IA-diaryofrussianre00houg.txt' },
  { id: 'doc_2',  type: 'document', label: 'From Liberty to Brest-Litovsk',         stance: 'Deception', era: 1, description: 'Account of the first year of revolution covering the path from democratic hopes to the Brest-Litovsk treaty.',                       fullName: '[Deception] From Liberty to Brest-Litovsk First Year of the Russian Revolution - IA-fromlibertytobre00willuoft.txt' },
  { id: 'doc_3',  type: 'document', label: 'Trotsky: History to Brest-Litovsk',     stance: 'Deception', era: 1, description: 'Trotsky\'s own 1919 account of the revolution culminating in the Brest-Litovsk peace with Germany.',                                  fullName: '[Deception] History of the Russian Revolution to Brest-Litovsk Trotsky 1919 - IA-historyofrussian00trotiala.txt' },
  { id: 'doc_4',  type: 'document', label: 'Inside the Russian Revolution',         stance: 'Deception', era: 1, description: 'Rheta Childe Dorr\'s 1917 eyewitness report from inside revolutionary Petrograd.',                                                    fullName: '[Deception] Inside the Russian Revolution Dorr 1917 - IA-insiderussianrev00dorr.txt' },
  { id: 'doc_5',  type: 'document', label: 'Is It a Bourgeois Revolution?',         stance: 'Deception', era: 1, description: 'Karl Radek\'s 1920 polemic arguing the Russian Revolution was a proletarian, not bourgeois, uprising.',                                fullName: '[Deception] Is the Russian Revolution a Bourgeois Revolution Radek 1920 - IA-isrussianrevolut00rade.txt' },
  { id: 'doc_6',  type: 'document', label: 'Memoirs of the Revolution',             stance: 'Deception', era: 1, description: 'Personal memoirs capturing scenes and personalities from the revolutionary period.',                                                   fullName: '[Deception] Memoirs of the Russian Revolution - IA-memoirsofrussian00lomorich.txt' },
  { id: 'doc_7',  type: 'document', label: 'Pioneers of the Revolution',            stance: 'Deception', era: 1, description: 'Rappoport\'s 1918 biographical profiles of key revolutionaries and their ideological roots.',                                           fullName: '[Deception] Pioneers of the Russian Revolution Rappoport 1918 - IA-pioneersofrussi00rapp.txt' },
  { id: 'doc_8',  type: 'document', label: 'The Catastrophe (Kerensky)',            stance: 'Deception', era: 1, description: 'Kerensky\'s personal account of the Provisional Government\'s collapse and the Bolshevik takeover.',                                    fullName: '[Deception] The Catastrophe Kerensky Own Story of the Russian Revolution - IA-in.ernet.dli.2015.180014.txt' },
  { id: 'doc_9',  type: 'document', label: 'Many Deaths of Tsar Nicholas II',       stance: 'Deception', era: 1, description: 'Analysis of the contradictory Soviet narratives about how and when the Tsar was killed.',                                               fullName: '[Deception] The Many Deaths of Tsar Nicholas II_26_05_26_11_25_56.pdf' },
  { id: 'doc_10', type: 'document', label: 'Revolution: Review & Perspective',      stance: 'Deception', era: 1, description: 'Analytical review of the revolution\'s causes, course, and long-term perspective.',                                                     fullName: '[Deception] The Russian Revolution A Review and the Perspective - IA-in.ernet.dli.2015.123223.txt' },
  { id: 'doc_11', type: 'document', label: 'The Russian Revolution (Levine)',        stance: 'Deception', era: 1, description: 'Levine\'s 1917 contemporary journalistic account of the revolutionary upheaval.',                                                       fullName: '[Deception] The Russian Revolution Levine 1917 - IA-russianrevolutio00leviuoft.txt' },
  { id: 'doc_12', type: 'document', label: 'Revolution: The First Year',            stance: 'Deception', era: 1, description: 'Short pamphlet summarizing events of the first year of Bolshevik rule.',                                                                fullName: '[Deception] The Russian Revolution The First Year Pamphlet - IA-russianrevolutio00kingiala.txt' },
  { id: 'doc_13', type: 'document', label: 'Revolution and the War (Farbman)',      stance: 'Deception', era: 1, description: 'Farbman\'s 1917 analysis linking the revolution to Russia\'s participation in World War I.',                                              fullName: '[Deception] The Russian Revolution and the War Farbman 1917 - IA-russianrevolutio00farbrich.txt' },
  { id: 'doc_14', type: 'document', label: 'Soul of the Revolution (Olgin)',        stance: 'Deception', era: 1, description: 'Olgin\'s 1917 exploration of the ideological and spiritual forces driving the revolution.',                                               fullName: '[Deception] The Soul of the Russian Revolution Olgin 1917 - IA-soulrussianrevo01olgigoog.txt' },
  { id: 'doc_15', type: 'document', label: 'Three Aspects of the Revolution',       stance: 'Deception', era: 1, description: 'Examination of three dimensions — political, social, economic — of the revolutionary transformation.',                                  fullName: '[Deception] Three Aspects of the Russian Revolution - IA-threeaspectsofru00vandiala.txt' },
  { id: 'doc_16', type: 'document', label: 'Through the Russian Revolution',        stance: 'Deception', era: 1, description: 'Albert Rhys Williams\' 1921 firsthand narrative of living through the revolution.',                                                      fullName: '[Deception] Through the Russian Revolution Williams 1921 - IA-throughrussianre00will.txt' },
  { id: 'doc_17', type: 'document', label: 'Yurovsky Note (1922)',                  stance: 'Deception', era: 1, description: 'The executioner Yurovsky\'s 1922 official account of the murder of the Romanov family.',                                                 fullName: '[Deception] Yurovsky-Note-1922-English.html' },
  { id: 'doc_18', type: 'document', label: 'Trotsky: Full Revolution History',      stance: 'Deception', era: 1, description: 'Trotsky\'s comprehensive multi-volume history of the Russian Revolution.',                                                               fullName: '[Deception] history-of-the-russian-revolution-trotsky.pdf' },

  // ========== FORENSIC documents (investigation & science) ==========

  { id: 'doc_19', type: 'document', label: 'History Journal 2001',                  stance: 'Forensic',  era: 4, description: '2001 academic journal article reviewing the historical evidence surrounding the Romanov remains.',                                     fullName: '[Forensic] 2001HistoryJournal-pages-27-33.pdf' },
  { id: 'doc_20', type: 'document', label: 'Biology in Silico (Bloom 2001)',        stance: 'Forensic',  era: 4, description: 'Bloom\'s 2001 bioinformatics textbook chapter using Romanov DNA identification as a case study.',                                        fullName: '[Forensic] Bloom-BiologysilicoBioinformatics-2001.pdf' },
  { id: 'doc_21', type: 'document', label: 'Coble: Two Missing Children (2009)',    stance: 'Forensic',  era: 4, description: 'Michael Coble\'s 2009 paper proving the two missing Romanov children were found in the second grave.',                                   fullName: '[Forensic] Coble-2009-Mystery-Solved-Two-Missing-Romanov-Children.pdf' },
  { id: 'doc_22', type: 'document', label: 'Coble: Forensic Review (2011)',         stance: 'Forensic',  era: 4, description: 'Comprehensive 2011 review of all forensic evidence used to identify the Romanov remains.',                                               fullName: '[Forensic] Coble-2011-Forensic-Romanov-Identification-Review.pdf' },
  { id: 'doc_23', type: 'document', label: 'Reign of Nicholas II (Cross 2014)',     stance: 'Forensic',  era: 4, description: 'Cross\'s 2014 historical account of Nicholas II\'s reign and its catastrophic end.',                                                      fullName: '[Forensic] Cross-REIGNNICHOLASII-2014.pdf' },
  { id: 'doc_24', type: 'document', label: 'Anna Anderson DNA Identity (1995)',     stance: 'Forensic',  era: 4, description: '1995 DNA study establishing Anna Anderson was Franziska Schanzkowska, not Anastasia.',                                                   fullName: '[Forensic] Establishing-the-Identity-of-Anna-Anderson-Manahan-1995.pdf' },
  { id: 'doc_25', type: 'document', label: 'Gill: Romanov DNA (1994)',              stance: 'Forensic',  era: 4, description: 'Gill\'s landmark 1994 Nature Genetics paper using mtDNA to identify the Romanov remains via Prince Philip.',                              fullName: '[Forensic] Gill-1994-Identification-Romanov-Remains-Nature-Genetics.html' },
  { id: 'doc_26', type: 'document', label: 'Russian History Analysis (1997)',       stance: 'Forensic',  era: 4, description: 'Haukeness\'s 1997 paper examining the historiography of the Romanov murder.',                                                             fullName: '[Forensic] Haukeness-RussianHistory-1997.pdf' },
  { id: 'doc_27', type: 'document', label: 'Romanov Genomic Epilogue (2009)',       stance: 'Forensic',  era: 4, description: 'French-language 2009 article summarizing the genomic conclusion to the Romanov mystery.',                                                 fullName: '[Forensic] Le-massacre-des-Romanov-epilogue-genomique-2009.pdf' },
  { id: 'doc_28', type: 'document', label: 'Murder of the Tsar\'s Family (1920)',   stance: 'Forensic',  era: 1, description: 'Early 1920 investigation report on the murder of the imperial family at Ekaterinburg.',                                                  fullName: '[Forensic] MURDERCZARSFAMILY-1920.pdf' },
  { id: 'doc_29', type: 'document', label: 'Halliburton Reconsidered (1998)',       stance: 'Forensic',  era: 3, description: 'Ostrowski\'s 1998 re-examination of Richard Halliburton\'s sensational Romanov claims.',                                                  fullName: '[Forensic] OSTROWSKI-RECONSIDERATIONRICHARDHALLIBURTONS-1998.pdf' },
  { id: 'doc_30', type: 'document', label: 'Rogaev: Genomic ID (2009, PNAS)',      stance: 'Forensic',  era: 4, description: 'Rogaev\'s 2009 PNAS paper using whole-genome analysis to confirm all Romanov children are accounted for.',                                fullName: '[Forensic] Rogaev-2009-Genomic-Identification-Nicholas-II-Family-PNAS.pdf' },
  { id: 'doc_31', type: 'document', label: 'Rogaev: Full Genomic Study (2009)',     stance: 'Forensic',  era: 4, description: 'Extended 2009 genomic identification study with detailed methodology and pedigree analysis.',                                              fullName: '[Forensic] Rogaev-GenomicIdentificationHistorical-2009.pdf' },
  { id: 'doc_32', type: 'document', label: 'Romanov Hair Shaft DNA (2022)',         stance: 'Forensic',  era: 4, description: '2022 study extracting DNA from Romanov hair relics to further confirm identity.',                                                         fullName: '[Forensic] Romanov-Relics-Hair-Shaft-DNA-2022.pdf' },
  { id: 'doc_33', type: 'document', label: 'Buried, Recovered, Lost Again (2004)',  stance: 'Forensic',  era: 4, description: 'Stone\'s 2004 article on the troubled history of the Romanov remains: discovery, politics, and reburial.',                                fullName: '[Forensic] Stone-Buried-Recovered-Lost-Again-The-Romanovs-May-Never-Rest-2004.pdf' },
  { id: 'doc_34', type: 'document', label: 'Death of Nicholas II: Sources (2024)', stance: 'Forensic',  era: 4, description: '2024 source-critical study of the death of Nicholas II and family through primary documents.',                                           fullName: '[Forensic] Story-of-the-Death-of-Nicholas-II-and-Family-through-Source-Study-2024.pdf' },
  { id: 'doc_35', type: 'document', label: 'From Myth to Reality (2018)',           stance: 'Forensic',  era: 4, description: 'Strosar\'s 2018 analysis tracing the Romanov story from myth to established forensic reality.',                                            fullName: '[Forensic] Strosar-Smrt-Romanovih-od-mita-do-stvarnosti-2018.pdf' },
  { id: 'doc_36', type: 'document', label: 'End of a Dynasty',                     stance: 'Forensic',  era: 1, description: 'Overview of the final days and execution of the Romanov dynasty.',                                                                        fullName: '[Forensic] The End of a Dynasty - The Death of the Romanov Family.pdf' },
  { id: 'doc_37', type: 'document', label: 'Last Days of the Romanovs (1920a)',     stance: 'Forensic',  era: 1, description: '1920 account of the last days of the imperial family based on early investigation.',                                                      fullName: '[Forensic] The Last Days Of The Romanovs 1920 - IA-lastdaysoftherom008558mbp.txt' },
  { id: 'doc_38', type: 'document', label: 'Last Days (Sokolov 1920)',              stance: 'Forensic',  era: 1, description: 'Sokolov\'s official White Army investigation into the execution at the Ipatiev House.',                                                   fullName: '[Forensic] The Last Days of the Romanovs Sokolov 1920 - IA-lastdaysromanov00sokogoog.txt' },
  { id: 'doc_39', type: 'document', label: 'Last Days (Telberg 1920)',              stance: 'Forensic',  era: 1, description: 'Telberg\'s 1920 compilation of legal proceedings and testimony on the Romanov murders.',                                                  fullName: '[Forensic] The Last Days of the Romanovs Telberg 1920 - IA-lastdaysofromano00telb.txt' },
  { id: 'doc_40', type: 'document', label: 'Last Days (Wilton 1920)',               stance: 'Forensic',  era: 1, description: 'Robert Wilton\'s 1920 journalist account of the investigation into the Romanov murders.',                                                 fullName: '[Forensic] The Last Days of the Romanovs Wilton 1920 - IA-lastdaysofromano00wilt.txt' },
  { id: 'doc_41', type: 'document', label: 'Murder of the Romanov Family',          stance: 'Forensic',  era: 1, description: 'World History Encyclopedia overview of the murder of the Romanov family.',                                                                fullName: '[Forensic] The Murder of the Romanov Family - World History Encyclopedia.pdf' },

  // ========== OBSESSION documents (Western myth, impostors, cultural fascination) ==========

  { id: 'doc_42', type: 'document', label: 'Anastasia: A Woman\'s Fate (1928)',     stance: 'Obsession', era: 2, description: '1928 German-language book portraying Anastasia\'s alleged survival as a tragic female destiny.',                                          fullName: '[Obsession] Anastasia ein Frauenschicksal als Spiegel der Weltkatastrophe 1928 - IA-bwb_KR-510-019.txt' },
  { id: 'doc_43', type: 'document', label: 'Botkin: Anastasia (1930)',              stance: 'Obsession', era: 2, description: 'Gleb Botkin\'s 1930 book championing Anna Anderson as the real Anastasia.',                                                               fullName: '[Obsession] Botkin-Anastasia-1930.pdf' },
  { id: 'doc_44', type: 'document', label: 'Hartsook: Anderson Supporter (1997)',   stance: 'Obsession', era: 3, description: 'Hartsook\'s 1997 piece sympathetically presenting evidence for Anna Anderson\'s claim.',                                                  fullName: '[Obsession] Hartsook-AndersonSupporter-1997.pdf' },
  { id: 'doc_45', type: 'document', label: 'Imperial Scatter (Kasinec 2018)',       stance: 'Obsession', era: 4, description: 'Kasinec\'s 2018 study of Russian imperial cultural heritage dispersed across the world.',                                                 fullName: '[Obsession] Kasinec-Imperial-Scatter-Russian-Imperial-Cultural-Heritage-2018.pdf' },
  { id: 'doc_46', type: 'document', label: 'Maurette: Anastasia Play (1958)',       stance: 'Obsession', era: 3, description: 'Marcelle Maurette\'s 1958 theatrical adaptation of the Anastasia legend.',                                                                fullName: '[Obsession] MARCELLEMAURETTE-ANASTASIA-1958.pdf' },
  { id: 'doc_47', type: 'document', label: 'Rasputin & the Revolution (1918)',      stance: 'Obsession', era: 1, description: 'Radziwill\'s 1918 account intertwining Rasputin\'s influence with the revolutionary collapse.',                                            fullName: '[Obsession] Rasputin and the Russian Revolution Radziwill 1918 - IA-rasputinrussianr00radz.txt' },
  { id: 'doc_48', type: 'document', label: 'French Opinions on 1905 Revolution',    stance: 'Obsession', era: 1, description: 'Collection of French press reactions to the 1905 Russian Revolution as precursor to 1917.',                                              fullName: '[Obsession] Some French Contemporary Opinions of the Russian Revolution of 1905 - IA-somefrenchconte00unkngoog.txt' },
  { id: 'doc_49', type: 'document', label: 'Curse of the Romanovs (1907)',          stance: 'Obsession', era: 1, description: 'Rappoport\'s 1907 dramatized history of Romanov dynasty misfortunes and superstitions.',                                                  fullName: '[Obsession] The Curse of the Romanovs Rappoport 1907 - IA-curseromanovsas00rappgoog.txt' },
  { id: 'doc_50', type: 'document', label: 'Fall of the Romanoffs',                stance: 'Obsession', era: 1, description: 'Dramatized account of the downfall of the Romanov dynasty aimed at Western audiences.',                                                  fullName: '[Obsession] The Fall of the Romanoffs - IA-fallofromanoffsh00newyiala.txt' },
  { id: 'doc_51', type: 'document', label: 'Little Grandmother of Revolution',     stance: 'Obsession', era: 1, description: 'Biography of Breshkovsky, the revolutionary grandmother figure, romanticizing the movement.',                                            fullName: '[Obsession] The Little Grandmother of the Russian Revolution Breshkovsky - IA-littlegrandmothe00bres.txt' },
  { id: 'doc_52', type: 'document', label: 'The Swiss and the Romanovs',            stance: 'Obsession', era: 3, description: 'Study of Swiss connections to the Romanov family including exile, tutors, and cultural ties.',                                            fullName: '[Obsession] The Swiss and the Romanovs.pdf' },
  { id: 'doc_53', type: 'document', label: 'Wilson: Anastasia (1929)',              stance: 'Obsession', era: 2, description: 'Wilson\'s 1929 book presenting the case for Anna Anderson as the surviving Anastasia.',                                                   fullName: '[Obsession] Wilson-Anastasia-1929.pdf' },

  // ========== PERSON nodes ==========

  { id: 'person_nicholas',   type: 'person', label: 'Nicholas II',        description: 'Last Tsar of Russia, abdicated 1917, executed July 1918' },
  { id: 'person_alexandra',  type: 'person', label: 'Alexandra',          description: 'Tsarina, wife of Nicholas II, executed 1918' },
  { id: 'person_anastasia',  type: 'person', label: 'Anastasia',          description: 'Grand Duchess, youngest daughter, subject of survival myths' },
  { id: 'person_maria',      type: 'person', label: 'Maria',              description: 'Grand Duchess, third daughter of Nicholas II' },
  { id: 'person_alexei',     type: 'person', label: 'Alexei',             description: 'Tsarevich, heir to the throne, suffered from hemophilia' },
  { id: 'person_anderson',   type: 'person', label: 'Anna Anderson',      description: 'Famous impostor, real name Franziska Schanzkowska' },
  { id: 'person_yurovsky',   type: 'person', label: 'Yakov Yurovsky',     description: 'Bolshevik commander who led the execution squad' },
  { id: 'person_sokolov',    type: 'person', label: 'Nikolai Sokolov',    description: 'White Army investigator who documented the crime scene' },
  { id: 'person_gilliard',   type: 'person', label: 'Pierre Gilliard',    description: 'Former tutor of Romanov children, debunked Anderson' },
  { id: 'person_gill',       type: 'person', label: 'Peter Gill',         description: 'Forensic geneticist, led 1994 mtDNA identification' },
  { id: 'person_coble',      type: 'person', label: 'Michael Coble',      description: 'Forensic geneticist, 2009 second grave DNA analysis' },
  { id: 'person_rogaev',     type: 'person', label: 'Evgeny Rogaev',      description: 'Geneticist, 2009 whole-genome Romanov identification' },
  { id: 'person_philip',     type: 'person', label: 'Prince Philip',      description: 'Duke of Edinburgh, maternal-line reference for DNA comparison' },
  { id: 'person_botkin',     type: 'person', label: 'Gleb Botkin',        description: 'Son of Dr. Botkin (killed with Romanovs), Anderson supporter' },
  { id: 'person_trotsky',    type: 'person', label: 'Leon Trotsky',       description: 'Bolshevik leader, key architect of the revolution' },
  { id: 'person_kerensky',   type: 'person', label: 'Alexander Kerensky', description: 'Head of the Provisional Government, overthrown by Bolsheviks' },
  { id: 'person_rasputin',   type: 'person', label: 'Grigori Rasputin',   description: 'Mystic and healer who influenced the royal family' },

  // ========== EVENT nodes ==========

  { id: 'event_execution',           type: 'event', label: 'Execution (Jul 17, 1918)',    description: 'The Romanov family was executed in the Ipatiev House cellar by Yurovsky\'s squad' },
  { id: 'event_sokolov_investigation',type: 'event', label: 'Sokolov Investigation (1919)',description: 'White Army investigation of the execution site and surrounding forest' },
  { id: 'event_anderson_rescue',      type: 'event', label: 'Anderson Rescued (1920)',     description: 'A woman pulled from a Berlin canal later claimed to be Grand Duchess Anastasia' },
  { id: 'event_bergman_film',         type: 'event', label: 'Bergman Film (1956)',          description: 'Ingrid Bergman\'s "Anastasia" film wins an Oscar, cementing the myth in pop culture' },
  { id: 'event_animated_film',        type: 'event', label: 'Animated Film (1997)',         description: 'Fox Animation\'s "Anastasia" released, introducing the legend to a new generation' },
  { id: 'event_exhumation_1991',      type: 'event', label: 'Exhumation (1991)',            description: 'Nine skeletons exhumed from a shallow grave near Ekaterinburg' },
  { id: 'event_dna_1994',             type: 'event', label: 'DNA Study (1994)',             description: 'Gill\'s mtDNA analysis confirms Romanov identity via comparison to Prince Philip' },
  { id: 'event_second_grave',         type: 'event', label: 'Second Grave (2007)',          description: 'Burned skeletal fragments of two missing children found near the first grave' },
  { id: 'event_final_dna',            type: 'event', label: 'Final DNA Verdict (2009)',     description: 'DNA confirms all seven Romanov family members accounted for — survival myth demolished' },
  { id: 'event_hamburg_court',        type: 'event', label: 'Hamburg Court (1970)',          description: 'German court declares Anna Anderson\'s identity case legally unresolvable' },
];


// ---------------------------------------------------------------------------
// EDGES — relationships between nodes
// Types: AUTHORED_BY, ABOUT, CONTRADICTS, SUPPORTS, DEBUNKS, FOUND_AT,
//        TESTED_BY, CLAIMS_IDENTITY, PARTICIPATED_IN, LED_TO, REFERENCES,
//        PORTRAYS, ANALYZES, DOCUMENTS, CORROBORATES
// ---------------------------------------------------------------------------

export const GRAPH_EDGES = [

  // ===== DOCUMENT → PERSON (ABOUT / REFERENCES) =====

  // Deception docs about key revolutionary / royal figures
  { source: 'doc_1',  target: 'person_nicholas',  type: 'ABOUT',      label: 'Describes the Tsar\'s abdication' },
  { source: 'doc_2',  target: 'person_kerensky',   type: 'ABOUT',      label: 'Covers Kerensky\'s provisional era' },
  { source: 'doc_3',  target: 'person_trotsky',    type: 'AUTHORED_BY', label: 'Written by Trotsky' },
  { source: 'doc_4',  target: 'person_kerensky',   type: 'REFERENCES', label: 'Reports on Kerensky government' },
  { source: 'doc_5',  target: 'person_trotsky',    type: 'REFERENCES', label: 'Engages with Trotsky\'s arguments' },
  { source: 'doc_7',  target: 'person_trotsky',    type: 'ABOUT',      label: 'Profiles Trotsky as pioneer' },
  { source: 'doc_8',  target: 'person_kerensky',   type: 'AUTHORED_BY', label: 'Written by Kerensky' },
  { source: 'doc_9',  target: 'person_nicholas',   type: 'ABOUT',      label: 'Examines conflicting death narratives' },
  { source: 'doc_9',  target: 'person_yurovsky',   type: 'REFERENCES', label: 'Analyzes Yurovsky\'s accounts' },
  { source: 'doc_14', target: 'person_kerensky',   type: 'REFERENCES', label: 'Discusses Kerensky\'s role' },
  { source: 'doc_16', target: 'person_trotsky',    type: 'REFERENCES', label: 'Encounters with Trotsky' },
  { source: 'doc_17', target: 'person_yurovsky',   type: 'AUTHORED_BY', label: 'Written by Yurovsky' },
  { source: 'doc_17', target: 'person_nicholas',   type: 'ABOUT',      label: 'Describes the Tsar\'s execution' },
  { source: 'doc_17', target: 'person_alexandra',  type: 'ABOUT',      label: 'Describes the Tsarina\'s execution' },
  { source: 'doc_17', target: 'person_anastasia',  type: 'ABOUT',      label: 'Describes Anastasia\'s death' },
  { source: 'doc_17', target: 'person_alexei',     type: 'ABOUT',      label: 'Describes Alexei\'s death' },
  { source: 'doc_18', target: 'person_trotsky',    type: 'AUTHORED_BY', label: 'Written by Trotsky' },

  // Forensic docs about key persons
  { source: 'doc_24', target: 'person_anderson',   type: 'ABOUT',      label: 'Identifies Anderson via DNA' },
  { source: 'doc_24', target: 'person_anastasia',  type: 'ABOUT',      label: 'Disproves Anastasia claim' },
  { source: 'doc_25', target: 'person_gill',       type: 'AUTHORED_BY', label: 'Written by Peter Gill' },
  { source: 'doc_25', target: 'person_nicholas',   type: 'ABOUT',      label: 'Identifies Nicholas II\'s remains' },
  { source: 'doc_25', target: 'person_alexandra',  type: 'ABOUT',      label: 'Identifies Alexandra\'s remains' },
  { source: 'doc_25', target: 'person_philip',     type: 'REFERENCES', label: 'Uses Philip\'s mtDNA as reference' },
  { source: 'doc_21', target: 'person_coble',      type: 'AUTHORED_BY', label: 'Written by Michael Coble' },
  { source: 'doc_21', target: 'person_alexei',     type: 'ABOUT',      label: 'Identifies Alexei\'s remains' },
  { source: 'doc_21', target: 'person_maria',      type: 'ABOUT',      label: 'Identifies Maria\'s remains' },
  { source: 'doc_22', target: 'person_coble',      type: 'AUTHORED_BY', label: 'Written by Michael Coble' },
  { source: 'doc_30', target: 'person_rogaev',     type: 'AUTHORED_BY', label: 'Written by Evgeny Rogaev' },
  { source: 'doc_30', target: 'person_nicholas',   type: 'ABOUT',      label: 'Genomic confirmation of Nicholas II' },
  { source: 'doc_31', target: 'person_rogaev',     type: 'AUTHORED_BY', label: 'Written by Evgeny Rogaev' },
  { source: 'doc_31', target: 'person_alexei',     type: 'ABOUT',      label: 'Confirms Alexei identified' },
  { source: 'doc_38', target: 'person_sokolov',    type: 'AUTHORED_BY', label: 'Sokolov\'s investigation report' },
  { source: 'doc_38', target: 'person_nicholas',   type: 'ABOUT',      label: 'Investigates the Tsar\'s murder' },
  { source: 'doc_38', target: 'person_yurovsky',   type: 'REFERENCES', label: 'Documents Yurovsky\'s actions' },
  { source: 'doc_39', target: 'person_sokolov',    type: 'REFERENCES', label: 'Supplements Sokolov\'s findings' },
  { source: 'doc_40', target: 'person_sokolov',    type: 'REFERENCES', label: 'Draws on Sokolov investigation' },
  { source: 'doc_40', target: 'person_yurovsky',   type: 'REFERENCES', label: 'Details Yurovsky\'s orders' },
  { source: 'doc_28', target: 'person_nicholas',   type: 'ABOUT',      label: 'Documents the Tsar\'s murder' },
  { source: 'doc_28', target: 'person_yurovsky',   type: 'REFERENCES', label: 'Reports on the executioner' },
  { source: 'doc_36', target: 'person_nicholas',   type: 'ABOUT',      label: 'Covers the dynasty\'s end' },
  { source: 'doc_36', target: 'person_alexandra',  type: 'ABOUT',      label: 'Covers the Tsarina\'s death' },
  { source: 'doc_41', target: 'person_nicholas',   type: 'ABOUT',      label: 'Overview of the Romanov murder' },
  { source: 'doc_23', target: 'person_nicholas',   type: 'ABOUT',      label: 'Chronicles Nicholas II\'s reign' },
  { source: 'doc_23', target: 'person_alexandra',  type: 'REFERENCES', label: 'Discusses Alexandra\'s influence' },
  { source: 'doc_23', target: 'person_rasputin',   type: 'REFERENCES', label: 'Discusses Rasputin\'s role' },
  { source: 'doc_32', target: 'person_nicholas',   type: 'ABOUT',      label: 'Tests Romanov hair relics' },
  { source: 'doc_34', target: 'person_nicholas',   type: 'ABOUT',      label: 'Source study of Nicholas\'s death' },
  { source: 'doc_34', target: 'person_yurovsky',   type: 'REFERENCES', label: 'Analyzes Yurovsky\'s testimony' },

  // Obsession docs about persons
  { source: 'doc_42', target: 'person_anastasia',  type: 'ABOUT',      label: 'Portrays Anastasia\'s "survival"' },
  { source: 'doc_42', target: 'person_anderson',   type: 'ABOUT',      label: 'Promotes Anderson\'s identity' },
  { source: 'doc_43', target: 'person_botkin',     type: 'AUTHORED_BY', label: 'Written by Gleb Botkin' },
  { source: 'doc_43', target: 'person_anderson',   type: 'SUPPORTS',   label: 'Champions Anderson as Anastasia' },
  { source: 'doc_43', target: 'person_anastasia',  type: 'ABOUT',      label: 'Presents impostor as real' },
  { source: 'doc_44', target: 'person_anderson',   type: 'SUPPORTS',   label: 'Defends Anderson claim' },
  { source: 'doc_46', target: 'person_anastasia',  type: 'PORTRAYS',   label: 'Theatrical Anastasia portrayal' },
  { source: 'doc_47', target: 'person_rasputin',   type: 'ABOUT',      label: 'Centers on Rasputin\'s influence' },
  { source: 'doc_47', target: 'person_alexandra',  type: 'REFERENCES', label: 'Alexandra\'s ties to Rasputin' },
  { source: 'doc_47', target: 'person_nicholas',   type: 'REFERENCES', label: 'Rasputin\'s effect on the Tsar' },
  { source: 'doc_49', target: 'person_nicholas',   type: 'ABOUT',      label: 'Romanov dynastic misfortunes' },
  { source: 'doc_50', target: 'person_nicholas',   type: 'ABOUT',      label: 'Dramatizes the Tsar\'s fall' },
  { source: 'doc_50', target: 'person_alexandra',  type: 'ABOUT',      label: 'Dramatizes the Tsarina\'s fall' },
  { source: 'doc_52', target: 'person_gilliard',   type: 'REFERENCES', label: 'Discusses Gilliard\'s Swiss role' },
  { source: 'doc_52', target: 'person_nicholas',   type: 'REFERENCES', label: 'Swiss connections to the Tsar' },
  { source: 'doc_53', target: 'person_anderson',   type: 'SUPPORTS',   label: 'Builds case for Anderson' },
  { source: 'doc_53', target: 'person_anastasia',  type: 'ABOUT',      label: 'Presents Anderson as Anastasia' },

  // ===== DOCUMENT → EVENT =====

  { source: 'doc_17', target: 'event_execution',            type: 'DOCUMENTS',  label: 'Primary account of the execution' },
  { source: 'doc_9',  target: 'event_execution',            type: 'ANALYZES',   label: 'Analyzes contradictory death stories' },
  { source: 'doc_38', target: 'event_sokolov_investigation', type: 'DOCUMENTS', label: 'Is the investigation report' },
  { source: 'doc_39', target: 'event_sokolov_investigation', type: 'DOCUMENTS', label: 'Legal proceedings of investigation' },
  { source: 'doc_40', target: 'event_sokolov_investigation', type: 'DOCUMENTS', label: 'Journalist account of investigation' },
  { source: 'doc_37', target: 'event_execution',            type: 'DOCUMENTS',  label: 'Documents the final days' },
  { source: 'doc_28', target: 'event_execution',            type: 'DOCUMENTS',  label: 'Early murder investigation report' },
  { source: 'doc_36', target: 'event_execution',            type: 'DOCUMENTS',  label: 'Covers the dynasty\'s end' },
  { source: 'doc_41', target: 'event_execution',            type: 'DOCUMENTS',  label: 'Encyclopedia overview of murder' },
  { source: 'doc_25', target: 'event_dna_1994',             type: 'DOCUMENTS',  label: 'Is the 1994 DNA study' },
  { source: 'doc_25', target: 'event_exhumation_1991',      type: 'REFERENCES', label: 'Tested the exhumed remains' },
  { source: 'doc_21', target: 'event_second_grave',         type: 'DOCUMENTS',  label: 'Analyzes second grave finds' },
  { source: 'doc_21', target: 'event_final_dna',            type: 'LED_TO',     label: 'Led to final DNA conclusion' },
  { source: 'doc_30', target: 'event_final_dna',            type: 'DOCUMENTS',  label: 'Genomic final verdict paper' },
  { source: 'doc_31', target: 'event_final_dna',            type: 'DOCUMENTS',  label: 'Extended genomic confirmation' },
  { source: 'doc_22', target: 'event_exhumation_1991',      type: 'REFERENCES', label: 'Reviews exhumation findings' },
  { source: 'doc_22', target: 'event_dna_1994',             type: 'REFERENCES', label: 'Reviews 1994 DNA work' },
  { source: 'doc_22', target: 'event_second_grave',         type: 'REFERENCES', label: 'Reviews second grave evidence' },
  { source: 'doc_24', target: 'event_hamburg_court',        type: 'REFERENCES', label: 'References the court ruling' },
  { source: 'doc_33', target: 'event_exhumation_1991',      type: 'ABOUT',      label: 'Chronicles the exhumation saga' },
  { source: 'doc_33', target: 'event_dna_1994',             type: 'REFERENCES', label: 'References DNA identification' },
  { source: 'doc_34', target: 'event_execution',            type: 'ANALYZES',   label: 'Source-critical execution analysis' },
  { source: 'doc_42', target: 'event_anderson_rescue',      type: 'REFERENCES', label: 'Draws on Anderson rescue story' },
  { source: 'doc_43', target: 'event_anderson_rescue',      type: 'REFERENCES', label: 'Recounts rescue from canal' },
  { source: 'doc_46', target: 'event_bergman_film',         type: 'REFERENCES', label: 'Related theatrical adaptation' },
  { source: 'doc_53', target: 'event_anderson_rescue',      type: 'REFERENCES', label: 'Bases case on rescue event' },
  { source: 'doc_44', target: 'event_hamburg_court',        type: 'REFERENCES', label: 'References court proceedings' },
  { source: 'doc_27', target: 'event_final_dna',            type: 'DOCUMENTS',  label: 'Summarizes genomic epilogue' },
  { source: 'doc_32', target: 'event_final_dna',            type: 'REFERENCES', label: 'Builds on final DNA findings' },
  { source: 'doc_35', target: 'event_final_dna',            type: 'REFERENCES', label: 'Traces myth to forensic reality' },
  { source: 'doc_35', target: 'event_exhumation_1991',      type: 'REFERENCES', label: 'References exhumation' },

  // ===== PERSON → EVENT =====

  { source: 'person_yurovsky',  target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Led the execution squad' },
  { source: 'person_nicholas',  target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Victim of the execution' },
  { source: 'person_alexandra', target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Victim of the execution' },
  { source: 'person_anastasia', target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Victim of the execution' },
  { source: 'person_alexei',    target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Victim of the execution' },
  { source: 'person_maria',     target: 'event_execution',            type: 'PARTICIPATED_IN', label: 'Victim of the execution' },
  { source: 'person_sokolov',   target: 'event_sokolov_investigation', type: 'PARTICIPATED_IN', label: 'Led the investigation' },
  { source: 'person_anderson',  target: 'event_anderson_rescue',      type: 'PARTICIPATED_IN', label: 'Was rescued from canal' },
  { source: 'person_anderson',  target: 'event_hamburg_court',        type: 'PARTICIPATED_IN', label: 'Plaintiff in the case' },
  { source: 'person_gilliard',  target: 'event_hamburg_court',        type: 'PARTICIPATED_IN', label: 'Testified against Anderson' },
  { source: 'person_botkin',    target: 'event_hamburg_court',        type: 'PARTICIPATED_IN', label: 'Testified for Anderson' },
  { source: 'person_gill',      target: 'event_dna_1994',             type: 'PARTICIPATED_IN', label: 'Led the DNA analysis' },
  { source: 'person_philip',    target: 'event_dna_1994',             type: 'PARTICIPATED_IN', label: 'Provided reference DNA' },
  { source: 'person_coble',     target: 'event_second_grave',         type: 'PARTICIPATED_IN', label: 'Analyzed second grave DNA' },
  { source: 'person_coble',     target: 'event_final_dna',            type: 'PARTICIPATED_IN', label: 'Co-authored final verdict' },
  { source: 'person_rogaev',    target: 'event_final_dna',            type: 'PARTICIPATED_IN', label: 'Genomic confirmation' },

  // ===== EVENT → EVENT (LED_TO) =====

  { source: 'event_execution',            target: 'event_sokolov_investigation', type: 'LED_TO', label: 'Prompted investigation' },
  { source: 'event_execution',            target: 'event_anderson_rescue',       type: 'LED_TO', label: 'Spawned impostor claims' },
  { source: 'event_anderson_rescue',      target: 'event_hamburg_court',         type: 'LED_TO', label: 'Led to legal battle' },
  { source: 'event_anderson_rescue',      target: 'event_bergman_film',          type: 'LED_TO', label: 'Inspired Hollywood film' },
  { source: 'event_bergman_film',         target: 'event_animated_film',         type: 'LED_TO', label: 'Inspired animated remake' },
  { source: 'event_exhumation_1991',      target: 'event_dna_1994',              type: 'LED_TO', label: 'Remains sent for testing' },
  { source: 'event_dna_1994',             target: 'event_second_grave',          type: 'LED_TO', label: 'Prompted search for missing 2' },
  { source: 'event_second_grave',         target: 'event_final_dna',             type: 'LED_TO', label: 'New remains tested' },

  // ===== PERSON → PERSON =====

  { source: 'person_anderson',  target: 'person_anastasia', type: 'CLAIMS_IDENTITY', label: 'Claimed to be Anastasia' },
  { source: 'person_gilliard',  target: 'person_anderson',  type: 'DEBUNKS',         label: 'Rejected Anderson as fraud' },
  { source: 'person_botkin',    target: 'person_anderson',  type: 'SUPPORTS',        label: 'Championed Anderson\'s claim' },
  { source: 'person_rasputin',  target: 'person_alexandra', type: 'REFERENCES',      label: 'Influenced the Tsarina' },
  { source: 'person_rasputin',  target: 'person_alexei',    type: 'REFERENCES',      label: 'Claimed to heal hemophilia' },
  { source: 'person_philip',    target: 'person_alexandra', type: 'REFERENCES',      label: 'Maternal-line descendant' },

  // ===== DOCUMENT ↔ DOCUMENT (CONTRADICTS / SUPPORTS / DEBUNKS / CORROBORATES) =====

  // Yurovsky Note vs Sokolov — contradictory narratives of the execution
  { source: 'doc_17', target: 'doc_38', type: 'CONTRADICTS', label: 'Soviet vs White Army accounts' },
  { source: 'doc_17', target: 'doc_40', type: 'CONTRADICTS', label: 'Yurovsky vs Wilton\'s account' },

  // Many Deaths analysis connects to Yurovsky Note
  { source: 'doc_9',  target: 'doc_17', type: 'ANALYZES',    label: 'Analyzes Yurovsky\'s claims' },
  { source: 'doc_9',  target: 'doc_38', type: 'ANALYZES',    label: 'Analyzes Sokolov\'s claims' },

  // Forensic DNA papers debunk impostor claims
  { source: 'doc_24', target: 'doc_43', type: 'DEBUNKS',     label: 'DNA disproves Botkin\'s claims' },
  { source: 'doc_24', target: 'doc_53', type: 'DEBUNKS',     label: 'DNA disproves Wilson\'s claims' },
  { source: 'doc_24', target: 'doc_42', type: 'DEBUNKS',     label: 'DNA disproves 1928 narrative' },
  { source: 'doc_24', target: 'doc_44', type: 'DEBUNKS',     label: 'DNA disproves Hartsook\'s defense' },

  // 2009 final verdict debunks ALL survival myths
  { source: 'doc_21', target: 'doc_43', type: 'DEBUNKS',     label: 'All children found — no survivor' },
  { source: 'doc_21', target: 'doc_53', type: 'DEBUNKS',     label: 'Demolishes Anastasia survival myth' },
  { source: 'doc_30', target: 'doc_43', type: 'DEBUNKS',     label: 'Genomic proof against survival' },
  { source: 'doc_30', target: 'doc_42', type: 'DEBUNKS',     label: 'Genome vs impostor narrative' },

  // Forensic papers that corroborate each other
  { source: 'doc_25', target: 'doc_21', type: 'CORROBORATES', label: '1994 DNA confirmed by 2009 study' },
  { source: 'doc_25', target: 'doc_30', type: 'CORROBORATES', label: '1994 DNA confirmed by genomics' },
  { source: 'doc_21', target: 'doc_30', type: 'CORROBORATES', label: 'Both 2009 studies agree' },
  { source: 'doc_22', target: 'doc_25', type: 'CORROBORATES', label: 'Reviews and validates Gill 1994' },
  { source: 'doc_22', target: 'doc_21', type: 'CORROBORATES', label: 'Reviews and validates Coble 2009' },
  { source: 'doc_31', target: 'doc_30', type: 'CORROBORATES', label: 'Extended study confirms PNAS' },
  { source: 'doc_27', target: 'doc_30', type: 'CORROBORATES', label: 'French summary confirms Rogaev' },
  { source: 'doc_32', target: 'doc_25', type: 'CORROBORATES', label: 'Hair DNA confirms 1994 findings' },

  // Early investigation reports corroborate each other
  { source: 'doc_38', target: 'doc_39', type: 'CORROBORATES', label: 'Sokolov & Telberg agree' },
  { source: 'doc_38', target: 'doc_40', type: 'CORROBORATES', label: 'Sokolov & Wilton agree' },
  { source: 'doc_37', target: 'doc_38', type: 'CORROBORATES', label: 'Independent accounts agree' },
  { source: 'doc_28', target: 'doc_38', type: 'CORROBORATES', label: '1920 report matches Sokolov' },

  // Obsession docs that support each other
  { source: 'doc_43', target: 'doc_53', type: 'SUPPORTS',    label: 'Both champion Anderson' },
  { source: 'doc_43', target: 'doc_42', type: 'SUPPORTS',    label: 'Both promote survival myth' },
  { source: 'doc_44', target: 'doc_43', type: 'SUPPORTS',    label: 'Hartsook supports Botkin' },
  { source: 'doc_53', target: 'doc_42', type: 'SUPPORTS',    label: 'Both push impostor narrative' },

  // Source study (2024) analyzes multiple earlier works
  { source: 'doc_34', target: 'doc_17', type: 'ANALYZES',    label: 'Critically examines Yurovsky Note' },
  { source: 'doc_34', target: 'doc_38', type: 'ANALYZES',    label: 'Critically examines Sokolov' },
  { source: 'doc_34', target: 'doc_28', type: 'ANALYZES',    label: 'Analyzes 1920 murder report' },

  // Myth-to-reality analysis
  { source: 'doc_35', target: 'doc_43', type: 'ANALYZES',    label: 'Traces Botkin\'s myth' },
  { source: 'doc_35', target: 'doc_25', type: 'REFERENCES',  label: 'References DNA evidence' },
  { source: 'doc_35', target: 'doc_21', type: 'REFERENCES',  label: 'References second grave proof' },

  // Halliburton reconsidered — skeptical re-examination
  { source: 'doc_29', target: 'doc_49', type: 'ANALYZES',    label: 'Re-examines sensational claims' },

  // Bioinformatics uses Romanov case
  { source: 'doc_20', target: 'doc_25', type: 'REFERENCES',  label: 'Uses Gill 1994 as case study' },

  // Stone 2004 connects exhumation politics to DNA
  { source: 'doc_33', target: 'doc_25', type: 'REFERENCES',  label: 'References Gill\'s DNA work' },
  { source: 'doc_33', target: 'doc_38', type: 'REFERENCES',  label: 'References Sokolov investigation' },

  // Imperial scatter and Swiss connections
  { source: 'doc_45', target: 'doc_52', type: 'REFERENCES',  label: 'Both cover diaspora heritage' },

  // Rasputin book links to revolutionary narrative
  { source: 'doc_47', target: 'doc_50', type: 'SUPPORTS',    label: 'Both dramatize Romanov downfall' },
  { source: 'doc_47', target: 'doc_49', type: 'SUPPORTS',    label: 'Both portray dynastic curse' },

  // Revolution docs that corroborate each other
  { source: 'doc_3',  target: 'doc_18', type: 'CORROBORATES', label: 'Both Trotsky\'s own accounts' },
  { source: 'doc_2',  target: 'doc_8',  type: 'CONTRADICTS',  label: 'Different views on Kerensky era' },
  { source: 'doc_11', target: 'doc_4',  type: 'CORROBORATES', label: 'Both 1917 eyewitness reports' },
  { source: 'doc_13', target: 'doc_15', type: 'CORROBORATES', label: 'Both analyze revolution\'s causes' },

  // Cross (Nicholas II reign) connects to execution documents
  { source: 'doc_23', target: 'doc_36', type: 'CORROBORATES', label: 'Both cover end of dynasty' },
  { source: 'doc_23', target: 'doc_47', type: 'REFERENCES',   label: 'Both discuss Rasputin\'s role' },

  // History journal and Haukeness connect
  { source: 'doc_19', target: 'doc_26', type: 'CORROBORATES', label: 'Both review Romanov historiography' },
  { source: 'doc_26', target: 'doc_38', type: 'REFERENCES',   label: 'Examines Sokolov\'s legacy' },

  // Animated film era documents
  { source: 'doc_46', target: 'doc_42', type: 'SUPPORTS',     label: 'Both feed the Anastasia myth' },

  // Deception contradicts forensic
  { source: 'doc_17', target: 'doc_9',  type: 'CONTRADICTS',  label: 'Self-contradicting death accounts' },
];


// ---------------------------------------------------------------------------
// ERA definitions for filtering
// ---------------------------------------------------------------------------

export const ERAS = [
  { id: 1, label: 'Era I: Execution & Early Rumors (1918–1920s)', color: '#8b3a3a' },
  { id: 2, label: 'Era II: Rise of Impostors (1920s–1950s)',      color: '#b8860b' },
  { id: 3, label: 'Era III: Western Media (1950s–1990s)',          color: '#1d3557' },
  { id: 4, label: 'Era IV: Forensic Verdict (1991–2009)',          color: '#2d6a4f' },
];


// ---------------------------------------------------------------------------
// STANCE definitions for coloring
// ---------------------------------------------------------------------------

export const STANCES = [
  { id: 'Deception', label: 'Deception (Soviet Propaganda)',  color: '#8b3a3a' },
  { id: 'Obsession', label: 'Obsession (Western Myth)',       color: '#b8860b' },
  { id: 'Forensic',  label: 'Forensic (Scientific Evidence)', color: '#2d6a4f' },
];


// ---------------------------------------------------------------------------
// NODE TYPE definitions for rendering shapes
// ---------------------------------------------------------------------------

export const NODE_TYPES = [
  { id: 'document', label: 'Document', shape: 'rect' },
  { id: 'person',   label: 'Person',   shape: 'circle' },
  { id: 'event',    label: 'Event',    shape: 'diamond' },
];
