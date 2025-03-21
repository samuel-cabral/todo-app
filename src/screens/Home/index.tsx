import { ClipboardText } from 'phosphor-react-native'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Task, TaskInput } from '../../components'
import { useTasks } from '../../contexts/TasksContext'
import { theme } from '../../theme'

export function Home() {
  const { tasks, completedTasksCount, addTask, toggleTaskStatus, removeTask } =
    useTasks()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={[styles.logoText, { color: theme.colors.blue }]}>
            to
          </Text>
          <Text style={[styles.logoText, { color: theme.colors.purple }]}>
            do
          </Text>
        </View>
      </View>

      <View style={styles.form}>
        <TaskInput onAddTask={addTask} />
      </View>

      <View style={styles.content}>
        <View style={styles.taskInfo}>
          <View style={styles.taskCounter}>
            <Text style={styles.taskCounterLabelCreated}>Criadas</Text>
            <View style={styles.taskCounterBadge}>
              <Text style={styles.taskCounterValue}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.taskCounter}>
            <Text style={styles.taskCounterLabelCompleted}>Concluídas</Text>
            <View style={styles.taskCounterBadge}>
              <Text style={styles.taskCounterValue}>{completedTasksCount}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Task
                data={item}
                onToggleStatus={toggleTaskStatus}
                onRemove={removeTask}
              />
            )}
            style={styles.tasksList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <ClipboardText size={56} color={theme.colors['gray-400']} />
            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-700'],
  },
  header: {
    backgroundColor: theme.colors['gray-700'],
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: 36,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: -26,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  tasksList: {
    marginTop: 20,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskCounterLabelCreated: {
    color: theme.colors.blue,
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.md,
  },
  taskCounterLabelCompleted: {
    color: theme.colors.purple,
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.md,
  },
  taskCounterBadge: {
    backgroundColor: theme.colors['gray-400'],
    borderRadius: 999,
    paddingHorizontal: 8,
    marginLeft: 8,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCounterValue: {
    color: theme.colors['gray-200'],
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.sm,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors['gray-400'],
    marginBottom: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    color: theme.colors['gray-300'],
    fontFamily: theme.typography.fontFamily.bold,
    fontSize: theme.typography.fontSize.md,
    marginTop: 16,
  },
  emptyText: {
    color: theme.colors['gray-300'],
    fontFamily: theme.typography.fontFamily.regular,
    fontSize: theme.typography.fontSize.md,
  },
})
