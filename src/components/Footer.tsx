import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/cdb-consultancy-logo-white.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={logo}
                alt="CDB Consultants logo"
                className="h-11 w-auto"
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg font-bold tracking-wide">CDB CONSULTANTS</p>
                <p className="text-xs uppercase tracking-[0.2em] opacity-70">Engineering Excellence Delivered</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed opacity-80">
              An independent civil and multidisciplinary engineering consultancy delivering precise,
              buildable solutions for construction, energy, utilities and process industries.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Sectors</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li><Link to="/services/building-construction" className="transition-opacity hover:opacity-70">Building &amp; Construction</Link></li>
              <li><Link to="/services/oil-gas-energy" className="transition-opacity hover:opacity-70">Oil, Gas &amp; Energy</Link></li>
              <li><Link to="/services/power-utilities" className="transition-opacity hover:opacity-70">Power &amp; Utilities</Link></li>
              <li><Link to="/services/chemicals-petrochemicals" className="transition-opacity hover:opacity-70">Chemicals &amp; Petrochemicals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" />info@cdbconsultants.uk</li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>4 Ocean Way<br />Southampton, SO14 3JZ</span></li>
            </ul>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} CDB Consultants. All rights reserved.</p>
          <p>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
