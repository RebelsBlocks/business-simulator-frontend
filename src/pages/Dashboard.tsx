import { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { name: 'Total Revenue', value: '$45,231', change: '+20.1%', changeType: 'positive' },
    { name: 'Active Users', value: '2,350', change: '+180.1%', changeType: 'positive' },
    { name: 'Sales', value: '12,234', change: '+19%', changeType: 'positive' },
    { name: 'Pending Orders', value: '573', change: '+201', changeType: 'negative' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.name}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-500">Chart will be implemented here</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New order received', time: '2 minutes ago', type: 'order' },
              { action: 'Payment processed', time: '5 minutes ago', type: 'payment' },
              { action: 'User registration', time: '10 minutes ago', type: 'user' },
              { action: 'Inventory updated', time: '15 minutes ago', type: 'inventory' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'order' ? 'bg-blue-500' :
                  activity.type === 'payment' ? 'bg-green-500' :
                  activity.type === 'user' ? 'bg-purple-500' : 'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Add Product', icon: '📦' },
            { name: 'Process Order', icon: '🛒' },
            { name: 'View Reports', icon: '📊' },
            { name: 'Settings', icon: '⚙️' },
          ].map((action) => (
            <button
              key={action.name}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-center"
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className="text-sm font-medium text-slate-900">{action.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 