'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { formatCount, type Track } from '@/data/site'

export function TrackCard({ track, index = 0 }: { track: Track; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/track/${track.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-image bg-surface-2">
          <img
            src={track.artwork}
            alt={`Portada de ${track.title}`}
            loading="lazy"
            className="aspect-square size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[10px] bg-bg/80 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
            <span>{track.kind}</span>
            <span className="tabular-nums text-faint">{formatCount(track.plays)} plays</span>
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[20px] leading-tight text-balance">{track.title}</h3>
          <span className="shrink-0 text-[12.5px] tabular-nums text-faint">{track.year}</span>
        </div>
        <p className="mt-1 text-[13.5px] text-muted">{track.artist}</p>
      </Link>
    </motion.article>
  )
}
