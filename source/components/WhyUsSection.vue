<template>
  <section id="why-us" class="section alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('whyUs.label') }}</p>
        <h2 class="section-title">{{ t('whyUs.title') }}</h2>
        <p class="section-sub">{{ t('whyUs.sub') }}</p>
      </div>
      <div class="advantages-grid">
        <div
          v-for="item in t('whyUs.advantages', [])"
          :key="item.title"
          class="advantage-card card"
        >
          <div class="adv-icon-wrap">
            <FeatureIcon :name="item.icon" />
          </div>
          <div class="adv-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
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

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.advantage-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: border-color 0.2s, background 0.2s;
}
.advantage-card:hover {
  border-color: rgba(184,136,90,0.35);
  background: var(--card-hover);
}

.adv-icon-wrap {
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

.adv-body h3 {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 6px;
}
.adv-body p {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .advantages-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .advantages-grid { grid-template-columns: 1fr; }
  .section-header { margin-bottom: 28px; }
}
</style>
