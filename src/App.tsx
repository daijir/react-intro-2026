import { useState } from 'react'
import './App.css'

// 各Todoの型を定義
type Todo = {
  id: number       // 一意の識別子
  text: string     // タスクのテキスト
  completed: boolean // 完了状態
}

function TodoList() {
  // <Todo[]> で「Todoオブジェクトの配列」型を指定
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const addTodo = () => {
    if (input.trim()) {
      setTodos(prev => [
        ...prev,
        {
          // Date.now() は現在時刻のミリ秒を返す（ユニークなIDとして使用）
          id: Date.now(),
          text: input,
          completed: false
        }
      ])
      setInput('')
    }
  }

  // 完了状態を切り替える関数
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      // map で配列を変換（該当する要素だけ変更）
      prev.map(todo =>
        // 該当IDなら completed を反転、それ以外はそのまま
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // 削除する関数
  const removeTodo = (id: number) => {
    // filter で該当ID以外の要素だけを残す
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="新しいタスク"
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          // key には index ではなく一意のIDを使う（ベストプラクティス）
          <li key={todo.id}>
            {/* label で囲むとテキストクリックでもチェックが切り替わる */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* チェックボックスで完了状態を視覚的に表現 */}
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange でチェック変更時に toggleTodo を呼び出す
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{
                // 完了時は取り消し線とグレー色で視覚的に区別
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : 'inherit'
              }}>
                {todo.text}
              </span>
            </label>
            <button onClick={() => removeTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return <TodoList />
}