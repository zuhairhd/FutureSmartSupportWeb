<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { useLanguage } from './composables/useLanguage.js'

const { lang, setLang } = useLanguage()

onMounted(() => {
  const saved = localStorage.getItem('fss-lang') || 'ar'
  setLang(saved)
})

watch(lang, (l) => {
  document.title = l === 'ar'
    ? 'فيوتشر سمارت سبورت — مساعد صوتي ذكي للأعمال'
    : 'Future Smart Support — AI Voice Receptionist for Business'
})
</script>

<style>
main { min-height: 70vh; }
</style>
