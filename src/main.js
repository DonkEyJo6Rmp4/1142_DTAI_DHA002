// ============================================================================
// main.js — RPG Game & Knowledge Graph Interactive Engine (Hybrid Version)
// ============================================================================

import './style.css';
import * as d3 from 'd3';
import { CHARACTERS, PROLOGUE, ERAS, TRUE_ENDING } from './data/gameData.js';
import { GRAPH_NODES, GRAPH_EDGES } from './data/graphData.js';

const GRAPH_LINKS = GRAPH_EDGES;
const BACKGROUND_MUSIC_SRC = '/Music/Tchaikovsky - The Seasons - 10 - October - Autumn Song - Op. 37a  Royalty Free Classical Music.mp3';

let backgroundMusic = null;
let backgroundMusicInitialized = false;

function setupBackgroundMusic() {
  if (backgroundMusicInitialized) return;
  backgroundMusicInitialized = true;

  backgroundMusic = new Audio(BACKGROUND_MUSIC_SRC);
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.28;
  backgroundMusic.preload = 'auto';

  const playMusic = () => {
    backgroundMusic.play().catch(() => {
      // Browsers often block audible autoplay until the first user gesture.
    });
  };

  playMusic();
  document.addEventListener('pointerdown', playMusic, { once: true });
  document.addEventListener('keydown', playMusic, { once: true });
}

// ---- Application State ----
let state = {
  screen: 'prologue', // 'prologue' | 'era_transition' | 'era_intro' | 'game' | 'response' | 'ending' | 'graph'
  eraIndex: 0,
  questionIndex: 0,
  
  // Transition / Intro State
  introStep: 0, 
  
  // Game Quiz State
  selectedChoice: null,
  wrongChoices: new Set(),
  lastIsCorrect: null,
  
  // Ending Sequence State
  endingStep: 0,
  
  // Knowledge Graph State
  selectedNodeId: null,
  graphFilters: {
    eras: [1, 2, 3, 4],
    stances: ['Deception', 'Obsession', 'Forensic'],
    types: ['document', 'person', 'event']
  },
  
  // D3 Objects
  zoom: null,
  svgSelection: null,
  gSelection: null
};

// ---- Helper to Generate Era Intro Dialogues ----
function getIntroDialogues(era) {
  const dialogues = [];
  const npcName = CHARACTERS[era.npcKey].name;
  
  if (era.introScene.anastasiaLines) {
    era.introScene.anastasiaLines.forEach(line => {
      dialogues.push({ speaker: 'Anastasia', text: line, type: 'ghost', activeGhost: 'anastasia' });
    });
  }
  
  if (era.introScene.mariaLines) {
    era.introScene.mariaLines.forEach(line => {
      dialogues.push({ speaker: 'Maria', text: line, type: 'ghost', activeGhost: 'maria' });
    });
  }
  
  if (era.introScene.npcIntro) {
    dialogues.push({ speaker: npcName, text: era.introScene.npcIntro, type: 'npc' });
  }
  
  return dialogues;
}

function getNpcWaitingLine(npcKey) {
  const waitingLines = {
    ivan: '*(Petrov smooths the creases of his Soviet press notice, guarding each word as if it were state property.)*',
    volkov: '*(Volkov grips his walking stick and studies the sisters with wounded aristocratic pride.)*',
    chuck: '*(Morrison polishes his studio spectacles, already framing the scene like a profitable close-up.)*',
    kasimova: '*(Dr. Kasimova checks a case file, waiting for the evidence to speak before she does.)*',
  };

  return waitingLines[npcKey] || '*(The witness waits, measuring the room before speaking.)*';
}

// ---- Main Render Function ----
function render() {
  const app = document.getElementById('app');
  if (!app) return;
  
  // Clean D3 states if not in graph screen
  if (state.screen !== 'graph') {
    state.zoom = null;
    state.svgSelection = null;
    state.gSelection = null;
  }

  if (state.screen === 'prologue') {
    app.innerHTML = renderPrologue();
    setupPrologueListeners();
  } else if (state.screen === 'era_transition') {
    app.innerHTML = renderEraTransition();
    setupEraTransitionListeners();
  } else if (state.screen === 'era_intro') {
    app.innerHTML = renderEraIntro();
    setupEraIntroListeners();
  } else if (state.screen === 'game') {
    app.innerHTML = renderGame();
    setupGameListeners();
  } else if (state.screen === 'response') {
    app.innerHTML = renderResponse();
    setupResponseListeners();
  } else if (state.screen === 'ending') {
    app.innerHTML = renderEnding();
    setupEndingListeners();
  } else if (state.screen === 'graph') {
    app.innerHTML = renderGraph();
    setupGraphListeners();
    initD3Graph(); // Setup and run Hybrid D3 force layout
  }
}

// ---- HTML Render Templates ----

function renderPrologue() {
  return `
    <div class="prologue">
      <header class="masthead" style="margin-bottom: 2rem; width: 100%;">
        <div class="masthead-title">${PROLOGUE.title}</div>
        <div class="masthead-subtitle">${PROLOGUE.subtitle}</div>
        <div class="masthead-date">SPECIAL EDITION • HISTORICAL INVESTIGATION</div>
      </header>
      
      <div class="prologue-narration">
        ${PROLOGUE.narration.map((p, idx) => `<p style="animation-delay: ${idx * 0.4}s">${p}</p>`).join('')}
      </div>
      
      <button class="continue-btn begin-btn" style="animation-delay: ${PROLOGUE.narration.length * 0.4}s; font-size: 1.1rem; padding: 1rem 3rem;">
        ✦ BEGIN THE INVESTIGATION ✦
      </button>
      
      <div style="margin-top: 30px; animation-delay: ${(PROLOGUE.narration.length + 1) * 0.4}s" class="fade-in">
        <a href="#" class="graph-bypass-link" style="font-family: var(--font-ui); font-size: 0.75rem; color: var(--blood-red); text-decoration: underline; letter-spacing: 0.1em; text-transform: uppercase;">
          Skip directly to Knowledge Graph
        </a>
      </div>
    </div>
  `;
}

function renderEraTransition() {
  const currentEra = ERAS[state.eraIndex];
  let transitionText = "";
  if (state.eraIndex === 0) {
    transitionText = "We begin our journey in the immediate aftermath of the execution. The year is 1918. In the chaos of the Russian Civil War, the Bolsheviks announce the Tsar's death, but keep the fate of the children hidden in shadows. A vacuum of truth is created...";
  } else {
    transitionText = ERAS[state.eraIndex - 1].transition.narratorText;
  }
  
  return `
    <div class="era-transition">
      <div class="era-transition-era">ERA ${state.eraIndex + 1}</div>
      <div class="era-transition-title">${currentEra.title}</div>
      <div class="era-transition-years">${currentEra.subtitle}</div>
      <div class="era-transition-text">
        <p>${transitionText}</p>
      </div>
      <button class="continue-btn" style="margin-top: 2rem;">✦ Enter Era ✦</button>
    </div>
  `;
}

function renderEraIntro() {
  const currentEra = ERAS[state.eraIndex];
  const dialogues = getIntroDialogues(currentEra);
  const line = dialogues[state.introStep];
  
  const ghostOpacityAna = (line.type === 'ghost' && line.activeGhost === 'anastasia') ? '1.0' : '0.4';
  const ghostOpacityMar = (line.type === 'ghost' && line.activeGhost === 'maria') ? '1.0' : '0.4';
  const npcOpacity = (line.type === 'npc') ? '1.0' : '0.4';
  
  const npc = CHARACTERS[currentEra.npcKey];
  
  return `
    <div class="game-screen">
      <header class="masthead">
        <div class="masthead-title">☠ THE EKATERINBURG GAZETTE ☠</div>
        <div class="masthead-subtitle">Introductory Scene — ${currentEra.title}</div>
        <div class="progress-container">
          <div class="progress-label">
            <span>Investigation Progress</span>
            <span>${calculateAnsweredQuestions()}/9 Complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(calculateAnsweredQuestions() / 9) * 100}%"></div>
          </div>
        </div>
      </header>
      
      <div class="era-header">
        <div class="era-title">${currentEra.title}</div>
        <div class="era-subtitle">${currentEra.subtitle}</div>
      </div>
      
      <div class="game-container">
        <!-- Ghost Panel (Left — 40%) -->
        <div class="ghost-panel">
          <div class="ghost-characters" style="display: flex; flex-direction: row; justify-content: center; gap: 20px; width: 100%;">
            <div class="character-img-wrapper" style="opacity: ${ghostOpacityAna}; transition: opacity 0.3s; width: 120px;">
              <img src="${CHARACTERS.anastasia.image}" class="character-img ghost-img" style="height: 180px; width: 100%; object-fit: cover;" alt="Anastasia" />
              <div class="character-label">Anastasia</div>
            </div>
            <div class="character-img-wrapper" style="opacity: ${ghostOpacityMar}; transition: opacity 0.3s; width: 120px;">
              <img src="${CHARACTERS.maria.image}" class="character-img ghost-img" style="height: 180px; width: 100%; object-fit: cover;" alt="Maria" />
              <div class="character-label">Maria</div>
            </div>
          </div>
          
          <div class="speech-bubble ghost-speech" style="width: 90%; margin-top: auto;">
            <span class="speech-speaker ghost-name">${line.type === 'ghost' ? line.speaker : 'Anastasia & Maria'}</span>
            <span>${line.type === 'ghost' ? `"${line.text}"` : `*(The sisters stand silently, listening to the Bolshevik officer...)*`}</span>
            <span class="typewriter-cursor"></span>
          </div>
        </div>
        
        <!-- NPC Panel (Right — 60%) -->
        <div class="npc-panel">
          <div class="character-img-wrapper" style="opacity: ${npcOpacity}; transition: opacity 0.3s; margin: 0 auto; width: 130px;">
            <img src="${npc.image}" class="character-img npc-img" style="height: 185px; width: 100%; object-fit: cover;" alt="${npc.name}" />
            <div class="character-label">${npc.name}</div>
          </div>
          
          <div class="speech-bubble npc-speech" style="width: 90%; margin-top: auto;">
            <span class="speech-speaker npc-name">${npc.name}</span>
            <span>${line.type === 'npc' ? `"${line.text}"` : getNpcWaitingLine(currentEra.npcKey)}</span>
            <span class="typewriter-cursor"></span>
          </div>
        </div>
      </div>
      
      <!-- Choices Section (Bottom full width) -->
      <div class="choices-section">
        <div class="choices-label">Conversation Stream:</div>
        <div class="choices-container" style="border-top: none; margin-top: 0; padding-top: 0;">
          <button class="choice-btn advance-intro-btn" data-choice-id="▶">
            <span>Next Dialogue Line [${state.introStep + 1}/${dialogues.length}]...</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderGame() {
  const currentEra = ERAS[state.eraIndex];
  const currentQuestion = currentEra.questions[state.questionIndex];
  const npc = CHARACTERS[currentEra.npcKey];
  
  return `
    <div class="game-screen">
      <header class="masthead">
        <div class="masthead-title">☠ THE EKATERINBURG GAZETTE ☠</div>
        <div class="masthead-subtitle">Investigating: ${currentEra.title}</div>
        <div class="progress-container">
          <div class="progress-label">
            <span>Investigation Progress</span>
            <span>${calculateAnsweredQuestions()}/9 Complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(calculateAnsweredQuestions() / 9) * 100}%"></div>
          </div>
        </div>
      </header>
      
      <div class="era-header">
        <div class="era-title">${currentEra.title}</div>
        <div class="era-subtitle">${currentEra.subtitle}</div>
      </div>
      
      <div class="game-container">
        <!-- Ghost Panel (Left — 40%) -->
        <div class="ghost-panel">
          <div class="ghost-characters" style="display: flex; flex-direction: row; justify-content: center; gap: 20px; width: 100%;">
            <div class="character-img-wrapper" style="opacity: 0.8; width: 120px;">
              <img src="${CHARACTERS.anastasia.image}" class="character-img ghost-img" style="height: 180px; width: 100%; object-fit: cover;" alt="Anastasia" />
              <div class="character-label">Anastasia</div>
            </div>
            <div class="character-img-wrapper" style="opacity: 0.8; width: 120px;">
              <img src="${CHARACTERS.maria.image}" class="character-img ghost-img" style="height: 180px; width: 100%; object-fit: cover;" alt="Maria" />
              <div class="character-label">Maria</div>
            </div>
          </div>
          
          <div class="speech-bubble ghost-speech" style="width: 90%; margin-top: auto;">
            <span class="speech-speaker ghost-name">Anastasia & Maria</span>
            <span>"We must examine his claims carefully. Choose the correct evidence to contradict the narrative, sister."</span>
            <span class="typewriter-cursor"></span>
          </div>
        </div>
        
        <!-- NPC Panel (Right — 60%) -->
        <div class="npc-panel">
          <div class="character-img-wrapper" style="margin: 0 auto; width: 130px;">
            <img src="${npc.image}" class="character-img npc-img" style="height: 185px; width: 100%; object-fit: cover;" alt="${npc.name}" />
            <div class="character-label">${npc.name}</div>
          </div>
          
          <div class="speech-bubble npc-speech" style="width: 90%; margin-top: auto;">
            <span class="speech-speaker npc-name">${npc.name}</span>
            <span>"${currentQuestion.npcDialogue}"</span>
            <span class="typewriter-cursor"></span>
          </div>
        </div>
      </div>
      
      <!-- Choices Section (Bottom full width) -->
      <div class="choices-section">
        <div class="choices-label">Select Contradictory Evidence:</div>
        <div class="choices-container" style="border-top: none; margin-top: 0; padding-top: 0; gap: 0.5rem;">
          ${currentQuestion.choices.map(choice => {
            const isWrong = state.wrongChoices.has(choice.id);
            const disabledClass = isWrong ? 'disabled' : '';
            return `
              <button class="choice-btn ${disabledClass}" data-choice-id="${choice.id}" ${isWrong ? 'disabled' : ''}>
                <span>${choice.text}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderResponse() {
  const currentEra = ERAS[state.eraIndex];
  const currentQuestion = currentEra.questions[state.questionIndex];
  const npcName = CHARACTERS[currentEra.npcKey].name;
  
  if (state.lastIsCorrect) {
    return `
      <div class="response-overlay">
        <div class="response-card" style="border: 4px solid var(--correct-green); border-radius: 4px;">
          <h2 style="font-family: var(--font-headline); color: var(--correct-green); margin-bottom: 20px; border-bottom: 2px solid var(--correct-green); padding-bottom: 8px; font-weight: 900; letter-spacing: 2px;">
            ✓ CORRECT EVIDENCE UNLOCKED
          </h2>
          
          <div class="response-section">
            <div class="response-speaker npc-speaker">${npcName}</div>
            <div class="response-text" style="font-size: 1.1rem; font-style: normal;">"${currentQuestion.correctResponse.npc}"</div>
          </div>
          
          <div class="response-section">
            <div class="response-speaker ghost-speaker">Anastasia</div>
            <div class="response-text" style="font-size: 1.1rem; color: var(--prussian-blue);">"${currentQuestion.correctResponse.anastasia}"</div>
          </div>
          
          <div class="response-section">
            <div class="response-speaker ghost-speaker">Maria</div>
            <div class="response-text" style="font-size: 1.1rem; color: var(--prussian-blue);">"${currentQuestion.correctResponse.maria}"</div>
          </div>
          
          <button class="next-btn" style="background: var(--correct-green); font-size: 1rem; font-weight: bold; border-radius: 3px;">✦ Proceed ✦</button>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="response-overlay">
        <div class="response-card" style="border: 4px solid var(--wrong-red); border-radius: 4px;">
          <h2 style="font-family: var(--font-headline); color: var(--wrong-red); margin-bottom: 20px; border-bottom: 2px solid var(--wrong-red); padding-bottom: 8px; font-weight: 900; letter-spacing: 2px;">
            ✗ CONTRADICTION DETECTED
          </h2>
          
          <div class="response-section">
            <div class="response-speaker npc-speaker">${npcName}</div>
            <div class="response-text" style="font-size: 1.1rem; font-style: normal;">"${currentQuestion.wrongResponse.npc}"</div>
          </div>
          
          <div class="response-section">
            <div class="response-speaker ghost-speaker">Anastasia & Maria</div>
            <div class="response-text" style="font-size: 1.1rem; color: var(--blood-red);">"${currentQuestion.wrongResponse.ghost}"</div>
          </div>
          
          <button class="next-btn retry-btn" style="background: var(--wrong-red); font-size: 1rem; font-weight: bold; border-radius: 3px;">↺ Re-examine Claims ↺</button>
        </div>
      </div>
    `;
  }
}

function renderEnding() {
  return `
    <div class="true-ending">
      <div class="family-silhouette">
        <img src="${CHARACTERS.family.image}" class="character-img" style="max-height: 380px; object-fit: contain;" alt="Imperial Family silhouette" />
      </div>
      
      <div class="true-ending-section">
        ${state.endingStep === 0 ? `
          <div class="speech-bubble ghost-speech" style="animation-delay: 0.1s;">
            <span class="speech-speaker ghost-name">Anastasia</span>
            ${TRUE_ENDING.anastasiaLines.map((line, idx) => `<p class="ending-line" style="animation-delay: ${idx * 0.4}s; font-size: 1.15rem; margin-bottom: 8px;">${line}</p>`).join('')}
            <span class="typewriter-cursor"></span>
          </div>
        ` : ''}
        
        ${state.endingStep === 1 ? `
          <div class="speech-bubble ghost-speech" style="animation-delay: 0.1s;">
            <span class="speech-speaker ghost-name">Maria</span>
            ${TRUE_ENDING.mariaLines.map((line, idx) => `<p class="ending-line" style="animation-delay: ${idx * 0.4}s; font-size: 1.15rem; margin-bottom: 8px;">${line}</p>`).join('')}
            <span class="typewriter-cursor"></span>
          </div>
        ` : ''}
        
        ${state.endingStep === 2 ? `
          <div class="true-ending-final">${TRUE_ENDING.finalText}</div>
          <div class="ending-actions" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 12px; align-items: center;">
            <button class="kg-enter-btn explore-graph-btn" style="margin-top: 0;">✦ Explore the Knowledge Graph ✦</button>
            <button class="continue-btn restart-btn" style="margin-top: 0; background: transparent; color: var(--ink-black); border-color: var(--ink-black);">↺ Replay the Investigation</button>
          </div>
        ` : ''}
      </div>
      
      ${state.endingStep < 2 ? `
        <button class="continue-btn next-ending-btn" style="margin-top: 20px;">
          Next...
        </button>
      ` : ''}
    </div>
  `;
}

function renderGraph() {
  return `
    <div class="graph-page">
      <header class="graph-header">
        <div class="graph-header-title">☠ THE ROMANOV ARCHIVE: EVIDENCE GRAPH ☠</div>
        <button class="graph-back-btn back-to-game-btn">↺ Return to Title</button>
      </header>
      
      <div class="graph-layout">
        <!-- Hybrid D3 Canvas + HTML Nodes Container -->
        <div class="graph-container">
          <div class="graph-content-wrapper" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
            <svg id="graph-svg" style="width: 100%; height: 100%; pointer-events: none;"></svg>
            <div id="graph-nodes-container" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; pointer-events: none;"></div>
          </div>
          
          <!-- Zoom Controls (absolute) -->
          <div class="graph-controls" style="position: absolute; top: 15px; left: 15px; display: flex; flex-direction: column; gap: 6px; z-index: 10;">
            <button id="zoom-in-btn" style="width: 38px; height: 38px; font-size: 1.2rem; cursor: pointer; border: 1.5px solid var(--ink-black); background: var(--kraft-cream);" title="Zoom In">+</button>
            <button id="zoom-out-btn" style="width: 38px; height: 38px; font-size: 1.2rem; cursor: pointer; border: 1.5px solid var(--ink-black); background: var(--kraft-cream);" title="Zoom Out">-</button>
            <button id="zoom-reset-btn" style="width: 38px; height: 38px; font-size: 1rem; cursor: pointer; border: 1.5px solid var(--ink-black); background: var(--kraft-cream);" title="Reset View">⟲</button>
          </div>
          
          <!-- Custom Hybrid Legend -->
          <div class="graph-legend" style="position: absolute; bottom: 0; left: 0; right: 0; z-index: 10; border-top: 2px solid var(--ink-black); background: rgba(220, 200, 175, 0.95); display: flex; justify-content: center; gap: 2rem; padding: 0.6rem 1rem;">
            <div class="graph-legend-item">
              <span class="graph-legend-dot person"></span>
              <span style="font-size: 0.72rem; font-weight: bold;">Figures</span>
            </div>
            <div class="graph-legend-item">
              <span class="graph-legend-dot event"></span>
              <span style="font-size: 0.72rem; font-weight: bold;">Events</span>
            </div>
            <div class="graph-legend-item">
              <span class="graph-legend-dot evidence"></span>
              <span style="font-size: 0.72rem; font-weight: bold;">Forensic Science</span>
            </div>
            <div class="graph-legend-item">
              <span class="graph-legend-dot myth"></span>
              <span style="font-size: 0.72rem; font-weight: bold;">Soviet / Western Claims</span>
            </div>
          </div>
        </div>
        
        <!-- Sidebar Navigation -->
        <aside class="graph-sidebar" style="width: 380px;">
          <div class="graph-sidebar-title">Archive Filter Control</div>
          
          <div class="graph-sidebar-content" style="display: flex; flex-direction: column; gap: 1.2rem;">
            <!-- Filters -->
            <div class="graph-sidebar-section">
              <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--blood-red); margin-bottom: 6px;">Filter By Eras</h4>
              <div class="filter-checkboxes" style="display: flex; flex-direction: column; gap: 5px;">
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="era-filter" value="1" ${state.graphFilters.eras.includes(1) ? 'checked' : ''}>
                  <span>Era I (1918–1920s)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="era-filter" value="2" ${state.graphFilters.eras.includes(2) ? 'checked' : ''}>
                  <span>Era II (1920s–1950s)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="era-filter" value="3" ${state.graphFilters.eras.includes(3) ? 'checked' : ''}>
                  <span>Era III (1950s–1990s)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="era-filter" value="4" ${state.graphFilters.eras.includes(4) ? 'checked' : ''}>
                  <span>Era IV (1991–2009)</span>
                </label>
              </div>
            </div>
            
            <div class="graph-sidebar-section">
              <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--blood-red); margin-bottom: 6px;">Filter By Stance</h4>
              <div class="filter-checkboxes" style="display: flex; flex-direction: column; gap: 5px;">
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="stance-filter" value="Deception" ${state.graphFilters.stances.includes('Deception') ? 'checked' : ''}>
                  <span style="color: #8b3a3a; font-weight: bold;">Deception (Soviet)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="stance-filter" value="Obsession" ${state.graphFilters.stances.includes('Obsession') ? 'checked' : ''}>
                  <span style="color: #b8860b; font-weight: bold;">Obsession (Myths)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="stance-filter" value="Forensic" ${state.graphFilters.stances.includes('Forensic') ? 'checked' : ''}>
                  <span style="color: #2d6a4f; font-weight: bold;">Forensic (Science)</span>
                </label>
              </div>
            </div>
            
            <div class="graph-sidebar-section">
              <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--blood-red); margin-bottom: 6px;">Filter Node Types</h4>
              <div class="filter-checkboxes" style="display: flex; flex-direction: column; gap: 5px;">
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="type-filter" value="document" ${state.graphFilters.types.includes('document') ? 'checked' : ''}>
                  <span>Documents (53 papers)</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="type-filter" value="person" ${state.graphFilters.types.includes('person') ? 'checked' : ''}>
                  <span>Figures</span>
                </label>
                <label class="filter-checkbox" style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" class="type-filter" value="event" ${state.graphFilters.types.includes('event') ? 'checked' : ''}>
                  <span>Events</span>
                </label>
              </div>
            </div>
            
            <!-- Detail Panel -->
            <div class="graph-sidebar-section" style="border-top: 2px solid var(--ink-black); padding-top: 1rem; margin-top: 0.5rem;">
              <h4 style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--blood-red); margin-bottom: 8px;">Active Node Detail</h4>
              <div id="node-detail-container">
                ${renderNodeDetail()}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderNodeDetail() {
  if (!state.selectedNodeId) {
    return `
      <div style="font-family: var(--font-body); font-size: 0.8rem; color: var(--disabled-gray); text-align: center; padding: 20px 0; line-height: 1.5;">
        (Click any node in the graph to view descriptions, document filenames, and explicit relationships)
      </div>
    `;
  }
  
  const node = GRAPH_NODES.find(n => n.id === state.selectedNodeId);
  if (!node) return '';
  
  let badgeColor = '#1d3557';
  let badgeText = node.type.toUpperCase();
  
  if (node.type === 'document') {
    badgeText = `${node.stance.toUpperCase()} DOCUMENT`;
    if (node.stance === 'Deception') badgeColor = '#8b3a3a';
    else if (node.stance === 'Obsession') badgeColor = '#b8860b';
    else if (node.stance === 'Forensic') badgeColor = '#2d6a4f';
  }
  
  // Find connected links and nodes
  const connections = GRAPH_LINKS.filter(link => {
    const sId = typeof link.source === 'object' ? link.source.id : link.source;
    const tId = typeof link.target === 'object' ? link.target.id : link.target;
    return sId === node.id || tId === node.id;
  }).map(link => {
    const sId = typeof link.source === 'object' ? link.source.id : link.source;
    const tId = typeof link.target === 'object' ? link.target.id : link.target;
    const isSource = sId === node.id;
    const otherId = isSource ? tId : sId;
    const otherNode = GRAPH_NODES.find(n => n.id === otherId);
    return {
      node: otherNode,
      type: link.type,
      label: link.label,
      isOutgoing: isSource
    };
  });
  
  return `
    <div class="node-detail" style="background: var(--kraft-cream); border: 2px solid var(--ink-black); padding: 1rem; box-shadow: 4px 4px 0 var(--kraft-shadow);">
      <span class="node-type-badge" style="color: ${badgeColor}; border-color: ${badgeColor}; font-weight: bold; font-family: var(--font-ui); font-size: 0.65rem; border: 1.5px solid currentColor; padding: 2px 8px; display: inline-block; margin-bottom: 8px;">
        ${badgeText}
      </span>
      <h4 class="node-title" style="font-family: var(--font-headline); font-size: 1.3rem; font-weight: 900; margin-bottom: 8px; line-height: 1.2;">${node.label}</h4>
      ${node.fullName ? `<p style="font-family: var(--font-ui); font-size: 0.65rem; color: var(--disabled-gray); margin-bottom: 8px; word-break: break-all; border-top: 1px dashed rgba(0,0,0,0.15); padding-top: 4px;">File: ${node.fullName}</p>` : ''}
      <p class="node-description" style="font-family: var(--font-body); font-size: 0.95rem; line-height: 1.6; color: var(--ink-black); margin-bottom: 12px;">${node.description || 'No description available.'}</p>
      
      <div class="node-connections" style="border-top: 1.5px solid var(--ink-black); padding-top: 8px;">
        <h5 style="font-family: var(--font-headline); font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">Explicit Connections:</h5>
        ${connections.length === 0 ? `
          <p style="font-family: var(--font-body); font-size: 0.8rem; color: var(--disabled-gray);">No direct connections in current subset.</p>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 4px; max-height: 160px; overflow-y: auto;">
            ${connections.map(conn => {
              if (!conn.node) return '';
              return `
                <div class="connection-item select-node-btn" data-id="${conn.node.id}" style="cursor: pointer; padding: 4px 6px; border-radius: 2px; transition: background 0.2s; border: 1px solid transparent; font-family: var(--font-ui); font-size: 0.78rem;" onmouseover="this.style.background='var(--kraft-dark)'; this.style.borderColor='var(--ink-black)'" onmouseout="this.style.background='transparent'; this.style.borderColor='transparent'">
                  <span class="connection-arrow" style="font-weight: bold; color: var(--blood-red);">${conn.isOutgoing ? '→' : '←'}</span>
                  <span class="connection-type" style="font-weight: bold; color: var(--aged-gold); margin-right: 4px;">${conn.type}</span>
                  <span>${conn.node.label}</span>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// ---- Event Listeners Registration ----

function setupPrologueListeners() {
  const btn = document.querySelector('.begin-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      state.screen = 'era_transition';
      state.eraIndex = 0;
      render();
    });
  }
  
  const bypass = document.querySelector('.graph-bypass-link');
  if (bypass) {
    bypass.addEventListener('click', (e) => {
      e.preventDefault();
      state.screen = 'graph';
      state.selectedNodeId = null;
      render();
    });
  }
}

function setupEraTransitionListeners() {
  const btn = document.querySelector('.continue-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      state.screen = 'era_intro';
      state.introStep = 0;
      render();
    });
  }
}

function setupEraIntroListeners() {
  const btn = document.querySelector('.advance-intro-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const currentEra = ERAS[state.eraIndex];
      const dialogues = getIntroDialogues(currentEra);
      state.introStep++;
      if (state.introStep >= dialogues.length) {
        state.screen = 'game';
        state.questionIndex = 0;
        state.wrongChoices.clear();
      }
      render();
    });
  }
}

function setupGameListeners() {
  const choiceBtns = document.querySelectorAll('.choice-btn:not(.disabled)');
  choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const choiceId = btn.getAttribute('data-choice-id');
      const currentEra = ERAS[state.eraIndex];
      const currentQuestion = currentEra.questions[state.questionIndex];
      const selected = currentQuestion.choices.find(c => c.id === choiceId);
      
      state.selectedChoice = choiceId;
      
      if (selected.isCorrect) {
        state.lastIsCorrect = true;
        btn.classList.add('correct');
        setTimeout(() => {
          state.screen = 'response';
          render();
        }, 600);
      } else {
        state.lastIsCorrect = false;
        btn.classList.add('wrong');
        state.wrongChoices.add(choiceId);
        setTimeout(() => {
          state.screen = 'response';
          render();
        }, 600);
      }
    });
  });
}

function setupResponseListeners() {
  const nextBtn = document.querySelector('.next-btn');
  const retryBtn = document.querySelector('.retry-btn');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const currentEra = ERAS[state.eraIndex];
      state.questionIndex++;
      state.wrongChoices.clear();
      state.selectedChoice = null;
      
      if (state.questionIndex >= currentEra.questions.length) {
        // Finished era
        if (state.eraIndex < 3) {
          state.eraIndex++;
          state.screen = 'era_transition';
        } else {
          state.screen = 'ending';
          state.endingStep = 0;
        }
      } else {
        state.screen = 'game';
      }
      render();
    });
  }
  
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      state.screen = 'game';
      state.selectedChoice = null;
      render();
    });
  }
}

function setupEndingListeners() {
  const nextBtn = document.querySelector('.next-ending-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.endingStep++;
      render();
    });
  }
  
  const exploreBtn = document.querySelector('.explore-graph-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      state.screen = 'graph';
      state.selectedNodeId = null;
      render();
    });
  }
  
  const restartBtn = document.querySelector('.restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      state.screen = 'prologue';
      state.eraIndex = 0;
      state.questionIndex = 0;
      state.wrongChoices.clear();
      render();
    });
  }
}

function setupGraphListeners() {
  // Back to game title
  const backBtn = document.querySelector('.back-to-game-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      state.screen = 'prologue';
      render();
    });
  }
  
  // Filters
  const eraFilters = document.querySelectorAll('.era-filter');
  eraFilters.forEach(cb => {
    cb.addEventListener('change', () => {
      const val = parseInt(cb.value);
      if (cb.checked) {
        if (!state.graphFilters.eras.includes(val)) state.graphFilters.eras.push(val);
      } else {
        state.graphFilters.eras = state.graphFilters.eras.filter(x => x !== val);
      }
      initD3Graph(); // refresh graph
    });
  });
  
  const stanceFilters = document.querySelectorAll('.stance-filter');
  stanceFilters.forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        if (!state.graphFilters.stances.includes(val)) state.graphFilters.stances.push(val);
      } else {
        state.graphFilters.stances = state.graphFilters.stances.filter(x => x !== val);
      }
      initD3Graph(); // refresh graph
    });
  });
  
  const typeFilters = document.querySelectorAll('.type-filter');
  typeFilters.forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        if (!state.graphFilters.types.includes(val)) state.graphFilters.types.push(val);
      } else {
        state.graphFilters.types = state.graphFilters.types.filter(x => x !== val);
      }
      initD3Graph(); // refresh graph
    });
  });
  
  // Sidebar Detail list item clicks
  setupDetailListeners();
}

function setupDetailListeners() {
  const connItems = document.querySelectorAll('.select-node-btn');
  connItems.forEach(item => {
    item.addEventListener('click', () => {
      const nodeId = item.getAttribute('data-id');
      state.selectedNodeId = nodeId;
      
      // Update sidebar details
      document.getElementById('node-detail-container').innerHTML = renderNodeDetail();
      setupDetailListeners();
      
      // Center view on selected node in simulation coordinates
      if (state.gSelection) {
        // Class selection highlights
        d3.selectAll('.graph-node').classed('active', n => n.id === state.selectedNodeId);
        highlightGraph(nodeId);
        
        const node = GRAPH_NODES.find(n => n.id === nodeId);
        if (node && node.x && node.y && state.svgSelection && state.zoom) {
          const containerEl = document.querySelector('.graph-container');
          const width = containerEl.clientWidth;
          const height = containerEl.clientHeight;
          
          d3.select('.graph-container').transition().duration(500).call(
            state.zoom.transform,
            d3.zoomIdentity.translate(width / 2 - node.x, height / 2 - node.y)
          );
        }
      }
    });
  });
}

// ---- Game Helper Calculations ----
function calculateAnsweredQuestions() {
  let count = 0;
  for (let i = 0; i < state.eraIndex; i++) {
    count += ERAS[i].questions.length;
  }
  if (state.screen === 'game' || state.screen === 'response') {
    count += state.questionIndex;
  }
  return count;
}

// ---- Hybrid D3 Knowledge Graph (SVG Links + HTML Nodes) ----

function initD3Graph() {
  const svg = d3.select('#graph-svg');
  const nodesContainer = d3.select('#graph-nodes-container');
  if (!svg.node() || !nodesContainer.node()) return;
  
  svg.html(""); // clear previous svg content
  nodesContainer.html(""); // clear previous HTML nodes
  
  const containerEl = document.querySelector('.graph-container');
  const width = containerEl.clientWidth || 800;
  const height = containerEl.clientHeight || 600;
  
  // SVG Arrow marker definitions
  svg.append('defs').append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 38) // SIT at edge of div bounds
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#2a2a2a');

  // Filter nodes & links
  const activeNodes = GRAPH_NODES.filter(node => {
    if (!state.graphFilters.types.includes(node.type)) return false;
    if (node.type === 'document' && !state.graphFilters.eras.includes(node.era)) return false;
    if (node.type === 'document' && !state.graphFilters.stances.includes(node.stance)) return false;
    return true;
  });
  
  const activeNodeIds = new Set(activeNodes.map(n => n.id));
  
  const activeLinks = GRAPH_LINKS.filter(link => {
    const sId = typeof link.source === 'object' ? link.source.id : link.source;
    const tId = typeof link.target === 'object' ? link.target.id : link.target;
    return activeNodeIds.has(sId) && activeNodeIds.has(tId);
  });
  
  // Set up zoom behaviors on the parent graph container
  const zoom = d3.zoom()
    .scaleExtent([0.15, 6])
    .on('zoom', (event) => {
      d3.select('.graph-content-wrapper')
        .style('transform', `translate(${event.transform.x}px, ${event.transform.y}px) scale(${event.transform.k})`)
        .style('transform-origin', '0 0');
    });
  
  d3.select('.graph-container').call(zoom);
  state.zoom = zoom;
  state.svgSelection = svg;
  
  // D3 simulation forces
  const simulation = d3.forceSimulation(activeNodes)
    .force('link', d3.forceLink(activeLinks).id(d => d.id).distance(150))
    .force('charge', d3.forceManyBody().strength(-240))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(60));
    
  // Render links inside SVG
  const link = svg.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(activeLinks)
    .enter().append('line')
    .attr('class', 'graph-edge')
    .attr('marker-end', 'url(#arrow)');
    
  // Render link labels inside SVG
  const linkLabel = svg.append('g')
    .attr('class', 'link-labels')
    .selectAll('text')
    .data(activeLinks)
    .enter().append('text')
    .attr('class', 'graph-edge-label')
    .text(d => d.type)
    .attr('font-size', '8px')
    .attr('font-family', 'var(--font-ui)')
    .attr('text-anchor', 'middle');
    
  // Render HTML Nodes inside div container (fully compatible with stylesheet shape classes!)
  const node = nodesContainer.selectAll('.graph-node')
    .data(activeNodes)
    .enter().append('div')
    .attr('class', d => {
      let stanceClass = 'node-myth';
      if (d.type === 'person') stanceClass = 'node-person';
      else if (d.type === 'event') stanceClass = 'node-event';
      else if (d.type === 'document' && d.stance === 'Forensic') stanceClass = 'node-evidence';
      return `graph-node ${stanceClass} ${d.id === state.selectedNodeId ? 'active' : ''}`;
    })
    .html(d => `<span style="pointer-events: none; font-weight: bold; font-size: 0.72rem;">${d.label}</span>`)
    .style('position', 'absolute')
    .style('pointer-events', 'auto')
    .on('click', (event, d) => {
      event.stopPropagation();
      state.selectedNodeId = d.id;
      
      // Update sidebar detail Panel
      document.getElementById('node-detail-container').innerHTML = renderNodeDetail();
      setupDetailListeners();
      
      // Visual highlighting class on nodes
      d3.selectAll('.graph-node').classed('active', n => n.id === state.selectedNodeId);
      
      highlightGraph(d.id);
    })
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
    );
  state.gSelection = nodesContainer;
  
  // Clear graph selections when clicking canvas background
  d3.select('.graph-container').on('click', () => {
    state.selectedNodeId = null;
    document.getElementById('node-detail-container').innerHTML = renderNodeDetail();
    d3.selectAll('.graph-node').classed('active', false);
    highlightGraph(null);
  });
  
  // Run highlighters for loaded state
  if (state.selectedNodeId) {
    highlightGraph(state.selectedNodeId);
  }
  
  // Tick updates
  simulation.on('tick', () => {
    // Update SVG links
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
      
    // Center link labels along line
    linkLabel
      .attr('x', d => (d.source.x + d.target.x) / 2)
      .attr('y', d => (d.source.y + d.target.y) / 2);
      
    // Update HTML absolute divs
    node
      .style('left', d => `${d.x}px`)
      .style('top', d => `${d.y}px`)
      .style('transform', 'translate(-50%, -50%)');
  });
  
  // Drag helpers
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  // Center Zoom initially so it is nicely framed
  setTimeout(() => {
    const nodes = activeNodes;
    if (nodes.length === 0) return;
    
    // Fit view frame calculations
    let minX = d3.min(nodes, d => d.x);
    let maxX = d3.max(nodes, d => d.x);
    let minY = d3.min(nodes, d => d.y);
    let maxY = d3.max(nodes, d => d.y);
    
    const graphWidth = (maxX - minX) || 100;
    const graphHeight = (maxY - minY) || 100;
    const midX = minX + graphWidth / 2;
    const midY = minY + graphHeight / 2;
    
    const widthRatio = graphWidth / width;
    const heightRatio = graphHeight / height;
    
    const scale = 0.75 / Math.max(widthRatio, heightRatio, 1);
    const translate = [width / 2 - scale * midX, height / 2 - scale * midY];
    
    d3.select('.graph-container').call(
      zoom.transform,
      d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
    );
  }, 150);
  
  // Interactive Neighbor Opacity highlight logic
  function highlightGraph(selectedId) {
    if (!selectedId) {
      d3.selectAll('.graph-node').style('opacity', 1);
      d3.selectAll('.graph-edge').style('opacity', 0.4).classed('active', false);
      d3.selectAll('.graph-edge-label').style('opacity', 0.6);
      return;
    }
    
    const neighborIds = new Set([selectedId]);
    activeLinks.forEach(link => {
      const sId = typeof link.source === 'object' ? link.source.id : link.source;
      const tId = typeof link.target === 'object' ? link.target.id : link.target;
      if (sId === selectedId) neighborIds.add(tId);
      if (tId === selectedId) neighborIds.add(sId);
    });
    
    // Dim nodes
    d3.selectAll('.graph-node').style('opacity', d => neighborIds.has(d.id) ? 1 : 0.15);
    
    // Highlight edges
    d3.selectAll('.graph-edge')
      .style('opacity', link => {
        const sId = typeof link.source === 'object' ? link.source.id : link.source;
        const tId = typeof link.target === 'object' ? link.target.id : link.target;
        return (sId === selectedId || tId === selectedId) ? 1.0 : 0.05;
      })
      .classed('active', link => {
        const sId = typeof link.source === 'object' ? link.source.id : link.source;
        const tId = typeof link.target === 'object' ? link.target.id : link.target;
        return sId === selectedId || tId === selectedId;
      });
      
    // Dim edge labels
    d3.selectAll('.graph-edge-label').style('opacity', link => {
      const sId = typeof link.source === 'object' ? link.source.id : link.source;
      const tId = typeof link.target === 'object' ? link.target.id : link.target;
      return (sId === selectedId || tId === selectedId) ? 1.0 : 0.05;
    });
  }
  
  // Hook Zoom controls
  document.getElementById('zoom-in-btn').onclick = (e) => {
    e.stopPropagation();
    d3.select('.graph-container').transition().duration(250).call(zoom.scaleBy, 1.3);
  };
  document.getElementById('zoom-out-btn').onclick = (e) => {
    e.stopPropagation();
    d3.select('.graph-container').transition().duration(250).call(zoom.scaleBy, 1 / 1.3);
  };
  document.getElementById('zoom-reset-btn').onclick = (e) => {
    e.stopPropagation();
    d3.select('.graph-container').transition().duration(250).call(zoom.transform, d3.zoomIdentity);
  };
}

// ---- Initialize App ----
document.addEventListener('DOMContentLoaded', () => {
  setupBackgroundMusic();
  render();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setupBackgroundMusic();
  render();
}
