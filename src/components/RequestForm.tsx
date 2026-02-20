'use client';

import { FormEvent, useState } from 'react';

type Errors = Record<string, string>;

const initial = { name: '', phone: '', email: '', productType: 'Перила', message: '', consent: false };

export default function RequestForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Введите имя';
    if (!form.phone.trim()) next.phone = 'Введите телефон';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Некорректный email';
    if (!form.consent) next.consent = 'Необходимо согласие';
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('');
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    const res = await fetch('/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = (await res.json()) as { message?: string; error?: string };
    setLoading(false);
    if (!res.ok) {
      setStatus(data.error ?? 'Ошибка отправки');
      return;
    }
    setStatus(data.message ?? 'Заявка отправлена');
    setForm(initial);
  };

  return (
    <form id="request-form" onSubmit={onSubmit} className="panel space-y-4 p-5">
      <h3 className="text-xl font-semibold">Оставить заявку</h3>
      <div>
        <input className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder="Имя *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <input className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder="Телефон *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
      </div>
      <div>
        <input className="w-full rounded-xl border border-white/20 bg-black/30 p-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
      </div>
      <select className="w-full rounded-xl border border-white/20 bg-black/30 p-3" value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })}>
        <option>Перила</option><option>Ограждения</option><option>Ворота</option><option>Балконы</option><option>Навесы</option><option>Декор</option>
      </select>
      <textarea className="w-full rounded-xl border border-white/20 bg-black/30 p-3" rows={4} placeholder="Комментарий" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <label className="flex items-start gap-2 text-sm text-zinc-300"><input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />Я согласен на обработку персональных данных.</label>
      {errors.consent ? <p className="text-xs text-red-400">{errors.consent}</p> : null}
      <button disabled={loading} className="w-full rounded-full bg-white px-4 py-3 font-medium text-zinc-900 disabled:opacity-60">{loading ? 'Отправка...' : 'Отправить заявку'}</button>
      {status ? <p className="text-sm text-zinc-200">{status}</p> : null}
    </form>
  );
}
