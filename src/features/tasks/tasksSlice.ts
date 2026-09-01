import { createSelector, createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { Task } from '../../types'
import { SEED_TASKS } from '../../data/seed'
import type { RootState } from '../../store'

export type TaskFilter = 'all' | 'pending' | 'completed'

export type NewTaskInput = Omit<Task, 'id' | 'completed'>

export const FILTERS: Record<TaskFilter, string> = {
  all: 'Todas',
  pending: 'Pendientes',
  completed: 'Completadas'
}

type TasksState = {
  items: Task[]
  filter: TaskFilter
}

const initialState: TasksState = {
  items: SEED_TASKS,
  filter: 'all'
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      prepare: (input: NewTaskInput) => ({
        payload: { id: nanoid(), completed: false, ...input } as Task
      }),
      reducer: (state, action: PayloadAction<Task>) => {
        state.items.unshift(action.payload)
      }
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.items.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    setFilter: (state, action: PayloadAction<TaskFilter>) => {
      state.filter = action.payload
    }
  }
})

export const { addTask, toggleTaskStatus, deleteTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer

//Selectores
export const selectAllTasks = (state: RootState) => state.tasks.items
export const selectFilter = (state: RootState) => state.tasks.filter

export const selectTaskById = (id: string) => (state: RootState) =>
  state.tasks.items.find((task) => task.id === id)

export const selectFilteredTasks = createSelector(
  [selectAllTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case 'pending':
        return tasks.filter((task) => !task.completed)
      case 'completed':
        return tasks.filter((task) => task.completed)
      default:
        return tasks
    }
  }
)

export const selectTaskStats = createSelector([selectAllTasks], (tasks) => {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const pending = total - completed

  return { total, completed, pending }
})