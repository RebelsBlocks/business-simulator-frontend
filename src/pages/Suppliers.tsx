import { useState } from 'react';
import MarbleTexture from '../components/MarbleTexture';

const Suppliers = () => {
  // Product data - updated to use PNG images instead of emojis
  const products = [
    { id: 'tomatoes', name: 'Seeds', icon: '/tomatoes.png', color: 'from-stone-400 via-stone-600 to-stone-800' },
    { id: 'salad', name: 'Seeds', icon: '/salad.png', color: 'from-stone-300 via-stone-500 to-stone-700' },
    { id: 'herbs', name: 'Seeds', icon: '/herbs.png', color: 'from-stone-200 via-stone-400 to-stone-600' }
  ];

  // Module data
  const modules = [
    { id: 0, name: 'V0', cost: 1000, production: 3, description: 'Basic starter kit' },
    { id: 1, name: 'V1', cost: 2000, production: 5, description: 'Enhanced productivity' },
    { id: 2, name: 'V2', cost: 4000, production: 7, description: 'Advanced features' },
    { id: 3, name: 'V3', cost: 6000, production: 10, description: 'Highest yield with LED' }
  ];

  
  const [selectedModules, setSelectedModules] = useState<Record<string, Record<number, number>>>({});

  const handleQuantityChange = (productIndex: number, moduleIndex: number, quantity: string | number) => {
    const productId = products[productIndex].id;
    setSelectedModules(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [moduleIndex]: parseInt(quantity.toString()) || 0
      }
    }));

    // Automatically assign product to module if quantity > 0
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

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {products.map((product, productIndex) => (
            <div key={product.id} className="bg-stone-50/90 backdrop-blur-sm border border-stone-400/50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-stone-300/20 hover:ring-stone-400/30">
              {/* Product Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={product.icon} 
                    alt={product.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-stone-900">{product.name}</div>
                </div>
              </div>

              {/* Modules */}
              <div className="space-y-3">
                {modules.map((module) => (
                  <div key={module.id} className="bg-stone-100/80 border border-stone-200/60 rounded-lg p-3 hover:bg-stone-100 transition-colors duration-200">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-semibold text-stone-900">{module.name}</div>
                        <div className="text-xs text-stone-600">
                          ${module.cost.toLocaleString()} | {module.production}kg/day
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleQuantityChange(productIndex, module.id, 
                            Math.max(0, (selectedModules[product.id]?.[module.id] || 0) - 1))}
                          className="w-8 h-8 bg-stone-200 hover:bg-stone-300 border border-stone-300 rounded-full flex items-center justify-center text-stone-600 font-bold transition-all duration-200"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={selectedModules[product.id]?.[module.id] || 0}
                          onChange={(e) => handleQuantityChange(productIndex, module.id, e.target.value)}
                          className="w-16 h-8 text-center text-sm font-bold border-2 border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-stone-500 bg-stone-50"
                        />
                        <button 
                          onClick={() => handleQuantityChange(productIndex, module.id, 
                            (selectedModules[product.id]?.[module.id] || 0) + 1)}
                          className="w-8 h-8 bg-stone-200 hover:bg-stone-300 border border-stone-300 rounded-full flex items-center justify-center text-stone-600 font-bold transition-all duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Product Summary */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-stone-100/80 border border-stone-200/60 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-stone-800">
                    ${getTotalCostForProduct(product.id).toLocaleString()}
                  </div>
                  <div className="text-xs text-stone-600">Total cost</div>
                </div>
                <div className="bg-stone-200/60 border border-stone-300/60 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-stone-800">
                    {getTotalProductionForProduct(product.id)} kg
                  </div>
                  <div className="text-xs text-stone-600">daily</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-stone-100/90 backdrop-blur-sm border border-stone-400/50 text-stone-900 px-4 sm:px-6 py-4 rounded-xl mb-8 shadow-lg ring-1 ring-stone-300/20 hover:ring-stone-400/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-base sm:text-lg font-bold flex items-center">
              <img src="/10.svg" alt="Checkout" className="w-6 h-6 mr-2" />
              Checkout
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-xs sm:text-sm text-stone-600 mb-1">Total investment</div>
                <div className="text-lg sm:text-2xl font-bold text-stone-900">
                  ${getGrandTotal().toLocaleString()}
                </div>
              </div>
              <button className="bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Suppliers; 
