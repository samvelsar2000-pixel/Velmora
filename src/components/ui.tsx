import Link from 'next/link';
import { ReactNode } from 'react';

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-zinc-300">{description}</p> : null}
    </div>
  );
}

export function CTAButton({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${
        secondary
          ? 'border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5'
          : 'bg-white text-zinc-900 hover:bg-zinc-200'
      }`}
    >
      {children}
    </Link>
  );
}
