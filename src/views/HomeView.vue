<template>
  <div class="campaign-home">
    <!-- A. Hero: brochure headline, MOJEEB + built-in PBX value, offer and actions -->
    <section class="hero" id="solution" aria-labelledby="hero-title">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="missed-pill"><MarketingIcon name="missed" :size="16" />{{ s.hero.eyebrow }}</p>
          <h1 id="hero-title">{{ s.hero.headline }} <span>{{ s.hero.accent }}</span></h1>
          <p class="hero-sub">{{ s.hero.sub }}</p>
          <p class="hero-value"><strong>{{ s.value.title }}</strong> {{ s.value.sub }}</p>
          <ul class="feature-row" :aria-label="s.features.aria">
            <li v-for="f in s.features.items" :key="f.text"><MarketingIcon :name="f.icon" :size="15" />{{ f.text }}</li>
          </ul>
          <router-link class="hero-offer" :to="{ path: '/', hash: '#offer' }" :aria-label="s.hero.offerAria">
            <!-- TODO(owner): "50% OFF" badge / original price only after the reference price is confirmed. -->
            <span class="offer-tag">{{ s.limited }}</span>
            <span class="hero-offer-price"><bdi><strong>{{ P }}</strong> {{ currency }}</bdi> <small>{{ s.oneTime }}</small></span>
            <span class="hero-free-list">
              <span class="hero-free"><MarketingIcon name="check" :size="15" /><b>{{ s.free }}</b> {{ s.install }} <em>{{ s.worthInstall }}</em></span>
              <span class="hero-free"><MarketingIcon name="check" :size="15" /><b>{{ s.free }}</b> {{ s.portal }} <em>{{ s.worthPortal }}</em></span>
            </span>
          </router-link>
          <div class="hero-actions">
            <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.cta.demo }} <MarketingIcon name="arrow" :size="17" class="flip-rtl" /></router-link>
            <a class="btn btn-wa" :href="phoneLink"><MarketingIcon name="phone" :size="18" />{{ s.cta.whatsapp }}</a>
          </div>
          <p class="hero-tagline">{{ s.hero.tagline }}</p>
          <!-- TODO(owner): keep or drop the pre-launch status; it conflicts with "Get MOJEEB today before the offer ends". -->
          <p class="hero-status"><span class="status-dot" aria-hidden="true"></span>{{ s.hero.status }}</p>
        </div>

        <figure class="hero-visual" :aria-label="s.visual.label">
          <div class="visual-card visual-missed">
            <span class="visual-icon icon-red"><MarketingIcon name="missed" :size="22" /></span>
            <div><b>{{ s.visual.missed }}</b><small>{{ s.visual.missedSub }}</small></div>
          </div>
          <div class="visual-link" aria-hidden="true"></div>
          <div class="visual-card visual-agent">
            <span class="visual-icon icon-brand"><MarketingIcon name="bot" :size="26" /></span>
            <div><span class="visual-kicker">MOJEEB · مُجيب</span><b>{{ s.visual.answer }}</b><small>{{ s.visual.answerSub }}</small></div>
            <div class="wave" aria-hidden="true"><i v-for="n in 7" :key="n"></i></div>
          </div>
          <div class="visual-link" aria-hidden="true"></div>
          <div class="visual-card visual-details">
            <span class="visual-icon icon-soft"><MarketingIcon name="form" :size="22" /></span>
            <div><b>{{ s.visual.details }}</b>
              <ul><li v-for="d in s.visual.detailItems" :key="d"><MarketingIcon name="check" :size="13" />{{ d }}</li></ul>
            </div>
          </div>
          <div class="visual-pbx"><MarketingIcon name="network" :size="18" />{{ s.visual.pbx }}</div>
          <figcaption class="visual-note">{{ s.visual.note }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- Trust row (brochure footer strip) -->
    <section class="trust" :aria-label="s.trust.aria">
      <div class="container trust-grid">
        <div class="trust-item" v-for="t in s.trust.items" :key="t.title">
          <span class="trust-icon"><MarketingIcon :name="t.icon" :size="22" /></span>
          <div><b>{{ t.title }}</b><small>{{ t.sub }}</small></div>
        </div>
      </div>
    </section>

    <!-- B. Business benefits -->
    <section class="section benefits" id="features">
      <div class="container">
        <div class="heading"><p class="section-label">{{ s.benefits.eyebrow }}</p><h2 class="section-title">{{ s.benefits.title }}</h2></div>
        <div class="benefit-grid">
          <article class="benefit" v-for="b in s.benefits.items" :key="b.title">
            <span class="benefit-icon"><MarketingIcon :name="b.icon" :size="26" /></span>
            <h3>{{ b.title }}</h3><p>{{ b.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- C. What the package includes -->
    <section class="section package" id="package">
      <div class="container">
        <div class="heading"><p class="section-label">{{ s.pkg.eyebrow }}</p><h2 class="section-title">{{ s.pkg.title }}</h2><p class="section-sub">{{ s.pkg.sub }}</p></div>
        <div class="include-grid">
          <article class="include" v-for="item in s.pkg.items" :key="item.title" :class="{ 'include-pbx': item.pbx }">
            <span class="include-icon"><MarketingIcon :name="item.icon" :size="30" /></span>
            <span class="include-badge"><MarketingIcon name="check" :size="13" />{{ s.included }}</span>
            <h3>{{ item.title }}</h3><p>{{ item.desc }}</p>
          </article>
        </div>
        <div class="free-row">
          <div class="free-card"><span class="free-icon"><MarketingIcon name="tool" :size="24" /></span><div><span class="free-word">{{ s.free }}</span><b>{{ s.install }} <em class="worth">{{ s.worthInstall }}</em></b><small>{{ s.pkg.installNote }}</small></div></div>
          <div class="free-card"><span class="free-icon"><MarketingIcon name="cloud" :size="24" /></span><div><span class="free-word">{{ s.free }}</span><b>{{ s.portal }} <em class="worth">{{ s.worthPortal }}</em></b><small>{{ s.pkg.portalNote }}</small></div></div>
        </div>
      </div>
    </section>

    <!-- D. Built-in PBX: one included phone, more phones can be added (not included) -->
    <section class="section pbx" id="pbx">
      <div class="container pbx-grid">
        <div>
          <p class="section-label">{{ s.pbx.eyebrow }}</p>
          <h2 class="section-title">{{ s.pbx.title }}</h2>
          <p class="pbx-text">{{ s.pbx.body }}</p>
          <ul class="pbx-bullets">
            <li v-for="b in s.pbx.bullets" :key="b"><MarketingIcon name="check" :size="18" />{{ b }}</li>
          </ul>
          <p class="pbx-note">{{ phonesNote }}</p>
        </div>
        <figure class="pbx-diagram" :aria-label="s.pbx.diagramLabel">
          <div class="pbx-node"><MarketingIcon name="network" :size="22" /><span>{{ s.pbx.node }}</span></div>
          <div class="pbx-lines" aria-hidden="true"></div>
          <div class="pbx-phones">
            <div class="pbx-phone included"><MarketingIcon name="deskphone" :size="34" /><b>{{ s.pbx.includedPhone }}</b><small>{{ s.pbx.qtyOne }}</small></div>
            <div class="pbx-extra">
              <div class="pbx-phone extra"><MarketingIcon name="deskphone" :size="30" /></div>
              <div class="pbx-phone extra"><MarketingIcon name="deskphone" :size="30" /></div>
              <b>{{ s.pbx.extraPhones }}</b>
            </div>
          </div>
          <figcaption class="visually-hidden">{{ phonesNote }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- E. How it works -->
    <section class="section how" id="how">
      <div class="container">
        <div class="heading centered"><p class="section-label">{{ s.how.eyebrow }}</p><h2 class="section-title">{{ s.how.title }}</h2></div>
        <ol class="steps">
          <li v-for="(step, i) in s.how.steps" :key="step.title" class="step">
            <span class="step-icon"><MarketingIcon :name="step.icon" :size="28" /></span>
            <span class="step-num" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ step.title }}</h3><p>{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- F. Offer panel with value stack -->
    <section class="section offer" id="offer" aria-labelledby="offer-title">
      <div class="container">
        <div class="offer-panel">
          <div class="offer-price">
            <!-- TODO(owner): "50% OFF" badge / original price only after the reference price is confirmed. Offer end date also unconfirmed. -->
            <span class="offer-tag">{{ s.limited }}</span>
            <h2 id="offer-title">{{ s.offer.title }}</h2>
            <p class="offer-amount"><bdi><strong>{{ P }}</strong><span>{{ currency }}</span></bdi></p>
            <p class="offer-once">{{ s.oneTime }}</p>
          </div>
          <div class="offer-details">
            <dl class="value-stack">
              <div v-for="row in s.offer.stack" :key="row.label" :class="{ free: row.free }">
                <dt><MarketingIcon :name="row.free ? 'gift' : 'check'" :size="18" />{{ row.label }}</dt>
                <dd><b>{{ row.value }}</b><small v-if="row.note">{{ row.note }}</small></dd>
              </div>
            </dl>
            <p class="offer-phones">{{ phonesNote }}</p>
            <p class="offer-closing">{{ s.offer.closing }}</p>
            <div class="offer-actions">
              <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.cta.demo }}</router-link>
              <a class="btn btn-wa-light" :href="phoneLink"><MarketingIcon name="phone" :size="18" />{{ s.cta.whatsapp }} <bdi dir="ltr">+968 2420 2829</bdi></a>
            </div>
          </div>
          <div class="offer-terms">
            <p>{{ summary }}</p>
            <p>{{ vat.detail }}</p>
            <p>{{ s.offer.terms }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- G. FAQ -->
    <section class="section faq" id="faq">
      <div class="container faq-grid">
        <div><p class="section-label">{{ s.faq.eyebrow }}</p><h2 class="section-title">{{ s.faq.title }}</h2></div>
        <div class="faq-list">
          <details v-for="(item, i) in s.faq.items" :key="i" class="faq-item">
            <summary><span>{{ item.q }}</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <VoicegateDemoSection />
    <ContactSection />

    <!-- Compact mobile contact bar; hidden while the hero, demo form, contact form or footer is on screen -->
    <div class="sticky-cta" :class="{ show: stickyVisible }" :aria-hidden="!stickyVisible">
      <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }" :tabindex="stickyVisible ? 0 : -1">{{ s.cta.demo }}</router-link>
      <a class="btn btn-wa" :href="phoneLink" :aria-label="s.cta.whatsapp" :tabindex="stickyVisible ? 0 : -1"><MarketingIcon name="phone" :size="20" /></a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { PACKAGE, INSTALLATION, PORTAL_FREE_MONTHS, PORTAL_VALUE, VAT, OFFER_SUMMARY, PHONES_NOTE, omr, phoneHref } from '../pricing.js'
import MarketingIcon from '../components/MarketingIcon.vue'
import ContactSection from '../components/ContactSection.vue'
import VoicegateDemoSection from '../components/VoicegateDemoSection.vue'

const { lang } = useLanguage()
const s = computed(() => messages[lang.value] || messages.en)
const currency = computed(() => (lang.value === 'ar' ? 'ر.ع' : 'OMR'))
const summary = computed(() => OFFER_SUMMARY[lang.value])
const vat = computed(() => VAT[lang.value])
const phonesNote = computed(() => PHONES_NOTE[lang.value])
const phoneLink = phoneHref()
const P = omr(PACKAGE)
const I = omr(INSTALLATION)
const M = PORTAL_FREE_MONTHS
const V = omr(PORTAL_VALUE)

// Mobile sticky bar: visible only between the hero and the demo/contact/footer area.
const stickyVisible = ref(false)
let observer
onMounted(() => {
  const hidden = new Set()
  observer = new IntersectionObserver(entries => {
    for (const e of entries) e.isIntersecting ? hidden.add(e.target) : hidden.delete(e.target)
    stickyVisible.value = hidden.size === 0
  })
  for (const sel of ['#solution', '#demo', '#contact', '.fss-footer']) {
    const el = document.querySelector(sel)
    if (el) observer.observe(el)
  }
})
onUnmounted(() => observer?.disconnect())

const messages = {
  en: {
    limited: 'Limited-time offer',
    free: 'FREE',
    included: 'Included',
    oneTime: 'One-time cost',
    install: 'Professional installation',
    portal: `${M}-month portal subscription`,
    worthInstall: `(worth OMR ${I})`,
    worthPortal: `(worth OMR ${V})`,
    cta: { demo: 'Request a Demo', whatsapp: 'Call us' },
    value: { title: 'AI answering + a built-in PBX.', sub: `Included in your OMR ${P} package.` },
    hero: {
      eyebrow: 'Turn every call into an opportunity',
      headline: 'Never Miss', accent: 'Another Customer',
      sub: 'Every missed call could be a lost deal. MOJEEB answers your calls 24/7, handles customer inquiries, and helps your business grow — in Arabic and English.',
      tagline: 'Same number. Smarter business.',
      offerAria: `Limited-time offer: OMR ${P} one-time, free professional installation worth OMR ${I} and a free ${M}-month portal subscription worth OMR ${V}. View the offer.`,
      status: 'Pre-launch: book a demonstration now. Orders and delivery dates are confirmed in writing at launch.',
    },
    features: { aria: 'Key features', items: [{ icon: 'globe', text: 'Arabic & English' }, { icon: 'form', text: 'Call details captured' }, { icon: 'cloud', text: 'Follow-up in the portal' }] },
    visual: {
      label: 'Illustration: a customer call is answered by MOJEEB, the details are captured, and the team follows up.',
      missed: 'Customer calling', missedSub: 'Your team is busy or out of office',
      answer: 'MOJEEB answers', answerSub: 'In Arabic or English',
      details: 'Details captured for follow-up', detailItems: ['Caller number', 'Customer request', 'Follow-up task in the portal'],
      pbx: 'Built-in PBX connects your team', note: 'Illustration',
    },
    trust: {
      aria: 'Why businesses choose MOJEEB',
      items: [
        { icon: 'tool', title: 'Easy setup', sub: 'We install it for you — FREE' },
        { icon: 'clock', title: 'Reliable 24/7', sub: 'Answers calls around the clock' },
        { icon: 'people', title: 'More customers', sub: 'Turn calls into sales opportunities' },
        { icon: 'wallet', title: 'Cost effective', sub: 'Professional solution at a special price' },
        { icon: 'shield', title: 'Reliable & secure', sub: 'Runs on your own local server' },
        { icon: 'globe', title: 'Local support', sub: 'Oman-based team' },
      ],
    },
    benefits: {
      eyebrow: 'How MOJEEB helps your business', title: 'Answer more calls. Follow up on more opportunities.',
      items: [
        { icon: 'clock', title: 'Answers calls 24/7', desc: 'MOJEEB greets callers and handles common questions, including when your team is busy or outside office hours.' },
        { icon: 'form', title: 'Captures customer details and follow-ups', desc: 'Caller details and requests are recorded, so your team knows who called, what they needed and who to call back.' },
        { icon: 'chart', title: 'Helps you grow your business', desc: `Review calls and follow-ups in the FSS portal — free for the first ${M} months — and respond to more enquiries.` },
        { icon: 'globe', title: 'Arabic & English', desc: 'Natural, professional conversations with callers in Arabic or English.' },
      ],
    },
    pkg: {
      eyebrow: 'Package includes', title: 'Everything you need to get started.', sub: `One package, one price: OMR ${P} one-time, with a two-year MOJEEB hardware warranty.`,
      items: [
        { icon: 'server', title: 'MOJEEB AI appliance', desc: 'AI voice assistant and PBX system. Answers customer calls in Arabic and English and records caller details.' },
        { icon: 'network', pbx: true, title: 'Built-in PBX system', desc: 'Built into the MOJEEB appliance. Set up internal extensions and add more IP phones on the same PBX.' },
        { icon: 'gateway', title: 'Grandstream HT813', desc: 'Converts your analog phone line to SIP, so customers keep calling your usual number.' },
        { icon: 'deskphone', title: '1 IP phone', desc: 'Ready to use for your team to take and return calls. One phone is included.' },
      ],
      installNote: `FREE within the offer (worth OMR ${I}). Requires an existing LAN and a compatible ADSL connection; cabling, network setup, internet activation and other non-standard work are quoted separately.`,
      portalNote: `FREE for the first ${M} months (worth OMR ${V}), then renewed according to the selected plan.`,
    },
    pbx: {
      eyebrow: 'Built-in PBX', title: 'You also get a built-in PBX system',
      body: 'The package includes a full PBX system. The included IP phone is just the first one — add more IP phones anytime on the same PBX.',
      bullets: ['Use multiple IP phones in your office', 'Connect branches and departments', 'Professional and flexible communication', 'All included in the same package'],
      node: 'PBX', diagramLabel: 'Diagram: the built-in PBX connects to one included IP phone. More phones can be added but are not included.',
      includedPhone: 'Included phone', qtyOne: '1 unit', extraPhones: 'Additional phones — not included',
    },
    how: {
      eyebrow: 'How MOJEEB works', title: 'Simple. Secure. Effective.',
      steps: [
        { icon: 'phone', title: 'Customer calls your number', desc: 'Customers keep calling your usual business number on your compatible line.' },
        { icon: 'bot', title: 'MOJEEB answers', desc: 'MOJEEB answers in Arabic or English and handles common questions.' },
        { icon: 'form', title: 'Captures details and follows up', desc: 'Caller details and requests are recorded and follow-up tasks are created for your team.' },
        { icon: 'chart', title: 'You get reports and grow', desc: 'Review calls and follow-ups in the portal and grow your business.' },
      ],
    },
    offer: {
      title: 'Complete MOJEEB package',
      stack: [
        { label: 'Complete MOJEEB package', value: `OMR ${P}`, note: 'one-time' },
        { label: 'Professional installation', value: 'FREE', note: `worth OMR ${I}`, free: true },
        { label: `${M}-month portal subscription`, value: 'FREE', note: `worth OMR ${V}`, free: true },
        { label: 'Built-in PBX system', value: 'Included' },
        { label: '1 IP phone', value: 'Included' },
      ],
      closing: 'Get MOJEEB today before the offer ends!',
      terms: 'Standard installation requires an existing LAN and a compatible ADSL service. Final availability, compatibility, delivery and any non-standard work are confirmed in writing.',
    },
    faq: {
      eyebrow: 'Questions & answers', title: 'Good to know before you buy.',
      items: [
        { q: `What does the OMR ${P} package include?`, a: `The MOJEEB AI appliance (AI voice assistant with a built-in PBX), one Grandstream HT813 gateway and one IP phone, plus free professional installation (worth OMR ${I}) and a free ${M}-month portal subscription (worth OMR ${V}). External AI-provider usage, telecom charges and additional phones are not included.` },
        { q: 'Is installation included?', a: `Yes. Standard professional installation is free within this limited-time offer (worth OMR ${I}). It requires an existing LAN and a compatible ADSL connection; extra cabling, network setup, internet activation and other non-standard work are quoted separately.` },
        { q: 'Is the PBX included?', a: `Yes. MOJEEB includes a built-in PBX as part of the OMR ${P} package, so your team can use internal extensions.` },
        { q: 'How many phones are included?', a: 'One IP phone is included in the package.' },
        { q: 'Can I add more phones?', a: `Yes. MOJEEB includes a built-in PBX: the package includes one IP phone, and you can add more IP phones and extensions on the same PBX and connect branches and departments. Additional phones are not included in the package price; compatibility and pricing are confirmed in your quotation.` },
        { q: 'Are there recurring fees?', a: `There is no recurring software licence fee for the MOJEEB appliance. AI-provider usage is separate: you normally use your own AI-provider account and pay the provider directly. The portal subscription is free for the first ${M} months, then renewed according to the selected plan. Your telephone line and internet connection are billed by your providers.` },
        { q: 'What does the portal add?', a: `The first ${M} months of the FSS portal subscription are free (worth OMR ${V}). In the portal your team can review calls handled by MOJEEB, see missed-call and voicemail notifications, and manage follow-up tasks from outside the office. After the free period it is renewed according to the selected plan; the appliance’s on-site dashboard remains available on your office network.` },
        { q: 'How can my business request a demonstration?', a: 'Fill in the demo request form on this page, visit futuresmartsupport.com/voicegate-demo, or call us on +968 2420 2829.' },
        { q: 'Is VAT added to the price?', a: `${VAT.en.statement} ${VAT.en.detail}` },
        { q: 'Can I keep my business number? What about Caller ID?', a: 'You can keep your existing business landline number, or a voice number supplied with a compatible ADSL service (for example from Omantel), when the line and provider service are compatible. Caller ID can be configured when your provider enables it and the line supports it; provider fees may apply. We check compatibility before installation.' },
        { q: 'Does MOJEEB need an internet connection?', a: 'Yes. A compatible ADSL internet connection is required. Speech recognition, AI responses and voice use external AI services over the internet, so MOJEEB does not offer offline AI conversations.' },
        { q: 'What warranty is provided?', a: 'The MOJEEB appliance hardware has a two-year warranty, subject to FSS written warranty terms. Warranty arrangements for the gateway and IP phone are confirmed in your quotation.' },
      ],
    },
  },
  ar: {
    limited: 'عرض لفترة محدودة',
    free: 'مجاناً',
    included: 'مشمول',
    oneTime: 'لمرة واحدة',
    install: 'التركيب الاحترافي',
    portal: `اشتراك البوابة لمدة ${M} أشهر`,
    worthInstall: `(بقيمة ${I} ر.ع)`,
    worthPortal: `(بقيمة ${V} ر.ع)`,
    cta: { demo: 'اطلب عرضاً توضيحياً', whatsapp: 'اتصل بنا' },
    value: { title: 'مُجيب يردّ على عملائك… ونظام PBX مدمج يربط فريقك.', sub: `كلاهما ضمن باقة ${P} ريالاً عُمانياً.` },
    hero: {
      eyebrow: 'حوّل كل مكالمة إلى فرصة',
      headline: 'كل مكالمة فائتة', accent: 'قد تعني خسارة صفقة',
      sub: 'مُجيب يرد على عملائك ويسجّل التفاصيل لتتابع فرصك.',
      tagline: 'نفس الرقم. أعمال أذكى.',
      offerAria: `عرض لفترة محدودة: ${P} ر.ع لمرة واحدة، مع التركيب الاحترافي مجاناً بقيمة ${I} ر.ع واشتراك البوابة مجاناً لمدة ${M} أشهر بقيمة ${V} ر.ع. شاهد العرض.`,
      status: 'مرحلة ما قبل الإطلاق: احجز عرضاً توضيحياً الآن، وتُؤكَّد الطلبات ومواعيد التسليم كتابياً عند الإطلاق.',
    },
    features: { aria: 'المزايا الرئيسية', items: [{ icon: 'globe', text: 'العربية والإنجليزية' }, { icon: 'form', text: 'تسجيل تفاصيل المكالمات' }, { icon: 'cloud', text: 'متابعة عبر البوابة' }] },
    visual: {
      label: 'رسم توضيحي: مكالمة عميل يرد عليها مُجيب، وتُسجَّل التفاصيل، ثم يتابع الفريق.',
      missed: 'عميل يتصل', missedSub: 'فريقك مشغول أو خارج الدوام',
      answer: 'مُجيب يرد', answerSub: 'بالعربية أو الإنجليزية',
      details: 'تسجيل التفاصيل للمتابعة', detailItems: ['رقم المتصل', 'طلب العميل', 'مهمة متابعة في البوابة'],
      pbx: 'نظام PBX مدمج يربط فريقك', note: 'رسم توضيحي',
    },
    trust: {
      aria: 'لماذا تختار الشركات مُجيب',
      items: [
        { icon: 'tool', title: 'تركيب سهل', sub: 'نركّبه لك مجاناً' },
        { icon: 'clock', title: 'موثوق على مدار الساعة', sub: 'يرد على المكالمات ليلاً ونهاراً' },
        { icon: 'people', title: 'عملاء أكثر', sub: 'حوّل المكالمات إلى فرص بيع' },
        { icon: 'wallet', title: 'تكلفة مناسبة', sub: 'حل احترافي بسعر خاص' },
        { icon: 'shield', title: 'موثوق وآمن', sub: 'يعمل على خادمك المحلي' },
        { icon: 'globe', title: 'دعم محلي', sub: 'فريق في سلطنة عُمان' },
      ],
    },
    benefits: {
      eyebrow: 'كيف يساعد مُجيب أعمالك', title: 'ردّ على مكالمات أكثر، وتابِع فرصاً أكثر.',
      items: [
        { icon: 'clock', title: 'يرد على المكالمات على مدار الساعة', desc: 'يرحّب مُجيب بالمتصلين ويتعامل مع الأسئلة الشائعة، حتى عند انشغال فريقك أو خارج أوقات الدوام.' },
        { icon: 'form', title: 'يسجّل تفاصيل العملاء والمتابعات', desc: 'تُسجَّل بيانات المتصل وطلبه، ليعرف فريقك من اتصل وماذا يحتاج ومن يجب معاودة الاتصال به.' },
        { icon: 'chart', title: 'يساعدك على تنمية أعمالك', desc: `راجع المكالمات والمتابعات في بوابة FSS — مجاناً لأول ${M} أشهر — واستجب لاستفسارات أكثر.` },
        { icon: 'globe', title: 'العربية والإنجليزية', desc: 'محادثات طبيعية واحترافية مع المتصلين بالعربية أو الإنجليزية.' },
      ],
    },
    pkg: {
      eyebrow: 'يشمل العرض', title: 'كل ما تحتاجه لتبدأ.', sub: `باقة واحدة بسعر واحد: ${P} ر.ع لمرة واحدة، مع ضمان على جهاز مُجيب لمدة سنتين.`,
      items: [
        { icon: 'server', title: 'جهاز مُجيب الذكي', desc: 'مساعد صوتي ذكي ونظام PBX. يرد على مكالمات العملاء بالعربية والإنجليزية ويسجّل بيانات المتصلين.' },
        { icon: 'network', pbx: true, title: 'نظام PBX مدمج', desc: 'مدمج في جهاز مُجيب. يتيح تركيب التحويلات الداخلية وإضافة هواتف IP أخرى على نفس النظام.' },
        { icon: 'gateway', title: 'بوابة Grandstream HT813', desc: 'تحوّل خط الهاتف التناظري إلى SIP، ليواصل عملاؤك الاتصال برقمك المعتاد.' },
        { icon: 'deskphone', title: 'هاتف IP واحد', desc: 'جاهز للاستخدام لاستقبال المكالمات ومعاودة الاتصال. يشمل العرض هاتفاً واحداً.' },
      ],
      installNote: `مجاني ضمن العرض (بقيمة ${I} ر.ع). يتطلب شبكة LAN قائمة واتصال ADSL متوافقاً، ويُقدَّم تمديد الكابلات وتأسيس الشبكة وتفعيل الإنترنت والأعمال غير الاعتيادية بعرض سعر منفصل.`,
      portalNote: `مجاني لأول ${M} أشهر (بقيمة ${V} ر.ع)، ثم يُجدَّد حسب الخطة المختارة.`,
    },
    pbx: {
      eyebrow: 'نظام PBX مدمج', title: 'بهذا المبلغ تحصل أيضاً على نظام PBX',
      body: 'يتيح تركيب التحويلات والهواتف داخل شركتك بسهولة. يشمل العرض هاتفاً واحداً، ويمكن إضافة هواتف أخرى تعمل على نفس نظام PBX.',
      bullets: ['استخدم عدة هواتف IP في مكتبك', 'اربط الفروع والأقسام', 'اتصالات احترافية ومرنة', 'كل ذلك ضمن الباقة نفسها'],
      node: 'PBX', diagramLabel: 'رسم توضيحي: نظام PBX المدمج متصل بهاتف IP واحد مشمول، ويمكن إضافة هواتف أخرى غير مشمولة بالعرض.',
      includedPhone: 'الهاتف المشمول', qtyOne: 'جهاز واحد', extraPhones: 'هواتف إضافية — غير مشمولة',
    },
    how: {
      eyebrow: 'كيف يعمل مُجيب', title: 'بسيط. آمن. فعّال.',
      steps: [
        { icon: 'phone', title: 'العميل يتصل برقمك', desc: 'يواصل عملاؤك الاتصال برقم نشاطك المعتاد عبر خطك المتوافق.' },
        { icon: 'bot', title: 'مُجيب يرد', desc: 'يرد مُجيب بالعربية أو الإنجليزية ويتعامل مع الأسئلة الشائعة.' },
        { icon: 'form', title: 'يسجّل التفاصيل ويتابع', desc: 'تُسجَّل بيانات المتصل وطلبه وتُنشأ مهام متابعة لفريقك.' },
        { icon: 'chart', title: 'تحصل على التقارير وتنمو أعمالك', desc: 'راجع المكالمات والمتابعات في البوابة ونمِّ أعمالك.' },
      ],
    },
    offer: {
      title: 'باقة مُجيب الكاملة',
      stack: [
        { label: 'باقة مُجيب الكاملة', value: `${P} ر.ع`, note: 'لمرة واحدة' },
        { label: 'التركيب الاحترافي', value: 'مجاناً', note: `بقيمة ${I} ر.ع`, free: true },
        { label: `اشتراك البوابة لمدة ${M} أشهر`, value: 'مجاناً', note: `بقيمة ${V} ر.ع`, free: true },
        { label: 'نظام PBX مدمج', value: 'مشمول' },
        { label: 'هاتف IP واحد', value: 'مشمول' },
      ],
      closing: 'احصل على مُجيب اليوم قبل انتهاء العرض',
      terms: 'يشترط للتركيب الاعتيادي توفر شبكة LAN قائمة وخدمة ADSL متوافقة. ويُؤكَّد التوفر والتوافق والتسليم وأي أعمال غير اعتيادية كتابياً.',
    },
    faq: {
      eyebrow: 'أسئلة وأجوبة', title: 'معلومات مهمة قبل الشراء.',
      items: [
        { q: `ماذا تشمل باقة ${P} ر.ع؟`, a: `جهاز مُجيب الذكي (مساعد صوتي ذكي مع نظام PBX مدمج)، وبوابة Grandstream HT813 واحدة، وهاتف IP واحد، مع التركيب الاحترافي مجاناً (بقيمة ${I} ر.ع) واشتراك البوابة مجاناً لمدة ${M} أشهر (بقيمة ${V} ر.ع). ولا تشمل رسوم استخدام مزوّد الذكاء الاصطناعي ورسوم الاتصالات والهواتف الإضافية.` },
        { q: 'هل التركيب مشمول؟', a: `نعم. التركيب الاحترافي الاعتيادي مجاني ضمن العرض لفترة محدودة (بقيمة ${I} ر.ع). ويتطلب شبكة LAN قائمة واتصال ADSL متوافقاً، ويُقدَّم تمديد الكابلات وتأسيس الشبكة وتفعيل الإنترنت والأعمال غير الاعتيادية بعرض سعر منفصل.` },
        { q: 'هل نظام PBX مشمول؟', a: `نعم. يتضمن مُجيب نظام PBX مدمجاً ضمن باقة ${P} ر.ع، ليستخدم فريقك التحويلات الداخلية.` },
        { q: 'كم عدد الهواتف المشمولة؟', a: 'يشمل العرض هاتف IP واحداً.' },
        { q: 'هل يمكنني إضافة هواتف أخرى؟', a: 'نعم. يتضمن مُجيب نظام PBX مدمجاً؛ يشمل العرض هاتف IP واحداً، ويمكنك إضافة هواتف IP وتحويلات أخرى على نفس النظام وربط الفروع والأقسام. والهواتف الإضافية غير مشمولة في سعر الباقة، ويُؤكَّد التوافق والسعر في عرض السعر.' },
        { q: 'هل توجد رسوم دورية؟', a: `لا توجد رسوم ترخيص برمجي دورية على جهاز مُجيب. ورسوم استخدام مزوّد الذكاء الاصطناعي منفصلة: عادةً تستخدم حسابك الخاص لدى المزوّد وتدفع له مباشرة. واشتراك البوابة مجاني لأول ${M} أشهر، ثم يُجدَّد حسب الخطة المختارة. ويُحاسَب خط الهاتف واتصال الإنترنت من قِبل مزوّديهما.` },
        { q: 'ماذا تضيف البوابة؟', a: `أول ${M} أشهر من اشتراك بوابة FSS مجانية (بقيمة ${V} ر.ع). ومن خلال البوابة يراجع فريقك المكالمات التي تعامل معها مُجيب، ويطّلع على تنبيهات المكالمات الفائتة والرسائل الصوتية، ويدير مهام المتابعة من خارج المكتب. وبعد الفترة المجانية يُجدَّد الاشتراك حسب الخطة المختارة، وتبقى لوحة المعلومات المحلية في الجهاز متاحة على شبكة مكتبك.` },
        { q: 'كيف تطلب شركتي عرضاً توضيحياً؟', a: 'املأ نموذج طلب العرض التوضيحي في هذه الصفحة، أو زر futuresmartsupport.com/voicegate-demo، أو اتصل بنا على ‎+968 2420 2829.' },
        { q: 'هل تُضاف ضريبة القيمة المضافة إلى السعر؟', a: `${VAT.ar.statement} ${VAT.ar.detail}` },
        { q: 'هل يمكنني الاحتفاظ برقم نشاطي؟ وماذا عن إظهار رقم المتصل؟', a: 'يمكنك الاحتفاظ برقم هاتفك الأرضي الحالي، أو رقم الهاتف المقدم ضمن خدمة ADSL متوافقة (مثلاً من عُمانتل)، متى كان الخط وخدمة المزوّد متوافقين. ويمكن تهيئة خدمة إظهار رقم المتصل عند تفعيلها من المزوّد ودعم الخط لها، وقد تنطبق رسوم من المزوّد. نتحقق من التوافق قبل التركيب.' },
        { q: 'هل يحتاج مُجيب إلى اتصال بالإنترنت؟', a: 'نعم، يلزم اتصال إنترنت ADSL متوافق. يعتمد التعرّف على الكلام والردود الذكية وتوليد الصوت على خدمات ذكاء اصطناعي خارجية عبر الإنترنت، لذا لا يقدّم مُجيب محادثات ذكية دون اتصال.' },
        { q: 'ما الضمان المقدم؟', a: 'يتمتع جهاز مُجيب بضمان على الأجهزة لمدة سنتين وفق شروط الضمان المكتوبة من FSS. وتُؤكَّد ترتيبات الضمان الخاصة بالبوابة والهاتف في عرض السعر.' },
      ],
    },
  },
}
</script>

<style scoped>
.campaign-home { overflow: clip; --red: #d92d31; --mint: #2fe0d2; }
html[dir='rtl'] .flip-rtl { transform: scaleX(-1); }
.heading { margin: 0 0 36px; max-width: 760px; }
.heading.centered { text-align: center; margin-inline: auto; }
.offer-tag { display: inline-flex; align-items: center; background: var(--red); color: #fff; font-size: 12px; font-weight: 850; letter-spacing: .04em; border-radius: 999px; padding: 6px 14px; }
html[dir='rtl'] .offer-tag { letter-spacing: 0; }

/* A. Hero */
.hero { position: relative; isolation: isolate; color: #fff; padding: 88px 0 92px; background: linear-gradient(130deg, #051a2f 0%, #08294a 62%, #0d3d5e 100%); }
.hero-glow { position: absolute; z-index: -1; width: 620px; height: 620px; inset-inline-end: -180px; top: -240px; border-radius: 50%; background: radial-gradient(circle, rgba(47,224,210,.18), transparent 65%); pointer-events: none; }
.hero-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: clamp(36px, 6vw, 90px); align-items: center; }
.missed-pill { display: inline-flex; align-items: center; gap: 8px; margin: 0 0 22px; padding: 7px 14px; border-radius: 999px; background: rgba(229,56,59,.16); border: 1px solid rgba(229,56,59,.55); color: #ffd6d6; font-size: 13px; font-weight: 800; }
.missed-pill svg { color: #ff6b6e; }
h1 { margin: 0 0 22px; font-size: clamp(38px, 4.4vw, 60px); line-height: 1.08; letter-spacing: -.035em; font-weight: 860; }
html[dir='rtl'] h1 { letter-spacing: 0; line-height: 1.3; }
h1 span { display: block; color: var(--mint); }
.hero-sub { max-width: 580px; margin: 0 0 18px; color: #cfe2ee; font-size: 18px; line-height: 1.75; }
.hero-value { max-width: 580px; margin: 0 0 26px; color: #e8fbfa; font-size: 16px; line-height: 1.6; }
.hero-value strong { color: #fff; }
.hero-offer { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; max-width: 600px; margin: 0 0 26px; padding: 16px 18px; border-radius: 18px; background: rgba(255,255,255,.06); border: 1px solid rgba(47,224,210,.45); color: #fff; }
.hero-offer:hover { opacity: 1; border-color: var(--mint); background: rgba(255,255,255,.09); }
.hero-offer-price { font-size: 18px; font-weight: 800; color: #d8fffb; }
.hero-offer-price strong { font-size: 38px; font-weight: 900; color: #fff; letter-spacing: -.02em; }
.hero-free-list { flex-basis: 100%; display: flex; flex-wrap: wrap; gap: 8px 22px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,.12); }
.hero-free { display: inline-flex; align-items: center; gap: 6px; font-size: 15px; color: #d9eef4; }
.hero-free b { font-size: 16px; }
.hero-free b { color: var(--mint); font-weight: 900; }
.hero-free svg { color: var(--mint); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.hero-actions .btn { min-height: 52px; font-size: 15px; }
.btn-wa { color: #fff; border: 1px solid rgba(37,211,102,.6); background: rgba(37,211,102,.14); }
.btn-wa:hover { background: rgba(37,211,102,.24); }
.hero-status { display: flex; gap: 9px; margin: 22px 0 0; max-width: 580px; color: #a9c4d4; font-size: 13px; line-height: 1.65; }
.status-dot { flex: 0 0 8px; height: 8px; margin-top: 7px; border-radius: 50%; background: #ffc857; }

.hero-visual { position: relative; margin: 0; padding: 26px 26px 40px; border-radius: 28px; border: 1px solid rgba(53,184,206,.35); background: linear-gradient(155deg, rgba(21,71,101,.85), rgba(8,39,65,.95)); box-shadow: 0 30px 70px rgba(0,6,20,.35); }
.visual-card { position: relative; display: flex; align-items: center; gap: 14px; padding: 16px; border-radius: 18px; background: rgba(6,26,47,.72); border: 1px solid rgba(147,213,231,.2); }
.visual-card b { display: block; font-size: 15px; color: #f5ffff; }
.visual-card small { display: block; font-size: 12px; color: #9cbfd0; }
.visual-icon { flex: 0 0 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; }
.icon-red { background: rgba(229,56,59,.18); color: #ff6b6e; }
.icon-brand { background: linear-gradient(135deg, #1cdac9, #177dca); color: #fff; width: 56px; height: 56px; flex-basis: 56px; }
.icon-soft { background: rgba(47,224,210,.14); color: var(--mint); }
.visual-missed { width: 86%; border-color: rgba(229,56,59,.45); }
.visual-agent { border-color: rgba(47,224,210,.6); background: linear-gradient(118deg, #123d58, #0d2a47); box-shadow: 0 0 34px rgba(6,194,184,.16); }
.visual-agent > div:nth-child(2) { flex: 1; min-width: 0; }
.visual-kicker { display: block; font-size: 10px; font-weight: 850; letter-spacing: .08em; color: var(--mint); margin-bottom: 2px; }
.wave { display: flex; align-items: center; gap: 3px; height: 28px; }
.wave i { width: 3px; height: 10px; border-radius: 4px; background: var(--mint); }
.wave i:nth-child(odd) { height: 22px; }
.visual-details { width: 92%; margin-inline-start: auto; align-items: flex-start; }
.visual-details ul { list-style: none; margin: 8px 0 0; padding: 0; display: grid; gap: 5px; }
.visual-details li { display: flex; align-items: center; gap: 7px; font-size: 12px; color: #bfe9e4; }
.visual-details li svg { color: var(--mint); }
.visual-link { width: 2px; height: 22px; margin-inline-start: 38px; background: linear-gradient(var(--mint), #70baff); }
.visual-pbx { display: inline-flex; align-items: center; gap: 8px; margin-top: 18px; padding: 9px 14px; border-radius: 999px; background: #fff; color: #0a4e67; font-size: 13px; font-weight: 800; }
.visual-note { position: absolute; inset-inline-end: 22px; bottom: 14px; font-size: 11px; color: #8fb3c5; }

/* B. Benefits */
.benefits { background: #fff; }
.benefit-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.benefit { padding: 28px 24px; border-radius: 20px; border: 1px solid #deebf2; background: #fbfdff; }
.benefit-icon { display: grid; place-items: center; width: 54px; height: 54px; margin-bottom: 18px; border-radius: 16px; background: #e0f8f7; color: #068f95; }
.benefit h3 { margin: 0 0 8px; font-size: 17px; }
.benefit p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.75; }

/* C. Package */
.package { background: #eef8fb; }
.include-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.include { position: relative; padding: 28px 24px; border-radius: 22px; background: #fff; border: 1px solid #d5e7f0; }
.include-pbx { border: 2px solid #11b8ad; box-shadow: 0 18px 40px rgba(0,150,150,.12); }
.include-icon { display: grid; place-items: center; width: 62px; height: 62px; margin-bottom: 18px; border-radius: 18px; color: #fff; background: linear-gradient(135deg, #16cbbd, #167ed3); }
.include-badge { position: absolute; top: 22px; inset-inline-end: 20px; display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 999px; background: #dff9f5; color: #05656c; font-size: 11px; font-weight: 850; }
.include h3 { margin: 0 0 8px; font-size: 18px; }
.include p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
.free-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 22px; }
.free-card { display: flex; gap: 16px; align-items: flex-start; padding: 22px 24px; border-radius: 20px; background: #fff; border: 1px dashed #11b8ad; }
.free-icon { flex: 0 0 50px; height: 50px; display: grid; place-items: center; border-radius: 15px; background: #e0f8f7; color: #068f95; }
.free-word { display: block; font-size: 28px; line-height: 1.1; font-weight: 900; color: #007a73; letter-spacing: .01em; }
.free-card b { display: block; font-size: 16px; margin: 2px 0 4px; }
.free-card small { display: block; color: var(--muted); font-size: 13px; line-height: 1.6; }

/* D. PBX expansion */
.pbx { background: #fff; }
.pbx-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
.pbx-accent { margin: 0 0 14px; color: #007a73; font-size: 19px; font-weight: 800; }
.pbx-text { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.8; }
.pbx-diagram { margin: 0; padding: 30px 24px; border-radius: 24px; background: #f4fbfd; border: 1px solid #d5e9f1; text-align: center; }
.pbx-node { display: inline-flex; align-items: center; gap: 8px; padding: 12px 26px; border-radius: 14px; background: var(--navy); color: #fff; font-weight: 900; font-size: 18px; letter-spacing: .06em; }
.pbx-node svg { color: var(--mint); }
.pbx-lines { position: relative; height: 30px; margin: 22px 18% 0; border-inline: 2px solid #9fc9d8; border-top: 2px solid #9fc9d8; }
.pbx-lines::before { content: ''; position: absolute; bottom: 100%; left: calc(50% - 1px); width: 2px; height: 22px; background: #9fc9d8; }
.pbx-phones { display: grid; grid-template-columns: 1fr 1.4fr; gap: 16px; align-items: start; }
.pbx-phone { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 16px 10px; border-radius: 16px; }
.pbx-phone.included { background: #fff; border: 2px solid #11b8ad; color: #068f95; }
.pbx-phone.included b { color: var(--fg); font-size: 14px; }
.pbx-phone.included small { color: var(--muted); font-size: 12px; }
.pbx-extra { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 12px; border-radius: 16px; border: 2px dashed #b9cbd5; }
.pbx-phone.extra { color: #8aa0ad; background: #fff; border: 1px dashed #c6d5dd; padding: 12px 8px; }
.pbx-extra b { grid-column: 1 / -1; font-size: 13px; color: #4f6676; font-weight: 800; }

/* E. How it works */
.how { background: #eef8fb; }
.steps { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.step { position: relative; padding: 26px 22px; border-radius: 20px; background: #fff; border: 1px solid #d5e7f0; }
.step-icon { display: grid; place-items: center; width: 56px; height: 56px; margin-bottom: 16px; border-radius: 16px; color: #fff; background: linear-gradient(135deg, #16cbbd, #167ed3); }
.step-num { position: absolute; top: 22px; inset-inline-end: 22px; font-size: 28px; font-weight: 900; color: #c4dde6; }
.step h3 { margin: 0 0 8px; font-size: 18px; }
.step p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.7; }

/* F. Offer */
.offer { background: #f8fcfe; }
.offer-panel { display: grid; grid-template-columns: .9fr 1.1fr; border-radius: 28px; overflow: hidden; background: #fff; border: 1px solid #d5e9f1; box-shadow: 0 24px 60px rgba(10,57,87,.08); }
.offer-price { padding: 42px 38px; color: #fff; background: radial-gradient(circle at 100% 0%, rgba(105,244,224,.35), transparent 45%), linear-gradient(140deg, #071d34, #0b3a5a); }
.offer-price h2 { margin: 18px 0 6px; font-size: clamp(22px, 2.4vw, 30px); line-height: 1.3; }
.offer-amount { margin: 0; line-height: 1; }
.offer-amount strong { font-size: clamp(88px, 9vw, 130px); font-weight: 900; letter-spacing: -.06em; }
.offer-amount span { margin-inline-start: 10px; font-size: 28px; font-weight: 800; color: #c9fbf6; }
.offer-once { margin: 8px 0 22px; color: #b5d2df; font-size: 14px; }
.offer-free { display: grid; gap: 10px; }
.offer-free span { display: flex; align-items: baseline; gap: 10px; padding: 12px 16px; border-radius: 14px; background: rgba(47,224,210,.12); border: 1px solid rgba(47,224,210,.35); color: #e4fbf9; font-size: 15px; }
.offer-free b { color: var(--mint); font-size: 20px; font-weight: 900; }
.offer-details { padding: 40px 38px; }
.offer-details h3 { margin: 0 0 16px; font-size: 20px; }
.offer-list { list-style: none; margin: 0 0 18px; padding: 0; display: grid; gap: 12px; }
.offer-list li { display: flex; align-items: center; gap: 10px; font-weight: 700; }
.offer-list svg { flex: 0 0 18px; color: #0aa79d; }
.offer-phones { margin: 0 0 20px; padding: 12px 16px; border-radius: 12px; background: #eef8fb; color: #285066; font-size: 14px; line-height: 1.65; }
.offer-closing { margin: 0 0 18px; font-size: 20px; font-weight: 850; color: var(--navy); }
.offer-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.offer-actions .btn { min-height: 50px; }
.btn-wa-light { flex-wrap: wrap; color: #066b3a; border: 1px solid #8fdcb1; background: #eefcf4; }
.btn-wa-light bdi { white-space: nowrap; }
.btn-wa-light:hover { background: #dcf8e8; }
.offer-terms { grid-column: 1 / -1; padding: 18px 38px 22px; background: #f4f9fc; border-top: 1px solid #e1edf3; color: #4a6578; font-size: 12.5px; line-height: 1.65; }
.offer-terms p { margin: 0 0 6px; }
.offer-terms p:last-child { margin: 0; }

/* G. FAQ */
.faq { background: #fff; }
.faq-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 56px; align-items: start; }
.faq-list { display: grid; gap: 10px; }
.faq-item { border: 1px solid #d7e9f1; border-radius: 14px; background: #fbfdff; }
.faq-item[open] { border-color: #9de0df; background: #fff; }
.faq-item summary { display: flex; justify-content: space-between; align-items: center; gap: 14px; padding: 16px 18px; cursor: pointer; list-style: none; font-weight: 750; font-size: 15px; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary:focus-visible { outline: 3px solid #31d5cf; outline-offset: 2px; border-radius: 14px; }
.faq-toggle { position: relative; flex: 0 0 18px; height: 18px; }
.faq-toggle::before, .faq-toggle::after { content: ''; position: absolute; inset-inline-start: 2px; top: 8px; width: 14px; height: 2px; border-radius: 2px; background: #00757b; transition: transform .2s; }
.faq-toggle::after { transform: rotate(90deg); }
.faq-item[open] .faq-toggle::after { transform: rotate(0deg); }
.faq-item p { margin: 0; padding: 0 18px 16px; color: var(--muted); font-size: 14px; line-height: 1.75; }

/* Mobile sticky contact */
.sticky-cta { display: none; }

@media (max-width: 1100px) {
  .benefit-grid, .include-grid, .steps { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .hero { padding: 64px 0 70px; }
  .hero-grid, .pbx-grid, .offer-panel, .faq-grid { grid-template-columns: 1fr; }
  .hero-visual { max-width: 600px; width: 100%; margin-inline: auto; }
  .faq-grid { gap: 24px; }
}
@media (max-width: 690px) {
  .hero { padding: 44px 0 54px; }
  h1 { font-size: clamp(34px, 9.5vw, 48px); }
  .hero-sub { font-size: 16px; }
  .hero-offer-price strong { font-size: 34px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-visual { padding: 18px 18px 36px; }
  .visual-missed, .visual-details { width: 100%; }
  .wave { display: none; }
  .benefit-grid, .include-grid, .steps, .free-row { grid-template-columns: 1fr; }
  .pbx-phones { grid-template-columns: 1fr; }
  .pbx-lines { margin-inline: 25%; }
  .offer-price, .offer-details { padding: 30px 22px; }
  .offer-terms { padding: 16px 22px; }
  .offer-actions { flex-direction: column; }
  .offer-actions .btn { width: 100%; }
  .sticky-cta { position: fixed; z-index: 40; inset-inline: 12px; bottom: 12px; display: flex; gap: 8px; padding: 8px; border-radius: 16px; background: rgba(7,29,52,.94); box-shadow: 0 12px 30px rgba(0,0,0,.25); transform: translateY(140%); visibility: hidden; transition: transform .25s ease, visibility .25s; }
  .sticky-cta.show { transform: none; visibility: visible; }
  .sticky-cta .btn-primary { flex: 1; min-height: 46px; padding: 10px 14px; }
  .sticky-cta .btn-wa { flex: 0 0 52px; min-height: 46px; padding: 0; }
}
@media (prefers-reduced-motion: reduce) { .sticky-cta { transition: none; } }
</style>

<style scoped>
/* Brochure campaign additions: feature row, trust strip, value stack, PBX bullets */
.feature-row { list-style: none; display: flex; flex-wrap: wrap; gap: 8px 18px; margin: -8px 0 24px; padding: 0; color: #bfe9e4; font-size: 14px; font-weight: 700; }
.feature-row li { display: inline-flex; align-items: center; gap: 6px; }
.feature-row svg { color: var(--mint); }
.hero-offer-price small { margin-inline-start: 6px; font-size: 13px; font-weight: 700; color: #a9c9d8; }
.hero-free em, .worth { font-style: normal; font-weight: 600; opacity: .8; }
.hero-tagline { margin: 18px 0 0; color: var(--mint); font-weight: 800; font-size: 15px; }
.trust { background: #e8f5f8; border-bottom: 1px solid #d4eaf0; }
.trust-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; padding-block: 24px; }
.trust-item { display: flex; align-items: center; gap: 12px; }
.trust-icon { flex: 0 0 42px; height: 42px; display: grid; place-items: center; border-radius: 13px; border: 1px solid #b7e5eb; background: #fff; color: #00888b; }
.trust-item b { display: block; font-size: 13.5px; color: #10304a; line-height: 1.35; }
.trust-item small { display: block; font-size: 12px; color: #4a6578; line-height: 1.45; }
.pbx-bullets { list-style: none; margin: 18px 0; padding: 0; display: grid; gap: 10px; }
.pbx-bullets li { display: flex; align-items: center; gap: 10px; font-weight: 700; }
.pbx-bullets svg { flex: 0 0 18px; color: #0aa79d; }
.pbx-note { margin: 0; padding: 12px 16px; border-radius: 12px; background: #eef8fb; color: #285066; font-size: 14px; line-height: 1.65; }
.value-stack { margin: 0 0 18px; display: grid; border-top: 1px solid #e1edf3; }
.value-stack > div { display: flex; justify-content: space-between; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #e1edf3; }
.value-stack dt { display: flex; align-items: center; gap: 10px; font-weight: 700; }
.value-stack dt svg { flex: 0 0 18px; color: #0aa79d; }
.value-stack dd { margin: 0; text-align: end; white-space: nowrap; }
.value-stack dd b { font-size: 16px; color: var(--navy); }
.value-stack dd small { display: block; font-size: 12px; color: var(--muted); }
.value-stack .free dd b { color: #007a73; font-size: 18px; font-weight: 900; }
.value-stack .free dt svg { color: #d92d31; }
@media (max-width: 1100px) { .trust-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 690px) {
  .trust-grid { grid-template-columns: 1fr 1fr; gap: 16px 12px; }
  .trust-icon { flex-basis: 36px; height: 36px; }
  .value-stack dd { white-space: normal; }
}
</style>
