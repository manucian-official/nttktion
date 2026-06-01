import React from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useTheme } from '@nexui/themes'
import { clsx } from '../../utils/clsx'
import styles from './Button.module.css'

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link'
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonVariant
  /** Color scheme */
  color?: ButtonColor
  /** Size preset */
  size?: ButtonSize
  /** Show loading spinner and disable interaction */
  isLoading?: boolean
  /** Disable the button */
  isDisabled?: boolean
  /** Render full width */
  fullWidth?: boolean
  /** Icon to show before the label */
  startIcon?: ReactNode
  /** Icon to show after the label */
  endIcon?: ReactNode
  /** Override border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  children?: ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      radius,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { tokens } = useTheme()

    return (
      <button
        ref={ref}
        disabled={isDisabled || isLoading}
        aria-busy={isLoading}
        className={clsx(
          styles.base,
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          styles[`size-${size}`],
          radius && styles[`radius-${radius}`],
          fullWidth && styles.fullWidth,
          isLoading && styles.loading,
          className,
        )}
        style={
          {
            '--btn-primary': tokens.colors[color] ?? tokens.colors.primary,
          } as React.CSSProperties
        }
        {...props}
      >
        {isLoading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}
        {!isLoading && startIcon && (
          <span className={styles.icon}>{startIcon}</span>
        )}
        <span className={styles.label}>{children}</span>
        {!isLoading && endIcon && (
          <span className={styles.icon}>{endIcon}</span>
        )}
      </button>
    )
  },
)

Button.displayName = 'NexUI.Button'
