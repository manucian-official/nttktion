import React, { createContext, useContext, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { createTheme, defaultTheme } from './tokens'
import type { ThemeTokens, DeepPartial } from './tokens'

interface ThemeContextValue {
  tokens: ThemeTokens
  mode: 'dark' | 'light'
}

const ThemeContext = createContext<ThemeContextValue>({
  tokens: defaultTheme,
  mode: 'dark',
})

export interface NexProviderProps {
  /** Theme mode */
  theme?: 'dark' | 'light' | 'system'
  /** Custom design token overrides */
  tokens?: DeepPartial<ThemeTokens>
  /** CSS class applied to the root element */
  className?: string
  children: ReactNode
}

/**
 * NexProvider — wrap your app with this to enable theming.
 *
 * @example
 * <NexProvider theme="dark" tokens={{ colors: { primary: '#ff6b6b' } }}>
 *   <App />
 * </NexProvider>
 */
export function NexProvider({ theme = 'dark', tokens, className, children }: NexProviderProps) {
  const resolvedMode: 'dark' | 'light' =
    theme === 'system'
      ? (typeof window !== 'undefined' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      : theme

  const resolvedTokens = useMemo(() => createTheme(tokens), [tokens])

  useEffect(() => {
    const root = document.documentElement
    // Inject CSS custom properties
    const t = resolvedTokens
    const vars: Record<string, string> = {
      '--nexui-color-primary':    t.colors.primary,
      '--nexui-color-secondary':  t.colors.secondary,
      '--nexui-color-success':    t.colors.success,
      '--nexui-color-warning':    t.colors.warning,
      '--nexui-color-danger':     t.colors.danger,
      '--nexui-color-neutral':    t.colors.neutral,
      '--nexui-color-bg':         t.colors.background,
      '--nexui-color-surface':    t.colors.surface,
      '--nexui-color-border':     t.colors.border,
      '--nexui-color-text':       t.colors.text,
      '--nexui-color-text-muted': t.colors.textMuted,
      '--nexui-radius-sm':        t.radius.sm,
      '--nexui-radius-md':        t.radius.md,
      '--nexui-radius-lg':        t.radius.lg,
      '--nexui-radius-xl':        t.radius.xl,
      '--nexui-font-sans':        t.fonts.sans,
      '--nexui-font-serif':       t.fonts.serif,
      '--nexui-font-mono':        t.fonts.mono,
    }
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
    root.setAttribute('data-nexui-theme', resolvedMode)
  }, [resolvedTokens, resolvedMode])

  const value = useMemo<ThemeContextValue>(
    () => ({ tokens: resolvedTokens, mode: resolvedMode }),
    [resolvedTokens, resolvedMode],
  )

  return (
    <ThemeContext.Provider value={value}>
      <div data-nexui-theme={resolvedMode} className={className}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext)
}
