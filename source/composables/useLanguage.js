import { ref, computed } from 'vue'
import ar from '../i18n/ar.js'
import en from '../i18n/en.js'

const dictionaries = { ar, en }

// Module-level singleton — shared across all component instances
const lang = ref('ar')

export function useLanguage() {
  const isRTL = computed(() => lang.value === 'ar')

  function setLang(l) {
    lang.value = l
    localStorage.setItem('fss-lang', l)
    document.documentElement.setAttribute('lang', l)
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr')
  }

  function t(key, fallback) {
    const keys = key.split('.')
    let val = dictionaries[lang.value]
    for (const k of keys) {
      if (val == null) return fallback ?? key
      val = val[k]
    }
    return val ?? fallback ?? key
  }

  return { lang, isRTL, setLang, t }
}
