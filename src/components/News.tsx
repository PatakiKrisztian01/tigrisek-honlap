import { Calendar, Facebook, ExternalLink } from 'lucide-react';

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

          {/* Új, Biztonságos Facebook Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-black text-white mb-6">Közösségi Média</h2>
              
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center space-y-6 relative overflow-hidden group hover:border-neon-orange/30 transition-all duration-300">
                {/* Dekoratív háttér ikon */}
                <div className="absolute -right-10 -bottom-10 text-gray-800/10 w-40 h-40 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <Facebook className="w-full h-full" />
                </div>

                <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mx-auto border border-blue-600/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Facebook className="w-8 h-8 fill-current" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg">Kövess minket Facebookon!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Legfrissebb mindennapi híreinket, edzőtábori pillanatainkat, galériáinkat és azonnali hirdetményeinket a hivatalos Facebook oldalunkon tesszük közzé.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/budapestitigrisekse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-neon-orange text-black font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all duration-300 hover:bg-white shadow-[0_4px_20px_rgba(255,165,0,0.2)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                  >
                    Tigrisek Facebook Oldal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-gray-600 text-xs">
                  Azonnali frissítések &bull; Élő közösség
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
