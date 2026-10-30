import type { Metadata } from 'next'

import { HomeView } from '@/components/HomeView'

export const metadata: Metadata = {
  title: 'HEMIS — Productor y DJ',
  description:
    'Remixes de perreo y drum & bass, sets de latin club y techno, y un catálogo que empieza en 2014. Escucha y contacta para booking.',
}

export default function HomePage() {
  return <HomeView />
}
