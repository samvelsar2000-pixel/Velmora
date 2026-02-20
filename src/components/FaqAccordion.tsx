'use client';

import { useState } from 'react';

const items = [
  ['Сколько длится изготовление?', 'В среднем от 12 до 25 дней в зависимости от сложности и объема.'],
  ['Делаете ли вы индивидуальные эскизы?', 'Да, создаем эскиз под архитектуру объекта и ваши пожелания.'],
  ['Есть ли гарантия?', 'Предоставляем официальную гарантию на изделие и монтажные работы.'],
  ['Можно ли заказать только изготовление?', 'Да, доступны форматы: изготовление или изготовление + монтаж.'],
  ['Какой металл используете?', 'Используем сертифицированную сталь и профессиональную подготовку поверхности.'],
  ['Работаете ли по области?', 'Да, выезжаем на замер по городу и области по согласованию.']
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map(([q, a], idx) => (
        <div key={q} className="panel">
          <button className="flex w-full items-center justify-between p-4 text-left" onClick={() => setOpen(open === idx ? null : idx)}>
            <span className="font-medium">{q}</span>
            <span>{open === idx ? '−' : '+'}</span>
          </button>
          {open === idx ? <p className="px-4 pb-4 text-sm text-zinc-300">{a}</p> : null}
        </div>
      ))}
    </div>
  );
}
