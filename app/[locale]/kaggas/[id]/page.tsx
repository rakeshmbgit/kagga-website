import { notFound } from 'next/navigation';
import { getKaggaById } from '@/data/kaggas';
import KaggaDetailClient from './KaggaDetailClient';

interface KaggaDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function KaggaDetailPage({ params }: KaggaDetailPageProps) {
  const resolvedParams = await params;
  const kaggaId = parseInt(resolvedParams.id);
  const kagga = getKaggaById(kaggaId);
  
  if (!kagga) {
    notFound();
  }

  const prevKagga = kaggaId > 1 ? getKaggaById(kaggaId - 1) : null;
  const nextKagga = kaggaId < 945 ? getKaggaById(kaggaId + 1) : null;

  return <KaggaDetailClient kagga={kagga} prevKagga={prevKagga} nextKagga={nextKagga} />;
} 