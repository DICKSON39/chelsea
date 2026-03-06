import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChelseaPlayerData, type Player } from '../assets/data/index.ts';

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  const isLoaned = player.status.toLowerCase().includes('on loan');
  
  return (
    <div className={`relative group overflow-hidden bg-[#021d3d] rounded-xl border border-white/5 transition-all duration-500 hover:border-[#DBA111]/50 ${isLoaned ? 'opacity-60' : 'opacity-100'}`}>
      {/* Ghost Number Background */}
      <div className="absolute top-0 right-0 text-7xl font-black text-white/5 leading-none select-none italic z-0">
        {player.shirtNumber}
      </div>

      {/* Image Container */}
      <div className="h-64 w-full bg-gradient-to-b from-[#034694] to-[#021d3d] flex items-end justify-center overflow-hidden relative">
        {/* Fallback Text (shows while image loads or if link breaks) */}
        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-4xl uppercase italic select-none">
          {player.name.split(' ').pop()}
        </div>
        
        {/* Actual Player Image */}
        <img 
          src={player.image} 
          alt={player.name}
          className="relative z-10 h-full w-auto object-contain transform transition-transform duration-500 group-hover:scale-110 filter brightness-110"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Info Content */}
      <div className="p-5 relative z-20 bg-gradient-to-t from-[#021d3d] via-[#021d3d] to-transparent">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-white font-black uppercase italic text-xl tracking-tighter">{player.name}</h3>
          <span className="text-[#DBA111] font-black text-lg">#{player.shirtNumber}</span>
        </div>
        
        <p className="text-[10px] text-blue-300/60 uppercase font-bold tracking-widest mb-4">
          {player.Position} {isLoaned && `• ${player.status}`}
        </p>

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
          <div className="text-center">
            <p className="text-[9px] text-gray-400 uppercase font-bold">App</p>
            <p className="text-white font-black">{player.Appearances}</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-[9px] text-gray-400 uppercase font-bold">Goals</p>
            <p className="text-white font-black">{player.Goals}</p>
          </div>
          <div className="text-center">
            <p className="text-[9px] text-gray-400 uppercase font-bold">Ast</p>
            <p className="text-white font-black">{player.Assists}</p>
          </div>
        </div>
      </div>

      {/* Hover Action */}
      <div className="absolute inset-0 bg-[#DBA111]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-full group-hover:translate-x-0 z-30">
        <button className="skew-x-12 text-[#034694] font-black uppercase tracking-widest text-sm">Full Bio</button>
      </div>
    </div>
  );
};

const SquadSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const filteredPlayers = filter === 'All' 
    ? ChelseaPlayerData 
    : ChelseaPlayerData.filter(p => p.Position === filter);

  const displayedPlayers = filteredPlayers.slice(0, 5);

  return (
    <section id="players" className="bg-[#021d3d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-[#DBA111] font-black uppercase tracking-widest text-sm mb-2">First Team</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">Squad</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-[#DBA111] text-white -skew-x-12' 
                  : 'text-white/40 hover:text-white'
                }`}
              >
                <div className={filter === cat ? 'skew-x-12' : ''}>{cat}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {displayedPlayers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
          
          {filteredPlayers.length > 5 && (
            <div className="relative group overflow-hidden bg-white/5 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-8 transition-all hover:bg-white/10 hover:border-[#DBA111]/30 min-h-[400px]">
               <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">And {filteredPlayers.length - 5} others</p>
               <h4 className="text-white text-2xl font-black uppercase italic text-center mb-6 leading-tight">Full 2025/26<br/>Squad List</h4>
               
               <Link 
                to="/squad" 
                className="bg-[#DBA111] text-white px-6 py-3 font-black uppercase text-[10px] tracking-widest -skew-x-12 hover:scale-110 transition-transform inline-block"
              >
                <div className="skew-x-12">View Full Squad</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SquadSection;