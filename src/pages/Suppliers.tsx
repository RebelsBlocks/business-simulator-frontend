import { useState } from 'react';
import MarbleTexture from '../components/MarbleTexture';

const Suppliers = () => {
  // Product data - updated to use PNG images instead of emojis
  const products = [
    { id: 'tomatoes', name: 'Tomatoes', icon: '/tomatoes.png', color: 'from-stone-400 via-stone-600 to-stone-800' },
    { id: 'salad', name: 'Salad', icon: '/salad.png', color: 'from-stone-300 via-stone-500 to-stone-700' },
    { id: 'herbs', name: 'Herbs', icon: '/herbs.png', color: 'from-stone-200 via-stone-400 to-stone-600' }
  ];

  // Module data with new tier names
  const modules = [
    { id: 0, name: 'Starter', cost: 1000, production: 3, description: 'Basic starter kit' },
    { id: 1, name: 'Basic', cost: 2000, production: 5, description: 'Enhanced productivity' },
    { id: 2, name: 'Premium', cost: 4000, production: 7, description: 'Advanced features' },
    { id: 3, name: 'Max', cost: 6000, production: 10, description: 'Highest yield with LED' }
  ];

  // Seed price statistics data
  const seedPriceStats = {
    tomatoes: {
      currentPrice: 1200,
      avgPrice: 1150,
      minPrice: 900,
      maxPrice: 1400,
      trend: 'up',
      changePercent: 4.3,
      marketDemand: 'high'
    },
    salad: {
      currentPrice: 950,
      avgPrice: 920,
      minPrice: 750,
      maxPrice: 1100,
      trend: 'stable',
      changePercent: 1.2,
      marketDemand: 'medium'
    },
    herbs: {
      currentPrice: 800,
      avgPrice: 850,
      minPrice: 650,
      maxPrice: 1000,
      trend: 'down',
      changePercent: -2.1,
      marketDemand: 'low'
    }
  };

  // Stan dla wybranych modułów (produkt -> moduł -> ilość)
  const [selectedModules, setSelectedModules] = useState<Record<string, Record<number, number>>>({});
  
  // Stan dla wybranych tierów dla każdego produktu
  const [selectedTiers, setSelectedTiers] = useState<Record<string, number>>({
    tomatoes: 0,
    salad: 0,
    herbs: 0
  });

  const handleQuantityChange = (productIndex: number, moduleIndex: number, quantity: string | number) => {
    const productId = products[productIndex].id;
    setSelectedModules(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [moduleIndex]: parseInt(quantity.toString()) || 0
      }
    }));
  };

  const handleTierChange = (productId: string, direction: 'left' | 'right') => {
    setSelectedTiers(prev => {
      const currentTier = prev[productId] || 0;
      let newTier = currentTier;
      
      if (direction === 'left') {
        newTier = Math.max(0, currentTier - 1);
      } else {
        newTier = Math.min(modules.length - 1, currentTier + 1);
      }
      
      return {
        ...prev,
        [productId]: newTier
      };
    });
  };

  const getTotalCostForProduct = (productId: string) => {
    const productSelections = selectedModules[productId] || {};
    return Object.entries(productSelections).reduce((total, [moduleIndex, quantity]) => {
      return total + (modules[parseInt(moduleIndex)].cost * (quantity as number));
    }, 0);
  };

  const getTotalProductionForProduct = (productId: string) => {
    const productSelections = selectedModules[productId] || {};
    return Object.entries(productSelections).reduce((total, [moduleIndex, quantity]) => {
      return total + (modules[parseInt(moduleIndex)].production * (quantity as number));
    }, 0);
  };

  const getGrandTotal = () => {
    return products.reduce((total, product) => total + getTotalCostForProduct(product.id), 0);
  };

  // Funkcja do generowania szczegółowego podsumowania koszyka
  const getCartSummary = () => {
    const summary: Array<{
      productName: string;
      moduleName: string;
      quantity: number;
      cost: number;
      production: number;
    }> = [];

    products.forEach(product => {
      const productSelections = selectedModules[product.id] || {};
      Object.entries(productSelections).forEach(([moduleIndex, quantity]) => {
        if (quantity > 0) {
          const module = modules[parseInt(moduleIndex)];
          summary.push({
            productName: product.name,
            moduleName: module.name,
            quantity: quantity,
            cost: module.cost * quantity,
            production: module.production * quantity
          });
        }
      });
    });

    return summary;
  };

  const cartSummary = getCartSummary();

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        
        {/* Seed Price Statistics */}
        <div className="bg-stone-100/90 backdrop-blur-sm border border-stone-400/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg">
          <div className="text-center mb-3">
            <h3 className="text-sm sm:text-base font-bold text-stone-800">Market Prices</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {products.map((product) => {
              const stats = seedPriceStats[product.id as keyof typeof seedPriceStats];
              const trendIcon = stats.trend === 'up' ? '↗' : stats.trend === 'down' ? '↘' : '→';
              const trendColor = stats.trend === 'up' ? 'text-green-600' : stats.trend === 'down' ? 'text-red-600' : 'text-yellow-600';
              
              return (
                <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-stone-200/40 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <img src={product.icon} alt={product.name} className="w-4 h-4 sm:w-6 sm:h-6" />
                    <span className="text-xs sm:text-sm font-bold text-stone-800">{product.name}</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-stone-800">${stats.currentPrice}</div>
                  <div className={`text-xs font-medium ${trendColor}`}>
                    {trendIcon} {stats.changePercent}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-8">
          {products.map((product, productIndex) => {
            const currentTier = selectedTiers[product.id] || 0;
            const currentModule = modules[currentTier];
            
            return (
              <div key={product.id} className="bg-stone-50/90 backdrop-blur-sm border border-stone-400/50 rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-stone-300/20 hover:ring-stone-400/30">
                {/* Product Header */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                    <img 
                      src={product.icon} 
                      alt={product.name}
                      className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-stone-900">{product.name}</div>
                  </div>
                </div>

                {/* Tier Selection */}
                <div className="bg-stone-100/80 border border-stone-200/60 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleTierChange(product.id, 'left')}
                      disabled={currentTier === 0}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentTier === 0 
                          ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                          : 'bg-stone-300 hover:bg-stone-400 text-stone-700 hover:text-white'
                      }`}
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="text-center flex-1">
                      <div className="font-semibold text-stone-900 text-sm sm:text-lg">{currentModule.name}</div>
                      <div className="text-xs text-stone-600">
                        ${currentModule.cost.toLocaleString()} | {currentModule.production}kg/day
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleTierChange(product.id, 'right')}
                      disabled={currentTier === modules.length - 1}
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentTier === modules.length - 1 
                          ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                          : 'bg-stone-300 hover:bg-stone-400 text-stone-700 hover:text-white'
                      }`}
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="bg-stone-100/80 border border-stone-200/60 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm font-semibold text-stone-700">Quantity</div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button 
                        onClick={() => handleQuantityChange(productIndex, currentModule.id, 
                          Math.max(0, (selectedModules[product.id]?.[currentModule.id] || 0) - 1))}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-200 hover:bg-stone-300 border border-stone-300 rounded-full flex items-center justify-center text-stone-600 font-bold transition-all duration-200 text-xs sm:text-sm"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={selectedModules[product.id]?.[currentModule.id] || 0}
                        onChange={(e) => handleQuantityChange(productIndex, currentModule.id, e.target.value)}
                        className="w-12 sm:w-16 h-6 sm:h-8 text-center text-xs sm:text-sm font-bold border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-500 bg-stone-50"
                      />
                      <button 
                        onClick={() => handleQuantityChange(productIndex, currentModule.id, 
                          (selectedModules[product.id]?.[currentModule.id] || 0) + 1)}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-200 hover:bg-stone-300 border border-stone-300 rounded-full flex items-center justify-center text-stone-600 font-bold transition-all duration-200 text-xs sm:text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Summary */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-stone-100/80 border border-stone-200/60 rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-sm sm:text-lg font-bold text-stone-800">
                      ${getTotalCostForProduct(product.id).toLocaleString()}
                    </div>
                    <div className="text-xs text-stone-600">Total cost</div>
                  </div>
                  <div className="bg-stone-200/60 border border-stone-300/60 rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-sm sm:text-lg font-bold text-stone-800">
                      {getTotalProductionForProduct(product.id)} kg
                    </div>
                    <div className="text-xs text-stone-600">daily</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-stone-100/90 backdrop-blur-sm border border-stone-400/50 text-stone-900 px-3 sm:px-6 py-3 sm:py-4 rounded-xl mb-4 sm:mb-8 shadow-lg ring-1 ring-stone-300/20 hover:ring-stone-400/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 mb-3 sm:mb-4">
            <div className="text-sm sm:text-lg font-bold flex items-center">
              <img src="/10.svg" alt="Checkout" className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
              Checkout
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="text-center">
                <div className="text-xs text-stone-600 mb-1">Total investment</div>
                <div className="text-sm sm:text-2xl font-bold text-stone-900">
                  ${getGrandTotal().toLocaleString()}
                </div>
              </div>
              <button className="bg-stone-800 hover:bg-stone-900 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg">
                Buy Now
              </button>
            </div>
          </div>

          {/* Cart Details */}
          {cartSummary.length > 0 && (
            <div className="border-t border-stone-300/50 pt-3 sm:pt-4">
              <div className="text-xs sm:text-sm font-semibold text-stone-700 mb-2 sm:mb-3">
                Cart Contents ({cartSummary.length} items)
              </div>
              <div className="space-y-2 max-h-32 sm:max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-stone-100/50 backdrop-blur-sm">
                {cartSummary.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-stone-50/90 backdrop-blur-sm rounded-lg border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-stone-600">{item.quantity}</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-stone-800">
                          {item.productName} - {item.moduleName}
                        </div>
                        <div className="text-xs text-stone-600">
                          {item.production} kg/day production
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold text-stone-800">
                        ${item.cost.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty Cart Message */}
          {cartSummary.length === 0 && (
            <div className="border-t border-stone-300/50 pt-3 sm:pt-4">
              <div className="text-center py-3 sm:py-4">
                <div className="text-xs sm:text-sm text-stone-500 mb-1 sm:mb-2">Your cart is empty</div>
                <div className="text-xs text-stone-400">Select products and quantities above</div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Suppliers; 
