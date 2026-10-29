import { PACKAGE, INSTALLATION, PORTAL_FREE_MONTHS, PORTAL_VALUE, VAT, OFFER_SUMMARY, PHONES_NOTE, omr, omr3 } from '../pricing.js'

export default {
  nav: {
    howItWorks: 'How It Works',
    features: 'Features',
    offer: 'Pricing',
    industries: 'Industries',
    requestDemo: 'Book a Demo',
    switchLang: 'العربية',
  },

  hero: {
    eyebrow: 'Mojeeb AI — AI Voice Receptionist for Oman & GCC',
    headline: 'Never Miss a',
    headlineAccent: 'Customer Call Again',
    sub: 'An AI voice receptionist that answers every call 24/7 — in Arabic and English. Installed at your business, fully operational in days.',
    tagline: 'On-premise server · Cloud dashboard · Local Oman support',
    ctaPrimary: 'Book a Demo',
    ctaSecondary: 'See the Package',
    trustLine: 'On-premise deployment with real-time cloud monitoring',
    badges: ['24/7 Arabic & English', 'On-Premise + Cloud', 'Omantel Compatible', 'Local Installation'],
    cardTitle: 'Mojeeb AI — Live',
    cardItems: [
      'Answers every call 24/7, in Arabic or English',
      'Captures appointments, orders, and requests',
      'Records and transcribes every conversation',
      'Cloud dashboard access from anywhere',
      'Real-time local server monitoring',
    ],
    cardStatus: 'Mojeeb AI — Active',
  },

  trustStrip: {
    items: [
      { value: '24/7', label: 'Always Answering' },
      { value: 'Arabic + English', label: 'Bilingual AI Voice' },
      { value: 'On-Premise', label: 'Data Stays Local' },
      { value: 'Oman', label: 'Local Support Team' },
    ],
  },

  problem: {
    label: 'The Problem',
    title: 'Every missed call is a missed customer',
    sub: 'When your phone goes unanswered, customers don\'t wait. They call your competitor.',
    pains: [
      {
        icon: 'phone',
        title: 'Calls go unanswered',
        desc: 'After hours, during busy periods, or when your staff are occupied — calls ring and no one picks up.',
      },
      {
        icon: 'clock',
        title: 'Customers won\'t wait',
        desc: 'A caller who reaches voicemail or an engaged line will try a competitor within minutes.',
      },
      {
        icon: 'users',
        title: 'Receptionists are overwhelmed',
        desc: 'One person can\'t handle every call professionally while managing walk-ins, admin, and follow-ups.',
      },
      {
        icon: 'file',
        title: 'No record of what was said',
        desc: 'Without recordings and transcripts, important requests get missed, misremembered, or forgotten.',
      },
    ],
    solution: 'Mojeeb AI answers every call — 24/7, in Arabic and English — so you never lose a customer to an unanswered phone.',
  },

  howItWorks: {
    label: 'How It Works',
    title: 'From installation to live in days',
    sub: 'A complete AI receptionist — installed at your business, configured for your industry, running in days.',
    steps: [
      {
        title: 'We Install at Your Site',
        desc: 'Our local team installs the Mojeeb AI server at your business and connects it to your existing phone system. We configure the AI with your services, hours, FAQs, and business information — tuned for your specific operation.',
        detail: 'Grandstream HT813 + IP Phone included',
      },
      {
        title: 'AI Answers and Understands',
        desc: 'Customers call your number. Mojeeb AI answers in Arabic or English — detecting the language automatically. It handles inquiries, captures appointment and order requests, transfers calls when needed, and records every conversation.',
        detail: 'SIP · Asterisk · Omantel compatible',
      },
      {
        title: 'You See Everything',
        desc: 'Review call logs, listen to recordings, read full transcripts, manage follow-ups, and track call analytics — all from the cloud dashboard, from anywhere. Your local server health is monitored in real-time.',
        detail: 'Cloud portal + local server monitoring',
      },
    ],
  },

  features: {
    label: 'Features',
    title: 'A complete AI call infrastructure',
    sub: 'Everything your business needs to handle calls professionally — with full visibility into every conversation.',
    list: [
      { icon: 'clock',    title: '24/7 AI Call Answering',          desc: 'Never miss a call. Mojeeb AI is always on — outside business hours, weekends, and public holidays.' },
      { icon: 'globe',    title: 'Arabic & English Conversations',   desc: 'Natural conversation in both languages. Detects the caller\'s language automatically and responds accordingly.' },
      { icon: 'phone',    title: 'Intelligent Call Transfer',        desc: 'When a team member is available, Mojeeb AI transfers the call seamlessly. Configurable by hours and availability.' },
      { icon: 'calendar', title: 'Appointment Booking Workflows',    desc: 'Callers can request appointments directly. Details are captured and saved for your team to confirm and manage.' },
      { icon: 'file',     title: 'Call Logs & Full Transcripts',     desc: 'Every call is logged and transcribed. Search and review the full text of any conversation at any time.' },
      { icon: 'play',     title: 'Secure Call Recording Playback',   desc: 'Listen to any recorded call directly from the cloud dashboard. Stored securely on your local server.' },
      { icon: 'chart',    title: 'Cloud Analytics Dashboard',        desc: 'Track call volume, patterns, peak hours, and performance through an easy-to-use cloud dashboard.' },
      { icon: 'server',   title: 'Local Server + Cloud Monitoring',  desc: 'Real-time visibility into your on-premise server health and cloud service status — all in one view.' },
      { icon: 'repeat',   title: 'Follow-up Management',             desc: 'The system logs follow-up requests and alerts your team. No customer falls through the cracks.' },
      { icon: 'cart',     title: 'Order Taking Workflows',           desc: 'Configurable order-taking workflow. The AI captures order details from callers and logs them for your team.' },
    ],
  },

  whyUs: {
    label: 'Why Mojeeb AI',
    title: 'Not cloud software. Production infrastructure.',
    sub: 'Most AI receptionists are SaaS tools you subscribe to. Mojeeb AI is a deployed system — installed at your premises with local support, local data storage, and enterprise-grade monitoring.',
    advantages: [
      {
        icon: 'server',
        title: 'On-Premise Oman Deployment',
        desc: 'Your AI server is installed at your business. Call data stays inside your own network — never stored on a foreign cloud server. Full privacy and regulatory control.',
      },
      {
        icon: 'globe',
        title: 'Arabic + English — Gulf Tuned',
        desc: 'Natural Gulf Arabic and English conversation — not a generic multilingual AI. Built for the way businesses and customers actually communicate in Oman and the GCC.',
      },
      {
        icon: 'phone',
        title: 'Works with Your Existing Phones',
        desc: 'Compatible with Omantel\'s network, SIP protocols, Asterisk PBX, and Grandstream IP phones. No need to replace your existing phone infrastructure.',
      },
      {
        icon: 'shield',
        title: 'Complete System + Local Support',
        desc: 'Local AI server + cloud dashboard + real-time monitoring + in-person installation and support from our team in Oman. This is infrastructure — not just software.',
      },
    ],
  },

  localDeploy: {
    label: 'Infrastructure & Privacy',
    title: 'Your server. Your data. Your control.',
    sub: 'Mojeeb AI is not cloud-only software. We install a dedicated AI server at your business premises. All call processing happens locally — giving you maximum uptime, data privacy, and operational control. The cloud dashboard gives your team access from anywhere.',
    points: [
      'On-site AI server — installed at your business',
      'Call processing runs locally on dedicated hardware',
      'Data never leaves your premises or local network',
      'Cloud dashboard for remote access and analytics',
      'Real-time monitoring of server health and status',
    ],
    cta: 'Request Installation',
    badge: 'On-Premise + Cloud Architecture',
    serverLabel: 'Your Server',
    serverStatus: 'Active — Local Network',
    serverProduct: 'Mojeeb AI',
  },

  industries: {
    label: 'Industries',
    title: 'Built for Oman & GCC businesses',
    sub: 'Mojeeb AI is configured for your specific industry — with knowledge, workflows, and language tuned to how your customers communicate.',
    list: [
      { icon: 'clinic',    title: 'Clinics & Medical Centers',       desc: 'Handle patient inquiries, appointment requests, and after-hours calls without a full-time receptionist at every station.' },
      { icon: 'scissors',  title: 'Beauty Salons & Spas',            desc: 'Handle booking requests, service inquiries, and customer calls around the clock. Never miss a booking inquiry.' },
      { icon: 'wrench',    title: 'Auto Workshops & Service Centers', desc: 'Capture service requests, booking inquiries, and vehicle status questions professionally — even when the workshop floor is busy.' },
      { icon: 'home',      title: 'Real Estate Agencies',            desc: 'Every property inquiry call is answered and logged, 24/7 — even on weekends and public holidays. No lead goes unanswered.' },
      { icon: 'briefcase', title: 'Law Offices & Consultancies',     desc: 'Every call answered with professional discretion. Full transcript review for your records. Nothing missed, nothing forgotten.' },
      { icon: 'utensils',  title: 'Restaurants & Food Services',     desc: 'Handle reservations, order inquiries, and customer questions — even during the peak dinner rush.' },
      { icon: 'building',  title: 'Service Companies & SMEs',        desc: 'A professional AI reception for any service business — without the overhead of a full-time receptionist hire.' },
      { icon: 'store',     title: 'Retail & E-commerce',             desc: 'Handle product questions, order follow-ups, and customer support calls around the clock.' },
    ],
  },

  offer: {
    label: 'MOJEEB + PBX Package', badge: 'Limited-time offer',
    title: 'MOJEEB — AI voice assistant + built-in PBX',
    price: `OMR ${omr(PACKAGE)}`, priceLabel: `One-time package price · FREE standard installation (regular price OMR ${omr(INSTALLATION)}) · ${PORTAL_FREE_MONTHS} months of portal access FREE`,
    sub: 'The MOJEEB AI appliance (AI voice assistant with a built-in PBX), one Grandstream HT813 gateway and one IP desk phone.',
    includesTitle: "What's included", includes: [
      'MOJEEB AI appliance', 'Built-in PBX system',
      'One Grandstream HT813 gateway',
      'One IP desk phone',
    ],
    subscriptionNote: OFFER_SUMMARY.en,
    ctaPrimary: 'Request a Demo', ctaSecondary: 'Contact Us',
  },

  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    sub: 'Everything you need to know about Mojeeb AI — from how it works to how it\'s deployed.',
    items: [
      {
        q: 'What is Mojeeb AI?',
        a: 'Mojeeb AI is a complete AI voice receptionist system for businesses in Oman and the GCC. It answers calls 24/7 in Arabic and English, records and transcribes every conversation, and gives you a cloud dashboard for call recordings, transcripts, analytics, and follow-up management.',
      },
      {
        q: 'Does it work in Arabic and English?',
        a: "Yes. Mojeeb AI automatically detects the caller's language and responds in Arabic or English. It is specifically tuned for Gulf Arabic and professional business conversations — not generic multilingual AI.",
      },
      {
        q: 'Does it replace my receptionist?',
        a: "Mojeeb AI works alongside your team — handling all calls that would otherwise go unanswered, while transferring to human staff when they're available. Most businesses use it as a 24/7 first-response layer that their team stays in control of.",
      },
      {
        q: 'Does it work with Omantel?',
        a: "Yes. Mojeeb AI integrates with Omantel's telephone network using the Grandstream HT813 analog adapter and standard SIP protocols. It works with your existing phone number and line — no new line required.",
      },
      {
        q: 'What happens if the internet goes down?',
        a: "Core call handling runs on the local AI server installed at your premises. In the event of an internet outage, the local server continues to handle calls. The cloud dashboard and remote access require internet connectivity, but the core call-answering function is protected by on-premise deployment.",
      },
      {
        q: 'Can Mojeeb AI work across multiple branches?',
        a: "Yes. Multi-branch deployment is supported. Each branch can have its own local AI server with its own business configuration, all accessible from a unified cloud dashboard. Contact us for multi-location setup and pricing.",
      },
      {
        q: 'Can it answer questions about my business?',
        a: "Yes. During setup, we configure the AI with your business information — services, location, hours, pricing, and FAQs. The AI answers caller questions based on the knowledge we configure specifically for your business.",
      },
      {
        q: 'Can it book appointments and take orders?',
        a: "Yes. Appointment booking and order-taking are configurable workflows. Callers can request appointments or place orders, and all details are captured in the system for your team to confirm and process.",
      },
      {
        q: 'Can it transfer calls to a human?',
        a: "Yes. When a team member is available, Mojeeb AI transfers the call to a human operator seamlessly. This is configurable based on your business hours and team availability.",
      },
      {
        q: 'Can I review recordings and transcripts?',
        a: "Yes. Every call is recorded and transcribed. You can listen to recordings and read full transcripts from the cloud dashboard at any time.",
      },
      {
        q: 'Is it cloud only?',
        a: "No. Mojeeb AI includes a local AI server installed at your business. The local server handles all call processing. The cloud dashboard lets your team access call data, analytics, and recordings from anywhere.",
      },
      {
        q: `What does the OMR ${omr(PACKAGE)} package include?`,
        a: OFFER_SUMMARY.en,
      },
    ],
  },

  finalCta: {
    title: 'Your next customer is calling right now.',
    sub: 'Don\'t let it go unanswered. Book a demo and see Mojeeb AI handling real calls for your business.',
    ctaPrimary: 'Book a Demo',
    ctaSecondary: 'Request Installation',
    trust: 'Local Oman installation · Arabic & English AI · 24/7 operation · Your data stays local',
    demoPageLink: 'See the Mojeeb AI demo page',
  },

  contact: {
    label: 'Get in Touch',
    title: 'Send Us a Message',
    sub: `Have a general question about MOJEEB, the OMR ${omr(PACKAGE)} MOJEEB + PBX offer or our services? Send us a message and our team will contact you as soon as possible.`,
    emailLabel: 'Email us:',
    nameLabel: 'Name',
    emailFieldLabel: 'Email',
    companyLabel: 'Company',
    messageLabel: 'Message',
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Thank you.',
    successText: 'Our team will contact you as soon as possible.',
    sendAnother: 'Send another message',
    errorText: 'Something went wrong. Please email us directly at majid@FutureSmartSupport.com',
    note: 'Your enquiry will be handled by our team in Oman.',
  },

  voicegateDemo: {
    hero: {
      eyebrow: 'Mojeeb AI — Product Demo',
      headline: 'See Mojeeb AI in Action',
      sub: 'Your own Mojeeb AI appliance for business calls, with a built-in PBX and the FSS portal for remote call visibility and follow-up.',
      ctaDemo: 'Request a Demo',
      ctaWhatsapp: 'Call Us',
    },
    explain: {
      label: 'How It Works',
      title: 'Your Own Appliance, With Portal Follow-up',
      sub: `MOJEEB runs on a dedicated Ubuntu-based appliance at your premises, with the built-in PBX included in the package. The FSS portal is free for the first ${PORTAL_FREE_MONTHS} months, so your team can review calls and follow-ups remotely.`,
      localServer: {
        title: 'Mojeeb AI Appliance',
        desc: 'A physical local server installed at your workplace and connected to your compatible telephone line through the HT813 gateway. It handles your calls, business rules and common questions; AI speech and language features use connected AI services over your internet connection.',
      },
      portal: {
        title: `FSS Portal (${PORTAL_FREE_MONTHS} months FREE)`,
        desc: `A secure portal where your team can review calls handled by MOJEEB, see missed-call and voicemail notifications, and manage follow-up tasks. Free for the first ${PORTAL_FREE_MONTHS} months; then renewed according to the selected plan.`,
      },
      points: [
        'AI-assisted call answering, including outside office hours',
        'Arabic and English support',
        'Works with a compatible existing line through an analog-to-SIP gateway',
        'Call handling on your own appliance',
        `Call activity and follow-up in the FSS portal (free for the first ${PORTAL_FREE_MONTHS} months)`,
      ],
    },
    demo: {
      label: 'Request a Demo',
      title: 'See MOJEEB Working for Your Business',
      text: `MOJEEB is in pre-launch. Request a live demonstration of the OMR ${omr(PACKAGE)} MOJEEB + PBX package, with FREE standard installation (regular fixed price OMR ${omr(INSTALLATION)}) and ${PORTAL_FREE_MONTHS} months of portal access FREE. Orders and delivery dates are confirmed in writing at launch; AI-provider usage is separate, and no free trial is currently available.`,
      nameLabel: 'Full Name',
      companyLabel: 'Company / Business Name',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email',
      businessTypeLabel: 'Business Type',
      businessTypePlaceholder: 'Select business type',
      businessTypes: ['Clinic', 'Restaurant', 'Home Services', 'Retail', 'Professional Office', 'Other'],
      messageLabel: 'Message / Requirements',
      submit: 'Send Request',
      note: 'Our team will contact you as soon as possible to arrange a demonstration.',
      successTitle: 'Thank you.',
      successText: 'Our team will contact you as soon as possible.',
      sendAnother: 'Send another request',
    },
    whatsapp: {
      label: 'Direct Contact',
      title: 'Call Us',
      text: 'Prefer direct communication? Call +968 2420 2829 to discuss your business requirements and request a Mojeeb AI demo or quotation.',
      button: 'Call +968 2420 2829',
    },
    portalPreview: {
      label: 'FSS Portal',
      title: 'Your Calls and Follow-ups in One Place',
      sub: `With the FSS portal, free for the first ${PORTAL_FREE_MONTHS} months, your team can review calls and follow-ups from one secure portal. After the free period it is renewed according to the selected plan.`,
      cards: [
        { icon: 'file',   title: 'Call Activity',        desc: 'Review calls handled by Mojeeb AI: caller number, time, duration and outcome.' },
        { icon: 'layout', title: 'Portal Notifications', desc: 'See missed-call and voicemail notifications when you log in.' },
        { icon: 'play',   title: 'Voicemail Playback',   desc: 'Listen to voicemails on request, where voicemail is enabled.' },
        { icon: 'repeat', title: 'Follow-up Tasks',      desc: 'Track and manage follow-up tasks created from missed calls and voicemails.' },
        { icon: 'users',  title: 'Caller Records',       desc: 'See callers and their call history in one place.' },
        { icon: 'chart',  title: 'Dashboard',            desc: 'An overview of recent call activity.' },
      ],
    },
    benefits: {
      label: 'Benefits',
      title: 'Why Businesses Choose Mojeeb AI',
      list: [
        'Fewer missed customer enquiries',
        'Faster customer response',
        'Your own on-site appliance',
        'Arabic + English communication',
        'Easier customer follow-up',
        'Suitable for clinics, restaurants, home services, retail, and professional offices',
      ],
    },
    idealFor: {
      label: 'Ideal For',
      title: 'Built for Businesses That Depend on Fast Customer Response',
      list: [
        { icon: 'clinic',    title: 'Clinics' },
        { icon: 'utensils',  title: 'Restaurants' },
        { icon: 'home',      title: 'Home Service Companies' },
        { icon: 'store',     title: 'Retail Businesses' },
        { icon: 'briefcase', title: 'Professional Offices' },
        { icon: 'phone',     title: 'Any business that depends on fast customer response' },
      ],
    },
  },

  footer: {
    tagline: 'Mojeeb AI — AI Voice Receptionist for Oman & GCC businesses.',
    location: 'Oman',
    contactLabel: 'Contact:',
    copyright: '© {year} Future Smart Support — All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: 10 October 2026',
    intro: 'This policy explains how Future Smart Support ("FSS") handles information through this website and in connection with Mojeeb AI. It distinguishes between the Mojeeb AI appliance installed at your premises, the connected AI services it uses, and the optional FSS Cloud Portal.',
    sections: [
      {
        title: '1. Information you send us through this website',
        body: 'When you use our contact or demo-request forms, or contact us by email or WhatsApp, we receive the details you provide, such as your name, email address, phone number, company name, business type and message. We use this information to respond to your enquiry, arrange demonstrations and prepare quotations. Form submissions are stored in FSS systems and forwarded to our team by email. Messages sent through WhatsApp are also subject to WhatsApp\'s own terms and privacy policy.',
      },
      {
        title: '2. Call information on the Mojeeb AI appliance',
        body: 'The Mojeeb AI appliance is installed at your premises and handles calls on your telephone line. Depending on its configuration, it may process and store call details such as the caller\'s number (where Caller ID is available), call times and duration, conversation content, voicemails and follow-up information.',
      },
      {
        title: '3. Connected AI services',
        body: 'To understand callers and respond to them, Mojeeb AI uses third-party AI services over the internet for speech recognition, language processing and voice generation. Audio and text from calls are sent to these service providers so they can be processed. An internet connection is therefore required for these features. Where your business uses its own AI provider account, the provider processes this data under the agreement between your business and that provider.',
      },
      {
        title: '4. The optional FSS Cloud Portal',
        body: 'If your business subscribes to the optional FSS Cloud Portal, call information is sent from the appliance to FSS cloud services so that your authorised users can view it remotely. This can include caller numbers and names, call times, duration and outcome, the text of the conversation between the caller and Mojeeb AI, voicemail and transfer information, and follow-up tasks. Voicemail audio is uploaded on request for playback and kept only temporarily.',
      },
      {
        title: '5. Who can access information',
        body: 'Information in the FSS Cloud Portal is available to the users your business authorises, according to their assigned roles, and to FSS personnel who need it to provide, maintain and support the service.',
      },
      {
        title: '6. Sharing',
        body: 'We do not sell personal information. We share information only with service providers that help us operate our services, such as the connected AI services described above and our email delivery provider; with services your business chooses to connect; or where required by law.',
      },
      {
        title: '7. Security',
        body: 'We use access controls and secure (HTTPS) connections for this website and our cloud services. No system is completely secure. You are responsible for securing your premises, local network and user accounts.',
      },
      {
        title: '8. Retention',
        body: 'We keep information for as long as it is needed to provide our services and to meet legal obligations. Contact us for details about specific information.',
      },
      {
        title: '9. Your responsibilities when using Mojeeb AI',
        body: 'Your business decides how Mojeeb AI is used with your callers. You are responsible for informing callers and obtaining any consent required by law, for example for call recording or the collection of caller numbers.',
      },
      {
        title: '10. Your rights',
        body: 'You may ask to access, correct or delete personal information we hold about you. To make a request, contact us at the email address below.',
      },
    ],
    contactTitle: 'Contact Us',
    contactText: 'If you have questions about this policy, contact us at:',
    contactEmail: 'majid@FutureSmartSupport.com',
    backHome: 'Back to Home',
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated: 21 October 2026',
    intro: 'These Terms of Service ("Terms") govern your access to and use of the website, products and services provided by Future Smart Support ("FSS"). By using our services, you agree to be bound by these Terms.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        body: 'By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.',
      },
      {
        title: '2. MOJEEB and the MOJEEB + PBX package',
        body: `FSS provides MOJEEB, an AI phone assistant appliance installed at the customer's premises. The current MOJEEB package includes the MOJEEB AI appliance (a physical server running Ubuntu Server, the FSS AI agent and a built-in PBX), one Grandstream HT813 analog-to-SIP gateway and one IP desk phone. ${PHONES_NOTE.en}`,
      },
      {
        title: '3. Promotional benefits and separately priced services',
        body: `Standard installation has a fixed price of OMR ${omr3(INSTALLATION)}. Under the current limited-time offer, standard installation is provided free of charge, and the FSS portal subscription is free for the first ${PORTAL_FREE_MONTHS} months (worth OMR ${omr(PORTAL_VALUE)}), then renewed according to the selected plan. Standard installation requires an operational local network (LAN) and a compatible ADSL internet connection. The following are not included in the package price and are provided only when separately agreed: additional IP phones; continued portal access after the free period; charges for the external AI services that power MOJEEB conversations, which are normally paid by the customer directly to the AI provider under the customer’s own account; and network, cabling, internet or other non-standard installation work, which requires a separate quotation.`,
      },
      {
        title: '4. Prices and taxes',
        body: `Advertised prices are in Omani Rials. The MOJEEB package is OMR ${omr3(PACKAGE)}. ${VAT.en.statement} ${VAT.en.detail} Final availability, compatibility, delivery, price, scope and any non-standard work are confirmed in writing.`,
      },
      {
        title: '5. Software licence and ongoing charges',
        body: 'There is no recurring licence fee for the Mojeeb software on the appliance. Telephone, internet, connected AI services, the optional FSS Cloud Portal and other third-party or separately contracted services may involve ongoing charges.',
      },
      {
        title: '6. Compatibility and site requirements',
        body: 'Standard installation requires an operational local network (LAN) and a compatible ADSL internet connection. Use of an existing telephone number and Caller ID depends on your line, your telephone provider\'s service and the configuration of the equipment.',
      },
      {
        title: '7. Warranty',
        body: 'The MOJEEB appliance hardware carries a two-year warranty, subject to FSS written warranty terms. Warranty arrangements for other items are stated in your quotation.',
      },
      {
        title: '8. Trials and availability',
        body: 'FSS does not currently offer free trials. Demonstrations may be arranged on request. Mojeeb AI is in a pre-launch stage: product information on this website is not an offer to sell, and orders, delivery dates and final prices are confirmed in writing.',
      },
      {
        title: '9. Eligibility',
        body: 'You must be at least 18 years old and legally capable of entering into binding contracts to use our services.',
      },
      {
        title: '10. User Responsibilities',
        body: 'You agree to: use the services in compliance with all applicable laws and regulations; ensure that any data you provide is accurate and lawful; obtain all necessary consents from your callers and customers; not misuse, disrupt, or attempt to gain unauthorized access to the services.',
      },
      {
        title: '11. Intellectual Property',
        body: 'All software, trademarks, and materials provided through the services are owned by or licensed to Future Smart Support. You may not copy, modify, or distribute them without prior written consent.',
      },
      {
        title: '12. Limitation of Liability',
        body: 'To the maximum extent permitted by law, Future Smart Support shall not be liable for any indirect, incidental, consequential, or special damages arising out of or related to your use of the services.',
      },
      {
        title: '13. Governing Law',
        body: 'These Terms shall be governed by and construed in accordance with the laws applicable to the jurisdiction in which Future Smart Support operates.',
      },
      {
        title: '14. Contact Information',
        body: 'If you have questions about these Terms, please contact us at: majid@FutureSmartSupport.com',
      },
    ],
    backHome: 'Back to Home',
  },
}
