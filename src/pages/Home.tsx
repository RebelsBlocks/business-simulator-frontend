import { Link } from 'react-router-dom';
import MarbleTexture from '../components/MarbleTexture';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center py-12 sm:py-20">
          <div className="mb-8 sm:mb-12">
            <img 
              src="/business-simulator-black.png" 
              alt="Business Simulator" 
              className="h-20 sm:h-32 w-auto mx-auto mb-6 sm:mb-8 drop-shadow-lg"
            />
            <h1 className="text-3xl sm:text-5xl font-bold text-stone-800 mb-4 sm:mb-6">
              Business Simulator
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-8 sm:mb-12">
              Manage your virtual business empire. Make strategic decisions, optimize production, 
              and grow your company to new heights.
            </p>
          </div>

          {/* Login Button */}
          <div className="mb-8 sm:mb-12">
            <Link 
              to="/dashboard"
              className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-stone-800 hover:bg-stone-900 text-white text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <img src="/8.svg" alt="Login" className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
              Start Your Business Journey
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <img src="/3.svg" alt="Production" className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">Production Management</h3>
              <p className="text-stone-600 text-sm sm:text-base">
                Optimize your production facilities and manage resources efficiently.
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <img src="/4.svg" alt="Sales" className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">Sales & Marketing</h3>
              <p className="text-stone-600 text-sm sm:text-base">
                Track sales performance and implement effective marketing strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <img src="/5.svg" alt="Suppliers" className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">Supplier Network</h3>
              <p className="text-stone-600 text-sm sm:text-base">
                Build relationships with suppliers and manage your supply chain.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home; 
