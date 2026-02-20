import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-base flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-semibold gradient-text">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Страница не найдена</h1>
      <p className="mt-3 text-zinc-300">Возможно, адрес изменился. Перейдите на главную страницу сайта Velmora.</p>
      <Link href="/" className="mt-6 rounded-full bg-white px-6 py-3 font-medium text-zinc-900">На главную</Link>
    </div>
  );
}
