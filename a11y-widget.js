/*
  ============================================
  ACCESSIBILITY WIDGET
  ============================================
  Options:
    - High Contrast
    - Dyslexia Font
    - Grayscale
    - Letter Spacing
    - Line Height
    - Focus Highlight
    - Reading Guide
    - Bigger Touch Targets
    - Text Size (slider)
*/

(function () {

  var STORAGE_KEY = 'a11y-prefs';

  var defaults = {
    contrast:     false,
    dyslexia:     false,
    grayscale:    false,
    letterSpace:  false,
    lineHeight:   false,
    focusHighlight: false,
    readingGuide: false,
    bigTargets:   false,
    fontScale:    100
  };

  function loadPrefs() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return saved ? Object.assign({}, defaults, JSON.parse(saved)) : Object.assign({}, defaults);
    } catch (e) {
      return Object.assign({}, defaults);
    }
  }

  function savePrefs(prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {}
  }

  var prefs = loadPrefs();

  /* ---- Reading guide element ---- */
  var guide = null;

  function createReadingGuide() {
    if (guide) return;
    guide = document.createElement('div');
    guide.id = 'a11y-reading-guide';
    document.body.appendChild(guide);
    document.addEventListener('mousemove', moveReadingGuide);
  }

  function destroyReadingGuide() {
    if (!guide) return;
    document.removeEventListener('mousemove', moveReadingGuide);
    guide.parentNode && guide.parentNode.removeChild(guide);
    guide = null;
  }

  function moveReadingGuide(e) {
    if (!guide) return;
    guide.style.top = (e.clientY - 12) + 'px';
  }

  /* ---- Apply all prefs to <body> ---- */
  function applyPrefs() {
    var body = document.body;

    body.classList.toggle('a11y-high-contrast',   prefs.contrast);
    body.classList.toggle('a11y-dyslexia',         prefs.dyslexia);
    body.classList.toggle('a11y-grayscale',        prefs.grayscale && !prefs.contrast);
    body.classList.toggle('a11y-letter-spacing',   prefs.letterSpace);
    body.classList.toggle('a11y-line-height',      prefs.lineHeight);
    body.classList.toggle('a11y-focus-highlight',  prefs.focusHighlight);
    body.classList.toggle('a11y-big-targets',      prefs.bigTargets);

    body.style.fontSize = prefs.fontScale + '%';

    /* Reading guide */
    if (prefs.readingGuide) {
      createReadingGuide();
    } else {
      destroyReadingGuide();
    }

    savePrefs(prefs);
    syncUI();
  }

  /* ---- Sync toggle buttons and font display ---- */
  function syncUI() {
    setToggle('contrast',       prefs.contrast);
    setToggle('dyslexia',       prefs.dyslexia);
    setToggle('grayscale',      prefs.grayscale);
    setToggle('letterSpace',    prefs.letterSpace);
    setToggle('lineHeight',     prefs.lineHeight);
    setToggle('focusHighlight', prefs.focusHighlight);
    setToggle('readingGuide',   prefs.readingGuide);
    setToggle('bigTargets',     prefs.bigTargets);

    var display = document.getElementById('a11y-font-display');
    if (display) display.textContent = prefs.fontScale + '%';
  }

  function setToggle(id, on) {
    var tog = document.getElementById('a11y-tog-' + id);
    var opt = document.getElementById('a11y-opt-' + id);
    if (tog) tog.classList.toggle('on', on);
    if (opt) {
      opt.classList.toggle('active', on);
      opt.setAttribute('aria-pressed', String(on));
    }
  }

  /* ---- Panel open / close ---- */
  function openPanel() {
    var panel = document.getElementById('a11yPanel');
    var fab   = document.getElementById('a11yBtn');
    if (!panel || !fab) return;
    panel.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    var closeBtn = document.getElementById('a11yClose');
    if (closeBtn) closeBtn.focus();
  }

  function closePanel() {
    var panel = document.getElementById('a11yPanel');
    var fab   = document.getElementById('a11yBtn');
    if (!panel || !fab) return;
    panel.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  function togglePanel() {
    var panel = document.getElementById('a11yPanel');
    if (!panel) return;
    panel.classList.contains('open') ? closePanel() : openPanel();
  }

  /* ---- Wire everything up ---- */
  function init() {
    var fab = document.getElementById('a11yBtn');
    if (fab) fab.addEventListener('click', togglePanel);

    var closeBtn = document.getElementById('a11yClose');
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    /* Escape closes panel */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var panel = document.getElementById('a11yPanel');
        if (panel && panel.classList.contains('open')) closePanel();
      }
    });

    /* Click outside closes panel */
    document.addEventListener('click', function (e) {
      var panel = document.getElementById('a11yPanel');
      var fab   = document.getElementById('a11yBtn');
      if (!panel || !fab) return;
      if (
        panel.classList.contains('open') &&
        !panel.contains(e.target) &&
        e.target !== fab
      ) {
        closePanel();
      }
    });

    /* Toggle options */
    [
      'contrast', 'dyslexia', 'grayscale',
      'letterSpace', 'lineHeight', 'focusHighlight',
      'readingGuide', 'bigTargets'
    ].forEach(function (id) {
      var row = document.getElementById('a11y-opt-' + id);
      if (!row) return;
      function toggle() {
        prefs[id] = !prefs[id];
        applyPrefs();
      }
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });

    /* Font size buttons */
    var incBtn = document.getElementById('a11y-font-inc');
    var decBtn = document.getElementById('a11y-font-dec');

    if (incBtn) {
      incBtn.addEventListener('click', function () {
        if (prefs.fontScale < 160) { prefs.fontScale += 10; applyPrefs(); }
      });
    }
    if (decBtn) {
      decBtn.addEventListener('click', function () {
        if (prefs.fontScale > 80) { prefs.fontScale -= 10; applyPrefs(); }
      });
    }

    /* Reset */
    var resetBtn = document.getElementById('a11y-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        prefs = Object.assign({}, defaults);
        applyPrefs();
      });
    }

    /* Apply saved prefs on load */
    applyPrefs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();