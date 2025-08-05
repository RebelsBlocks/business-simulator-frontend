import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MarbleTexture from './components/MarbleTexture'
import Home from './pages/Home'
import Email from './pages/Email'
import Dashboard from './pages/Dashboard'
import Production from './pages/Production'
import Suppliers from './pages/Suppliers'
import Sales from './pages/Sales'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <div className="min-h-screen relative" style={{ colorScheme: 'light', backgroundColor: '#fafaf9' } as React.CSSProperties}>
        <MarbleTexture />
        <div className="relative z-10" style={{ colorScheme: 'light' }}>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/email" element={<Email />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/production" element={<Production />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/sales" element={<Sales />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
