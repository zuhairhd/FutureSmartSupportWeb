import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { PACKAGE, INSTALLATION, TOTAL, VAT, omr, omr3 } from './src/pricing.js'

// Fills __PKG__-style tokens in index.html (meta tags + JSON-LD) from pricing.json.
function pricingHtml() {
  const tokens = {
    __PKG__: omr(PACKAGE), __INST__: omr(INSTALLATION), __TOTAL__: omr(TOTAL),
    __PKG3__: omr3(PACKAGE), __INST3__: omr3(INSTALLATION), __TOTAL3__: omr3(TOTAL),
    __VAT_EN__: VAT.en.statement,
  }
  for (const [k, v] of Object.entries(tokens)) {
    if (/["<>&\\]/.test(v)) throw new Error(`pricing value for ${k} contains characters unsafe for index.html: ${v}`)
  }
  return {
    name: 'fss-pricing-html',
    transformIndexHtml: html => html.replace(/__(PKG3?|INST3?|TOTAL3?|VAT_EN)__/g, m => tokens[m]),
  }
}

export default defineConfig({
  plugins: [vue(), pricingHtml()],
  base: '/',
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }
})
