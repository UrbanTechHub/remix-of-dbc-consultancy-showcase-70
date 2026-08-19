import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import {
  Building2,
  Fuel,
  Zap,
  Beaker,
  ArrowUpRight,
  ShieldCheck,
  Ruler,
  Globe2,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Building & Construction',
    description:
      'Structural and civil design for residential, commercial and industrial developments, from concept to construction support.',
    icon: <Building2 size={26} />,
    link: '/services/building-construction',
    index: '01',
  },
  {
    title: 'Oil, Gas & Energy',
    description:
      'Upstream, midstream and downstream engineering, including facility design, integrity and renewable energy integration.',
    icon: <Fuel size={26} />,
    link: '/services/oil-gas-energy',
    index: '02',
  },
  {
    title: 'Power & Utilities',
    description:
      'Generation, transmission, distribution and utility infrastructure engineering delivered to grid-code standards.',
    icon: <Zap size={26} />,
    link: '/services/power-utilities',
    index: '03',
  },
  {
    title: 'Chemicals & Petrochemicals',
    description:
      'Process and plant engineering for chemical, petrochemical and specialty production facilities.',
    icon: <Beaker size={26} />,
    link: '/services/chemicals-petrochemicals',
    index: '04',
  },
];

const stats = [
  { value: '25+', label: 'Years of combined practice' },
  { value: '4', label: 'Core engineering sectors' },
  { value: '100%', label: 'Chartered-led delivery' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="animate-fade-up lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em]">
                London based · Delivering globally
              </span>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Engineering clarity for
                <span className="block text-primary-foreground/70">complex infrastructure.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed opacity-85 sm:text-lg">
                CDB Consultants provides civil, structural and multidisciplinary engineering
                consultancy across construction, energy, utilities and process industries — precise
                documentation, buildable design, dependable delivery.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  Explore our services <ArrowUpRight size={17} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  Speak to an engineer
                </Link>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-bold sm:text-3xl">{s.value}</dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] opacity-70">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-primary-foreground/5" aria-hidden="true" />
                <img
                  src="/lovable-uploads/803c0534-f6e5-49a5-8c5f-f75147bd6253.png"
                  alt="Engineers reviewing construction drawings on a project site"
                  className="relative rounded-2xl shadow-elevated"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Capabilities</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Four disciplines, one delivery standard
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every commission is led by chartered engineers and supported by rigorous design review,
            so the drawings you receive are the drawings that get built.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          {/* Feature tile */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-accent p-8 text-accent-foreground shadow-soft md:col-span-3 lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <Ruler size={30} />
                <h3 className="mt-6 text-2xl font-bold sm:text-3xl">Design assurance built into every stage</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed opacity-90">
                  Concept studies, detailed design, technical due diligence and site support —
                  coordinated in one accountable workflow with transparent reporting.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4"
              >
                How we work <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          <div className="rounded-2xl border border-border bg-gradient-surface p-6 shadow-soft md:col-span-3 lg:col-span-2">
            <div className="flex flex-wrap gap-6">
              {[
                { icon: <ShieldCheck size={20} />, title: 'Safety-first standards', text: 'CDM-aligned processes and independent design checks.' },
                { icon: <Globe2 size={20} />, title: 'International reach', text: 'Projects delivered across UK, EMEA and West Africa.' },
                { icon: <Users size={20} />, title: 'Collaborative teams', text: 'Embedded with client, contractor and stakeholder teams.' },
              ].map((f) => (
                <div key={f.title} className="min-w-[180px] flex-1">
                  <div className="mb-3 inline-flex rounded-lg bg-card p-2.5 text-accent shadow-soft">{f.icon}</div>
                  <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:col-span-3 lg:col-span-2">
            <img
              src="/lovable-uploads/cba7d778-46b8-4f2a-ad19-1a8bff264bec.png"
              alt="Engineering professionals collaborating on a construction project"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-16 text-center text-primary-foreground sm:px-12">
          <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Have a project on the table?</h2>
            <p className="mt-4 text-base opacity-85">
              Share the scope and constraints. We will come back with a clear engineering approach,
              programme and fee basis — no obligation.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Get a consultation <ArrowUpRight size={17} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
