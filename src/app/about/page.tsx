import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'О компании', description: 'Velmora — команда мастеров по изготовлению премиальных кованых изделий.' };

export default function AboutPage() {
  return (
    <div className="container-base space-y-8 pb-16 pt-10">
      <h1 className="text-4xl font-semibold">О компании Velmora</h1>
      <p className="max-w-4xl text-zinc-300">Velmora — мастерская премиальных металлоизделий. Мы создаем кованые конструкции, в которых инженерная надежность сочетается с выразительной эстетикой. Каждый проект начинается с замера и эскиза, а завершается точным монтажом и контролем качества.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="panel p-6"><p className="text-3xl font-semibold">10+</p><p className="text-zinc-300">лет опыта</p></div>
        <div className="panel p-6"><p className="text-3xl font-semibold">500+</p><p className="text-zinc-300">реализованных объектов</p></div>
        <div className="panel p-6"><p className="text-3xl font-semibold">100%</p><p className="text-zinc-300">контроль качества</p></div>
      </div>
    </div>
  );
}
