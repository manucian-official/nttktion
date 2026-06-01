import React, { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from '../../utils/clsx'
import styles from './Toggle.module.css'

export type ToggleSize = 'sm' | 'md' | 'lg'
export type ToggleColor = 'primary' | 'success' | 'warning' | 'danger'

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label shown next to the toggle */
  label?: ReactNode
  /** Description shown below the label */
  description?: string
  /** Size preset */
  size?: ToggleSize
  /** Color when active */
  color?: ToggleColor
  /** Controlled checked state */
  isSelected?: boolean
  /** Default checked state */
  defaultSelected?: boolean
  /** Disable the toggle */
  isDisabled?: boolean
  /** Called when value changes */
  onValueChange?: (isSelected: boolean) => void
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      description,
      size = 'md',
      color = 'primary',
      isSelected,
      defaultSelected,
      isDisabled,
      onValueChange,
      onChange,
      className,
      ...props
    },
    ref,
  ) => {
    const id = useId()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.checked)
    }

    return (
      <label
        htmlFor={id}
        className={clsx(
          styles.wrapper,
          isDisabled && styles.disabled,
          className,
        )}
      >
        <span className={clsx(styles.track, styles[`size-${size}`], styles[`color-${color}`])}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            disabled={isDisabled}
            checked={isSelected}
            defaultChecked={defaultSelected}
            onChange={handleChange}
            className={styles.input}
            aria-checked={isSelected}
            {...props}
          />
          <span className={styles.thumb} aria-hidden="true" />
        </span>
        {(label ?? description) && (
          <span className={styles.content}>
            {label && <span className={styles.label}>{label}</span>}
            {description && <span className={styles.description}>{description}</span>}
          </span>
        )}
      </label>
    )
  },
)

Toggle.displayName = 'NexUI.Toggle'
