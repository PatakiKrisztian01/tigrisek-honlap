import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Belt = {
  rank: string;
  rankEn: string;
  color: string;
  members: string[];
  results?: { name: string; achievements: string[] }[];
};

const belts: Belt[] = [
  {
    rank: '6.Dan',
    rankEn: 'Black Belt',
    color: 'bg-gray-800 text-gray-100',
    members: ['Pataki Krisztián'],
    results: [
      {
        name: 'Pataki Krisztián',
        achievements: [
          '2008 Lengyelország EB – tradicionális küzdelem: 1. hely',
          '2007 Quebec Világbajnokság – tradicionális küzdelem: 3. hely',
          '2007 Szeged OB – formagyakorlat: 1. hely',
          '2007 Szeged OB – tradicionális küzdelem: 1. hely',
          '2006 Constanca EB – formagyakorlat: 3. hely',
        ],
      },
    ],
  },
  {
    rank: '4.Dan',
    rankEn: 'Black Belt',
    color: 'bg-gray-800 text-gray-100',
    members: ['Leiti Edmond'],
    results: [
      {
        name: 'Leiti Edmond',
        achievements: [
          '2006 Hatvan Európa Kupa – küzdelem -63kg: 1. hely',
          '2005 Budapest OB – küzdelem -63kg: 3. hely',
        ],
      },
    ],
  },
  {
    rank: '3.Dan',
    rankEn: 'Black Belt',
    color: 'bg-gray-800 text-gray-100',
    members: ['Kiss Viktor', 'Patakiné Zs. Anikó'],
  },
  {
    rank: '2.Dan',
    rankEn: 'Black Belt',
    color: 'bg-gray-800 text-gray-100',
    members: ['Almási Zsolt', 'Csáki Máté', 'Dányi Leonetta', 'Höflinger Zsolt', 'Jakab Norbert', 'Kardos Zsolt', 'Kökény Bence', 'Schäfer Péter', 'Takács Ágnes'],
  },
  {
    rank: '1.Dan',
    rankEn: 'Black Belt',
    color: 'bg-gray-800 text-gray-100',
    members: ['Fodor Andrea', 'Horváth Gergő', 'Králik Csaba', 'Mireisz Tibor', 'Nagy Varga Bence', 'Nagy Varga Csenge', 'Nas Levente', 'Orha Noémi', 'Papp Alexandra', 'Simon Gábor', 'Solymosi Hanna Zoé', 'Tar Balázs', 'Vajler Éva'],
  },
  {
    rank: '1.gup',
    rankEn: 'Piros-fekete öv',
    color: 'bg-neon-orange/40 text-neon-orange',
    members: ['Borzsák Endre', 'Hegyi Márton', 'Käfer Dóra', 'Kiss Judit', 'Kovács Anna Viola', 'Nas Timur', 'Pribelszki Dóra', 'Trepka Zsolt'],
  },
  {
    rank: '2.gup',
    rankEn: 'Piros öv',
    color: 'bg-neon-orange/30 text-neon-orange',
    members: ['Béres Dominik', 'Epres Barnabás', 'Héni Petra', 'Horváth Anna Eszter', 'Nijhuis Sam', 'Wieser Melinda'],
  },
  {
    rank: '3.gup',
    rankEn: 'Kék-piros öv',
    color: 'bg-sky-900/50 text-sky-100',
    members: ['Gervai Milán', 'Gódor Julianna', 'Kiss Enikő', 'Nas Mira', 'Nász József Péter', 'Orha Virág', 'Pataki Marcell'],
  },
  {
    rank: '4.gup',
    rankEn: 'Kék öv',
    color: 'bg-sky-900/40 text-sky-100',
    members: ['Baranyai Réka', 'Hamar Bence', 'Hegedűs István', 'Hegyi Áron', 'Héni Kristóf', 'Horváth Fruzsina', 'Id. Talián István', 'ifj. Talián István', 'Mireisz Zsolt'],
  },
  {
    rank: '5.gup',
    rankEn: 'Zöld-kék öv',
    color: 'bg-emerald-900/50 text-emerald-100',
    members: ['Balázs Olivér', 'Baltovics Beáta', 'Fekete Lilien', 'Ferencz Botond', 'Fülöp Zoltán', 'Gervai Tamás', 'Kovács Lehel', 'Lovas Ádám', 'Patkós Gábor', 'Szepesi Henriett', 'Szőnyi Csilla', 'Varga Ádám Zsolt', 'Virág József'],
  },
  {
    rank: '6.gup',
    rankEn: 'Zöld öv',
    color: 'bg-emerald-900/40 text-emerald-100',
    members: ['Bihari Gábor', 'Csáki István', 'Epres Péter', 'Ferencz Orsolya', 'Gondás Lionel Martin', 'Kopsa Alexander', 'Pataki Aida', 'Sidlo Ádám', 'Ványi Nimród'],
  },
  {
    rank: '7.gup',
    rankEn: 'Sárga-zöld öv',
    color: 'bg-yellow-900/40 text-yellow-100',
    members: ['Antalicz Viktória', 'Fehérvári Zoltán', 'Gárdonyi Bálint', 'Gazsi Gergő', 'Gervai Bence', 'Horváth Bálint', 'Horváth Zsolt', 'Kovarik Zsombor', 'Néveri Béla', 'Néveri Dávid', 'Pécsi Benedek', 'Pécsi József', 'Pécsi-Kincses Regina', 'Pintér Mold Illés', 'Somodi Márk'],
  },
  {
    rank: '8.gup',
    rankEn: 'Sárga öv',
    color: 'bg-yellow-900/30 text-yellow-100',
    members: ['Babák Piroska', 'Gazsi Gábor', 'Hajdú Zalán', 'Mireisz Kornél Tibor', 'Somodi Viktor', 'Vajler Ádám'],
  },
  {
    rank: '9.gup',
    rankEn: 'Narancs öv',
    color: 'bg-orange-900/40 text-orange-100',
    members: ['Baka Lia', 'Dobos Roland', 'Gárdonyi Ágoston', 'Gránicz Mónika', 'Kerekes Viktor', 'Nijhuis Philip', 'Simon Attila', 'Spitz Benedek', 'Szabó Levente', 'Szép-Magyar Izabella', 'Varga Richárd Norman', 'Veron-Nagy Gergő'],
  },
  {
    rank: '10.gup',
    rankEn: 'Fehér öv',
    color: 'bg-gray-700/40 text-gray-200',
    members: ['Gazdag Dániel', 'Kenéz Milán', 'Kőhegyi Vitold', 'Laapotti Petra', 'Mészáros Bence', 'Mireisz Kornél'],
  },
];

function BeltRow({ belt }: { belt: Belt }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors">
      <button
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gray-900 hover:bg-gray-800/80 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${belt.color}`}>
            {belt.rank}
          </span>
          <div>
            <span className="text-white font-bold">{belt.rankEn}</span>
            <span className="text-gray-500 text-sm ml-2">({belt.members.length} fő)</span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="bg-gray-950/50 border-t border-gray-800 p-4 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {belt.members.map((name) => (
              <span key={name} className="text-sm text-gray-300 bg-gray-800 rounded-lg px-3 py-1.5 border border-gray-700">
                {name}
              </span>
            ))}
          </div>
          {belt.results && belt.results.length > 0 && (
            <div className="mt-6 space-y-4">
              {belt.results.map((r) => (
                <div key={r.name}>
                  <h4 className="text-neon-orange font-bold mb-2">{r.name} — Eredmények</h4>
                  <ul className="space-y-1">
                    {r.achievements.map((a, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-neon-orange mt-1 flex-shrink-0">›</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csapatunk</p>
          <h1 className="text-5xl font-black text-white">Tagok</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important docs */}
        <div className="bg-amber-950/30 border border-amber-800/30 rounded-2xl p-6 mb-12">
          <h3 className="text-amber-400 font-bold text-lg mb-4">Tagoknak — Fontos tudnivalók</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">1.</span>
              <span>
                <strong className="text-white">Sportorvosi vizsgálat</strong> — Gyerekeknek fél évente, felnőtteknek évente kötelező.
                Előre kell időpontot foglalni az OSEI-nél.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">2.</span>
              <span>
                <strong className="text-white">Fejvédő</strong> — Versenyeken kötelező, edzéseken erősen ajánlott.
                Versenyzőknek mindkét színből (piros és kék) kell legyen!
              </span>
            </li>
          </ul>
        </div>

        {/* Members by rank */}
        <h2 className="text-3xl font-black text-white mb-6">Tagok övszín szerint</h2>
        <div className="space-y-3">
          {belts.map((belt) => (
            <BeltRow key={belt.rank} belt={belt} />
          ))}
        </div>
      </div>
    </div>
  );
}
