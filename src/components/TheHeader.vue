<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="container header-inner">
      <router-link to="/" class="logo-link" @click="close">
        <img src="/assets/FSS_Logo.svg" alt="Future Smart Support" class="logo" />
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link :to="{ path: '/', hash: '#about' }" @click="close">{{ t('nav.about') }}</router-link>
        <router-link :to="{ path: '/', hash: '#how' }" @click="close">{{ t('nav.howItWorks') }}</router-link>
        <router-link :to="{ path: '/', hash: '#features' }" @click="close">{{ t('nav.features') }}</router-link>
        <router-link :to="{ path: '/', hash: '#industries' }" @click="close">{{ t('nav.industries') }}</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary nav-cta" @click="close">
          {{ t('nav.requestDemo') }}
        </router-link>
        <button class="lang-toggle" @click="toggleLang">{{ t('nav.switchLang') }}</button>
      </nav>

      <div class="header-actions">
        <button class="lang-toggle" @click="toggleLang">{{ t('nav.switchLang') }}</button>
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

/* Lang toggle inside nav — hidden on desktop (shown in header-actions) */
.nav .lang-toggle { display: none; }

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
  transition: all 0.2s;
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

@media (max-width: 820px) {
  .hamburger { display: flex; }
  .header-actions .lang-toggle { display: none; }
  .nav .lang-toggle { display: block; }
  /* Reduce logo on tablet */
  .logo { height: 36px; }

  .nav {
    position: fixed;
    top: 68px;
    inset-inline-start: 0;
    inset-inline-end: 0;
    bottom: 0;
    background: var(--bg);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    border-top: 1px solid var(--line);
    /* Prevent the off-screen nav from contributing to scroll width */
    overflow: hidden;
  }
  html[dir="rtl"] .nav {
    transform: translateX(-100%);
  }
  .nav.open {
    transform: translateX(0) !important;
  }
  .nav a { font-size: 18px; opacity: 0.9; }
  .nav-cta { font-size: 15px !important; padding: 12px 24px; }
  .nav .lang-toggle { font-size: 15px; padding: 10px 20px; }
}

@media (max-width: 480px) {
  .logo { height: 30px; }
  .header-inner { min-height: 60px; gap: 10px; }
  /* Keep nav top aligned with actual header height */
  .nav { top: 60px; }
}
</style>
