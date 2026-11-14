import { collectionGrid } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function CollectionGrid() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <SectionHeading eyebrow="The Collection" title="Six Studies in Light" />

      <div className="mt-20 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
        {collectionGrid.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 3) * 120}
            className={i % 3 === 1 ? 'lg:mt-16' : ''}
          >
            <figure className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-beige-200">
              <img
                src={item.image}
                alt={`Collection piece ${item.id}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-charcoal-900/0 transition-colors duration-700 group-hover:bg-charcoal-900/15"
              />
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-3 opacity-0 transition-all duration-700 group-hover:opacity-100">
                <span className="block h-px w-8 bg-ivory-100" />
                <span className="text-[10px] uppercase tracking-widest2 text-ivory-100">
                  No. {item.id}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
