import { useState, useEffect } from 'react';
import MarbleTexture from '../components/MarbleTexture';

interface ProductInventory {
  tomatoes: number;
  salad: number;
  herbs: number;
}

interface TierInventory {
  starter: ProductInventory;
  basic: ProductInventory;
  premium: ProductInventory;
  max: ProductInventory;
}

interface SalesItem {
  productId: string;
  productName: string;
  icon: string;
  selectedTier: 'starter' | 'basic' | 'premium' | 'max';
  availableQuantity: number;
  price: number;
  quantityToSell: number;
  estimatedProfit: number;
}

// Product price statistics interface
interface ProductPriceStats {
  currentPrice: number;
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  marketDemand: 'high' | 'medium' | 'low';
  competitors: number;
}

const Sales = () => {
  // Symulowany magazyn gotowych produktów z podziałem na tiery
  const [warehouseInventory, setWarehouseInventory] = useState<TierInventory>({
    starter: { tomatoes: 50, salad: 40, herbs: 30 },
    basic: { tomatoes: 40, salad: 35, herbs: 25 },
    premium: { tomatoes: 30, salad: 25, herbs: 15 },
    max: { tomatoes: 20, salad: 15, herbs: 10 }
  });

  // Stan pieniędzy (symulowany)
  const [money, setMoney] = useState(5000);

  const products = [
    { id: 'tomatoes', name: 'Tomatoes', icon: '/tomatoes.png' },
    { id: 'salad', name: 'Salad', icon: '/salad.png' },
    { id: 'herbs', name: 'Herbs', icon: '/herbs.png' }
  ];

  const tiers = [
    { id: 'starter', name: 'Starter', color: 'from-stone-400 to-stone-600', bgColor: 'bg-stone-100' },
    { id: 'basic', name: 'Basic', color: 'from-stone-500 to-stone-700', bgColor: 'bg-stone-200' },
    { id: 'premium', name: 'Premium', color: 'from-stone-600 to-stone-800', bgColor: 'bg-stone-300' },
    { id: 'max', name: 'Max', color: 'from-stone-700 to-stone-900', bgColor: 'bg-stone-400' }
  ] as const;

  // Product price statistics data
  const productPriceStats: Record<string, Record<string, ProductPriceStats>> = {
    tomatoes: {
      starter: {
        currentPrice: 2.50,
        avgPrice: 2.45,
        minPrice: 2.00,
        maxPrice: 3.00,
        trend: 'up',
        changePercent: 3.2,
        marketDemand: 'high',
        competitors: 12
      },
      basic: {
        currentPrice: 3.80,
        avgPrice: 3.75,
        minPrice: 3.20,
        maxPrice: 4.50,
        trend: 'stable',
        changePercent: 1.1,
        marketDemand: 'high',
        competitors: 8
      },
      premium: {
        currentPrice: 5.20,
        avgPrice: 5.15,
        minPrice: 4.80,
        maxPrice: 6.00,
        trend: 'up',
        changePercent: 2.8,
        marketDemand: 'medium',
        competitors: 5
      },
      max: {
        currentPrice: 7.50,
        avgPrice: 7.40,
        minPrice: 6.50,
        maxPrice: 8.50,
        trend: 'up',
        changePercent: 4.1,
        marketDemand: 'low',
        competitors: 3
      }
    },
    salad: {
      starter: {
        currentPrice: 1.80,
        avgPrice: 1.85,
        minPrice: 1.50,
        maxPrice: 2.20,
        trend: 'down',
        changePercent: -1.8,
        marketDemand: 'medium',
        competitors: 15
      },
      basic: {
        currentPrice: 2.90,
        avgPrice: 2.95,
        minPrice: 2.40,
        maxPrice: 3.40,
        trend: 'stable',
        changePercent: 0.5,
        marketDemand: 'medium',
        competitors: 10
      },
      premium: {
        currentPrice: 4.20,
        avgPrice: 4.25,
        minPrice: 3.80,
        maxPrice: 4.80,
        trend: 'down',
        changePercent: -1.2,
        marketDemand: 'low',
        competitors: 6
      },
      max: {
        currentPrice: 6.10,
        avgPrice: 6.05,
        minPrice: 5.50,
        maxPrice: 7.00,
        trend: 'up',
        changePercent: 2.1,
        marketDemand: 'low',
        competitors: 4
      }
    },
    herbs: {
      starter: {
        currentPrice: 3.20,
        avgPrice: 3.15,
        minPrice: 2.80,
        maxPrice: 3.60,
        trend: 'up',
        changePercent: 2.5,
        marketDemand: 'high',
        competitors: 8
      },
      basic: {
        currentPrice: 4.80,
        avgPrice: 4.75,
        minPrice: 4.20,
        maxPrice: 5.40,
        trend: 'up',
        changePercent: 3.1,
        marketDemand: 'high',
        competitors: 6
      },
      premium: {
        currentPrice: 6.50,
        avgPrice: 6.45,
        minPrice: 6.00,
        maxPrice: 7.20,
        trend: 'stable',
        changePercent: 0.8,
        marketDemand: 'medium',
        competitors: 4
      },
      max: {
        currentPrice: 9.20,
        avgPrice: 9.15,
        minPrice: 8.50,
        maxPrice: 10.00,
        trend: 'up',
        changePercent: 3.8,
        marketDemand: 'low',
        competitors: 2
      }
    }
  };

  // Stan dla tabeli sprzedaży - jeden wiersz na produkt z wybieranym tierem
  const [salesItems, setSalesItems] = useState<SalesItem[]>(() => {
    return products.map(product => ({
      productId: product.id,
      productName: product.name,
      icon: product.icon,
      selectedTier: 'starter',
      availableQuantity: warehouseInventory.starter[product.id as keyof ProductInventory],
      price: 0,
      quantityToSell: 0,
      estimatedProfit: 0
    }));
  });

  // Aktualizuj dostępną ilość w tabeli sprzedaży
  const updateAvailableQuantities = () => {
    setSalesItems(prev => prev.map(item => ({
      ...item,
      availableQuantity: warehouseInventory[item.selectedTier][item.productId as keyof ProductInventory]
    })));
  };

  // Obsługa zmiany tieru
  const handleTierChange = (productId: string, newTier: 'starter' | 'basic' | 'premium' | 'max') => {
    setSalesItems(prev => prev.map(item => {
      if (item.productId === productId) {
        const newAvailableQuantity = warehouseInventory[newTier][item.productId as keyof ProductInventory];
        
        return {
          ...item,
          selectedTier: newTier,
          availableQuantity: newAvailableQuantity,
          quantityToSell: Math.min(item.quantityToSell, newAvailableQuantity),
          estimatedProfit: item.price * Math.min(item.quantityToSell, newAvailableQuantity)
        };
      }
      return item;
    }));
  };

  // Obsługa zmiany ceny
  const handlePriceChange = (productId: string, newPrice: number) => {
    setSalesItems(prev => prev.map(item => {
      if (item.productId === productId) {
        const estimatedProfit = newPrice * item.quantityToSell;
        return { ...item, price: newPrice, estimatedProfit };
      }
      return item;
    }));
  };

  // Obsługa zmiany ilości do sprzedaży
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setSalesItems(prev => prev.map(item => {
      if (item.productId === productId) {
        const quantityToSell = Math.min(newQuantity, item.availableQuantity);
        const estimatedProfit = item.price * quantityToSell;
        return { ...item, quantityToSell, estimatedProfit };
      }
      return item;
    }));
  };

  // Obsługa sprzedaży
  const handleSell = (productId: string) => {
    const item = salesItems.find(item => item.productId === productId);
    if (!item || item.quantityToSell <= 0 || item.price <= 0) {
      alert('Please set a valid price and quantity to sell!');
      return;
    }

    if (item.quantityToSell > item.availableQuantity) {
      alert('Not enough inventory to sell this quantity!');
      return;
    }

    // Aktualizuj magazyn
    setWarehouseInventory(prev => ({
      ...prev,
      [item.selectedTier]: {
        ...prev[item.selectedTier],
        [productId]: prev[item.selectedTier][productId as keyof ProductInventory] - item.quantityToSell
      }
    }));

    // Dodaj pieniądze
    setMoney(prev => prev + item.estimatedProfit);

    // Resetuj ilość do sprzedaży dla tego produktu
    setSalesItems(prev => prev.map(salesItem => {
      if (salesItem.productId === productId) {
        return { ...salesItem, quantityToSell: 0, estimatedProfit: 0 };
      }
      return salesItem;
    }));

    // Pokaż komunikat o sukcesie
    alert(`Successfully sold ${item.quantityToSell} kg of ${item.productName} (${item.selectedTier} quality) for $${item.estimatedProfit.toFixed(2)}!`);
  };

  // Aktualizuj dostępne ilości gdy zmienia się magazyn
  useEffect(() => {
    updateAvailableQuantities();
  }, [warehouseInventory]);

  const totalEstimatedProfit = salesItems.reduce((sum, item) => sum + item.estimatedProfit, 0);

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        
        {/* Product Price Statistics */}
        <div className="bg-stone-100/90 backdrop-blur-sm border border-stone-400/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg">
          <div className="text-center mb-3">
            <h3 className="text-sm sm:text-base font-bold text-stone-800">Market Prices</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            {products.map((product) => (
              <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-stone-200/40">
                <div className="flex items-center gap-2 mb-2">
                  <img src={product.icon} alt={product.name} className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm font-bold text-stone-800">{product.name}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1 sm:gap-2">
                  {tiers.map((tier) => {
                    const stats = productPriceStats[product.id][tier.id];
                    const trendIcon = stats.trend === 'up' ? '↗' : stats.trend === 'down' ? '↘' : '→';
                    const trendColor = stats.trend === 'up' ? 'text-green-600' : stats.trend === 'down' ? 'text-red-600' : 'text-yellow-600';
                    
                    return (
                      <div key={tier.id} className="text-center">
                        <div className="text-xs font-medium text-stone-600 capitalize">{tier.name}</div>
                        <div className="text-sm sm:text-base font-bold text-stone-800">${stats.currentPrice}</div>
                        <div className={`text-xs font-medium ${trendColor}`}>
                          {trendIcon} {stats.changePercent}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Summary - Top */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-4 sm:mb-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-3xl font-bold text-stone-800 mb-1 sm:mb-2">Sales Dashboard</h2>
            <p className="text-stone-600 text-xs sm:text-sm">Sell your harvested vegetables by quality tier</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8">
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-stone-800">${money.toFixed(2)}</div>
              <div className="text-xs sm:text-sm text-stone-600 mt-1 sm:mt-2 font-medium">Current Balance</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-stone-800">${totalEstimatedProfit.toFixed(2)}</div>
              <div className="text-xs sm:text-sm text-stone-600 mt-1 sm:mt-2 font-medium">Estimated Profit</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-stone-800">
                {Object.values(warehouseInventory).reduce((sum, tier) => 
                  sum + Object.values(tier).reduce((tierSum: number, quantity: unknown) => tierSum + (quantity as number), 0), 0
                )}
              </div>
              <div className="text-xs sm:text-sm text-stone-600 mt-1 sm:mt-2 font-medium">Total Inventory</div>
            </div>
          </div>
        </div>

        {/* Responsive Sales Cards */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-800 mb-1 sm:mb-2">Sales Table</h2>
            <p className="text-stone-600 text-xs sm:text-sm">Set prices and quantities for each product by quality tier</p>
          </div>
          
          <div className="space-y-3 sm:space-y-6">
            {salesItems.map((item) => {
              return (
                <div key={item.productId} className="bg-white/60 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-stone-200/30 shadow-lg">
                  {/* Product Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                    <img 
                      src={item.icon} 
                      alt={item.productName}
                      className="w-8 h-8 sm:w-12 sm:h-12"
                    />
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-stone-800">{item.productName}</h3>
                      <p className="text-xs sm:text-sm text-stone-600">Available: {item.availableQuantity} kg</p>
                    </div>
                  </div>

                  {/* Quality Tier Selector */}
                  <div className="mb-3 sm:mb-6">
                    <label className="block text-xs sm:text-sm font-medium text-stone-700 mb-2 sm:mb-3">Quality Tier</label>
                    <div className="relative">
                      <select
                        value={item.selectedTier}
                        onChange={(e) => handleTierChange(item.productId, e.target.value as 'starter' | 'basic' | 'premium' | 'max')}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent bg-white appearance-none cursor-pointer"
                      >
                        {tiers.map((tier) => (
                          <option key={tier.id} value={tier.id} className="flex items-center gap-2">
                            {tier.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Price and Quantity Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-stone-700 mb-1 sm:mb-2">Price ($/kg)</label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handlePriceChange(item.productId, parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-stone-700 mb-1 sm:mb-2">Quantity to Sell</label>
                      <input
                        type="number"
                        min="0"
                        max={item.availableQuantity}
                        value={item.quantityToSell}
                        onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value) || 0)}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  {/* Estimated Profit and Sell Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="text-center sm:text-left">
                      <div className="text-xs sm:text-sm text-stone-600">Estimated Profit</div>
                      <div className="text-lg sm:text-2xl font-bold text-green-600">${item.estimatedProfit.toFixed(2)}</div>
                    </div>
                    <button
                      onClick={() => handleSell(item.productId)}
                      disabled={item.quantityToSell <= 0 || item.price <= 0 || item.availableQuantity <= 0}
                      className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-200 ${
                        item.quantityToSell > 0 && item.price > 0 && item.availableQuantity > 0
                          ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Sell
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Warehouse Inventory by Tier - Bottom */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-4 sm:p-8 mt-4 sm:mt-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-800 mb-1 sm:mb-2">Warehouse Inventory by Quality Tier</h2>
            <p className="text-stone-600 text-xs sm:text-sm">Current stock of harvested vegetables by quality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {tiers.map((tier) => (
              <div key={tier.id} className="bg-white/40 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-stone-200/30 shadow-lg">
                <div className="text-center mb-3 sm:mb-6">
                  <div className="text-base sm:text-xl font-bold text-stone-800 mb-1 sm:mb-2 capitalize">{tier.name}</div>
                  <div className={`w-8 sm:w-12 h-1 bg-gradient-to-r ${tier.color} mx-auto rounded-full`}></div>
                </div>
                <div className="space-y-2 sm:space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-2 sm:p-3 bg-white/60 rounded-lg border border-stone-200/40">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img 
                          src={product.icon} 
                          alt={product.name}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      </div>
                      <div className="text-sm sm:text-lg font-bold text-stone-800">
                        {warehouseInventory[tier.id][product.id as keyof ProductInventory]} kg
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sales; 
