type Language = "fr" | "en";

const content = {
  fr: {
    nav: { solutions: "Solutions", projects: "Projets", about: "À propos", contact: "Contact" },
    hero: {
      eyebrow: "Conçu pour la performance",
      title1: "SYSTÈMES",
      title2: "ÉNERGÉTIQUES",
      title3: "INDUSTRIELS",
      title4: "POUR LES OPÉRATIONS",
      sub: "Infrastructure électrique • BESS à grande échelle • Électrification minière",
      explore: "Découvrir nos solutions",
      contact: "Contact",
    },
    solutions: {
      eyebrow: "Solutions",
      title1: "Infrastructure pour",
      title2: "la transition énergétique",
      cards: [
        { n: "01", title1: "BESS à", title2: "grande échelle", text: "Systèmes de stockage d’énergie par batterie à grande échelle pour la stabilisation du réseau, l’intégration des énergies renouvelables et la résilience industrielle." },
        { n: "02", title1: "Électrification", title2: "minière", text: "Solutions intégrées d’électrification pour les opérations minières lourdes, les équipements mobiles et les systèmes énergétiques en régions éloignées." },
        { n: "03", title1: "Infrastructure", title2: "du réseau", text: "Infrastructure électrique, systèmes d’interconnexion et intégration électrique industrielle pour les projets énergétiques modernes." },
      ],
    },
    projects: {
      eyebrow: "Projets",
      title1: "Applications",
      title2: "énergétiques industrielles",
      cards: [
        { location: "Québec", title1: "Intégration de", title2: "BESS à grande échelle", alt: "Projet d’intégration de BESS" },
        { location: "Mines", title1: "Électrification des", title2: "véhicules lourds", alt: "Électrification minière" },
        { location: "Infrastructure", title1: "Infrastructure", title2: "du réseau HT", alt: "Infrastructure électrique haute tension" },
      ],
    },
    about: {
      eyebrow: "À propos",
      title1: "Infrastructure",
      title2: "énergétique industrielle",
      p1: "SYVEN ENERGY développe des infrastructures énergétiques à l’échelle industrielle axées sur le stockage d’énergie par batterie à grande échelle, l’électrification minière et les systèmes d’intégration au réseau.",
      p2: "Nous travaillons avec des fabricants internationaux, des partenaires EPC et des exploitants industriels afin de déployer des systèmes énergétiques modernes partout en Amérique du Nord.",
      alt: "Infrastructure industrielle",
    },
    contact: {
      eyebrow: "Contact",
      title1: "Construisons",
      title2: "l’infrastructure énergétique",
      text: "Communiquez avec SYVEN ENERGY pour vos projets de stockage d’énergie par batterie, d’électrification minière et d’infrastructure électrique industrielle.",
      email: "Courriel",
      location: "Emplacement",
      focus: "Secteurs",
      address: "Montréal, Canada",
      focusText: "BESS • Mines • Réseau",
    },
  },
  en: {
    nav: { solutions: "Solutions", projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Engineered For Performance",
      title1: "ENGINEERED",
      title2: "ENERGY SYSTEMS",
      title3: "FOR INDUSTRIAL",
      title4: "OPERATIONS",
      sub: "Grid Infrastructure • Utility-Scale BESS • Mining Electrification",
      explore: "Explore Solutions",
      contact: "Contact",
    },
    solutions: {
      eyebrow: "Solutions",
      title1: "Infrastructure For",
      title2: "The Energy Transition",
      cards: [
        { n: "01", title1: "Utility-Scale", title2: "BESS", text: "Large-scale battery energy storage systems for grid stabilization, renewable integration, and industrial resilience." },
        { n: "02", title1: "Mining", title2: "Electrification", text: "Integrated electrification solutions for heavy mining operations, mobile equipment, and remote energy systems." },
        { n: "03", title1: "Grid", title2: "Infrastructure", text: "Power infrastructure, interconnection systems, and industrial electrical integration for modern energy projects." },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title1: "Industrial Energy",
      title2: "Applications",
      cards: [
        { location: "Quebec", title1: "Utility-Scale", title2: "BESS Integration", alt: "BESS integration project" },
        { location: "Mining", title1: "Heavy Vehicle", title2: "Electrification", alt: "Mining electrification project" },
        { location: "Infrastructure", title1: "HV Grid", title2: "Infrastructure", alt: "High-voltage grid infrastructure" },
      ],
    },
    about: {
      eyebrow: "About",
      title1: "Industrial Energy",
      title2: "Infrastructure",
      p1: "SYVEN ENERGY develops industrial-scale energy infrastructure focused on utility-scale battery storage, mining electrification, and grid integration systems.",
      p2: "We work with global manufacturers, EPC partners, and industrial operators to deploy modern energy systems across North America.",
      alt: "Industrial Infrastructure",
    },
    contact: {
      eyebrow: "Contact",
      title1: "Let’s Build",
      title2: "Energy Infrastructure",
      text: "Contact SYVEN ENERGY for utility-scale battery storage, mining electrification, and industrial power infrastructure projects.",
      email: "Email",
      location: "Location",
      focus: "Focus",
      address: "Montreal, Canada",
      focusText: "BESS • Mining • Grid",
    },
  },
} as const;

export default function Home({ lang }: { lang: Language }) {
  const t = content[lang];
  const otherLang = lang === "fr" ? "en" : "";
  const switchLabel = lang === "fr" ? "EN" : "FR";

  return (
    <main className="bg-black text-white scroll-smooth">
      <section id="home" className="relative min-h-screen w-full overflow-hidden pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/hero-bg.png" alt="Industrial Background" className="h-full w-full object-cover opacity-40 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,120,0,0.12),transparent_45%)]" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="absolute bottom-[-200px] right-[-100px] h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[140px]" />

        <nav className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-6 py-6 md:px-14 md:py-6 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center gap-3 md:gap-5">
            <img src="/logo.png" alt="SYVEN ENERGY" className="h-[48px] md:h-[80px] w-auto object-contain" />
            <div className="text-[16px] md:text-[24px] font-black tracking-[0.14em] leading-none">SYVEN ENERGY</div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.12em] text-white/70">
            <a href="#solutions" className="hover:text-orange-400 transition">{t.nav.solutions}</a>
            <a href="#projects" className="hover:text-orange-400 transition">{t.nav.projects}</a>
            <a href="#about" className="hover:text-orange-400 transition">{t.nav.about}</a>
            <a href="#contact" className="hover:text-orange-400 transition">{t.nav.contact}</a>
            <a href={`/${otherLang}`} className="border border-white/20 px-3 py-1 text-xs hover:border-orange-400 transition">{switchLabel}</a>
          </div>
          <a href={`/${otherLang}`} className="md:hidden border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-white/80 hover:border-orange-400 transition">{switchLabel}</a>
        </nav>

        <div className="relative z-20 flex h-full items-center pt-24 px-6 md:px-14">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.5em] text-orange-400">{t.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-7xl font-black uppercase leading-[0.92] xl:text-[110px]">
              {t.hero.title1}<br />{t.hero.title2}<br /><span className="text-orange-400">{t.hero.title3}</span><br />{t.hero.title4}
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-white/60">{t.hero.sub}</p>
            <div className="mt-10 flex gap-6">
              <a href="#solutions" className="border border-orange-400 bg-orange-500/10 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-orange-500">{t.hero.explore}</a>
              <a href="#contact" className="border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:border-orange-400">{t.hero.contact}</a>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-[-90px] right-[220px] z-10 opacity-72">
          <img src="/bess.png" alt="BESS" className="w-[1100px] brightness-60 contrast-90 blur-[0.4px]" />
        </div>
        <div className="absolute bottom-[0px] right-[40px] h-[70px] w-[500px] bg-black/30 blur-3xl" />
        <div className="hidden md:block absolute bottom-[-60px] right-[-360px] z-20 opacity-95 float-truck">
          <img src="/truck.png" alt="Truck" className="w-[900px] brightness-50 saturate-75 contrast-125 scale-[1.02] drop-shadow-[0_0_25px_rgba(255,120,0,0.18)]" />
        </div>
      </section>

      <section id="solutions" className="relative bg-black px-6 md:px-14 py-24">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">{t.solutions.eyebrow}</p>
          <h2 className="text-5xl font-black uppercase leading-tight">{t.solutions.title1}<br />{t.solutions.title2}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.solutions.cards.map((card, i) => (
            <div key={card.n} className={`group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition ${i === 0 ? "hover:border-orange-400 hover:bg-white/[0.04] hover:-translate-y-1" : "hover:border-orange-400"}`}>
              <div className="mb-10 text-sm uppercase tracking-[0.3em] text-orange-400">{card.n}</div>
              <h3 className="text-3xl font-black uppercase leading-tight">{card.title1}<br />{card.title2}</h3>
              <p className="mt-6 text-white/60 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative bg-[#050505] px-6 md:px-14 py-24">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">{t.projects.eyebrow}</p>
          <h2 className="text-5xl font-black uppercase leading-tight">{t.projects.title1}<br />{t.projects.title2}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.projects.cards.map((card, i) => (
            <div key={card.location} className="group overflow-hidden border border-white/10 bg-white/[0.03]">
              <img src={`/project${i + 1}.jpg`} alt={card.alt} className="h-[260px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
              <div className="p-8">
                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">{card.location}</div>
                <h3 className="text-2xl font-black uppercase">{card.title1}<br />{card.title2}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 bg-black px-6 md:px-14 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">{t.about.eyebrow}</p>
            <h2 className="text-5xl font-black uppercase leading-tight">{t.about.title1}<br />{t.about.title2}</h2>
            <p className="mt-10 text-lg leading-relaxed text-white/60">{t.about.p1}</p>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{t.about.p2}</p>
          </div>
          <div className="relative overflow-hidden border border-white/10">
            <img src="/about-future.png" alt={t.about.alt} className="h-[600px] w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/10 bg-[#050505] px-6 md:px-14 py-32">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">{t.contact.eyebrow}</p>
          <h2 className="text-5xl font-black uppercase leading-tight">{t.contact.title1}<br />{t.contact.title2}</h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60">{t.contact.text}</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">{t.contact.email}</p><p className="text-xl text-white/80">info@syvenenergy.com</p></div>
            <div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">{t.contact.location}</p><p className="text-xl text-white/80">{t.contact.address}</p></div>
            <div><p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">{t.contact.focus}</p><p className="text-xl text-white/80">{t.contact.focusText}</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
