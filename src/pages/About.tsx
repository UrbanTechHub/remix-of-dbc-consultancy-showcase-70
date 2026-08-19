import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Globe2, Award, Users, Target, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ceoPortrait from '@/assets/ceo-portrait.jpg';

const pillars = [
  { icon: <Globe2 size={20} />, title: 'Global reach', text: 'Projects delivered across the UK, EMEA and West Africa.' },
  { icon: <Award size={20} />, title: 'Assured quality', text: 'Independent design checks on every deliverable.' },
  { icon: <Users size={20} />, title: 'Expert team', text: 'Chartered engineers embedded in client teams.' },
  { icon: <Target size={20} />, title: 'Precision focus', text: 'Documentation that is buildable, not theoretical.' },
];

const leadership = [
  {
    name: 'Charles David Bradley',
    role: 'Chief Executive Officer',
    image: ceoPortrait,
    bio: 'David brings over 25 years of engineering leadership, setting strategic direction and safeguarding technical standards across every sector we serve.',
    credentials: ['M.Sc. Civil Engineering', 'Professional Engineer (PE)', '25+ years experience'],
    linkedin:
      'https://www.linkedin.com/in/charles-david-bradley-9b331323a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'Henry Anderson',
    role: 'Director of Operations',
    image: '/lovable-uploads/0e54afd2-4b20-4e48-9e13-ac523830e90d.png',
    bio: 'Henry owns project execution and quality assurance across disciplines, keeping delivery on programme and on budget without compromising rigour.',
    credentials: ['M.Sc. Project Management', 'PMP Certified', '18+ years experience'],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="About CDB Consultants"
        title="An independent practice"
        highlight="built on engineering rigour."
        description="We are a civil and multidisciplinary engineering consultancy solving complex infrastructure problems with clear thinking, disciplined process and buildable design."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Our company</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Multidisciplinary by design, accountable by default
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                CDB Consultants delivers comprehensive civil engineering across construction, energy,
                utilities and process industries. Decades of combined expertise let us take on
                commissions that demand both innovative thinking and technical precision.
              </p>
              <p>
                Every project benefits from our combined structural, environmental and process
                engineering knowledge, coordinated through a single accountable design lead rather
                than handed between disconnected teams.
              </p>
              <p>
                We are committed to sustainability, safety and delivering work that meets the highest
                industry standards while contributing to lasting economic and environmental value.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="mb-3 inline-flex rounded-lg bg-secondary p-2.5 text-accent">{p.icon}</div>
                  <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-gradient-surface p-8 shadow-soft">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Mission</span>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              To provide world-class civil engineering solutions that drive innovation, ensure safety
              and create sustainable value for our clients and the communities they serve.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-accent p-8 text-accent-foreground shadow-soft">
            <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
            <div className="relative">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-80">Vision</span>
              <p className="mt-4 text-base leading-relaxed opacity-95">
                To be the engineering consultancy clients trust with their most complex
                infrastructure — recognised for technical depth, clarity of delivery and a genuine
                commitment to a more sustainable built environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Leadership</span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">The people accountable for your project</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((l) => (
              <article key={l.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-5">
                  <img
                    src={l.image}
                    alt={`${l.name}, ${l.role} at CDB Consultants`}
                    className="h-20 w-20 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{l.name}</h3>
                    <p className="text-sm font-medium text-accent">{l.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{l.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {l.credentials.map((c) => (
                    <li
                      key={c}
                      className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-secondary-foreground"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                {l.linkedin && (
                  <a
                    href={l.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                  >
                    <Linkedin size={16} /> Connect on LinkedIn
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Work with a team that owns the detail</h2>
            <p className="mt-4 opacity-85">
              Tell us about your project and we will set out a clear engineering approach, programme and fee basis.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
