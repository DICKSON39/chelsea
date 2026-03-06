import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader2, ArrowLeft, Info } from 'lucide-react';

interface TeamStanding {
  position: number;
  team: { name: string; crest: string };
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalDifference: number;
}

const LiveTable = () => {
  const { id } = useParams<{ id: string }>(); 
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [competitionName, setCompetitionName] = useState("");
  const [groupName, setGroupName] = useState<string | null>(null);

  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/competitions/${id}/standings`, {
          headers: { 
            'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_TOKEN 
          }
        });
        const data = await response.json();
        
        setCompetitionName(data.competition.name);

        // LOGIC: Check if this is a tournament with Groups (like Champions League)
        // We look for the group that contains "Chelsea"
        const chelseaStanding = data.standings.find((s: any) => 
          s.table.some((t: any) => t.team.name.includes('Chelsea'))
        );

        if (chelseaStanding) {
          // It's a group stage (CL / Conference League)
          setStandings(chelseaStanding.table);
          setGroupName(chelseaStanding.group.replace('_', ' '));
        } else {
          // It's a standard league table (PL)
          setStandings(data.standings[0].table);
          setGroupName(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching standings:", error);
        setLoading(false);
      }
    };

    if (id) fetchStandings();
  }, [id]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#010a14] text-white">
      <Loader2 className="animate-spin mb-4 text-blue-600" size={40} />
      <p className="font-bold uppercase tracking-widest text-xs opacity-40 italic">Retrieving Competition Data...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#010a14] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors uppercase font-black text-[10px] tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Return to Dashboard
        </Link>

        <div className="mb-12">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
            {competitionName} <span className="text-blue-600">Standings</span>
          </h1>
          {groupName && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
              <Info size={14} className="text-blue-500" />
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">
                Currently Viewing: {groupName}
              </p>
            </div>
          )}
        </div>

        <div className="overflow-x-auto bg-[#021227] rounded-3xl border border-white/5 p-6 md:p-10 relative">
          {/* Glassmorphism Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5">
                <th className="pb-6 pl-4">Pos</th>
                <th className="pb-6">Club</th>
                <th className="pb-6 text-center">MP</th>
                <th className="pb-6 text-center">W</th>
                <th className="pb-6 text-center">D</th>
                <th className="pb-6 text-center">L</th>
                <th className="pb-6 text-center">GD</th>
                <th className="pb-6 text-right pr-4">Pts</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {standings.map((row) => (
                <tr 
                  key={row.team.name} 
                  className={`group transition-all border-b border-white/5 hover:bg-white/[0.03] ${
                    row.team.name.includes('Chelsea') ? 'bg-blue-600/10' : ''
                  }`}
                >
                  <td className="py-5 pl-4 font-black italic text-xl">{row.position}</td>
                  <td className="py-5">
                    <div className="flex items-center gap-4">
                      <img src={row.team.crest} alt="" className="w-8 h-8 object-contain" />
                      <span className={`font-bold text-lg tracking-tight ${
                        row.team.name.includes('Chelsea') ? 'text-blue-400' : 'text-white/80'
                      }`}>
                        {row.team.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 text-center font-medium text-white/40">{row.playedGames}</td>
                  <td className="py-5 text-center font-medium text-white/40">{row.won}</td>
                  <td className="py-5 text-center font-medium text-white/40">{row.draw}</td>
                  <td className="py-5 text-center font-medium text-white/40">{row.lost}</td>
                  <td className={`py-5 text-center font-bold ${
                    row.goalDifference > 0 ? 'text-green-500' : row.goalDifference < 0 ? 'text-red-500' : 'text-white/20'
                  }`}>
                    {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                  </td>
                  <td className="py-5 text-right pr-4 font-black text-2xl text-blue-100 italic">
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[9px] font-black uppercase text-white/10 tracking-[0.3em]">
               Official Live Feed • Updated {new Date().toLocaleDateString()}
             </p>
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-[9px] font-black uppercase text-white/30">Promotion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <span className="text-[9px] font-black uppercase text-white/30">Relegation</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTable;