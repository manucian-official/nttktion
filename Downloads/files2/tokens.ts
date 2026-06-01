export type ColorScale = {
  50: string; 100: string; 200: string; 300: string
  400: string; 500: string; 600: string; 700: string
  800: string; 900: string
}

export interface ThemeTokens {
  colors: {
    primary:   string
    secondary: string
    success:   string
    warning:   string
    danger:    string
    neutral:   string
    background: string
    surface:   string
    border:    string
    text:      string
    textMuted: string
  }
  radius: { sm: string; md: string; lg: string; xl: string; full: string }
  spacing: { xs: string; sm: string; md: string; lg: string; xl: string }
  fonts: { sans: string; serif: string; mono: string }
  shadows: { sm: string; md: string; lg: string }
  transitions: { fast: string; base: string; slow: string }
}

const baseTokens: ThemeTokens = {
  colors: {
    primary:    '#7c6dfa',
    secondary:  '#3ecfb2',
    success:    '#22c55e',
    warning:    '#f59e0b',
    danger:     '#f2694b',
    neutral:    '#6b7280',
    background: '#0a0a0f',
    surface:    '#18181f',
    border:     'rgba(255,255,255,0.08)',
    text:       '#f0efe8',
    textMuted:  '#888794',
  },
  radius: { sm: '6px', md: '8px', lg: '12px', xl: '16px', full: '9999px' },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '40px' },
  fonts: {
    sans:  '"Outfit", system-ui, sans-serif',
    serif: '"DM Serif Display", Georgia, serif',
    mono:  '"DM Mono", "Fira Code", monospace',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.4)',
    md: '0 4px 12px rgba(0,0,0,0.5)',
    lg: '0 12px 32px rgba(0,0,0,0.6)',
  },
  transitions: { fast: '0.1s ease', base: '0.2s ease', slow: '0.35s ease' },
}

export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }

/**
 * Merge user overrides with the base tokens and return a complete ThemeTokens object.
 *
 * @example
 * const myTheme = createTheme({
 *   colors: { primary: '#ff6b6b' },
 *   radius: { lg: '20px' },
 * })
 */
export function createTheme(overrides?: DeepPartial<ThemeTokens>): ThemeTokens {
  if (!overrides) return baseTokens
  return {
    ...baseTokens,
    ...overrides,
    colors:      { ...baseTokens.colors,      ...overrides.colors },
    radius:      { ...baseTokens.radius,      ...overrides.radius },
    spacing:     { ...baseTokens.spacing,     ...overrides.spacing },
    fonts:       { ...baseTokens.fonts,       ...overrides.fonts },
    shadows:     { ...baseTokens.shadows,     ...overrides.shadows },
    transitions: { ...baseTokens.transitions, ...overrides.transitions },
  }
}

export const defaultTheme = createTheme()
export const lightTheme = createTheme({
  colors: {
    background: '#ffffff',
    surface:    '#f8f8fc',
    border:     'rgba(0,0,0,0.08)',
    text:       '#111118',
    textMuted:  '#6b6a7a',
  },
})
