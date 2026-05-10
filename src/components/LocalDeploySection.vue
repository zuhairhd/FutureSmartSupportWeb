<template>
  <section id="about" class="section local-deploy-section">
    <div class="container local-deploy-grid">
      <div class="deploy-copy">
        <p class="section-label">{{ t('localDeploy.label') }}</p>
        <h2 class="section-title">{{ t('localDeploy.title') }}</h2>
        <p class="deploy-sub">{{ t('localDeploy.sub') }}</p>
        <ul class="deploy-points">
          <li v-for="point in t('localDeploy.points', [])" :key="point">
            <span class="point-dot"></span>{{ point }}
          </li>
        </ul>
        <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-primary deploy-cta">
          {{ t('localDeploy.cta') }}
        </router-link>
      </div>

      <div class="deploy-visual">
        <div class="server-badge">{{ t('localDeploy.badge') }}</div>
        <div class="server-card">
          <div class="server-header">
            <div class="server-dot-group">
              <span class="sdot red"></span>
              <span class="sdot yellow"></span>
              <span class="sdot green"></span>
            </div>
            <span class="server-header-label">{{ t('localDeploy.serverLabel') }}</span>
          </div>
          <div class="server-body">
            <div class="server-product-row">
              <span class="server-product-name">{{ t('localDeploy.serverProduct') }}</span>
              <span class="server-active-badge">
                <span class="server-active-dot"></span>
                {{ t('localDeploy.serverStatus') }}
              </span>
            </div>
            <div class="server-bars">
              <div class="bar-row">
                <span class="bar-label">CPU</span>
                <div class="bar-track"><div class="bar-fill" style="width:28%"></div></div>
              </div>
              <div class="bar-row">
                <span class="bar-label">RAM</span>
                <div class="bar-track"><div class="bar-fill" style="width:41%"></div></div>
              </div>
              <div class="bar-row">
                <span class="bar-label">NET</span>
                <div class="bar-track"><div class="bar-fill" style="width:62%"></div></div>
              </div>
            </div>
          </div>
          <div class="server-footer">
            <span class="data-label">
              <span class="lock-icon">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" width="12" height="12">
                  <rect x="2" y="6" width="10" height="7" rx="1.5"/>
                  <path d="M4.5 6V4a2.5 2.5 0 0 1 5 0v2"/>
                </svg>
              </span>
              Data stays inside your network
            </span>
          </div>
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
.local-deploy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.deploy-sub {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 24px;
}

.deploy-points {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.deploy-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: var(--fg);
}
.point-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand);
  flex-shrink: 0;
}

.deploy-cta { align-self: flex-start; }

/* Server Visual */
.deploy-visual {
  position: relative;
}

.server-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand);
  background: var(--brand-dim);
  border: 1px solid rgba(184,136,90,0.3);
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
}

.server-card {
  background: var(--card);
  border: 1px solid rgba(184,136,90,0.3);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(184,136,90,0.08), 0 0 0 1px var(--line);
}

.server-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(184,136,90,0.06);
  border-bottom: 1px solid var(--line);
}
.server-dot-group { display: flex; gap: 6px; }
.sdot { width: 10px; height: 10px; border-radius: 50%; }
.sdot.red { background: #e05c5c; opacity: 0.7; }
.sdot.yellow { background: #d4a029; opacity: 0.7; }
.sdot.green { background: var(--success); opacity: 0.7; }
.server-header-label { font-size: 12px; color: var(--muted); font-weight: 500; }

.server-body { padding: 18px 16px 14px; }

.server-product-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
}
.server-product-name { font-weight: 700; font-size: 15px; }
.server-active-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--success);
  background: rgba(111,191,115,0.12);
  border: 1px solid rgba(111,191,115,0.25);
  padding: 3px 8px;
  border-radius: 999px;
  font-weight: 500;
}
.server-active-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse-sm 2s infinite;
}
@keyframes pulse-sm {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.server-bars { display: flex; flex-direction: column; gap: 10px; }
.bar-row { display: flex; align-items: center; gap: 10px; }
.bar-label { font-size: 11px; color: var(--muted); width: 28px; flex-shrink: 0; font-weight: 500; }
.bar-track { flex: 1; height: 5px; background: var(--line); border-radius: 999px; overflow: hidden; }
.bar-fill { height: 100%; background: linear-gradient(90deg, var(--brand), rgba(184,136,90,0.6)); border-radius: 999px; }
html[dir="rtl"] .bar-fill { background: linear-gradient(270deg, var(--brand), rgba(184,136,90,0.6)); }

.server-footer {
  padding: 10px 16px 14px;
  border-top: 1px solid var(--line);
}
.data-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--muted);
}
.lock-icon { color: var(--brand); display: flex; }

@media (max-width: 900px) {
  .local-deploy-grid { grid-template-columns: 1fr; gap: 36px; }
}
</style>
