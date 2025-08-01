import { useState } from 'react'

const DailyTasks = () => {
  const [harvested, setHarvested] = useState(false)
  const [claimedBonus, setClaimedBonus] = useState(false)

  const dailyTasks = [
    {
      id: 1,
      title: '📦 Process Inventory',
      description: 'Click to process all ready products',
      completed: harvested,
      action: () => setHarvested(true),
      reward: '+50 coins'
    },
    {
      id: 2,
      title: '🎁 Claim Daily Bonus',
      description: 'Collect your daily login bonus',
      completed: claimedBonus,
      action: () => setClaimedBonus(true),
      reward: '+100 coins'
    },
    {
      id: 3,
      title: '🏭 Start Production',
      description: 'Begin manufacturing new products',
      completed: false,
      action: () => {},
      reward: '+25 coins'
    },
    {
      id: 4,
      title: '📊 Check Analytics',
      description: 'Review your business metrics',
      completed: false,
      action: () => {},
      reward: '+30 coins'
    },
    {
      id: 5,
      title: '📋 Review Orders',
      description: 'Check pending customer orders',
      completed: false,
      action: () => {},
      reward: '+15 coins'
    }
  ]

  const challenges = [
    {
      id: 1,
      title: '🎯 Sell 10kg Products Today',
      description: 'Special challenge with bonus rewards',
      progress: 3,
      target: 10,
      reward: '+200 coins'
    },
    {
      id: 2,
      title: '⭐ Achieve 3-Star Quality',
      description: 'Upgrade your production equipment',
      progress: 1,
      target: 3,
      reward: '+150 coins'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">⭐ Daily Tasks</h1>
      </div>

      {/* Daily Tasks */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">📋 Today's Tasks</h3>
        <div className="space-y-3">
          {dailyTasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                task.completed
                  ? 'border-green-200 bg-green-50'
                  : 'border-slate-200 bg-white hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className={`font-semibold ${task.completed ? 'text-green-800' : 'text-slate-900'}`}>
                    {task.title}
                  </h4>
                  <p className={`text-sm ${task.completed ? 'text-green-600' : 'text-slate-600'}`}>
                    {task.description}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-green-600">{task.reward}</span>
                  {task.completed ? (
                    <span className="text-green-500 text-xl">✅</span>
                  ) : (
                    <button
                      onClick={task.action}
                      className="btn btn-primary text-sm px-3 py-1"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">🎯 Daily Challenges</h3>
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900">{challenge.title}</h4>
                <span className="text-sm font-medium text-green-600">{challenge.reward}</span>
              </div>
              <p className="text-sm text-slate-600 mb-3">{challenge.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{challenge.progress}/{challenge.target}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📦</div>
          <div className="text-sm font-medium">Process All</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">🏭</div>
          <div className="text-sm font-medium">Start Production</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-sm font-medium">Check Analytics</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📋</div>
          <div className="text-sm font-medium">Review Orders</div>
        </button>
      </div>
    </div>
  )
}

export default DailyTasks 
