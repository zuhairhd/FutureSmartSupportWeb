<template>
  <TheHeader />
  <main id="main-content"><router-view /></main>
  <TheFooter />
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { useLanguage } from './composables/useLanguage.js'
import { PACKAGE, omr } from './pricing.js'
const P = omr(PACKAGE)
const { lang, setLang } = useLanguage()
const route = useRoute()
onMounted(() => {
  const saved = localStorage.getItem('fss-lang')
  setLang(saved === 'en' ? 'en' : 'ar')
})
watch([lang, () => route.path], ([l, path]) => {
  document.title = path === '/voicegate-demo'
    ? (l === 'ar' ? 'اطلب تجربة مُجيب | Future Smart Support' : 'Request a MOJEEB Demo | Future Smart Support')
    : (l === 'ar' ? `مُجيب | رد ذكي وسنترال داخلي بـ ${P} ر.ع | Future Smart Support` : `MOJEEB | AI Call Answering + In-house PBX for OMR ${P} | Future Smart Support`)
}, { immediate: true })
</script>
<style>
main { min-height:65vh; }
</style>
