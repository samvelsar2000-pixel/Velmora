import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = (await req.json()) as {
    name?: string;
    phone?: string;
    email?: string;
    productType?: string;
    message?: string;
    consent?: boolean;
  };

  if (!body.name?.trim() || !body.phone?.trim() || !body.consent) {
    return NextResponse.json({ error: 'Проверьте обязательные поля формы.' }, { status: 400 });
  }
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: 'Email заполнен некорректно.' }, { status: 400 });
  }

  console.log('Velmora request:', {
    name: body.name,
    phone: body.phone,
    email: body.email ?? null,
    productType: body.productType ?? 'Не указан',
    message: body.message ?? ''
  });

  return NextResponse.json({ message: 'Спасибо! Заявка успешно отправлена.' });
}
