import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function News() {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Biztonságosabb betöltés: először az indexet kérjük le
    fetch('/data/news/index.json')
      .then(res => res.json())
      .then(async (slugs: string[]) => {
        const items = await Promise.all(
          slugs.map(async (slug) => {
            const res = await fetch(`/data/news/${slug}.json`);
            const data = await res.json();
            return { ...data, slug };
          })
        );
        
        // Dátum szerinti sorrendezés
        const sorted = items.sort((a, b) => {
          const dateA = new Date(a.date || 0).getTime();
          const dateB = new Date(b.date || 0).getTime();
          return dateB - dateA;
        });
        
        setNewsItems(sorted);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const categoryColors: Record<string, string> = {
    Közlemény: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    Verseny: 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
    Bajnokság: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
  };

  if (loading) return <div className="min-h-screen pt-20 text-white text-center">Betöltés...</div>;

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
              <article key={i} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                {item.image && (
                  <div className="w-full h-80 overflow-hidden bg-gray-950 flex items-center justify-center">
                    <img
                      src={item.image.startsWith('/') ? item.image : '/' + item.image}
                      alt={item.title}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => navigate(`/hirek/${item.slug}`)}
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full border text-xs font-bold ${categoryColors[item.category] ?? 'bg-gray-800 text-gray-300'}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h2 className="text-white font-black text-2xl mb-4">{item.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.body}</p>
                  <button onClick={() => navigate(`/hirek/${item.slug}`)} className="text-neon-orange font-bold hover:underline">
                    Tovább olvasom →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
