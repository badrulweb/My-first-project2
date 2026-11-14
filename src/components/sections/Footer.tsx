import { useState } from 'react';
import { Instagram, Facebook, Youtube, ArrowRight, Check } from 'lucide-react';
import { siteImages } from '@/data/site';

const navColumns = [
  {
    title: 'Maison',
    links: ['Home', 'Our Story', 'Collections', 'Journal'],
  },
  {
    title: 'Shop',
    links: ['Rings', 'Necklaces', 'Earrings', 'Bracelets'],
  },
  {
    title: 'Client Care',
    links: ['Contact', 'Shipping & Returns', 'Care Guide', 'FAQ'],
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-charcoal-900 text-ivory-100">
      {/* Editorial background — diamond necklace close-up with a dark overlay
          so the existing content stays readable */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={siteImages.contact}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-transparent to-charcoal-900/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <p className="font-display text-3xl tracking-[0.2em] text-ivory-100">
              LUMIÈRE
            </p>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-ivory-100/60">
              Join our private list for first access to new chapters,
              atelier stories and one-of-a-kind pieces.
            </p>

            {subscribed ? (
              <div className="mt-8 flex items-center gap-3 border border-champagne-400/40 px-6 py-4">
                <Check size={16} className="text-champagne-300" />
                <p className="text-sm font-light text-champagne-200">
                  Welcome to the maison. Your first letter arrives soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex max-w-md items-center border-b border-ivory-100/25 focus-within:border-champagne-300 transition-colors duration-500">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="w-full bg-transparent py-4 text-sm font-light tracking-wide text-ivory-100 placeholder:text-ivory-100/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="group flex items-center gap-2 py-4 pl-4 text-[10px] uppercase tracking-widest2 text-champagne-300 transition-colors duration-300 hover:text-champagne-200"
                >
                  Join
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}

            <div className="mt-10 flex items-center gap-4">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/15 text-ivory-100/70 transition-all duration-300 hover:border-champagne-300 hover:text-champagne-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {navColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] uppercase tracking-widest2 text-champagne-300">
                  {column.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-light text-ivory-100/60 transition-colors duration-300 hover:text-ivory-100"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-ivory-100/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest2 text-champagne-300">Visit</p>
            <p className="mt-2 text-sm font-light text-ivory-100/60">
              12 Place Vendôme, 75001 Paris
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest2 text-champagne-300">Call</p>
            <p className="mt-2 text-sm font-light text-ivory-100/60">+33 1 42 00 00 00</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest2 text-champagne-300">Write</p>
            <p className="mt-2 text-sm font-light text-ivory-100/60">salon@maisonlumiere.com</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ivory-100/10 pt-8 sm:flex-row">
          <p className="text-xs font-light text-ivory-100/40">
            © 2026 Maison Lumière. All rights reserved.
          </p>
          <p className="text-xs font-light text-ivory-100/40">
            Crafted in Paris since 1947
          </p>
        </div>
      </div>
    </footer>
  );
}
