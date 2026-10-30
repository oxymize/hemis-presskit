'use client'

import { AnimatePresence, animate, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { site } from '@/data/site'

/**
 * Reveal contado en la primera visita por pestaña. El estado empieza en false y
 * la decisión se toma en un efecto: leer sessionStorage o matchMedia en el
 * initial state rompería la hidratación, porque el servidor renderiza null y el
 * cliente otra cosa.
 */
export function Preloader() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (sessionStorage.getItem('preloaded')) return
    setShow(true)
  }, [])

  useEffect(() => {
    if (!show) return

    document.body.style.overflow = 'hidden'
    const controls = animate(0, 100, { duration: 1.1, ease: [0.4, 0, 0.2, 1], onUpdate: (v) => setCount(Math.round(v)) })
    const timer = window.setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('preloaded', '1')
    }, 1500)

    return () => {
      controls.stop()
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-end justify-between bg-bg p-6 text-fg sm:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display-wide text-[28px] sm:text-[40px]"
          >
            {site.name}
          </motion.p>
          <p className="font-display text-[80px] leading-none tabular-nums text-fg/90 sm:text-[140px]">{count}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
