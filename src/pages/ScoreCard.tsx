import { useState } from 'react'

const ScoreCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today')

  const stats = [
    {
      name: 'Revenue',
      value: '€2,450',
      change: '+12.5%',
      changeType: 'positive',
      icon: '💰'
    },
    {
      name: 'Costs',
      value: '€1,280',
      change: '+8.2%',
      changeType: 'negative',
      icon: '💸'
    },
    {
      name: 'Profit',
      value: '€1,170',
      change: '+18.3%',
      changeType: 'positive',
      icon: '📈'
    },
    {
      name: 'Products Sold',
      value: '45 units',
      change: '+5 units',
      changeType: 'positive',
      icon: '📦'
    }
  ]

  const customerSatisfaction = [
    { rating: 5, count: 12, percentage: 60 },
    { rating: 4, count: 6, percentage: 30 },
    { rating: 3, count: 2, percentage: 10 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 }
  ]

  const ranking = [
    { position: 1, name: 'Premium Industries', score: 2850, isPlayer: false },
    { position: 2, name: 'Your Business', score: 2450, isPlayer: true },
    { position: 3, name: 'Quality Corp', score: 2200, isPlayer: false },
    { position: 4, name: 'Innovation Ltd', score: 1950, isPlayer: false },
    { position: 5, name: 'Startup Inc', score: 1800, isPlayer: false }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">📊 Score Card</h1>
        <div className="flex space-x-2">
          {['today', 'week', 'month'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
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
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div className={`text-sm font-medium mt-2 ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Satisfaction */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">😊 Customer Satisfaction</h3>
          <div className="space-y-3">
            {customerSatisfaction.map((item) => (
              <div key={item.rating} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-16">
                  <span className="text-sm">{item.rating}</span>
                  <span className="text-yellow-500">⭐</span>
                </div>
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-sm text-slate-600 w-12 text-right">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-800">Average Rating</span>
              <span className="text-2xl font-bold text-green-600">4.5 ⭐</span>
            </div>
          </div>
        </div>

        {/* Ranking */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">🏆 Leaderboard</h3>
          <div className="space-y-3">
            {ranking.map((player) => (
              <div
                key={player.position}
                className={`p-3 rounded-lg ${
                  player.isPlayer ? 'bg-blue-50 border-2 border-blue-200' : 'bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      player.position === 1 ? 'bg-yellow-500 text-white' :
                      player.position === 2 ? 'bg-slate-400 text-white' :
                      player.position === 3 ? 'bg-orange-500 text-white' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {player.position}
                    </div>
                    <div>
                      <div className={`font-semibold ${player.isPlayer ? 'text-blue-800' : 'text-slate-900'}`}>
                        {player.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        Score: {player.score}
                      </div>
                    </div>
                  </div>
                  {player.isPlayer && (
                    <span className="text-blue-600 font-semibold">YOU</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">📈 Detailed Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">🏭</div>
            <div className="text-2xl font-bold text-slate-900">12</div>
            <div className="text-sm text-slate-600">Active Products</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-slate-900">2.8</div>
            <div className="text-sm text-slate-600">Avg Quality</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-slate-900">85%</div>
            <div className="text-sm text-slate-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-sm font-medium">View Reports</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">🏆</div>
          <div className="text-sm font-medium">Leaderboard</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📈</div>
          <div className="text-sm font-medium">Analytics</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">⚙️</div>
          <div className="text-sm font-medium">Settings</div>
        </button>
      </div>
    </div>
  )
}

export default ScoreCard 