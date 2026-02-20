import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="panel overflow-hidden">
      <Image src={product.image} alt={product.title} width={640} height={420} className="h-44 w-full object-cover" />
      <div className="space-y-3 p-4">
        <p className="text-xs uppercase tracking-wider text-zinc-400">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-zinc-300">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">от {product.priceFrom.toLocaleString('ru-RU')} ₽</p>
          <Link href={`/catalog/${product.slug}`} className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white hover:text-zinc-900">
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}
