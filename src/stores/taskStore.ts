import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Task, FilterType } from '../types/task'

type TaskStore = {
  tasks: Task[]
  filter: FilterType
  addTask: (title: string) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (id: string, title: string) => void
  setFilter: (filter: FilterType) => void
  clearCompleted: () => void
}

export const useTaskStore = create(
  persist<TaskStore>(
    (set) => ({
      tasks: [],
      filter: 'all',

      addTask: (title) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              createdAt: new Date()
            }
          ]
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id)
        })),

      editTask: (id, title) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title } : task
          )
        })),

      setFilter: (filter) => set({ filter }),

      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter((task) => !task.completed)
        }))
    }),
    {
      name: 'task-storage'
    }
  )
)
