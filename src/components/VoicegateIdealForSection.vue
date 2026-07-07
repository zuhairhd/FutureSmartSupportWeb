<template>
  <section id="ideal-for" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('voicegateDemo.idealFor.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.idealFor.title') }}</h2>
      </div>
      <div class="vg-ideal-grid">
        <div v-for="item in t('voicegateDemo.idealFor.list', [])" :key="item.title" class="vg-ideal-item card">
          <div class="vg-ideal-icon-wrap">
            <FeatureIcon :name="item.icon" />
          </div>
          <p>{{ item.title }}</p>
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
.section-header { margin-bottom: 32px; }

.vg-ideal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.vg-ideal-item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.vg-ideal-item p {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
}

.vg-ideal-icon-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--brand-dim);
  border: 1px solid rgba(184,136,90,0.25);
  display: grid;
  place-items: center;
}

@media (max-width: 900px) {
  .vg-ideal-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .vg-ideal-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 24px; }
}
</style>
