# HEMIS — presskit (Next.js)

Versión Next.js (App Router) del presskit de HEMIS, lista para desplegar en
Vercel. Mismo contenido y mismo diseño que la versión Vite de la raíz, pero con
rutas estáticas generadas en build, metadata/Open Graph por track y sin worker.

## Run it

```sh
bun install        # o npm install
bun run dev        # http://localhost:3000
bun run build      # genera las 22 rutas estáticas
bun run start      # sirve el build
bun run typecheck
```

## Estructura

- `data/site.ts` es todo el contenido: perfil, 18 tracks, sets, stats, timeline
  y biografía. Añadir un track es añadir un objeto a `tracks`; su ruta
  `/track/<slug>` se genera sola con `generateStaticParams`.
- `app/layout.tsx` monta fuentes, metadata global, nav, preloader y footer.
- `app/page.tsx`, `app/bio/page.tsx` y `app/track/[slug]/page.tsx` son las
  rutas; la UI vive en `components/HomeView.tsx`, `BioView.tsx` y `TrackView.tsx`
  (client components, porque usan motion y estado).
- `components/SoundCloud.tsx` carga el iframe oficial solo al pulsar.
- `app/globals.css` tiene los tokens de Tailwind v4 (negro azulado, azul
  eléctrico, magenta) y las utilidades de tipografía.

Las imágenes de `public/images` se descargaron de SoundCloud (avatar, banner y
portadas); los derechos son del artista.

## Deploy en Vercel

1. Sube el repo a GitHub (la carpeta `nextjs` puede ser la raíz del proyecto en
   Vercel, o configura **Root Directory** = `nextjs` si despliegas el monorepo).
2. En Vercel: **Add New → Project**, importa el repo y deja el preset
   **Next.js**. Build `next build`, output automático. No hay variables de
   entorno obligatorias.
3. Opcional: define `NEXT_PUBLIC_SITE_URL` con el dominio final para que las
   imágenes Open Graph se resuelvan contra él; si no, se usa el dominio de
   producción que Vercel asigna (`VERCEL_PROJECT_PRODUCTION_URL`).

También puedes desplegar desde la CLI:

```sh
cd nextjs
npx vercel        # preview
npx vercel --prod # producción
```

No hace falta configuración de `vercel.json`: es un proyecto Next.js estándar.
