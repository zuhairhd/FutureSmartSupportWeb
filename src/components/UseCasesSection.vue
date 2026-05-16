<template>
  <section id="industries" class="section alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('industries.label') }}</p>
        <h2 class="section-title">{{ t('industries.title') }}</h2>
        <p class="section-sub">{{ t('industries.sub') }}</p>
      </div>
      <div class="industries-grid">
        <div v-for="(industry, index) in t('industries.list', [])" :key="index" class="industry-card card">
          <div class="industry-icon-wrap">
            <FeatureIcon :name="industry.icon" />
          </div>
          <div class="industry-body">
            <h3>{{ industry.title }}</h3>
            <p>{{ industry.desc }}</p>
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

.industries-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.industry-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: border-color 0.2s, background 0.2s;
}
.industry-card:hover {
  border-color: rgba(184,136,90,0.35);
  background: var(--card-hover);
}

.industry-icon-wrap {
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

.industry-body h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px;
}
.industry-body p {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .industries-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .industries-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 28px; }
}
</style>
