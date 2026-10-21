<template>
  <footer class="fss-footer">
    <div class="container footer-main">
      <div class="footer-brand">
        <div class="footer-logo"><img :src="logoUrl" alt="Future Smart Support" width="589" height="200" /><small>{{ c.tagline }}</small></div>
        <p>{{ c.description }}</p>
      </div>
      <div class="footer-column"><b>{{ c.explore }}</b>
        <router-link :to="{path:'/',hash:'#offer'}">{{ c.offer }}</router-link>
        <router-link :to="{path:'/',hash:'#features'}">{{ c.benefits }}</router-link>
        <router-link :to="{path:'/',hash:'#pbx'}">{{ c.pbx }}</router-link>
        <router-link :to="{path:'/',hash:'#faq'}">{{ c.faq }}</router-link>
        <router-link :to="{path:'/',hash:'#demo'}">{{ c.demo }}</router-link>
        <router-link to="/voicegate-demo">{{ c.mojebPage }}</router-link>
        <router-link :to="{path:'/',hash:'#contact'}">{{ c.contactForm }}</router-link>
      </div>
      <div class="footer-column"><b>{{ c.contact }}</b>
        <a :href="whatsappHref(lang)" target="_blank" rel="noopener noreferrer">{{ c.whatsapp }} <bdi dir="ltr">+968 9277 1730</bdi></a>
        <a href="mailto:majid@FutureSmartSupport.com">majid@FutureSmartSupport.com</a>
        <span>{{ c.location }}</span>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ year }} Future Smart Support. {{ c.rights }}</span>
      <nav :aria-label="c.legal"><router-link to="/privacy">{{ c.privacy }}</router-link><router-link to="/terms">{{ c.terms }}</router-link></nav>
    </div>
  </footer>
</template>
<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { whatsappHref } from '../pricing.js'
import logoUrl from '../../assets/FSS_Logo_light.png'
const { lang } = useLanguage()
const year = new Date().getFullYear()
const c = computed(() => lang.value === 'ar'
  ? {tagline:'مُجيب · رد ذكي وسنترال داخلي',description:'حلول عملية لاتصالات العملاء تناسب الأعمال الصغيرة والمتوسطة في سلطنة عُمان.',explore:'استكشف',faq:'الأسئلة الشائعة',offer:'العرض',benefits:'المزايا',pbx:'السنترال الداخلي',demo:'اطلب عرضًا توضيحيًا',mojebPage:'صفحة العرض التوضيحي',contactForm:'نموذج التواصل',whatsapp:'واتساب',contact:'تواصل معنا',location:'مسقط، سلطنة عُمان',rights:'جميع الحقوق محفوظة.',privacy:'الخصوصية',terms:'الشروط والأحكام',legal:'الروابط القانونية'}
  : {tagline:'MOJEEB · AI answering + an in-house PBX',description:'Practical customer communication solutions for small and growing businesses in Oman.',explore:'Explore',faq:'FAQ',offer:'The offer',benefits:'Benefits',pbx:'In-house PBX',demo:'Request a Demo',mojebPage:'MOJEEB demo page',contactForm:'Contact form',whatsapp:'WhatsApp',contact:'Get in touch',location:'Muscat, Sultanate of Oman',rights:'All rights reserved.',privacy:'Privacy',terms:'Terms',legal:'Legal links'})
</script>
<style scoped>
.fss-footer { background:#05192e; color:#fff; padding:57px 0 21px; }
.footer-main { display:grid; grid-template-columns:1.6fr .7fr 1fr; gap:70px; padding-bottom:50px; }
.footer-logo { display:flex; flex-direction:column; align-items:flex-start; gap:12px; }
.footer-logo img { height:52px; width:auto; }.footer-logo small { font-size:12px; color:#42ddd4; font-weight:700; }
.footer-brand p { max-width:330px; color:#97b6c7; font-size:13px; line-height:1.8; margin-top:19px; }
.footer-column { display:flex; flex-direction:column; align-items:flex-start; gap:13px; font-size:13px; }.footer-column b { margin-bottom:8px; font-size:14px; }.footer-column a,.footer-column span { color:#a8c3d1; }.footer-column a:hover { color:#4be3d7; opacity:1; }
.footer-bottom { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:18px; color:#84a4b6; border-top:1px solid rgba(173,210,226,.15); padding-top:20px; font-size:12px; }.footer-bottom nav { display:flex; gap:22px; }.footer-bottom a:hover { color:#4be3d7; }
@media(max-width:800px) { .footer-main { grid-template-columns:1fr 1fr; gap:35px; }.footer-brand { grid-column:1/-1; } }
@media(max-width:520px) { .footer-main { grid-template-columns:1fr; gap:30px; }.footer-brand { grid-column:1; }.footer-bottom { flex-direction:column; align-items:flex-start; } }
</style>
