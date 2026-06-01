import React from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import { clsx } from '../../utils/clsx'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: 'elevated' | 'outlined' | 'filled' | 'glass'
  /** Border radius size */
  radius?: 'sm' | 'md' | 'lg' | 'xl'
  /** Remove default padding */
  noPadding?: boolean
  /** Hoverable state */
  isHoverable?: boolean
  /** Pressable / clickable state */
  isPressable?: boolean
  /** Full width */
  fullWidth?: boolean
  children?: ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      radius = 'lg',
      noPadding = false,
      isHoverable = false,
      isPressable = false,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role={isPressable ? 'button' : undefined}
      tabIndex={isPressable ? 0 : undefined}
      className={clsx(
        styles.base,
        styles[`variant-${variant}`],
        styles[`radius-${radius}`],
        !noPadding && styles.padding,
        isHoverable && styles.hoverable,
        isPressable && styles.pressable,
        fullWidth && styles.fullWidth,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)

Card.displayName = 'NexUI.Card'

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.header, className)} {...props} />
)
CardHeader.displayName = 'NexUI.CardHeader'

export const CardBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.body, className)} {...props} />
)
CardBody.displayName = 'NexUI.CardBody'

export const CardFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx(styles.footer, className)} {...props} />
)
CardFooter.displayName = 'NexUI.CardFooter'
