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
  "'Open Sans', sans-serif":             { tags: [] },
  "'Verdana', sans-serif":               { tags: [] },
  "'Roboto', sans-serif":                { tags: [] },
  "'Raleway', sans-serif":               { tags: [] },
  "'Comic Neue', cursive":               { tags: ['accessible'] },
  "'Merriweather', serif":               { tags: ['serif'] },
  "'EB Garamond', serif":                { tags: ['serif'] },
  "'Source Serif 4', serif":             { tags: ['serif'] },
  "Georgia, serif":                      { tags: ['serif'] },
  "Arial, sans-serif":                   { tags: [] },
};

const DEFAULTS = {
  font: "'Atkinson Hyperlegible', sans-serif",
  fontSize: 18,
  lineHeight: 1.6,
  letterSpacing: 0,
  wordSpacing: 0,
  maxWidth: 65,
};

let state = { ...DEFAULTS, tab: 'fiction', theme: 'light' };

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
  [previewText, customInput, splitCustom].forEach(el => {
    el.style.fontFamily    = state.font;
    el.style.fontSize      = state.fontSize + 'px';
    el.style.lineHeight    = state.lineHeight;
    el.style.letterSpacing = state.letterSpacing + 'em';
    el.style.wordSpacing   = state.wordSpacing + 'em';
    el.style.maxWidth      = state.maxWidth + 'ch';
  });
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
  fontTags.innerHTML = meta.tags
    .map(t => `<span class="tag ${classMap[t] || ''}">${t}</span>`)
    .join('');
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
  state = { ...DEFAULTS, tab: state.tab, theme: state.theme };
  fontSelect.value = DEFAULTS.font;
  Object.entries(sliders).forEach(([key, { el, val, fmt }]) => {
    el.value = DEFAULTS[key];
    val.textContent = fmt(DEFAULTS[key]);
  });
  render();
});

render();
