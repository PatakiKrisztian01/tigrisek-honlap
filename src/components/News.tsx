import { Calendar, Facebook, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

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

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/data/news/index.json');
        const slugs: string[] = await res.json();
        const items = await Promise.all(
          slugs.map(async (slug) => {
            const r = await fetch(`/data/news/${slug}.json`);
            return r.json() as Promise<NewsItem>;
          })
        );
        setNewsItems(items);
      } catch {
        setNewsItems([]);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Legfrissebb</p>
          <h1 className="text-5xl font-black text-white">Hírek</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-white mb-8">Legutóbbi Hírek</h2>
            <div className="space-y-6">
              {newsItems.map((item, i) => (
                <article
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 group"
                >
                  {item.image && (
                    <div className="w-full h-48 sm:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[item.category] ?? 'bg-gray-800 text-gray-300 border-gray-700'}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-600 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h2 className="text-white font-black text-xl sm:text-2xl mb-4 group-hover:text-neon-orange transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ÉLŐ FACEBOOK HÍRFOLYAM SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Facebook className="w-6 h-6 text-blue-500 fill-current" />
                <h2 className="text-2xl font-black text-white">Facebook hírfolyam</h2>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center space-y-4 shadow-xl">
                {/* Hivatalos, beágyazott Facebook hírfolyam doboz */}
                <div className="w-full overflow-hidden rounded-xl bg-white flex justify-center">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBudapestTigers&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340"
                    height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Budapest Tigers Facebook Feed"
                    className="w-full max-w-[340px]"
                  ></iframe>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/BudapestTigers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-neon-orange text-black font-black text-sm uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white shadow-[0_4px_15px_rgba(255,165,0,0.2)] hover:scale-[1.02]"
                  >
                    Megnyitás a Facebookon
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
