import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 mb-4">
        <div className="max-w-lg mx-auto flex gap-4">
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            ホーム
          </Link>
          <Link to="/about" className="text-blue-500 hover:underline font-medium">
            About
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
