import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Mail, MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Thanks — your enquiry has been noted. We will respond within one working day.');
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        highlight="your next project."
        description="Share the scope and constraints. Our engineers will respond with a clear approach, programme and fee basis — no obligation."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked with an asterisk are required.
              </p>
              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      First name *
                    </label>
                    <Input id="firstName" name="firstName" required placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Last name *
                    </label>
                    <Input id="lastName" name="lastName" required placeholder="Doe" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Company
                    </label>
                    <Input id="company" name="company" placeholder="Company name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Service interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building">Building &amp; Construction</SelectItem>
                      <SelectItem value="oil-gas">Oil, Gas &amp; Energy</SelectItem>
                      <SelectItem value="power">Power &amp; Utilities</SelectItem>
                      <SelectItem value="chemicals">Chemicals &amp; Petrochemicals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Project details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Scope, location, programme and any known constraints..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send message <ArrowUpRight size={17} />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-gradient-surface p-7 shadow-soft">
              <h2 className="font-display text-lg font-bold text-foreground">Get in touch</h2>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="inline-flex rounded-xl bg-card p-3 text-accent shadow-soft">
                    <Mail size={20} />
                  </span>
                  <div className="text-sm">
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@cdbconsultants.uk" className="block text-muted-foreground hover:text-accent">
                      info@cdbconsultants.uk
                    </a>
                    <a href="mailto:projects@cdbconsultants.uk" className="block text-muted-foreground hover:text-accent">
                      projects@cdbconsultants.uk
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex rounded-xl bg-card p-3 text-accent shadow-soft">
                    <Phone size={20} />
                  </span>
                  <div className="text-sm">
                    <h3 className="font-semibold text-foreground">Company number</h3>
                    <a href="tel:+447441392088" className="block text-muted-foreground hover:text-accent">
                      +44 7441 392088
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex rounded-xl bg-card p-3 text-accent shadow-soft">
                    <MapPin size={20} />
                  </span>
                  <div className="text-sm">
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      4 Ocean Way
                      <br />
                      Southampton, SO14 3JZ
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex rounded-xl bg-card p-3 text-accent shadow-soft">
                    <Clock size={20} />
                  </span>
                  <div className="text-sm">
                    <h3 className="font-semibold text-foreground">Response time</h3>
                    <p className="text-muted-foreground">Within one working day, Mon–Fri</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-7 text-primary-foreground shadow-elevated">
              <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
              <div className="relative">
                <h3 className="font-display text-lg font-bold">Ready to start your project?</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-85">
                  Our engineers are available for an initial consultation to review feasibility,
                  standards and risk before you commit to a design route.
                </p>
                <a
                  href="mailto:info@cdbconsultants.uk"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary"
                >
                  Schedule a consultation <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
