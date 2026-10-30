'use client'

import { ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

import { Lines, Magnetic, Reveal } from '@/components/motion'
import ShapeWaves from '@/components/ShapeWaves'
import { SoundCloud } from '@/components/SoundCloud'
import { TrackCard } from '@/components/TrackCard'
import { bySlug, featured, formatCount, formatLength, sets, site, stats, tracks } from '@/data/site'
import { cx } from '@/lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function HomeView() {
  return (
    <>
      <Hero />
      <GenreMarquee />
      <ListeningRoom />
      <Sets />
      <Latest />
      <BioTeaser />
    </>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="round size-2 rounded-full bg-accent-2 shadow-[0_0_16px_2px_var(--color-accent-2)]" />
          {site.role} · {site.location}
          <span className="text-faint">· antes {site.formerName}</span>
        </motion.p>

        <h1 className="font-display-wide mt-4 text-[clamp(78px,19vw,300px)]">
          <span className="block overflow-hidden pb-[0.04em] -mb-[0.04em]">
            <motion.span
              className="block"
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.15, delay: 0.28, ease }}
            >
              {site.name}
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-line pt-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }}>
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">{site.intro}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={site.soundcloud}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-13 items-center gap-2 rounded-[14px] bg-accent px-6 text-[15px] font-medium text-fg transition-colors hover:bg-[#2b34e0]"
                >
                  Escuchar en SoundCloud
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <a
                href="#booking"
                className="link-draw inline-flex h-13 items-center px-1 text-[15px] font-medium text-fg"
              >
                Booking
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:gap-x-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-t border-line-strong pt-3">
                <dd className="font-display text-[26px] tabular-nums leading-none sm:text-[30px]">{s.value}</dd>
                <dt className="mt-2 text-[11.5px] uppercase tracking-[0.12em] text-faint">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}

// El hero respira sobre una retícula de puntos que ondula con el puntero
// (ShapeWaves, WebGPU). Si el navegador no expone WebGPU el componente cae y
// queda un degradado estático, para que la portada nunca se vea vacía.
function HeroBackdrop() {
  // El componente gestiona su propio ciclo: compila el shader, espera al
  // adaptador y presenta su primer frame cuando puede. No lo desmontamos por
  // tiempo, porque en GPUs integradas o con shaders lentos tardaría más que
  // cualquier plazo arbitrario y mataríamos el efecto justo antes de pintar.
  const [wavesFailed, setWavesFailed] = useState(false)

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_5%,rgb(59_69_255/0.22),transparent_62%),radial-gradient(75%_65%_at_88%_35%,rgb(255_47_158/0.16),transparent_60%)]" />
      {!wavesFailed && (
        <div className="absolute inset-0">
          <ShapeWaves
            color="#7d8190"
            hoverColor="#3b45ff"
            backgroundColor="#07070b"
            shapes="mixed"
            cellSize={12}
            dotSize={0.7}
            speed={1.2}
            scale={1.05}
            contrast={1.1}
            brightness={0.42}
            flow={0.06}
            fade={0.35}
            interactive
            splashRadius={46}
            splashStrength={0.45}
            glow={0.9}
            intro
            introDuration={1.8}
            onError={() => setWavesFailed(true)}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgb(7_7_11/0.2)_45%,var(--color-bg)_90%)]" />
      <div className="grain absolute inset-0" />
    </div>
  )
}

function GenreMarquee() {
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden>
      <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/80 sm:text-[36px]">
        {[...site.marquee, ...site.marquee].map((item, i) => (
          <li key={i} className="flex items-center gap-10">
            {item}
            <span className="round size-2 rounded-full bg-accent-2" />
          </li>
        ))}
      </ul>
    </div>
  )
}

// Un único reproductor de SoundCloud que cambia de track. Evita cargar dieciocho
// iframes y mantiene el conteo de reproducciones en su perfil.
function ListeningRoom() {
  const [slug, setSlug] = useState(tracks[0].slug)
  const track = bySlug(slug) ?? tracks[0]

  return (
    <section id="musica" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Sala de escucha']} />
        <Reveal className="text-[13.5px] text-muted">
          {tracks.length} tracks · {formatCount(site.plays)} reproducciones
        </Reveal>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-12">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-image border border-line bg-surface">
            <img src={track.artwork} alt={`Portada de ${track.title}`} className="aspect-square w-full object-cover" />
            <div className="p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent-2">{track.kind}</p>
              <h3 className="mt-2 font-display text-[26px] leading-tight text-balance">{track.title}</h3>
              <p className="mt-1 text-[14px] text-muted">{track.artist}</p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{track.summary}</p>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[12.5px] tabular-nums text-faint">
                <span>{track.year}</span>
                <span>{formatLength(track.length)}</span>
                <span>{formatCount(track.plays)} plays</span>
              </div>
              <Link href={`/track/${track.slug}`} className="link-draw mt-4 inline-flex items-center gap-1 text-[13.5px] font-medium">
                Ficha del track
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <SoundCloud key={track.slug} url={track.url} artwork={track.artwork} title={track.title} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="scroll-slim max-h-[620px] overflow-y-auto border-t border-line pr-1">
            {tracks.map((t, i) => {
              const active = t.slug === track.slug
              return (
                <li key={t.slug} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setSlug(t.slug)}
                    aria-pressed={active}
                    className={cx(
                      'group flex w-full items-center gap-3 px-1 py-3 text-left transition-colors sm:gap-4',
                      active ? 'bg-surface' : 'hover:bg-surface/60',
                    )}
                  >
                    <span className="w-6 shrink-0 text-[12px] tabular-nums text-faint">{String(i + 1).padStart(2, '0')}</span>
                    <img src={t.artwork} alt="" loading="lazy" className="size-11 shrink-0 rounded-[8px] object-cover" />
                    <span className="min-w-0 flex-1">
                      <span className={cx('block truncate text-[14.5px]', active ? 'text-fg' : 'text-fg/85')}>{t.title}</span>
                      <span className="mt-0.5 block truncate text-[12.5px] text-muted">
                        {t.artist} · {t.year}
                      </span>
                    </span>
                    <span className="hidden w-14 shrink-0 text-right text-[12.5px] tabular-nums text-faint sm:block">{formatLength(t.length)}</span>
                    <span
                      className={cx(
                        'grid size-8 shrink-0 place-items-center rounded-full border transition-colors',
                        active ? 'border-accent bg-accent text-fg' : 'border-line-strong text-muted group-hover:border-fg group-hover:text-fg',
                      )}
                    >
                      <Play className="size-3 fill-current" />
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Sets() {
  return (
    <section id="sets" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Sets y mixes']} />
        <Reveal className="max-w-xs text-[13.5px] text-muted">Grabaciones largas: latin club, techno y edits.</Reveal>
      </div>

      <ul className="mt-10 border-t border-line">
        {sets.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.04}>
            <li className="group grid grid-cols-[64px_1fr] items-center gap-4 border-b border-line py-5 sm:grid-cols-[80px_1fr_auto_auto] sm:gap-6">
              <img src={s.artwork} alt="" loading="lazy" className="size-16 rounded-[12px] object-cover sm:size-20" />
              <div className="min-w-0">
                <h3 className="font-display text-[24px] leading-tight sm:text-[32px]">
                  <Link href={`/track/${s.slug}`} className="link-draw">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-1 text-[13px] text-muted">
                  {s.year} · {formatLength(s.length)} · {formatCount(s.plays)} plays
                </p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg sm:flex"
              >
                SoundCloud
                <ArrowUpRight className="size-3.5" />
              </a>
              <Link
                href={`/track/${s.slug}`}
                aria-label={`Ficha de ${s.title}`}
                className="grid size-10 place-items-center rounded-full border border-line-strong text-muted transition-colors group-hover:border-fg group-hover:text-fg"
              >
                <Play className="size-3.5 fill-current" />
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Latest() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Lines as="h2" className="font-display text-[44px] sm:text-[64px]" lines={['Últimos remixes']} />
        <Reveal className="text-[13.5px] text-muted">Arte original de cada lanzamiento, vía SoundCloud.</Reveal>
      </div>
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((t, i) => (
          <TrackCard key={t.slug} track={t} index={i} />
        ))}
      </div>
    </section>
  )
}

function BioTeaser() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <Reveal>
          <div className="image-frame relative aspect-[4/5] max-w-[460px] rounded-image">
            <img src="/images/hemis-avatar.jpg" alt="HEMIS" className="size-full object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgb(7_7_11/0.9),transparent)] p-5">
              <p className="text-[12px] uppercase tracking-[0.18em] text-muted">Perfil verificado · SoundCloud</p>
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Lines as="h2" className="font-display text-balance text-[40px] sm:text-[54px] lg:text-[62px]" lines={['Perreo, techno', 'y todo lo que', 'hay en medio']} />
          <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
            <p>{site.intro}</p>
            <p className="mt-4">
              Remixes de Skrillex, Tokischa o Caroline Polachek, originales como «Su Nombre» y sets como «LISTEN THE FUTURE»: un catálogo
              publicado sin pausa desde {site.since}.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <Link href="/bio" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
              Leer la biografía
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
