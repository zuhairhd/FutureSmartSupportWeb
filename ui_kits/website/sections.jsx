/* VoiceGate AI — page sections.
   Globals expected: Icon (icons.jsx), I18N (i18n.js), React. */

const { useState, useEffect, useRef } = React;

/* ---------- Reveal-on-scroll ---------- */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  // Initialize from viewport check so anything above-the-fold renders visible
  // immediately even if the IntersectionObserver never fires (some embedded
  // iframes throttle it).
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return false;
  });
  useEffect(() => {
    const el = ref.current; if (!el) { setVisible(true); return; }
    // Mark visible if already in viewport
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) { setVisible(true); return; }
    let fired = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { fired = true; setVisible(true); io.disconnect(); }
    }, { threshold: 0.05 });
    io.observe(el);
    // Safety fallback — if IO never fires (some sandboxed contexts) reveal after 800ms
    const safety = setTimeout(() => { if (!fired) setVisible(true); }, 800);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ---------- Header ---------- */
const Header = ({ t, lang, onLangToggle, theme, onThemeToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Icon name="mic" size={16} stroke={2} />
          </span>
          <span className="brand-name">
            VoiceGate AI
            <small>by Future Smart Support</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#features">{t.nav.features}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#industries">{t.nav.industries}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={onThemeToggle} title="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <button className="lang-btn" onClick={onLangToggle} aria-label="Switch language">
            <Icon name="globe" size={14} />
            {t.nav.switchTo}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm" style={{ marginInlineStart: 4 }}>
            {t.nav.demo}
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>{t.nav.features}</a>
        <a href="#how" onClick={() => setMenuOpen(false)}>{t.nav.how}</a>
        <a href="#industries" onClick={() => setMenuOpen(false)}>{t.nav.industries}</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>{t.nav.pricing}</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>{t.nav.demo}</a>
      </div>
    </header>
  );
};

/* ---------- Hero ---------- */
const Hero = ({ t }) => {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1>
              {t.hero.h1a}<br />
              <span className="gradient-text">{t.hero.h1b}</span>
              {t.hero.h1c}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-sub">{t.hero.sub}</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="hero-tag">{t.hero.tag}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary btn-lg">
                {t.hero.cta1}
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#conversation" className="btn btn-ghost btn-lg">
                <Icon name="play" size={16} />
                {t.hero.cta2}
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="hero-trust">
              {t.hero.trust.map((it, i) => (
                <div className="item" key={i}>
                  <span className="v">{it.v}</span>
                  <span className="l">{it.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
          <div className="hero-glow-bg"></div>
          <div className="live-call">
            <div className="lc-head">
              <span className="lc-incoming">
                <span className="pulse-dot"></span>
                {t.hero.call.incoming}
              </span>
              <span className="lc-num mono">{t.hero.call.num}</span>
              <span className="lc-timer mono">{t.hero.call.timer}</span>
            </div>
            <div className="lc-body">
              <div className="bubble caller" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
                <div className="who" dir="ltr">{t.hero.call.bubble1Who}</div>
                {t.hero.call.bubble1}
              </div>
              <div className="bubble ai" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
                <div className="who" dir="ltr">{t.hero.call.bubble2Who}</div>
                {t.hero.call.bubble2}
              </div>
              <div className="bubble caller typing">
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{t.hero.call.bubble3Who}</span>
                <span className="dots"><span></span><span></span><span></span></span>
              </div>
            </div>
            <div className="lc-foot">
              <span className="waveform-lg" aria-hidden="true">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} style={{
                    height: `${20 + Math.sin(i * 0.7) * 16 + Math.cos(i * 0.4) * 8}%`,
                    animationDelay: `${(i * 0.06) % 1.6}s`,
                  }}></span>
                ))}
              </span>
              <span className="lang-chip">{t.hero.call.langChip}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Logo strip ---------- */
const LogoStrip = ({ t }) => (
  <div className="logo-strip">
    <div className="container">
      <p className="label">{t.logos.label}</p>
      <div className="row">
        {t.logos.items.map((name, i) => (
          <div className="logo-item" key={i}>
            <Icon name={['shield','star','repeat','layout','file','bell'][i % 6]} size={16} stroke={1.5} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ---------- Features ---------- */
const Features = ({ t }) => (
  <section className="section" id="features">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.features.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.features.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.features.sub}</p></Reveal>
      </div>
      <div className="features-grid">
        {t.features.items.map((f, i) => (
          <Reveal key={i} delay={i * 40}>
            <div className="card card-glow feature">
              <div className="ico-tile"><Icon name={f.icon} size={20} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- How it Works ---------- */
const How = ({ t }) => (
  <section className="section" id="how">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.how.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.how.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.how.sub}</p></Reveal>
      </div>
      <div className="how-track">
        {t.how.steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="card how-step">
              <span className="step-num">{i + 1}</span>
              <div className="step-icon"><Icon name={s.icon} size={20} /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Industries ---------- */
const Industries = ({ t }) => (
  <section className="section" id="industries">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.industries.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.industries.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.industries.sub}</p></Reveal>
      </div>
      <div className="ind-grid">
        {t.industries.items.map((it, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="card card-glow industry">
              <div className="ico-tile"><Icon name={it.icon} size={18} /></div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
              <span className="arrow">
                {t.industries.cta} <Icon name="arrow-right" size={14} />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Why Us ---------- */
const WhyUs = ({ t }) => (
  <section className="section" id="why">
    <div className="container why-wrap">
      <div>
        <Reveal><span className="eyebrow">{t.why.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.why.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede" style={{ marginTop: 18 }}>{t.why.sub}</p></Reveal>
        <div className="why-points">
          {t.why.points.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="why-point">
                <span className="tick"><Icon name="check" size={14} /></span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={140}>
        <div className="stat-grid">
          {t.why.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- Live Dashboard ---------- */
const DashChart = () => {
  // Synthetic 14-day call volume curve
  const data = [22, 35, 28, 44, 50, 41, 58, 65, 60, 72, 80, 76, 92, 142];
  const max = Math.max(...data);
  const W = 600, H = 160, P = 8;
  const stepX = (W - P * 2) / (data.length - 1);
  const pts = data.map((v, i) => [P + i * stepX, H - P - (v / max) * (H - P * 2)]);
  const path = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const area = `${path} L${pts[pts.length - 1][0]},${H - P} L${pts[0][0]},${H - P} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="var(--c-cyan)" />
          <stop offset="100%" stopColor="var(--c-blue)" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="var(--c-cyan)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--c-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map(f => (
        <line key={f}
          x1={P} x2={W - P}
          y1={P + (H - P * 2) * f} y2={P + (H - P * 2) * f}
          stroke="var(--line)" strokeDasharray="3 4" />
      ))}
      <path d={area} fill="url(#areaGrad)" />
      <path d={path} fill="none" stroke="url(#lineGrad)" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        i === pts.length - 1 ? (
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r="8" fill="var(--c-cyan)" opacity="0.2" />
            <circle cx={p[0]} cy={p[1]} r="4" fill="var(--c-cyan)" />
          </g>
        ) : null
      ))}
    </svg>
  );
};

const Dashboard = ({ t }) => (
  <section className="section dash-section" id="dashboard">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.dash.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.dash.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.dash.sub}</p></Reveal>
      </div>
      <Reveal delay={120}>
        <div className="dash-wrap">
          <div className="dash-chrome">
            <div className="dots"><span></span><span></span><span></span></div>
            <div className="url">app.futuresmartsupport.com/dashboard</div>
            <div style={{ width: 33 }}></div>
          </div>
          <div className="dash-body">
            <aside className="dash-side">
              <div className="sb-divider">{t.dash.sidebar.section1}</div>
              <div className="sb-item active"><Icon name="layout" size={16} />{t.dash.sidebar.item1}</div>
              <div className="sb-item"><Icon name="phone" size={16} />{t.dash.sidebar.item2}</div>
              <div className="sb-item"><Icon name="play" size={16} />{t.dash.sidebar.item3}</div>
              <div className="sb-item"><Icon name="file" size={16} />{t.dash.sidebar.item4}</div>
              <div className="sb-item"><Icon name="calendar" size={16} />{t.dash.sidebar.item5}</div>
              <div className="sb-divider">{t.dash.sidebar.section2}</div>
              <div className="sb-item"><Icon name="chart" size={16} />{t.dash.sidebar.item6}</div>
              <div className="sb-item"><Icon name="repeat" size={16} />{t.dash.sidebar.item7}</div>
              <div className="sb-item"><Icon name="server" size={16} />{t.dash.sidebar.item8}</div>
            </aside>
            <div className="dash-content">
              <div className="dash-h">
                <h3>{t.dash.title2}</h3>
                <span className="dash-pill"><span className="dot"></span>{t.dash.pill}</span>
              </div>
              <div className="dash-kpis">
                {t.dash.kpis.map((k, i) => (
                  <div className="kpi" key={i}>
                    <div className="lbl">{k.lbl}</div>
                    <div className="val">{k.val}</div>
                    <div className={`delta ${k.dir}`}>
                      <Icon name="arrow-right" size={12} stroke={2.5} style={{ transform: k.dir === 'up' ? 'rotate(-45deg)' : 'rotate(45deg)' }} />
                      {k.d}
                    </div>
                  </div>
                ))}
              </div>
              <div className="dash-row">
                <div className="chart-card">
                  <h4>{t.dash.chartTitle}</h4>
                  <DashChart />
                </div>
                <div className="recent-card">
                  <h4>{t.dash.recentTitle}</h4>
                  <div className="recent-list">
                    {t.dash.recents.map((r, i) => (
                      <div className="recent-row" key={i}>
                        <span className="avatar">{r.who.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                        <div className="who">
                          <div className="name">{r.who}</div>
                          <div className="num mono">{r.num}</div>
                        </div>
                        <span className={`tag ${r.tag}`}>{r.tagL}</span>
                        <span className="time">{r.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- Pricing ---------- */
const Pricing = ({ t }) => (
  <section className="section" id="pricing">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.pricing.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.pricing.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.pricing.sub}</p></Reveal>
      </div>
      <div className="pricing-grid">
        {t.pricing.plans.map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className={`plan ${p.featured ? 'featured' : ''}`}>
              {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="v">{p.price}</span>
                {p.unit && <span className="u">{p.unit}</span>}
              </div>
              <p className="plan-desc">{p.desc}</p>
              <ul className="plan-features">
                {p.features.map((f, k) => (
                  <li key={k}><Icon name="check" size={14} stroke={2.5} />{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</a>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={300}>
        <p className="plan-note" style={{ maxWidth: 760, margin: '32px auto 0', textAlign: 'center', border: 'none', paddingTop: 0 }}>
          {t.pricing.note}
        </p>
      </Reveal>
    </div>
  </section>
);

/* ---------- Testimonials ---------- */
const Testimonials = ({ t }) => (
  <section className="section" id="testimonials">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.testimonials.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.testimonials.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.testimonials.sub}</p></Reveal>
      </div>
      {t.testimonials.metrics && (
        <Reveal delay={120}>
          <div className="metrics-strip">
            {t.testimonials.metrics.map((m, i) => (
              <div className="metric" key={i}>
                <div className="v">{m.v}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      )}
      <div className="test-grid">
        {t.testimonials.items.map((it, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="card testimonial">
              <div className="stars">
                {[0,1,2,3,4].map(k => <Icon key={k} name="star" size={14} stroke={2.5} />)}
              </div>
              <p className="quote">{it.q}</p>
              {it.metric && (
                <span className="metric-badge">
                  <Icon name="chart" size={12} stroke={2.5} />
                  {it.metric}
                </span>
              )}
              <footer>
                <div className="avatar">{it.init}</div>
                <div>
                  <div className="who">{it.who}</div>
                  <div className="role">{it.role}</div>
                </div>
              </footer>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- AI Pipeline (How AI understands callers) ---------- */
const AIPipeline = ({ t }) => (
  <section className="section alt-bg" id="pipeline">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.pipeline.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.pipeline.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.pipeline.sub}</p></Reveal>
      </div>
      <div className="pipeline">
        {t.pipeline.nodes.map((n, i) => (
          <div className="pipe-node" key={i}>
            <span className="pipe-connector"></span>
            <span className="step-label">{n.step}</span>
            <span className="glyph"><Icon name={n.icon} size={22} /></span>
            <h3>{n.t}</h3>
            <p>{n.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Security & Privacy ---------- */
const Security = ({ t }) => (
  <section className="section" id="security">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.security.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.security.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.security.sub}</p></Reveal>
      </div>
      <div className="sec-grid">
        {t.security.pillars.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="card card-glow sec-pillar">
              <div className="glyph"><Icon name={p.icon} size={20} /></div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className="tags">
                {p.tags && p.tags.map((tag, k) => (
                  <span className="tag-mini" key={k}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Integrations ---------- */
const Integrations = ({ t }) => (
  <section className="section alt-bg" id="integrations">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.integrations.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.integrations.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.integrations.sub}</p></Reveal>
      </div>
      <div className="integ-strip">
        {t.integrations.items.map((it, i) => (
          <Reveal key={i} delay={i * 30}>
            <div className="integ-tile">
              <div className="logo">{it.init}</div>
              <div className="name">{it.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Deployment comparison ---------- */
const Deployment = ({ t }) => (
  <section className="section" id="deployment">
    <div className="container">
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.deployment.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.deployment.title}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.deployment.sub}</p></Reveal>
      </div>
      <div className="deploy-wrap">
        {t.deployment.cards.map((c, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className={`card deploy-card ${c.variant === 'feat' ? 'feat' : ''}`}>
              {c.recTag && <span className="rec-tag">{c.recTag}</span>}
              <div className="head">
                <div className="glyph"><Icon name={c.icon} size={22} /></div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.sub}</p>
                </div>
              </div>
              <ul className="deploy-list">
                {c.pros && c.pros.map((p, k) => (
                  <li key={`p${k}`}>
                    <Icon name="check" size={14} stroke={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
                {c.cons && c.cons.map((p, k) => (
                  <li className="con" key={`c${k}`}>
                    <Icon name="close" size={14} stroke={2.5} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Conversation Preview (alias of hero card on its own section, with replay) ---------- */
const ConversationPreview = ({ t }) => (
  <section className="section" id="conversation">
    <div className="container" style={{ maxWidth: 760 }}>
      <div className="section-head center">
        <Reveal><span className="eyebrow">{t.hero.eyebrow}</span></Reveal>
        <Reveal delay={80}><h2>{t.hero.cta2}</h2></Reveal>
        <Reveal delay={140}><p className="lede">{t.hero.sub}</p></Reveal>
      </div>
      <Reveal delay={120}>
        <div className="live-call" style={{ maxWidth: 640, margin: '0 auto', transform: 'none' }}>
          <div className="lc-head">
            <span className="lc-incoming">
              <span className="pulse-dot"></span>
              {t.hero.call.incoming}
            </span>
            <span className="lc-num mono">{t.hero.call.num}</span>
            <span className="lc-timer mono">{t.hero.call.timer}</span>
          </div>
          <div className="lc-body">
            <div className="bubble caller" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
              <div className="who" dir="ltr">{t.hero.call.bubble1Who}</div>
              {t.hero.call.bubble1}
            </div>
            <div className="bubble ai" dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>
              <div className="who" dir="ltr">{t.hero.call.bubble2Who}</div>
              {t.hero.call.bubble2}
            </div>
            <div className="bubble caller typing">
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>{t.hero.call.bubble3Who}</span>
              <span className="dots"><span></span><span></span><span></span></span>
            </div>
          </div>
          <div className="lc-foot">
            <span className="waveform-lg" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} style={{
                  height: `${20 + Math.sin(i * 0.7) * 16 + Math.cos(i * 0.4) * 8}%`,
                  animationDelay: `${(i * 0.05) % 1.6}s`,
                }}></span>
              ))}
            </span>
            <span className="lang-chip">{t.hero.call.langChip}</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------- FAQ ---------- */
const FAQ = ({ t }) => {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head center">
          <Reveal><span className="eyebrow">{t.faq.eyebrow}</span></Reveal>
          <Reveal delay={80}><h2>{t.faq.title}</h2></Reveal>
          <Reveal delay={140}><p className="lede">{t.faq.sub}</p></Reveal>
        </div>
        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(o => o === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus"><Icon name="plus" size={14} stroke={2.5} /></span>
              </button>
              <div className="faq-a"><p style={{ margin: 0 }}>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Contact ---------- */
const Contact = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 700);
  };
  return (
    <section className="section" id="contact">
      <div className="container cta-wrap">
        <div className="cta-copy">
          <Reveal><span className="eyebrow">{t.contact.eyebrow}</span></Reveal>
          <Reveal delay={80}><h2>{t.contact.title}</h2></Reveal>
          <Reveal delay={140}><p className="lede">{t.contact.sub}</p></Reveal>
          <Reveal delay={200}>
            <div className="cta-channels">
              {t.contact.channels.map((c, i) => (
                <a key={i} className={`cta-channel ${c.kind}`} href={c.href || '#'} target={c.kind === 'whatsapp' ? '_blank' : undefined} rel={c.kind === 'whatsapp' ? 'noreferrer' : undefined}>
                  <span className="ico-tile">
                    <Icon name={c.kind === 'mail' ? 'mail' : c.kind === 'whatsapp' ? 'whatsapp' : 'phone'} size={18} />
                  </span>
                  <div>
                    <div className="what">{c.what}</div>
                    <div className="where">{c.where}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          {submitted ? (
            <div className="success-card">
              <div className="badge"><Icon name="check" size={26} stroke={2.5} /></div>
              <h3>{t.contact.form.successT}</h3>
              <p>{t.contact.form.successD}</p>
              <button className="btn btn-ghost btn-sm" onClick={() => setSubmitted(false)}>
                {t.contact.form.successCta}
              </button>
            </div>
          ) : (
            <form className="cta-form" onSubmit={onSubmit}>
              <div>
                <h3>{t.contact.form.title}</h3>
                <p className="lede" style={{ fontSize: 14, marginTop: 6 }}>{t.contact.form.sub}</p>
              </div>
              <div className="field">
                <label>{t.contact.form.name}</label>
                <input type="text" required />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>{t.contact.form.email}</label>
                  <input type="email" required />
                </div>
                <div className="field">
                  <label>{t.contact.form.phone}</label>
                  <input type="tel" />
                </div>
              </div>
              <div className="field">
                <label>{t.contact.form.industry}</label>
                <select defaultValue="">
                  <option value="" disabled>—</option>
                  {t.contact.form.industries.map((x, i) => <option key={i} value={x}>{x}</option>)}
                </select>
              </div>
              <div className="field">
                <label>{t.contact.form.message}</label>
                <textarea rows="3" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>
                {submitting ? t.contact.form.submitting : t.contact.form.submit}
                {!submitting && <Icon name="arrow-right" size={16} />}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */
const Footer = ({ t }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark"><Icon name="mic" size={16} stroke={2} /></span>
              <span className="brand-name">
                VoiceGate AI
                <small>by Future Smart Support</small>
              </span>
            </a>
            <p>{t.footer.tagline}</p>
            <div className="footer-social">
              <a href="#" className="icon-btn" aria-label="Twitter"><Icon name="twitter" size={16} /></a>
              <a href="#" className="icon-btn" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
              <a href="#" className="icon-btn" aria-label="Instagram"><Icon name="instagram" size={16} /></a>
              <a href="#" className="icon-btn" aria-label="WhatsApp"><Icon name="whatsapp" size={16} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t.footer.colProduct}</h4>
            <ul>{t.footer.product.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.colCompany}</h4>
            <ul>{t.footer.company.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.colLegal}</h4>
            <ul>{t.footer.legal.map((x, i) => <li key={i}><a href="#">{x}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.copyright.replace('{year}', year)}</span>
          <div className="partner">
            <span className="lbl">{t.footer.partnerLabel}</span>
            <img src="../../assets/riyada.png" alt="Riyada — Oman SME Authority" />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Export to global */
Object.assign(window, {
  Reveal, Header, Hero, LogoStrip, Features, How, Industries, WhyUs, Dashboard, Pricing,
  Testimonials, FAQ, Contact, Footer,
  AIPipeline, Security, Integrations, Deployment, ConversationPreview,
});
