import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Политика конфиденциальности' };

export default function PrivacyPage() {
  return (
    <div className="container-base space-y-4 pb-16 pt-10">
      <h1 className="text-3xl font-semibold">Политика конфиденциальности</h1>
      <p className="text-zinc-300">Мы обрабатываем персональные данные исключительно для связи по заявке, подготовки коммерческого предложения и консультации по услугам Velmora.</p>
      <p className="text-zinc-300">Отправляя форму, пользователь подтверждает согласие на обработку персональных данных в соответствии с действующим законодательством РФ.</p>
      <p className="text-zinc-300">Для отзыва согласия направьте запрос на email: hello@velmora.ru.</p>
    </div>
  );
}
