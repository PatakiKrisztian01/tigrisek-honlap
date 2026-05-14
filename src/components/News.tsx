import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const newsItems = [
  {
    date: '2026. Április 1.',
    category: 'Közlemény',
    title: 'Ajánld fel adód 1%-át a Tigriseknek!',
    body: `Most Te is segíthetsz nekünk, ráadásul ez Neked egyetlen forintodba sem kerül! Ajánld fel adód 1%-át a Tigrisek javára, és légy részese Te is a közösségünk sikereinek!

Adószámunk: 18012020-1-43

Pár kattintás az egész az Ügyfélkapun keresztül:
1. Kattints a NAV eSZJA oldalára: eszja.nav.gov.hu
2. Lépj be és válaszd az 1+1%-os nyilatkozatot.
3. Illeszd be az adószámunkat!

Segíts, hogy harcosaink méltó körülmények között készülhessenek! Köszönjük a bizalmat és a támogatást!`,
  },
  {
    date: '2025',
    category: 'Verseny',
    title: 'Danvizsga',
    body: 'Gratulálunk minden versenyzőnknek, aki sikeresen teljesítette a danvizsgát! Kemény edzésmunkájuk meghozta gyümölcsét.',
  },
  {
    date: '2025',
    category: 'Verseny',
    title: 'WAKO Kickbox Világkupa – Jesolo',
    body: 'Csapatunk versenyzői kiemelkedő eredményeket értek el a jesolói Kickbox Világkupán. Büszkék vagyunk rájuk!',
  },
  {
    date: '2025',
    category: 'Bajnokság',
    title: 'Magyarbajnokság',
    body: 'Tigrisek versenyzői ismét bizonyítottak az Országos Bajnokságon. Gratulálunk minden résztvevőnek és érmeseinknek!',
  },
  {
    date: '2025',
    category: 'Bajnokság',
    title: 'Diákolimpia',
    body: 'Fiatal sportolóink remekül szerepeltek a Diákolimpián. A jövő bajnokai egyre erősebbek!',
  },
];

const categoryColors: Record<string, string> = {
  Közlemény: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
  Verseny: 'bg-neon-orange/20 text-neon-orange border-neon-orange/30',
  Bajnokság: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
};

export default function News() {
  useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    } else if (window.FB?.XFBML) {
      window.FB.XFBML.parse();
    }
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

          {/* Facebook Feed Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-black text-white mb-6">Facebook Feed</h2>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/BudapestTigers"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="800"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote cite="https://www.facebook.com/BudapestTigers" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/BudapestTigers">Budapesti Tigrisek SE</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    FB?: {
      XFBML?: {
        parse: () => void;
      };
    };
  }
}
