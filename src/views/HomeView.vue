<template>
  <div class="brochure-home">
    <!-- Brochure-inspired opening: navy, teal, clear value proposition -->
    <section class="marketing-hero" id="solution">
      <div class="hero-halo hero-halo-one" aria-hidden="true"></div>
      <div class="hero-halo hero-halo-two" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="hero-eyebrow"><span class="eyebrow-pulse"></span>{{ s.hero.eyebrow }}</div>
          <p class="hero-product">{{ s.hero.product }}</p>
          <h1>{{ s.hero.headline }} <span>{{ s.hero.accent }}</span></h1>
          <p class="hero-sub">{{ s.hero.sub }}</p>
          <router-link class="hero-price" :to="{ path: '/', hash: '#offer' }">
            <span class="hero-price-tag">{{ s.offer.ribbon }}</span>
            <span class="hero-price-amount"><strong>{{ price.package }}</strong> {{ currency }}</span>
            <span class="hero-price-once">{{ s.offer.heroNote }}</span>
          </router-link>
          <div class="hero-actions">
            <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.hero.demoCta }} <MarketingIcon name="arrow" :size="17" class="flip-rtl" /></router-link>
            <router-link class="btn hero-outline" :to="{ path: '/', hash: '#offer' }">{{ s.hero.offerCta }}</router-link>
            <a class="btn hero-whatsapp" :href="whatsappLink" target="_blank" rel="noopener noreferrer"><MarketingIcon name="whatsapp" :size="18" />{{ s.hero.whatsappCta }}</a>
          </div>
          <div class="hero-badges">
            <span v-for="badge in s.hero.badges" :key="badge"><MarketingIcon name="check" :size="15" />{{ badge }}</span>
          </div>
          <p class="hero-status"><span class="hero-status-dot" aria-hidden="true"></span>{{ s.hero.status }}</p>
        </div>
        <div class="hero-art" role="img" :aria-label="s.hero.visualLabel">
          <div class="art-grid" aria-hidden="true"></div>
          <div class="art-top"><span class="art-live"><i></i> {{ s.visual.status }}</span><span>FSS / MOJEEB AI</span></div>
          <div class="art-incoming">
            <div class="art-icon incoming-icon"><MarketingIcon name="phone" :size="25" /></div>
            <div><b>{{ s.visual.incoming }}</b><small>{{ s.visual.incomingSub }}</small></div>
            <span class="incoming-pulse" aria-hidden="true"></span>
          </div>
          <div class="art-connector" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="art-agent">
            <div class="art-icon bot-icon"><MarketingIcon name="bot" :size="34" /></div>
            <div class="art-agent-copy"><span class="art-kicker">{{ s.visual.aiLabel }}</span><b>{{ s.visual.agent }}</b><small>{{ s.visual.agentDesc }}</small></div>
            <div class="audio-bars" aria-hidden="true"><i v-for="n in 9" :key="n"></i></div>
          </div>
          <div class="art-events">
            <div class="event-label"><MarketingIcon name="messages" :size="18" /> {{ s.visual.followup }}</div>
            <div class="event-chip"><MarketingIcon name="check" :size="14" /> {{ s.visual.context }}</div>
          </div>
          <div class="art-bottom"><MarketingIcon name="shield" :size="15" /> {{ s.visual.footer }}</div>
          <div class="floating-label"><MarketingIcon name="globe" :size="16" /> {{ s.visual.language }}</div>
        </div>
      </div>
      <div class="hero-bottom-rule"></div>
    </section>

    <section class="trust-row" :aria-label="s.trust.aria">
      <div class="container trust-content">
        <div v-for="(item, i) in s.trust.items" :key="i" class="trust-item">
          <span class="trust-icon"><MarketingIcon :name="['phone', 'server', 'globe'][i]" :size="22" /></span>
          <span><b>{{ item.title }}</b><small>{{ item.sub }}</small></span>
        </div>
      </div>
    </section>

    <section class="section offer-section" id="offer">
      <div class="container">
        <div class="section-heading offer-heading">
          <div><p class="section-label">{{ s.offer.eyebrow }}</p><h2 class="section-title">{{ s.offer.title }}</h2><p class="section-sub">{{ s.offer.sub }}</p></div>
          <span class="limited-pill"><MarketingIcon name="clock" :size="17" />{{ s.offer.ribbon }}</span>
        </div>
        <div class="offer-layout">
          <div class="price-panel">
            <div class="price-kicker">{{ s.offer.priceIntro }}</div>
            <div class="price-main"><strong>{{ price.package }}</strong><span class="currency">{{ currency }}</span></div>
            <div class="price-once">{{ s.offer.once }}</div>
            <dl class="price-rows">
              <div v-for="row in s.offer.rows" :key="row.label" :class="{ total: row.total }"><dt>{{ row.label }}</dt><dd><bdi>{{ row.value }}</bdi> {{ currency }}</dd></div>
            </dl>
            <p class="price-vat">{{ s.offer.vatNote }}</p>
            <p class="price-vat-detail">{{ s.offer.vatDetail }}</p>
            <a class="price-whatsapp" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
              <span class="pw-label"><MarketingIcon name="whatsapp" :size="18" />{{ s.offer.quoteCta }}</span> <MarketingIcon name="arrow" :size="18" class="flip-rtl" />
            </a>
            <p class="price-terms">{{ s.offer.terms }}</p>
          </div>
          <div class="package-panel">
            <div class="package-heading"><div><p class="section-label">{{ s.offer.includedLabel }}</p><h3>{{ s.offer.includedTitle }}</h3></div><span class="package-pill">MOJEEB AI STARTER</span></div>
            <div class="package-list">
              <div class="package-item" v-for="item in s.offer.items" :key="item.title">
                <span class="package-icon"><MarketingIcon :name="item.icon" :size="27" /></span>
                <div><h4>{{ item.title }}</h4><p>{{ item.sub }}</p></div>
                <MarketingIcon name="check" class="package-check" :size="18" />
              </div>
            </div>
            <ul class="package-facts">
              <li v-for="fact in s.offer.facts" :key="fact.text"><MarketingIcon :name="fact.icon" :size="19" /><span>{{ fact.text }}</span></li>
            </ul>
            <router-link class="btn btn-primary package-cta" :to="{ path: '/', hash: '#demo' }">{{ s.offer.demoCta }}</router-link>
          </div>
        </div>
        <div class="requirements">
          <h3 class="req-title">{{ s.offer.reqTitle }}</h3>
          <div class="req-grid">
            <div class="req-item" v-for="req in s.offer.reqs" :key="req.title"><span class="req-icon"><MarketingIcon :name="req.icon" :size="21" /></span><div><b>{{ req.title }}</b><p>{{ req.desc }}</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section how-section" id="how">
      <div class="container">
        <div class="section-heading centered"><p class="section-label">{{ s.how.eyebrow }}</p><h2 class="section-title">{{ s.how.title }}</h2><p class="section-sub">{{ s.how.sub }}</p></div>
        <div class="how-cards">
          <template v-for="(step, i) in s.how.steps" :key="step.title">
            <div class="how-card" :class="{ 'how-card-optional': step.tag }">
              <div class="step-heading"><span class="step-number">0{{ i+1 }}</span><span class="step-icon"><MarketingIcon :name="step.icon" :size="31" /></span></div>
              <h3>{{ step.title }} <span v-if="step.tag" class="step-tag">{{ step.tag }}</span></h3><p>{{ step.desc }}</p>
            </div>
            <div v-if="i < s.how.steps.length - 1" class="how-arrow" aria-hidden="true"><MarketingIcon name="arrow" :size="23" /></div>
          </template>
        </div>
        <div class="how-zones">
          <div class="how-zone"><MarketingIcon name="server" :size="20" /><div><b>{{ s.how.localTitle }}</b><p>{{ s.how.localDesc }}</p></div></div>
          <div class="how-zone how-zone-cloud"><MarketingIcon name="cloud" :size="20" /><div><b>{{ s.how.cloudTitle }}</b><p>{{ s.how.cloudDesc }}</p></div></div>
        </div>
      </div>
    </section>

    <section class="section benefits-section" id="features">
      <div class="container">
        <div class="section-heading"><p class="section-label">{{ s.benefits.eyebrow }}</p><h2 class="section-title">{{ s.benefits.title }}</h2><p class="section-sub">{{ s.benefits.sub }}</p></div>
        <div class="benefits-grid">
          <article class="benefit-card" v-for="item in s.benefits.items" :key="item.title">
            <div class="benefit-icon"><MarketingIcon :name="item.icon" :size="27" /></div>
            <h3>{{ item.title }}</h3><p>{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section cloud-section" id="cloud">
      <div class="container cloud-grid">
        <div class="cloud-copy">
          <div class="cloud-tag"><MarketingIcon name="cloud" :size="19" />{{ s.cloud.badge }}</div>
          <h2>{{ s.cloud.title }} <span>{{ s.cloud.accent }}</span></h2>
          <p>{{ s.cloud.desc }}</p>
          <div class="cloud-points"><div v-for="item in s.cloud.items" :key="item.title"><span><MarketingIcon :name="item.icon" :size="20" /></span><div><b>{{ item.title }}</b><small>{{ item.sub }}</small></div></div></div>
          <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.cloud.cta }} <MarketingIcon name="arrow" :size="17" class="flip-rtl" /></router-link>
          <p class="cloud-disclaimer">{{ s.cloud.disclaimer }}</p>
        </div>
        <div class="portal-window" :aria-label="s.cloud.illustrationLabel" role="img">
          <div class="portal-window-top"><span class="portal-brand"><span>F</span> FSS Cloud Portal</span><span class="portal-dot-row"><i></i><i></i><i></i></span></div>
          <div class="portal-window-inner"><p class="portal-eyebrow">{{ s.cloud.preview }}</p><h3>{{ s.cloud.dashboardTitle }}</h3>
            <div class="portal-kpis"><div v-for="(kpi,i) in s.cloud.kpis" :key="kpi.label"><span class="kpi-icon"><MarketingIcon :name="['phone','bell','messages'][i]" :size="22" /></span><small>{{ kpi.label }}</small><strong>{{ kpi.value }}</strong></div></div>
            <div class="portal-feed"><div class="portal-feed-top"><span>{{ s.cloud.activity }}</span><span class="status-tiny"><i></i>{{ s.cloud.ready }}</span></div>
              <div class="portal-feed-row" v-for="(activity,i) in s.cloud.activities" :key="i"><span class="feed-status"><MarketingIcon :name="i===1 ? 'bell' : 'phone'" :size="16" /></span><span>{{ activity }}</span><span class="feed-check"><MarketingIcon name="check" :size="15" /></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section sectors-section" id="industries">
      <div class="container sectors-grid">
        <div><p class="section-label">{{ s.sectors.eyebrow }}</p><h2 class="section-title">{{ s.sectors.title }}</h2><p class="section-sub">{{ s.sectors.sub }}</p></div>
        <div class="sectors-tags"><span v-for="industry in s.sectors.items" :key="industry"><MarketingIcon name="check" :size="17" /> {{ industry }}</span></div>
      </div>
    </section>

    <section class="section faq-section" id="faq">
      <div class="container faq-grid">
        <div><p class="section-label">{{ s.faq.eyebrow }}</p><h2 class="section-title">{{ s.faq.title }}</h2><p class="section-sub">{{ s.faq.sub }}</p></div>
        <div class="faq-list">
          <details v-for="(item, i) in s.faq.items" :key="i" class="faq-item">
            <summary><span>{{ item.q }}</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="pre-contact-section">
      <div class="container">
        <div class="cta-ribbon"><div><p class="cta-eyebrow">{{ s.final.eyebrow }}</p><h2>{{ s.final.title }}</h2><p>{{ s.final.sub }}</p></div>
          <div class="cta-ribbon-actions"><router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.final.demoCta }}</router-link><a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="btn cta-outline"><MarketingIcon name="whatsapp" :size="18" />{{ s.final.whatsappLabel }} <bdi dir="ltr">+968 9277 1730</bdi></a></div>
        </div>
      </div>
    </section>
    <VoicegateDemoSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { WHATSAPP_NUMBER } from '../constants.js'
import { PACKAGE, INSTALLATION, TOTAL, VAT, PRICE_SUMMARY, omr, omr3 } from '../pricing.js'
import MarketingIcon from '../components/MarketingIcon.vue'
import ContactSection from '../components/ContactSection.vue'
import VoicegateDemoSection from '../components/VoicegateDemoSection.vue'

const { lang } = useLanguage()
const s = computed(() => messages[lang.value] || messages.en)
const currency = computed(() => (lang.value === 'ar' ? 'ر.ع' : 'OMR'))
const price = { package: omr(PACKAGE) }
const P = omr(PACKAGE), I = omr(INSTALLATION), T = omr(TOTAL)
const whatsappLink = computed(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.value.whatsapp)}`)

const messages = {
  en: {
    whatsapp: `Hello Future Smart Support. I would like a demo and quotation for the Mojeeb starter package (OMR ${P}; OMR ${T} with standard professional installation at a fixed OMR ${I}).`,
    hero: {
      eyebrow: 'SMART COMMUNICATIONS. STRONGER BUSINESSES.', product: 'Introducing Mojeeb AI · FSS AI Agent',
      headline: 'Manage your customer communications', accent: 'from anywhere.',
      sub: 'Meet Mojeeb AI: your own Ubuntu-based AI receptionist appliance for growing businesses in Oman. Keep your compatible existing line, add one IP desk phone, and add cloud services only when you need them.',
      offerCta: `View the OMR ${P} offer`, demoCta: 'Register interest or request a demo', whatsappCta: 'WhatsApp us',
      status: 'Pre-launch: Mojeeb AI is preparing for launch in Oman. Register your interest or book a demonstration; orders and delivery dates will be confirmed at launch.',
      badges: ['Arabic & English', 'Your own local appliance', 'No recurring licence fee'],
      visualLabel: 'Illustrative call flow showing an incoming call, the Mojeeb AI agent and follow-up.'
    },
    visual: { status:'AI agent ready', incoming:'Incoming customer call', incomingSub:'Via your compatible telephone line', aiLabel:'YOUR AI RECEPTIONIST', agent:'Mojeeb is here to help', agentDesc:'Answers · captures context · assists with follow-up', followup:'Customer conversation', context:'Follow-up ready', footer:'Calls handled by your Mojeeb appliance', language:'Arabic + English' },
    trust: { aria:'Product highlights', items:[{title:'Keep your number',sub:'Where your line is compatible'},{title:'Your own appliance',sub:'Ubuntu-based Mojeeb AI server on-site'},{title:'Arabic + English',sub:'Communicate with more customers'}] },
    offer: {
      eyebrow:'THE MOJEEB AI STARTER PACKAGE', title:'Everything you need to get started.', sub:'Own the core local solution: the Mojeeb AI appliance, a line gateway and an IP desk phone in one introductory package.',
      ribbon:'Special introductory offer', heroNote:`one-time · ${VAT.en.short}`, priceIntro:'SPECIAL INTRODUCTORY PRICE', once:`One-time appliance package · ${VAT.en.short}`,
      rows:[{label:'Mojeeb starter package',value:omr3(PACKAGE)},{label:'Standard professional installation (fixed price)',value:omr3(INSTALLATION)},{label:'Total with standard installation',value:omr3(TOTAL),total:true}],
      vatNote:PRICE_SUMMARY.en,
      vatDetail:VAT.en.detail,
      quoteCta:'Ask about this offer on WhatsApp',
      terms:'Standard installation requires an existing LAN and a compatible ADSL service. Additional network, cabling, internet and non-standard installation work requires a separate quotation. Final availability, compatibility, delivery and any non-standard work are confirmed in writing.',
      includedLabel:'WHAT IS INCLUDED', includedTitle:'Three essentials. One smart solution.', demoCta:'Register interest in this package',
      items:[{icon:'server',title:'Mojeeb AI appliance',sub:'Your own physical local server running Ubuntu Server and the FSS AI agent.'},{icon:'gateway',title:'Grandstream HT813 gateway',sub:'Connects one compatible analog telephone line to the system over SIP.'},{icon:'deskphone',title:'One IP desk phone',sub:'For your team to take and return calls through the configured system.'}],
      facts:[{icon:'wallet',text:'No recurring Mojeeb software licence fee for the appliance.'},{icon:'bot',text:'AI provider charges are not included. Mojeeb uses external AI services for speech recognition, AI replies and voice. You normally use your own AI provider account and pay the provider directly; our technicians can help you create the account and configure your API key securely.'},{icon:'shield',text:'One-month replacement warranty on the Mojeeb appliance, subject to FSS warranty terms.'},{icon:'cloud',text:'The optional FSS Cloud Portal is not included and is priced separately.'}],
      reqTitle:'Before you buy: installation, site and line requirements',
      reqs:[{icon:'tool',title:'Standard professional installation',desc:`A fixed price of OMR ${omr3(INSTALLATION)}, not a percentage of the package price. Additional network, cabling, internet and other non-standard installation work requires a separate quotation.`},{icon:'network',title:'LAN and ADSL required',desc:'Standard installation needs a working local network (LAN) and a compatible, active ADSL internet connection. Other connection types are checked case by case.'},{icon:'phone',title:'Your number and Caller ID',desc:'Keep your existing business number where the line and provider service are compatible. Caller ID works when your provider enables it and the line supports it; provider fees may apply.'}]
    },
    how: { eyebrow:'HOW MOJEEB AI WORKS',title:'Your current phone line. A smarter way to work.',sub:'We connect Mojeeb to your compatible telephone line through the gateway. The Mojeeb AI appliance at your premises handles the calls, and your team follows up on the IP desk phone.',
      localTitle:'On your premises',localDesc:'The gateway, the IP desk phone and the Mojeeb AI appliance sit at your premises and handle your calls. AI speech and language features use connected AI services over your internet connection.',
      cloudTitle:'Optional, in the cloud',cloudDesc:'With a separately priced cloud-portal plan, your team can review calls, notifications and follow-ups remotely.',
      steps:[{icon:'phone',title:'Compatible phone line',desc:'Customers keep calling your business number on a compatible analog line from your provider.'},{icon:'gateway',title:'HT813 gateway',desc:'Connects the analog line to the system over SIP. It is the line interface, not the AI.'},{icon:'server',title:'Mojeeb AI appliance',desc:'Greets callers in Arabic or English, answers common questions and captures requests.'},{icon:'cloud',title:'Follow-up & cloud portal',tag:'Optional',desc:'Your team follows up on the IP desk phone. The optional cloud portal adds remote visibility.'}] },
    benefits: { eyebrow:'WHY MOJEEB AI',title:'More than answering the phone.',sub:'Give every customer a more consistent first contact — and your team the context to respond.',items:[{icon:'bot',title:'AI-assisted call answering',desc:'Mojeeb can greet callers and handle common questions when your team is busy or outside office hours.'},{icon:'globe',title:'Arabic + English',desc:'Welcome callers and answer common questions in both languages.'},{icon:'phone',title:'Keep your number',desc:'Use your existing business number where the line is compatible, with Caller ID where your provider enables it.'},{icon:'deskphone',title:'One IP desk phone',desc:'A modern IP handset is included so your team can take and return calls.'},{icon:'messages',title:'Improved follow-up',desc:'Caller details captured by Mojeeb help your team respond to enquiries more consistently.'},{icon:'server',title:'Your own appliance',desc:'A dedicated Ubuntu-based Mojeeb AI server at your premises, not a cloud-only app.'},{icon:'wallet',title:'No recurring licence fee',desc:'No recurring Mojeeb software licence fee for the appliance. AI provider charges and optional cloud services are separate.'},{icon:'people',title:'Built for SMEs',desc:'A practical fit for growing teams that need a professional phone presence.'}] },
    cloud: { badge:'OPTIONAL CLOUD PORTAL',title:'Stay close to your customers,',accent:'wherever you work.',desc:'Add the optional FSS Cloud Portal to view calls handled by Mojeeb away from the office and to use the monitoring, maintenance and notification services in your plan.',cta:'Request a demo',disclaimer:`Illustrative dashboard. The cloud portal is optional, is not included in the OMR ${P} package and requires a separately priced plan. Features and support terms are defined in your cloud-service plan.`,illustrationLabel:'Illustrative FSS cloud portal interface',preview:'ILLUSTRATIVE PORTAL PREVIEW',dashboardTitle:'Customer communications',
      items:[{icon:'cloud',title:'Remote call activity',sub:'Review calls handled by Mojeeb: caller number, time, duration and outcome.'},{icon:'bell',title:'Portal notifications',sub:'See missed-call and voicemail notifications when you log in.'},{icon:'phone',title:'Missed-call follow-up',sub:'Missed calls and voicemails can create follow-up tasks for your team.'},{icon:'tool',title:'Connected maintenance and updates',sub:'Maintenance and Mojeeb software updates are provided according to your selected plan.'}],
      kpis:[{label:'Call activity',value:'View'},{label:'Notifications',value:'Portal'},{label:'Follow-ups',value:'Track'}],activity:'Call activity',ready:'Connected',activities:['Incoming call handled','Missed-call notification','Follow-up task created'] },
    sectors:{eyebrow:'WHO IS IT FOR?',title:'Built for small and medium businesses in Oman.',sub:'From first enquiries to follow-up, Mojeeb fits customer-facing businesses that rely on the phone.',items:['Clinics & health services','Restaurants & cafés','Retail stores','Professional offices','Home-service businesses','Other SMEs']},
    faq:{eyebrow:'QUESTIONS & ANSWERS',title:'Good to know before you buy.',sub:'Clear answers about the package, pricing, requirements and optional services.',
      items:[
        {q:`What does the OMR ${P} package include?`,a:`One Mojeeb AI appliance (a physical local server running Ubuntu Server and the FSS AI agent), one Grandstream HT813 analog-to-SIP gateway and one IP desk telephone. The package price is OMR ${omr3(PACKAGE)}. External AI-provider usage and the optional FSS Cloud Portal are separate.`},
        {q:'Is VAT added to the price?',a:`${VAT.en.statement} ${VAT.en.detail}`},
        {q:'How much is installation?',a:`Standard professional installation is a fixed price of OMR ${omr3(INSTALLATION)}. It is not calculated as a percentage of the package price. The total for the package with standard installation is OMR ${omr3(TOTAL)}. Standard installation assumes a working LAN and a compatible ADSL connection; additional network, cabling, internet and non-standard work requires a separate quotation.`},
        {q:'Can I keep my business number? What about Caller ID?',a:'You can keep your existing business landline number, or a voice number supplied with a compatible ADSL service (for example from Omantel), when the line and provider service are compatible. Caller ID can be configured when your provider enables it and the line supports it; provider fees may apply. We check compatibility before installation.'},
        {q:'Are there recurring fees?',a:'There is no recurring Mojeeb software licence fee for the appliance. AI provider charges are separate: you normally use your own AI provider account and pay the provider directly, according to how much Mojeeb is used. Your telephone line, internet connection, the optional FSS Cloud Portal and other separately contracted services may also have ongoing charges.'},
        {q:'Does Mojeeb AI need an internet connection?',a:'Yes. A compatible ADSL internet connection is required. Call handling runs on the appliance at your premises, while speech recognition, AI responses and voice generation use external AI services over the internet. Mojeeb AI does not offer fully offline AI conversations.'},
        {q:'Can I see my calls without the cloud portal?',a:'Yes. The appliance includes an on-site web dashboard, available on your office network, for calls, voicemails and follow-ups. The optional FSS Cloud Portal adds access from outside the office.'},
        {q:'What does the optional cloud portal add?',a:'With a separately priced FSS Cloud Portal plan, your team can log in to review calls handled by Mojeeb, see missed-call and voicemail notifications, and manage follow-up tasks. Connected maintenance, software-update services and other options will be defined in each plan.'},
        {q:'What warranty is provided?',a:'The Mojeeb appliance has a one-month replacement warranty, subject to FSS written warranty terms. Warranty arrangements for the gateway and IP phone are confirmed in your quotation.'},
        {q:'Can I order now? Is there a free trial?',a:'Mojeeb AI is in pre-launch. You can register your interest and book a live demonstration now; orders and delivery dates will be confirmed at launch. No free trial is currently offered.'}
      ]},
    final:{eyebrow:'YOUR CUSTOMERS ARE CALLING',title:'Ready for a smarter first impression?',sub:'Register your interest in Mojeeb AI and book a live demonstration ahead of launch.',demoCta:'Register interest or request a demo',whatsappLabel:'WhatsApp'}
  },
  ar: {
    whatsapp:`مرحباً فريق Future Smart Support، أرغب في عرض توضيحي وتسعيرة لباقة مُجيب الأساسية (${P} ر.ع، أو ${T} ر.ع مع التركيب الاحترافي الاعتيادي بسعر ثابت ${I} ر.ع).`,
    hero:{eyebrow:'اتصالات أذكى. أعمال أقوى.',product:'تعرّف على مُجيب · وكيل FSS الذكي',headline:'أدر اتصالات عملائك',accent:'من أي مكان.',sub:'مُجيب جهاز استقبال ذكي خاص بك يعمل بنظام Ubuntu للأعمال النامية في عُمان. احتفظ بخطك الحالي المتوافق، وأضف هاتفاً مكتبياً بتقنية IP، واشترك في الخدمات السحابية فقط عندما تحتاج إليها.',offerCta:`شاهد عرض ${P} ر.ع`,demoCta:'سجّل اهتمامك أو اطلب عرضاً توضيحياً',whatsappCta:'تواصل عبر واتساب',status:'مرحلة ما قبل الإطلاق: يستعد مُجيب للإطلاق في عُمان. سجّل اهتمامك أو احجز عرضاً توضيحياً، وسيتم تأكيد الطلبات ومواعيد التسليم عند الإطلاق.',badges:['العربية والإنجليزية','جهاز محلي خاص بك','بدون رسوم ترخيص دورية'],visualLabel:'رسم توضيحي لمسار مكالمة واردة عبر مُجيب ثم متابعة العميل.'},
    visual:{status:'مُجيب جاهز',incoming:'مكالمة عميل واردة',incomingSub:'عبر خط هاتفك المتوافق',aiLabel:'مُجيب · وكيلك الذكي',agent:'مُجيب في خدمتك',agentDesc:'يرد · يوثّق · يدعم المتابعة',followup:'محادثة العميل',context:'جاهز للمتابعة',footer:'يتولى جهاز مُجيب استقبال المكالمات',language:'العربية + الإنجليزية'},
    trust:{aria:'مميزات المنتج',items:[{title:'احتفظ برقمك',sub:'متى كان خطك متوافقاً'},{title:'جهاز خاص بك',sub:'خادم مُجيب يعمل بنظام Ubuntu داخل مقرك'},{title:'العربية + الإنجليزية',sub:'تواصل مع عدد أكبر من العملاء'}]},
    offer:{eyebrow:'باقة البداية من مُجيب',title:'كل ما تحتاجه لتبدأ بذكاء.',sub:'امتلك الحل المحلي الأساسي: جهاز مُجيب الذكي وبوابة لخط الهاتف وهاتفاً مكتبياً بتقنية IP في باقة تعريفية واحدة.',
      ribbon:'عرض تعريفي خاص',heroNote:`لمرة واحدة · ${VAT.ar.short}`,priceIntro:'سعر تعريفي خاص',once:`باقة الجهاز لمرة واحدة · ${VAT.ar.short}`,
      rows:[{label:'باقة مُجيب الأساسية',value:omr3(PACKAGE)},{label:'التركيب الاحترافي الاعتيادي (سعر ثابت)',value:omr3(INSTALLATION)},{label:'الإجمالي مع التركيب الاعتيادي',value:omr3(TOTAL),total:true}],
      vatNote:PRICE_SUMMARY.ar,
      vatDetail:VAT.ar.detail,
      quoteCta:'استفسر عن العرض عبر واتساب',
      terms:'يشترط للتركيب الاعتيادي توفر شبكة LAN قائمة وخدمة ADSL متوافقة. وتتطلب أعمال الشبكة والكابلات والإنترنت الإضافية وأعمال التركيب غير الاعتيادية عرض سعر منفصلاً. ويُؤكَّد التوفر والتوافق والتسليم وأي أعمال غير اعتيادية كتابياً.',
      includedLabel:'محتويات العرض',includedTitle:'ثلاثة عناصر. حل ذكي واحد.',demoCta:'سجّل اهتمامك بهذه الباقة',
      items:[{icon:'server',title:'جهاز مُجيب الذكي',sub:'خادم محلي خاص بك يعمل بنظام Ubuntu Server ويشغّل وكيل FSS الذكي.'},{icon:'gateway',title:'بوابة Grandstream HT813',sub:'تربط خط هاتف تناظري واحد متوافق بالنظام عبر SIP.'},{icon:'deskphone',title:'هاتف مكتبي واحد بتقنية IP',sub:'لاستقبال المكالمات ومعاودة الاتصال عبر النظام المُهيّأ.'}],
      facts:[{icon:'wallet',text:'لا توجد رسوم ترخيص برمجي دورية على جهاز مُجيب.'},{icon:'bot',text:'رسوم مزوّدي الذكاء الاصطناعي غير مشمولة. يستخدم مُجيب خدمات ذكاء اصطناعي خارجية للتعرّف على الكلام والردود والصوت. وعادةً تستخدم حساب مزوّد الذكاء الاصطناعي الخاص بك وتدفع للمزوّد مباشرة، ويمكن لفنيّينا مساعدتك في إنشاء الحساب وإعداد مفتاح API بشكل آمن.'},{icon:'shield',text:'ضمان استبدال جهاز مُجيب لمدة شهر واحد، وفق شروط الضمان من FSS.'},{icon:'cloud',text:'بوابة FSS السحابية الاختيارية غير مشمولة وتُسعّر بشكل منفصل.'}],
      reqTitle:'قبل الشراء: متطلبات التركيب والموقع والخط',
      reqs:[{icon:'tool',title:'التركيب الاحترافي الاعتيادي',desc:`بسعر ثابت قدره ${omr3(INSTALLATION)} ر.ع، وليس نسبة من سعر الباقة. وتتطلب أعمال الشبكة والكابلات والإنترنت الإضافية وغيرها من أعمال التركيب غير الاعتيادية عرض سعر منفصلاً.`},{icon:'network',title:'شبكة LAN واتصال ADSL',desc:'يتطلب التركيب الاعتيادي شبكة محلية (LAN) جاهزة واتصال إنترنت ADSL متوافقاً وفعّالاً. تُدرس أنواع الاتصال الأخرى لكل حالة على حدة.'},{icon:'phone',title:'رقمك وخدمة إظهار رقم المتصل',desc:'احتفظ برقم نشاطك الحالي متى كان الخط وخدمة المزوّد متوافقين. تعمل خدمة إظهار رقم المتصل (Caller ID) عند تفعيلها من المزوّد ودعم الخط لها، وقد تنطبق رسوم من المزوّد.'}]
    },
    how:{eyebrow:'كيف يعمل مُجيب',title:'خط هاتفك الحالي. تجربة أعمال أكثر ذكاءً.',sub:'نربط مُجيب بخط هاتفك المتوافق عبر البوابة، ويتولى جهاز مُجيب داخل مقرك التعامل مع المكالمات، ويتابع فريقك عبر هاتف IP المكتبي.',
      localTitle:'داخل مقر عملك',localDesc:'تُركَّب البوابة وهاتف IP المكتبي وجهاز مُجيب داخل مقرك وتتولى التعامل مع مكالماتك. وتستخدم مزايا الكلام واللغة الذكية خدمات ذكاء اصطناعي متصلة عبر الإنترنت.',
      cloudTitle:'اختياري عبر السحابة',cloudDesc:'مع خطة اشتراك منفصلة في البوابة السحابية، يمكن لفريقك مراجعة المكالمات والتنبيهات والمتابعات عن بُعد.',
      steps:[{icon:'phone',title:'خط هاتف متوافق',desc:'يواصل العملاء الاتصال برقم نشاطك على خط تناظري متوافق من مزوّد الخدمة.'},{icon:'gateway',title:'بوابة HT813',desc:'تربط الخط التناظري بالنظام عبر SIP، وهي واجهة الخط وليست الذكاء الاصطناعي.'},{icon:'server',title:'جهاز مُجيب الذكي',desc:'يرحّب بالمتصلين بالعربية أو الإنجليزية، ويجيب عن الأسئلة الشائعة ويسجّل الطلبات.'},{icon:'cloud',title:'المتابعة والبوابة السحابية',tag:'اختياري',desc:'يتابع فريقك عبر هاتف IP المكتبي، وتضيف البوابة السحابية الاختيارية المتابعة عن بُعد.'}]},
    benefits:{eyebrow:'لماذا مُجيب؟',title:'أكثر من مجرد الرد على الهاتف.',sub:'امنح كل عميل تجربة استقبال أفضل، وزوّد فريقك بالمعلومات اللازمة للمتابعة.',items:[{icon:'bot',title:'رد ذكي على المكالمات',desc:'يرحّب مُجيب بالمتصلين ويتعامل مع الأسئلة الشائعة عند انشغال فريقك أو خارج أوقات الدوام.'},{icon:'globe',title:'العربية والإنجليزية',desc:'الترحيب بالمتصلين والإجابة عن الأسئلة الشائعة باللغتين.'},{icon:'phone',title:'احتفظ برقمك',desc:'استخدم رقم نشاطك الحالي متى كان الخط متوافقاً، مع إظهار رقم المتصل حيث يفعّله مزوّد الخدمة.'},{icon:'deskphone',title:'هاتف IP مكتبي واحد',desc:'هاتف IP حديث ضمن الباقة لاستقبال المكالمات ومعاودة الاتصال.'},{icon:'messages',title:'متابعة أفضل للعملاء',desc:'تساعد بيانات المتصلين التي يسجّلها مُجيب فريقك على الرد على الاستفسارات بانتظام.'},{icon:'server',title:'جهاز خاص بك',desc:'خادم مُجيب مخصص يعمل بنظام Ubuntu داخل مقرك، وليس تطبيقاً سحابياً فقط.'},{icon:'wallet',title:'بدون رسوم ترخيص دورية',desc:'لا توجد رسوم ترخيص برمجي دورية على جهاز مُجيب. ورسوم مزوّدي الذكاء الاصطناعي والخدمات السحابية الاختيارية منفصلة.'},{icon:'people',title:'مصمم للمؤسسات الصغيرة والمتوسطة',desc:'حل عملي للفرق التي تحتاج إلى حضور احترافي عبر الهاتف.'}]},
    cloud:{badge:'بوابة سحابية اختيارية',title:'ابقَ قريباً من عملائك',accent:'أينما كنت.',desc:'أضف بوابة FSS السحابية الاختيارية لمتابعة المكالمات التي يتعامل معها مُجيب من خارج المكتب، والاستفادة من خدمات المتابعة والصيانة والتنبيهات المشمولة في خطتك.',cta:'اطلب عرضاً تجريبياً',disclaimer:`واجهة توضيحية. البوابة السحابية اختيارية وليست ضمن باقة ${P} ر.ع وتتطلب خطة اشتراك منفصلة، وتُحدَّد المزايا وشروط الدعم في خطة الخدمة السحابية.`,illustrationLabel:'واجهة توضيحية لبوابة FSS السحابية',preview:'عرض توضيحي للبوابة',dashboardTitle:'إدارة اتصالات العملاء',
      items:[{icon:'cloud',title:'نشاط المكالمات عن بُعد',sub:'راجع المكالمات التي تعامل معها مُجيب: رقم المتصل والوقت والمدة والنتيجة.'},{icon:'bell',title:'تنبيهات داخل البوابة',sub:'اطّلع على تنبيهات المكالمات الفائتة والرسائل الصوتية عند تسجيل الدخول.'},{icon:'phone',title:'متابعة المكالمات الفائتة',sub:'يمكن أن تُنشئ المكالمات الفائتة والرسائل الصوتية مهام متابعة لفريقك.'},{icon:'tool',title:'صيانة وتحديثات متصلة',sub:'تُقدَّم الصيانة وتحديثات برنامج مُجيب وفق خطة الاشتراك التي تختارها.'}],
      kpis:[{label:'نشاط المكالمات',value:'عرض'},{label:'التنبيهات',value:'البوابة'},{label:'المتابعات',value:'تتبّع'}],activity:'نشاط الاتصالات',ready:'متصل',activities:['تم التعامل مع مكالمة واردة','تنبيه مكالمة فائتة','إنشاء مهمة متابعة']},
    sectors:{eyebrow:'لمن هذا الحل؟',title:'مصمم للمؤسسات الصغيرة والمتوسطة في عُمان.',sub:'من الاستفسار الأول إلى المتابعة، يخدم مُجيب الأعمال التي تعتمد على الهاتف في التواصل مع عملائها.',items:['العيادات والخدمات الصحية','المطاعم والمقاهي','متاجر التجزئة','المكاتب المهنية','شركات الخدمات المنزلية','مؤسسات صغيرة ومتوسطة أخرى']},
    faq:{eyebrow:'أسئلة وأجوبة',title:'معلومات مهمة قبل الشراء.',sub:'إجابات واضحة عن الباقة والأسعار والمتطلبات والخدمات الاختيارية.',
      items:[
        {q:`ماذا تشمل باقة ${P} ر.ع؟`,a:`جهاز مُجيب ذكي واحد (خادم محلي يعمل بنظام Ubuntu Server ويشغّل وكيل FSS الذكي)، وبوابة Grandstream HT813 واحدة لتحويل الخط التناظري إلى SIP، وهاتف مكتبي واحد بتقنية IP. سعر الباقة ${omr3(PACKAGE)} ر.ع. ورسوم استخدام مزوّد الذكاء الاصطناعي الخارجي وبوابة FSS السحابية الاختيارية منفصلة.`},
        {q:'هل تُضاف ضريبة القيمة المضافة إلى السعر؟',a:`${VAT.ar.statement} ${VAT.ar.detail}`},
        {q:'كم تكلفة التركيب؟',a:`التركيب الاحترافي الاعتيادي بسعر ثابت قدره ${omr3(INSTALLATION)} ر.ع، ولا يُحتسب كنسبة من سعر الباقة. والإجمالي للباقة مع التركيب الاعتيادي ${omr3(TOTAL)} ر.ع. يفترض التركيب الاعتيادي وجود شبكة LAN جاهزة واتصال ADSL متوافق، وتتطلب أعمال الشبكة والكابلات والإنترنت الإضافية والأعمال غير الاعتيادية عرض سعر منفصلاً.`},
        {q:'هل يمكنني الاحتفاظ برقم نشاطي؟ وماذا عن إظهار رقم المتصل؟',a:'يمكنك الاحتفاظ برقم هاتفك الأرضي الحالي، أو رقم الهاتف المقدم ضمن خدمة ADSL متوافقة (مثلاً من عُمانتل)، متى كان الخط وخدمة المزوّد متوافقين. ويمكن تهيئة خدمة إظهار رقم المتصل عند تفعيلها من المزوّد ودعم الخط لها، وقد تنطبق رسوم من المزوّد. نتحقق من التوافق قبل التركيب.'},
        {q:'هل توجد رسوم دورية؟',a:'لا توجد رسوم ترخيص برمجي دورية على جهاز مُجيب. ورسوم مزوّدي الذكاء الاصطناعي منفصلة: عادةً تستخدم حساب مزوّد الذكاء الاصطناعي الخاص بك وتدفع للمزوّد مباشرة حسب حجم استخدام مُجيب. وقد تترتب أيضاً رسوم مستمرة على خط الهاتف واتصال الإنترنت وبوابة FSS السحابية الاختيارية وأي خدمات أخرى يتم التعاقد عليها بشكل منفصل.'},
        {q:'هل يحتاج مُجيب إلى اتصال بالإنترنت؟',a:'نعم، يلزم اتصال إنترنت ADSL متوافق. يتم التعامل مع المكالمات على الجهاز داخل مقرك، بينما يعتمد التعرّف على الكلام والردود الذكية وتوليد الصوت على خدمات ذكاء اصطناعي خارجية عبر الإنترنت. ولا يقدّم مُجيب محادثات ذكية دون اتصال بالإنترنت.'},
        {q:'هل يمكنني الاطلاع على مكالماتي دون البوابة السحابية؟',a:'نعم. يتضمن الجهاز لوحة معلومات على شبكة مكتبك المحلية لعرض المكالمات والرسائل الصوتية والمتابعات، وتضيف بوابة FSS السحابية الاختيارية إمكانية الوصول من خارج المكتب.'},
        {q:'ماذا تضيف البوابة السحابية الاختيارية؟',a:'مع خطة اشتراك منفصلة في بوابة FSS السحابية، يمكن لفريقك تسجيل الدخول لمراجعة المكالمات التي تعامل معها مُجيب، والاطلاع على تنبيهات المكالمات الفائتة والرسائل الصوتية، وإدارة مهام المتابعة. وسيتم تحديد خدمات الصيانة المتصلة والتحديثات البرمجية والخيارات الأخرى ضمن كل خطة.'},
        {q:'ما الضمان المقدم؟',a:'يتمتع جهاز مُجيب بضمان استبدال لمدة شهر واحد وفق شروط الضمان المكتوبة من FSS. وتُؤكَّد ترتيبات الضمان الخاصة بالبوابة والهاتف في عرض السعر.'},
        {q:'هل يمكنني الطلب الآن؟ وهل تتوفر تجربة مجانية؟',a:'مُجيب في مرحلة ما قبل الإطلاق. يمكنك الآن تسجيل اهتمامك وحجز عرض توضيحي مباشر، وسيتم تأكيد الطلبات ومواعيد التسليم عند الإطلاق. ولا تتوفر تجربة مجانية حالياً.'}
      ]},
    final:{eyebrow:'عملاؤك يتصلون الآن',title:'هل أنت جاهز لتجربة استقبال أذكى؟',sub:'سجّل اهتمامك بمُجيب واحجز عرضاً توضيحياً مباشراً قبل الإطلاق.',demoCta:'سجّل اهتمامك أو اطلب عرضاً توضيحياً',whatsappLabel:'واتساب'}
  }
}

</script>

<style scoped>
.brochure-home { overflow: clip; }
.marketing-hero { position:relative; isolation:isolate; background:linear-gradient(125deg,#061b30 0%,#082744 66%,#113955 100%); color:#fff; padding:100px 0 85px; overflow:hidden; }
.hero-halo { position:absolute; border-radius:50%; background:rgba(38,132,186,.15); z-index:-1; pointer-events:none; }
.hero-halo-one { width:540px; height:540px; right:-120px; top:-190px; }
.hero-halo-two { width:430px; height:430px; left:-240px; bottom:-265px; }
.hero-grid { display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:clamp(36px,6vw,100px); }
.hero-copy { position:relative; z-index:2; }
.hero-eyebrow { display:inline-flex; align-items:center; gap:9px; color:#99d5e0; font-size:11px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; margin-bottom:25px; }
.eyebrow-pulse { width:8px; height:8px; border-radius:50%; background:#23dbce; box-shadow:0 0 0 6px rgba(35,219,206,.1); }
.hero-product { color:#30ddd1; font-size:14px; font-weight:800; margin:0 0 12px; }
h1 { font-size:clamp(40px,4.7vw,68px); line-height:1.095; letter-spacing:-.045em; margin:0 0 24px; font-weight:840; }
html[dir='rtl'] h1 { letter-spacing:0; line-height:1.35; }
h1 span { display:inline; color:#29dcd1; }
.hero-sub { max-width:590px; color:#c4d8e8; font-size:17px; line-height:1.86; margin:0 0 30px; }
.hero-actions { display:flex; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:32px; }
.hero-actions .btn { min-height:52px; }
.hero-outline { color:#fff; border:1px solid #55829d; background:rgba(255,255,255,.05); }
.hero-outline:hover { background:rgba(255,255,255,.1); }
.hero-badges { display:flex; flex-wrap:wrap; gap:13px; }
.hero-price { display:inline-flex; align-items:center; flex-wrap:wrap; gap:6px 14px; padding:12px 18px; margin:0 0 26px; border-radius:16px; background:linear-gradient(120deg,rgba(0,190,180,.22),rgba(35,127,228,.18)); border:1px solid rgba(64,226,215,.45); color:#fff; }
.hero-price:hover { opacity:1; border-color:#40e2d7; }
.hero-price-tag { background:#ffc857; color:#3b2600; font-size:11px; font-weight:900; letter-spacing:.06em; text-transform:uppercase; border-radius:999px; padding:5px 10px; }
.hero-price-amount { font-size:18px; font-weight:800; color:#d8fffb; }
.hero-price-amount strong { font-size:34px; font-weight:900; color:#fff; letter-spacing:-.02em; }
.hero-price-once { font-size:13px; font-weight:700; color:#a9e9e3; }
.hero-whatsapp { color:#fff; border:1px solid rgba(37,211,102,.55); background:rgba(37,211,102,.12); }
.hero-whatsapp:hover { background:rgba(37,211,102,.2); }
html[dir='rtl'] .flip-rtl { transform:scaleX(-1); }
.pw-label { display:inline-flex; align-items:center; gap:9px; }
.package-cta { width:100%; margin-top:16px; }
.price-rows { position:relative; z-index:1; width:100%; margin:18px 0 0; display:grid; gap:0; border-top:1px solid rgba(255,255,255,.22); }
.price-rows > div { display:flex; justify-content:space-between; align-items:baseline; gap:14px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,.16); font-size:13px; }
.price-rows dt { color:#d5fcff; }
.price-rows dd { margin:0; font-weight:800; white-space:nowrap; font-variant-numeric:tabular-nums; color:#fff; }
.price-rows .total dt, .price-rows .total dd { font-weight:850; color:#fff; }
.price-vat { position:relative; z-index:1; margin:12px 0 6px; font-size:12px; font-weight:700; line-height:1.55; color:#e4fffd; }
.price-vat-detail { position:relative; z-index:1; margin:0 0 20px; font-size:11.5px; line-height:1.55; color:rgba(228,255,253,.78); }
.package-facts { list-style:none; margin:0; padding:0; display:grid; gap:10px; }
.package-facts li { display:flex; align-items:flex-start; gap:11px; border-radius:12px; padding:12px 14px; background:#e8faf8; color:#05656c; font-size:13px; font-weight:700; line-height:1.55; }
.package-facts svg { flex:0 0 19px; margin-top:1px; }
.requirements { margin-top:26px; }
.req-title { margin:0 0 14px; font-size:18px; }
.req-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.req-item { display:flex; gap:13px; align-items:flex-start; padding:18px; border-radius:18px; background:#fff; border:1px solid #d5e9f1; }
.req-icon { flex:0 0 42px; height:42px; display:grid; place-items:center; border-radius:13px; background:#e0f8f7; color:#006d6d; }
.req-item b { display:block; font-size:14px; margin-bottom:4px; }
.req-item p { margin:0; color:var(--muted); font-size:13px; line-height:1.65; }
.faq-section { background:#fff; }
.faq-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:56px; align-items:start; }
.faq-list { display:grid; gap:10px; }
.faq-item { border:1px solid #d7e9f1; border-radius:14px; background:#fbfdff; }
.faq-item[open] { border-color:#9de0df; background:#fff; }
.faq-item summary { display:flex; justify-content:space-between; align-items:center; gap:14px; padding:16px 18px; cursor:pointer; list-style:none; font-weight:750; font-size:15px; }
.faq-item summary::-webkit-details-marker { display:none; }
.faq-item summary:focus-visible { outline:3px solid #31d5cf; outline-offset:2px; border-radius:14px; }
.faq-toggle { position:relative; flex:0 0 18px; height:18px; }
.faq-toggle::before, .faq-toggle::after { content:''; position:absolute; inset-inline-start:2px; top:8px; width:14px; height:2px; border-radius:2px; background:#00757b; transition:transform .2s; }
.faq-toggle::after { transform:rotate(90deg); }
.faq-item[open] .faq-toggle::after { transform:rotate(0deg); }
.faq-item p { margin:0; padding:0 18px 16px; color:var(--muted); font-size:14px; line-height:1.75; }
.step-tag { display:inline-block; vertical-align:middle; margin-inline-start:6px; font-size:10px; font-weight:800; letter-spacing:.04em; color:#185ea6; background:#e6f1ff; border:1px solid #c5ddfa; border-radius:999px; padding:2px 8px; }
.how-card-optional { border-style:dashed; border-color:#a9c9ea; }
.how-zones { display:grid; grid-template-columns:3fr 1fr; gap:14px; margin-top:22px; }
.how-zone { display:flex; gap:12px; align-items:flex-start; padding:16px 18px; border-radius:16px; background:#fff; border:1px solid #cfe8ef; color:#08848a; }
.how-zone-cloud { border-style:dashed; border-color:#a9c9ea; color:#1d6fc4; }
.how-zone b { display:block; color:var(--fg); font-size:14px; margin-bottom:2px; }
.how-zone p { margin:0; color:var(--muted); font-size:13px; line-height:1.6; }
.how-zone svg { flex:0 0 20px; margin-top:2px; }
.hero-badges span { display:inline-flex; align-items:center; gap:6px; color:#cceaf1; font-size:12px; font-weight:600; }
.hero-badges svg { color:#2ee4d4; }
.hero-status { display:flex; align-items:flex-start; gap:9px; margin:20px 0 0; max-width:590px; color:#cfe3ec; font-size:13px; line-height:1.7; }
.hero-status-dot { flex:0 0 8px; height:8px; margin-top:7px; border-radius:50%; background:#ffc857; box-shadow:0 0 0 4px rgba(255,200,87,.15); }
.hero-art { position:relative; min-height:445px; padding:23px 25px 18px; border-radius:28px; border:1px solid rgba(53,184,206,.35); background:linear-gradient(155deg,rgba(21,71,101,.89),rgba(8,39,65,.94)); box-shadow:0 25px 70px rgba(0,6,20,.35),inset 0 1px rgba(255,255,255,.08); }
.art-grid { position:absolute; inset:0; opacity:.18; background-image:linear-gradient(rgba(121,211,233,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(121,211,233,.2) 1px,transparent 1px); background-size:30px 30px; mask-image:linear-gradient(#000,transparent); border-radius:inherit; pointer-events:none; }
.art-top { display:flex; justify-content:space-between; align-items:center; position:relative; color:#99bcce; letter-spacing:.08em; font-size:10px; font-weight:800; margin-bottom:25px; }
.art-live { display:inline-flex; align-items:center; gap:7px; color:#b4ffea; letter-spacing:0; }
.art-live i,.status-tiny i { display:inline-block; width:7px; height:7px; background:#22db9c; border-radius:50%; box-shadow:0 0 0 3px rgba(34,219,156,.12); }
.art-incoming,.art-agent,.art-events { position:relative; display:flex; align-items:center; gap:13px; border-radius:17px; border:1px solid rgba(147,213,231,.2); padding:16px; background:rgba(6,26,47,.7); }
.art-incoming { width:83%; }
.art-icon { width:48px; height:48px; display:grid; place-items:center; border-radius:13px; flex:0 0 auto; }
.incoming-icon { background:rgba(8,207,190,.16); color:#33e4d7; }
.art-incoming b,.art-agent b { display:block; font-size:14px; color:#f5ffff; }
.art-incoming small,.art-agent small { display:block; color:#9cbfd0; font-size:11px; line-height:1.55; }
.incoming-pulse { margin-inline-start:auto; width:9px; height:9px; background:#25dfcd; border-radius:50%; flex:0 0 9px; }
.art-connector { height:30px; width:2px; background:linear-gradient(#20ddd2,#70baff); margin-inline-start:35px; display:flex; flex-direction:column; justify-content:center; gap:5px; }
.art-connector span { width:7px; height:2px; background:#22dacf; margin-inline-start:-2px; }
.art-agent { border-color:rgba(49,211,214,.55); background:linear-gradient(118deg,#123d58,#0d2a47); padding:18px; box-shadow:0 0 30px rgba(6,194,184,.14); }
.bot-icon { background:linear-gradient(135deg,#1cdac9,#177dca); color:#fff; width:57px; height:57px; border-radius:17px; }
.art-kicker { display:block; color:#40e2d7; font-weight:800; font-size:9px; letter-spacing:.08em; margin-bottom:4px; }
.art-agent-copy { flex:1; min-width:0; }
.audio-bars { display:flex; align-items:center; justify-content:center; gap:3px; height:28px; }
.audio-bars i { width:3px; height:10px; background:#48e1d7; border-radius:8px; }
.audio-bars i:nth-child(3n + 1) { height:24px; }.audio-bars i:nth-child(3n + 2) { height:15px; }
.art-events { width:89%; margin:17px 0 0 auto; flex-direction:column; align-items:stretch; gap:9px; background:rgba(9,52,75,.66); padding:13px 16px; }
.art-event,.event-label,.event-chip { display:flex; align-items:center; gap:9px; font-size:12px; }
.event-label { color:#d2ebf1; }.event-chip { color:#73f3cf; font-weight:700; }
.art-bottom { margin-top:24px; display:flex; align-items:center; gap:7px; color:#83b3c4; font-size:11px; }
.floating-label { position:absolute; inset-inline-end:-25px; bottom:71px; display:flex; align-items:center; gap:8px; background:#fff; box-shadow:0 12px 35px rgba(0,0,0,.18); color:#0a4e67; border-radius:999px; padding:10px 15px; font-size:12px; font-weight:800; }
.hero-bottom-rule { height:4px; position:absolute; bottom:0; inset-inline:0; background:linear-gradient(90deg,#05c9b7,#32d7d4,#2983e9); }
.trust-row { background:#e8f5f8; border-bottom:1px solid #d4eaf0; }.trust-content { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; padding-block:25px; }
.trust-item { display:flex; align-items:center; gap:14px; padding-inline:20px; border-inline-end:1px solid #cee5ed; }.trust-item:last-child { border:0; }.trust-icon { flex:0 0 44px; height:44px; display:grid; place-items:center; border:1px solid #b7e5eb; border-radius:15px; color:#009b9e; background:#fff; }
.trust-item b { display:block; font-size:14px; color:#10304a; }.trust-item small { display:block; font-size:12px; color:#4c6577; }
.section-heading { margin:0 0 34px; }.section-heading.centered { text-align:center; max-width:780px; margin-inline:auto; margin-bottom:44px; }.section-heading.centered .section-sub { margin-inline:auto; }
.offer-section { background:#f8fcfe; }.offer-heading { display:flex; align-items:center; justify-content:space-between; gap:22px; }.limited-pill { display:inline-flex; align-items:center; gap:8px; background:#ddfaf7; color:#006d6d; font-size:12px; font-weight:800; border:1px solid #a9eee6; border-radius:999px; padding:9px 15px; white-space:nowrap; }
.offer-layout { display:grid; grid-template-columns:minmax(290px,.82fr) 1.18fr; gap:24px; align-items:stretch; }
.price-panel { position:relative; overflow:hidden; display:flex; flex-direction:column; align-items:flex-start; padding:45px 38px 31px; color:#fff; border-radius:26px; background:radial-gradient(circle at 100% 0%,rgba(105,244,224,.45),transparent 42%),linear-gradient(130deg,#009f9f,#007d99 70%,#08678c); box-shadow:0 23px 45px rgba(0,131,151,.18); }
.price-panel::after { content:''; position:absolute; width:290px; height:290px; background:rgba(255,255,255,.06); border-radius:50%; bottom:-170px; inset-inline-end:-130px; }
.price-kicker { position:relative; z-index:1; color:#d3fffa; font-weight:800; letter-spacing:.11em; font-size:11px; text-transform:uppercase; }
.price-main { display:flex; align-items:baseline; flex-direction:row; gap:10px; line-height:1; margin:16px 0 6px; }.price-main strong { font-size:clamp(86px,8vw,125px); letter-spacing:-.07em; font-weight:900; }.currency { font-size:26px; font-weight:800; }
.price-once { font-size:18px; font-weight:800; line-height:1.4; }.price-divider { height:1px; width:100%; background:rgba(255,255,255,.25); margin:23px 0; }.price-description { font-size:15px; line-height:1.8; color:#d5fcff; margin:0 0 28px; max-width:350px; }
.price-whatsapp { display:flex; align-items:center; justify-content:space-between; gap:12px; width:100%; padding:14px 18px; background:#fff; color:#007b81; border-radius:12px; font-weight:850; position:relative; z-index:1; }.price-whatsapp:hover { opacity:1; background:#efffff; }.price-terms { font-size:11px; color:#c9eaf0; line-height:1.65; margin:17px 0 0; position:relative; z-index:1; }
.package-panel { border-radius:26px; background:#fff; border:1px solid #d5e9f1; padding:33px; box-shadow:0 16px 60px rgba(10,57,87,.04); }
.package-heading { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }.package-heading h3 { margin:0; font-size:24px; line-height:1.35; }.package-pill { border:1px solid #d1e7ed; padding:5px 11px; border-radius:999px; font-size:10px; font-weight:850; white-space:nowrap; color:#296f86; }
.package-list { display:grid; gap:0; margin:21px 0 18px; }.package-item { display:flex; align-items:center; gap:17px; padding:20px 0; border-bottom:1px solid #e5eff4; }.package-item:last-child { border:0; }
.package-icon { flex:0 0 57px; height:57px; display:grid; place-items:center; border-radius:17px; color:#fff; background:linear-gradient(135deg,#1bd3c3,#157dd4); }.package-item h4 { margin:0 0 4px; font-size:17px; }.package-item p { margin:0; color:var(--muted); font-size:13px; line-height:1.65; }.package-check { margin-inline-start:auto; color:#03aa9f; flex:0 0 18px; }.package-highlight { display:flex; align-items:center; gap:11px; border-radius:12px; padding:13px 15px; background:#e8faf8; color:#087d87; font-size:12px; font-weight:750; }
.how-section { background:#eef8fb; }.how-cards { display:grid; grid-template-columns:1fr 24px 1fr 24px 1fr 24px 1fr; align-items:stretch; gap:10px; }.how-card { min-height:250px; background:#fff; border:1px solid #d5e7f0; border-radius:22px; padding:26px; }.step-heading { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }.step-number { font-size:13px; font-weight:800; color:#5a7482; }.step-icon { width:60px; height:60px; border-radius:17px; display:grid; place-items:center; background:linear-gradient(135deg,#16cbbd,#167ed3); color:#fff; }.how-card h3 { font-size:19px; margin:0 0 10px; }.how-card p { font-size:14px; line-height:1.7; color:var(--muted); margin:0; }.how-arrow { display:grid; place-items:center; color:#04b7ae; align-self:center; }html[dir='rtl'] .how-arrow svg { transform:rotate(180deg); }.how-note { margin:24px 0 0; display:flex; align-items:center; justify-content:center; gap:7px; color:#688195; font-size:12px; }
.benefits-section { background:#fff; }.benefits-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:17px; }.benefit-card { padding:29px 25px; border-radius:20px; border:1px solid #deebf2; background:#fbfdff; transition:border-color .2s,transform .2s,box-shadow .2s; }.benefit-card:hover { transform:translateY(-3px); border-color:#9de0df; box-shadow:0 14px 30px rgba(11,69,93,.08); }.benefit-icon { display:grid; place-items:center; width:52px; height:52px; border-radius:15px; background:#e0f8f7; color:#079ea4; margin-bottom:21px; }.benefit-card:nth-child(even) .benefit-icon { color:#217cce; background:#e8f2ff; }.benefit-card h3 { margin:0 0 10px; font-size:17px; }.benefit-card p { margin:0; color:var(--muted); line-height:1.75; font-size:14px; }
.cloud-section { background:linear-gradient(120deg,#071f37,#0c3e5a); color:#fff; border:0; }.cloud-grid { display:grid; grid-template-columns:.95fr 1.05fr; align-items:center; gap:clamp(35px,5vw,85px); }.cloud-tag { display:inline-flex; align-items:center; gap:8px; color:#49ded6; font-size:12px; font-weight:800; letter-spacing:.1em; margin-bottom:19px; }.cloud-copy h2 { font-size:clamp(30px,3.4vw,46px); line-height:1.2; margin:0 0 20px; }.cloud-copy h2 span { color:#3be0d4; }.cloud-copy>p { color:#c0d7e5; line-height:1.9; margin:0 0 26px; }.cloud-points { display:grid; gap:18px; margin-bottom:30px; }.cloud-points>div { display:flex; gap:13px; align-items:flex-start; }.cloud-points>div>span { display:grid; place-items:center; width:43px; height:43px; flex:0 0 43px; color:#45e7d4; border:1px solid rgba(45,218,209,.3); border-radius:13px; background:rgba(37,177,187,.12); }.cloud-points b,.cloud-points small { display:block; }.cloud-points b { font-size:14px; }.cloud-points small { color:#98b6c9; font-size:12px; }.cloud-copy .cloud-disclaimer { color:#95afc3; font-size:11px; margin:14px 0 0; }
.portal-window { border-radius:20px; border:1px solid rgba(108,193,227,.25); background:#0b2a43; box-shadow:0 30px 80px rgba(0,0,0,.2); overflow:hidden; }.portal-window-top { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:16px 20px; background:#071b2c; border-bottom:1px solid rgba(255,255,255,.07); }.portal-brand { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:750; }.portal-brand span { background:linear-gradient(130deg,#15d9c4,#177cbf); border-radius:7px; width:24px; height:24px; display:grid; place-items:center; }.portal-dot-row { display:flex; gap:5px; }.portal-dot-row i { background:#2c5971; width:7px; height:7px; border-radius:50%; }.portal-window-inner { padding:24px; }.portal-eyebrow { color:#74a0b6; font-size:10px; letter-spacing:.1em; margin:0 0 3px; font-weight:800; }.portal-window h3 { font-size:20px; margin:0 0 21px; }.portal-kpis { display:grid; grid-template-columns:repeat(3,1fr); gap:11px; margin-bottom:20px; }.portal-kpis>div { background:#133a53; border:1px solid #26516b; border-radius:13px; padding:14px 10px; }.kpi-icon { display:block; color:#37d9d3; }.portal-kpis small,.portal-kpis strong { display:block; }.portal-kpis small { font-size:11px; color:#9dbbce; margin-top:8px; }.portal-kpis strong { font-size:14px; color:#fff; }.portal-feed { border:1px solid #2b526c; border-radius:14px; overflow:hidden; }.portal-feed-top { display:flex; justify-content:space-between; gap:8px; padding:14px; font-size:12px; font-weight:800; border-bottom:1px solid #2b526c; }.status-tiny { display:flex; align-items:center; gap:6px; color:#72dfc2; font-size:10px; }.portal-feed-row { display:flex; align-items:center; gap:12px; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,.06); color:#c7dce9; font-size:12px; }.portal-feed-row:last-child { border:0; }.feed-status { color:#43dad1; }.feed-check { margin-inline-start:auto; color:#6fe7b8; }
.sectors-section { background:#f7fbfd; }.sectors-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:65px; align-items:center; }.sectors-tags { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }.sectors-tags span { display:flex; align-items:center; gap:9px; padding:16px; background:#fff; border:1px solid #d7e9f1; border-radius:14px; font-size:13px; font-weight:750; }.sectors-tags svg { color:#0eaaa7; flex:0 0 17px; }
.pre-contact-section { padding:35px 0; background:#f7fbfd; }.cta-ribbon { display:flex; align-items:center; justify-content:space-between; gap:38px; border-radius:25px; padding:48px; background:linear-gradient(125deg,#092d48,#0d5870); color:#fff; }.cta-eyebrow { color:#55dfd3; font-size:11px; font-weight:850; letter-spacing:.13em; margin:0 0 8px; }.cta-ribbon h2 { margin:0 0 10px; font-size:clamp(24px,2.7vw,35px); }.cta-ribbon p:not(.cta-eyebrow) { color:#c2dde9; margin:0; }.cta-ribbon-actions { display:flex; flex-wrap:wrap; gap:10px; flex:0 0 auto; }.cta-outline { color:#fff; border-color:#5f9ab0; }.cta-outline:hover { background:rgba(255,255,255,.08); }
@media(max-width:1100px){.how-cards { grid-template-columns:1fr 1fr; gap:14px; }.how-arrow { display:none; }.how-zones { grid-template-columns:1fr 1fr; }.benefits-grid { grid-template-columns:repeat(2,1fr); }.hero-grid,.cloud-grid { gap:35px; }.floating-label { inset-inline-end:-8px; }.price-panel { padding:36px 30px; }.cta-ribbon { flex-wrap:wrap; }}
@media(max-width:900px){.req-grid { grid-template-columns:1fr; }.faq-grid { grid-template-columns:1fr; gap:26px; }.marketing-hero { padding:70px 0; }.hero-grid,.cloud-grid,.sectors-grid { grid-template-columns:1fr; }.hero-art { max-width:610px; width:100%; margin-inline:auto; }.offer-layout { grid-template-columns:1fr; }.trust-item { padding-inline:5px; }.benefits-grid { grid-template-columns:repeat(2,1fr); }.cta-ribbon { padding:36px; }}
@media(max-width:690px){.marketing-hero { padding:55px 0 60px; }.hero-copy h1 { font-size:clamp(35px,9vw,51px); }.hero-sub { font-size:15px; }.hero-actions { flex-direction:column; align-items:stretch; }.hero-actions .btn { width:100%; }.hero-art { padding:18px 16px; min-height:390px; }.audio-bars { display:none; }.floating-label { bottom:70px; font-size:10px; padding:8px; }.trust-content { grid-template-columns:1fr; gap:0; }.trust-item { padding:15px 0; border-inline-end:0; border-bottom:1px solid #cee5ed; }.trust-item:last-child { border:0; }.offer-heading { align-items:flex-start; flex-direction:column; }.limited-pill { margin-top:0; }.price-panel { padding:32px 24px; }.price-main strong { font-size:93px; }.package-panel { padding:24px 20px; }.package-pill { display:none; }.package-item { gap:12px; }.package-icon { flex-basis:47px; height:47px; }.how-cards { grid-template-columns:1fr; gap:10px; }.how-card { min-height:0; }.how-zones { grid-template-columns:1fr; }.hero-price { width:100%; }.benefits-grid { grid-template-columns:1fr; }.benefit-card { padding:24px; }.portal-window-inner { padding:15px; }.portal-kpis { gap:6px; }.portal-kpis>div { padding:12px 8px; }.sectors-tags { grid-template-columns:1fr; }.cta-ribbon { padding:26px; }.cta-ribbon-actions { flex-direction:column; width:100%; }.cta-ribbon-actions .btn { width:100%; }}
</style>
