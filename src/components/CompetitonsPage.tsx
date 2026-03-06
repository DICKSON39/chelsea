import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ChevronRight, Trophy } from 'lucide-react';

interface TeamStanding {
  position: number;
  team: { name: string; crest: string };
  playedGames: number;
  points: number;
  goalDifference: number;
}

// Reusable Card for the Horizontal Grid
const StandingCard = ({ title, id, color }: { title: string; id: string; color: string }) => {
  const [data, setData] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/competitions/${id}/standings`, {
          headers: { 'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_TOKEN }
        });
        const json = await res.json();
        // Handle both League (table) and Tournament (groups) structures
        const table = json.standings[0].type === 'TOTAL' 
          ? json.standings[0].table 
          : json.standings.find((s: any) => s.table.some((t: any) => t.team.name.includes('Chelsea')))?.table || json.standings[0].table;
        
        setData(table.slice(0, 5)); // Show top 5 for the preview card
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div id='standing' className="min-w-[320px] md:min-w-[380px] bg-[#021227] rounded-3xl border border-white/5 p-6 flex flex-col relative overflow-hidden group">
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${color} to-transparent opacity-50`} />
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-black uppercase italic tracking-tighter text-lg flex items-center gap-2">
          <Trophy size={16} className="text-blue-500" /> {title}
        </h3>
        <Link to={`/liveTable/${id}`} className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors group">
          <ChevronRight size={18} className="text-white/40 group-hover:text-white" />
        </Link>
      </div>

      {loading ? (
        <div className="flex-1 flex items-center justify-center py-10"><Loader2 className="animate-spin text-blue-600" /></div>
      ) : (
        <div className="space-y-3">
          {data.map((row) => (
            <div key={row.team.name} className={`flex items-center justify-between p-2 rounded-xl ${row.team.name.includes('Chelsea') ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-white/[0.02]'}`}>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-white/20 w-4">{row.position}</span>
                <img src={row.team.crest} alt="" className="w-5 h-5 object-contain" />
                <span className={`text-[11px] font-bold truncate w-24 ${row.team.name.includes('Chelsea') ? 'text-blue-400' : 'text-white/70'}`}>
                  {row.team.name.replace(' FC', '')}
                </span>
              </div>
              <div className="flex gap-4 text-[10px] font-black">
                <span className="text-white/20">GD {row.goalDifference}</span>
                <span className="text-white italic">{row.points} PTS</span>
              </div>
            </div>
          ))}
          <Link to={`/liveTable/${id}`} className="block text-center pt-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-blue-500 transition-colors">
            View Full Standings
          </Link>
        </div>
      )}
    </div>
  );
};

const CompetitionsPage = () => {
  // List of competitions Chelsea is/might be in
  const competitions = [
    { title: "Premier League", id: "PL", color: "from-purple-600" },
    { title: "Champions League", id: "CL", color: "from-blue-600" },
    { title: "FA Cup", id: "FAC", color: "from-red-600" }, // Note: API access depends on your tier
  ];

  return (
    <div className="min-h-screen bg-[#010a14] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
            Live <span className="text-blue-600">Standings</span>
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
              Real-time Competition Tracking • 2025/26
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Grid */}
        <div className="flex gap-6 overflow-x-auto pb-10 no-scrollbar">
          {competitions.map((comp) => (
            <StandingCard 
              key={comp.id}
              title={comp.title}
              id={comp.id}
              color={comp.color}
            />
          ))}
        </div>

        {/* Pro Tip Note */}
        <div className="mt-10 p-6 rounded-3xl bg-blue-600/5 border border-blue-500/10 text-center">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest italic">
            Swipe or scroll horizontally to view all active Chelsea competitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;