import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Download } from 'lucide-react';

const belts = [
  { rank: '6.Dan', rankEn: 'Fekete öv — VI. Dan', members: ['Pataki Krisztián'], results: [{ name: 'Pataki Krisztián', achievements: ['2008 Lengyelország EB – tradicionális küzdelem: 1. hely', '2007 Quebec Világbajnokság – tradicionális küzdelem: 3. hely', '2007 Szeged OB – formagyakorlat: 1. hely', '2007 Szeged OB – tradicionális küzdelem: 1. hely', '2006 Constanca EB – formagyakorlat: 3. hely'] }] },
  { rank: '4.Dan', rankEn: 'Fekete öv — IV. Dan', members: ['Leiti Edmond'], results: [{ name: 'Leiti Edmond', achievements: ['2006 Hatvan Európa Kupa – küzdelem -63kg: 1. hely', '2005 Budapest OB – küzdelem -63kg: 3. hely'] }] },
  { rank: '3.Dan', rankEn: 'Fekete öv — III. Dan', members: ['Kiss Viktor', 'Patakiné Zs. Anikó'] },
  { rank: '2.Dan', rankEn: 'Fekete öv — II. Dan', members: ['Almási Zsolt', 'Csáki Máté', 'Dányi Leonetta', 'Höflinger Zsolt', 'Jakab Norbert', 'Kardos Zsolt', 'Kökény Bence', 'Schäfer Péter', 'Takács Ágnes'] },
  { rank: '1.Dan', rankEn: 'Fekete öv — I. Dan', members: ['Fodor Andrea', 'Horváth Gergő', 'Králik Csaba', 'Mireisz Tibor', 'Nagy Varga Bence', 'Nagy Varga Csenge', 'Nas Levente', 'Orha Noémi', 'Papp Alexandra', 'Simon Gábor', 'Solymosi Hanna Zoé', 'Tar Balázs', 'Vajler Éva'] },
  { rank: '1.gup', rankEn: 'Piros öv — Fekete csík', members: ['Borzsák Endre', 'Hegyi Márton', 'Käfer Dóra', 'Kiss Judit', 'Kovács Anna Viola', 'Nas Timur', 'Pribelszki Dóra', 'Trepka Zsolt'] },
  { rank: '2.gup', rankEn: 'Piros öv', members: ['Béres Dominik', 'Epres Barnabás', 'Héni Petra', 'Horváth Anna Eszter', 'Nijhuis Sam', 'Wieser Melinda'] },
  { rank: '3.gup', rankEn: 'Kék öv — Piros csík', members: ['Gervai Milán', 'Gódor Julianna', 'Kiss Enikő', 'Nas Mira', 'Nász József Péter', 'Orha Virág', 'Pataki Marcell'] },
  { rank: '4.gup', rankEn: 'Kék öv', members: ['Baranyai Réka', 'Hamar Bence', 'Hegedűs István', 'Hegyi Áron', 'Héni Kristóf', 'Horváth Fruzsina', 'Id. Talián István', 'ifj. Talián István', 'Mireisz Zsolt'] },
  { rank: '5.gup', rankEn: 'Zöld öv — Kék csík', members: ['Balázs Olivér', 'Baltovics Beáta', 'Fekete Lilien', 'Ferencz Botond', 'Fülöp Zoltán', 'Gervai Tamás', 'Kovács Lehel', 'Lovas Ádám', 'Patkós Gábor', 'Szepesi Henriett', 'Szőnyi Csilla', 'Varga Ádám Zsolt', 'Virág József'] },
  { rank: '6.gup', rankEn: 'Zöld öv', members: ['Bihari Gábor', 'Csáki István', 'Epres Péter', 'Ferencz Orsolya', 'Gondás Lionel Martin', 'Kupi Alina', 'Kopsa Alexander', 'Pataki Aida', 'Sidlo Ádám', 'Ványi Nimród'] },
  { rank: '7.gup', rankEn: 'Sárga öv — Zöld csík', members: ['Antalicz Viktória', 'Fehérvári Zoltán', 'Gárdonyi Bálint', 'Gazsi Gergő', 'Gervai Bence', 'Horváth Bálint', 'Horváth Zsolt', 'Kovarik Zsombor', 'Néveri Béla', 'Néveri Dávid', 'Pécsi Benedek', 'Pécsi József', 'Pécsi-Kincses Regina', 'Pintér Mold Illés', 'Somodi Márk'] },
  { rank: '8.gup', rankEn: 'Sárga öv', members: ['Babák Piroska', 'Gazsi Gábor', 'Hajdú Zalán', 'Mireisz Kornél Tibor', 'Somodi Viktor', 'Vajler Ádám'] },
  { rank: '9.gup', rankEn: 'Fehér öv — Sárga csík', members: ['Baka Lia', 'Dobos Roland', 'Gárdonyi Ágoston', 'Gránicz Mónika', 'Kerekes Viktor', 'Nijhuis Philip', 'Simon Attila', 'Spitz Benedek', 'Szabó Levente', 'Szép-Magyar Izabella', 'Varga Richárd Norman', 'Veron-Nagy Gergő'] },
  { rank: '10.gup', rankEn: 'Fehér öv', members: ['Gazdag Dániel', 'Kenéz Milán', 'Kőhegyi Vitold', 'Laapotti Petra', 'Mészáros Bence', 'Mireisz Kornél'] },
];

function BeltRow({ belt }: { belt: any }) {
  const [open, setOpen] = useState(false);
  const isBlackBelt = belt.rank.includes('Dan');

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${isBlackBelt ? 'border-neon-orange/60' : 'border-gray-800'}`}>
      <button
        className={`w-full flex items-center justify-between p-4 uppercase font-black tracking-wider ${isBlackBelt ? 'bg-black text-amber-400' : 'bg-gray-900 text-gray-200'}`}
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif">{belt.rankEn}</span>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {open && (
        <div className="bg-gray-950 p-6 border-t border-gray-900">
          <div className="flex flex-wrap gap-2">
            {belt.members.map((name: string) => (
              <span key={name} className="px-3 py-1 bg-gray-900 rounded-lg text-sm text-gray-300 border border-gray-800">
                {name}
              </span>
            ))}
          </div>
          {belt.results && (
            <div className="mt-4 pt-4 border-t border-gray-900">
              {belt.results.map((r: any) => (
                <div key={r.name} className="text-xs text-amber-500 font-bold mb-2 uppercase">{r.name} - Eredmények:</div>
              ))}
              <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
                {belt.results.flatMap((r: any) => r.achievements).map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen bg-black text-gray-100 pt-20">
      
      {/* HERO SZEKCIÓ */}
      <div className="relative h-[300px] w-full flex items-center overflow-hidden border-b border-gray-800">
        <img src="/tigrisek.jpg" alt="Budapest Tigers SE Csapat" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <p className="text-neon-orange text-sm font-bold uppercase mb-2">Csapatunk</p>
          <h1 className="text-5xl font-black text-white uppercase">Tagok</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Important docs - visszakerült a linkekkel */}
        <div className="bg-amber-950/20 border border-amber-900/40 rounded-2xl p-6 mb-12">
          <h3 className="text-amber-400 font-bold text-lg mb-4">Tagoknak — Fontos tudnivalók</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">1.</span>
              <div className="space-y-2">
                <span><strong className="text-white">Sportorvosi vizsgálat</strong> — Gyerekeknek fél évente, felnőtteknek évente kötelező.</span>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="https://online.osei.hu/bejelentkezes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neon-orange hover:text-orange-400 font-bold underline transition-colors">
                    <span>OSEI online időpontfoglalás</span> <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://osei.hu/images/stories/osei/Sportoli-krdv-20260310-szerkeszthet-.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold underline transition-colors">
                    <span>Letöltendő kérdőív vizsgálathoz (PDF)</span> <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">2.</span>
              <span><strong className="text-white">Fejvédő</strong> — Versenyeken kötelező, edzéseken erősen ajánlott. Versenyzőknek mindkét színből (piros és kék) kell legyen!</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-black text-white mb-6">Tagok övszín szerint</h2>
        <div className="space-y-4">
          {belts.map((belt) => <BeltRow key={belt.rank} belt={belt} />)}
        </div>
      </div>
    </div>
  );
}
