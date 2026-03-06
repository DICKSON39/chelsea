
import { Link } from 'react-router-dom';
import { Trophy, Star, History, Target, ShieldCheck } from 'lucide-react';

const ClubHistory = () => {
  const milestones = [
    {
      year: "1905",
      title: "The Foundation",
      description: "Chelsea Football Club was founded at The Rising Sun pub (now The Butcher's Hook). Unlike many other clubs, Chelsea was founded specifically to play at an existing stadium, Stamford Bridge.",
      icon: <History size={24} />
    },
    {
      year: "1955",
      title: "First League Title",
      description: "Under manager Ted Drake, Chelsea shocked the footballing world by securing their first League Championship, moving away from the 'Old Pensioners' image to the 'Blues'.",
      icon: <Trophy size={24} />
    },
    {
      year: "1970/71",
      title: "European Success",
      description: "The King's Road era. Chelsea won their first European trophy, the Cup Winners' Cup, defeating Real Madrid in a replay in Athens.",
      icon: <Star size={24} />
    },
    {
      year: "2003",
      title: "The Revolution",
      description: "Roman Abramovich took ownership of the club, ushering in the most successful era in Chelsea history. Jose Mourinho's arrival followed shortly after, making Chelsea a global powerhouse.",
      icon: <Target size={24} />
    },
    {
      year: "2012",
      title: "Kings of Europe",
      description: "Against all odds, Chelsea defeated Bayern Munich in their own stadium on penalties to win their first UEFA Champions League title.",
      icon: <ShieldCheck size={24} />
    },
    {
      year: "2021",
      title: "Double Champions",
      description: "A masterclass in Porto saw Chelsea defeat Manchester City 1-0 to secure their second Champions League trophy, cementing their status as London's most successful club in Europe.",
      icon: <Trophy size={24} />
    }
  ];

  const honors = [
    { title: "Premier League", count: 6 },
    { title: "Champions League", count: 2 },
    { title: "FA Cup", count: 8 },
    { title: "Europa League", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#021d3d] pb-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#021d3d] via-transparent to-[#034694]/50"></div>
        
        <div className="relative z-10 text-center px-6">
          <Link to="/" className="text-[#DBA111] text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center justify-center gap-2 mb-8 group">
             <span className="group-hover:-translate-x-1 transition-transform">←</span> Home
          </Link>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">
            Legacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DBA111] to-yellow-200">&</span> Pride
          </h1>
          <p className="text-blue-200/60 font-bold uppercase tracking-[0.5em] text-sm">Est. 1905 • Stamford Bridge</p>
        </div>
      </div>

      {/* HONORS BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {honors.map((honor, idx) => (
            <div key={idx} className="bg-[#01162e]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center shadow-2xl">
              <p className="text-[#DBA111] text-4xl font-black italic mb-1">{honor.count}</p>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{honor.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-32 relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DBA111] via-blue-500 to-transparent hidden md:block"></div>

        <div className="space-y-24">
          {milestones.map((item, index) => (
            <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              
              {/* Year Marker */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#021d3d] border-2 border-[#DBA111] rounded-full z-10 hidden md:flex items-center justify-center text-[#DBA111] shadow-[0_0_20px_rgba(219,161,17,0.3)]">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <span className="text-6xl font-black text-white/5 italic mb-2 block">{item.year}</span>
                <h3 className="text-[#DBA111] text-2xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h3>
                <p className="text-blue-100/60 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="mt-40 text-center px-6">
        <div className="inline-block p-1 bg-gradient-to-r from-transparent via-[#DBA111]/50 to-transparent w-full max-w-2xl mb-12"></div>
        <h4 className="text-white text-3xl font-black uppercase italic mb-8">The Story Continues...</h4>
        <Link to="/squad" className="bg-white text-[#021d3d] px-10 py-4 font-black uppercase italic -skew-x-12 hover:bg-[#DBA111] hover:text-white transition-all inline-block">
          <div className="skew-x-12">Meet the Current Squad</div>
        </Link>
      </div>
    </div>
  );
};

export default ClubHistory;