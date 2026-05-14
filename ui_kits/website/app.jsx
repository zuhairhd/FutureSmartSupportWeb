/* VoiceGate AI — main app. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brand": "cyan",
  "theme": "dark",
  "lang": "en"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Lang + theme bootstrapped from localStorage in <head>; keep them in sync
  // with the Tweaks panel when changed.
  const initLang  = (typeof localStorage !== 'undefined' && localStorage.getItem('vg-lang'))  || tweaks.lang  || 'en';
  const initTheme = (typeof localStorage !== 'undefined' && localStorage.getItem('vg-theme')) || tweaks.theme || 'dark';
  const [lang,  setLang]  = React.useState(initLang);
  const [theme, setTheme] = React.useState(initTheme);

  // Apply lang/theme/brand to <html>
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try { localStorage.setItem('vg-lang', lang); } catch (_) {}
  }, [lang]);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('vg-theme', theme); } catch (_) {}
  }, [theme]);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-brand', tweaks.brand || 'cyan');
  }, [tweaks.brand]);

  // Tweaks panel changes overwrite local state (one-way sync)
  React.useEffect(() => { if (tweaks.lang  && tweaks.lang  !== lang)  setLang(tweaks.lang); }, [tweaks.lang]);
  React.useEffect(() => { if (tweaks.theme && tweaks.theme !== theme) setTheme(tweaks.theme); }, [tweaks.theme]);

  const t = I18N[lang] || I18N.en;

  const onLangToggle = () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    setLang(next);
    setTweak('lang', next);
  };
  const onThemeToggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setTweak('theme', next);
  };

  return (
    <React.Fragment>
      <div className="bg-field"></div>
      <div className="bg-grid"></div>

      <div className="page">
        <Header
          t={t}
          lang={lang}
          onLangToggle={onLangToggle}
          theme={theme}
          onThemeToggle={onThemeToggle}
        />
        <Hero t={t} />
        <LogoStrip t={t} />
        <Features t={t} />
        <ConversationPreview t={t} />
        <AIPipeline t={t} />
        <How t={t} />
        <Industries t={t} />
        <WhyUs t={t} />
        <Dashboard t={t} />
        <Deployment t={t} />
        <Integrations t={t} />
        <Security t={t} />
        <Pricing t={t} />
        <Testimonials t={t} />
        <FAQ t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>

      {/* Mobile sticky CTA */}
      <div className="mobile-sticky-cta">
        <a href="#contact" className="btn btn-primary">
          {t.hero.cta1}
          <Icon name="arrow-right" size={16} />
        </a>
      </div>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/96892771730" className="wa-float" target="_blank" rel="noreferrer" aria-label={t.wa}>
        <span className="ico"><Icon name="whatsapp" size={16} /></span>
        {t.wa}
      </a>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand">
          <TweakRadio
            label="Palette"
            value={tweaks.brand}
            onChange={(v) => setTweak('brand', v)}
            options={[
              { value: 'cyan',   label: 'Cyan / Blue' },
              { value: 'copper', label: 'Copper' },
            ]}
          />
        </TweakSection>
        <TweakSection label="Appearance">
          <TweakRadio
            label="Theme"
            value={tweaks.theme}
            onChange={(v) => { setTheme(v); setTweak('theme', v); }}
            options={[
              { value: 'dark',  label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
          <TweakRadio
            label="Language"
            value={tweaks.lang}
            onChange={(v) => { setLang(v); setTweak('lang', v); }}
            options={[
              { value: 'en', label: 'English' },
              { value: 'ar', label: 'العربية' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
