import { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Daily surprise state + flip animation
  const [surpriseIndex, setSurpriseIndex] = useState(0);
  const [surpriseMessage, setSurpriseMessage] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const surpriseImages: Record<number, string> = {
    1: '/daily_surprises/surprise (1).jpg',
    2: '/daily_surprises/surprise (2).jpg',
    3: '/daily_surprises/surprise (3).jpg',
    4: '/daily_surprises/surprise (4).jpg',
    5: '/daily_surprises/surprise (5).jpg',
    6: '/daily_surprises/surprise (6).jpg',
    7: '/daily_surprises/surprise (7).jpg',
    8: '/daily_surprises/surprise (8).jpg',
    9: '/daily_surprises/surprise (9).jpg',
    10: '/daily_surprises/surprise (10).jpg',
    11: '/daily_surprises/surprise (11).jpg',
    12: '/daily_surprises/surprise (12).jpg',
    13: '/daily_surprises/surprise (13).jpg',
    14: '/daily_surprises/surprise (14).jpg',
    15: '/daily_surprises/surprise (15).jpg',
    16: '/daily_surprises/surprise (16).jpg',
    17: '/daily_surprises/surprise (17).jpg',
    18: '/daily_surprises/surprise (18).jpg',
    19: '/daily_surprises/surprise (19).jpg',
    20: '/daily_surprises/surprise (20).jpg',
    21: '/daily_surprises/surprise (21).jpg',
    22: '/daily_surprises/surprise (22).jpg',
    23: '/daily_surprises/surprise (23).jpg',
    24: '/daily_surprises/surprise (24).jpg',
  };

  const dailyMessages = [
    { index: 1, message: 'Memory 01: I actually miss u a lot and little bit Istanbul' },
    { index: 2, message: 'Memory 02: What a random perfect photo xd' },
    { index: 3, message: 'Memory 03: One of my fav photo even though my nipples were showing' },
    { index: 4, message: 'Memory 04: phahahahahahhah it was good haircut actually love u muckk' },
    { index: 5, message: 'Memory 05: I loved this photo at first sight.' },
    { index: 6, message: 'Memory 06: I missed to sweat together ;)' },
    { index: 7, message: 'Memory 07: We got caught by my father :d ' },
    { index: 8, message: 'Memory 08: Oh that night was something else' },
    { index: 9, message: 'Memory 09: Just perfect moment' },
    { index: 10, message: 'Memory 10: No comment I just wanna kiss u ' },
    { index: 11, message: 'Memory 11: So innocent haaa ' },
    { index: 12, message: 'Memory 12: Looks like the Photo we can show our kids' },
    { index: 13, message: 'Memory 13: wow ur just so beautiful (and heidelberg trip was good ja?)' },
    { index: 14, message: 'Memory 14: hehehhe Heidelberg in a row' },
    { index: 15, message: 'Memory 15: I miss u and lasttt 11 dasyssssss so excited' },
    { index: 16, message: 'Memory 16: that day was also perfect' },
    { index: 17, message: 'Memory 17: My pretty copilot and u will be till forever' },
    { index: 18, message: 'Memory 18: oo wow so kissable ' },
    { index: 19, message: 'Memory 19: Heeyyyy this time no crying Muccckkkkk' },
    { index: 20, message: 'Memory 20: again Istanbul' },
    { index: 21, message: 'Memory 21: I just love this photo and yesss we will be together soon' },
    { index: 22, message: 'Memory 22: AAAGGgggggg It\'s getting harder to wait, everything\'s ready!' },
    { index: 23, message: 'Memory 23: I am totally ready to see u muckkk' },
    { index: 24, message: 'Memory 24: Naahhhhh u thought cute photo or sth dont worry we will have so much cute photos in Estonia I love u so so much my future wifey Mcukkk' },
  ];

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('2025-12-25T00:20:00+02:00').getTime();
      const now = new Date();
      const nowTime = now.getTime();
      const difference = targetDate - nowTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }

      const startDate = new Date(2025, 10, 29);
      startDate.setHours(0, 0, 0, 0);
      
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

      setSurpriseIndex(daysPassed);

      if (daysPassed >= 1 && daysPassed <= 24) {
        const messageObj = dailyMessages.find(m => m.index === daysPassed);
        setSurpriseMessage(messageObj?.message || '');
      } else if (daysPassed > 24) {
        setSurpriseMessage('The countdown is over! I\'m with you now! 💖');
      } else {
        setSurpriseMessage('You need to wait for that day, my impatient love! 😉');
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsFlipped(false);
  }, [surpriseIndex]);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const showSurprise = surpriseIndex >= 1 && surpriseIndex <= 24;
  const surpriseImagePath = showSurprise ? surpriseImages[surpriseIndex] : null;

  const handleFlipCard = () => {
    if (showSurprise) {
      setIsFlipped(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"></div>

      {/* Enhanced Snow - Multiple Layers for Depth */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large slow snowflakes (background layer) */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute bg-white rounded-full opacity-40 animate-snowfall-slow"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Medium speed snowflakes (middle layer) */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute bg-white rounded-full opacity-60 animate-snowfall"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Small fast snowflakes (foreground layer) */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute bg-white rounded-full opacity-80 animate-snowfall-fast"
            style={{
              width: '1px',
              height: '1px',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Fairy Lights Glow Effect */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Warm golden lights scattered around */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`light-${i}`}
            className="absolute w-3 h-3 rounded-full animate-fairy-glow"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%)',
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>

      {/* Soft glow - Enhanced */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-8 gap-4">
        {/* Header with Christmas Decoration */}
        <div className="text-center -mt-6 relative">
          {/* Decorative frost/garland on corners */}
          <div className="absolute -top-4 left-0 text-2xl opacity-60">❄️</div>
          <div className="absolute -top-4 right-0 text-2xl opacity-60">❄️</div>
          <div className="absolute -top-2 left-8 text-sm opacity-40">✨</div>
          <div className="absolute -top-2 right-8 text-sm opacity-40">✨</div>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#E8EAF6] drop-shadow-lg relative mb-2">
            Counting Down to You
          </h1>
          <p className="text-lg md:text-xl text-[#CFD8DC] font-light tracking-wide">
            The Wait is (Almost) Over!
          </p>
        </div>

        {/* Countdown boxes */}
        <div className="w-full max-w-3xl px-2">
          <div className="grid grid-cols-4 gap-3">
            {countdownItems.map((item) => (
              <div
                key={item.label}
                className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl py-3 px-4 border border-purple-300/20 shadow-md text-center relative overflow-hidden"
              >
                {/* Subtle fairy light glow on cards */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-300/10 rounded-full blur-xl animate-fairy-glow"></div>
                
                <div className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-[#BBDEFB] font-serif uppercase tracking-widest mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central image with enhanced heart glow */}
        <div className="w-full max-w-3xl flex justify-center mt-1">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-0 border border-white border-opacity-20 shadow-2xl overflow-hidden relative">
            {/* Enhanced heart glow effect */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-red-400 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
            
            <img
              src="/reunion_final.png"
              alt="Illustration of couple waiting for reunion"
              className="max-w-[300px] w-full h-auto object-contain relative z-10"
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* Daily Surprise Section */}
        <div className="w-full max-w-2xl px-2 mt-3">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-300/20 shadow-md relative overflow-hidden">
            {/* Subtle corner lights */}
            <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-300/15 rounded-full blur-md animate-fairy-glow"></div>
            <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-300/15 rounded-full blur-md animate-fairy-glow" style={{ animationDelay: '1.5s' }}></div>
            
            <h2 className="text-center font-serif text-base md:text-lg text-transparent bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text font-bold mb-4">
              Today's Surprise: Countdown Memories! 
            </h2>

            {showSurprise && surpriseImagePath ? (
              <div className="perspective-1000">
                <div 
                  className={`relative w-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card (before flip) */}
                  {!isFlipped && (
                    <div 
                      onClick={handleFlipCard}
                      className="cursor-pointer bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg p-8 border-2 border-purple-300/30 hover:border-pink-300/50 transition-all duration-300 text-center backface-hidden"
                    >
                      <div className="text-6xl mb-4">🎁</div>
                      <p className="text-[#E8EAF6] font-serif text-lg">
                        Click to Open Today's Memory!
                      </p>
                    </div>
                  )}

                  {/* Back of card (after flip) */}
                  {isFlipped && (
                    <div 
                      className="backface-hidden rotate-y-180"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <div className="flex justify-center mb-3 bg-transparent">
                        <img
                          src={surpriseImagePath}
                          alt={`Surprise Day ${surpriseIndex}`}
                          className="max-w-[280px] w-full h-auto rounded-lg shadow-2xl object-cover"
                          style={{ display: 'block', border: 'none', background: 'transparent' }}
                        />
                      </div>
                      <p className="text-center text-sm md:text-base text-[#E8EAF6] font-serif px-2 leading-relaxed">
                        {surpriseMessage}
                      </p>
                      <div className="text-center mt-3 text-xs text-[#BBDEFB] font-serif">
                        Day {surpriseIndex} / 24
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center text-3xl mb-2">
                  {surpriseIndex > 24 ? '💖' : '⏰'}
                </div>
                <p className="text-center text-sm md:text-base text-[#E8EAF6] font-serif px-2">
                  {surpriseMessage}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 text-center">
          <p className="text-[#CFD8DC] font-serif text-sm">
            Every second brings us closer ❤️
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Poppins', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }

        @keyframes snowfall {
          from { transform: translateY(-10vh) translateX(0); opacity: 1; }
          to { transform: translateY(110vh) translateX(80px); opacity: 0; }
        }

        @keyframes snowfall-slow {
          from { transform: translateY(-10vh) translateX(0); opacity: 0.4; }
          to { transform: translateY(110vh) translateX(150px); opacity: 0; }
        }

        @keyframes snowfall-fast {
          from { transform: translateY(-10vh) translateX(0); opacity: 0.8; }
          to { transform: translateY(110vh) translateX(50px); opacity: 0; }
        }

        @keyframes fairy-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        .animate-snowfall { animation: snowfall linear forwards; }
        .animate-snowfall-slow { animation: snowfall-slow linear infinite; }
        .animate-snowfall-fast { animation: snowfall-fast linear infinite; }
        .animate-fairy-glow { animation: fairy-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }

        /* Remove white backgrounds and blend images */
        img {
          background: transparent !important;
          mix-blend-mode: multiply;
          filter: brightness(1.1) contrast(1.05);
        }

        /* 3D Flip Animation Styles */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}

export default App;
