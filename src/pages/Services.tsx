import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { Building2, Fuel, Zap, Beaker, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Building & Construction',
    description:
      'Structural and civil design for residential, commercial and industrial developments — concept through construction support.',
    icon: <Building2 size={26} />,
    link: '/services/building-construction',
    index: '01',
  },
  {
    title: 'Oil, Gas & Energy',
    description:
      'Upstream, midstream and downstream engineering, from platform structures to pipelines and renewable integration.',
    icon: <Fuel size={26} />,
    link: '/services/oil-gas-energy',
    index: '02',
  },
  {
    title: 'Power & Utilities',
    description:
      'Generation, transmission, distribution and smart-grid infrastructure delivered to grid-code standards.',
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

const proof = [
  { value: '25+', label: 'Years of experience' },
  { value: '500+', label: 'Projects completed' },
  { value: '100%', label: 'Chartered-led delivery' },
];

const process = [
  { step: '01', title: 'Brief & feasibility', text: 'Constraints, standards and risk mapped before a line is drawn.' },
  { step: '02', title: 'Concept & options', text: 'Comparative options with cost, programme and buildability tested.' },
  { step: '03', title: 'Detailed design', text: 'Coordinated calculations, models and drawings, independently checked.' },
  { step: '04', title: 'Delivery support', text: 'Site queries, inspections and as-built documentation to close out.' },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Capabilities"
        title="Engineering services"
        highlight="across four sectors."
        description="CDB Consultants delivers multidisciplinary civil, structural and process engineering — one accountable team, one delivery standard, whatever the sector."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-gradient-surface p-8 shadow-soft sm:p-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">How we work</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              A transparent four-stage delivery model
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="border-t border-border pt-5">
                <span className="font-display text-xs tracking-[0.2em] text-accent">{p.step}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-16 grid gap-5 sm:grid-cols-3">
          {proof.map((p) => (
            <div key={p.label} className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
              <dt className="font-display text-3xl font-bold text-foreground">{p.value}</dt>
              <dd className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{p.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-accent px-6 py-14 text-center text-accent-foreground sm:px-12">
          <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Not sure which discipline you need?</h2>
            <p className="mt-4 opacity-90">
              Send us the scope. We will tell you exactly which engineering inputs your project requires.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Talk to an engineer <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
