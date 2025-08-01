import { useState } from 'react'

const Suppliers = () => {
  const [selectedSupplier, setSelectedSupplier] = useState('agroplus')

  const suppliers = [
    {
      id: 'agroplus',
      name: 'AgroPlus Seeds',
      reliability: 95,
      rating: 4.8,
      delivery: '2-3 days',
      products: [
        { name: 'Lettuce Seeds', price: 2.50, stock: 'High', trend: 'stable' },
        { name: 'Tomato Seeds', price: 3.20, stock: 'Medium', trend: 'rising' },
        { name: 'Herb Seeds', price: 4.80, stock: 'Low', trend: 'falling' }
      ]
    },
    {
      id: 'organicfarm',
      name: 'Organic Farm Supply',
      reliability: 88,
      rating: 4.6,
      delivery: '1-2 days',
      products: [
        { name: 'Premium Lettuce', price: 3.50, stock: 'Medium', trend: 'rising' },
        { name: 'Organic Tomatoes', price: 4.20, stock: 'High', trend: 'stable' },
        { name: 'Fresh Herbs', price: 6.00, stock: 'Low', trend: 'rising' }
      ]
    },
    {
      id: 'bulkgrow',
      name: 'BulkGrow Wholesale',
      reliability: 92,
      rating: 4.4,
      delivery: '3-5 days',
      products: [
        { name: 'Bulk Lettuce', price: 1.80, stock: 'High', trend: 'falling' },
        { name: 'Bulk Tomatoes', price: 2.50, stock: 'High', trend: 'stable' },
        { name: 'Bulk Herbs', price: 3.50, stock: 'Medium', trend: 'falling' }
      ]
    }
  ]

  const fertilizers = [
    { name: 'Organic Fertilizer', price: 15.00, effect: '+20% growth', supplier: 'AgroPlus' },
    { name: 'Premium Nutrients', price: 25.00, effect: '+30% growth', supplier: 'Organic Farm' },
    { name: 'Bulk Fertilizer', price: 8.00, effect: '+10% growth', supplier: 'BulkGrow' }
  ]

  const currentSupplier = suppliers.find(s => s.id === selectedSupplier)!

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return '📈'
      case 'falling': return '📉'
      case 'stable': return '➡️'
      default: return '➡️'
    }
  }

  const getStockColor = (stock: string) => {
    switch (stock) {
      case 'High': return 'text-green-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-red-600'
      default: return 'text-slate-600'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">🚚 Suppliers</h1>
        <div className="text-sm text-slate-600">
          Best deals and reliable suppliers
        </div>
      </div>

      {/* Supplier Selection */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Select Supplier</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suppliers.map((supplier) => (
            <button
              key={supplier.id}
              onClick={() => setSelectedSupplier(supplier.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedSupplier === supplier.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-slate-900">{supplier.name}</div>
                <div className="text-sm text-green-600">{supplier.reliability}%</div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(supplier.rating) ? 'text-yellow-500' : 'text-slate-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm text-slate-600">{supplier.rating}</span>
              </div>
              <div className="text-sm text-slate-600">
                Delivery: {supplier.delivery}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Supplier Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Products */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">
            📦 {currentSupplier.name} - Products
          </h3>
          <div className="space-y-3">
            {currentSupplier.products.map((product, index) => (
              <div key={index} className="p-3 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-slate-900">{product.name}</div>
                    <div className="text-sm text-slate-600">
                      Stock: <span className={getStockColor(product.stock)}>{product.stock}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">€{product.price}</div>
                    <div className="text-sm text-slate-600">{getTrendIcon(product.trend)}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="btn btn-primary text-sm px-3 py-1">
                    Buy Now
                  </button>
                  <button className="btn btn-secondary text-sm px-3 py-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Info */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">ℹ️ Supplier Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Reliability</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${currentSupplier.reliability}%` }}
                  ></div>
                </div>
                <span className="font-semibold">{currentSupplier.reliability}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Rating</span>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(currentSupplier.rating) ? 'text-yellow-500' : 'text-slate-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-semibold">{currentSupplier.rating}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Delivery Time</span>
              <span className="font-semibold">{currentSupplier.delivery}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Minimum Order</span>
              <span className="font-semibold">€50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fertilizers */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">🌱 Fertilizers & Nutrients</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fertilizers.map((fertilizer, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">🌱</div>
                <div className="font-semibold text-slate-900">{fertilizer.name}</div>
                <div className="text-sm text-slate-600">{fertilizer.supplier}</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Price</span>
                  <span className="font-semibold text-green-600">€{fertilizer.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Effect</span>
                  <span className="font-semibold text-blue-600">{fertilizer.effect}</span>
                </div>
              </div>
              <button className="w-full btn btn-primary">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">📊 Market Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl mb-2">📈</div>
            <div className="text-lg font-semibold text-red-800">Seed Prices Rising</div>
            <div className="text-sm text-red-600">+15% this week</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">🌱</div>
            <div className="text-lg font-semibold text-green-800">High Demand</div>
            <div className="text-sm text-green-600">Organic products</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-lg font-semibold text-blue-800">Fast Delivery</div>
            <div className="text-sm text-blue-600">Same day available</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📋</div>
          <div className="text-sm font-medium">Order History</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">💳</div>
          <div className="text-sm font-medium">Payment</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">📞</div>
          <div className="text-sm font-medium">Contact</div>
        </button>
        <button className="p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors text-center">
          <div className="text-2xl mb-2">⭐</div>
          <div className="text-sm font-medium">Reviews</div>
        </button>
      </div>
    </div>
  )
}

export default Suppliers 