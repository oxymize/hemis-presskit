import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { TrackView } from '@/components/TrackView'
import { bySlug, tracks } from '@/data/site'

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const track = bySlug(slug)
  if (!track) return {}
  return {
    title: `${track.title} — ${track.artist}`,
    description: track.summary,
    openGraph: {
      title: `${track.title} — ${track.artist}`,
      description: track.summary,
      images: [track.artwork],
    },
  }
}

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!bySlug(slug)) notFound()
  return <TrackView slug={slug} />
}
