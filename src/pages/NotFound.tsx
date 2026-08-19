import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero px-4 text-primary-foreground">
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="relative text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] opacity-70">Error 404</p>
        <h1 className="mt-5 font-display text-6xl font-bold sm:text-8xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-md text-base opacity-80">
          This route is off the drawings. Let's get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary"
          >
            Return home <ArrowUpRight size={17} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            View services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
