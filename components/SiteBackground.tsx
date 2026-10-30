'use client'

import ShapeWaves from '@/components/ShapeWaves'

// Fondo de todo el sitio: una única capa fija detrás del contenido. Vive en el
// layout, así que el hero y las demás secciones comparten la misma retícula y
// el shader no se reinicia al navegar entre páginas.
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Respaldo con los colores de marca: es lo que se ve si WebGPU no está. */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_5%,rgb(59_69_255/0.22),transparent_62%),radial-gradient(75%_65%_at_88%_35%,rgb(255_47_158/0.16),transparent_60%)]" />
      <div className="absolute inset-0">
        <ShapeWaves
          color="#7d8190"
          hoverColor="#3b45ff"
          backgroundColor="#07070b"
          shapes="mixed"
          cellSize={14}
          dotSize={0.7}
          speed={0.9}
          scale={1.1}
          contrast={1.05}
          brightness={0.36}
          flow={0.04}
          fade={0.2}
          interactive
          splashRadius={52}
          splashStrength={0.4}
          glow={0.55}
          intro
          introDuration={2}
          onError={(error: Error) => console.warn('[ShapeWaves] WebGPU no disponible:', error?.message ?? error)}
        />
      </div>
      {/* Velo: sube el contraste del texto sin apagar los puntos. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_95%_at_50%_-10%,transparent_0%,rgb(7_7_11/0.5)_58%,rgb(7_7_11/0.82)_100%)]" />
      <div className="grain absolute inset-0" />
    </div>
  )
}
