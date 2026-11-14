import { useEffect, useState } from 'react';

interface FloatingMenuButtonProps {
  open: boolean;
  onToggle: () => void;
}

export default function FloatingMenuButton({ open, onToggle }: FloatingMenuButtonProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const label = open ? 'Close menu' : 'Open menu';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-expanded={open}
      className={`group fixed top-6 right-6 z-[60] flex h-14 w-14 flex-col items-center justify-center gap-[5px] rounded-full shadow-[0_10px_40px_rgba(22,21,19,0.18)] backdrop-blur-md transition-all duration-500 hover:scale-105 ${
        open
          ? 'bg-charcoal-900'
          : scrolled
            ? 'bg-ivory-100/90'
            : 'bg-ivory-100/20'
      }`}
    >
      <span
        className={`block h-px transition-all duration-500 ${
          open
            ? 'w-5 translate-y-[3px] rotate-45 bg-ivory-100'
            : 'w-5 bg-charcoal-900'
        }`}
      />
      <span
        className={`block h-px transition-all duration-500 ${
          open
            ? 'w-5 -translate-y-[3px] -rotate-45 bg-ivory-100'
            : 'w-3 bg-charcoal-900 group-hover:w-5'
        }`}
      />
    </button>
  );
}
