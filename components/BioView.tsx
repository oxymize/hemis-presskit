'use client'

import { ArrowUpRight } from 'lucide-react'

import { Lines, Reveal } from '@/components/motion'
import { bio, formatCount, sets, site, stats, timeline, tracks } from '@/data/site'

export function BioView() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <p className="text-[12px] uppercase tracking-[0.2em] text-accent-2">Biografía</p>
      <Lines as="h1" className="font-display mt-4 text-balance text-[clamp(40px,7.5vw,104px)]" lines={['Productor y DJ,', 'de España al club']} />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <div className="image-frame relative aspect-[4/5] rounded-image">
            <img src="/images/hemis-avatar.jpg" alt="HEMIS" className="size-full object-cover" />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dd className="font-display text-[38px] leading-none tabular-nums">{s.value}</dd>
                <dt className="mt-2 text-[12px] uppercase tracking-[0.1em] text-faint">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[23px]">
            <p>{bio.lede}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            {bio.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[12px] uppercase tracking-[0.14em] text-faint">Recorrido</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {timeline.map((e) => (
                <li key={e.period} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[13px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              [String(tracks.length), 'tracks'],
              [String(sets.length), 'sets'],
              [formatCount(site.plays), 'plays'],
              [String(site.since), 'desde'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[40px] leading-none tabular-nums sm:text-[52px]">{value}</p>
                <p className="mt-2 text-[13px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.25} className="mt-16 rounded-card border border-line bg-surface p-8">
            <h2 className="font-display text-[30px]">Booking</h2>
            <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-muted">
              Fechas, remixes, colaboraciones y prensa: todo pasa por el mismo correo.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-[12px] bg-accent px-5 text-[14.5px] font-medium transition-colors hover:bg-[#2b34e0]"
            >
              {site.email}
              <ArrowUpRight className="size-4" />
            </a>
            <p className="mt-5 text-[13px] text-faint">
              Para enviar promos, usa el{' '}
              <a href={site.promoterForm} target="_blank" rel="noreferrer" className="link-draw text-muted hover:text-fg">
                formulario de promos
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
