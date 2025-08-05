import MarbleTexture from '../components/MarbleTexture';

const Dashboard = () => {
  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-stone-800 mb-2">Dashboard</h1>
          <p className="text-stone-600 text-sm sm:text-base">Welcome to your business overview</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 backdrop-blur-md border border-blue-300/40 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">Total Revenue</p>
                <p className="text-2xl font-bold text-blue-900">$24,500</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <img src="/1.svg" alt="Revenue" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 backdrop-blur-md border border-green-300/40 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Daily Production</p>
                <p className="text-2xl font-bold text-green-900">156 kg</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <img src="/3.svg" alt="Production" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 backdrop-blur-md border border-purple-300/40 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">Active Orders</p>
                <p className="text-2xl font-bold text-purple-900">12</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <img src="/4.svg" alt="Sales" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 backdrop-blur-md border border-orange-300/40 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700">Suppliers</p>
                <p className="text-2xl font-bold text-orange-900">8</p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <img src="/5.svg" alt="Suppliers" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-4 sm:p-6 shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-stone-800 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-white/60 rounded-lg border border-stone-200/40">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-800">New order received</p>
                  <p className="text-xs text-stone-600">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white/60 rounded-lg border border-stone-200/40">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-800">Production completed</p>
                  <p className="text-xs text-stone-600">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white/60 rounded-lg border border-stone-200/40">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-800">New supplier added</p>
                  <p className="text-xs text-stone-600">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-4 sm:p-6 shadow-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-stone-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-white/60 rounded-lg border border-stone-200/40 hover:bg-white/80 transition-all duration-200 text-left">
                <div className="flex items-center">
                  <img src="/1.svg" alt="Email" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">Check Email</p>
                    <p className="text-xs text-stone-600">3 new messages</p>
                  </div>
                </div>
              </button>
              <button className="p-4 bg-white/60 rounded-lg border border-stone-200/40 hover:bg-white/80 transition-all duration-200 text-left">
                <div className="flex items-center">
                  <img src="/3.svg" alt="Production" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">Manage Production</p>
                    <p className="text-xs text-stone-600">2 facilities active</p>
                  </div>
                </div>
              </button>
              <button className="p-4 bg-white/60 rounded-lg border border-stone-200/40 hover:bg-white/80 transition-all duration-200 text-left">
                <div className="flex items-center">
                  <img src="/4.svg" alt="Sales" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">View Sales</p>
                    <p className="text-xs text-stone-600">$2,450 today</p>
                  </div>
                </div>
              </button>
              <button className="p-4 bg-white/60 rounded-lg border border-stone-200/40 hover:bg-white/80 transition-all duration-200 text-left">
                <div className="flex items-center">
                  <img src="/5.svg" alt="Suppliers" className="w-6 h-6 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-stone-800">Manage Suppliers</p>
                    <p className="text-xs text-stone-600">8 active suppliers</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-4 sm:p-6 shadow-2xl">
          <h2 className="text-lg sm:text-xl font-bold text-stone-800 mb-4">Weekly Performance</h2>
          <div className="h-64 bg-white/60 rounded-lg border border-stone-200/40 flex items-center justify-center">
            <div className="text-center">
              <img src="/12.svg" alt="Chart" className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-stone-600 text-sm">Performance chart will be displayed here</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard; 
