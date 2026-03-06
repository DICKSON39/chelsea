import React from 'react';
import { ChelseaLegends } from '../assets/data/index.ts';
import { Award, Star } from 'lucide-react';

const LegendsSection = () => {
  return (
    <section id='legends' className="bg-[#01162e] py-24 px-6 border-t border-[#DBA111]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#DBA111] font-black uppercase tracking-[0.3em] text-sm mb-4 flex items-center justify-center gap-2">
            <Star size={16} fill="#DBA111" /> Hall of Fame <Star size={16} fill="#DBA111" />
          </h2>
          <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DBA111] to-yellow-200">Legends</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ChelseaLegends.map((legend) => (
            <div key={legend.id} className="group relative bg-[#021d3d] border border-[#DBA111]/10 rounded-2xl p-8 hover:border-[#DBA111]/50 transition-all duration-500 overflow-hidden">
              {/* Decorative background text */}
              <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 italic select-none">
                {legend.name.charAt(0)}
              </div>

              <p className="text-[#DBA111] font-bold text-[10px] uppercase tracking-widest mb-2">{legend.yearsActive}</p>
              <h4 className="text-white text-2xl font-black uppercase italic mb-4">{legend.name}</h4>
              
              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex justify-between text-xs">
                  <span className="text-white/40 uppercase font-bold">Apps</span>
                  <span className="text-white font-black">{legend.appearances}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/40 uppercase font-bold">Goals</span>
                  <span className="text-white font-black">{legend.goals}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {legend.honours.slice(0, 2).map((trophy, idx) => (
                  <span key={idx} className="bg-[#DBA111]/10 text-[#DBA111] text-[9px] font-black px-2 py-1 rounded uppercase flex items-center gap-1">
                    <Award size={10} /> {trophy}
                  </span>
                ))}
              </div>

              <p className="text-blue-100/40 text-xs leading-relaxed italic group-hover:text-blue-100/80 transition-colors">
                "{legend.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;