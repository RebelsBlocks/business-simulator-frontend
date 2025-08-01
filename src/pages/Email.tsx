import { Link } from 'react-router-dom'

const Email = () => {
  const emails = [
    {
      id: 1,
      type: 'daily',
      title: 'Daily Update - Day 15',
      content: 'Your business is doing well! Check your daily tasks and market conditions.',
      time: '9:00 AM',
      unread: true,
      link: '/daily-tasks'
    },
    {
      id: 2,
      type: 'event',
      title: '⚠️ Material Price Increase',
      content: 'Supplier announced 15% price increase starting next week.',
      time: '8:30 AM',
      unread: true,
      link: '/suppliers'
    },
    {
      id: 3,
      type: 'challenge',
      title: '🎯 Challenge: Sell 10kg Products Today',
      content: 'Special bonus if you sell 10kg of products by end of day!',
      time: '8:00 AM',
      unread: false,
      link: '/sales'
    },
    {
      id: 4,
      type: 'daily',
      title: 'Daily Update - Day 14',
      content: 'Yesterday\'s sales were good. Keep up the good work!',
      time: 'Yesterday',
      unread: false,
      link: '/score-card'
    }
  ]

  const getEmailIcon = (type: string) => {
    switch (type) {
      case 'daily': return '📨'
      case 'event': return '⚠️'
      case 'challenge': return '🎯'
      default: return '📧'
    }
  }

  const getEmailColor = (type: string) => {
    switch (type) {
      case 'daily': return 'border-blue-200 bg-blue-50'
      case 'event': return 'border-orange-200 bg-orange-50'
      case 'challenge': return 'border-green-200 bg-green-50'
      default: return 'border-slate-200 bg-slate-50'
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-900">📨 Email Inbox</h1>
        <div className="text-sm text-slate-500">
          {emails.filter(e => e.unread).length} unread messages
        </div>
      </div>

      <div className="space-y-4">
        {emails.map((email) => (
          <Link 
            key={email.id} 
            to={email.link}
            className={`block p-4 rounded-lg border-2 ${getEmailColor(email.type)} hover:shadow-md transition-all ${
              email.unread ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="text-2xl">
                {getEmailIcon(email.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold ${email.unread ? 'text-slate-900' : 'text-slate-700'}`}>
                    {email.title}
                  </h3>
                  <span className="text-sm text-slate-500">{email.time}</span>
                </div>
                <p className="text-slate-600 mb-2">{email.content}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {email.type === 'daily' ? 'Daily Update' : 
                     email.type === 'event' ? 'Event' : 'Challenge'}
                  </span>
                  {email.unread && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg">
        <h3 className="font-semibold text-slate-900 mb-2">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/daily-tasks" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-sm font-medium">Daily Tasks</div>
          </Link>
          <Link to="/sales" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <div className="text-2xl mb-1">💰</div>
            <div className="text-sm font-medium">Sales</div>
          </Link>
          <Link to="/suppliers" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <div className="text-2xl mb-1">🚚</div>
            <div className="text-sm font-medium">Suppliers</div>
          </Link>
          <Link to="/score-card" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-sm font-medium">Score Card</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Email 