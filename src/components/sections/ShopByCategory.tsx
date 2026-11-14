import { categories } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ShopByCategory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <SectionHeading eyebrow="The Atelier" title="Shop by Category" align="left" />

      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        {categories.map((category, i) => (
          <Reveal key={category.id} delay={i * 120} className={i % 2 === 1 ? 'mt-10 lg:mt-20' : ''}>
            <a href="#shop" className="group relative block aspect-[4/5] overflow-hidden bg-beige-200">
              <img
                src={category.image}
                alt={`${category.name} jewelry`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-ivory-100 md:text-3xl">
                  {category.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-2 block h-px w-0 bg-champagne-300 transition-all duration-700 group-hover:w-14"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
