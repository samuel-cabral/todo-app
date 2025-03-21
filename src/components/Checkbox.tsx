import { Check } from 'phosphor-react-native'
import { Pressable, StyleSheet } from 'react-native'

import { theme } from '../theme'

interface CheckboxProps {
  checked: boolean
  onPress: () => void
}

export function Checkbox({ checked, onPress }: CheckboxProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.checkbox,
        checked ? styles.checked : styles.unchecked,
        pressed && !checked && styles.uncheckedHover,
        pressed && checked && styles.checkedHover,
      ]}
      onPress={onPress}
    >
      {checked && (
        <Check size={12} weight="bold" color={theme.colors['gray-100']} />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    borderWidth: 2,
    borderColor: theme.colors.blue,
    backgroundColor: 'transparent',
  },
  uncheckedHover: {
    borderColor: theme.colors['blue-dark'],
    backgroundColor: 'rgba(30, 111, 159, 0.1)', // blue-dark with opacity
  },
  checked: {
    backgroundColor: theme.colors['purple-dark'],
    borderWidth: 0,
  },
  checkedHover: {
    backgroundColor: theme.colors.purple,
  },
})
