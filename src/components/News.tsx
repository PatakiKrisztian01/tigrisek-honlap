import { Calendar, Facebook, ExternalLink, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const newsFiles = import.meta.glob('/public/data/news/*.json', { eager: true });

export default function News() {
  const navigate = useNavigate();

  const newsItems = Object.entries(newsFiles).map(([path, data]: any) => ({
    ...data,
    slug: path.split('/').pop()?.replace('.json', '')
  })).sort((a, b) => {
    // Dátum szerinti csökkenő sorrend (legújabb előre)
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const categoryColors: Record<string, string> = {
    Közlemény: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    Verseny: 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
    Bajnokság: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
  };

  return (
    <div className="min-h-screen pt-20 bg-black overflow-x-hidden">
      
      {/* Fejléc */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-white">Hírek</h1>
        </div>
      </div>

      {/* Tartalmi rész */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* BAL OSZLOP: HONLAP HÍREI */}
          <div className="lg:col-span-2 space-y-8 w-full">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="w-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 flex flex-col"
              >
                {item.image && (
                  <div className="w-full h-auto overflow-hidden bg-gray-950">
                    <img
                      src={item.image.startsWith('/') ? item.image : '/' + item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-[250px] md:max-h-[400px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => navigate(`/hirek/${item.slug}`)}
                    />
                  </div>
                )}
                
                <div className="p-5 md:p-8 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold ${categoryColors[item.category] ?? 'bg-gray-800 text-gray-300'}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>

                  <h2 className="text-white font-black text-xl md:text-2xl mb-4 line-clamp-2">{item.title}</h2>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                    {item.body}
                  </p>

                  <button 
                    onClick={() => navigate(`/hirek/${item.slug}`)}
                    className="text-neon-orange font-bold hover:underline inline-block"
                  >
                    Tovább olvasom →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* JOBB OSZLOP: PRÉMIUM, 100% STABIL FACEBOOK KÁRTYA */}
          <div className="lg:col-span-1 w-full">
            <div className="sticky top-24 w-full">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full flex flex-col relative overflow-hidden shadow-2xl">
                
                {/* Dekoratív neon háttér-fény */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1877F2]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#1877F2]/10 rounded-xl border border-[#1877F2]/20">
                    <Facebook className="w-5 h-5 text-[#1877F2] fill-[#1877F2]" />
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase text-xs tracking-wider">Közösség</h3>
                    <p className="text-gray-400 text-[10px] font-semibold">Budapesti Tigrisek SE</p>
                  </div>
                </div>

                <div className="border-t border-gray-800/60 my-2"></div>

                {/* Szöveges blokk ami úgy néz ki mint egy élő poszt */}
                <div className="py-4 text-left">
                  <p className="text-white font-bold text-sm mb-2">Friss infók és galériák a Facebookon!</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Mivel a közösségi oldalon naponta osztunk meg képeket az edzésekről, az övvizsgák hangulatáról és a legújabb eseményekről, kattints át és pörgesd végig az élő hírfolyamunkat!
                  </p>
                </div>

                {/* Interaktív gombcsoport */}
                <div className="mt-4 space-y-3">
                  <a 
                    href="https://www.facebook.com/BudapestTigers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs shadow-lg group"
                  >
                    <span>Megnyitás a Facebook alkalmazásban</span>
                    <ExternalLink className="w-3 h-3 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a 
                    href="https://www.facebook.com/BudapestTigers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gray-950 hover:bg-gray-800 border border-gray-800 text-gray-300 font-medium py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1 text-xs"
                  >
                    <span>Legfrissebb fotók megtekintése</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* Apró lábléc infó */}
                <div className="mt-6 text-center">
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">@BudapestTigers</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
