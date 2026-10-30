import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-center px-5 sm:px-8">
      <p className="text-[12px] uppercase tracking-[0.2em] text-accent-2">404</p>
      <h1 className="font-display mt-3 text-[clamp(44px,9vw,120px)]">Este track no existe</h1>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
        Puede que la URL esté mal escrita o que el track ya no esté publicado.
      </p>
      <Link href="/" className="link-draw mt-8 inline-flex w-fit items-center gap-1.5 text-[15px] font-medium">
        Volver al presskit
      </Link>
    </div>
  )
}
