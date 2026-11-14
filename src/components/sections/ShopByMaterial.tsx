import { materials } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function ShopByMaterial() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <SectionHeading eyebrow="Substance" title="Shop by Material" />

      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {materials.map((material, i) => (
          <Reveal key={material.id} delay={i * 100}>
            <a href="#shop" className="group block text-center">
              <div className="relative mx-auto aspect-[4/5] w-4/5 overflow-hidden rounded-full bg-beige-200 sm:w-full sm:rounded-none">
                <img
                  src={material.image}
                  alt={material.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl text-charcoal-900">
                {material.name}
              </h3>
              <p className="mx-auto mt-2 max-w-[32ch] text-sm font-light leading-relaxed text-charcoal-400">
                {material.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
