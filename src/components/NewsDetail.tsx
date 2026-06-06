import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  category: string;
  image: string;
  body: string;
}

const categoryColors: Record<string, string> = {
  Közlemény: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
  Verseny: 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
  Bajnokság: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
};

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (!slug) return;
    // Betöltjük a hírt a JSON fájlból
    fetch(`/data/news/${slug}.json`)
      .then(r => r.json())
      .then((data: NewsItem) => {
        setItem(data);
      })
      .catch(() => navigate('/hirek'));
  }, [slug, navigate]);

  if (!item) return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-gray-500">Betöltés...</div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/hirek')}
            className="flex items-center gap-2 text-gray-400 hover:text-neon-orange text-sm font-bold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Vissza a hírekhez
          </button>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[item.category] ?? 'bg-gray-800 text-gray-300 border-gray-700'}`}>
              {item.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black">{item.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {item.image && (
          <div className="w-full mb-12 rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
            <img 
              src={item.image.startsWith('/') ? item.image : '/' + item.image} 
              alt={item.title} 
              className="w-full h-auto object-contain max-h-[600px]" 
            />
          </div>
        )}
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}
