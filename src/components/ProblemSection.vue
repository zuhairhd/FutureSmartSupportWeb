<template>
  <section id="problem" class="section problem-section">
    <div class="container">
      <div class="problem-header">
        <p class="section-label">{{ t('problem.label') }}</p>
        <h2 class="section-title problem-title">{{ t('problem.title') }}</h2>
        <p class="section-sub">{{ t('problem.sub') }}</p>
      </div>
      <div class="pains-grid">
        <div v-for="pain in t('problem.pains', [])" :key="pain.title" class="pain-card card">
          <div class="pain-icon-wrap">
            <FeatureIcon :name="pain.icon" />
          </div>
          <div class="pain-body">
            <h3>{{ pain.title }}</h3>
            <p>{{ pain.desc }}</p>
          </div>
        </div>
      </div>
      <div class="problem-bridge">
        <div class="bridge-inner">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18" aria-hidden="true" class="bridge-icon"><path d="M10 1.5l8 3.5v5c0 4.5-3.3 7.5-8 9-4.7-1.5-8-4.5-8-9V5l8-3.5z"/></svg>
          <p>{{ t('problem.solution') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import FeatureIcon from './FeatureIcon.vue'
const { t } = useLanguage()
</script>

<style scoped>
.problem-section {
  background: linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 60%);
}

.problem-header {
  margin-bottom: 44px;
}

.problem-title {
  max-width: 600px;
}

.pains-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.pain-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border-color: rgba(224, 92, 92, 0.15);
  transition: border-color 0.2s, background 0.2s;
}
.pain-card:hover {
  border-color: rgba(224, 92, 92, 0.3);
  background: var(--card-hover);
}

.pain-icon-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(224, 92, 92, 0.1);
  border: 1px solid rgba(224, 92, 92, 0.2);
  display: grid;
  place-items: center;
  margin-top: 2px;
}
.pain-icon-wrap :deep(.feature-icon-svg) {
  color: #e05c5c;
}

.pain-body h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px;
}
.pain-body p {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

/* Bridge / solution callout */
.problem-bridge {
  border-top: 1px solid var(--line);
  padding-top: 36px;
}
.bridge-inner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--brand-dim);
  border: 1px solid rgba(184, 136, 90, 0.3);
  border-radius: 14px;
  padding: 20px 24px;
  max-width: 700px;
}
.bridge-icon {
  color: var(--brand);
  flex-shrink: 0;
  margin-top: 2px;
}
.bridge-inner p {
  margin: 0;
  font-size: 15px;
  color: var(--fg);
  line-height: 1.65;
  font-weight: 500;
}

@media (max-width: 640px) {
  .pains-grid { grid-template-columns: 1fr; }
  .problem-header { margin-bottom: 28px; }
  .bridge-inner { padding: 16px 18px; }
  .bridge-inner p { font-size: 14px; }
}
</style>
