import { useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
  cartCount: number;
}

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
  { label: 'Cart', href: '#cart', icon: ShoppingBag },
];

export default function NavDrawer({ open, onClose, cartCount }: NavDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-charcoal-900/50 backdrop-blur-sm transition-opacity duration-700 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer panel */}
      <aside
        aria-label="Main navigation"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-charcoal-900 text-ivory-100 shadow-2xl transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-10 pt-8">
          <span className="font-display text-xl tracking-[0.2em]">LUMIÈRE</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-100 transition-all duration-300 hover:rotate-90 hover:border-ivory-100/60"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-10">
          <ul className="flex flex-col gap-2">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center gap-4 py-4 transition-all duration-500"
                  style={{
                    transitionDelay: open ? `${120 + i * 60}ms` : '0ms',
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateX(0)' : 'translateX(24px)',
                  }}
                >
                  <span className="text-[10px] tracking-widest2 text-champagne-300">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl leading-none text-ivory-100/90 transition-colors duration-300 group-hover:text-champagne-200">
                    {link.label}
                  </span>
                  {link.label === 'Cart' && cartCount > 0 && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-champagne-400 text-[11px] text-charcoal-900">
                      {cartCount}
                    </span>
                  )}
                  <span
                    aria-hidden="true"
                    className="ml-auto block h-px w-0 bg-champagne-300 transition-all duration-500 group-hover:w-12"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-ivory-100/10 px-10 py-8">
          <p className="text-[10px] uppercase tracking-widest2 text-champagne-300">
            Maison Lumière
          </p>
          <p className="mt-2 text-sm font-light text-ivory-100/60">
            12 Place Vendôme, Paris · +33 1 42 00 00 00
          </p>
        </div>
      </aside>
    </>
  );
}
