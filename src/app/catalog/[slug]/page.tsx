import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  return { title: product?.title ?? 'Изделие', description: product?.description };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const similar = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="container-base space-y-10 pb-16 pt-10">
      <nav className="text-sm text-zinc-400">
        <Link href="/">Главная</Link> / <Link href="/catalog">Каталог</Link> / <span className="text-zinc-200">{product.title}</span>
      </nav>
      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <Image src={product.image} alt={product.title} width={1000} height={700} className="panel h-[380px] w-full object-cover" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.gallery.map((img) => <Image key={img} src={img} alt={product.title} width={300} height={180} className="panel h-28 w-full object-cover" />)}
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{product.category}</p>
          <h1 className="text-4xl font-semibold">{product.title}</h1>
          <p className="text-zinc-300">{product.description}</p>
          <p className="text-2xl font-medium">от {product.priceFrom.toLocaleString('ru-RU')} ₽</p>
          <div className="panel space-y-2 p-5 text-sm text-zinc-300">
            <p><span className="text-white">Материал:</span> {product.material}</p>
            <p><span className="text-white">Покрытие:</span> {product.coating}</p>
            <p><span className="text-white">Срок изготовления:</span> {product.leadTime}</p>
            <p><span className="text-white">Монтаж:</span> {product.install}</p>
          </div>
          <Link href="/contacts#request-form" className="inline-block rounded-full bg-white px-6 py-3 font-medium text-zinc-900">Оставить заявку</Link>
        </div>
      </section>
      <section>
        <h2 className="mb-5 text-2xl font-semibold">Похожие изделия</h2>
        <div className="grid gap-5 md:grid-cols-3">{similar.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
}
