const MarbleTexture = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ colorScheme: 'light' }}>
      {/* Luksusowe kremowe tło z ciepłymi podtonami */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200" style={{ colorScheme: 'light' }}></div>
      
      {/* Główna warstwa marmuru z naturalną zmiennością */}
      <div className="absolute inset-0" style={{ colorScheme: 'light' }}>
        <div 
          className="w-full h-full opacity-80"
          style={{
            colorScheme: 'light',
            background: `
              radial-gradient(ellipse 800px 400px at 30% 20%, ${`rgb(250 250 249 / 0.9)`} 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 70% 60%, ${`rgb(245 245 244 / 0.8)`} 0%, transparent 45%),
              radial-gradient(ellipse 400px 200px at 20% 80%, ${`rgb(231 229 228 / 0.7)`} 0%, transparent 40%),
              linear-gradient(120deg, ${`rgb(245 245 244 / 0.6)`} 0%, ${`rgb(250 250 249 / 0.4)`} 30%, ${`rgb(231 229 228 / 0.5)`} 60%, ${`rgb(245 245 244 / 0.3)`} 100%)
            `
          }}
        ></div>
      </div>
      
      {/* Główne żyły - bardzo subtelne i płynące */}
      <div className="absolute inset-0 opacity-40" style={{ colorScheme: 'light' }}>
        <div 
          className="w-full h-full"
          style={{
            colorScheme: 'light',
            background: `
              linear-gradient(125deg, 
                transparent 0%, transparent 18%,
                ${`rgb(214 211 209 / 0.3)`} 19%, ${`rgb(168 162 158 / 0.4)`} 19.5%, ${`rgb(120 113 108 / 0.1)`} 20%, ${`rgb(214 211 209 / 0.2)`} 20.5%, transparent 21%,
                transparent 35%, transparent 42%,
                ${`rgb(231 229 228 / 0.3)`} 43%, ${`rgb(214 211 209 / 0.3)`} 43.5%, ${`rgb(168 162 158 / 0.2)`} 44%, transparent 44.5%,
                transparent 60%, transparent 67%,
                ${`rgb(214 211 209 / 0.2)`} 68%, ${`rgb(231 229 228 / 0.3)`} 68.5%, transparent 69%,
                transparent 82%, transparent 87%,
                ${`rgb(168 162 158 / 0.3)`} 88%, ${`rgb(214 211 209 / 0.2)`} 88.5%, transparent 89%,
                transparent 100%
              )
            `
          }}
        ></div>
      </div>
      
      {/* Druga warstwa żył - krzyżujące się delikatnie */}
      <div className="absolute inset-0 opacity-30" style={{ colorScheme: 'light' }}>
        <div 
          className="w-full h-full"
          style={{
            colorScheme: 'light',
            background: `
              linear-gradient(-35deg, 
                transparent 0%, transparent 25%,
                ${`rgb(250 250 249 / 0.4)`} 26%, ${`rgb(231 229 228 / 0.3)`} 26.2%, ${`rgb(245 245 244 / 0.4)`} 26.5%, transparent 27%,
                transparent 45%, transparent 52%,
                ${`rgb(231 229 228 / 0.2)`} 53%, ${`rgb(214 211 209 / 0.3)`} 53.3%, transparent 54%,
                transparent 72%, transparent 78%,
                ${`rgb(245 245 244 / 0.3)`} 79%, ${`rgb(250 250 249 / 0.2)`} 79.5%, transparent 80%,
                transparent 100%
              )
            `
          }}
        ></div>
      </div>
      
      {/* Mineralne wykwity i naturalne plamy */}
      <div className="absolute inset-0 opacity-25" style={{ colorScheme: 'light' }}>
        <div className="absolute top-[12%] left-[25%] w-48 h-32 bg-gradient-radial from-stone-200/60 via-stone-100/40 to-transparent rounded-full blur-xl transform rotate-12 scale-150" style={{ colorScheme: 'light' }}></div>
        <div className="absolute top-[45%] right-[20%] w-56 h-28 bg-gradient-radial from-amber-50/50 via-stone-50/30 to-transparent rounded-full blur-2xl transform -rotate-8 scale-125" style={{ colorScheme: 'light' }}></div>
        <div className="absolute bottom-[25%] left-[15%] w-40 h-24 bg-gradient-radial from-stone-100/40 via-neutral-50/20 to-transparent rounded-full blur-xl transform rotate-25 scale-110" style={{ colorScheme: 'light' }}></div>
        <div className="absolute top-[35%] left-[55%] w-32 h-20 bg-gradient-radial from-stone-150/30 via-stone-100/20 to-transparent rounded-full blur-lg transform rotate-45" style={{ colorScheme: 'light' }}></div>
      </div>
      
      {/* Bardzo subtelne mikro-żyłki */}
      <div className="absolute inset-0 opacity-20" style={{ colorScheme: 'light' }}>
        <div 
          className="w-full h-full"
          style={{
            colorScheme: 'light',
            background: `
              repeating-linear-gradient(118deg, 
                transparent 0px, transparent 40px,
                rgba(214,211,209,0.15) 41px, rgba(168,162,158,0.1) 42px, transparent 43px,
                transparent 80px, transparent 120px,
                rgba(231,229,228,0.1) 121px, transparent 122px
              ),
              repeating-linear-gradient(-52deg, 
                transparent 0px, transparent 60px,
                rgba(245,245,244,0.1) 61px, rgba(214,211,209,0.08) 62px, transparent 63px,
                transparent 100px
              )
            `
          }}
        ></div>
      </div>
      
      {/* Połysk i głębia - kluczowe dla luksusu */}
      <div className="absolute inset-0 opacity-60" style={{ colorScheme: 'light' }}>
        <div 
          className="w-full h-full"
          style={{
            colorScheme: 'light',
            background: `
              radial-gradient(ellipse 1200px 600px at 40% 30%, rgba(255,255,255,0.4) 0%, transparent 60%),
              radial-gradient(ellipse 800px 400px at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%),
              linear-gradient(145deg, rgba(255,255,255,0.1) 0%, transparent 30%, rgba(255,255,255,0.05) 70%, transparent 100%)
            `
          }}
        ></div>
      </div>
      
      {/* Bardzo subtelna tekstura krystaliczna */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          colorScheme: 'light',
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,255,255,0.3) 0.5px, transparent 1px),
            radial-gradient(circle at 45% 15%, rgba(231,229,228,0.2) 0.3px, transparent 0.8px),
            radial-gradient(circle at 75% 45%, rgba(255,255,255,0.2) 0.4px, transparent 1px),
            radial-gradient(circle at 25% 75%, rgba(214,211,209,0.15) 0.3px, transparent 0.7px),
            radial-gradient(circle at 85% 85%, rgba(255,255,255,0.25) 0.5px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px, 35px 35px, 50px 50px, 45px 45px'
        }}
      ></div>
      
      {/* Finalny gradient dla głębi i ciepła */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-stone-100/15" style={{ colorScheme: 'light' }}></div>
    </div>
  );
};

export default MarbleTexture;
