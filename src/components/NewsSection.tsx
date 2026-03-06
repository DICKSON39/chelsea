import React, { useState, useEffect } from 'react';
import { ExternalLink, Clock, Zap } from 'lucide-react';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      // THE FIX: Specific query for Chelsea Football Club to filter out noise
      // We use (Chelsea FC OR "Chelsea Football Club") to ensure sports relevancy
      const query = encodeURIComponent('Chelsea FC OR "Chelsea Football Club"');
      const apiKey = '9511bfae4b82468d888ae8cf5e569be7';
      const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=4&apiKey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      
      // Filter out removed articles (common in NewsAPI)
      const validArticles = data.articles?.filter((a: any) => a.title !== '[Removed]') || [];
      
      setArticles(validArticles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section id="news" className="bg-[#021d3d] py-24 px-6 border-t border-white/5 relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#DBA111] font-black uppercase tracking-[0.3em] text-[10px] mb-2">
              <Zap size={14} fill="#DBA111" className="animate-pulse" /> Live From The Bridge
            </div>
            <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">News</span>
            </h2>
          </div>
          <button className="hidden md:block text-white/40 font-black uppercase text-[10px] tracking-widest hover:text-[#DBA111] transition-colors border-b border-transparent hover:border-[#DBA111] pb-1">
            View All Reports
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-white/5 rounded-3xl animate-pulse border border-white/5" />
            ))
          ) : (
            articles.map((news: any, idx) => (
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                key={idx} 
                className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 bg-[#01162e] transition-all duration-500 hover:border-[#DBA111]/50 hover:shadow-[0_0_30px_rgba(3,70,148,0.3)]"
              >
                {/* Image Overlay with Zoom Effect */}
                <div className="absolute inset-0">
                  <img 
                    src={news.urlToImage || 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80'} 
                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700" 
                    alt={news.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01162e] via-[#01162e]/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-[10px] font-black text-[#DBA111] uppercase tracking-widest mb-3">
                    <Clock size={12} /> {new Date(news.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                  </div>
                  
                  <h3 className="text-white text-lg font-black uppercase italic leading-tight mb-4 group-hover:text-[#DBA111] transition-colors line-clamp-3">
                    {news.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/30 text-[9px] font-bold uppercase tracking-tighter">
                      {news.source.name}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#DBA111] group-hover:text-[#021d3d] transition-all">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;