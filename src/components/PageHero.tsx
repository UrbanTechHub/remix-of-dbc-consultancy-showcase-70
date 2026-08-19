import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  backTo?: { to: string; label: string };
  children?: React.ReactNode;
}

const PageHero = ({ eyebrow, title, highlight, description, backTo, children }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
    <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {backTo && (
        <Link
          to={backTo.to}
          className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100"
        >
          <ArrowLeft size={14} /> {backTo.label}
        </Link>
      )}
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em]">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-3xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
          {highlight && <span className="block text-primary-foreground/70">{highlight}</span>}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">{description}</p>
        {children}
      </div>
    </div>
  </section>
);

export default PageHero;
