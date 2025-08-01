import { useState } from 'react'

const Sales = () => {
  const [selectedProduct, setSelectedProduct] = useState('widgets')

  const products = [
    {
      id: 'widgets',
      name: 'Widgets',
      icon: '⚙️',
      available: 15,
      price: 6.50,
      demand: 'High',
      forecast: 12,
      cost: 2.50
    },
    {
      id: 'gadgets',
      name: 'Gadgets',
      icon: '📱',
      available: 8,
      price: 8.20,
      demand: 'Medium',
      forecast: 6,
      cost: 3.20
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: '🔧',
      available: 12,
      price: 12.00,
      demand: 'Low',
      forecast: 8,
      cost: 4.80
    }
  ]

  const currentProduct = products.find(p => p.id === selectedProduct)!

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-red-600 bg-red-100'
      default: return 'text-slate-600 bg-slate-100'
    }
  }

  const calculateProfit = (price: number, cost: number, sold: number) => {
    return (price - cost) * sold
  }

  const calculateRevenue = (price: number, sold: number) => {
    return price * sold
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">💰 Sales</h1>
        <div className="text-sm text-slate-600">
          Set prices and manage sales
        </div>
      </div>

      {/* Product Selection */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Select Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedProduct === product.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl">{product.icon}</div>
                <div className="text-sm font-medium text-green-600">
                  €{product.price}/unit
                </div>
              </div>
              <div className="font-semibold text-slate-900">{product.name}</div>
              <div className="text-sm text-slate-600">
                {product.available} units available
              </div>
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded ${getDemandColor(product.demand)}`}>
                  {product.demand} Demand
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sales Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Setting */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">
            💰 {currentProduct.icon} {currentProduct.name} - Price Setting
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Current Price</span>
              <span className="font-semibold text-green-600">€{currentProduct.price}/unit</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Production Cost</span>
              <span className="font-semibold text-red-600">€{currentProduct.cost}/unit</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Profit Margin</span>
              <span className="font-semibold text-green-600">
                €{(currentProduct.price - currentProduct.cost).toFixed(2)}/unit
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Available Stock</span>
              <span className="font-semibold">{currentProduct.available} units</span>
            </div>
            <div className="pt-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Set New Price (€/unit)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  defaultValue={currentProduct.price}
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  step="0.10"
                  min="0"
                />
                <button className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Forecast */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">📊 Sales Forecast</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Expected Sales</span>
              <span className="font-semibold">{currentProduct.forecast} units</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Expected Revenue</span>
              <span className="font-semibold text-green-600">
                €{calculateRevenue(currentProduct.price, currentProduct.forecast).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Expected Profit</span>
              <span className="font-semibold text-green-600">
                €{calculateProfit(currentProduct.price, currentProduct.cost, currentProduct.forecast).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Market Demand</span>
              <span className={`font-semibold px-2 py-1 rounded ${getDemandColor(currentProduct.demand)}`}>
                {currentProduct.demand}
              </span>
            </div>
            <div className="pt-4">
              <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(currentProduct.forecast / currentProduct.available) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-slate-600">
                {Math.round((currentProduct.forecast / currentProduct.available) * 100)}% of stock expected to sell
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">📈 Market Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">📈</div>
            <div className="text-lg font-semibold text-green-800">High Demand</div>
            <div className="text-sm text-green-600">Widget prices up 15%</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl mb-2">⚖️</div>
            <div className="text-lg font-semibold text-yellow-800">Competition</div>
            <div className="text-sm text-yellow-600">3 new suppliers</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-lg font-semibold text-blue-800">Efficient Production</div>
            <div className="text-sm text-blue-600">Perfect conditions</div>
          </div>
        </div>
      </div>

      {/* Sales Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">🛒 Sales Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm font-medium">Bulk Sale</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm font-medium">Special Offer</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-medium">Analytics</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">📋</div>
            <div className="text-sm font-medium">Orders</div>
          </button>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-2xl font-bold text-slate-900">€2,450</div>
          <div className="text-sm text-slate-600">Today's Revenue</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">📦</div>
          <div className="text-2xl font-bold text-slate-900">45 units</div>
          <div className="text-sm text-slate-600">Sold Today</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl mb-2">📈</div>
          <div className="text-2xl font-bold text-slate-900">+18%</div>
          <div className="text-sm text-slate-600">vs Yesterday</div>
        </div>
      </div>
    </div>
  )
}

export default Sales 