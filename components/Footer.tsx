'use client'

import { ArrowUpRight } from 'lucide-react'

import { site } from '@/data/site'

import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()

  return (
    <footer id="booking" className="mt-32 scroll-mt-20 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Lines
              as="h2"
              className="font-display text-[clamp(44px,8vw,120px)]"
              lines={['Booking', <>y <span className="text-accent-2">prensa</span></>]}
            />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-accent px-7 text-[15px] font-medium transition-colors hover:bg-[#2b34e0]"
                >
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <p className="text-[14px] text-muted">Fechas, remixes, colaboraciones y promos.</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-card border border-line bg-surface p-7">
              <p className="text-[12px] uppercase tracking-[0.14em] text-faint">Enlaces</p>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between py-3.5 text-[15px] transition-colors hover:text-accent-2"
                    >
                      {s.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={site.promoterForm}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between py-3.5 text-[15px] transition-colors hover:text-accent-2"
                  >
                    Enviar una promo
                    <ArrowUpRight className="size-4" />
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-4 border-t border-line pt-8 text-[13px] text-faint sm:grid-cols-3">
          <p>
            © {new Date().getFullYear()} {site.name} · Presskit
          </p>
          <p className="sm:text-center">
            {site.location}, {time}
          </p>
          <p className="sm:text-right">Música y artwork vía SoundCloud</p>
        </div>
      </div>
    </footer>
  )
}
