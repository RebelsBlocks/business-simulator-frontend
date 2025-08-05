import { useState } from 'react';

interface OverviewProps {
  accountBalance?: number;
  currentSeason?: string;
  isAuthenticated?: boolean;
}

const Overview = ({ accountBalance = 24500, currentSeason = 'Spring', isAuthenticated = false }: OverviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSeasonIcon = (season: string) => {
    switch (season.toLowerCase()) {
      case 'spring':
        return '🌸';
      case 'summer':
        return '☀️';
      case 'autumn':
        return '🍂';
      case 'winter':
        return '❄️';
      default:
        return '🌱';
    }
  };

  const getSeasonColor = (season: string) => {
    switch (season.toLowerCase()) {
      case 'spring':
        return 'from-green-400 to-pink-400';
      case 'summer':
        return 'from-yellow-400 to-orange-400';
      case 'autumn':
        return 'from-orange-400 to-red-400';
      case 'winter':
        return 'from-blue-400 to-cyan-400';
      default:
        return 'from-stone-400 to-stone-500';
    }
  };

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
      {/* Collapsed State */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-stone-800">${accountBalance.toLocaleString()}</p>
              <p className="text-xs text-stone-600">{currentSeason}</p>
            </div>
          </div>
        </button>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl p-3 sm:p-4 shadow-2xl w-72 sm:w-80 max-w-[90vw]">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-800">Overview</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-stone-500 hover:text-stone-700 transition-colors duration-200 p-1"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Account Balance */}
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-lg border border-green-300/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-green-700">Account Balance</p>
                <p className="text-lg sm:text-2xl font-bold text-green-900">${accountBalance.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Current Season */}
          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-lg border border-blue-300/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-blue-700">Current Season</p>
                <p className="text-base sm:text-lg font-bold text-blue-900">{currentSeason}</p>
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getSeasonColor(currentSeason)} rounded-lg flex items-center justify-center`}>
                <span className="text-white text-lg sm:text-xl">{getSeasonIcon(currentSeason)}</span>
              </div>
            </div>
          </div>


        </div>
      )}
    </div>
  );
};

export default Overview; 
