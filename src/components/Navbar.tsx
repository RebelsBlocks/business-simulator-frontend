import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface NavbarProps {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const Navbar = ({ isAuthenticated, setIsAuthenticated }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navigationItems = [
    { to: "/dashboard", icon: "/7.svg", label: "Dashboard" },
    { to: "/email", icon: "/1.svg", label: "Email" },
    { to: "/production", icon: "/3.svg", label: "Production" },
    { to: "/sales", icon: "/4.svg", label: "Sales" },
    { to: "/suppliers", icon: "/5.svg", label: "Suppliers" }
  ]

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/')
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
    navigate('/dashboard')
  }

  return (
    <nav className="glass-effect shadow-lg border-b border-stone-200/30 sticky top-0 z-50 bg-gradient-to-r from-stone-50 via-stone-100 to-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center transition-all duration-300"
            >
              <img 
                src="/business-simulator-black.png" 
                alt="Business Simulator" 
                className="h-16 w-auto transition-all duration-300 drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 transition-all duration-200 backdrop-blur-sm border border-transparent hover:border-stone-300/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className="w-5 h-5 mr-2 transition-all duration-200 group-hover:scale-110 drop-shadow-sm" 
                    />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            
            {/* Mobile Menu Button */}
            {isAuthenticated && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-200/50 transition-all duration-200 border border-transparent hover:border-stone-300/50"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}

            {/* Auth Button */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="btn-clean inline-flex items-center px-4 py-2 text-sm font-semibold"
              >
                <img src="/9.svg" alt="Logout" className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="btn-clean inline-flex items-center px-4 py-2 text-sm font-semibold"
              >
                <img src="/8.svg" alt="Login" className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isAuthenticated && isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200/50">
            <div className="pt-2 pb-3 space-y-1 bg-stone-50/95 backdrop-blur-md">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center px-4 py-3 text-base font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-200/70 transition-all duration-200 border-l-4 border-transparent hover:border-stone-400 mx-2 rounded-r-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-6 h-6 mr-3 transition-all duration-200 group-hover:scale-110 drop-shadow-sm" 
                  />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 
