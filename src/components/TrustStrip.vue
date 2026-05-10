<template>
  <div class="trust-strip">
    <div class="container trust-grid">
      <div v-for="item in t('trustStrip.items', [])" :key="item.value" class="trust-item">
        <span class="trust-value">{{ item.value }}</span>
        <span class="trust-label">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(184,136,90,0.04);
  padding: 20px 0;
}
.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
  padding: 8px;
  border-inline-end: 1px solid var(--line);
}
.trust-item:last-child { border-inline-end: none; }

.trust-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--brand);
  line-height: 1.2;
}
.trust-label {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.4;
}

@media (max-width: 640px) {
  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .trust-item:nth-child(2) { border-inline-end: none; }
  .trust-item { border-bottom: 1px solid var(--line); border-inline-end: none; padding-bottom: 12px; }
  .trust-item:nth-child(3),
  .trust-item:nth-child(4) { border-bottom: none; }
}
</style>
