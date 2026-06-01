import React from 'react'
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'
import { useTheme } from '@nexui/themes'

export type NativeButtonVariant = 'solid' | 'outline' | 'ghost'
export type NativeButtonColor = 'primary' | 'secondary' | 'danger' | 'neutral'
export type NativeButtonSize = 'sm' | 'md' | 'lg'

export interface NativeButtonProps extends Omit<PressableProps, 'style'> {
  variant?: NativeButtonVariant
  color?: NativeButtonColor
  size?: NativeButtonSize
  isLoading?: boolean
  isDisabled?: boolean
  fullWidth?: boolean
  style?: StyleProp<ViewStyle>
  label: string
}

export function Button({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  style,
  label,
  ...props
}: NativeButtonProps) {
  const { tokens } = useTheme()
  const primaryColor = tokens.colors[color] ?? tokens.colors.primary

  const heights: Record<NativeButtonSize, number> = { sm: 34, md: 42, lg: 52 }
  const fontSizes: Record<NativeButtonSize, number> = { sm: 13, md: 15, lg: 17 }
  const paddings: Record<NativeButtonSize, number> = { sm: 12, md: 18, lg: 24 }

  return (
    <Pressable
      disabled={isDisabled || isLoading}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.base,
        {
          height: heights[size],
          paddingHorizontal: paddings[size],
          borderRadius: parseInt(tokens.radius.md),
          opacity: pressed ? 0.82 : 1,
          ...(fullWidth ? { alignSelf: 'stretch' } : { alignSelf: 'flex-start' }),
        },
        variant === 'solid'   && { backgroundColor: primaryColor },
        variant === 'outline' && { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: primaryColor },
        variant === 'ghost'   && { backgroundColor: 'transparent' },
        (isDisabled || isLoading) && { opacity: 0.45 },
        style as ViewStyle,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'solid' ? '#fff' : primaryColor}
        />
      ) : (
        <Text
          style={[
            styles.label,
            { fontSize: fontSizes[size] },
            variant === 'solid'   && { color: '#fff' },
            variant === 'outline' && { color: primaryColor },
            variant === 'ghost'   && { color: primaryColor },
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  label: {
    fontWeight: '600',
  },
})
