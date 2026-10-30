'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

/**
 * Reproductor oficial de SoundCloud, cargado solo cuando se pulsa: así el
 * iframe de terceros no bloquea la carga de la página ni cuenta como visita
 * antes de que nadie quiera escuchar. El audio sigue saliendo de SoundCloud y
 * las reproducciones se suman al perfil de HEMIS.
 */
export function SoundCloud({ url, artwork, title, height = 166 }: { url: string; artwork?: string; title: string; height?: number }) {
  const [open, setOpen] = useState(false)

  if (open) {
    const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%233b45ff&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`
    return (
      <iframe
        title={`Reproductor de SoundCloud: ${title}`}
        src={src}
        height={height}
        allow="autoplay"
        className="w-full rounded-[12px] border border-line bg-surface"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="group flex w-full items-center gap-3 rounded-[12px] border border-line bg-surface px-3 py-2.5 text-left transition-colors hover:border-line-strong"
    >
      {artwork && <img src={artwork} alt="" className="size-11 shrink-0 rounded-[8px] object-cover" />}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13.5px] text-fg">Escuchar «{title}»</span>
        <span className="block text-[11.5px] text-faint">Reproductor de SoundCloud</span>
      </span>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-fg transition-transform duration-300 group-hover:scale-105">
        <Play className="size-3.5 fill-current" />
      </span>
    </button>
  )
}
