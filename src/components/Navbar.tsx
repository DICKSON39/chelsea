import  { useState, useEffect } from 'react';
// Note: If you don't have lucide-react, you can use plain SVGs for the menu icons
import { Menu, X, } from 'lucide-react'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Players', 'About', 'Legends', 'trophy', 'standing'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-[#034694] shadow-2xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
             <span className="text-[#034694] font-black text-xl">C</span>
          </div>
          <h1 className="text-white font-black text-2xl tracking-tighter italic">
            MY<span className="text-[#DBA111]">CHELSEA</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-[#DBA111] text-[11px] font-bold uppercase tracking-[0.15em] transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DBA111] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block text-right mr-4 border-r border-white/20 pr-4">
              <p className="text-[9px] text-[#DBA111] font-bold uppercase tracking-tighter">Next Match</p>
              <p className="text-white text-xs font-black">CFC vs ARS</p>
          </div>
          
          <button className="bg-[#DBA111] text-white px-5 py-2 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#034694] transition-all -skew-x-12 hidden sm:block">
            <span className="inline-block skew-x-12"></span>
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#DBA111] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-[#034694] border-t border-white/10 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-6">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl font-black uppercase italic hover:translate-x-3 transition-transform duration-200"
            >
              {link}
            </a>
          ))}
          <button className="bg-[#DBA111] text-white p-4 font-black uppercase text-center">
            Buy Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;