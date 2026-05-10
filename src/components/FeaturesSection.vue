<template>
  <section id="features" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('features.label') }}</p>
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <p class="section-sub">{{ t('features.sub') }}</p>
      </div>
      <div class="features-grid">
        <div v-for="feature in t('features.list', [])" :key="feature.icon" class="feature-card card">
          <div class="feature-icon-wrap">
            <FeatureIcon :name="feature.icon" />
          </div>
          <div class="feature-body">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
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
.section-header { margin-bottom: 44px; }

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: border-color 0.2s, background 0.2s;
}
.feature-card:hover {
  border-color: rgba(184,136,90,0.35);
  background: var(--card-hover);
}

.feature-icon-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--brand-dim);
  border: 1px solid rgba(184,136,90,0.25);
  display: grid;
  place-items: center;
  margin-top: 2px;
}

.feature-body h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px;
}
.feature-body p {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 580px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
