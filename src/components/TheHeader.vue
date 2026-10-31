<template>
  <a class="skip-link" href="#main-content">{{ c.skip }}</a>
  <header class="site-header" :class="{ scrolled }">
    <div class="container header-inner">
      <router-link to="/" class="brand-link" @click="closeMenu" aria-label="Future Smart Support">
        <img :src="logoUrl" alt="Future Smart Support — Mojeeb AI" class="brand-logo" width="589" height="200" />
        <span class="brand-product">{{ c.product }}</span>
      </router-link>
      <nav id="fss-primary-navigation" class="site-nav" :class="{ open: menuOpen }" :aria-label="c.navLabel">
        <router-link :to="{path:'/',hash:'#features'}" @click="closeMenu">{{ c.benefits }}</router-link>
        <router-link :to="{path:'/',hash:'#package'}" @click="closeMenu">{{ c.pkg }}</router-link>
        <router-link :to="{path:'/',hash:'#how'}" @click="closeMenu">{{ c.how }}</router-link>
        <router-link :to="{path:'/',hash:'#offer'}" @click="closeMenu">{{ c.offer }}</router-link>
        <router-link :to="{path:'/',hash:'#faq'}" @click="closeMenu">{{ c.faq }}</router-link>
        <router-link class="header-demo" :to="{path: route.path === '/voicegate-demo' ? '/voicegate-demo' : '/', hash:'#demo'}" @click="closeMenu">{{ c.demo }}</router-link>
      </nav>
      <div class="header-controls">
        <button class="language-button" @click="toggleLanguage" :aria-label="c.switchLabel">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 6 5 12 0 18M12 3c-5 6-5 12 0 18"/></svg>
          {{ c.switchText }}
        </button>
        <button class="menu-button" :aria-label="c.menu" :aria-expanded="menuOpen" aria-controls="fss-primary-navigation" @click="menuOpen=!menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '../composables/useLanguage.js'
import logoUrl from '../../assets/FSS_Logo_light.png'
const { lang, setLang } = useLanguage()
const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)
const c = computed(() => lang.value === 'ar'
  ? {skip:'انتقل إلى المحتوى',product:'مُجيب',navLabel:'القائمة الرئيسية',benefits:'المزايا',pkg:'الباقة',how:'كيف يعمل',offer:'العرض',faq:'الأسئلة الشائعة',demo:'اطلب عرضًا توضيحيًا',switchLabel:'Switch language to English',switchText:'English',menu:'فتح القائمة'}
  : {skip:'Skip to content',product:'MOJEEB',navLabel:'Main navigation',benefits:'Benefits',pkg:'Package',how:'How it works',offer:'Offer',faq:'FAQ',demo:'Request a Demo',switchLabel:'التبديل إلى العربية',switchText:'العربية',menu:'Toggle navigation'})
function closeMenu() { menuOpen.value = false }
function toggleLanguage() { setLang(lang.value === 'ar' ? 'en' : 'ar'); closeMenu() }
function onScroll() { scrolled.value = window.scrollY > 8 }
function onKeydown(e) { if (e.key === 'Escape') closeMenu() }
onMounted(() => { window.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('keydown',onKeydown); onScroll() })
onUnmounted(() => { window.removeEventListener('scroll',onScroll); window.removeEventListener('keydown',onKeydown) })
</script>
<style scoped>
.site-header { position:sticky; top:0; z-index:100; background:rgba(5,25,45,.97); color:#fff; border-bottom:1px solid rgba(126,208,230,.16); backdrop-filter:blur(15px); transition:box-shadow .2s; }
.site-header.scrolled { box-shadow:0 12px 40px rgba(4,23,35,.24); }
.header-inner { display:flex; align-items:center; min-height:80px; gap:26px; }
.brand-link { display:flex; align-items:center; gap:12px; flex-shrink:0; }
.brand-logo { height:44px; width:auto; }
.brand-product { color:#38d9d1; font-size:12px; font-weight:800; padding-inline-start:12px; border-inline-start:1px solid rgba(169,218,235,.3); line-height:1.2; white-space:nowrap; }
.site-nav { display:flex; align-items:center; justify-content:flex-end; flex:1; gap:clamp(12px,1.8vw,25px); }
.site-nav>a { font-size:12px; font-weight:700; white-space:nowrap; color:#c9e1e8; transition:color .2s; }
.site-nav>a:hover { color:#3fe0d6; opacity:1; }
.site-nav .header-demo { background:linear-gradient(125deg,#3ad9cf,#00b8ad); color:#052940; padding:11px 14px; border-radius:10px; font-size:12px; }
.header-controls { display:flex; align-items:center; gap:10px; flex-shrink:0; }
.language-button { display:flex; align-items:center; gap:6px; background:transparent; color:#d5ebf0; border:1px solid rgba(169,218,235,.3); border-radius:9px; padding:8px 11px; font-size:12px; font-weight:700; }
.language-button:hover { border-color:#38d9d1; color:#38d9d1; }
.menu-button { display:none; align-items:center; justify-content:center; flex-direction:column; gap:5px; width:39px; height:39px; border:1px solid rgba(169,218,235,.3); border-radius:9px; background:transparent; }
.menu-button span { display:block; width:19px; height:2px; background:#fff; border-radius:2px; }
@media(max-width:1090px) { .brand-logo { height:38px; } .site-nav { gap:13px; } .header-inner { gap:17px; } }
@media(max-width:960px) {
  .header-inner { min-height:71px; }
  .site-nav { position:absolute; top:100%; inset-inline:0; padding:15px 22px 22px; background:#061d34; border-bottom:1px solid rgba(126,208,230,.25); display:none; flex-direction:column; align-items:stretch; gap:0; box-shadow:0 25px 35px rgba(0,0,0,.2); }
  .site-nav.open { display:flex; }
  .site-nav>a { font-size:15px; padding:13px 9px; white-space:normal; border-bottom:1px solid rgba(255,255,255,.08); }
  .site-nav .header-demo { margin-top:14px; padding:14px; text-align:center; border:0; }
  .header-controls { margin-inline-start:auto; } .menu-button { display:flex; }
}
@media(max-width:430px) { .brand-logo { height:32px; }.brand-product { display:none; }.header-inner { gap:9px; }.language-button { padding:7px; font-size:11px; }.language-button svg { display:none; } }
</style>
