import { TaskForm } from '../components/TaskForm'
import { FilterTabs } from '../components/FilterTabs'
import { TaskList } from '../components/TaskList'
import { useTaskStore } from '../stores/taskStore'

export function Home() {
  const tasks = useTaskStore((state) => state.tasks)
  const clearCompleted = useTaskStore((state) => state.clearCompleted)

  const completedCount = tasks.filter((t) => t.completed).length
  const activeCount = tasks.length - completedCount

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">タスク管理</h1>

      <TaskForm />
      <FilterTabs />
      <TaskList />

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>残り: {activeCount}件</span>
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="hover:text-red-500 transition-colors"
          >
            完了済みを削除
          </button>
        )}
      </div>
    </div>
  )
}
