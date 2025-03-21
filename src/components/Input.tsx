import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { theme } from '../theme'

interface InputProps extends TextInputProps {
  filled?: boolean
}

export function Input({ filled = false, ...rest }: InputProps) {
  return (
    <TextInput
      style={[styles.input, filled && styles.filled]}
      placeholderTextColor={theme.colors['gray-300']}
      placeholder="Adicione uma nova tarefa"
      cursorColor={theme.colors.blue}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    backgroundColor: theme.colors['gray-500'],
    borderRadius: 6,
    color: theme.colors['gray-100'],
    padding: 16,
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.md,
  },
  filled: {
    borderWidth: 1,
    borderColor: theme.colors['purple-dark'],
  },
})
