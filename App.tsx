import {
  Inter_400Regular as InterRegular,
  Inter_700Bold as InterBold,
  useFonts,
} from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { TasksProvider } from './src/contexts/TasksContext'
import { Home } from './src/screens/Home'
import { theme } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular,
    InterBold,
  })

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
  }

  return (
    <TasksProvider>
      <SafeAreaView style={styles.container}>
        <Home />
        <StatusBar style="light" />
      </SafeAreaView>
    </TasksProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-700'],
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors['gray-700'],
  },
  loadingText: {
    color: theme.colors['gray-100'],
    fontSize: 16,
  },
})
