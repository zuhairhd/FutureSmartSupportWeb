<template>
  <section id="how" class="section alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('howItWorks.label') }}</p>
        <h2 class="section-title">{{ t('howItWorks.title') }}</h2>
        <p class="section-sub">{{ t('howItWorks.sub') }}</p>
      </div>
      <div class="steps-grid">
        <div v-for="(step, index) in t('howItWorks.steps', [])" :key="index" class="step-card card">
          <div class="step-num">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.section-header { margin-bottom: 44px; }

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
}

/* Connecting line between steps */
.steps-grid::before {
  content: '';
  position: absolute;
  top: 34px;
  inset-inline-start: calc(33.33% - 16px);
  inset-inline-end: calc(33.33% - 16px);
  height: 1px;
  background: linear-gradient(90deg, var(--brand) 0%, var(--line) 50%, var(--brand) 100%);
  opacity: 0.4;
  pointer-events: none;
}
html[dir="rtl"] .steps-grid::before {
  background: linear-gradient(270deg, var(--brand) 0%, var(--line) 50%, var(--brand) 100%);
}

.step-card {
  position: relative;
  padding-top: 24px;
}
.step-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin: 14px 0 8px;
}
.step-card p {
  color: var(--muted);
  font-size: 15px;
  margin: 0;
  line-height: 1.65;
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--brand-dim);
  border: 1.5px solid var(--brand);
  color: var(--brand);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 15px;
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .steps-grid { grid-template-columns: 1fr; gap: 16px; }
  .steps-grid::before { display: none; }
}
</style>
