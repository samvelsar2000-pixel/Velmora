import type { Metadata } from 'next';
import RequestForm from '@/components/RequestForm';

export const metadata: Metadata = { title: 'Контакты', description: 'Контакты Velmora и форма заявки на изготовление кованых изделий.' };

export default function ContactsPage() {
  return (
    <div className="container-base grid gap-8 pb-16 pt-10 lg:grid-cols-2">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">Контакты</h1>
        <p className="text-zinc-300">Телефон: <a href="tel:+79991234567" className="text-white">+7 (999) 123-45-67</a></p>
        <p className="text-zinc-300">WhatsApp: <a href="https://wa.me/79991234567" className="text-white">+7 (999) 123-45-67</a></p>
        <p className="text-zinc-300">Email: <a href="mailto:hello@velmora.ru" className="text-white">hello@velmora.ru</a></p>
        <p className="text-zinc-300">Адрес: Москва, ул. Промышленная, 18</p>
        <p className="text-zinc-300">Время работы: Пн–Сб, 09:00–20:00</p>
        <div className="panel p-5">
          <h2 className="text-xl font-semibold">Выезд на замер</h2>
          <p className="mt-2 text-zinc-300">Инженер выезжает на объект, фиксирует размеры, обсуждает стиль и готовит точный расчет.</p>
        </div>
      </section>
      <RequestForm />
    </div>
  );
}
