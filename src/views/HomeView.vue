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
            <span class="hero-price-amount"><strong>377</strong> {{ currency }}</span>
            <span class="hero-price-once">{{ s.offer.once }}</span>
          </router-link>
          <div class="hero-actions">
            <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }">{{ s.hero.demoCta }} <MarketingIcon name="arrow" :size="17" class="flip-rtl" /></router-link>
            <router-link class="btn hero-outline" :to="{ path: '/', hash: '#offer' }">{{ s.hero.offerCta }}</router-link>
            <a class="btn hero-whatsapp" :href="whatsappLink" target="_blank" rel="noopener noreferrer"><MarketingIcon name="whatsapp" :size="18" />{{ s.hero.whatsappCta }}</a>
          </div>
          <div class="hero-badges">
            <span v-for="badge in s.hero.badges" :key="badge"><MarketingIcon name="check" :size="15" />{{ badge }}</span>
          </div>
        </div>
        <div class="hero-art" role="img" :aria-label="s.hero.visualLabel">
          <div class="art-grid" aria-hidden="true"></div>
          <div class="art-top"><span class="art-live"><i></i> {{ s.visual.status }}</span><span>FSS / MOJEB AI</span></div>
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
          <span class="trust-icon"><MarketingIcon :name="['phone', 'shield', 'globe'][i]" :size="22" /></span>
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
            <div class="price-main"><strong>377</strong><span class="currency">{{ currency }}</span></div>
            <div class="price-once">{{ s.offer.once }}</div>
            <div class="price-divider"></div>
            <p class="price-description">{{ s.offer.priceDesc }}</p>
            <a class="price-whatsapp" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
              <span class="pw-label"><MarketingIcon name="whatsapp" :size="18" />{{ s.offer.quoteCta }}</span> <MarketingIcon name="arrow" :size="18" class="flip-rtl" />
            </a>
            <p class="price-terms">{{ s.offer.terms }}</p>
          </div>
          <div class="package-panel">
            <div class="package-heading"><div><p class="section-label">{{ s.offer.includedLabel }}</p><h3>{{ s.offer.includedTitle }}</h3></div><span class="package-pill">FSS STARTER</span></div>
            <div class="package-list">
              <div class="package-item" v-for="item in s.offer.items" :key="item.title">
                <span class="package-icon"><MarketingIcon :name="item.icon" :size="27" /></span>
                <div><h4>{{ item.title }}</h4><p>{{ item.sub }}</p></div>
                <MarketingIcon name="check" class="package-check" :size="18" />
              </div>
            </div>
            <div class="package-highlight"><MarketingIcon name="cloud" :size="19" />{{ s.offer.highlight }}</div>
            <router-link class="btn btn-primary package-cta" :to="{ path: '/', hash: '#demo' }">{{ s.offer.demoCta }}</router-link>
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
import MarketingIcon from '../components/MarketingIcon.vue'
import ContactSection from '../components/ContactSection.vue'
import VoicegateDemoSection from '../components/VoicegateDemoSection.vue'

const { lang } = useLanguage()
const s = computed(() => messages[lang.value] || messages.en)
const currency = computed(() => (lang.value === 'ar' ? 'ر.ع' : 'R.O'))
const whatsappLink = computed(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.value.whatsapp)}`)

const messages = {
  en: {
    whatsapp: 'Hello Future Smart Support. I would like a demo and quotation for the Mojeb 377 R.O introductory package.',
    hero: {
      eyebrow: 'SMART COMMUNICATIONS. STRONGER BUSINESSES.', product: 'Introducing Mojeb · FSS AI Agent',
      headline: 'Manage your customer communications', accent: 'from anywhere.',
      sub: 'Meet Mojeb: your on-premise AI receptionist, connected to your existing telephone line. Answer customers, keep important call context, and help your team follow up with confidence.',
      offerCta: 'View special offer', demoCta: 'Request a demo', whatsappCta: 'WhatsApp us',
      badges: ['Arabic & English', 'Local AI processing', 'Built for Oman SMEs'],
      visualLabel: 'Illustrative call flow showing an incoming call, Mojeb AI agent and follow-up.'
    },
    visual: { status:'AI agent ready', incoming:'Incoming customer call', incomingSub:'Via your existing telephone line', aiLabel:'YOUR AI RECEPTIONIST', agent:'Mojeb is here to help', agentDesc:'Answers · captures context · assists with follow-up', followup:'Customer conversation', context:'Follow-up ready', footer:'Local-first call processing', language:'Arabic + English' },
    trust: { aria:'Product highlights', items:[{title:'Use your current line',sub:'Compatible analog lines converted to SIP'},{title:'Local-first technology',sub:'AI processing on your premises'},{title:'Arabic + English',sub:'Communicate with more customers'}] },
    offer: {
      eyebrow:'THE FSS STARTER PACKAGE', title:'Everything you need to get started.', sub:'An accessible path to smarter business calls — hardware and Mojeb together in one introductory offer.', ribbon:'Limited time offer', priceIntro:'INTRODUCTORY PACKAGE', once:'One-time cost', priceDesc:'Upgrade your business communications without investing in an expensive traditional PBX setup.', quoteCta:'Ask about this offer on WhatsApp', terms:'One-time price for the advertised package only. VAT, telecom-provider charges, ongoing services and the optional cloud portal are not included. Gateway compatibility depends on your telephone line; installation scope, warranty and final terms are confirmed in your quotation.', includedLabel:'WHAT IS INCLUDED', includedTitle:'Three essentials. One smart solution.', highlight:'The optional FSS Cloud Portal is not part of this package and is quoted separately.', demoCta:'Request a demo for this package',
      items:[{icon:'bot',title:'Mojeb (FSS AI Agent)',sub:'An on-premise AI receptionist for business calls.'},{icon:'gateway',title:'Analog telephone to SIP conversion',sub:'Converts a compatible existing analog line to SIP, e.g. with a Grandstream HT813 gateway.'},{icon:'deskphone',title:'1 IP desk phone',sub:'A modern business IP handset for your team.'}]
    },
    how: { eyebrow:'HOW MOJEB WORKS',title:'Your current phone line. A smarter way to work.',sub:'We connect Mojeb to your existing telephone line, run the AI agent on a local server at your premises, and help your team follow up with customers.',
      localTitle:'On your premises',localDesc:'The gateway, the IP desk phone and the Mojeb AI server are installed locally. Calls are answered and processed on-site.',
      cloudTitle:'Optional, in the cloud',cloudDesc:'With a separate cloud-portal subscription, supported call information and email alerts can be reviewed remotely.',
      steps:[{icon:'phone',title:'Analog phone line',desc:'Customers keep calling your existing business number on a compatible analog line.'},{icon:'gateway',title:'SIP gateway',desc:'An analog-to-SIP gateway (e.g. Grandstream HT813) connects the line to the IP system.'},{icon:'server',title:'Mojeb local AI server',desc:'Mojeb greets callers in Arabic or English, answers common questions and captures requests.'},{icon:'cloud',title:'Follow-up & cloud portal',tag:'Optional portal',desc:'Your team follows up on the IP desk phone. The cloud portal adds remote call visibility and alerts.'}] },
    benefits: { eyebrow:'WHY MOJEB',title:'More than answering the phone.',sub:'Give every customer a more consistent first contact — and your team the context to respond.',items:[{icon:'bot',title:'AI-assisted call answering',desc:'Mojeb can greet callers and handle common questions when your team is busy or outside office hours.'},{icon:'globe',title:'Arabic + English',desc:'Welcome callers and answer common questions in both languages.'},{icon:'gateway',title:'Analog-to-SIP compatibility',desc:'Modernize a compatible analog line without replacing your business number.'},{icon:'deskphone',title:'One IP desk phone',desc:'A modern IP handset is included so your team can take and return calls.'},{icon:'messages',title:'Improved follow-up',desc:'Captured caller details help your team respond to enquiries more consistently.'},{icon:'server',title:'Local server deployment',desc:'The AI agent runs on a local FSS server at your premises.'},{icon:'wallet',title:'Affordable business telephony',desc:'A one-time introductory package instead of an expensive traditional PBX project.'},{icon:'people',title:'Built for SMEs',desc:'A practical fit for growing teams that need a professional phone presence.'}] },
    cloud: { badge:'OPTIONAL CLOUD PORTAL',title:'Stay close to your customers,',accent:'wherever you work.',desc:'Add the FSS Cloud Portal to review supported call information remotely and receive configurable email alerts — so you know which enquiries need a response without staying at the office.',cta:'Request a demo',disclaimer:'Illustrative dashboard. The cloud portal is optional, is not included in the 377 R.O package and may require a separate subscription. Available features are confirmed in your quotation.',illustrationLabel:'Illustrative FSS cloud portal interface',preview:'ILLUSTRATIVE PORTAL PREVIEW',dashboardTitle:'Customer communications',items:[{icon:'cloud',title:'Remote call visibility',sub:'Check activity securely while away from the office.'},{icon:'bell',title:'Email call alerts',sub:'Know when a new call or missed enquiry needs attention.'},{icon:'phone',title:'Missed-call follow-up',sub:'See missed calls and enquiries so your team can call customers back.'}], kpis:[{label:'Call activity',value:'View'},{label:'Email alerts',value:'On'},{label:'Follow-up',value:'Track'}],activity:'Call activity',ready:'Connected',activities:['Incoming call received','Email notification available','Follow-up context saved'] },
    sectors:{eyebrow:'WHO IS IT FOR?',title:'Built for small and medium businesses in Oman.',sub:'From first enquiries to follow-up, Mojeb fits customer-facing businesses that rely on the phone.',items:['Clinics & health services','Restaurants & cafés','Retail stores','Professional offices','Home-service businesses','Other SMEs']},
    final:{eyebrow:'YOUR CUSTOMERS ARE CALLING',title:'Ready for a smarter first impression?',sub:'Ask for a live demonstration of Mojeb and confirm the limited-time package for your business.',demoCta:'Request a demo',whatsappLabel:'WhatsApp'}
  },
  ar: {
    whatsapp:'مرحباً فريق Future Smart Support، أرغب في عرض توضيحي وتسعيرة باقة مُجيب الترويجية بسعر 377 ر.ع.',
    hero:{eyebrow:'اتصالات أذكى. أعمال أقوى.',product:'تعرّف على مُجيب · وكيل FSS الذكي',headline:'أدر اتصالات عملائك',accent:'من أي مكان.',sub:'مُجيب موظف استقبال ذكي يعمل محلياً ويتصل بخط هاتفك الحالي. يساعدك في الرد على العملاء وتوثيق معلومات المكالمات ومتابعة فرص العمل بكفاءة.',offerCta:'شاهد العرض الخاص',demoCta:'اطلب عرضاً تجريبياً',whatsappCta:'تواصل عبر واتساب',badges:['العربية والإنجليزية','معالجة محلية','مصمم لأعمال عُمان'],visualLabel:'رسم توضيحي لمسار مكالمة واردة عبر مُجيب ثم متابعة العميل.'},
    visual:{status:'مُجيب جاهز',incoming:'مكالمة عميل واردة',incomingSub:'عبر خط الهاتف الحالي',aiLabel:'مُجيب · وكيلك الذكي',agent:'مُجيب في خدمتك',agentDesc:'يرد · يوثّق · يدعم المتابعة',followup:'محادثة العميل',context:'جاهز للمتابعة',footer:'معالجة محلية للمكالمات',language:'العربية + الإنجليزية'},
    trust:{aria:'مميزات المنتج',items:[{title:'استخدم خطك الحالي',sub:'تحويل الخطوط التناظرية المتوافقة إلى SIP'},{title:'تقنية تعمل محلياً',sub:'معالجة الذكاء الاصطناعي داخل مقر العمل'},{title:'العربية + الإنجليزية',sub:'تواصل مع عدد أكبر من العملاء'}]},
    offer:{eyebrow:'باقة البداية من FSS',title:'كل ما تحتاجه لتبدأ بذكاء.',sub:'حل ميسور لتطوير اتصالات الأعمال يجمع التجهيزات الأساسية مع مُجيب في عرض واحد.',ribbon:'عرض لفترة محدودة',priceIntro:'سعر الباقة الترويجي',once:'تكلفة لمرة واحدة',priceDesc:'طوّر اتصالات أعمالك دون الحاجة إلى تجهيزات هاتف مؤسسية باهظة.',quoteCta:'استفسر عن العرض عبر واتساب',terms:'سعر لمرة واحدة للباقة المعلنة فقط. لا يشمل ضريبة القيمة المضافة ورسوم مزود الاتصالات والخدمات المستمرة والبوابة السحابية الاختيارية. يعتمد توافق البوابة على خط الهاتف لديك، ويُؤكَّد نطاق التركيب والضمان والشروط النهائية في عرض السعر.',includedLabel:'محتويات العرض',includedTitle:'ثلاثة عناصر. حل ذكي واحد.',highlight:'بوابة FSS السحابية الاختيارية ليست ضمن هذه الباقة وتُسعّر بشكل منفصل.',demoCta:'اطلب عرضاً تجريبياً لهذه الباقة',items:[{icon:'bot',title:'مُجيب (وكيل FSS الذكي)',sub:'موظف استقبال صوتي ذكي يعمل داخل مقر عملك.'},{icon:'gateway',title:'تحويل الهاتف التناظري إلى SIP',sub:'تحويل خط تناظري حالي متوافق إلى SIP، مثلاً عبر بوابة Grandstream HT813.'},{icon:'deskphone',title:'هاتف IP واحد',sub:'هاتف مكتبي حديث لاستخدام فريق العمل.'}]},
    how:{eyebrow:'كيف يعمل مُجيب',title:'خط هاتفك الحالي. تجربة أعمال أكثر ذكاءً.',sub:'نربط مُجيب بخط هاتفك الحالي، ونشغّل الوكيل الذكي على خادم محلي داخل مقر عملك، وندعم فريقك في متابعة العملاء.',
      localTitle:'داخل مقر عملك',localDesc:'تُركَّب البوابة وهاتف IP المكتبي وخادم مُجيب محلياً، ويتم الرد على المكالمات ومعالجتها داخل المقر.',
      cloudTitle:'اختياري عبر السحابة',cloudDesc:'باشتراك منفصل في البوابة السحابية، يمكن مراجعة معلومات المكالمات المدعومة وتلقي التنبيهات البريدية عن بُعد.',
      steps:[{icon:'phone',title:'خط الهاتف التناظري',desc:'يواصل العملاء الاتصال برقم نشاطك الحالي على خط تناظري متوافق.'},{icon:'gateway',title:'بوابة SIP',desc:'بوابة تحويل من تناظري إلى SIP (مثل Grandstream HT813) تربط الخط بنظام IP.'},{icon:'server',title:'خادم مُجيب المحلي',desc:'يرحّب مُجيب بالمتصلين بالعربية أو الإنجليزية، ويجيب عن الأسئلة الشائعة ويسجّل الطلبات.'},{icon:'cloud',title:'المتابعة والبوابة السحابية',tag:'بوابة اختيارية',desc:'يتابع فريقك عبر هاتف IP المكتبي، وتضيف البوابة السحابية متابعة المكالمات والتنبيهات عن بُعد.'}]},
    benefits:{eyebrow:'لماذا مُجيب؟',title:'أكثر من مجرد الرد على الهاتف.',sub:'امنح كل عميل تجربة استقبال أفضل، وزوّد فريقك بالمعلومات اللازمة للمتابعة.',items:[{icon:'bot',title:'رد ذكي على المكالمات',desc:'يرحّب مُجيب بالمتصلين ويتعامل مع الأسئلة الشائعة عند انشغال فريقك أو خارج أوقات الدوام.'},{icon:'globe',title:'العربية والإنجليزية',desc:'الترحيب بالمتصلين والإجابة عن الأسئلة الشائعة باللغتين.'},{icon:'gateway',title:'توافق من التناظري إلى SIP',desc:'حدّث خطك التناظري المتوافق دون تغيير رقم نشاطك.'},{icon:'deskphone',title:'هاتف IP مكتبي واحد',desc:'هاتف IP حديث ضمن الباقة لاستقبال المكالمات ومعاودة الاتصال.'},{icon:'messages',title:'متابعة أفضل للعملاء',desc:'تساعد بيانات المتصلين المسجّلة فريقك على الرد على الاستفسارات بانتظام.'},{icon:'server',title:'تشغيل على خادم محلي',desc:'يعمل الوكيل الذكي على خادم FSS محلي داخل مقر نشاطك.'},{icon:'wallet',title:'اتصالات أعمال بتكلفة مناسبة',desc:'باقة ترويجية لمرة واحدة بدلاً من مشروع مقسم هاتفي تقليدي مكلف.'},{icon:'people',title:'مصمم للمؤسسات الصغيرة والمتوسطة',desc:'حل عملي للفرق التي تحتاج إلى حضور احترافي عبر الهاتف.'}]},
    cloud:{badge:'بوابة سحابية اختيارية',title:'ابقَ قريباً من عملائك',accent:'أينما كنت.',desc:'يمكنك إضافة بوابة FSS السحابية لمراجعة معلومات المكالمات المدعومة عن بُعد وتلقي تنبيهات بريدية قابلة للتخصيص، لمعرفة الاستفسارات التي تحتاج إلى رد دون البقاء داخل المكتب.',cta:'اطلب عرضاً تجريبياً',disclaimer:'واجهة توضيحية. البوابة السحابية اختيارية وليست ضمن باقة 377 ر.ع وقد تتطلب اشتراكاً منفصلاً، وتُؤكّد المزايا المتاحة في عرض السعر.',illustrationLabel:'واجهة توضيحية لبوابة FSS السحابية',preview:'عرض توضيحي للبوابة',dashboardTitle:'إدارة اتصالات العملاء',items:[{icon:'cloud',title:'متابعة المكالمات عن بُعد',sub:'اطلع على النشاط بشكل آمن عندما تكون خارج المكتب.'},{icon:'bell',title:'تنبيهات البريد الإلكتروني',sub:'اعرف متى تحتاج المكالمات الواردة أو الفائتة إلى متابعة.'},{icon:'phone',title:'متابعة المكالمات الفائتة',sub:'اطّلع على المكالمات والاستفسارات الفائتة ليعاود فريقك الاتصال بالعملاء.'}],kpis:[{label:'نشاط المكالمات',value:'عرض'},{label:'تنبيهات البريد',value:'مفعّلة'},{label:'المتابعة',value:'منظمة'}],activity:'نشاط الاتصالات',ready:'متصل',activities:['تم استقبال مكالمة','تنبيه بريدي متاح','حفظ تفاصيل للمتابعة']},
    sectors:{eyebrow:'لمن هذا الحل؟',title:'مصمم للمؤسسات الصغيرة والمتوسطة في عُمان.',sub:'من الاستفسار الأول إلى المتابعة، يخدم مُجيب الأعمال التي تعتمد على الهاتف في التواصل مع عملائها.',items:['العيادات والخدمات الصحية','المطاعم والمقاهي','متاجر التجزئة','المكاتب المهنية','شركات الخدمات المنزلية','مؤسسات صغيرة ومتوسطة أخرى']},
    final:{eyebrow:'عملاؤك يتصلون الآن',title:'هل أنت جاهز لتجربة استقبال أذكى؟',sub:'اطلب عرضاً مباشراً لمُجيب وتعرّف على تفاصيل الباقة الترويجية لنشاطك.',demoCta:'اطلب عرضاً تجريبياً',whatsappLabel:'واتساب'}
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
.price-once { font-size:22px; font-weight:800; }.price-divider { height:1px; width:100%; background:rgba(255,255,255,.25); margin:23px 0; }.price-description { font-size:15px; line-height:1.8; color:#d5fcff; margin:0 0 28px; max-width:350px; }
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
@media(max-width:900px){.marketing-hero { padding:70px 0; }.hero-grid,.cloud-grid,.sectors-grid { grid-template-columns:1fr; }.hero-art { max-width:610px; width:100%; margin-inline:auto; }.offer-layout { grid-template-columns:1fr; }.trust-item { padding-inline:5px; }.benefits-grid { grid-template-columns:repeat(2,1fr); }.cta-ribbon { padding:36px; }}
@media(max-width:690px){.marketing-hero { padding:55px 0 60px; }.hero-copy h1 { font-size:clamp(35px,9vw,51px); }.hero-sub { font-size:15px; }.hero-actions { flex-direction:column; align-items:stretch; }.hero-actions .btn { width:100%; }.hero-art { padding:18px 16px; min-height:390px; }.audio-bars { display:none; }.floating-label { bottom:70px; font-size:10px; padding:8px; }.trust-content { grid-template-columns:1fr; gap:0; }.trust-item { padding:15px 0; border-inline-end:0; border-bottom:1px solid #cee5ed; }.trust-item:last-child { border:0; }.offer-heading { align-items:flex-start; flex-direction:column; }.limited-pill { margin-top:0; }.price-panel { padding:32px 24px; }.price-main strong { font-size:93px; }.package-panel { padding:24px 20px; }.package-pill { display:none; }.package-item { gap:12px; }.package-icon { flex-basis:47px; height:47px; }.how-cards { grid-template-columns:1fr; gap:10px; }.how-card { min-height:0; }.how-zones { grid-template-columns:1fr; }.hero-price { width:100%; }.benefits-grid { grid-template-columns:1fr; }.benefit-card { padding:24px; }.portal-window-inner { padding:15px; }.portal-kpis { gap:6px; }.portal-kpis>div { padding:12px 8px; }.sectors-tags { grid-template-columns:1fr; }.cta-ribbon { padding:26px; }.cta-ribbon-actions { flex-direction:column; width:100%; }.cta-ribbon-actions .btn { width:100%; }}
</style>
