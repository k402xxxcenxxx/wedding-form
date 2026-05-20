(function (global) {
  'use strict';

  // ─── Full CSS reconstructed from both Vue scoped components ─────────────────
  //
  //  "58ER" module  →  ElementCountdownNum  (scoped: data-v-3e77e59a)
  //  "5m4/"  module  →  ElementCountdown    (unscopped outer shell)
  //
  //  The webpack bundle shipped these as extracted CSS files; we re-inject them
  //  here so the script is fully self-contained on any static host page.
  // ─────────────────────────────────────────────────────────────────────────────
  var _cssInjected = false;
  function injectCSS() {
    if (_cssInjected) return;

    var css = [

      /* ── ElementCountdownNum (58ER) ─────────────────────────────────────── */

      /* Outer wrapper per digit-group: flex row of up to 3 digit cards + label */
      '[data-v-3e77e59a].c-wrap,',
      '.c-wrap {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '}',

      /* Extra left-pad space when days reach 3 digits */
      '[data-v-3e77e59a].c-day-wrap,',
      '.c-day-wrap {',
      '  padding-left: 0.1rem;',
      '}',

      /* Individual digit card */
      '[data-v-3e77e59a].c-num,',
      '.c-num {',
      '  position: relative;',
      '  width: 0.53333rem;',
      '  height: 0.8rem;',
      '  border-radius: 0.05333rem;',
      '  overflow: hidden;',
      '  background-color: rgba(0, 0, 0, 0.5);',
      '  margin: 0 0.02667rem;',
      '}',

      /* The animated column — holds next-num stacked above curr-num */
      '[data-v-3e77e59a].flex-wrap,',
      '.flex-wrap {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-orient: vertical;',
      '  -webkit-box-direction: normal;',
      '  -ms-flex-direction: column;',
      '  flex-direction: column;',
      '  position: absolute;',
      '  top: 0;',
      '  left: 0;',
      '  width: 100%;',
      '}',

      /* Scroll-up animation triggered by adding .numscroll */
      '@keyframes numScrollUp {',
      '  0%   { transform: translateY(0);     }',
      '  100% { transform: translateY(100%);  }',
      '}',

      '[data-v-3e77e59a].flex-wrap.numscroll,',
      '.flex-wrap.numscroll {',
      '  -webkit-animation: numScrollUp 0.45s ease forwards;',
      '  animation:         numScrollUp 0.45s ease forwards;',
      '}',

      /* Both digit frames share identical sizing */
      '[data-v-3e77e59a].next-num,',
      '[data-v-3e77e59a].curr-num,',
      '.next-num,',
      '.curr-num {',
      '  width: 0.53333rem;',
      '  height: 0.8rem;',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-pack: center;',
      '  -ms-flex-pack: center;',
      '  justify-content: center;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '  font-size: 0.58667rem;',
      '  font-weight: 700;',
      '  line-height: 1;',
      '}',

      /* Unit label (天 / DAY / 时 / HOUR …) */
      '[data-v-3e77e59a].c-text,',
      '.c-text {',
      '  font-size: 0.21333rem;',
      '  font-weight: 400;',
      '  margin-left: 0.08rem;',
      '  white-space: nowrap;',
      '}',

      // /* ── ElementCountdown (5m4/) ─────────────────────────────────────────── */

      // /* Root wrapper — position is set via inline style from wrapCss */
      // '.count-down {',
      // '  position: absolute;',
      // '  display: -webkit-box;',
      // '  display: -ms-flexbox;',
      // '  display: flex;',
      // '  -webkit-box-align: center;',
      // '  -ms-flex-align: center;',
      // '  align-items: center;',
      // '  overflow: hidden;',
      // '}',

      // /* Animation wrapper — receives wrapCss.animation + aniOrigin */
      // '.ani-wrap {',
      // '  display: -webkit-box;',
      // '  display: -ms-flexbox;',
      // '  display: flex;',
      // '  -webkit-box-align: center;',
      // '  -ms-flex-align: center;',
      // '  align-items: center;',
      // '  width: 100%;',
      // '  height: 100%;',
      // '}',

      /* Flip mode container */
      '.count-flip {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '  -ms-flex-wrap: nowrap;',
      '  flex-wrap: nowrap;',
      '  width: 100%;',
      '  height: 100%;',
      '}',

      /* Each unit block (day / hour / minute / second) */
      '.c-com {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '  -webkit-box-pack: center;',
      '  -ms-flex-pack: center;',
      '  justify-content: center;',
      '  height: 100%;',
      '  padding: 0 0.05333rem;',
      '  border-width: 0;',
      '  border-style: solid;',
      '  -webkit-box-sizing: border-box;',
      '  box-sizing: border-box;',
      '}',

      /* Text mode container */
      '.count-text {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '  width: 100%;',
      '  height: 100%;',
      '  white-space: nowrap;',
      '  overflow: hidden;',
      '}',

      /* Finish / end-text placeholder */
      '.finish-cont {',
      '  display: -webkit-box;',
      '  display: -ms-flexbox;',
      '  display: flex;',
      '  -webkit-box-align: center;',
      '  -ms-flex-align: center;',
      '  align-items: center;',
      '  width: 100%;',
      '  height: 100%;',
      '}'

    ].join('\n');

    var style = document.createElement('style');
    style.setAttribute('data-id', 'element-countdown-css');
    style.textContent = css;
    document.head.appendChild(style);
    _cssInjected = true;
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────
  function pad(n) {
    return String(n).length < 2 ? '0' + n : String(n);
  }

  /**
   * Animate a single .flex-wrap node when its digit value changes.
   * Updates both .next-num and .curr-num so the loop looks correct,
   * then fires the CSS scroll animation.
   */
  function animateSlot(flexWrap, value) {
    var next = flexWrap.querySelector('.next-num');
    var curr = flexWrap.querySelector('.curr-num');
    if (!next || !curr) return;

    var v = String(value);
    if (next.textContent === v) return; // nothing changed

    next.textContent = v;
    curr.textContent = v;

    flexWrap.classList.remove('numscroll');
    void flexWrap.offsetWidth; // force reflow so animation restarts
    flexWrap.classList.add('numscroll');
    setTimeout(function () { flexWrap.classList.remove('numscroll'); }, 500);
  }

  /**
   * Given a .c-com block and a numeric value, update the three digit slots:
   *   .c-day-left  → hundreds digit (hidden when value < 100)
   *   .c-left      → tens digit
   *   .c-right     → units digit
   */
  function updateBlock(comEl, value) {
    var s = String(Math.max(0, value));

    var hundreds = s.length > 2 ? s.substr(0, 1) : '0';
    var tens      = s.length > 2 ? s.substr(1, 1)
                  : s.length < 2 ? '0'
                  : s.substr(0, 1);
    var units     = s.slice(-1);

    // hundreds slot — show/hide the wrapper (.c-num.c-day-left)
    var hundredsNum = comEl.querySelector('.c-num.c-day-left');
    if (hundredsNum) {
      hundredsNum.style.display = s.length > 2 ? '' : 'none';
      var hw = hundredsNum.querySelector('.flex-wrap');
      if (hw) animateSlot(hw, hundreds);
    }

    // also toggle c-day-wrap on the inner .c-wrap
    var cWrap = comEl.querySelector('.c-wrap');
    if (cWrap) {
      if (s.length > 2) {
        cWrap.classList.add('c-day-wrap');
      } else {
        cWrap.classList.remove('c-day-wrap');
      }
    }

    // tens slot (.c-num.c-left)
    var tensNum = comEl.querySelector('.c-num.c-left');
    if (tensNum) {
      var tw = tensNum.querySelector('.flex-wrap');
      if (tw) animateSlot(tw, tens);
    }

    // units slot (.c-num.c-right)
    var unitsNum = comEl.querySelector('.c-num.c-right');
    if (unitsNum) {
      var uw = unitsNum.querySelector('.flex-wrap');
      if (uw) animateSlot(uw, units);
    }
  }

  // ─── ElementCountdown ───────────────────────────────────────────────────────
  /**
   * Wires a countdown timer onto an **existing** `.count-down` element that
   * was rendered by the original Vue component (or any compatible HTML structure
   * using the same class names).
   *
   * Usage:
   *   new ElementCountdown({
   *     target:    '#my-countdown',   // selector OR DOM element  (required)
   *     endTime:   '2026-12-31 23:59:59',             (required)
   *     endOption: 'zero',            // 'zero' | 'hide' | 'text'
   *     endText:   '<b>Ended!</b>',   // used when endOption === 'text'
   *   });
   */
  function ElementCountdown(options) {
    var o = Object.assign({ endOption: 'zero' }, options || {});

    // Resolve target element
    this._root = typeof o.target === 'string'
      ? document.querySelector(o.target)
      : o.target;

    if (!this._root) {
      console.error('ElementCountdown: target not found →', o.target);
      return;
    }

    this.opts      = o;
    this._day      = 0;
    this._hour     = 0;
    this._minute   = 0;
    this._second   = 0;
    this._timer    = null;
    this._finished = false;

    // Cache the four unit blocks once
    this._blocks = {
      day:    this._root.querySelector('.c-com.c-day'),
      hour:   this._root.querySelector('.c-com.c-hour'),
      minute: this._root.querySelector('.c-com.c-minute'),
      second: this._root.querySelector('.c-com.c-second')
    };

    // Cache the finish / text container (the .count-flip wrapper)
    this._flipWrap   = this._root.querySelector('.count-flip');
    this._finishCont = this._root.querySelector('.finish-cont'); // may not exist

    injectCSS();
    this._start();
  }

  // ── internal tick ────────────────────────────────────────────────────────────
  ElementCountdown.prototype._tick = function () {
    var self = this;
    var now  = Date.now();
    var end  = typeof self.opts.endTime === 'string'
      ? new Date(self.opts.endTime.replace(/-/g, '/')).getTime()
      : 0;
    var diff = end - now;

    if (diff > 0) {
      self._day    = Math.floor(diff / 1000 / 60 / 60 / 24);
      self._hour   = Math.floor(diff / 1000 / 60 / 60 % 24);
      self._minute = Math.floor(diff / 1000 / 60 % 60);
      self._second = Math.floor(diff / 1000 % 60);
      self._render();
    } else {
      clearInterval(self._timer);
      self._finished = true;

      switch (self.opts.endOption) {
        case 'zero':
          self._day = self._hour = self._minute = self._second = 0;
          self._render();
          break;

        case 'hide':
          self._root.style.display = 'none';
          break;

        case 'text':
          // Hide flip, show finish content
          if (self._flipWrap) self._flipWrap.style.display = 'none';
          // Re-use .finish-cont if it exists, otherwise create one
          if (!self._finishCont) {
            self._finishCont = document.createElement('div');
            self._finishCont.className = 'finish-cont';
            var aniWrap = self._root.querySelector('.ani-wrap');
            (aniWrap || self._root).appendChild(self._finishCont);
          }
          self._finishCont.style.display = '';
          self._finishCont.innerHTML = self.opts.endText || '';
          break;
      }
    }
  };

  // ── push digit values into the existing DOM ──────────────────────────────────
  ElementCountdown.prototype._render = function () {
    var b = this._blocks;
    if (b.day)    updateBlock(b.day,    this._day);
    if (b.hour)   updateBlock(b.hour,   this._hour);
    if (b.minute) updateBlock(b.minute, this._minute);
    if (b.second) updateBlock(b.second, this._second);
  };

  // ── start / stop ─────────────────────────────────────────────────────────────
  ElementCountdown.prototype._start = function () {
    this._tick();
    this._timer = setInterval(this._tick.bind(this), 1000);
  };

  /** Stop the timer. The DOM element is left intact. */
  ElementCountdown.prototype.stop = function () {
    clearInterval(this._timer);
  };

  /** Change the end time while the timer is already running. */
  ElementCountdown.prototype.setEndTime = function (newEndTime) {
    this.opts.endTime = newEndTime;
    this._finished    = false;
    clearInterval(this._timer);

    // Restore visibility in case it was hidden
    if (this._root)      this._root.style.display      = '';
    if (this._flipWrap)  this._flipWrap.style.display   = '';
    if (this._finishCont) this._finishCont.style.display = 'none';

    this._start();
  };

  /** Stop + remove the root element from the DOM entirely. */
  ElementCountdown.prototype.destroy = function () {
    clearInterval(this._timer);
    if (this._root && this._root.parentNode) {
      this._root.parentNode.removeChild(this._root);
    }
  };

  // ─── Export ──────────────────────────────────────────────────────────────────
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ElementCountdown;
  } else {
    global.ElementCountdown = ElementCountdown;
  }

}(typeof window !== 'undefined' ? window : this));