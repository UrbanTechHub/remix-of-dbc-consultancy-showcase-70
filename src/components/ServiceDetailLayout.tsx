import Navigation from './Navigation';
import Footer from './Footer';
import PageHero from './PageHero';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

export interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  overview: string[];
  keyServices: string[];
  groups: { title: string; items: string[] }[];
  ctaTitle: string;
  ctaText: string;
  stats?: { value: string; label: string }[];
}

const ServiceDetailLayout = ({
  eyebrow,
  title,
  highlight,
  intro,
  overview,
  keyServices,
  groups,
  ctaTitle,
  ctaText,
  stats,
}: ServiceDetailProps) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <PageHero
      eyebrow={eyebrow}
      title={title}
      highlight={highlight}
      description={intro}
      backTo={{ to: '/services', label: 'All services' }}
    />

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Our expertise
          </span>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            {overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {stats && (
            <dl className="mt-10 grid grid-cols-3 gap-5 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-gradient-surface p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-foreground">Key services</h2>
            <ul className="mt-5 space-y-3">
              {keyServices.map((k) => (
                <li key={k} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check size={13} />
                  </span>
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{g.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {g.items.map((it) => (
                <li key={it} className="border-l border-border pl-3">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-14 text-center text-primary-foreground sm:px-12">
        <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{ctaTitle}</h2>
          <p className="mt-4 text-base opacity-85">{ctaText}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Discuss this sector <ArrowUpRight size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Other services
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServiceDetailLayout;
