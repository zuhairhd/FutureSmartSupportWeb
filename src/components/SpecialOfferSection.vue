<template>
  <section id="offer" class="section offer-section">
    <div class="container offer-grid">
      <div class="offer-copy">
        <span class="offer-badge">{{ t('offer.badge') }}</span>
        <p class="section-label">{{ t('offer.label') }}</p>
        <h2 class="section-title">{{ t('offer.title') }}</h2>
        <div class="price-block">
          <span class="price-amount">{{ t('offer.price') }}</span>
          <span class="price-label">{{ t('offer.priceLabel') }}</span>
        </div>
        <p class="offer-sub">{{ t('offer.sub') }}</p>
        <p class="subscription-note">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" aria-hidden="true" class="note-icon"><circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.6" fill="currentColor" stroke="none"/></svg>
          {{ t('offer.subscriptionNote') }}
        </p>
        <div class="offer-ctas">
          <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary">
            {{ t('offer.ctaPrimary') }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-ghost">
            {{ t('offer.ctaSecondary') }}
          </router-link>
        </div>
      </div>

      <div class="offer-includes card">
        <p class="includes-title">{{ t('offer.includesTitle') }}</p>
        <ul class="includes-list">
          <li v-for="item in t('offer.includes', [])" :key="item">
            <span class="check-wrap" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12">
                <path d="M2 6l3 3 5-5"/>
              </svg>
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage.js'
const { t } = useLanguage()
</script>

<style scoped>
.offer-section {
  background: radial-gradient(ellipse 900px 400px at 50% 50%, rgba(184,136,90,0.07), transparent 70%);
}

.offer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.offer-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg, var(--brand), rgba(184,136,90,0.7));
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.price-block {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 20px 0 16px;
  flex-wrap: wrap;
}
.price-amount {
  font-size: 48px;
  font-weight: 800;
  color: var(--brand);
  line-height: 1;
  letter-spacing: -0.02em;
}
.price-label {
  font-size: 14px;
  color: var(--muted);
}

.offer-sub {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 16px;
}

.subscription-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
  margin: 0 0 28px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  border-radius: 10px;
}
.note-icon {
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--brand);
  opacity: 0.8;
}

.offer-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Includes card */
.offer-includes {
  padding: 28px;
  border-color: rgba(184,136,90,0.3);
  background: rgba(184,136,90,0.04);
}

.includes-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand);
  margin: 0 0 18px;
}

.includes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.includes-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--fg);
  line-height: 1.4;
}
.check-wrap {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(111,191,115,0.15);
  border: 1px solid rgba(111,191,115,0.3);
  display: grid;
  place-items: center;
  color: var(--success);
}

@media (max-width: 900px) {
  .offer-grid { grid-template-columns: 1fr; gap: 32px; }
  .price-amount { font-size: 40px; }
}
@media (max-width: 640px) {
  .offer-includes { padding: 20px 16px; }
  .price-amount { font-size: 36px; }
  .offer-ctas { flex-direction: column; }
  .offer-ctas .btn { text-align: center; justify-content: center; }
  .offer-sub { font-size: 15px; }
}
</style>
