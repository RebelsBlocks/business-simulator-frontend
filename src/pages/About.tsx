const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About BizSim</h1>
        <p className="text-xl text-slate-600">
          A comprehensive business simulation platform designed to help you learn and grow.
        </p>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-slate-600 mb-4">
          BizSim was created to provide a risk-free environment where entrepreneurs, students, and business professionals can experiment with different business strategies, learn from their mistakes, and develop their business acumen.
        </p>
        <p className="text-slate-600">
          We believe that the best way to learn business is through hands-on experience, and our platform makes that possible without the financial risks associated with real-world business decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Real-time business simulation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Comprehensive analytics dashboard
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Risk-free experimentation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Educational resources
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Performance tracking
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Frontend</span>
              <span className="text-sm bg-slate-100 px-2 py-1 rounded">React + TypeScript</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Styling</span>
              <span className="text-sm bg-slate-100 px-2 py-1 rounded">Tailwind CSS</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Build Tool</span>
              <span className="text-sm bg-slate-100 px-2 py-1 rounded">Vite</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Routing</span>
              <span className="text-sm bg-slate-100 px-2 py-1 rounded">React Router</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-slate-600 mb-6">
          Ready to start your business simulation journey? Create an account and begin experimenting with different business strategies today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary">
            Start Simulation
          </button>
          <button className="btn btn-secondary">
            View Documentation
          </button>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm">
        <p>© 2024 BizSim. All rights reserved.</p>
      </div>
    </div>
  )
}

export default About 