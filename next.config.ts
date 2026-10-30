import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // La raíz del repo tiene otro lockfile (la versión Vite); fijamos la raíz de
  // Turbopack a esta carpeta para que Next no tenga que adivinarla.
  turbopack: { root: process.cwd() },
}

export default nextConfig
