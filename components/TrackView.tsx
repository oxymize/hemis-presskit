'use client'

import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import { Lines, Reveal } from '@/components/motion'
import { SoundCloud } from '@/components/SoundCloud'
import { bySlug, formatCount, formatLength, tracks } from '@/data/site'

const ease = [0.22, 1, 0.36, 1] as const

export function TrackView({ slug }: { slug: string }) {
  const track = bySlug(slug)
  if (!track) return null

  const index = tracks.findIndex((t) => t.slug === track.slug)
  const next = tracks[(index + 1) % tracks.length]

  const facts: [string, string][] = [
    ['Tipo', track.kind],
    ['Artista', track.artist],
    ['Género', track.genre],
    ['Año', track.year],
    ['Duración', formatLength(track.length)],
    ['Reproducciones', formatCount(track.plays)],
  ]
  if (track.label) facts.push(['Sello', track.label])

  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Link href="/#musica" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
        <ArrowLeft className="size-4" />
        Sala de escucha
      </Link>

      <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <Lines as="h1" className="font-display text-[clamp(40px,7vw,104px)]" lines={[track.title]} />
        <Reveal delay={0.2} className="max-w-sm lg:pb-4">
          <p className="text-[13px] uppercase tracking-[0.16em] text-accent-2">{track.artist}</p>
          <p className="mt-3 text-pretty text-[16px] leading-relaxed text-muted">{track.summary}</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <div className="overflow-hidden rounded-image border border-line">
            <img src={track.artwork} alt={`Portada de ${track.title}`} className="aspect-square w-full object-cover" />
          </div>
          <div className="mt-4">
            <SoundCloud url={track.url} artwork={track.artwork} title={track.title} />
          </div>
        </motion.div>

        <div>
          {track.notes && (
            <Reveal>
              <p className="font-display text-balance text-[24px] leading-[1.25] sm:text-[30px]">{track.notes}</p>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 border-t border-line">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-line py-4">
                  <dt className="text-[12px] uppercase tracking-[0.12em] text-faint">{label}</dt>
                  <dd className="mt-1.5 text-[15px]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={track.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-[12px] bg-accent px-5 text-[14.5px] font-medium transition-colors hover:bg-[#2b34e0]"
            >
              Escuchar en SoundCloud
              <ArrowUpRight className="size-4" />
            </a>
            {track.links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1 text-[14px] font-medium text-fg">
                {l.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </Reveal>
        </div>
      </div>

      <Link href={`/track/${next.slug}`} className="group mt-28 block border-t border-line pt-10">
        <p className="text-[13px] uppercase tracking-[0.16em] text-faint">Siguiente</p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(36px,7vw,104px)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
            {next.title}
          </h2>
          <span className="image-frame hidden aspect-square w-[220px] shrink-0 rounded-[18px] sm:block">
            <img src={next.artwork} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </span>
        </div>
      </Link>
    </article>
  )
}
