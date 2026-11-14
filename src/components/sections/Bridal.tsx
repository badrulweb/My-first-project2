import { siteImages } from '@/data/site';
import Reveal from '@/components/ui/Reveal';

export default function Bridal() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0">
        <img
          src={siteImages.bridal}
          alt="A bride fastening her earrings before a mirror"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-xl lg:ml-auto lg:text-right">
          <Reveal className="flex flex-col items-start gap-4 lg:items-end">
            <span className="text-[11px] uppercase tracking-widest2 text-champagne-200">
              Bridal & Special Occasions
            </span>
            <h2 className="font-display text-4xl leading-[1.1] text-ivory-100 md:text-5xl lg:text-6xl">
              For the Day Everything
              <span className="block italic text-champagne-200">Begins</span>
            </h2>
            <span className="block h-px w-16 bg-champagne-300" aria-hidden="true" />
            <p className="mt-2 max-w-md text-base font-light leading-relaxed text-ivory-100/85 lg:ml-auto">
              From the first fitting to the final walk down the aisle, our
              private bridal salon helps you compose the pieces your day —
              and every day after — deserves.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="#contact"
                className="group/btn inline-flex items-center justify-center gap-3 border border-ivory-100/50 px-10 py-4 text-[11px] uppercase tracking-widest2 text-ivory-100 transition-all duration-500 hover:bg-ivory-100 hover:text-charcoal-900"
              >
                Book a Private Appointment
                <span
                  aria-hidden="true"
                  className="block h-px w-6 bg-current transition-all duration-500 group-hover/btn:w-10"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
