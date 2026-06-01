import React from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { clsx } from '../../utils/clsx'
import styles from './Input.module.css'

export type InputVariant = 'outlined' | 'filled' | 'underlined'
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visual variant */
  variant?: InputVariant
  /** Size preset */
  size?: InputSize
  /** Field label */
  label?: string
  /** Helper / description text */
  description?: string
  /** Error message — also sets error state */
  errorMessage?: string
  /** Icon/element on the left side */
  startContent?: ReactNode
  /** Icon/element on the right side */
  endContent?: ReactNode
  /** Disable the input */
  isDisabled?: boolean
  /** Mark field as required */
  isRequired?: boolean
  /** Fill container width */
  fullWidth?: boolean
  /** Controlled value */
  value?: string
  /** Change handler */
  onValueChange?: (value: string) => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      label,
      description,
      errorMessage,
      startContent,
      endContent,
      isDisabled,
      isRequired,
      fullWidth,
      onValueChange,
      onChange,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? `nexui-input-${Math.random().toString(36).slice(2, 7)}`
    const hasError = Boolean(errorMessage)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div
        className={clsx(
          styles.wrapper,
          fullWidth && styles.fullWidth,
          className,
        )}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {isRequired && <span className={styles.required} aria-hidden="true"> *</span>}
          </label>
        )}
        <div
          className={clsx(
            styles.inputWrap,
            styles[`variant-${variant}`],
            styles[`size-${size}`],
            hasError && styles.error,
            isDisabled && styles.disabled,
          )}
        >
          {startContent && (
            <span className={styles.startContent} aria-hidden="true">{startContent}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={isDisabled}
            required={isRequired}
            aria-invalid={hasError}
            aria-describedby={
              [description && `${inputId}-desc`, errorMessage && `${inputId}-error`]
                .filter(Boolean)
                .join(' ') || undefined
            }
            onChange={handleChange}
            className={styles.input}
            {...props}
          />
          {endContent && (
            <span className={styles.endContent} aria-hidden="true">{endContent}</span>
          )}
        </div>
        {description && !errorMessage && (
          <p id={`${inputId}-desc`} className={styles.description}>{description}</p>
        )}
        {errorMessage && (
          <p id={`${inputId}-error`} className={styles.errorText} role="alert">{errorMessage}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'NexUI.Input'
