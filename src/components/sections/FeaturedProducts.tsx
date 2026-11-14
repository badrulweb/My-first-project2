import { featuredProducts } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import GoldButton from '@/components/ui/GoldButton';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

export default function FeaturedProducts() {
  return (
    <section id="shop" className="bg-ivory-50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading eyebrow="Featured" title="Signature Pieces" />

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 100}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-beige-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-4 top-4 bg-ivory-100/90 px-3 py-1 text-[9px] uppercase tracking-widest2 text-charcoal-800 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View Piece
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl text-charcoal-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-widest2 text-charcoal-400">
                      {product.material}
                    </p>
                  </div>
                  <p className="font-serif text-lg text-champagne-600">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <GoldButton variant="outline" href="#shop">
            View All Pieces
          </GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
