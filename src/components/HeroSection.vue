<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="hero-eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1>
          {{ t('hero.headline') }}
          <span class="accent"> {{ t('hero.headlineAccent') }}</span>
        </h1>
        <p class="hero-sub">{{ t('hero.sub') }}</p>
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <div class="cta-row">
          <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary">
            {{ t('hero.ctaPrimary') }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#how' }" class="btn btn-ghost">
            {{ t('hero.ctaSecondary') }}
          </router-link>
        </div>
        <ul class="badges">
          <li v-for="badge in t('hero.badges', [])" :key="badge">{{ badge }}</li>
        </ul>
      </div>

      <div class="hero-panel">
        <div class="card hero-card">
          <div class="card-status-bar">
            <span class="status-dot"></span>
            <span class="status-text">{{ t('hero.cardStatus') }}</span>
          </div>
          <p class="card-title">{{ t('hero.cardTitle') }}</p>
          <ul class="checklist">
            <li v-for="item in t('hero.cardItems', [])" :key="item">{{ item }}</li>
          </ul>
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
.hero {
  padding: 80px 0 64px;
  background: radial-gradient(ellipse 1200px 500px at 20% -5%, rgba(184,136,90,0.12), transparent 70%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.hero-eyebrow {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand);
  font-weight: 600;
  margin: 0 0 14px;
}

h1 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.12;
  margin: 0 0 18px;
  letter-spacing: -0.02em;
}
.accent { color: var(--brand); }

.hero-sub {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.7;
  margin: 0 0 12px;
  max-width: 520px;
}

.hero-tagline {
  font-size: 14px;
  color: var(--brand);
  font-weight: 500;
  margin: 0 0 28px;
  opacity: 0.9;
}

.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  align-items: center;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.badges li {
  border: 1px solid var(--line);
  padding: 5px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  background: rgba(255,255,255,0.02);
}

/* Hero card */
.hero-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card-status-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 3px rgba(111,191,115,0.2);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(111,191,115,0.2); }
  50% { box-shadow: 0 0 0 6px rgba(111,191,115,0.08); }
}
.status-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
}
.card-title {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 32px; }
  h1 { font-size: 34px; }
  .hero-sub { font-size: 16px; max-width: none; }
  .hero { padding: 56px 0 44px; }
}
@media (max-width: 640px) {
  h1 { font-size: 28px; }
  .hero { padding: 44px 0 36px; }
  .cta-row { flex-direction: column; align-items: stretch; }
  .cta-row .btn { text-align: center; justify-content: center; }
  .hero-sub { font-size: 15px; }
}
</style>
