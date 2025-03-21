import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from './Button'
import { Input } from './Input'

interface TaskInputProps {
  onAddTask: (description: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [description, setDescription] = useState('')
  const [isFilled, setIsFilled] = useState(false)

  function handleAddTask() {
    if (description.trim() !== '') {
      onAddTask(description)
      setDescription('')
      setIsFilled(false)
    }
  }

  function handleChange(text: string) {
    setDescription(text)
    setIsFilled(text.trim() !== '')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          filled={isFilled}
          value={description}
          onChangeText={handleChange}
          keyboardAppearance="dark"
        />
      </View>
      <Button variant="create" onPress={handleAddTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  inputContainer: {
    flex: 1,
  },
})
