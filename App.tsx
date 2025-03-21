import {
  Inter_400Regular as InterRegular,
  Inter_700Bold as InterBold,
  useFonts,
} from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-700'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors['gray-100'],
  },
})
