import { siteImages } from '@/data/site';
import Reveal from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';

const values = [
  { title: 'Handcrafted', text: 'Every piece shaped by hand in our Paris atelier.' },
  { title: 'Ethically Sourced', text: 'Stones traced from mine to maison, without compromise.' },
  { title: 'Made to Last', text: 'A lifetime guarantee on craftsmanship, for generations.' },
];

export default function BrandStory() {
  return (
    <section id="story" className="bg-beige-100 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative">
            <img
              src={siteImages.story}
              alt="A jeweler crafting a ring by hand"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 hidden h-full w-full border border-champagne-400/40 lg:block"
            />
          </div>
        </Reveal>

        <div>
          <Reveal className="flex flex-col items-start gap-4">
            <span className="text-[11px] uppercase tracking-widest2 text-champagne-600">
              Our Story
            </span>
            <h2 className="font-display text-4xl leading-[1.1] text-charcoal-900 md:text-5xl lg:text-6xl">
              Nearly Eighty Years of Quiet Obsession
            </h2>
            <span className="block h-px w-16 bg-champagne-400" aria-hidden="true" />
            <p className="mt-4 max-w-lg text-base font-light leading-relaxed text-charcoal-600">
              Founded in 1947 by a single goldsmith working by candlelight,
              Maison Lumière grew from one belief: that jewelry should not
              decorate a moment, but hold it. Today, each piece still passes
              through the hands of a master artisan before it reaches yours.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={150 + i * 120}>
                <div className="flex items-start gap-6">
                  <span className="mt-2 font-serif text-lg italic text-champagne-500">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-charcoal-900">
                      {value.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-charcoal-400">
                      {value.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500} className="mt-12">
            <GoldButton href="#story">Read Our Journal</GoldButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
