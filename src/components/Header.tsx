'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { NavLink } from './types';

const links: NavLink[] = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="container-base flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-[0.2em] text-white" aria-label="Velmora home">
          VELMORA
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-zinc-200 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/contacts#request-form" className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white hover:text-zinc-900">
            Оставить заявку
          </Link>
        </div>
        <button
          className="rounded-lg border border-white/20 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contacts#request-form" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-900" onClick={() => setOpen(false)}>
              Оставить заявку
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
