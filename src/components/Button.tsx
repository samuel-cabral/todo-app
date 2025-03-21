import { Plus, Trash } from 'phosphor-react-native'
import { Pressable, StyleSheet, View } from 'react-native'

import { theme } from '../theme'

type ButtonVariant = 'create' | 'delete'

interface ButtonProps {
  variant: ButtonVariant
  onPress: () => void
}

export function Button({ variant, onPress }: ButtonProps) {
  const isCreate = variant === 'create'
  const icon = isCreate ? (
    <View style={styles.circleIcon}>
      <Plus size={16} weight="bold" color={theme.colors['gray-100']} />
    </View>
  ) : (
    <Trash size={14} weight="bold" color={theme.colors['gray-300']} />
  )

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isCreate ? styles.createButton : styles.deleteButton,
        pressed && isCreate && styles.createButtonHover,
        pressed && !isCreate && styles.deleteButtonHover,
      ]}
      onPress={onPress}
    >
      {icon}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    backgroundColor: theme.colors['blue-dark'],
  },
  createButtonHover: {
    backgroundColor: theme.colors.blue,
  },
  deleteButton: {
    backgroundColor: 'transparent',
  },
  deleteButtonHover: {
    backgroundColor: theme.colors['gray-400'],
  },
  circleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors['gray-100'],
    alignItems: 'center',
    justifyContent: 'center',
  },
})
