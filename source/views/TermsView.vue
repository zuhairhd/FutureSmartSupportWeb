<template>
  <div class="legal-page">
    <div class="container legal-container">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        {{ t('terms.backHome') }}
      </router-link>

      <h1>{{ t('terms.title') }}</h1>
      <p class="last-updated">{{ t('terms.lastUpdated') }}</p>
      <p class="intro">{{ t('terms.intro') }}</p>

      <div v-for="section in t('terms.sections', [])" :key="section.title" class="legal-section">
        <h2>{{ section.title }}</h2>
        <p>{{ section.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.legal-page {
  min-height: 80vh;
  padding: 80px 0 60px;
}
.legal-container {
  max-width: 800px;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--brand);
  font-size: 14px;
  margin-bottom: 32px;
  transition: opacity 0.15s;
}
.back-link:hover { opacity: 0.75; }

h1 {
  font-size: 36px;
  font-weight: 700;
  color: var(--brand);
  margin: 0 0 8px;
}
.last-updated {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 24px;
}
.intro {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}
.legal-section {
  margin-bottom: 28px;
}
.legal-section h2 {
  font-size: 18px;
  font-weight: 600;
  color: var(--fg);
  margin: 0 0 10px;
}
.legal-section p {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.75;
  margin: 0;
}
</style>
