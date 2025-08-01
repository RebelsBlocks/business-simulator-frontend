import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MarbleTexture from './components/MarbleTexture'
import Home from './pages/Home'
import Email from './pages/Email'
import DailyTasks from './pages/DailyTasks'
import ScoreCard from './pages/ScoreCard'
import Production from './pages/Production'
import Suppliers from './pages/Suppliers'
import Sales from './pages/Sales'
import SubmitDecision from './pages/SubmitDecision'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="min-h-screen relative">
        <MarbleTexture />
        <div className="relative z-10">
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/email" element={<Email />} />
              <Route path="/daily-tasks" element={<DailyTasks />} />
              <Route path="/score-card" element={<ScoreCard />} />
              <Route path="/production" element={<Production />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/submit-decision" element={<SubmitDecision />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
