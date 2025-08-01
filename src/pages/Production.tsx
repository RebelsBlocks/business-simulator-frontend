import { useState } from 'react'

const Production = () => {
  const [selectedProduct, setSelectedProduct] = useState('widgets')

  const products = [
    {
      id: 'widgets',
      name: 'Widgets',
      icon: '⚙️',
      quantity: 15,
      quality: 2,
      price: 6.50,
      maxQuality: 3,
      upgrades: [
        { name: 'Better Materials', cost: 100, effect: '+1 quality' },
        { name: 'Advanced Machinery', cost: 200, effect: '+1 quality' },
        { name: 'Automation System', cost: 500, effect: '+2 quality' }
      ]
    },
    {
      id: 'gadgets',
      name: 'Gadgets',
      icon: '📱',
      quantity: 8,
      quality: 1,
      price: 8.20,
      maxQuality: 3,
      upgrades: [
        { name: 'Premium Components', cost: 150, effect: '+1 quality' },
        { name: 'Quality Control', cost: 300, effect: '+1 quality' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: '🔧',
      quantity: 12,
      quality: 3,
      price: 12.00,
      maxQuality: 3,
      upgrades: [
        { name: 'Professional Grade', cost: 250, effect: '+1 quality' }
      ]
    }
  ]

  const currentProduct = products.find(p => p.id === selectedProduct)!

  const renderStars = (quality: number, maxQuality: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(maxQuality)].map((_, i) => (
          <span key={i} className={i < quality ? 'text-yellow-500' : 'text-slate-300'}>
            ⭐
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">🧺 Production & Offer</h1>
        <div className="text-sm text-slate-600">
          Total Value: €{products.reduce((sum, p) => sum + (p.quantity * p.price), 0).toFixed(2)}
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
                {product.quantity} units available
              </div>
              <div className="mt-2">
                {renderStars(product.quality, product.maxQuality)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Info */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">
            {currentProduct.icon} {currentProduct.name} Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Quantity Available</span>
              <span className="font-semibold">{currentProduct.quantity} units</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Current Quality</span>
              <div className="flex items-center space-x-2">
                {renderStars(currentProduct.quality, currentProduct.maxQuality)}
                <span className="text-sm text-slate-600">
                  ({currentProduct.quality}/{currentProduct.maxQuality})
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Price per unit</span>
              <span className="font-semibold text-green-600">€{currentProduct.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Total Value</span>
              <span className="font-semibold text-green-600">
                €{(currentProduct.quantity * currentProduct.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Quality Upgrades */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">⭐ Quality Upgrades</h3>
          <div className="space-y-3">
            {currentProduct.upgrades.map((upgrade, index) => (
              <div key={index} className="p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-slate-900">{upgrade.name}</div>
                    <div className="text-sm text-slate-600">{upgrade.effect}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">€{upgrade.cost}</div>
                    <button className="btn btn-primary text-sm px-3 py-1">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">🏭 Production Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">🏭</div>
            <div className="text-sm font-medium">Start Production</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <div className="text-sm font-medium">Maintain Equipment</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm font-medium">Package</div>
          </button>
          <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-sm font-medium">Ship</div>
          </button>
        </div>
      </div>

      {/* Market Conditions */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">📊 Market Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">📈</div>
            <div className="text-lg font-semibold text-green-800">High Demand</div>
            <div className="text-sm text-green-600">+15% price bonus</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-lg font-semibold text-blue-800">Efficient Production</div>
            <div className="text-sm text-blue-600">+10% output rate</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-lg font-semibold text-orange-800">Competition</div>
            <div className="text-sm text-orange-600">-5% price penalty</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Production 