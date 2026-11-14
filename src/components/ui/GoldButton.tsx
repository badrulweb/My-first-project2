interface GoldButtonProps {
  children: string;
  variant?: 'solid' | 'outline' | 'light';
  href?: string;
  onClick?: () => void;
}

const styles = {
  solid:
    'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-600 border border-charcoal-900',
  outline:
    'bg-transparent text-charcoal-900 border border-charcoal-900/30 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-100',
  light:
    'bg-transparent text-ivory-100 border border-ivory-100/50 hover:bg-ivory-100 hover:text-charcoal-900',
};

export default function GoldButton({ children, variant = 'solid', href = '#', onClick }: GoldButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group/btn inline-flex items-center gap-3 px-10 py-4 text-[11px] uppercase tracking-widest2 transition-all duration-500 ${styles[variant]}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="block h-px w-6 bg-current transition-all duration-500 group-hover/btn:w-10"
      />
    </a>
  );
}
