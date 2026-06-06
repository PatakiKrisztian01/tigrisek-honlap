import { Calendar, Facebook, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Itt "varázsolunk": ez a parancs minden .json fájlt beolvas a mappából
const newsFiles = import.meta.glob('/public/data/news/*.json', { eager: true });

export default function News() {
  const navigate = useNavigate();

  // Átalakítjuk a beolvasott fájlokat egy könnyen kezelhető listává
  const newsItems = Object.entries(newsFiles).map(([path, data]: any) => ({
    ...data,
    slug: path.split('/').pop()?.replace('.json', '')
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen pt-20">
      {/* ... (A fejléc marad ugyanaz) ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {newsItems.map((item, i) => (
                <article
                  key={i}
                  onClick={() => navigate(`/hirek/${item.slug}`)}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* ... (A kártya tartalma ugyanaz marad) ... */}
                  <div className="p-6">
                    <h2 className="text-white font-black text-xl">{item.title}</h2>
                    <p className="text-gray-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
