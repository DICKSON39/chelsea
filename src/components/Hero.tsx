

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#021d3d]">
      {/* Background Layer: Replaced image with a subtle animated gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#034694] opacity-40"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#DBA111] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#034694] rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Modern Gradient Overlay - Stronger contrast for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021d3d] via-[#021d3d]/90 to-transparent z-10"></div>

      <div className="relative z-20 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#DBA111] text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-sm shadow-lg shadow-[#DBA111]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            The Rosenior Era • 2025/26
          </div>
          
          <h1 className="text-7xl md:text-[100px] font-black text-white leading-[0.8] uppercase tracking-tighter italic">
            PRIDE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">LONDON</span>
          </h1>

          <p className="text-blue-100/80 text-lg md:text-xl max-w-lg leading-relaxed font-medium border-l-4 border-[#DBA111] pl-6">
            Stamford Bridge is rising. Experience the clinical precision of <span className="text-[#DBA111] font-bold">João Pedro</span> and the magic of <span className="text-[#DBA111] font-bold">Cole Palmer</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="group relative px-10 py-5 bg-[#DBA111] text-white font-black uppercase tracking-widest text-xs transition-all duration-300 -skew-x-12 hover:bg-white hover:text-[#034694] active:scale-95">
              <div className="skew-x-12 flex items-center gap-2">
                Match Center 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
            <button className="px-10 py-5 border-2 border-white/30 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#034694] hover:border-white transition-all duration-300 -skew-x-12">
              <div className="skew-x-12">Squad Stats</div>
            </button>
          </div>
        </div>

        {/* Right Content - Live Stats Badge */}
        <div className="hidden lg:flex justify-end perspective-1000">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] space-y-10 min-w-[360px] transform hover:rotate-y-6 transition-transform duration-500">
            
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200/50 font-bold mb-1">Top Scorer</p>
                <h3 className="text-3xl font-black text-white italic">João Pedro</h3>
              </div>
              <div className="text-5xl font-black text-[#DBA111] drop-shadow-[0_0_15px_rgba(219,161,17,0.4)]">14</div>
            </div>

            <div className="flex justify-between items-end border-b border-white/10 pb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200/50 font-bold mb-1">PL Standing</p>
                <h3 className="text-3xl font-black text-white italic">Position</h3>
              </div>
              <div className="text-5xl font-black text-white">5<span className="text-lg text-[#DBA111]">th</span></div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-black mb-4 text-blue-200/50">
                <span>Form Guide</span>
                <span className="text-[#DBA111]">Streak: 2W</span>
              </div>
              <div className="flex gap-3">
                {['W', 'W', 'D', 'W', 'L'].map((res, i) => (
                  <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm transition-all hover:-translate-y-1 ${
                    res === 'W' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 
                    res === 'D' ? 'bg-zinc-600 text-white' : 
                    'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                  }`}>
                    {res}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#021d3d] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
