type ClassValue = string | number | boolean | null | undefined | ClassValue[]

/**
 * Lightweight utility to conditionally join class names.
 * Drop-in for the `clsx` package — no external dependency needed.
 */
export function clsx(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 0)
    .filter(Boolean)
    .join(' ')
}
