<template>
  <section id="portal" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('voicegateDemo.portalPreview.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.portalPreview.title') }}</h2>
        <p class="section-sub">{{ t('voicegateDemo.portalPreview.sub') }}</p>
      </div>
      <div class="vg-portal-grid">
        <div v-for="card in t('voicegateDemo.portalPreview.cards', [])" :key="card.title" class="card vg-portal-card">
          <div class="vg-portal-icon-wrap">
            <FeatureIcon :name="card.icon" />
          </div>
          <h3>{{ card.title }}</h3>
          <p>{{ card.desc }}</p>
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
.section-header { margin-bottom: 36px; }

.vg-portal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.vg-portal-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vg-portal-icon-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--brand-dim);
  border: 1px solid rgba(184,136,90,0.25);
  display: grid;
  place-items: center;
}

.vg-portal-card h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
}
.vg-portal-card p {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .vg-portal-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .vg-portal-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 28px; }
}
</style>
