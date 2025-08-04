import { useState } from 'react';
import MarbleTexture from '../components/MarbleTexture';

interface ProductionFacility {
  id: number;
  name: string;
  tier: 'starter' | 'basic' | 'premium' | 'max';
  production: number; // kg/day
  upgradeCost: number;
  isUnlocked: boolean;
  isActive: boolean;
  plantedSeeds: number;
  animationPosition: number; // 0-100 for moving segment position
  selectedSeed: string | null; // 'tomatoes', 'salad', 'herbs'
}

const Production = () => {
  const [facilities, setFacilities] = useState<ProductionFacility[]>([
    { id: 1, name: 'Facility 1', tier: 'starter', production: 3, upgradeCost: 0, isUnlocked: true, isActive: false, plantedSeeds: 0, animationPosition: 0, selectedSeed: null },
    { id: 2, name: 'Facility 2', tier: 'starter', production: 3, upgradeCost: 2000, isUnlocked: false, isActive: false, plantedSeeds: 0, animationPosition: 0, selectedSeed: null },
    { id: 3, name: 'Facility 3', tier: 'starter', production: 3, upgradeCost: 3000, isUnlocked: false, isActive: false, plantedSeeds: 0, animationPosition: 0, selectedSeed: null },
    { id: 4, name: 'Facility 4', tier: 'starter', production: 3, upgradeCost: 4000, isUnlocked: false, isActive: false, plantedSeeds: 0, animationPosition: 0, selectedSeed: null },
    { id: 5, name: 'Facility 5', tier: 'starter', production: 3, upgradeCost: 5000, isUnlocked: false, isActive: false, plantedSeeds: 0, animationPosition: 0, selectedSeed: null },
  ]);

  const seeds = [
    { id: 'tomatoes', name: 'Tomatoes', icon: '/tomatoes.png' },
    { id: 'salad', name: 'Salad', icon: '/salad.png' },
    { id: 'herbs', name: 'Herbs', icon: '/herbs.png' }
  ];

  const handleUnlockFacility = (facilityId: number) => {
    setFacilities(prev => prev.map(facility => 
      facility.id === facilityId 
        ? { ...facility, isUnlocked: true }
        : facility
    ));
  };

  const handleUpgradeFacility = (facilityId: number) => {
    setFacilities(prev => prev.map(facility => {
      if (facility.id !== facilityId) return facility;
      
      const currentTier = facility.tier;
      let newTier: ProductionFacility['tier'] = currentTier;
      let newProduction = facility.production;
      let newUpgradeCost = facility.upgradeCost;

      switch (currentTier) {
        case 'starter':
          newTier = 'basic';
          newProduction = 5;
          newUpgradeCost = 2500;
          break;
        case 'basic':
          newTier = 'premium';
          newProduction = 7;
          newUpgradeCost = 4000;
          break;
        case 'premium':
          newTier = 'max';
          newProduction = 10;
          newUpgradeCost = 0;
          break;
        default:
          return facility;
      }

      return {
        ...facility,
        tier: newTier,
        production: newProduction,
        upgradeCost: newUpgradeCost
      };
    }));
  };

  const handleSeedSelection = (facilityId: number, seedId: string) => {
    setFacilities(prev => prev.map(facility => 
      facility.id === facilityId 
        ? { ...facility, selectedSeed: seedId }
        : facility
    ));
  };

  const handlePlantSeeds = (facilityId: number) => {
    const facility = facilities.find(f => f.id === facilityId);
    if (!facility?.selectedSeed) return; // Can't plant without selecting seed

    setFacilities(prev => prev.map(facility => 
      facility.id === facilityId 
        ? { ...facility, isActive: true, plantedSeeds: facility.production, animationPosition: 0 }
        : facility
    ));

    // Animated segment that moves from left to right, then reappears from left
    let continuousPosition = 0;
    setInterval(() => {
      continuousPosition += 3;
      
      // Calculate visual position that wraps around smoothly
      let visualPosition = continuousPosition % 160; // 100% + 30% + 30% for smooth wrap
      if (visualPosition > 130) {
        visualPosition = visualPosition - 160; // Wrap to negative position
      }
      
      setFacilities(prev => prev.map(facility => 
        facility.id === facilityId 
          ? { ...facility, animationPosition: visualPosition }
          : facility
      ));
    }, 100); // Update every 100ms for smooth movement
  };

  const getTotalDailyProduction = () => {
    return facilities
      .filter(f => f.isUnlocked && f.isActive)
      .reduce((total, facility) => total + facility.plantedSeeds, 0);
  };

  const getUnlockedFacilitiesCount = () => {
    return facilities.filter(f => f.isUnlocked).length;
  };
  
  const getTierIconCount = (tier: string) => {
    switch(tier) {
      case 'starter': return 1;
      case 'basic': return 2;
      case 'premium': return 3;
      case 'max': return 5;
      default: return 1;
    }
  };

  return (
    <div className="min-h-screen relative">
      <MarbleTexture />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Production Summary */}
        <div className="bg-gradient-to-br from-stone-50/95 via-stone-100/90 to-stone-200/85 backdrop-blur-md border border-stone-300/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-2xl ring-1 ring-stone-200/30 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">{getUnlockedFacilitiesCount()}/5</div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Facilities Unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">
                {facilities.filter(f => f.isActive).length}
              </div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Active Facilities</div>
            </div>
              <div className="text-center">
              <div className="text-3xl font-bold text-stone-800">{getTotalDailyProduction()} kg</div>
              <div className="text-sm text-stone-600 mt-2 font-medium">Daily Production</div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.filter(f => f.isUnlocked).map((facility) => (
            <div key={facility.id} className="bg-white/95 backdrop-blur-md border border-stone-200/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
              
              {/* Current Tier Display */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-700 capitalize">{facility.tier}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: getTierIconCount(facility.tier) }).map((_, index) => (
                    <img key={index} src="/12.svg" alt="Tier Icon" className="w-4 h-4" />
                  ))}
                </div>
              </div>

              {/* Production Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">{facility.production} kg/day</div>
              </div>

                             {/* Seed Selection */}
               <div className="grid grid-cols-3 gap-2 mb-4">
                 {seeds.map((seed) => (
                   <button
                     key={seed.id}
                     onClick={() => handleSeedSelection(facility.id, seed.id)}
                     className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                       facility.selectedSeed === seed.id
                         ? 'border-gray-500 bg-gray-100 shadow-sm'
                         : 'border-gray-200 bg-white hover:border-gray-300'
                     }`}
                   >
                     <img 
                       src={seed.icon} 
                       alt={seed.name}
                       className="w-8 h-8 mx-auto"
                     />
                   </button>
                 ))}
               </div>

                             {/* Plant Button */}
               {!facility.isActive && (
                 <button
                   onClick={() => handlePlantSeeds(facility.id)}
                   disabled={!facility.selectedSeed}
                   className={`w-full py-2 rounded-lg font-bold transition-all duration-200 ${
                     facility.selectedSeed
                       ? 'bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 hover:from-stone-200 hover:via-stone-300 hover:to-stone-400 text-stone-800 shadow-md hover:shadow-lg border border-stone-300/50 hover:border-stone-400/60'
                       : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                   }`}
                 >
                   Plant
                 </button>
               )}

              {/* Active Production Status */}
              {facility.isActive && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img 
                        src={facility.selectedSeed ? seeds.find(s => s.id === facility.selectedSeed)?.icon : undefined} 
                        alt={facility.selectedSeed || ''}
                        className="w-5 h-5"
                      />
                      <span>Producing {facility.plantedSeeds} kg...</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2 relative overflow-hidden">
                      <div 
                        className="absolute h-2 rounded-full bg-gray-500 transition-all duration-100 ease-out"
                        style={{ 
                          width: '30%',
                          left: `${facility.animationPosition}%`,
                          transform: 'translateX(-100%)',
                          opacity: facility.animationPosition < 0 || facility.animationPosition > 100 ? 0 : 1
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">Harvest in Tasks</div>
                  </div>
                </div>
              )}

              {/* Upgrade Button */}
              {facility.tier !== 'max' && !facility.isActive && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => handleUpgradeFacility(facility.id)}
                    className="w-full bg-gradient-to-br from-amber-50 via-stone-100 to-stone-200 hover:from-amber-100 hover:via-stone-200 hover:to-stone-300 text-stone-800 px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg border border-stone-300/50 hover:border-stone-400/60"
                  >
                    <img src="/11.svg" alt="Upgrade" className="w-4 h-4" />
                    <span className="text-sm font-medium">Upgrade</span>
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Add New Facility Button */}
          {getUnlockedFacilitiesCount() < 5 && (
            <div className="bg-white/95 backdrop-blur-md border-2 border-dashed border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <img src="/12.gif" alt="Add Facility" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Add New Facility</h3>
                <p className="text-sm text-gray-600 text-center mb-4 font-medium">
                  Unlock additional production capacity
                </p>
                <button
                  onClick={() => {
                    const nextFacility = facilities.find(f => !f.isUnlocked);
                    if (nextFacility) {
                      handleUnlockFacility(nextFacility.id);
                    }
                  }}
                  className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Unlock for ${facilities.find(f => !f.isUnlocked)?.upgradeCost.toLocaleString()}
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Production; 
