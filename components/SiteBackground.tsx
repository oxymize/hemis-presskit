'use client'

import ShapeWaves from '@/components/ShapeWaves'

// Fondo animado de todo el presskit. Vive en el layout para que la misma
// retícula acompañe a todas las rutas y el shader no se reinicie al navegar.
export function SiteBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
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
    </div>
  )
}
