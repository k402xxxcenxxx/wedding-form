(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────
     Inject required styles for spin animation & states.
     These only target the existing element classes.
  ───────────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `

    #audio.ap-hidden {
      opacity: 0;
      transform: scale(0.6);
      pointer-events: none;
    }

    /* Spinning disc when playing */
    #audio .audio.ap-playing .music-icon {
      animation: ap-spin 4s linear infinite;
    }

    /* Paused — stop spin in place */
    #audio .audio.ap-paused .music-icon {
      animation: none;
    }

    @keyframes ap-spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  /* ─────────────────────────────────────────────────────
     Wait for DOM to be ready before querying elements.
  ───────────────────────────────────────────────────── */
  function init() {
    const wrapper   = document.getElementById('audio');
    const disc      = wrapper && wrapper.querySelector('.audio');
    const music     = document.getElementById('music');

    if (!wrapper || !disc || !music) {
      console.warn('[AudioPlayer] Required elements not found. Check your HTML structure.');
      return;
    }

    let isPlaying = false;

    /* ── 1. Sync UI state ── */
    function syncUI() {
      disc.classList.toggle('ap-playing', isPlaying);
      disc.classList.toggle('ap-paused',  !isPlaying);
    }

    /* ── 2. Toggle play / pause ── */
    function togglePlay() {
      if (isPlaying) {
        music.pause();
      } else {
        music.play().catch(function (err) {
          console.warn('[AudioPlayer] Playback failed:', err);
        });
      }
    }

    /* ── 3. Click on disc → toggle (ignore cancel area) ── */
    disc.addEventListener('click', function (e) {
    //   if (cancelBtn.contains(e.target)) return;
      togglePlay();
    });

    /* ── 5. Restore dot ── */
    function spawnRestoreDot() {
      // Remove any existing dot first
      const existing = document.getElementById('ap-restore-dot');
      if (existing) existing.remove();

      const dot = document.createElement('div');
      dot.id = 'ap-restore-dot';
      dot.title = 'Restore music player';

      dot.addEventListener('click', function () {
        wrapper.classList.remove('ap-hidden');
        dot.remove();
        music.play().catch(function (err) {
          console.warn('[AudioPlayer] Resume failed:', err);
        });
      });

      document.body.appendChild(dot);
    }

    /* ── 6. Keep isPlaying in sync with native audio events ── */
    music.addEventListener('play',  function () { isPlaying = true;  syncUI(); });
    music.addEventListener('pause', function () { isPlaying = false; syncUI(); });
    music.addEventListener('ended', function () { isPlaying = false; syncUI(); });

    /* ── 7. Attempt autoplay on load ── */
    music.muted = true; // ← Start muted to bypass browser autoplay block
    music.play()
    .then(function () {
        music.muted = false; // ← Unmute immediately after playback starts
        console.log('[AudioPlayer] Autoplay started successfully.');
    })
    .catch(function () {
        // Autoplay blocked entirely — wait for first user interaction
        music.muted = false;
        isPlaying = false;
        syncUI();
        function unlockOnInteraction() {
        music.play().catch(function () {});
        document.removeEventListener('click',      unlockOnInteraction);
        document.removeEventListener('keydown',    unlockOnInteraction);
        document.removeEventListener('touchstart', unlockOnInteraction);
        }
        document.addEventListener('click',      unlockOnInteraction, { once: true });
        document.addEventListener('keydown',    unlockOnInteraction, { once: true });
        document.addEventListener('touchstart', unlockOnInteraction, { once: true, passive: true });
    });
    
    // Initial UI state
    syncUI();
  }

  /* ─────────────────────────────────────────────────────
     Boot: run after DOM is ready.
  ───────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();