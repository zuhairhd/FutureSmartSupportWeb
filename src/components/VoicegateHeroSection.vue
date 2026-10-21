<template>
  <section class="vg-hero">
    <div class="container vg-hero-inner">
      <div class="vg-kicker">{{ c.kicker }}</div>
      <h1>{{ c.title }} <span>{{ c.accent }}</span></h1>
      <p class="vg-hero-sub">{{ c.sub }}</p>
      <div class="vg-action-row">
        <router-link :to="{path:'/voicegate-demo',hash:'#demo'}" class="btn btn-primary">{{ c.demo }}</router-link>
        <a :href="whatsappHref(lang)" target="_blank" rel="noopener noreferrer" class="btn vg-secondary">{{ c.whatsapp }}</a>
      </div>
      <div class="vg-badges"><span>{{ c.badge1 }}</span><span>{{ c.badge2 }}</span><span>{{ c.badge3 }}</span></div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { PACKAGE, INSTALLATION, PORTAL_FREE_MONTHS, PORTAL_VALUE, omr, whatsappHref } from '../pricing.js'
const { lang } = useLanguage()
const P = omr(PACKAGE), I = omr(INSTALLATION), M = PORTAL_FREE_MONTHS, V = omr(PORTAL_VALUE)
const c = computed(()=>lang.value==='ar'
 ? {kicker:'Future Smart Support · مُجيب',title:'كل مكالمة فائتة',accent:'قد تعني خسارة صفقة',sub:`مُجيب يرد على عملائك ويسجّل التفاصيل لتتابع فرصك، مع نظام PBX مدمج يربط فريقك. باقة مُجيب الكاملة ${P} ر.ع لمرة واحدة، مع التركيب الاحترافي مجاناً (بقيمة ${I} ر.ع) واشتراك البوابة مجاناً لمدة ${M} أشهر (بقيمة ${V} ر.ع).`,demo:'اطلب عرضاً توضيحياً',whatsapp:'تواصل عبر واتساب',badge1:'عرض لفترة محدودة',badge2:'نظام PBX مدمج مشمول',badge3:'العربية والإنجليزية'}
 : {kicker:'FUTURE SMART SUPPORT · MOJEEB',title:'Never Miss',accent:'Another Customer',sub:`Every missed call could be a lost deal. MOJEEB answers your calls 24/7, handles customer inquiries, and helps your business grow — in Arabic and English. Complete MOJEEB package: OMR ${P} one-time, with FREE professional installation (worth OMR ${I}) and a FREE ${M}-month portal subscription (worth OMR ${V}).`,demo:'Request a Demo',whatsapp:'Chat on WhatsApp',badge1:'Limited-time offer',badge2:'Built-in PBX included',badge3:'Arabic & English'})
</script>
<style scoped>
.vg-hero { padding:92px 0 82px; background:radial-gradient(circle at 76% 7%,#174e70,transparent 40%),linear-gradient(125deg,#061b30,#103a57) !important; color:#fff; border-bottom:4px solid #1ad1c7; }
.vg-hero-inner { max-width:860px; margin-inline:auto; text-align:center; }.vg-kicker { color:#49ded7; font-size:12px; font-weight:800; letter-spacing:.14em; margin-bottom:22px; }
h1 { font-size:clamp(36px,5vw,60px); line-height:1.25; margin:0 0 19px; }h1 span { color:#3bddd2; }
.vg-hero-sub { max-width:650px; margin:0 auto 29px; font-size:17px; line-height:1.85; color:#d0e2ec; }.vg-action-row { display:flex; justify-content:center; gap:12px; flex-wrap:wrap; }.vg-action-row .btn { min-width:190px; }
.vg-secondary { color:#fff; border:1px solid #6790aa; }.vg-badges { display:flex; justify-content:center; flex-wrap:wrap; gap:16px; margin-top:31px; color:#a3d4df; font-size:12px; }.vg-badges span::before { content:'✓'; color:#41e4ca; margin-inline-end:6px; }
@media(max-width:600px) { .vg-hero { padding:63px 0 56px; }.vg-hero-sub { font-size:15px; }.vg-action-row { flex-direction:column; }.vg-action-row .btn { width:100%; } }
</style>
