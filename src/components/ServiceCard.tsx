import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index?: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, index, className = '' }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div>
        <div className="mb-6 flex items-start justify-between">
          <div className="rounded-xl bg-secondary p-3 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
            {icon}
          </div>
          {index && <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">{index}</span>}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Explore capability
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
};

export default ServiceCard;
