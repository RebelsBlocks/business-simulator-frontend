import { useState } from 'react'
import { Link } from 'react-router-dom'

const SubmitDecision = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const dailyDecisions = [
    {
      category: 'Production',
      decisions: [
        { action: 'Start production of 15 widgets', cost: 12.50, impact: '+15 widgets in 3 days' },
        { action: 'Upgrade machinery for gadgets', cost: 200, impact: '+1 quality star' },
        { action: 'Maintain all equipment', cost: 0, impact: '+20% efficiency' }
      ]
    },
    {
      category: 'Sales',
      decisions: [
        { action: 'Set widget price to €6.50/unit', cost: 0, impact: 'Expected revenue: €97.50' },
        { action: 'Set gadget price to €8.20/unit', cost: 0, impact: 'Expected revenue: €49.20' },
        { action: 'Set tool price to €12.00/unit', cost: 0, impact: 'Expected revenue: €144.00' }
      ]
    },
    {
      category: 'Suppliers',
      decisions: [
        { action: 'Order materials from Premium Supply', cost: 25.00, impact: 'Delivery in 2-3 days' },
        { action: 'Buy quality control equipment', cost: 15.00, impact: '+20% quality rate' }
      ]
    }
  ]

  const totalCost = dailyDecisions.reduce((sum, category) => 
    sum + category.decisions.reduce((catSum, decision) => catSum + decision.cost, 0), 0
  )

  const expectedRevenue = 97.50 + 49.20 + 144.00
  const expectedProfit = expectedRevenue - totalCost

  const predictions = [
    { metric: 'Revenue', value: `€${expectedRevenue.toFixed(2)}`, change: '+12.5%', type: 'positive' },
    { metric: 'Costs', value: `€${totalCost.toFixed(2)}`, change: '+8.2%', type: 'negative' },
    { metric: 'Profit', value: `€${expectedProfit.toFixed(2)}`, change: '+18.3%', type: 'positive' },
    { metric: 'Products Sold', value: '26 units', change: '+5 units', type: 'positive' }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">✅ Submit Decision</h1>
        <div className="text-sm text-slate-600">
          Day 15 - Final Review
        </div>
      </div>

      {!isSubmitted ? (
        <>
          {/* Daily Decisions Summary */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">📋 Today's Decisions</h3>
            <div className="space-y-6">
              {dailyDecisions.map((category, index) => (
                <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-slate-900 mb-3">{category.category}</h4>
                  <div className="space-y-3">
                    {category.decisions.map((decision, decisionIndex) => (
                      <div key={decisionIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">{decision.action}</div>
                          <div className="text-sm text-slate-600">{decision.impact}</div>
                        </div>
                        <div className="text-right">
                          {decision.cost > 0 && (
                            <div className="text-sm font-medium text-red-600">-€{decision.cost}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">💰 Financial Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Costs</span>
                  <span className="font-semibold text-red-600">€{totalCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Expected Revenue</span>
                  <span className="font-semibold text-green-600">€{expectedRevenue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Expected Profit</span>
                  <span className="font-semibold text-green-600">€{expectedProfit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Profit Margin</span>
                  <span className="font-semibold text-green-600">
                    {((expectedProfit / expectedRevenue) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">📊 Predictions</h3>
              <div className="space-y-3">
                {predictions.map((prediction, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-600">{prediction.metric}</span>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{prediction.value}</div>
                      <div className={`text-sm ${
                        prediction.type === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {prediction.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">⚠️ Risk Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="text-lg font-semibold text-green-800">Low Risk</div>
                <div className="text-sm text-green-600">Conservative approach</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="text-lg font-semibold text-yellow-800">Market Stable</div>
                <div className="text-sm text-yellow-600">Prices expected to hold</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-lg font-semibold text-blue-800">Efficient Production</div>
                <div className="text-sm text-blue-600">Optimal conditions</div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="card">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">Ready to Submit?</h3>
              <p className="text-slate-600">
                Your decisions will be processed and results will be available tomorrow.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/sales" className="btn btn-secondary">
                  Review Sales
                </Link>
                <button 
                  onClick={() => setIsSubmitted(true)}
                  className="btn btn-primary"
                >
                  ✅ Submit Decision
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Success State */
        <div className="card text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Decision Submitted!</h2>
          <p className="text-slate-600 mb-6">
            Your daily decisions have been successfully submitted and will be processed.
            Check back tomorrow to see the results!
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">💰</div>
                <div className="font-semibold text-green-800">€{expectedProfit.toFixed(2)}</div>
                <div className="text-sm text-green-600">Expected Profit</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-semibold text-blue-800">26 units</div>
                <div className="text-sm text-blue-600">Expected Sales</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-semibold text-purple-800">2.8</div>
                <div className="text-sm text-purple-600">Avg Quality</div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link to="/email" className="btn btn-secondary">
                Check Email
              </Link>
              <Link to="/daily-tasks" className="btn btn-primary">
                Daily Tasks
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/email" className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📨</div>
          <div className="text-sm font-medium">Email</div>
        </Link>
        <Link to="/daily-tasks" className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">⭐</div>
          <div className="text-sm font-medium">Tasks</div>
        </Link>
        <Link to="/score-card" className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-sm font-medium">Score</div>
        </Link>
        <Link to="/production" className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">🧺</div>
          <div className="text-sm font-medium">Production</div>
        </Link>
      </div>
    </div>
  )
}

export default SubmitDecision 