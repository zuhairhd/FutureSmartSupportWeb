<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="container header-inner">
      <router-link to="/" class="logo-link" @click="close">
        <img src="/assets/FSS_Logo.svg" alt="Future Smart Support" class="logo" />
      </router-link>

      <!-- Desktop nav: inline flex row. Mobile nav: dropdown panel below header. -->
      <nav class="nav" :class="{ open: menuOpen }">
        <router-link :to="{ path: '/', hash: '#how' }" @click="close">{{ t('nav.howItWorks') }}</router-link>
        <router-link :to="{ path: '/', hash: '#features' }" @click="close">{{ t('nav.features') }}</router-link>
        <router-link :to="{ path: '/', hash: '#offer' }" @click="close">{{ t('nav.offer') }}</router-link>
        <router-link :to="{ path: '/', hash: '#industries' }" @click="close">{{ t('nav.industries') }}</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary nav-cta" @click="close">
          {{ t('nav.requestDemo') }}
        </router-link>
      </nav>

      <!--
        header-actions DOM order: [lang-toggle] then [hamburger].
        In RTL flex the visual order reverses to [hamburger][lang-toggle][logo].
        In LTR the visual order is [logo][lang-toggle][hamburger].
        Both match the requested mobile layout with no JS needed.
      -->
      <div class="header-actions">
        <button class="lang-toggle" @click="toggleLang" :aria-label="t('nav.switchLang')">
          {{ t('nav.switchLang') }}
        </button>
        <button
          class="hamburger"
          :class="{ active: menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, lang, setLang } = useLanguage()
const menuOpen = ref(false)
const scrolled = ref(false)

function close() { menuOpen.value = false }
function toggleLang() { setLang(lang.value === 'ar' ? 'en' : 'ar') }
function onScroll() { scrolled.value = window.scrollY > 10 }
function onKey(e) { if (e.key === 'Escape') menuOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
/* ─── SHARED / DESKTOP ────────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  backdrop-filter: saturate(180%) blur(10px);
  background: rgba(15, 15, 16, 0.92);
  border-bottom: 1px solid var(--line);
  z-index: 100;
  transition: box-shadow 0.25s;
}
.site-header.scrolled {
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  gap: 16px;
}

.logo-link { display: flex; align-items: center; flex-shrink: 0; }
.logo { height: 42px; width: auto; }

/* Desktop nav: horizontal flex row */
.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}
.nav a {
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.15s;
}
.nav a:hover { opacity: 1; }
.nav .router-link-active:not(.btn) { color: var(--brand); opacity: 1; }
.nav-cta { margin-inline-start: 4px; font-size: 14px !important; }

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-toggle {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--muted);
  font-family: inherit;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}
.lang-toggle:hover {
  border-color: var(--brand);
  color: var(--brand);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 6px;
  border-radius: 8px;
  flex-shrink: 0;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--fg);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.2s;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── MOBILE ≤820px ───────────────────────────────────── */
@media (max-width: 820px) {
  .logo { height: 36px; }
  .hamburger { display: flex; }

  /*
    Lang toggle stays visible in the header bar on mobile.
    No longer hidden. Sits between logo and hamburger due to flex direction.
  */
  .lang-toggle {
    font-size: 12px;
    padding: 6px 11px;
    border-color: rgba(184, 136, 90, 0.4);
    color: var(--brand);
  }
  .lang-toggle:hover {
    border-color: var(--brand);
    background: var(--brand-dim);
  }

  /*
    Nav becomes a dropdown panel anchored to the bottom of the sticky header.
    position: absolute relative to .site-header (position: sticky = containing block).
    Animates in with opacity + slight upward translate.
  */
  .nav {
    position: absolute;
    top: 100%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    background: rgba(15, 15, 16, 0.98);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0;
    /* Hidden state */
    opacity: 0;
    transform: translateY(-6px);
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .nav.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* Text nav links: full-width rows with border separators */
  .nav a:not(.nav-cta) {
    display: block;
    padding: 15px 20px;
    font-size: 16px;
    opacity: 0.85;
    border-bottom: 1px solid var(--line);
    font-weight: 400;
  }
  .nav a:not(.nav-cta):hover { opacity: 1; color: var(--brand); }
  .nav .router-link-active:not(.btn) { color: var(--brand); opacity: 1; }

  /* CTA button: inset from edges with top/bottom breathing room */
  .nav .nav-cta {
    display: flex;
    margin-top: 14px;
    margin-bottom: 16px;
    margin-inline-start: 20px;
    margin-inline-end: 20px;
    justify-content: center;
    font-size: 15px !important;
  }
}

/* ─── VERY SMALL ≤480px ───────────────────────────────── */
@media (max-width: 480px) {
  .logo { height: 30px; }
  .header-inner { min-height: 60px; gap: 8px; }
}
</style>
