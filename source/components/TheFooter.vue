<template>
  <footer class="site-footer">
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
  padding: 28px 0;
}
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
