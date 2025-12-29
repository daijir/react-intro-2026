import { useTaskStore } from '../stores/taskStore'
import { TaskItem } from './TaskItem'

export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)
  const filter = useTaskStore((state) => state.filter)

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  if (filteredTasks.length === 0) {
    return (
      <p className="text-center text-gray-500 py-8">
        タスクがありません
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
