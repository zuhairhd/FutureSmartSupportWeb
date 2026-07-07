<template>
  <section id="benefits" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('voicegateDemo.benefits.label') }}</p>
        <h2 class="section-title">{{ t('voicegateDemo.benefits.title') }}</h2>
      </div>
      <div class="vg-benefits-grid">
        <div v-for="benefit in t('voicegateDemo.benefits.list', [])" :key="benefit" class="card vg-benefit-card">
          <span class="check-wrap" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12">
              <path d="M2 6l3 3 5-5"/>
            </svg>
          </span>
          <p>{{ benefit }}</p>
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
.section-header { margin-bottom: 32px; }

.vg-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.vg-benefit-card {
  display: flex;
  align-items: center;
  gap: 12px;
}
.vg-benefit-card p {
  font-size: 15px;
  color: var(--fg);
  margin: 0;
  line-height: 1.5;
}

.check-wrap {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(111,191,115,0.15);
  border: 1px solid rgba(111,191,115,0.3);
  display: grid;
  place-items: center;
  color: var(--success);
}

@media (max-width: 900px) {
  .vg-benefits-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .vg-benefits-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 24px; }
}
</style>
