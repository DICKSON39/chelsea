import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const TrophyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const trophies = [
    {
      name: "Champions League",
      count: 2,
      years: ["2012", "2021"],
      desc: "The pinnacle of European football. From the miracle in Munich to the masterclass in Porto.",
      image: "https://ca-times.brightspotcdn.com/dims4/default/cb44bcc/2147483647/strip/true/crop/6000x4000+0+0/resize/1024x683!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7c%2Fb1%2F8455ba25422cad773396108bbb54%2Faptopix-portugal-soccer-champions-league-final-75885.jpg", // Replace with high-res cutouts
    },
    {
      name: "Premier League",
      count: 6,
      years: ["1955", "2005", "2006", "2010", "2015", "2017"],
      desc: "Dominating the toughest league in the world, including the record-breaking 2004/05 season.",
      image: "https://img.icons8.com/color/512/premier-league.png",
    },
    {
      name: "FA Cup",
      count: 8,
      years: ["1970", "1997", "2000", "2007", "2009", "2010", "2012", "2018"],
      desc: "Our storied history with the world's oldest domestic cup competition.",
      image: "https://www.thefa.com/-/media/thefacom-new/images/competitions/emirates-fa-cup/2017-18/the-final/gallery/190518-800-chelsea-celeb-winners.ashx?cw=1048&ch=590&resizemode=crop&jq=100&hash=7F8C30668EAFB2201357EEFD052E47D31A0AA9E0",
    },
    {
      name: "Europa League",
      count: 2,
      years: ["2013", "2019"],
      desc: "European glory in Amsterdam and Baku, cementing our status as continental giants.",
      image: "https://img.icons8.com/color/512/uefa-europa-league.png",
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % trophies.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + trophies.length) % trophies.length);

  return (
    <section className="bg-[#01162e] py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] italic select-none whitespace-nowrap z-0">
        WINNERS WINNERS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: TROPHY IMAGE DISPLAY */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            <div className="absolute w-[300px] h-[300px] bg-[#DBA111]/20 blur-[120px] rounded-full"></div>
            
            <div className="relative transition-all duration-700 transform hover:scale-105">
              <img 
                src={trophies[activeIndex].image} 
                alt={trophies[activeIndex].name}
                className="h-[400px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(219,161,17,0.4)]"
              />
              <div className="absolute -bottom-10 -right-10">
                <span className="text-9xl font-black text-white italic opacity-10 leading-none">
                  x{trophies[activeIndex].count}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT & NAVIGATION */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DBA111] rounded-xl -skew-x-12">
                <Award className="text-[#021d3d] skew-x-12" size={24} />
              </div>
              <h2 className="text-[#DBA111] font-black uppercase tracking-[0.3em] text-sm">The Honours List</h2>
            </div>

            <h3 className="text-6xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-6 leading-none">
              {trophies[activeIndex].name}
            </h3>
            
            <p className="text-blue-100/60 text-xl font-medium leading-relaxed mb-8 max-w-lg italic">
              "{trophies[activeIndex].desc}"
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {trophies[activeIndex].years.map(year => (
                <span key={year} className="px-4 py-1 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-full">
                  {year}
                </span>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              <button onClick={prev} className="p-4 border border-white/10 rounded-full text-white hover:bg-[#DBA111] hover:text-[#021d3d] transition-all">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {trophies.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-300 ${i === activeIndex ? 'w-12 bg-[#DBA111]' : 'w-4 bg-white/10'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-4 border border-white/10 rounded-full text-white hover:bg-[#DBA111] hover:text-[#021d3d] transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrophyCarousel;