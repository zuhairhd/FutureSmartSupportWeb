<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" :stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feature-icon-svg" aria-hidden="true">
    <template v-if="name === 'clock'">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </template>
    <template v-else-if="name === 'server'">
      <rect x="2" y="2" width="20" height="8" rx="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2"/>
      <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="18" r="1" fill="currentColor" stroke="none"/>
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </template>
    <template v-else-if="name === 'layout'">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </template>
    <template v-else-if="name === 'bell'">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </template>
    <template v-else-if="name === 'mic'">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </template>
    <template v-else-if="name === 'chart'">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </template>
    <template v-else-if="name === 'star'">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </template>
  </svg>
</template>

<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<style scoped>
.feature-icon-svg {
  width: 22px;
  height: 22px;
  color: var(--brand);
  flex-shrink: 0;
}
</style>
