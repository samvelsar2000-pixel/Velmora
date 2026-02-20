import type { Metadata } from 'next';
import { SectionTitle } from '@/components/ui';

export const metadata: Metadata = { title: 'Услуги', description: 'Направления Velmora: перила, ограждения, ворота, балконы, навесы и декор.' };

export default function ServicesPage() {
  const services = [
    ['Кованые перила', 'Проектирование, изготовление и монтаж лестничных систем любой сложности.'],
    ['Ограждения', 'Надежные решения для участков, террас и входных групп.'],
    ['Ворота и калитки', 'Элегантная ковка, усиленные рамы и интеграция автоматики.'],
    ['Балконные ограждения', 'Фасадные композиции с учетом архитектуры здания.'],
    ['Навесы и козырьки', 'Защита входных зон с премиальной эстетикой и долговечностью.'],
    ['Декоративные элементы', 'Авторские вставки, панно и кованые акценты для интерьера.']
  ];
  return (
    <div className="container-base pb-16 pt-10">
      <SectionTitle title="Услуги" description="Комплексные работы от замера и эскиза до монтажа и сервисного сопровождения." />
      <div className="grid gap-4 md:grid-cols-2">
        {services.map(([title, text]) => <article key={title} className="panel p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-zinc-300">{text}</p></article>)}
      </div>
    </div>
  );
}
