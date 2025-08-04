import { useState, useEffect } from 'react';
import MarbleTexture from '../components/MarbleTexture';

interface ProductInventory {
  tomatoes: number;
  salad: number;
  herbs: number;
}

interface SalesItem {
  productId: string;
  productName: string;
  icon: string;
  availableQuantity: number;
  price: number;
  quantityToSell: number;
  estimatedProfit: number;
}

const Sales = () => {
  // Symulowany magazyn gotowych produktów
  const [warehouseInventory, setWarehouseInventory] = useState<ProductInventory>({
    tomatoes: 150,
    salad: 120,
    herbs: 80
  });

  // Stan pieniędzy (symulowany)
  const [money, setMoney] = useState(5000);

  const products = [
    { id: 'tomatoes', name: 'Tomatoes', icon: '/tomatoes.png' },
    { id: 'salad', name: 'Salad', icon: '/salad.png' },
    { id: 'herbs', name: 'Herbs', icon: '/herbs.png' }
  ];

  // Stan dla tabeli sprzedaży
  const [salesItems, setSalesItems] = useState<SalesItem[]>(
    products.map(product => ({
      productId: product.id,
      productName: product.name,
      icon: product.icon,
      availableQuantity: warehouseInventory[product.id as keyof ProductInventory],
      price: 0,
      quantityToSell: 0,
      estimatedProfit: 0
    }))
  );

  // Aktualizuj dostępną ilość w tabeli sprzedaży
  const updateAvailableQuantities = () => {
    setSalesItems(prev => prev.map(item => ({
      ...item,
      availableQuantity: warehouseInventory[item.productId as keyof ProductInventory]
    })));
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
      [productId]: prev[productId as keyof ProductInventory] - item.quantityToSell
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
    alert(`Successfully sold ${item.quantityToSell} ${item.productName} for $${item.estimatedProfit.toFixed(2)}!`);
  };

  // Aktualizuj dostępne ilości gdy zmienia się magazyn
  useEffect(() => {
    updateAvailableQuantities();
  }, [warehouseInventory]);

  const totalEstimatedProfit = salesItems.reduce((sum, item) => sum + item.estimatedProfit, 0);

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Sales Summary - Top */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Sales Dashboard</h2>
            <p className="text-stone-600 text-sm">Sell your harvested vegetables for profit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">${money.toFixed(2)}</div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Current Balance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">${totalEstimatedProfit.toFixed(2)}</div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Estimated Profit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">
                {Object.values(warehouseInventory).reduce((sum, quantity) => sum + quantity, 0)}
              </div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Total Inventory</div>
            </div>
          </div>
        </div>

        {/* Sales Table */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Sales Table</h2>
            <p className="text-stone-600 text-sm">Set prices and quantities for each product</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-300/40">
                  <th className="text-left p-4 font-bold text-stone-800">Product</th>
                  <th className="text-left p-4 font-bold text-stone-800">Available</th>
                  <th className="text-left p-4 font-bold text-stone-800">Price ($/kg)</th>
                  <th className="text-left p-4 font-bold text-stone-800">Quantity to Sell</th>
                  <th className="text-left p-4 font-bold text-stone-800">Estimated Profit</th>
                  <th className="text-left p-4 font-bold text-stone-800">Action</th>
                </tr>
              </thead>
              <tbody>
                {salesItems.map((item) => (
                  <tr key={item.productId} className="border-b border-stone-200/30 hover:bg-stone-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.icon} 
                          alt={item.productName}
                          className="w-8 h-8"
                        />
                        <span className="font-medium text-stone-800">{item.productName}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-stone-800">{item.availableQuantity} kg</span>
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handlePriceChange(item.productId, parseFloat(e.target.value) || 0)}
                        className="w-24 px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="0"
                        max={item.availableQuantity}
                        value={item.quantityToSell}
                        onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value) || 0)}
                        className="w-24 px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"
                        placeholder="0"
                      />
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-green-600">${item.estimatedProfit.toFixed(2)}</span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleSell(item.productId)}
                        disabled={item.quantityToSell <= 0 || item.price <= 0 || item.availableQuantity <= 0}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          item.quantityToSell > 0 && item.price > 0 && item.availableQuantity > 0
                            ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Sell
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Warehouse Inventory - Bottom */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Warehouse Inventory</h2>
            <p className="text-stone-600 text-sm">Current stock of harvested vegetables</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-stone-200/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={product.icon} 
                      alt={product.name}
                      className="w-12 h-12"
                    />
                    <div>
                      <div className="text-lg font-bold text-stone-800">{product.name}</div>
                      <div className="text-sm text-stone-600">Available for sale</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-stone-800">
                    {warehouseInventory[product.id as keyof ProductInventory]} kg
                  </div>
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
