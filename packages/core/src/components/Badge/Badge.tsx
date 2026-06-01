import React from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import { clsx } from '../../utils/clsx'
import styles from './Badge.module.css'

export type BadgeVariant = 'solid' | 'soft' | 'outline' | 'dot'
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  color?: BadgeColor
  size?: BadgeSize
  /** Show a dot indicator instead of text */
  isDot?: boolean
  /** Animate the dot (pulse effect) */
  isAnimated?: boolean
  children?: ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'soft',
      color = 'primary',
      size = 'md',
      isDot = false,
      isAnimated = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={clsx(
        styles.base,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        isDot && styles.dot,
        isAnimated && styles.animated,
        className,
      )}
      {...props}
    >
      {isDot ? null : children}
    </span>
  ),
)

Badge.displayName = 'NexUI.Badge'
