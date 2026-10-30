'use client'

import dynamic from 'next/dynamic'

import './SiteBackground.css'

// vgpu habla con navigator.gpu nada más cargarse, así que se importa solo en el
// cliente: si se evaluara en el servidor, el módulo tocaría APIs de navegador.
const ShapeWaves = dynamic(() => import('@/components/ShapeWaves'), { ssr: false })

// Fondo animado de todo el presskit. Vive en el layout para que la misma
// retícula acompañe a todas las rutas y el shader no se reinicie al navegar.
export function SiteBackground() {
  return (
    <div className="site-background" style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
      <ShapeWaves
        text="ツ"
        fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
        fontWeight={500}
        textSize={0.6}
        shapes="mixed"
        cellSize={10}
        dotSize={0.75}
        color="#9d9da3"
        hoverColor="#41dca9"
        backgroundColor="#000000"
        speed={1.9}
        scale={1}
        contrast={1}
        brightness={0.4}
        flow={0}
        direction={0}
        fade={0.25}
        interactive={true}
        splashRadius={40}
        splashStrength={0.4}
        glow={1.35}
        intro={true}
        introDuration={1.9}
        paused={false}
        onError={(error: Error) => console.warn('[ShapeWaves] WebGPU no disponible:', error?.message ?? error)}
      />
      {/* Sin WebGPU el canvas se queda en opacity 0. Va después del componente
          porque su raíz pinta backgroundColor inline: por debajo quedaría tapada.
          Se retira sola en cuanto el shader marca data-ready. */}
      <div className="waves-fallback" aria-hidden />
    </div>
  )
}
