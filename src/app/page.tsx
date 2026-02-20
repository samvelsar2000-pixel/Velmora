import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { CTAButton, SectionTitle } from '@/components/ui';
import FaqAccordion from '@/components/FaqAccordion';

const services = ['Кованые перила для лестниц', 'Ограждения', 'Ворота и калитки', 'Балконные ограждения', 'Навесы и козырьки', 'Декоративные элементы'];

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="container-base space-y-20 pb-16 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-metal-gradient p-8 md:p-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-zinc-500/20 blur-3xl" />
        <h1 className="relative max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Кованые изделия, которые подчеркивают статус пространства.</h1>
        <p className="relative mt-6 max-w-2xl text-zinc-200">Индивидуальный дизайн, точная геометрия, безупречная отделка и монтаж под ключ от Velmora.</p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <CTAButton href="/catalog">Смотреть каталог</CTAButton>
          <CTAButton href="/contacts#request-form" secondary>Оставить заявку</CTAButton>
        </div>
        <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
          {['10+ лет опыта', 'Индивидуальные эскизы', 'Монтаж под ключ'].map((i) => <div key={i} className="panel p-3 text-sm">{i}</div>)}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Почему Velmora" title="Точность в металле. Эстетика в деталях." description="Мы объединяем инженерный подход и художественную ковку, чтобы создать изделия, которые служат годами и выглядят безупречно." />
        <div className="grid gap-4 md:grid-cols-3">
          {['Индивидуальные эскизы', 'Качественный металл', 'Порошковая окраска', 'Точный монтаж', 'Гарантия', 'Премиальная отделка'].map((item) => <div key={item} className="panel p-5">{item}</div>)}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Направления" title="Услуги Velmora" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <div key={service} className="panel p-5 text-lg">{service}</div>)}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Каталог" title="Избранные изделия" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-8"><CTAButton href="/catalog" secondary>Весь каталог</CTAButton></div>
      </section>

      <section>
        <SectionTitle eyebrow="Как мы работаем" title="Этапы реализации" />
        <div className="grid gap-4 md:grid-cols-3">
          {['Заявка', 'Консультация и замер', 'Эскиз и согласование', 'Производство', 'Покраска и финиш', 'Монтаж'].map((step, i) => (
            <div key={step} className="panel p-5"><p className="text-sm text-zinc-400">0{i + 1}</p><p className="mt-2">{step}</p></div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Отзывы" title="Нас рекомендуют" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Игорь, Москва', 'Перила выполнены идеально, монтаж аккуратный и в срок.'],
            ['Марина, Химки', 'Балконное ограждение стало акцентом фасада.'],
            ['Александр, Одинцово', 'Ворота премиального уровня, все продумано до деталей.']
          ].map(([name, text]) => <blockquote key={name} className="panel p-5"><p>“{text}”</p><footer className="mt-3 text-sm text-zinc-400">{name}</footer></blockquote>)}
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" />
        <FaqAccordion />
      </section>

      <section className="panel flex flex-col items-start justify-between gap-5 p-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Обсудим ваш проект?</h2>
          <p className="mt-2 text-zinc-300">Подготовим расчет, предложим эскиз и согласуем сроки за 1 рабочий день.</p>
        </div>
        <Link href="/contacts#request-form" className="rounded-full bg-white px-6 py-3 font-medium text-zinc-900">Оставить заявку</Link>
      </section>
    </div>
  );
}
