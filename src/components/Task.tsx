import { StyleSheet, Text, View } from 'react-native'

import { theme } from '../theme'
import { Button } from './Button'
import { Checkbox } from './Checkbox'

export interface TaskData {
  id: string
  description: string
  isDone: boolean
}

interface TaskProps {
  data: TaskData
  onToggleStatus: (id: string) => void
  onRemove: (id: string) => void
}

export function Task({ data, onToggleStatus, onRemove }: TaskProps) {
  function handleToggleStatus() {
    onToggleStatus(data.id)
  }

  function handleRemove() {
    onRemove(data.id)
  }

  return (
    <View style={styles.container}>
      <Checkbox checked={data.isDone} onPress={handleToggleStatus} />

      <Text
        style={[styles.text, data.isDone && styles.textDone]}
        numberOfLines={2}
      >
        {data.description}
      </Text>

      <Button variant="delete" onPress={handleRemove} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors['gray-500'],
    borderRadius: 8,
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors['gray-400'],
  },
  text: {
    flex: 1,
    color: theme.colors['gray-100'],
    fontSize: theme.typography.fontSize.md,
    fontFamily: theme.typography.fontFamily.regular,
    marginLeft: 8,
    marginRight: 8,
  },
  textDone: {
    color: theme.colors['gray-300'],
    textDecorationLine: 'line-through',
  },
})
