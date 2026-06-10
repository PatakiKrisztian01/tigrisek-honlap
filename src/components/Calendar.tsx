import { Calendar as CalendarIcon, MapPin } from 'lucide-react';

const events = [
  {
    date: "Február",
    title: "Országos Technikai Szeminárium",
    location: "Monor",
    type: "Szeminárium"
  },
  {
    date: "Március",
    title: "ITF Taekwon-do I.-VI. Dan Mestervizsga",
    location: "Budapest",
    type: "Vizsga"
  },
  {
    date: "Március",
    title: "ITF Taekwon-do Magyar Bajnokság",
    location: "Pécs / Kozármisleny",
    type: "Verseny"
  },
  {
    date: "Április",
    title: "AETF Taekwon-do Európa-bajnokság",
    location: "Kihirdetett helyszín",
    type: "Nemzetközi"
  },
  {
    date: "Május",
    title: "ITF Taekwon-do Nemzetek Kupája",
    location: "Hatvan",
    type: "Verseny"
  },
  {
    date: "Június",
    title: "Országos Színesöves Nyári Vizsgák (2-1. Gup)",
    location: "Budapest",
    type: "Vizsga"
  },
  {
    date: "Július / Augusztus",
    title: "Nyári Egyesületi Edzőtábor",
    location: "Kijelölt táborhelyszín",
    type: "Tábor"
  },
  {
    date: "Október",
    title: "Mighty Fist Eagles Cup Nemzetközi Bajnokság",
    location: "Monor",
    type: "Verseny"
  },
  {
    date: "November",
    title: "Országos Színesöves Őszi Vizsgák (10-3. Gup)",
    location: "Budapest",
    type: "Vizsga"
  }
];

export default function Calendar() {
  return (
    <div className="min-h-screen pt-20">
      {/* Fejléc */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Szövetségi és Egyesületi Programok</p>
          {/* text-3xl mobilon, text-5xl nagyobb kijelzőkön, hogy garantáltan kiférjen */}
          <h1 className="text-3xl sm:text-5xl font-black text-white flex items-center gap-4 tracking-tight sm:tracking-normal">
            ESEMÉNYNAPTÁR <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-neon-orange hidden sm:block" />
          </h1>
        </div>
      </div>

      {/* Tartalom */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          <div className="p-6 border-b border-gray-800 bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">Hivatalos Eseménynaptár</h2>
              <p className="text-gray-400 text-xs mt-1">A Magyar ITF Taekwon-do Szövetség és saját eseményeink menetrendje.</p>
            </div>
            <a 
              href="https://www.taekwon-do.hu/szovetseg/esemeny.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex text-xs text-white hover:text-neon-orange border border-neon-orange/30 hover:border-neon-orange px-3 py-1.5 rounded-lg bg-neon-orange/5 transition-all self-start sm:self-center font-bold"
            >
              Hivatalos szövetségi forrás &rarr;
            </a>
          </div>

          <div className="divide-y divide-gray-800/60 bg-black/10">
            {events.map((event, idx) => (
              <div 
                key={idx} 
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-850/30 transition-colors"
              >
                {/* Dátum (Fehér szín, Narancs hangsúllyal) */}
                <div className="min-w-[140px] flex items-center gap-3">
                  <div className="text-sm font-mono font-black text-white border-l-2 border-neon-orange pl-3 uppercase tracking-wider">
                    {event.date}
                  </div>
                </div>

                {/* Cím és Típus ikonnal */}
                <div className="flex-grow space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${
                      event.type === 'Verseny' || event.type === 'Nemzetközi'
                        ? 'bg-neon-orange/10 text-neon-orange border-neon-orange/20' 
                        : event.type === 'Vizsga' 
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-gray-800 text-gray-300 border-gray-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                    {event.title}
                  </h3>
                </div>

                {/* Helyszín */}
                <div className="flex items-center gap-2 text-gray-400 text-sm md:justify-end min-w-[180px]">
                  <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                  <span>{event.location}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Tájékoztató szöveg */}
        <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed max-w-2xl mx-auto font-medium">
          * Figyelem! A dátumok és helyszínek tájékoztató jellegűek, a mindenkori hivatalos kiírások a szövetségi oldalon és az edzéseken kerülnek pontosításra. A változtatás jogát a Szövetség és az Egyesület vezetősége fenntartja.
        </p>
      </div>
    </div>
  );
}
