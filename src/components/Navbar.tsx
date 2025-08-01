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
              <Link to="/email" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/1.svg" alt="Email" className="w-5 h-5" />
                <span>Email</span>
              </Link>
              <Link to="/daily-tasks" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/2.svg" alt="Tasks" className="w-5 h-5" />
                <span>Tasks</span>
              </Link>
              <Link to="/production" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/3.svg" alt="Production" className="w-5 h-5" />
                <span>Production</span>
              </Link>
              <Link to="/sales" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/4.svg" alt="Sales" className="w-5 h-5" />
                <span>Sales</span>
              </Link>
              <Link to="/suppliers" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/5.svg" alt="Suppliers" className="w-5 h-5" />
                <span>Suppliers</span>
              </Link>
              <Link to="/submit-decision" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/6.svg" alt="Submit Decision" className="w-5 h-5" />
                <span>Submit Decisions</span>
              </Link>
              <Link to="/score-card" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-2">
                <img src="/7.svg" alt="Score" className="w-5 h-5" />
                <span>Score</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-md border border-gray-300 hover:border-blue-600 flex items-center space-x-2"
              >
                <img src="/9.svg" alt="Logout" className="w-5 h-5" />
                <span>Logout</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthenticated(true)}
                className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-md border border-gray-300 hover:border-blue-600 flex items-center space-x-2"
              >
                <img src="/8.svg" alt="Login" className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar 
