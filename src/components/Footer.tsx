import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="container-base grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold tracking-[0.2em]">VELMORA</p>
          <p className="mt-3 text-sm text-zinc-400">Премиальные кованые изделия и ограждения с монтажом под ключ.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Контакты</p>
          <p className="mt-3 text-sm text-zinc-300">+7 (999) 123-45-67</p>
          <p className="text-sm text-zinc-300">hello@velmora.ru</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Режим работы</p>
          <p className="mt-3 text-sm text-zinc-300">Пн–Сб: 09:00–20:00</p>
          <p className="text-sm text-zinc-300">Выезд на замер ежедневно</p>
        </div>
        <div className="space-y-2 text-sm">
          <Link href="/privacy" className="block text-zinc-300 hover:text-white">Политика конфиденциальности</Link>
          <div className="flex gap-3 pt-2">
            <span className="rounded-full border border-white/20 px-2 py-1 text-xs">VK</span>
            <span className="rounded-full border border-white/20 px-2 py-1 text-xs">TG</span>
            <span className="rounded-full border border-white/20 px-2 py-1 text-xs">WA</span>
          </div>
        </div>
      </div>
      <p className="container-base mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Velmora. Все права защищены.</p>
    </footer>
  );
}
