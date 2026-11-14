import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <span className="text-[11px] uppercase tracking-widest2 text-champagne-600">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 leading-[1.1]">
        {title}
      </h2>
      <span className="block h-px w-16 bg-champagne-400" aria-hidden="true" />
    </Reveal>
  );
}
