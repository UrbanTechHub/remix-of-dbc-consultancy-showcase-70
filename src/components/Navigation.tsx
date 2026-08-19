import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '@/assets/cdb-consultancy-logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const sectors = [
  { to: '/services/building-construction', label: 'Building & Construction' },
  { to: '/services/oil-gas-energy', label: 'Oil, Gas & Energy' },
  { to: '/services/power-utilities', label: 'Power & Utilities' },
  { to: '/services/chemicals-petrochemicals', label: 'Chemicals & Petrochemicals' },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => location.pathname === to;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="CDB Consultants home">
            <img
              src={logo}
              alt="CDB Consultants logo"
              className="h-10 w-auto"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold tracking-[0.08em] text-primary sm:text-lg md:text-xl">
                CDB CONSULTANTS
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
                Engineering Excellence Delivered
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(l.to)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-primary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Request a consultation <ArrowUpRight size={15} />
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col overflow-y-auto bg-gradient-hero text-primary-foreground transition-transform duration-300 ease-out ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
          <div className="relative px-5 pb-8 pt-24">
            <p className="text-[10px] uppercase tracking-[0.28em] opacity-60">Menu</p>
            <nav className="mt-4 divide-y divide-primary-foreground/10 border-y border-primary-foreground/10">
              {links.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                  className={`flex items-center justify-between py-4 font-display text-2xl font-bold transition-all duration-300 ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  } ${isActive(l.to) ? 'opacity-100' : ''}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[11px] font-medium tracking-[0.2em] opacity-50">
                      0{i + 1}
                    </span>
                    {l.label}
                  </span>
                  <ArrowUpRight size={20} className="opacity-60" />
                </Link>
              ))}
            </nav>

            <p className="mt-8 text-[10px] uppercase tracking-[0.28em] opacity-60">Sectors</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {sectors.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-3 text-xs font-medium leading-snug transition-colors hover:bg-primary-foreground/10"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-5 py-3.5 text-sm font-semibold text-primary"
            >
              Request a consultation <ArrowUpRight size={16} />
            </Link>

            <div className="mt-6 space-y-2 text-xs opacity-75">
              <p className="flex items-center gap-2">
                <Mail size={14} /> info@cdbconsultants.uk
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} /> 4 Ocean Way, Southampton SO14 3JZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
