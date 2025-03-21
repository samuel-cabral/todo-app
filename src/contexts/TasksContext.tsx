import React, { createContext, useContext, useState } from 'react'

import { TaskData } from '../components'

interface TasksContextData {
  tasks: TaskData[]
  completedTasksCount: number
  addTask: (description: string) => void
  toggleTaskStatus: (id: string) => void
  removeTask: (id: string) => void
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData)

interface TasksProviderProps {
  children: React.ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskData[]>([])

  const completedTasksCount = tasks.filter((task) => task.isDone).length

  function addTask(description: string) {
    const newTask: TaskData = {
      id: String(new Date().getTime()),
      description,
      isDone: false,
    }

    setTasks((prevState) => [...prevState, newTask])
  }

  function toggleTaskStatus(id: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        }
        return task
      }),
    )
  }

  function removeTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasksCount,
        addTask,
        toggleTaskStatus,
        removeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  return context
}
