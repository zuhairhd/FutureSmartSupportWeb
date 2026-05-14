<template>
  <footer class="site-footer">
    <div class="container footer-local">
      <p class="footer-tagline">{{ t('footer.tagline') }}</p>
      <p class="footer-location">
        <span>{{ t('footer.location') }}</span>
        <span class="footer-sep" aria-hidden="true">·</span>
        <span>{{ t('footer.contactLabel') }}
          <a href="mailto:majid@FutureSmartSupport.com" class="footer-email">majid@FutureSmartSupport.com</a>
        </span>
      </p>
    </div>
    <div class="container footer-inner">
      <p class="copyright">{{ copyright }}</p>
      <nav class="footer-links">
        <router-link to="/privacy">{{ t('footer.privacy') }}</router-link>
        <router-link to="/terms">{{ t('footer.terms') }}</router-link>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()
const year = new Date().getFullYear()
const copyright = computed(() => t('footer.copyright').replace('{year}', year))
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  padding: 28px 0 20px;
}

.footer-local {
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.footer-tagline {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 6px;
}

.footer-location {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  margin: 0;
}

.footer-sep { opacity: 0.4; }

.footer-email {
  color: var(--brand);
  transition: opacity 0.15s;
}
.footer-email:hover { opacity: 0.8; }
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.copyright {
  color: var(--muted);
  font-size: 14px;
  margin: 0;
}
.footer-links {
  display: flex;
  gap: 24px;
}
.footer-links a {
  color: var(--muted);
  font-size: 14px;
  transition: color 0.15s;
}
.footer-links a:hover {
  color: var(--brand);
  opacity: 1;
}
</style>
