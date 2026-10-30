import type { Metadata } from 'next'

import { BioView } from '@/components/BioView'

export const metadata: Metadata = {
  title: 'Biografía',
  description:
    'HEMIS (Edgar), antes DJ Whim: productor y DJ español. Del progressive house de 2014 a los remixes de Skrillex, Tokischa y Caroline Polachek.',
}

export default function BioPage() {
  return <BioView />
}
