// Todo lo que hay en la web vive aquí. Cada dato de este archivo viene del
// perfil de SoundCloud de HEMIS (soundcloud.com/hemisdj): catálogo, arte,
// reproducciones y enlaces. Si publicas algo nuevo, añádelo a `tracks`.

export const site = {
  name: 'HEMIS',
  legalName: 'Edgar',
  role: 'Productor y DJ',
  formerName: 'DJ Whim',
  location: 'España',
  timezone: 'Europe/Madrid',
  email: 'contacthemis@gmail.com',
  soundcloud: 'https://soundcloud.com/hemisdj',
  intro:
    'Productor y DJ español. Remixes de perreo y drum & bass, sets de latin club y techno, y un catálogo que empieza en 2014 y no se ha parado.',
  tagline: 'Perreo, latin club, tech house y techno',
  since: 2014,
  followers: 6197,
  plays: 183968,
  promoterForm:
    'https://docs.google.com/forms/d/1S8rTqo_yHqWW7QiChmczG6wWfghuKQurzeLbFR6oQXM',
  socials: [
    { label: 'SoundCloud', href: 'https://soundcloud.com/hemisdj' },
    { label: 'Instagram', href: 'https://instagram.com/hemis' },
    { label: 'Spotify', href: 'https://sptfy.com/hemis' },
    { label: 'Beacons', href: 'https://beacons.ai/hemis' },
  ],
  marquee: [
    'Perreo',
    'Latin club',
    'Tech house',
    'Techno',
    'Drum & bass',
    'Jersey club',
    'Big room',
    'Remixes',
  ],
}

export type Kind = 'Remix' | 'Original' | 'Set' | 'Mashup'

export interface Track {
  slug: string
  title: string
  artist: string
  kind: Kind
  genre: string
  year: string
  /** Duración en segundos, tal y como la reporta SoundCloud. */
  length: number
  plays: number
  artwork: string
  url: string
  summary: string
  notes?: string
  links?: { label: string; href: string }[]
  label?: string
  featured?: boolean
}

export const tracks: Track[] = [
  {
    slug: 'duro-remix',
    title: 'DURO (HEMIS Remix)',
    artist: 'Skrillex, Young Miko',
    kind: 'Remix',
    genre: 'Dance & EDM',
    year: '2026',
    length: 147,
    plays: 2419,
    artwork: '/images/tracks/skrillex-young-miko-duro-hemis-remix.jpg',
    url: 'https://soundcloud.com/hemisdj/duro-remix',
    summary: 'El dembow de Skrillex y Young Miko pasado por el filtro de club de HEMIS.',
    notes: 'Remix publicado en marzo de 2026, con descarga gratuita.',
    links: [
      { label: 'Descarga', href: 'https://pumpyoursound.com/f/pys/skrillex-young-miko-duro-hemis-remix/222472' },
      { label: 'Vídeo en YouTube', href: 'https://www.youtube.com/watch?v=fwpijTgXcLo' },
    ],
    featured: true,
  },
  {
    slug: 'surfboard-remix',
    title: 'Surfboard (HEMIS Remix)',
    artist: 'Tokischa, Skrillex',
    kind: 'Remix',
    genre: 'Drum & bass',
    year: '2026',
    length: 168,
    plays: 3361,
    artwork: '/images/tracks/tokischa-skrillex-surfboard-hemis-remix.jpg',
    url: 'https://soundcloud.com/hemisdj/tokischa-skrillex-surfboard',
    summary: 'Tokischa y Skrillex en clave drum & bass: dos minutos y medio de tensión.',
    notes: 'Remix publicado en marzo de 2026, con descarga gratuita.',
    links: [
      { label: 'Descarga', href: 'https://pumpyoursound.com/f/dj-whim/tokischa-skrillex-surfboard-hemis-remix/222022' },
    ],
    featured: true,
  },
  {
    slug: 'hit-me-where-it-hurts-remix',
    title: 'hit me where it hurts x (HEMIS Remix)',
    artist: 'Skrillex, Dylan Brady & Caroline Polachek',
    kind: 'Remix',
    genre: 'Dance & EDM',
    year: '2025',
    length: 170,
    plays: 3775,
    artwork: '/images/tracks/skrillex-dylan-brady-caroline-polachek-hit-me-wh.jpg',
    url: 'https://soundcloud.com/hemisdj/hmwt-remix',
    summary: 'Caroline Polachek y Dylan Brady convertidos en un remix express de tres minutos.',
    notes: 'Publicado en noviembre de 2025, con descarga gratuita.',
    links: [
      { label: 'Descarga', href: 'https://pumpyoursound.com/f/pys/hit-me-where-it-hurts-hemis-remix/214571' },
    ],
    featured: true,
  },
  {
    slug: 'listen-the-future-2',
    title: 'LISTEN THE FUTURE #2',
    artist: 'HEMIS',
    kind: 'Set',
    genre: 'Dance & EDM',
    year: '2024',
    length: 1910,
    plays: 16754,
    artwork: '/images/tracks/listen-the-future-2-by-hemis.jpg',
    url: 'https://soundcloud.com/hemisdj/listen-the-future-2',
    summary: 'Media hora de latin club y techno: la segunda entrega de su serie de sets.',
    notes: 'Set publicado en abril de 2024. Vídeo completo en YouTube.',
    links: [{ label: 'Ver en YouTube', href: 'https://youtu.be/UsFNEcA0I1Q' }],
  },
  {
    slug: 'listen-the-future-1',
    title: 'LISTEN THE FUTURE #1',
    artist: 'HEMIS',
    kind: 'Set',
    genre: 'Dance & EDM',
    year: '2023',
    length: 2650,
    plays: 10719,
    artwork: '/images/tracks/listen-the-future-1-by-hemis.jpg',
    url: 'https://soundcloud.com/hemisdj/listen-the-future-1',
    summary: 'Cuarenta y cuatro minutos de house, techno y edits: el arranque de la serie.',
    notes: 'Set publicado en septiembre de 2023, con tracklist completo en SoundCloud.',
    links: [{ label: 'Ver en YouTube', href: 'https://www.youtube.com/watch?v=H5EodEfuUV8' }],
  },
  {
    slug: 'latin-tech-house-techno-set-2',
    title: 'LATIN, TECH HOUSE & TECHNO SET #2',
    artist: 'HEMIS',
    kind: 'Set',
    genre: 'Dance & EDM',
    year: '2023',
    length: 1638,
    plays: 21865,
    artwork: '/images/tracks/latin-tech-house-techno-set-2-junio-2023-hemis.jpg',
    url: 'https://soundcloud.com/hemisdj/latin-tech-house-techno-set-2',
    summary: 'Latin, tech house y techno grabado en junio de 2023. Su set más escuchado.',
    notes: 'Tracklist completo y descarga gratuita en SoundCloud.',
    links: [{ label: 'Descarga', href: 'https://thehusk.ca/fan.asp?t=29260' }],
  },
  {
    slug: 'tesla-perreo-mashup',
    title: 'Tesla (Perreo Mashup)',
    artist: 'Lil Pump',
    kind: 'Mashup',
    genre: 'Dance & EDM',
    year: '2023',
    length: 79,
    plays: 349,
    artwork: '/images/tracks/lil-pump-tesla-hemis-perreo-mashup-free-download.jpg',
    url: 'https://soundcloud.com/hemisdj/tesla-perreo-mashup',
    summary: 'Mashup de perreo sobre «Tesla» de Lil Pump, en menos de minuto y medio.',
    notes: 'Edit corto pensado para el club, con descarga gratuita.',
    links: [
      { label: 'Descarga', href: 'https://thehusk.ca/fan.asp?t=29072' },
      { label: 'Vídeo en YouTube', href: 'https://www.youtube.com/watch?v=eKVBGNrkUa0' },
    ],
  },
  {
    slug: 'latin-tech-house-set-1',
    title: 'LATIN & TECH HOUSE SET #1',
    artist: 'HEMIS',
    kind: 'Set',
    genre: 'Dance & EDM',
    year: '2023',
    length: 1424,
    plays: 930,
    artwork: '/images/tracks/latin-tech-house-set-1.jpg',
    url: 'https://soundcloud.com/hemisdj/latin-tech-house-1',
    summary: 'El primer set de latin y tech house: veinticuatro minutos sin bajar el pulso.',
    notes: 'Publicado en febrero de 2023, con tracklist en SoundCloud.',
    links: [{ label: 'Escuchar en YouTube', href: 'https://youtu.be/7NOfceKss1Y' }],
  },
  {
    slug: 'perreo',
    title: 'Perreo (Radio Edit)',
    artist: 'Valy Mo & HEMIS',
    kind: 'Original',
    genre: 'Tech house',
    year: '2022',
    length: 139,
    plays: 12645,
    artwork: '/images/tracks/valy-mo-hemis-perreo-radio-edit-dnd-recs.jpg',
    url: 'https://soundcloud.com/hemisdj/perreo',
    summary: 'Su single con Valy Mo en DND RECS: tech house con voces de perreo.',
    notes: 'Edit de radio del original, publicado en noviembre de 2022.',
    links: [{ label: 'Comprar en Beatport', href: 'https://www.beatport.com/track/perreo/17327440' }],
    label: 'DND RECS',
  },
  {
    slug: 'freely',
    title: 'Freely',
    artist: 'HEMIS',
    kind: 'Original',
    genre: 'Dance & EDM',
    year: '2022',
    length: 184,
    plays: 3663,
    artwork: '/images/tracks/hemis-freely.jpg',
    url: 'https://soundcloud.com/hemisdj/freely',
    summary: 'Original de 2022, entre tech house y house clásico.',
    notes: 'Publicado en julio de 2022; también disponible en Beatport.',
  },
  {
    slug: 'su-nombre',
    title: 'Su Nombre',
    artist: 'HEMIS',
    kind: 'Original',
    genre: 'Dance & EDM',
    year: '2022',
    length: 235,
    plays: 19914,
    artwork: '/images/tracks/hemis-su-nombre.jpg',
    url: 'https://soundcloud.com/hemisdj/su-nombre',
    summary: 'Una de sus canciones más escuchadas: melodía, voz y drop.',
    notes: 'Publicada en julio de 2022, con casi veinte mil reproducciones.',
    links: [{ label: 'Escuchar y descargar', href: 'https://www.gate.fm/uTCuSKUw5' }],
  },
  {
    slug: 'malavida-remix',
    title: 'MalaVida (DJ Whim Remix)',
    artist: 'Nicki Nicole',
    kind: 'Remix',
    genre: 'Electronic',
    year: '2020',
    length: 164,
    plays: 2170,
    artwork: '/images/tracks/nicki-nicole-malavida-dj-whim-remix.jpg',
    url: 'https://soundcloud.com/hemisdj/malavida-remix',
    summary: 'Remix de «MalaVida» de Nicki Nicole, firmado todavía como DJ Whim.',
    notes: 'Publicado en septiembre de 2020.',
  },
  {
    slug: 'wolves-remix',
    title: 'Wolves (HEMIS Remix)',
    artist: 'Selena Gomez & Marshmello',
    kind: 'Remix',
    genre: 'Jersey club',
    year: '2018',
    length: 178,
    plays: 968,
    artwork: '/images/tracks/selena-gomez-marshmello-wolves-hemis-remix.jpg',
    url: 'https://soundcloud.com/hemisdj/wolves-remix',
    summary: 'Remix jersey club de Selena Gomez y Marshmello.',
    notes: 'Publicado en enero de 2018.',
  },
  {
    slug: 'progress',
    title: 'Progress (Original Mix)',
    artist: 'DJ Whim',
    kind: 'Original',
    genre: 'Progressive house',
    year: '2017',
    length: 253,
    plays: 3305,
    artwork: '/images/tracks/dj-whim-progress-original-mix-buy-free-dl.jpg',
    url: 'https://soundcloud.com/hemisdj/progress',
    summary: 'Progressive house de 2017, en plena etapa DJ Whim.',
    notes: 'Publicado en mayo de 2017.',
    links: [{ label: 'Descarga', href: 'https://theartistunion.com/tracks/6ebf6d' }],
  },
  {
    slug: 'set-2017',
    title: 'Set 2017',
    artist: 'DJ Whim',
    kind: 'Set',
    genre: 'EDM',
    year: '2017',
    length: 3491,
    plays: 3096,
    artwork: '/images/tracks/dj-whim-set-2017.jpg',
    url: 'https://soundcloud.com/hemisdj/set-2017',
    summary: 'Casi una hora de EDM: el primer set largo que publicó.',
    notes: 'Publicado en marzo de 2017.',
  },
  {
    slug: 'creature-remix',
    title: 'Creature (DJ Whim Trap Remix)',
    artist: 'DJ BL3ND',
    kind: 'Remix',
    genre: 'Trap',
    year: '2016',
    length: 184,
    plays: 1360,
    artwork: '/images/tracks/dj-bl3nd-creature-dj-whim-trap-remix-r-w-a.jpg',
    url: 'https://soundcloud.com/hemisdj/creature-remix',
    summary: 'Trap remix de «Creature» de DJ BL3ND.',
    notes: 'Publicado en febrero de 2016.',
  },
  {
    slug: 'jungle',
    title: 'Jungle (Radio Edit)',
    artist: 'DJ Whim & Natsa',
    kind: 'Original',
    genre: 'Big room',
    year: '2014',
    length: 195,
    plays: 74497,
    artwork: '/images/tracks/dj-whim-natsa-jungle-radio-edit.jpg',
    url: 'https://soundcloud.com/hemisdj/jungle',
    summary: 'Su track más escuchado: big room con Natsa, más de setenta mil reproducciones.',
    notes: 'Publicado en noviembre de 2014.',
  },
  {
    slug: 'emotional',
    title: 'Emotional (Original Mix)',
    artist: 'DJ Whim',
    kind: 'Original',
    genre: 'Progressive house',
    year: '2014',
    length: 257,
    plays: 2178,
    artwork: '/images/tracks/dj-whim-emotional-original-mix.jpg',
    url: 'https://soundcloud.com/hemisdj/whim-emotional',
    summary: 'El primer original publicado: progressive house de 2014.',
    notes: 'Publicado en julio de 2014.',
  },
]

export const bySlug = (slug: string) => tracks.find((t) => t.slug === slug)

export const featured = tracks.filter((t) => t.featured)
export const sets = tracks.filter((t) => t.kind === 'Set')
export const releases = tracks.filter((t) => t.kind !== 'Set')

// useGrouping siempre: en es-ES, 6197 saldría sin punto y quedaría raro junto a 183.968.
export const formatCount = (n: number) => new Intl.NumberFormat('es-ES', { useGrouping: 'always' }).format(n)

/** 147 → 2:27, 3491 → 58:11 */
export const formatLength = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export const stats = [
  { value: formatCount(site.followers), label: 'seguidores en SoundCloud' },
  { value: formatCount(site.plays), label: 'reproducciones' },
  { value: String(tracks.length), label: 'tracks publicados' },
  { value: String(site.since), label: 'desde' },
]

export const timeline = [
  { period: '2014', title: 'Primeros originales', detail: '«Emotional» y «Jungle» con Natsa, publicados como DJ Whim.' },
  { period: '2016 — 2018', title: 'Remixes y trap', detail: '«Creature» de DJ BL3ND, «Progress» y «Wolves» de Selena Gomez y Marshmello.' },
  { period: '2020', title: 'MalaVida', detail: 'Remix de Nicki Nicole, todavía con el nombre anterior.' },
  { period: '2022', title: 'Singles propios', detail: '«Su Nombre», «Freely» y «Perreo» con Valy Mo en DND RECS.' },
  { period: '2023 — 2024', title: 'Sets y series', detail: 'LATIN & TECH HOUSE SET #1 y #2, LISTEN THE FUTURE #1 y #2.' },
  { period: '2025 — 2026', title: 'Remixes de club', detail: 'Skrillex, Tokischa, Young Miko y Caroline Polachek.' },
]

export const bio = {
  lede: 'HEMIS es el proyecto de Edgar, productor y DJ español. Antes firmaba como DJ Whim; el nombre cambió, la idea no: perreo, latin club y techno en la misma sesión.',
  paragraphs: [
    'Su catálogo empieza en 2014 con progressive house y big room, pasa por el trap y el jersey club de los remixes de aquellos años, y aterriza en el tech house latino que hoy define sus sets: «LATIN & TECH HOUSE SET», «LISTEN THE FUTURE» y los edits que publica entre medias.',
    'En 2022 firmó «Perreo» con Valy Mo en DND RECS y publicó «Su Nombre» y «Freely». Desde entonces compagina los originales con remixes de artistas como Skrillex, Tokischa, Young Miko, Caroline Polachek y Nicki Nicole, siempre con descarga gratuita para pinchar.',
    'En directo traduce ese catálogo a una sesión continua de latin club, tech house y techno, con los edits como hilo conductor.',
  ],
}
