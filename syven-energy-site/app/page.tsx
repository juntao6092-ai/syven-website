export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* HERO */}
      {/* HERO */}
     <section
     id="home"
     className="relative min-h-screen w-full overflow-hidden pb-32"
>

        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">

          <img
            src="/hero-bg.png"
            alt="Industrial Background"
            className="h-full w-full object-cover opacity-40 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,120,0,0.12),transparent_45%)]" />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        {/* Orange Industrial Glow */}
        <div className="absolute bottom-[-200px] right-[-100px] h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[140px]" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-14 py-10 bg-gradient-to-b from-black/50 to-transparent">

          <div className="flex items-center gap-6">

  <img
  src="/logo.png"
  alt="SYVEN ENERGY"
  className="h-[120px] w-auto object-contain"
/>

  <div className="text-[28px] font-black tracking-[0.14em] leading-none">
    SYVEN ENERGY
  </div>

</div>

          <div className="flex items-center gap-10 text-sm uppercase tracking-[0.12em] text-white/70">

            <a href="#solutions" className="hover:text-orange-400 transition">
              Solutions
            </a>

            <a href="#projects" className="hover:text-orange-400 transition">
            Projects
            </a>

            <a href="#about" className="hover:text-orange-400 transition">
            About
            </a>

            <a href="#contact" className="hover:text-orange-400 transition">
             Contact
            </a>

            <button className="border border-white/20 px-3 py-1 text-xs hover:border-orange-400 transition">
              EN | FR
            </button>

          </div>

        </nav>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full items-center px-14">

          {/* LEFT TEXT */}
          <div className="max-w-3xl">

            <p className="mb-6 text-sm uppercase tracking-[0.5em] text-orange-400">
              Engineered For Performance
            </p>

            <h1 className="text-7xl font-black uppercase leading-[0.92] xl:text-[110px]">

              ENGINEERED
              <br />

              ENERGY SYSTEMS
              <br />

              <span className="text-orange-400">
                FOR INDUSTRIAL
              </span>

              <br />

              OPERATIONS

            </h1>

            <p className="mt-8 max-w-2xl text-xl text-white/60">
              Grid Infrastructure • Utility-Scale BESS • Mining Electrification
            </p>

            <div className="mt-10 flex gap-6">

              <a
              href="#solutions"
              className="border border-orange-400 bg-orange-500/10 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-orange-500"
              >
              Explore Solutions
             </a>

              <a
              href="#contact"
              className="border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:border-orange-400"
              >
              Contact
              </a>

            </div>

          </div>

        </div>

        {/* BESS Shadow */}

{/* BESS */}
<div className="absolute bottom-[-90px] right-[220px] z-10 opacity-72">

  <img
    src="/bess.png"
    alt="BESS"
    className="w-[1100px] brightness-60 contrast-90 blur-[0.4px]"
  />

</div>

{/* Truck Shadow */}
<div className="absolute bottom-[0px] right-[40px] h-[70px] w-[500px] bg-black/30 blur-3xl" />

{/* Truck */}
<div className="absolute bottom-[-60px] right-[-360px] z-20 opacity-95 float-truck">

  <img
    src="/truck.png"
    alt="Truck"
    className="w-[900px] brightness-50 saturate-75 contrast-125 scale-[1.02] drop-shadow-[0_0_25px_rgba(255,120,0,0.18)]"  
  />

</div>


      </section>


      {/* SOLUTIONS SECTION */}

      {/* SOLUTIONS SECTION */}
      <section
     id="solutions"
     className="relative bg-black px-14 py-24"
>

        <div className="mb-14">

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">
            Solutions
          </p>

          <h2 className="text-5xl font-black uppercase leading-tight">
            Infrastructure For
            <br />
            The Energy Transition
          </h2>

        </div>

        <div className="grid grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 transition duration-300 hover:border-orange-400 hover:bg-white/[0.04] hover:-translate-y-1">

            <div className="mb-10 text-sm uppercase tracking-[0.3em] text-orange-400">
              01
            </div>

            <h3 className="text-3xl font-black uppercase leading-tight">
              Utility-Scale
              <br />
              BESS
            </h3>

            <p className="mt-6 text-white/60 leading-relaxed">
              Large-scale battery energy storage systems for grid stabilization,
              renewable integration, and industrial resilience.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition hover:border-orange-400">

            <div className="mb-10 text-sm uppercase tracking-[0.3em] text-orange-400">
              02
            </div>

            <h3 className="text-3xl font-black uppercase leading-tight">
              Mining
              <br />
              Electrification
            </h3>

            <p className="mt-6 text-white/60 leading-relaxed">
              Integrated electrification solutions for heavy mining operations,
              mobile equipment, and remote energy systems.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition hover:border-orange-400">

            <div className="mb-10 text-sm uppercase tracking-[0.3em] text-orange-400">
              03
            </div>

            <h3 className="text-3xl font-black uppercase leading-tight">
              Grid
              <br />
              Infrastructure
            </h3>

            <p className="mt-6 text-white/60 leading-relaxed">
              Power infrastructure, interconnection systems, and industrial
              electrical integration for modern energy projects.
            </p>

          </div>

        </div>

      </section>
      {/* PROJECTS SECTION */}
      <section
        id="projects"
      className="relative bg-[#050505] px-14 py-24">

  <div className="mb-16">

    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">
      Projects
    </p>

    <h2 className="text-5xl font-black uppercase leading-tight">
      Industrial Energy
      <br />
      Applications
    </h2>

  </div>

  <div className="grid grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="group overflow-hidden border border-white/10 bg-white/[0.03]">

      <img
        src="/project1.jpg"
        alt="Project"
        className="h-[260px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
      />

      <div className="p-8">

        <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
          Quebec
        </div>

        <h3 className="text-2xl font-black uppercase">
          Utility-Scale
          <br />
          BESS Integration
        </h3>

      </div>

    </div>

    {/* Project 2 */}
    <div className="group overflow-hidden border border-white/10 bg-white/[0.03]">

      <img
        src="/project2.jpg"
        alt="Project"
        className="h-[260px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
      />

      <div className="p-8">

        <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
          Mining
        </div>

        <h3 className="text-2xl font-black uppercase">
          Heavy Vehicle
          <br />
          Electrification
        </h3>

      </div>

    </div>

    {/* Project 3 */}
    <div className="group overflow-hidden border border-white/10 bg-white/[0.03]">

      <img
        src="/project3.jpg"
        alt="Project"
        className="h-[260px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
      />

      <div className="p-8">

        <div className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
          Infrastructure
        </div>

        <h3 className="text-2xl font-black uppercase">
          HV Grid
          <br />
          Infrastructure
        </h3>

      </div>

    </div>

  </div>

</section>
{/* ABOUT SECTION */}
<section
  id="about"
  className="relative border-t border-white/10 bg-black px-14 py-32"
>

  <div className="grid grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <div>

      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">
        About
      </p>

      <h2 className="text-5xl font-black uppercase leading-tight">
        Industrial Energy
        <br />
        Infrastructure
      </h2>

      <p className="mt-10 text-lg leading-relaxed text-white/60">
        SYVEN ENERGY develops industrial-scale energy infrastructure
        focused on utility-scale battery storage, mining electrification,
        and grid integration systems.
      </p>

      <p className="mt-6 text-lg leading-relaxed text-white/60">
        We work with global manufacturers, EPC partners, and industrial
        operators to deploy modern energy systems across North America.
      </p>

    </div>

    {/* RIGHT */}
    <div className="relative overflow-hidden border border-white/10">

      <img
        src="/about-future.png"
        alt="Industrial Infrastructure"
        className="h-[600px] w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    </div>

  </div>

</section>
{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative border-t border-white/10 bg-[#050505] px-14 py-32"
>

  <div className="max-w-5xl">

    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-400">
      Contact
    </p>

    <h2 className="text-5xl font-black uppercase leading-tight">
      Let’s Build
      <br />
      Energy Infrastructure
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
      Contact SYVEN ENERGY for utility-scale battery storage,
      mining electrification, and industrial power infrastructure projects.
    </p>

    <div className="mt-16 grid grid-cols-3 gap-10">

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">
          Email
        </p>

        <p className="text-xl text-white/80">
          info@syvenenergy.com
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">
          Location
        </p>

        <p className="text-xl text-white/80">
          Montreal, Canada
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">
          Focus
        </p>

        <p className="text-xl text-white/80">
          BESS • Mining • Grid
        </p>
      </div>

    </div>

  </div>

</section>

    </main>
  );
}