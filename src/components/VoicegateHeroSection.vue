<template>
  <section class="vg-hero">
    <div class="container vg-hero-inner">
      <div class="vg-kicker">{{ c.kicker }}</div>
      <h1>{{ c.title }} <span>{{ c.accent }}</span></h1>
      <p class="vg-hero-sub">{{ c.sub }}</p>
      <div class="vg-action-row">
        <router-link :to="{path:'/voicegate-demo',hash:'#demo'}" class="btn btn-primary">{{ c.demo }}</router-link>
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn vg-secondary">{{ c.whatsapp }}</a>
      </div>
      <div class="vg-badges"><span>{{ c.badge1 }}</span><span>{{ c.badge2 }}</span><span>{{ c.badge3 }}</span></div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { WHATSAPP_URL } from '../constants.js'
const { lang } = useLanguage()
const c = computed(()=>lang.value==='ar'
 ? {kicker:'Future Smart Support · مُجيب',title:'تعرّف على مُجيب',accent:'وجرّبه في عملك.',sub:'موظف استقبال ذكي لمعالجة مكالمات العملاء محلياً، مع خيارات متابعة سحابية حسب حاجة نشاطك.',demo:'اطلب عرضاً مباشراً',whatsapp:'تواصل عبر واتساب',badge1:'العربية + الإنجليزية',badge2:'معالجة محلية',badge3:'حل للأعمال الصغيرة'}
 : {kicker:'FUTURE SMART SUPPORT · MOJEEB AI',title:'Meet Mojeeb AI.',accent:'Hear the difference.',sub:'An on-premise AI receptionist for customer calls, with optional cloud follow-up as your business grows.',demo:'Request a live demo',whatsapp:'Chat on WhatsApp',badge1:'Arabic + English',badge2:'Local processing',badge3:'Made for small businesses'})
</script>
<style scoped>
.vg-hero { padding:92px 0 82px; background:radial-gradient(circle at 76% 7%,#174e70,transparent 40%),linear-gradient(125deg,#061b30,#103a57) !important; color:#fff; border-bottom:4px solid #1ad1c7; }
.vg-hero-inner { max-width:860px; margin-inline:auto; text-align:center; }.vg-kicker { color:#49ded7; font-size:12px; font-weight:800; letter-spacing:.14em; margin-bottom:22px; }
h1 { font-size:clamp(36px,5vw,60px); line-height:1.25; margin:0 0 19px; }h1 span { color:#3bddd2; }
.vg-hero-sub { max-width:650px; margin:0 auto 29px; font-size:17px; line-height:1.85; color:#d0e2ec; }.vg-action-row { display:flex; justify-content:center; gap:12px; flex-wrap:wrap; }.vg-action-row .btn { min-width:190px; }
.vg-secondary { color:#fff; border:1px solid #6790aa; }.vg-badges { display:flex; justify-content:center; flex-wrap:wrap; gap:16px; margin-top:31px; color:#a3d4df; font-size:12px; }.vg-badges span::before { content:'✓'; color:#41e4ca; margin-inline-end:6px; }
@media(max-width:600px) { .vg-hero { padding:63px 0 56px; }.vg-hero-sub { font-size:15px; }.vg-action-row { flex-direction:column; }.vg-action-row .btn { width:100%; } }
</style>
