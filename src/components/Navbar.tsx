import { Link } from 'react-router-dom'

interface NavbarProps {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const Navbar = ({ isAuthenticated, setIsAuthenticated }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              <img 
                src="/business-simulator-black.png" 
                alt="Business Simulator Logo" 
                className="h-8 w-auto"
              />
              <span>Business Simulator</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/email" className="text-gray-700 hover:text-blue-600 transition-colors">
                📨 Email
              </Link>
              <Link to="/daily-tasks" className="text-gray-700 hover:text-blue-600 transition-colors">
                ⭐ Tasks
              </Link>
              <Link to="/score-card" className="text-gray-700 hover:text-blue-600 transition-colors">
                📊 Score
              </Link>
              <Link to="/production" className="text-gray-700 hover:text-blue-600 transition-colors">
                🧺 Production
              </Link>
              <Link to="/suppliers" className="text-gray-700 hover:text-blue-600 transition-colors">
                🚚 Suppliers
              </Link>
              <Link to="/sales" className="text-gray-700 hover:text-blue-600 transition-colors">
                💰 Sales
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/submit-decision" className="btn btn-primary">
              ✅ Submit Decision
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="btn btn-secondary"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsAuthenticated(true)}
                className="btn btn-primary"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 