import { Calendar, Facebook, ExternalLink } from 'lucide-react';
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

      {/* Tartalom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* HÍREK LISTÁJA */}
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
                    <span className="text-gray-500 text-xs flex items-center gap-1">
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

          {/* JOBB OSZLOP - A VALÓDI PÖRGETHETŐ FACEBOOK HÍRFOLYAM */}
          <div className="lg:col-span-1 w-full">
            <div className="sticky top-24 w-full">
               <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 w-full flex flex-col overflow-hidden">
                 
                 <h3 className="text-white font-black uppercase text-xs tracking-wider mb-4 flex items-center gap-2 px-1">
                   <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" /> Facebook hírfolyam
                 </h3>

                 {/* Fehér hátterű doboz, hogy a Facebook widget olvasható legyen, és ne lógjon ki mobilon sem */}
                 <div className="w-full bg-white rounded-xl p-1 overflow-hidden flex justify-center shadow-inner">
                   <iframe 
                     src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBudapestTigers&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                     width="340" 
                     height="500" 
                     style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '340px' }} 
                     allowFullScreen={true}
                     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     title="Budapesti Tigrisek Facebook Oldal Hírfolyam"
                   ></iframe>
                 </div>

               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
