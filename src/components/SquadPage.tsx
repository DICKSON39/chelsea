import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChelseaPlayerData, type Player } from '../assets/data/index.ts';
import { X, Trophy, Calendar, Shirt, TrendingUp, Info } from 'lucide-react';

const SquadPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const categories = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  const filteredPlayers = useMemo(() => {
    return ChelseaPlayerData.filter((player) => {
      const matchesPosition = filter === 'All' || player.Position === filter;
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesPosition && matchesSearch;
    });
  }, [searchTerm, filter]);

  return (
    <div className="min-h-screen bg-[#021d3d] pb-20 relative">
      {/* HEADER SECTION */}
      <div className="bg-gradient-to-b from-[#034694] to-[#021d3d] pt-32 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="text-[#DBA111] text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 mb-8 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DBA111] to-yellow-200">Full Squad</span>
          </h1>
          <p className="text-blue-200/40 mt-4 font-bold uppercase tracking-widest text-sm">Season 2025/2026 Official Roster</p>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="bg-[#01162e] p-5 rounded-2xl border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl backdrop-blur-xl">
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search player name..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-[#DBA111] focus:ring-1 focus:ring-[#DBA111] transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                  filter === cat ? 'bg-[#DBA111] text-[#021d3d] scale-105' : 'text-white/40 hover:text-white bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SQUAD TABLE */}
      <div className="max-w-7xl mx-auto px-6 mt-16 overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
              <th className="pb-4 px-6">No.</th>
              <th className="pb-4 px-6">Player</th>
              <th className="pb-4 px-6 text-center">Position</th>
              <th className="pb-4 px-6 text-center">G/A</th>
              <th className="pb-4 px-6">Status</th>
              <th className="pb-4 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player) => (
              <tr 
                key={player.id} 
                onClick={() => setSelectedPlayer(player)}
                className="group bg-white/5 hover:bg-white/[0.08] cursor-pointer transition-all"
              >
                <td className="py-5 px-6 rounded-l-xl text-white/30 text-2xl font-black italic group-hover:text-[#DBA111]">
                  {player.shirtNumber}
                </td>
                <td className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#034694] border border-white/10 flex-shrink-0">
                      <img src={player.image} alt="" className="w-full h-full object-contain pt-1" />
                    </div>
                    <div>
                      <div className="font-black text-white uppercase italic text-lg tracking-tight group-hover:translate-x-1 transition-transform">{player.name}</div>
                      <div className="text-white/30 text-[9px] font-bold uppercase tracking-tighter">{player.dateOfBirth}</div>
                    </div>
                  </div>
                </td>
                <td className="py-5 px-6 text-center">
                  <span className="text-blue-300/50 text-[10px] font-black uppercase border border-white/10 px-3 py-1 rounded-full">{player.Position}</span>
                </td>
                <td className="py-5 px-6 text-center text-white font-black">{player.Goals + player.Assists}</td>
                <td className="py-5 px-6">
                  <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md border ${
                    player.status.toLowerCase().includes('on loan') 
                    ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                    : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                  }`}>
                    {player.status}
                  </span>
                </td>
                <td className="py-5 px-6 rounded-r-xl">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DBA111] group-hover:text-[#021d3d] transition-colors">
                        <Info size={14} />
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL: PLAYER BIO */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
          <div className="bg-[#01162e] w-full max-w-4xl rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row animate-in zoom-in duration-300">
            
            <button onClick={() => setSelectedPlayer(null)} className="absolute top-6 right-6 text-white/20 hover:text-white z-50 p-2 bg-black/20 rounded-full">
              <X size={24} />
            </button>

            {/* Modal Left: Imagery */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#034694] to-[#021d3d] p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Background Ghost Number */}
                <div className="text-[180px] font-black text-white/5 absolute -bottom-10 -right-10 italic select-none">
                  #{selectedPlayer.shirtNumber}
                </div>
                
                {/* Player Hero Image */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <img 
                    src={selectedPlayer.image} 
                    alt={selectedPlayer.name} 
                    className="h-[90%] w-auto object-contain brightness-110 transform translate-y-4"
                  />
                </div>

                <div className="relative z-10">
                    <p className="text-[#DBA111] font-black uppercase tracking-widest text-xs mb-4">Player Profile</p>
                    <h2 className="text-white text-5xl font-black uppercase italic tracking-tighter leading-tight mb-4 drop-shadow-lg">
                      {selectedPlayer.name.split(' ')[0]}<br/>
                      {selectedPlayer.name.split(' ').slice(1).join(' ')}
                    </h2>
                    <span className="bg-white text-[#021d3d] px-4 py-1 text-xs font-black uppercase -skew-x-12 inline-block italic shadow-xl">
                        {selectedPlayer.Position}
                    </span>
                </div>
                
                <div className="mt-auto relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase mb-1">Estimated Value</p>
                    <p className="text-white text-3xl font-black text-shadow">{selectedPlayer.marketValue || "N/A"}</p>
                </div>
            </div>

            {/* Modal Right: Details */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12 max-h-[80vh] overflow-y-auto bg-[#01162e]">
                <div className="mb-10">
                    <h3 className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] mb-4">Player Biography</h3>
                    <p className="text-blue-50 text-lg leading-relaxed font-medium italic">
                        "{selectedPlayer.bio || "No biography available for this player."}"
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <Calendar className="text-[#DBA111]" size={20} />
                        <div>
                            <p className="text-white/30 text-[9px] font-black uppercase">Date of Birth</p>
                            <p className="text-white font-bold">{selectedPlayer.dateOfBirth}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <Trophy className="text-[#DBA111]" size={20} />
                        <div>
                            <p className="text-white/30 text-[9px] font-black uppercase">Year Signed</p>
                            <p className="text-white font-bold">{selectedPlayer.yearSigned}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <Shirt className="text-[#DBA111]" size={20} />
                        <div>
                            <p className="text-white/30 text-[9px] font-black uppercase">Apps</p>
                            <p className="text-white font-bold">{selectedPlayer.Appearances}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <TrendingUp className="text-[#DBA111]" size={20} />
                        <div>
                            <p className="text-white/30 text-[9px] font-black uppercase">Goal Contribution</p>
                            <p className="text-white font-bold">{selectedPlayer.Goals + selectedPlayer.Assists} G/A</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SquadPage;