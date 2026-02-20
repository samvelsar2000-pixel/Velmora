'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '@/data/products';
import ProductCard from './ProductCard';

const pageSize = 8;

export default function CatalogClient() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('Все');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
    if (category !== 'Все') list = list.filter((p) => p.category === category);
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.priceFrom - a.priceFrom);
    if (sort === 'name') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-6">
      <div className="panel grid gap-3 p-4 md:grid-cols-3">
        <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1);} } placeholder="Поиск по названию" className="rounded-xl border border-white/20 bg-black/30 p-3" />
        <select value={category} onChange={(e) => { setCategory(e.target.value as (typeof categories)[number]); setPage(1);} } className="rounded-xl border border-white/20 bg-black/30 p-3">
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border border-white/20 bg-black/30 p-3">
          <option value="name">По названию</option>
          <option value="price-asc">Цена: по возрастанию</option>
          <option value="price-desc">Цена: по убыванию</option>
        </select>
      </div>
      {current.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {current.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="panel p-10 text-center text-zinc-300">По вашему запросу ничего не найдено.</div>
      )}
      <div className="flex items-center justify-center gap-2">
        <button className="rounded-lg border border-white/20 px-3 py-1 disabled:opacity-40" onClick={() => setPage((v) => Math.max(1, v - 1))} disabled={page === 1}>Назад</button>
        <span className="text-sm text-zinc-300">{page} / {totalPages}</span>
        <button className="rounded-lg border border-white/20 px-3 py-1 disabled:opacity-40" onClick={() => setPage((v) => Math.min(totalPages, v + 1))} disabled={page === totalPages}>Вперед</button>
      </div>
    </div>
  );
}
