import { cx } from '@/lib/cx'

// shadcn espera un helper `cn` en `@/lib/utils`. Reutilizamos el que ya tiene el
// proyecto en lugar de añadir clsx y tailwind-merge solo para concatenar clases.
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return cx(...inputs)
}
