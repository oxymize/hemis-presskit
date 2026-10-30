'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { site } from '@/data/site'
import { cx } from '@/lib/cx'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const time = useLocalTime()
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 120)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={cx('link-draw text-[14px] text-muted transition-colors hover:text-fg', pathname === href && 'text-fg')}
    >
      {label}
    </Link>
  )

  return (
    <header className={cx('fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]', hidden && '-translate-y-full')}>
      <div className="border-b border-line/60">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-display-wide text-[19px] tracking-[0.02em]">
            {site.name}
          </Link>
          <nav className="flex items-center gap-5 sm:gap-7">
            {link('/#musica', 'Música')}
            {link('/#sets', 'Sets')}
            <Link
              href="/bio"
              className={cx('link-draw text-[14px] transition-colors', pathname === '/bio' ? 'text-fg' : 'text-muted hover:text-fg')}
            >
              Bio
            </Link>
            {link('/#booking', 'Booking')}
            <span className="hidden text-[12.5px] tabular-nums text-faint md:inline">
              {site.location} {time}
            </span>
          </nav>
        </div>
      </div>
    </header>
  )
}
