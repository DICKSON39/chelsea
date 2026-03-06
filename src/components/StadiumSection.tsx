import React from 'react';
import { MapPin, Users, Maximize } from 'lucide-react';

const StadiumSection = () => {
  const stands = [
    {
      name: "Matthew Harding Stand",
      capacity: "10,884",
      vibe: "The heartbeat of the Bridge. Known for the most vocal home supporters.",
      color: "from-blue-600/20"
    },
    {
      name: "The Shed End",
      capacity: "6,831",
      vibe: "Historical home of the most loyal fans, located at the south end of the pitch.",
      color: "from-[#DBA111]/20"
    },
    {
      name: "East Stand",
      capacity: "10,925",
      vibe: "The oldest stand, housing the tunnel, dugouts, and dressing rooms.",
      color: "from-blue-600/20"
    },
    {
      name: "West Stand",
      capacity: "13,500",
      vibe: "The modern face of the stadium, featuring luxury suites and the best views.",
      color: "from-[#DBA111]/20"
    }
  ];

  return (
    <section className="bg-[#021d3d] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-[#DBA111] font-black uppercase tracking-widest text-sm mb-2">Our Fortress</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
            Stamford <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">Bridge</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: TECHNICAL DATA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 border-l-4 border-[#DBA111] p-6 rounded-r-2xl backdrop-blur-md transition-transform hover:translate-x-2">
              <div className="flex items-center gap-4 mb-2">
                <Users className="text-[#DBA111]" size={20} />
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Capacity</p>
              </div>
              <p className="text-white text-3xl font-black italic">40,341</p>
            </div>

            <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-r-2xl backdrop-blur-md transition-transform hover:translate-x-2">
              <div className="flex items-center gap-4 mb-2">
                <Maximize className="text-blue-500" size={20} />
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Pitch Size</p>
              </div>
              <p className="text-white text-3xl font-black italic">103m x 67m</p>
            </div>

            <div className="bg-white/5 border-l-4 border-[#DBA111] p-6 rounded-r-2xl backdrop-blur-md transition-transform hover:translate-x-2">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="text-[#DBA111]" size={20} />
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Location</p>
              </div>
              <p className="text-white text-3xl font-black italic">Fulham Road, SW6</p>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE STANDS */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {stands.map((stand, idx) => (
              <div 
                key={idx} 
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${stand.color} to-transparent transition-all duration-500 hover:border-[#DBA111]/50 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Numbering */}
                <div className="absolute -bottom-6 -right-4 text-9xl font-black text-white/5 italic select-none">
                  0{idx + 1}
                </div>
                
                <h4 className="text-white text-2xl font-black uppercase italic mb-2 relative z-10">{stand.name}</h4>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="h-px w-8 bg-[#DBA111]"></div>
                  <p className="text-[#DBA111] font-black text-[10px] uppercase tracking-[0.2em]">{stand.capacity} Seats</p>
                </div>
                <p className="text-blue-100/40 text-sm leading-relaxed relative z-10 pr-10">
                  {stand.vibe}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ACCENT */}
        <div className="mt-20 relative h-[300px] w-full rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80" 
            alt="Stamford Bridge" 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021d3d] via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <p className="text-[#DBA111] font-black uppercase tracking-[0.4em] text-xs mb-1">Established</p>
            <p className="text-white text-5xl font-black italic uppercase">Since 1877</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StadiumSection;