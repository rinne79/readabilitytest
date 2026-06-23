const EXAMPLES = {
  fiction: `<h2>The Old Man and the Sea</h2>
<p>He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish. In the first forty days a boy had been with him. But after forty days without a fish the boy's parents had told him that the old man was now definitely and finally <em>salao</em>, which is the worst form of unlucky, and the boy had gone at their orders in another boat which caught three good fish the first week.</p>
<p>It made the boy sad to see the old man come in each day with his skiff empty and he always went down to help him carry either the coiled lines or the gaff and harpoon and the sail that was furled around the mast. The sail was patched with flour sacks and, furled, it looked like the flag of permanent defeat.</p>
<p>The old man was thin and gaunt with deep wrinkles in the back of his neck. The brown blotches of the benevolent skin cancer the sun brings from its reflection on the tropic sea were on his cheeks. The blotches ran well down the sides of his face and his hands had the deep-creased scars from handling heavy fish on the cords. But none of these scars were fresh. They were as old as erosions in a fishless desert.</p>
<blockquote>"I may not be as strong as I think," the old man said. "But I know many tricks and I have resolution."</blockquote>
<p>Everything about him was old except his eyes and they were the same color as the sea and were cheerful and undefeated.</p>`,

  news: `<h2>Scientists Discover New Approach to Treating Antibiotic-Resistant Bacteria</h2>
<p>Researchers at a leading university have identified a novel mechanism that could be used to combat antibiotic-resistant bacteria, a growing global health threat that the World Health Organization has called one of the biggest challenges facing modern medicine.</p>
<p>The study, published this week in the journal <em>Nature Medicine</em>, describes how a specific protein found on the surface of certain bacterial cells can be targeted by a new class of compounds, effectively disabling the bacteria's ability to resist conventional antibiotics.</p>
<p>"What we've found is essentially a master switch," said Dr. Elena Kowalski, the study's lead author. "When we block this protein, the bacteria lose their resistance and become vulnerable to treatments that would otherwise fail."</p>
<p>Antibiotic resistance kills an estimated 1.27 million people worldwide each year, with that figure expected to rise significantly by mid-century if no new treatments are developed. The new approach, if confirmed in clinical trials, could offer doctors a powerful new tool against infections that currently have no reliable cure.</p>
<p>The team is now working to develop a drug candidate based on the findings and hopes to begin early-stage human trials within the next three years.</p>`,

  science: `<h2>How the Brain Consolidates Memory During Sleep</h2>
<p>Sleep is not merely a passive state of rest. During the hours we spend unconscious, the brain is engaged in an active and complex process of sorting, strengthening, and integrating the experiences of the day. Understanding this process has become one of the most active areas of neuroscience research.</p>
<p>The hippocampus, a seahorse-shaped structure deep within the medial temporal lobe, plays a central role in the initial encoding of new memories. During waking hours, the hippocampus acts as a temporary buffer, rapidly storing the details of recent experiences. But long-term storage requires a transfer of this information to the neocortex.</p>
<p>This transfer, known as memory consolidation, occurs primarily during slow-wave sleep &mdash; the deep, dreamless phases that dominate the early part of the night. During these phases, the hippocampus replays recent experiences, sending signals to the neocortex that gradually strengthen the neural connections encoding those memories.</p>
<p>Rapid eye movement (REM) sleep, which predominates in the later hours of the night and is associated with vivid dreaming, appears to play a complementary role &mdash; particularly in the consolidation of emotional memories and procedural skills such as playing a musical instrument or riding a bicycle.</p>`,

  poetry: `<h2>Selected Poems</h2>
<p><strong>The Road Not Taken</strong></p>
<p>Two roads diverged in a yellow wood,<br>
And sorry I could not travel both<br>
And be one traveler, long I stood<br>
And looked down one as far as I could<br>
To where it bent in the undergrowth.</p>
<p>Then took the other, as just as fair,<br>
And having perhaps the better claim,<br>
Because it was grassy and wanted wear;<br>
Though as for that the passing there<br>
Had worn them really about the same.</p>
<p><em>&mdash; Robert Frost</em></p>
<p><strong>Lying in a Hammock at William Duffy's Farm</strong></p>
<p>I have wasted my life.<br>
I leaned out of a bridge at dusk<br>
and watched the green water below<br>
calmly moving away beneath my hands.</p>
<p>Whatever it was I lost, whatever I wept for<br>
was a heron, I think, diving without error<br>
into the pine-shadow<br>
across the water.</p>
<p><em>&mdash; James Wright</em></p>`
};

const FONT_META = {
  "'Atkinson Hyperlegible', sans-serif": { tags: ['accessible'] },
  "'Lexend', sans-serif":                { tags: ['accessible'] },
  "'Inclusive Sans', sans-serif":        { tags: ['accessible'] },
  "'Andika', sans-serif":               { tags: ['accessible'] },
  "'Comic Neue', cursive":               { tags: ['accessible'] },
  "'Inter', sans-serif":                 { tags: [] },
  "'Open Sans', sans-serif":             { tags: [] },
  "'Lato', sans-serif":                  { tags: [] },
  "'Nunito', sans-serif":                { tags: [] },
  "'DM Sans', sans-serif":               { tags: [] },
  "'Raleway', sans-serif":               { tags: [] },
  "'Roboto', sans-serif":                { tags: [] },
  "'Verdana', sans-serif":               { tags: [] },
  "Arial, sans-serif":                   { tags: [] },
  "'Literata', serif":                   { tags: ['serif'] },
  "'Merriweather', serif":               { tags: ['serif'] },
  "'Source Serif 4', serif":             { tags: ['serif'] },
  "'Spectral', serif":                   { tags: ['serif'] },
  "'PT Serif', serif":                   { tags: ['serif'] },
  "'Crimson Pro', serif":                { tags: ['serif'] },
  "'EB Garamond', serif":                { tags: ['serif'] },
  "Georgia, serif":                      { tags: ['serif'] },
};

const DEFAULTS = {
  font: "'Atkinson Hyperlegible', sans-serif",
  fontSize: 18,
  lineHeight: 1.6,
  letterSpacing: 0,
  wordSpacing: 0,
  maxWidth: 65,
};

let state = { ...DEFAULTS, tab: 'fiction', theme: 'light', mainTab: 'explore' };

const previewText  = document.getElementById('preview-text');
const customInput  = document.getElementById('custom-input');
const splitInput   = document.getElementById('split-input');
const splitDefault = document.getElementById('split-default');
const splitCustom  = document.getElementById('split-custom');
const fontSelect   = document.getElementById('font-select');
const fontTags     = document.querySelector('.font-tags');

const sliders = {
  fontSize:      { el: document.getElementById('font-size'),      val: document.getElementById('font-size-val'),      fmt: v => Math.round(v) + 'px' },
  lineHeight:    { el: document.getElementById('line-height'),    val: document.getElementById('line-height-val'),    fmt: v => parseFloat(v).toFixed(2) },
  letterSpacing: { el: document.getElementById('letter-spacing'), val: document.getElementById('letter-spacing-val'), fmt: v => parseFloat(v).toFixed(2) + 'em' },
  wordSpacing:   { el: document.getElementById('word-spacing'),   val: document.getElementById('word-spacing-val'),   fmt: v => parseFloat(v).toFixed(2) + 'em' },
  maxWidth:      { el: document.getElementById('max-width'),      val: document.getElementById('max-width-val'),      fmt: v => Math.round(v) + 'ch' },
};

function applyStyles() {
  [previewText, customInput, splitCustom, document.getElementById('test-passage')].forEach(el => {
    if (!el) return;
    el.style.fontFamily    = state.font;
    el.style.fontSize      = state.fontSize + 'px';
    el.style.lineHeight    = state.lineHeight;
    el.style.letterSpacing = state.letterSpacing + 'em';
    el.style.wordSpacing   = state.wordSpacing + 'em';
    el.style.maxWidth      = state.maxWidth + 'ch';
  });
  document.getElementById('test-font-name').textContent = fontDisplayName(state.font);
}

function fontDisplayName(f) {
  const m = f.match(/['"](.*?)['"]/);
  return m ? m[1] : f.split(',')[0].trim();
}

function renderPreview() {
  if (state.tab === 'custom') {
    previewText.style.display = 'none';
    customInput.classList.add('visible');
  } else {
    customInput.classList.remove('visible');
    previewText.style.display = '';
    previewText.innerHTML = EXAMPLES[state.tab] || '';
  }
}

function textToHtml(raw) {
  return raw.split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
}
function renderSplit() {
  const raw = splitInput.value.trim();
  const empty = '<span style="color:var(--text-muted);font-size:0.9rem">Your text will appear here.</span>';
  if (!raw) { splitDefault.innerHTML = empty; splitCustom.innerHTML = empty; return; }
  const html = textToHtml(raw);
  splitDefault.innerHTML = html;
  splitCustom.innerHTML  = html;
}

function updateFontTags() {
  const meta = FONT_META[state.font] || { tags: [] };
  const classMap = { accessible: 'tag-accessible', serif: 'tag-serif' };
  fontTags.innerHTML = meta.tags.map(t => `<span class="tag ${classMap[t] || ''}">${t}</span>`).join('');
}

function render() {
  applyStyles();
  renderPreview();
  renderSplit();
  updateFontTags();
}

Object.entries(sliders).forEach(([key, { el, val, fmt }]) => {
  el.value = DEFAULTS[key];
  val.textContent = fmt(DEFAULTS[key]);
  el.addEventListener('input', () => {
    state[key] = parseFloat(el.value);
    val.textContent = fmt(el.value);
    applyStyles();
  });
});

fontSelect.value = DEFAULTS.font;
fontSelect.addEventListener('change', () => {
  state.font = fontSelect.value;
  updateFontTags();
  applyStyles();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.tab = btn.dataset.tab;
    renderPreview();
  });
});

document.querySelectorAll('.main-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.main-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
    document.getElementById('tab-' + btn.dataset.mainTab).classList.remove('hidden');
    state.mainTab = btn.dataset.mainTab;
  });
});

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.body.className = btn.dataset.theme === 'light' ? '' : `theme-${btn.dataset.theme}`;
    state.theme = btn.dataset.theme;
  });
});

splitInput.addEventListener('input', renderSplit);

document.getElementById('reset-btn').addEventListener('click', () => {
  state = { ...DEFAULTS, tab: state.tab, theme: state.theme, mainTab: state.mainTab };
  fontSelect.value = DEFAULTS.font;
  Object.entries(sliders).forEach(([key, { el, val, fmt }]) => {
    el.value = DEFAULTS[key];
    val.textContent = fmt(DEFAULTS[key]);
  });
  render();
});

/* ══════════════════════════════════════════════════════════════════════════
   SPEED TEST
══════════════════════════════════════════════════════════════════════════ */

let testState = {
  passage: null,
  startTime: null,
  elapsed: null,
  wpm: null,
  timerInterval: null,
  userAnswers: {},
};

const passageSelect    = document.getElementById('passage-select');
const testReady        = document.getElementById('test-ready');
const testReading      = document.getElementById('test-reading');
const testQuestions    = document.getElementById('test-questions');
const testResult       = document.getElementById('test-result');
const testPassage      = document.getElementById('test-passage');
const liveTimer        = document.getElementById('live-timer');
const wpmDisplay       = document.getElementById('wpm-display');
const questionsList    = document.getElementById('questions-list');
const submitAnswersBtn = document.getElementById('submit-answers-btn');
const resultsTable     = document.getElementById('results-table');
const resultsTbody     = document.getElementById('results-tbody');
const resultsEmpty     = document.getElementById('results-empty');

PASSAGES.forEach((p, i) => {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = p.title;
  passageSelect.appendChild(opt);
});

function showTestStep(step) {
  [testReady, testReading, testQuestions, testResult].forEach(el => el.classList.add('hidden'));
  step.classList.remove('hidden');
}

function startTimer() {
  testState.startTime = Date.now();
  testState.timerInterval = setInterval(() => {
    const s = Math.floor((Date.now() - testState.startTime) / 1000);
    liveTimer.textContent = s + 's';
  }, 500);
}

function stopTimer() {
  clearInterval(testState.timerInterval);
  testState.elapsed = (Date.now() - testState.startTime) / 1000;
}

document.getElementById('start-test-btn').addEventListener('click', () => {
  const idx = parseInt(passageSelect.value);
  testState.passage = PASSAGES[idx];
  testState.userAnswers = {};

  testPassage.innerHTML = testState.passage.text
    .split(/\n{2,}/)
    .map(p => `<p>${p.trim()}</p>`)
    .join('');
  applyStyles();

  showTestStep(testReading);
  startTimer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('done-reading-btn').addEventListener('click', () => {
  stopTimer();
  const minutes = testState.elapsed / 60;
  testState.wpm = Math.round(testState.passage.wordCount / minutes);
  wpmDisplay.textContent = testState.wpm.toLocaleString();

  renderQuestions();
  showTestStep(testQuestions);
});

function renderQuestions() {
  questionsList.innerHTML = '';
  submitAnswersBtn.disabled = true;
  testState.userAnswers = {};

  testState.passage.questions.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `<p class="question-text"><strong>Q${qi + 1}.</strong> ${q.q}</p>`;

    q.options.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.className = 'option-label';
      label.innerHTML = `<input type="radio" name="q${qi}" value="${oi}"> <span>${opt}</span>`;
      label.querySelector('input').addEventListener('change', () => {
        testState.userAnswers[qi] = oi;
        if (Object.keys(testState.userAnswers).length === testState.passage.questions.length) {
          submitAnswersBtn.disabled = false;
        }
      });
      block.appendChild(label);
    });

    questionsList.appendChild(block);
  });
}

submitAnswersBtn.addEventListener('click', () => {
  const questions = testState.passage.questions;
  let correct = 0;

  questions.forEach((q, qi) => {
    const userAns = testState.userAnswers[qi];
    const isCorrect = userAns === q.answer;
    if (isCorrect) correct++;

    const block = questionsList.children[qi];
    block.querySelectorAll('.option-label').forEach((label, oi) => {
      label.querySelector('input').disabled = true;
      if (oi === q.answer) label.classList.add('correct');
      else if (oi === userAns) label.classList.add('wrong');
    });
  });

  const score = correct + '/' + questions.length;
  document.getElementById('result-wpm').textContent   = testState.wpm.toLocaleString();
  document.getElementById('result-score').textContent = score;
  document.getElementById('result-comment').textContent = resultComment(testState.wpm, correct, questions.length);

  saveResult(testState.wpm, correct, questions.length);
  showTestStep(testResult);
  renderResultsTable();
});

function resultComment(wpm, correct, total) {
  const pct = correct / total;
  if (pct === 1 && wpm >= 300) return 'Excellent — fast and fully accurate. This font and spacing suits you well.';
  if (pct === 1) return 'Perfect comprehension! Try speeding up or testing another font to compare.';
  if (pct >= 0.67 && wpm >= 280) return 'Good balance of speed and understanding.';
  if (pct < 0.34) return 'Comprehension was low — you may have been reading too quickly, or this font makes it harder to concentrate.';
  return 'Decent result. Try a different font or spacing to see if your score improves.';
}

document.getElementById('test-again-btn').addEventListener('click', () => showTestStep(testReady));

document.getElementById('test-next-btn').addEventListener('click', () => {
  showTestStep(testReady);
  document.getElementById('font-select').scrollIntoView({ behavior: 'smooth', block: 'center' });
  document.getElementById('font-select').focus();
});

function loadResults() {
  try { return JSON.parse(localStorage.getItem('rt_results') || '[]'); }
  catch { return []; }
}

function saveResult(wpm, correct, total) {
  const results = loadResults();
  results.push({
    font: fontDisplayName(state.font),
    fontSize: state.fontSize,
    lineHeight: state.lineHeight,
    wpm,
    correct,
    total,
    passage: testState.passage.title,
    ts: Date.now(),
  });
  localStorage.setItem('rt_results', JSON.stringify(results));
}

function renderResultsTable() {
  const results = loadResults();
  if (!results.length) {
    resultsEmpty.style.display = '';
    resultsTable.classList.add('hidden');
    return;
  }
  resultsEmpty.style.display = 'none';
  resultsTable.classList.remove('hidden');

  const maxWpm = Math.max(...results.map(r => r.wpm));

  resultsTbody.innerHTML = results
    .slice().reverse()
    .map(r => {
      const pct = r.correct / r.total;
      const scoreClass = pct === 1 ? 'score-perfect' : pct >= 0.67 ? 'score-good' : 'score-low';
      const wpmClass   = r.wpm === maxWpm ? 'wpm-best' : '';
      return `<tr>
        <td><strong>${r.font}</strong></td>
        <td>${r.fontSize}px</td>
        <td>${parseFloat(r.lineHeight).toFixed(1)}</td>
        <td class="${wpmClass}">${r.wpm.toLocaleString()}${r.wpm === maxWpm ? ' &#9650;' : ''}</td>
        <td class="${scoreClass}">${r.correct}/${r.total}</td>
        <td class="passage-cell">${r.passage}</td>
      </tr>`;
    }).join('');
}

document.getElementById('clear-results-btn').addEventListener('click', () => {
  localStorage.removeItem('rt_results');
  renderResultsTable();
});

render();
renderResultsTable();
