import { collections } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';

export default function FeaturedCollections() {
  return (
    <section className="bg-charcoal-900 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading eyebrow="Chapters" title="Featured Collections" />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {collections.map((collection, i) => (
            <Reveal key={collection.id} delay={i * 150}>
              <a href="#collections" className="group relative block aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.name} collection`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="text-[10px] uppercase tracking-widest2 text-champagne-300">
                    Chapter {['I', 'II', 'III'][i]}
                  </span>
                  <h3 className="mt-2 font-display text-4xl text-ivory-100">
                    {collection.name}
                  </h3>
                  <p className="mt-2 max-w-[26ch] text-sm font-light leading-relaxed text-ivory-100/70">
                    {collection.tagline}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-0 bg-champagne-300 transition-all duration-700 group-hover:w-16"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <GoldButton variant="light" href="#collections">
            Explore All Collections
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
