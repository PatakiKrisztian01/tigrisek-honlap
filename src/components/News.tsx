import { Calendar, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const newsFiles = import.meta.glob('/public/data/news/*.json', { eager: true });

export default function News() {
  const navigate = useNavigate();

  const newsItems = Object.entries(newsFiles).map(([path, data]: any) => ({
    ...data,
    slug: path.split('/').pop()?.replace('.json', '')
  })).sort((a, b) => {
    // Okos dátum konvertálás: kezeli a régi és az új formátumot is
    const parseDate = (d: string) => {
      // Ha már YYYY-MM-DD formátumú, közvetlenül kezeli
      if (d.includes('-')) return new Date(d).getTime();
      // Ha "Év. Hónap Nap" formátumú, átalakítja
      return new Date(d.replace(/ /g, '-').replace(/\./g, '')).getTime();
    };

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    
    return dateB - dateA; // Legújabb előre
  });

  const categoryColors: Record<string, string> = {
    Közlemény: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    Verseny: 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
    Bajnokság: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white">Hírek</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300"
              >
                {item.image && (
                  <div className="w-full h-80 overflow-hidden bg-gray-950 flex items-center justify-center">
                    <img
                      src={item.image.startsWith('/') ? item.image : '/' + item.image}
                      alt={item.title}
                      className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => navigate(`/hirek/${item.slug}`)}
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold ${categoryColors[item.category] ?? 'bg-gray-800 text-gray-300'}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>

                  <h2 className="text-white font-black text-2xl mb-4">{item.title}</h2>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.body}
                  </p>

                  <button 
                    onClick={() => navigate(`/hirek/${item.slug}`)}
                    className="text-neon-orange font-bold hover:underline"
                  >
                    Tovább olvasom →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
               <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                 <iframe 
                   src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBudapestTigers&tabs=timeline&width=340&height=500&adapt_container_width=true" 
                   width="340" 
                   height="500" 
                   style={{ border: 'none', overflow: 'hidden' }} 
                   allow="encrypted-media"
                   title="Facebook"
                 ></iframe>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
