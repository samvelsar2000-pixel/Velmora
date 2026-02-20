export type ProductCategory = 'Перила' | 'Ограждения' | 'Ворота' | 'Балконы' | 'Навесы' | 'Декор';

export type Product = {
  id: number;
  slug: string;
  title: string;
  category: ProductCategory;
  description: string;
  priceFrom: number;
  image: string;
  gallery: string[];
  material: string;
  coating: string;
  leadTime: string;
  install: string;
  featured: boolean;
};

const commonSpecs = {
  material: 'Сталь 3 мм, кованые элементы ручной формовки',
  coating: 'Пескоструй + грунт + порошковая окраска',
  leadTime: 'от 12 до 25 дней',
  install: 'Выезд бригады и монтаж под ключ'
};

export const products: Product[] = [
  { id: 1, slug: 'stair-rail-aurora', title: 'Перила Aurora', category: 'Перила', description: 'Лаконичные кованые перила с графитовой патиной для современных лестниц.', priceFrom: 78000, image: '/images/railings.svg', gallery: ['/images/railings.svg', '/images/detail.svg', '/images/metal.svg'], featured: true, ...commonSpecs },
  { id: 2, slug: 'stair-rail-noir', title: 'Перила Noir Line', category: 'Перила', description: 'Ритмичный рисунок и деликатная геометрия для интерьеров премиум-класса.', priceFrom: 84000, image: '/images/railings-2.svg', gallery: ['/images/railings-2.svg', '/images/detail.svg', '/images/metal.svg'], featured: true, ...commonSpecs },
  { id: 3, slug: 'fence-vesta', title: 'Ограждение Vesta', category: 'Ограждения', description: 'Прочное уличное ограждение с антикоррозийной системой покрытия.', priceFrom: 92000, image: '/images/fence.svg', gallery: ['/images/fence.svg', '/images/metal.svg', '/images/detail.svg'], featured: true, ...commonSpecs },
  { id: 4, slug: 'fence-prime', title: 'Ограждение Prime Shield', category: 'Ограждения', description: 'Акцентные пики и строгие пропорции для частной территории.', priceFrom: 99000, image: '/images/fence-2.svg', gallery: ['/images/fence-2.svg', '/images/metal.svg', '/images/detail.svg'], featured: false, ...commonSpecs },
  { id: 5, slug: 'gate-imperia', title: 'Ворота Imperia', category: 'Ворота', description: 'Двустворчатые кованые ворота с декоративной центральной композицией.', priceFrom: 156000, image: '/images/gate.svg', gallery: ['/images/gate.svg', '/images/detail.svg', '/images/metal.svg'], featured: true, ...commonSpecs },
  { id: 6, slug: 'gate-monolith', title: 'Ворота Monolith', category: 'Ворота', description: 'Массивный дизайн с автоматикой и усиленной рамой.', priceFrom: 174000, image: '/images/gate-2.svg', gallery: ['/images/gate-2.svg', '/images/detail.svg', '/images/metal.svg'], featured: false, ...commonSpecs },
  { id: 7, slug: 'balcony-elysium', title: 'Балкон Elysium', category: 'Балконы', description: 'Воздушный узор и тонкая ковка для фасадов в классическом стиле.', priceFrom: 69000, image: '/images/balcony.svg', gallery: ['/images/balcony.svg', '/images/metal.svg', '/images/detail.svg'], featured: true, ...commonSpecs },
  { id: 8, slug: 'balcony-nova', title: 'Балкон Nova Arc', category: 'Балконы', description: 'Минималистичный рисунок и идеальная геометрия для новых домов.', priceFrom: 73000, image: '/images/balcony-2.svg', gallery: ['/images/balcony-2.svg', '/images/metal.svg', '/images/detail.svg'], featured: false, ...commonSpecs },
  { id: 9, slug: 'canopy-orbit', title: 'Навес Orbit', category: 'Навесы', description: 'Надежный кованый навес с поликарбонатом и встроенным водоотводом.', priceFrom: 128000, image: '/images/canopy.svg', gallery: ['/images/canopy.svg', '/images/metal.svg', '/images/detail.svg'], featured: true, ...commonSpecs },
  { id: 10, slug: 'canopy-urban', title: 'Козырек Urban', category: 'Навесы', description: 'Компактный козырек для входных групп с подсветкой.', priceFrom: 54000, image: '/images/canopy-2.svg', gallery: ['/images/canopy-2.svg', '/images/metal.svg', '/images/detail.svg'], featured: false, ...commonSpecs },
  { id: 11, slug: 'decor-flora', title: 'Декор Flora', category: 'Декор', description: 'Кованые растительные элементы для интерьерных и фасадных решений.', priceFrom: 18000, image: '/images/decor.svg', gallery: ['/images/decor.svg', '/images/detail.svg', '/images/metal.svg'], featured: false, ...commonSpecs },
  { id: 12, slug: 'decor-linea', title: 'Декор Linea', category: 'Декор', description: 'Серия геометрических вставок для перил и ворот.', priceFrom: 22000, image: '/images/decor-2.svg', gallery: ['/images/decor-2.svg', '/images/detail.svg', '/images/metal.svg'], featured: false, ...commonSpecs },
  { id: 13, slug: 'stair-rail-velvet', title: 'Перила Velvet Steel', category: 'Перила', description: 'Плавные линии и полуматовая текстура с эффектом глубины.', priceFrom: 88000, image: '/images/railings.svg', gallery: ['/images/railings.svg', '/images/detail.svg', '/images/metal.svg'], featured: true, ...commonSpecs },
  { id: 14, slug: 'fence-summit', title: 'Ограждение Summit', category: 'Ограждения', description: 'Современная модульная система с коваными акцентами.', priceFrom: 105000, image: '/images/fence.svg', gallery: ['/images/fence.svg', '/images/metal.svg', '/images/detail.svg'], featured: false, ...commonSpecs },
  { id: 15, slug: 'gate-heritage', title: 'Ворота Heritage', category: 'Ворота', description: 'Классическая ковка с вензелями и ручной доработкой.', priceFrom: 188000, image: '/images/gate.svg', gallery: ['/images/gate.svg', '/images/detail.svg', '/images/metal.svg'], featured: true, ...commonSpecs },
  { id: 16, slug: 'balcony-sculpt', title: 'Балкон Sculpt', category: 'Балконы', description: 'Скульптурный орнамент и безупречная посадка по месту.', priceFrom: 82000, image: '/images/balcony.svg', gallery: ['/images/balcony.svg', '/images/detail.svg', '/images/metal.svg'], featured: false, ...commonSpecs }
];

export const categories = ['Все', 'Перила', 'Ограждения', 'Ворота', 'Балконы', 'Навесы', 'Декор'] as const;
