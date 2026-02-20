import type { Metadata } from 'next';
import CatalogClient from '@/components/CatalogClient';
import { SectionTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог кованых изделий Velmora: перила, ограждения, ворота, балконы, навесы и декор.'
};

export default function CatalogPage() {
  return (
    <div className="container-base pb-16 pt-10">
      <SectionTitle title="Каталог изделий" description="Выберите категорию, воспользуйтесь поиском и сортировкой для быстрого подбора." />
      <CatalogClient />
    </div>
  );
}
