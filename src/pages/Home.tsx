import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Welcome to <span className="text-blue-600">🏢 Business Simulator</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Your comprehensive business simulation platform. Learn, experiment, and grow your business skills in a risk-free environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/daily-tasks" className="btn btn-primary text-lg px-8 py-3">
            Start Business
          </Link>
          <Link to="/email" className="btn btn-secondary text-lg px-8 py-3">
            Check Messages
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Why Choose Business Simulator?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-slate-600">
              Track your business performance with comprehensive analytics and insights.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2m0-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m6-8v-2m0-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0 2a2 2 0 100 4m0-4a2 2 0 110 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Risk-free Learning</h3>
            <p className="text-slate-600">
              Experiment with different business strategies without real financial consequences.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Responsive</h3>
            <p className="text-slate-600">
              Built with modern technologies for the best business simulation experience.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/email" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📨</div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-sm text-slate-600">Check daily updates and challenges</p>
          </Link>
          
          <Link to="/daily-tasks" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold mb-2">Daily Tasks</h3>
            <p className="text-sm text-slate-600">Complete daily business activities</p>
          </Link>
          
          <Link to="/production" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🧺</div>
            <h3 className="text-lg font-semibold mb-2">Production</h3>
            <p className="text-sm text-slate-600">Manage products and upgrades</p>
          </Link>
          
          <Link to="/sales" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold mb-2">Sales</h3>
            <p className="text-sm text-slate-600">Set prices and manage sales</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 