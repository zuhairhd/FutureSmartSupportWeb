<template>
  <div class="home">
    <!-- Hero: message, one-time price, and the intro video -->
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-bg" aria-hidden="true"><span class="orb orb-a"></span><span class="orb orb-b"></span><span class="grid-lines"></span></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow-pill"><span class="live-dot" aria-hidden="true"></span>{{ s.hero.eyebrow }}</p>
          <h1 id="hero-title">{{ s.hero.title1 }} <span class="grad">{{ s.hero.title2 }}</span></h1>
          <p class="hero-sub">{{ s.hero.sub }}</p>

          <router-link class="price-chip" :to="{ path: '/', hash: '#offer' }" :aria-label="`${s.hero.priceLead}: ${P} ${s.currency}. ${s.hero.priceNote}`">
            <span class="price-chip-amount"><bdi><b>{{ P }}</b> {{ s.currency }}</bdi></span>
            <span class="price-chip-text"><b>{{ s.hero.priceLead }}</b><small><MarketingIcon name="check" :size="14" />{{ s.hero.priceNote }}</small></span>
          </router-link>

          <div class="hero-actions">
            <router-link class="btn btn-primary btn-lg" :to="{ path: '/', hash: '#demo' }">{{ s.cta.demo }} <MarketingIcon name="arrow" :size="18" class="flip-rtl" /></router-link>
            <a class="btn btn-glass btn-lg" :href="phoneLink"><MarketingIcon name="phone" :size="18" />{{ s.cta.call }}</a>
          </div>
          <ul class="hero-points">
            <li v-for="p in s.hero.points" :key="p"><MarketingIcon name="check" :size="15" />{{ p }}</li>
          </ul>
        </div>

        <figure class="video-card" id="video" :aria-label="s.video.title">
          <div class="video-frame">
            <video ref="videoEl" class="video" :src="videoSrc" :poster="posterSrc" preload="none" playsinline
                   :controls="playing" @play="playing = true" @ended="playing = false" :aria-label="s.video.title"></video>
            <button v-if="!playing" type="button" class="video-play" @click="playVideo" :aria-label="s.video.play">
              <span class="play-ring" aria-hidden="true"><MarketingIcon name="play" :size="30" /></span>
              <span class="play-text"><small>{{ s.video.kicker }}</small><b>{{ s.video.title }}</b></span>
            </button>
          </div>
          <figcaption class="video-caption"><MarketingIcon name="play" :size="12" />{{ s.video.caption }}</figcaption>
        </figure>
      </div>

      <div class="container">
        <ul class="trust">
          <li v-for="t in s.trust" :key="t.title"><span class="trust-icon"><MarketingIcon :name="t.icon" :size="20" /></span><span><b>{{ t.title }}</b><small>{{ t.sub }}</small></span></li>
        </ul>
      </div>
    </section>

    <!-- The problem -->
    <section class="section problem" id="problem" aria-labelledby="problem-title">
      <div class="container">
        <div class="heading">
          <p class="kicker">{{ s.problem.eyebrow }}</p>
          <h2 id="problem-title" class="title">{{ s.problem.title }}</h2>
          <p class="lead">{{ s.problem.sub }}</p>
        </div>
        <div class="problem-grid">
          <article v-for="(p, i) in s.problem.items" :key="p.title" class="problem-card reveal" :style="{ '--d': i }">
            <span class="icon-tile danger"><MarketingIcon :name="p.icon" :size="24" /></span>
            <h3>{{ p.title }}</h3><p>{{ p.desc }}</p>
          </article>
        </div>
        <p class="punch"><MarketingIcon name="bot" :size="22" />{{ s.problem.punch }}</p>
      </div>
    </section>

    <!-- How it works -->
    <section class="section how" id="how" aria-labelledby="how-title">
      <div class="container">
        <div class="heading center">
          <p class="kicker">{{ s.how.eyebrow }}</p>
          <h2 id="how-title" class="title">{{ s.how.title }}</h2>
        </div>
        <ol class="flow">
          <li v-for="(st, i) in s.how.steps" :key="st.title" class="flow-step reveal" :style="{ '--d': i }">
            <span class="flow-num" aria-hidden="true">{{ i + 1 }}</span>
            <span class="icon-tile"><MarketingIcon :name="st.icon" :size="26" /></span>
            <h3>{{ st.title }}</h3><p>{{ st.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- What's in the box -->
    <section class="section box" id="box" aria-labelledby="box-title">
      <span id="package" class="anchor" aria-hidden="true"></span>
      <div class="container">
        <div class="heading">
          <p class="kicker">{{ s.box.eyebrow }}</p>
          <h2 id="box-title" class="title">{{ s.box.title }}</h2>
          <p class="lead">{{ s.box.sub }}</p>
        </div>
        <div class="box-grid">
          <article v-for="(b, i) in s.box.items" :key="b.title" class="box-item reveal" :style="{ '--d': i }">
            <span class="icon-tile big"><MarketingIcon :name="b.icon" :size="30" /></span>
            <div><h3>{{ b.title }}</h3><p>{{ b.desc }}</p></div>
          </article>
        </div>
        <div class="free-row">
          <div v-for="f in s.box.freeItems" :key="f.title" class="free-card">
            <span class="free-badge">{{ s.box.free }}</span>
            <MarketingIcon :name="f.icon" :size="22" />
            <span><b>{{ f.title }}</b><small>{{ f.note }}</small></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Price: one-time cost illustrated -->
    <section class="section offer" id="offer" aria-labelledby="offer-title">
      <div class="container">
        <div class="heading center light">
          <p class="kicker">{{ s.offer.eyebrow }}</p>
          <h2 id="offer-title" class="title">{{ s.offer.title }}</h2>
          <p class="lead">{{ s.offer.sub }}</p>
        </div>

        <div class="offer-grid">
          <div class="price-card">
            <span class="tag">{{ s.offer.limited }}</span>
            <p class="price"><bdi><b>{{ P }}</b><span>{{ s.currency }}</span></bdi></p>
            <p class="price-once">{{ s.offer.once }}</p>
            <ul class="ledger">
              <li v-for="row in s.offer.ledger" :key="row.title" :class="row.kind">
                <span class="ledger-mark" aria-hidden="true"><MarketingIcon :name="ledgerIcon(row.kind)" :size="15" /></span>
                <span><b>{{ row.title }}</b><small>{{ row.desc }}</small></span>
              </li>
            </ul>
            <router-link class="btn btn-primary btn-block" :to="{ path: '/', hash: '#demo' }">{{ s.cta.demo }}</router-link>
            <p class="fine">{{ s.offer.vat }}</p>
          </div>

          <div class="once-card">
            <h3>{{ s.offer.chartTitle }}</h3>
            <div class="bars" role="img" :aria-label="`${s.offer.chartFirst}: ${P} ${s.currency}. ${s.offer.chartRest}: ${s.offer.chartZero}.`">
              <div v-for="m in 12" :key="m" class="bar-col" :class="{ first: m === 1 }">
                <span class="bar" :style="{ height: m === 1 ? '100%' : '3%' }"></span>
                <small>{{ m }}</small>
              </div>
            </div>
            <div class="bar-legend">
              <span><i class="sw sw-pay"></i>{{ s.offer.chartFirst }}: <bdi><b>{{ P }} {{ s.currency }}</b></bdi></span>
              <span><i class="sw sw-zero"></i>{{ s.offer.chartRest }}: <b>{{ s.offer.chartZero }}</b></span>
            </div>

            <div class="spread">
              <p class="spread-label">{{ s.offer.spreadLabel }}</p>
              <div class="seg" role="radiogroup" :aria-label="s.offer.spreadLabel">
                <button v-for="y in YEARS" :key="y" type="button" role="radio" :aria-checked="years === y" :class="{ on: years === y }" @click="years = y">{{ s.offer.years(y) }}</button>
              </div>
              <p class="spread-result" aria-live="polite">
                {{ s.offer.spreadIs }} <bdi v-if="lang === 'ar'"><b>{{ perMonth }}</b> {{ s.currency }}</bdi><bdi v-else>{{ s.currency }} <b>{{ perMonth }}</b></bdi> {{ s.offer.perMonth }}
              </p>
              <p class="fine">{{ s.offer.spreadNote }}</p>
            </div>
          </div>
        </div>
        <p class="terms">{{ s.offer.terms }}</p>
      </div>
    </section>

    <!-- Who it's for -->
    <section class="section who" id="who" aria-labelledby="who-title">
      <div class="container">
        <div class="heading center">
          <p class="kicker">{{ s.who.eyebrow }}</p>
          <h2 id="who-title" class="title">{{ s.who.title }}</h2>
        </div>
        <ul class="who-grid">
          <li v-for="(w, i) in s.who.items" :key="w.title" class="who-item reveal" :style="{ '--d': i % 4 }">
            <span class="icon-tile"><MarketingIcon :name="w.icon" :size="24" /></span>
            <b>{{ w.title }}</b><small>{{ w.desc }}</small>
          </li>
        </ul>
      </div>
    </section>

    <!-- Honest limits -->
    <section class="section limits" id="limits" aria-labelledby="limits-title">
      <div class="container">
        <div class="heading">
          <p class="kicker">{{ s.limits.eyebrow }}</p>
          <h2 id="limits-title" class="title">{{ s.limits.title }}</h2>
          <p class="lead">{{ s.limits.sub }}</p>
        </div>
        <div class="limits-grid">
          <article v-for="l in s.limits.items" :key="l.title" class="limit">
            <span class="icon-tile warn"><MarketingIcon :name="l.icon" :size="22" /></span>
            <div><h3>{{ l.title }}</h3><p>{{ l.desc }}</p></div>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section faq" id="faq" aria-labelledby="faq-title">
      <div class="container faq-grid">
        <div class="heading">
          <p class="kicker">{{ s.faq.eyebrow }}</p>
          <h2 id="faq-title" class="title">{{ s.faq.title }}</h2>
          <a class="btn btn-outline" :href="phoneLink"><MarketingIcon name="phone" :size="17" /><bdi dir="ltr">{{ PHONE_DISPLAY }}</bdi></a>
        </div>
        <div class="faq-list">
          <details v-for="(item, i) in s.faq.items" :key="i" class="faq-item" :open="i === 0">
            <summary><span>{{ item.q }}</span><span class="faq-toggle" aria-hidden="true"></span></summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Call to try it -->
    <section class="try" aria-labelledby="try-title">
      <div class="container try-inner">
        <div>
          <h2 id="try-title">{{ s.final.title }}</h2>
          <p>{{ s.final.sub }}</p>
        </div>
        <div class="try-actions">
          <a class="btn btn-primary btn-lg" :href="phoneLink"><MarketingIcon name="phone" :size="18" /><bdi dir="ltr">{{ PHONE_DISPLAY }}</bdi></a>
          <router-link class="try-link" :to="{ path: '/', hash: '#demo' }">{{ s.final.demo }} <MarketingIcon name="arrow" :size="15" class="flip-rtl" /></router-link>
        </div>
      </div>
    </section>

    <VoicegateDemoSection />
    <ContactSection />

    <!-- Mobile action bar; hidden over the hero, the forms and the footer -->
    <div class="sticky-cta" :class="{ show: stickyVisible }" :aria-hidden="!stickyVisible">
      <router-link class="btn btn-primary" :to="{ path: '/', hash: '#demo' }" :tabindex="stickyVisible ? 0 : -1">{{ s.cta.demo }}</router-link>
      <a class="btn btn-call" :href="phoneLink" :aria-label="s.cta.call" :tabindex="stickyVisible ? 0 : -1"><MarketingIcon name="phone" :size="20" /></a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'
import { PACKAGE, omr, phoneHref } from '../pricing.js'
import { PHONE_DISPLAY } from '../constants.js'
import messages from '../i18n/home.js'
import MarketingIcon from '../components/MarketingIcon.vue'
import ContactSection from '../components/ContactSection.vue'
import VoicegateDemoSection from '../components/VoicegateDemoSection.vue'

// The intro video is served as-is from public/video (Vite copies public/ into dist/).
const videoSrc = '/video/mojeeb-intro.mp4'
const posterSrc = '/video/mojeeb-intro-poster.jpg'

const { lang } = useLanguage()
const s = computed(() => messages[lang.value] || messages.en)
const phoneLink = phoneHref()
const P = omr(PACKAGE)

const YEARS = [1, 3, 5]
const years = ref(3)
// OMR has 3 decimals (baisa).
const perMonth = computed(() => (PACKAGE / (years.value * 12)).toFixed(3))

const ledgerIcon = kind => ({ pay: 'wallet', free: 'gift', zero: 'check', direct: 'info' }[kind] || 'check')

const videoEl = ref(null)
const playing = ref(false)
function playVideo() {
  playing.value = true
  const v = videoEl.value
  if (!v) return
  const p = v.play()
  if (p && p.catch) p.catch(() => { /* autoplay refused: native controls are now shown */ })
  v.focus()
}

const stickyVisible = ref(false)
let observer, revealer
onMounted(() => {
  const hidden = new Set()
  observer = new IntersectionObserver(entries => {
    for (const e of entries) e.isIntersecting ? hidden.add(e.target) : hidden.delete(e.target)
    stickyVisible.value = hidden.size === 0
  })
  for (const sel of ['#top', '#demo', '#contact', '.fss-footer']) {
    const el = document.querySelector(sel)
    if (el) observer.observe(el)
  }
  const els = document.querySelectorAll('.home .reveal')
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('in'))
    return
  }
  revealer = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target) }
  }, { rootMargin: '0px 0px -8% 0px' })
  els.forEach(el => revealer.observe(el))
})
onUnmounted(() => { observer?.disconnect(); revealer?.disconnect() })
</script>

<style scoped>
.home { --ink: #071d34; --ink-2: #0c2b4b; --teal: #00bdb5; --teal-d: #007a80; --sky: #237fe4; --warn: #c27a12; --danger: #d0464a; }

/* ---------- Hero ---------- */
.hero { position: relative; overflow: hidden; color: #fff; background: radial-gradient(1200px 600px at 85% -10%, #12406b 0%, transparent 60%), linear-gradient(180deg, #061a2f 0%, var(--ink) 55%, #0a2742 100%); padding: 56px 0 28px; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: .55; }
.orb-a { width: 420px; height: 420px; background: #00bdb5; inset-inline-start: -140px; top: 120px; opacity: .22; }
.orb-b { width: 520px; height: 520px; background: #237fe4; inset-inline-end: -160px; top: -200px; opacity: .25; }
.grid-lines { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse at 50% 20%, #000 20%, transparent 75%); }
.hero-grid { position: relative; display: grid; gap: 36px; align-items: center; }
.eyebrow-pill { display: inline-flex; align-items: center; gap: 10px; margin: 0 0 18px; padding: 7px 14px; border-radius: 999px; background: rgba(255,255,255,.07); border: 1px solid rgba(126,208,230,.22); color: #bfeff0; font-size: 13px; font-weight: 700; }
.live-dot { width: 8px; height: 8px; border-radius: 50%; background: #3ee6a8; box-shadow: 0 0 0 0 rgba(62,230,168,.6); animation: pulse 2s infinite; }
@keyframes pulse { 70% { box-shadow: 0 0 0 9px rgba(62,230,168,0); } 100% { box-shadow: 0 0 0 0 rgba(62,230,168,0); } }
h1 { margin: 0 0 18px; font-size: clamp(34px, 6.2vw, 62px); line-height: 1.08; letter-spacing: -.035em; font-weight: 850; }
html[dir='rtl'] h1 { letter-spacing: 0; line-height: 1.3; }
.grad { display: block; background: linear-gradient(100deg, #5ff3e8 0%, #33c7ff 55%, #8fb8ff 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-sub { margin: 0 0 24px; max-width: 590px; color: #c7d8e6; font-size: clamp(16px, 1.6vw, 18.5px); line-height: 1.7; }

.price-chip { display: inline-flex; align-items: stretch; margin-bottom: 26px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(95,243,232,.35); background: rgba(255,255,255,.06); transition: transform .2s, border-color .2s; }
.price-chip:hover { transform: translateY(-2px); border-color: rgba(95,243,232,.7); opacity: 1; }
.price-chip-amount { display: grid; place-items: center; padding: 10px 18px; background: linear-gradient(135deg, #3cdbd0, #05c0b6); color: #062336; font-size: 15px; font-weight: 800; }
.price-chip-amount b { font-size: 28px; letter-spacing: -.02em; }
.price-chip-text { display: grid; align-content: center; padding: 8px 16px; line-height: 1.35; }
.price-chip-text b { font-size: 15.5px; }
.price-chip-text small { display: inline-flex; align-items: center; gap: 6px; color: #8ff0e6; font-size: 13.5px; font-weight: 700; }

.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
.btn-lg { padding: 15px 24px; font-size: 15px; }
.btn-glass { color: #fff; background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.22); }
.btn-glass:hover { background: rgba(255,255,255,.14); }
.hero-points { display: flex; flex-wrap: wrap; gap: 8px 18px; margin: 0; padding: 0; list-style: none; color: #b4c8d8; font-size: 14px; }
.hero-points li { display: inline-flex; align-items: center; gap: 7px; }
.hero-points :deep(svg) { color: #5ff3e8; }

.video-card { margin: 0; }
.video-frame { position: relative; aspect-ratio: 16 / 9; border-radius: 22px; overflow: hidden; background: #02101e; box-shadow: 0 30px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(126,208,230,.22); }
.video-frame::after { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.06); }
.video { display: block; width: 100%; height: 100%; object-fit: cover; background: #02101e; }
.video-play { position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: flex-start; gap: 14px; padding: 20px; border: 0; color: #fff; text-align: start; background: linear-gradient(180deg, rgba(2,16,30,0) 35%, rgba(2,16,30,.82) 100%); cursor: pointer; }
.play-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: grid; place-items: center; width: 82px; height: 82px; border-radius: 50%; color: #062336; background: linear-gradient(135deg, #5ff3e8, #05c0b6); box-shadow: 0 0 0 10px rgba(95,243,232,.18), 0 14px 40px rgba(0,0,0,.4); transition: transform .2s; }
.play-ring :deep(svg) { margin-inline-start: 4px; }
html[dir='rtl'] .play-ring :deep(svg) { margin-inline-start: 0; margin-inline-end: 4px; }
.video-play:hover .play-ring, .video-play:focus-visible .play-ring { transform: translate(-50%, -50%) scale(1.07); }
.play-text { display: grid; line-height: 1.35; }
.play-text small { color: #8ff0e6; font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
html[dir='rtl'] .play-text small { letter-spacing: 0; text-transform: none; }
.play-text b { font-size: 17px; }
.video-caption { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; color: #93abc0; font-size: 13px; }

.trust { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 40px 0 0; padding: 0; list-style: none; }
.trust li { display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: 16px; background: rgba(255,255,255,.05); border: 1px solid rgba(126,208,230,.14); }
.trust b { display: block; font-size: 15px; }
.trust small { color: #9db4c7; font-size: 12.5px; }
.trust-icon { flex: none; display: grid; place-items: center; width: 40px; height: 40px; border-radius: 12px; color: #5ff3e8; background: rgba(95,243,232,.1); }

/* ---------- Shared section pieces ---------- */
.section { position: relative; padding: 64px 0; border-top: 0; }
.anchor { position: absolute; top: 0; }
.heading { max-width: 760px; margin-bottom: 34px; }
.heading.center { margin-inline: auto; text-align: center; }
.kicker { display: inline-block; margin: 0 0 12px; color: var(--teal-d); font-size: 12.5px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
html[dir='rtl'] .kicker { letter-spacing: 0; font-size: 14px; }
.title { margin: 0 0 14px; font-size: clamp(27px, 4vw, 42px); line-height: 1.18; letter-spacing: -.028em; font-weight: 820; color: var(--ink); }
html[dir='rtl'] .title { letter-spacing: 0; line-height: 1.4; }
.lead { margin: 0; color: var(--muted); font-size: 17px; line-height: 1.7; }
.icon-tile { flex: none; display: grid; place-items: center; width: 50px; height: 50px; border-radius: 14px; color: var(--teal-d); background: linear-gradient(135deg, #e3faf8, #e4f0fd); }
.icon-tile.big { width: 62px; height: 62px; border-radius: 18px; }
.icon-tile.danger { color: var(--danger); background: #fdecec; }
.icon-tile.warn { color: var(--warn); background: #fdf3e2; }
h3 { margin: 16px 0 8px; font-size: 18.5px; line-height: 1.35; color: var(--ink); }
p { margin: 0; }

.reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; transition-delay: calc(var(--d, 0) * 90ms); }
.reveal.in { opacity: 1; transform: none; }

/* ---------- Problem ---------- */
.problem { background: #fff; }
.problem-grid { display: grid; gap: 16px; }
.problem-card { padding: 26px; border-radius: 22px; background: #fbfdfe; border: 1px solid var(--line); }
.problem-card p { color: var(--muted); }
.punch { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 30px; padding: 18px 22px; border-radius: 18px; color: #fff; font-size: clamp(17px, 2vw, 21px); font-weight: 800; text-align: center; background: linear-gradient(110deg, var(--ink), #0e3d66 60%, #0b6670); }
.punch :deep(svg) { color: #5ff3e8; flex: none; }

/* ---------- How ---------- */
.how { background: linear-gradient(180deg, #eef7fb, #f6fbfd); }
.flow { display: grid; gap: 16px; margin: 0; padding: 0; list-style: none; counter-reset: s; }
.flow-step { position: relative; padding: 26px; border-radius: 22px; background: #fff; border: 1px solid var(--line); box-shadow: 0 16px 40px rgba(13,52,82,.05); }
.flow-step p { color: var(--muted); }
.flow-num { position: absolute; top: 18px; inset-inline-end: 20px; font-size: 44px; font-weight: 900; line-height: 1; color: #e2eef5; }

/* ---------- Box ---------- */
.box { background: #fff; }
.box-grid { display: grid; gap: 16px; }
.box-item { display: flex; gap: 18px; align-items: flex-start; padding: 24px; border-radius: 22px; border: 1px solid var(--line); background: linear-gradient(180deg, #fff, #f8fcfe); transition: transform .2s, box-shadow .2s, border-color .2s; }
.box-item:hover { transform: translateY(-3px); border-color: #a9dfe0; box-shadow: 0 18px 40px rgba(13,52,82,.08); }
.box-item h3 { margin-top: 2px; }
.box-item p { color: var(--muted); }
.free-row { display: grid; gap: 12px; margin-top: 18px; }
.free-card { display: flex; align-items: center; gap: 14px; padding: 16px 18px; border-radius: 18px; border: 1.5px dashed #6fd6cf; background: #effcfa; color: var(--teal-d); }
.free-card b { display: block; color: var(--ink); }
.free-card small { color: var(--muted); }
.free-badge { flex: none; padding: 6px 12px; border-radius: 999px; color: #fff; background: var(--teal-d); font-size: 12.5px; font-weight: 850; letter-spacing: .06em; }

/* ---------- Offer ---------- */
.offer { color: #fff; background: radial-gradient(900px 500px at 15% 0%, rgba(0,189,181,.18), transparent 60%), linear-gradient(180deg, var(--ink), #0a2a48); }
.heading.light .title { color: #fff; }
.heading.light .lead { color: #b9cddd; }
.heading.light .kicker { color: #5ff3e8; }
.offer-grid { display: grid; gap: 18px; align-items: start; }
.price-card, .once-card { border-radius: 26px; padding: 28px 24px; }
.price-card { position: relative; color: var(--fg); background: #fff; box-shadow: 0 30px 70px rgba(0,0,0,.3); }
.tag { display: inline-block; padding: 6px 12px; border-radius: 999px; color: #8a4b00; background: #ffeccc; font-size: 12.5px; font-weight: 800; }
.price { margin: 14px 0 0; color: var(--ink); line-height: 1; }
.price b { font-size: clamp(64px, 10vw, 88px); font-weight: 900; letter-spacing: -.045em; }
.price span { margin-inline-start: 8px; font-size: 22px; font-weight: 800; color: var(--muted); }
.price-once { margin: 8px 0 20px; color: var(--teal-d); font-weight: 800; font-size: 16px; }
.ledger { display: grid; gap: 12px; margin: 0 0 22px; padding: 18px 0 0; list-style: none; border-top: 1px solid var(--line); }
.ledger li { display: flex; gap: 12px; align-items: flex-start; }
.ledger b { display: block; font-size: 15.5px; color: var(--ink); }
.ledger small { display: block; color: var(--muted); font-size: 13.5px; line-height: 1.55; }
.ledger-mark { flex: none; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 9px; margin-top: 1px; }
.ledger .pay .ledger-mark { color: #fff; background: var(--ink); }
.ledger .free .ledger-mark { color: #fff; background: var(--teal-d); }
.ledger .zero .ledger-mark { color: #fff; background: #079b7c; }
.ledger .zero b { color: #067a62; }
.ledger .direct .ledger-mark { color: #4a6578; background: #e8f0f5; }
.btn-block { width: 100%; }
.fine { margin-top: 12px; color: var(--muted); font-size: 12.5px; line-height: 1.6; }

.once-card { background: rgba(255,255,255,.05); border: 1px solid rgba(126,208,230,.2); }
.once-card h3 { margin: 0 0 22px; color: #fff; font-size: 17px; }
.bars { display: grid; grid-template-columns: repeat(12, 1fr); gap: 6px; height: 190px; align-items: end; }
.bar-col { display: grid; grid-template-rows: 1fr auto; gap: 6px; height: 100%; text-align: center; }
.bar-col small { color: #7f9ab0; font-size: 11px; }
.bar { align-self: end; display: block; width: 100%; min-height: 4px; border-radius: 6px 6px 3px 3px; background: rgba(95,243,232,.28); }
.bar-col.first .bar { background: linear-gradient(180deg, #5ff3e8, #05a8a1); box-shadow: 0 0 24px rgba(95,243,232,.35); }
.bar-legend { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 16px; color: #c8d9e6; font-size: 14px; }
.bar-legend span { display: inline-flex; align-items: center; gap: 8px; }
.sw { display: inline-block; width: 12px; height: 12px; border-radius: 4px; }
.sw-pay { background: #5ff3e8; }
.sw-zero { background: rgba(95,243,232,.28); }
.spread { margin-top: 26px; padding-top: 22px; border-top: 1px solid rgba(126,208,230,.18); }
.spread-label { margin-bottom: 10px; color: #9db4c7; font-size: 14px; }
.seg { display: inline-flex; padding: 4px; border-radius: 14px; background: rgba(0,0,0,.25); border: 1px solid rgba(126,208,230,.18); }
.seg button { min-width: 78px; padding: 9px 14px; border: 0; border-radius: 10px; color: #c8d9e6; background: transparent; font-weight: 700; font-size: 14px; }
.seg button.on { color: #062336; background: #5ff3e8; }
.spread-result { margin-top: 14px; color: #dbe8f2; font-size: 17px; }
.spread-result b { color: #5ff3e8; font-size: 30px; font-weight: 900; }
.once-card .fine { color: #8ea7bb; }
.terms { max-width: 860px; margin: 22px auto 0; color: #8ea7bb; font-size: 13px; text-align: center; line-height: 1.7; }

/* ---------- Who ---------- */
.who { background: #f6fbfd; }
.who-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 0; padding: 0; list-style: none; }
.who-item { display: grid; gap: 4px; padding: 20px; border-radius: 20px; background: #fff; border: 1px solid var(--line); }
.who-item .icon-tile { margin-bottom: 10px; width: 46px; height: 46px; }
.who-item b { color: var(--ink); font-size: 16px; }
.who-item small { color: var(--muted); font-size: 13.5px; line-height: 1.55; }

/* ---------- Limits ---------- */
.limits { background: #fff; }
.limits-grid { display: grid; gap: 14px; }
.limit { display: flex; gap: 16px; padding: 22px; border-radius: 20px; background: #fffcf6; border: 1px solid #f3e3c4; }
.limit h3 { margin: 2px 0 6px; font-size: 17px; }
.limit p { color: var(--muted); font-size: 15px; }

/* ---------- FAQ ---------- */
.faq { background: #f6fbfd; }
.faq-grid { display: grid; gap: 10px; }
.faq .btn-outline { margin-top: 8px; color: var(--ink); border-color: #b9d3e0; background: #fff; }
.faq-list { display: grid; gap: 10px; }
.faq-item { border-radius: 16px; background: #fff; border: 1px solid var(--line); }
.faq-item[open] { border-color: #9edbd8; box-shadow: 0 12px 30px rgba(13,52,82,.06); }
.faq-item summary { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 20px; cursor: pointer; list-style: none; font-weight: 750; color: var(--ink); }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item p { padding: 0 20px 18px; color: var(--muted); line-height: 1.75; }
.faq-toggle { position: relative; flex: none; width: 26px; height: 26px; border-radius: 50%; background: #e7f4f8; }
.faq-toggle::before, .faq-toggle::after { content: ''; position: absolute; top: 50%; left: 50%; width: 11px; height: 2px; background: var(--teal-d); transform: translate(-50%, -50%); transition: transform .2s; }
.faq-toggle::after { transform: translate(-50%, -50%) rotate(90deg); }
.faq-item[open] .faq-toggle::after { transform: translate(-50%, -50%) rotate(0); }

/* ---------- Try it ---------- */
.try { padding: 8px 0 72px; background: #f6fbfd; }
.try-inner { display: grid; gap: 22px; padding: 34px 26px; border-radius: 28px; color: #fff; background: radial-gradient(600px 300px at 90% 0%, rgba(95,243,232,.25), transparent 60%), linear-gradient(120deg, #0b2c4d, var(--ink)); transform: translateY(-1px); }
.try h2 { margin: 0 0 8px; font-size: clamp(25px, 3.4vw, 36px); line-height: 1.25; }
.try p { color: #b9cddd; }
.try-actions { display: grid; gap: 14px; justify-items: start; align-content: center; }
.try-link { display: inline-flex; align-items: center; gap: 8px; color: #8ff0e6; font-weight: 700; }

/* ---------- Mobile action bar ---------- */
.sticky-cta { position: fixed; inset-inline: 12px; bottom: 12px; z-index: 90; display: flex; gap: 10px; padding: 10px; border-radius: 18px; background: rgba(7,29,52,.94); backdrop-filter: blur(12px); box-shadow: 0 18px 40px rgba(0,0,0,.3); transform: translateY(140%); transition: transform .25s ease; }
.sticky-cta.show { transform: none; }
.sticky-cta .btn-primary { flex: 1; }
.btn-call { flex: none; width: 52px; padding: 0; color: #fff; border-color: rgba(255,255,255,.25); background: rgba(255,255,255,.08); }


/* ---------- Larger screens ---------- */
@media (min-width: 640px) {
  .trust { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .problem-grid { grid-template-columns: repeat(3, 1fr); }
  .flow { grid-template-columns: repeat(2, 1fr); }
  .box-grid, .free-row, .limits-grid { grid-template-columns: repeat(2, 1fr); }
  .who-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
@media (min-width: 960px) {
  .hero { padding: 84px 0 40px; }
  .hero-grid { grid-template-columns: 1.02fr 1fr; gap: 56px; }
  .section { padding: 96px 0; }
  .flow { grid-template-columns: repeat(4, 1fr); }
  .flow-step:not(:last-child)::after { content: ''; position: absolute; top: 50px; inset-inline-end: -14px; width: 12px; height: 12px; border-top: 2px solid #9edbd8; border-inline-end: 2px solid #9edbd8; transform: rotate(45deg); }
  html[dir='rtl'] .flow-step:not(:last-child)::after { transform: rotate(-45deg); }
  .offer-grid { grid-template-columns: 1fr 1.15fr; gap: 24px; }
  .price-card, .once-card { padding: 36px; }
  .limits-grid { grid-template-columns: repeat(3, 1fr); }
  .faq-grid { grid-template-columns: .8fr 1.4fr; gap: 48px; align-items: start; }
  .faq .heading { position: sticky; top: 100px; }
  .try-inner { grid-template-columns: 1.4fr 1fr; padding: 46px 52px; }
  .sticky-cta { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .live-dot { animation: none; }
}
</style>
