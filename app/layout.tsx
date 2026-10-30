import '@fontsource-variable/inter'
import '@fontsource-variable/bricolage-grotesque'
import type { Metadata, Viewport } from 'next'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Preloader } from '@/components/Preloader'
import { SiteBackground } from '@/components/SiteBackground'
import { site } from '@/data/site'

import './globals.css'

// En Vercel toma el dominio del proyecto automáticamente; en local cae a localhost.
// Si algún día hay dominio propio, basta con definir NEXT_PUBLIC_SITE_URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Presskit de HEMIS, productor y DJ español: remixes de perreo, latin club, tech house y techno. Escucha el catálogo y contacta para booking.',
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: 'Remixes, sets y originales. 18 tracks, más de 180.000 reproducciones en SoundCloud.',
    images: ['/images/hemis-banner.jpg'],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#07070b',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteBackground />
        <Preloader />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
