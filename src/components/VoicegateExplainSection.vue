<template>
  <section id="how" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('voicegateDemo.explain.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.explain.title') }}</h2>
        <p class="section-sub">{{ t('voicegateDemo.explain.sub') }}</p>
      </div>

      <div class="vg-components-grid">
        <div class="card vg-component-card">
          <h3>{{ t('voicegateDemo.explain.localServer.title') }}</h3>
          <p>{{ t('voicegateDemo.explain.localServer.desc') }}</p>
        </div>
        <div class="card vg-component-card">
          <h3>{{ t('voicegateDemo.explain.portal.title') }}</h3>
          <p>{{ t('voicegateDemo.explain.portal.desc') }}</p>
        </div>
      </div>

      <ul class="checklist vg-points">
        <li v-for="point in t('voicegateDemo.explain.points', [])" :key="point">{{ point }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.section-header { max-width: 640px; margin-bottom: 36px; }

.vg-components-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}

.vg-component-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 10px;
  color: var(--brand);
}
.vg-component-card p {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.65;
  margin: 0;
}

.vg-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 10px;
  max-width: 780px;
}

@media (max-width: 900px) {
  .vg-components-grid { grid-template-columns: 1fr; gap: 14px; }
}
@media (max-width: 640px) {
  .vg-points { grid-template-columns: 1fr; }
}
</style>
