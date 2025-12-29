import { useState } from 'react'
import { useTaskStore } from '../stores/taskStore'
import type { Task } from '../types/task'

type TaskItemProps = {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)

  const toggleTask = useTaskStore((state) => state.toggleTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)
  const editTask = useTaskStore((state) => state.editTask)

  const handleSave = () => {
    if (editTitle.trim()) {
      editTask(task.id, editTitle.trim())
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setEditTitle(task.title)
      setIsEditing(false)
    }
  }

  return (
    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 accent-blue-500"
      />

      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 px-2 py-1 border rounded"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        className="px-2 py-1 text-red-500 hover:text-red-700"
      >
        削除
      </button>
    </li>
  )
}
