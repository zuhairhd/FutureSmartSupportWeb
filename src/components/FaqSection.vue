<template>
  <section id="faq" class="section alt">
    <div class="container">
      <div class="section-header">
        <p class="section-label">{{ t('faq.label') }}</p>
        <h2 class="section-title">{{ t('faq.title') }}</h2>
        <p class="section-sub">{{ t('faq.sub') }}</p>
      </div>
      <div class="faq-list">
        <div
          v-for="(item, i) in t('faq.items', [])"
          :key="i"
          class="faq-item"
          :class="{ open: openIndex === i }"
          @click="toggle(i)"
        >
          <div class="faq-question">
            <span class="faq-q-text">{{ item.q }}</span>
            <span class="faq-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="16" height="16">
                <line x1="8" y1="3" x2="8" y2="13" class="vert-line"/>
                <line x1="3" y1="8" x2="13" y2="8"/>
              </svg>
            </span>
          </div>
          <div class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()
const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.section-header { margin-bottom: 44px; }

.faq-list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--card);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}
.faq-item:hover,
.faq-item.open {
  border-color: rgba(184,136,90,0.35);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
  user-select: none;
}
.faq-q-text {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
}

.faq-toggle-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--brand-dim);
  border: 1px solid rgba(184,136,90,0.2);
  display: grid;
  place-items: center;
  color: var(--brand);
  transition: background 0.2s;
}
.faq-item.open .faq-toggle-icon {
  background: rgba(184,136,90,0.15);
}
.vert-line {
  transition: transform 0.25s, opacity 0.2s;
  transform-origin: center;
}
.faq-item.open .vert-line {
  transform: scaleY(0);
  opacity: 0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.2s ease;
  padding: 0 20px;
}
.faq-item.open .faq-answer {
  max-height: 400px;
  padding: 0 20px 18px;
}
.faq-answer p {
  font-size: 15px;
  color: var(--muted);
  margin: 0;
  line-height: 1.7;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}

@media (max-width: 640px) {
  .faq-question { padding: 15px 16px; }
  .faq-q-text { font-size: 14px; }
  .faq-answer { padding: 0 16px; }
  .faq-item.open .faq-answer { padding: 0 16px 15px; }
  .faq-answer p { font-size: 14px; }
  .section-header { margin-bottom: 28px; }
}
</style>
