import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Download } from 'lucide-react';

type Belt = {
  rank: string;
  rankEn: string;
  members: string[];
  results?: { name: string; achievements: string[] }[];
};

const belts: Belt[] = [
  { rank: '6.Dan', rankEn: 'VI. Dan', members: ['Pataki Krisztián'], results: [{ name: 'Pataki Krisztián', achievements: ['2008 Lengyelország EB – tradicionális küzdelem: 1. hely', '2007 Quebec Világbajnokság – tradicionális küzdelem: 3. hely', '2007 Szeged OB – formagyakorlat: 1. hely', '2007 Szeged OB – tradicionális küzdelem: 1. hely', '2006 Constanca EB – formagyakorlat: 3. hely'] }] },
  { rank: '4.Dan', rankEn: 'IV. Dan', members: ['Leiti Edmond'], results: [{ name: 'Leiti Edmond', achievements: ['2006 Hatvan Európa Kupa – küzdelem -63kg: 1. hely', '2005 Budapest OB – küzdelem -63kg: 3. hely'] }] },
  { rank: '3.Dan', rankEn: 'III. Dan', members: ['Kiss Viktor', 'Patakiné Zs. Anikó'] },
  { rank: '2.Dan', rankEn: 'II. Dan', members: ['Almási Zsolt', 'Csáki Máté', 'Dányi Leonetta', 'Höflinger Zsolt', 'Jakab Norbert', 'Kardos Zsolt', 'Kökény Bence', 'Schäfer Péter', 'Takács Ágnes'] },
  { rank: '1.Dan', rankEn: 'I. Dan', members: ['Fodor Andrea', 'Horváth Gergő', 'Králik Csaba', 'Mireisz Tibor', 'Nagy Varga Bence', 'Nagy Varga Csenge', 'Nas Levente', 'Orha Noémi', 'Papp Alexandra', 'Simon Gábor', 'Solymosi Hanna Zoé', 'Tar Balázs', 'Vajler Éva'] },
  { rank: '1.gup', rankEn: '', members: ['Borzsák Endre', 'Hegyi Márton', 'Käfer Dóra', 'Kiss Judit', 'Kovács Anna Viola', 'Nas Timur', 'Pribelszki Dóra', 'Trepka Zsolt'] },
  { rank: '2.gup', rankEn: '', members: ['Béres Dominik', 'Epres Barnabás', 'Héni Petra', 'Horváth Anna Eszter', 'Nijhuis Sam', 'Wieser Melinda'] },
  { rank: '3.gup', rankEn: '', members: ['Gervai Milán', 'Gódor Julianna', 'Kiss Enikő', 'Nas Mira', 'Nász József Péter', 'Orha Virág', 'Pataki Marcell'] },
  { rank: '4.gup', rankEn: '', members: ['Baranyai Réka', 'Fekete Lilien', 'Hamar Bence', 'Hegedűs István', 'Hegyi Áron', 'Héni Kristóf', 'Horváth Fruzsina', 'Id. Talián István', 'ifj. Talián István', 'Mireisz Zsolt'] },
  { rank: '5.gup', rankEn: '', members: ['Balázs Olivér', 'Baltovics Beáta', 'Ferencz Botond', 'Fülöp Zoltán', 'Gervai Tamás', 'Kopsa Alexander', 'Kovács Lehel', 'Lovas Ádám', 'Patkós Gábor', 'Pintér Mold Illés', 'Szepesi Henriett', 'Ványi Nimród', 'Varga Ádám Zsolt', 'Virág József'] },
  { rank: '6.gup', rankEn: '', members: ['Bihari Gábor', 'Csáki István', 'Epres Péter', 'Ferencz Orsolya', 'Gondás Lionel Martin', 'Kupi Alina', 'Mireisz Kornél', 'Pataki Aida', 'Sidlo Ádám'] },
  { rank: '7.gup', rankEn: '', members: ['Antalicz Viktória', 'Hajdú Zalán', 'Fehérvári Zoltán', 'Gárdonyi Bálint', 'Gazsi Gergő', 'Gervai Bence', 'Horváth Bálint', 'Nijhuis Philip', 'Horváth Zsolt', 'Kovarik Zsombor', 'Néveri Béla', 'Néveri Dávid', 'Pécsi Benedek', 'Pécsi József', 'Pécsi-Kincses Regina', 'Somodi Márk'] },
  { rank: '8.gup', rankEn: '', members: ['Babák Piroska', 'Gazsi Gábor', 'Mireisz Kornél Tibor', 'Somodi Viktor', 'Vajler Ádám', 'Veron-Nagy Gergő'] },
  { rank: '9.gup', rankEn: '', members: ['Cserni Miranda', 'Pintér Levente', 'Gárdonyi Ágoston', 'Hu Linhao Alen', 'Hu Linbo Bower', 'Simon Attila', 'Spitz Benedek', 'Szabó Levente', 'Szép-Magyar Izabella', 'Moravek Sámuel Zoltán'] },
  { rank: '10.gup', rankEn: '', members: ['Varga Vendel', 'Vágány Benedek', 'Hu Shanyan Emi', 'Laapotti Petra', 'Hu Zhenqi Leo', 'Csutak Nimród Balázs'] },
];

function BeltRow({ belt }: { belt: Belt }) {
  const [open, setOpen] = useState(false);
  const isBlackBelt = belt.rank.includes('Dan');
  
  // Csík meghatározása színek alapján (border-l-12px végigfut a gomb teljes magasságán)
  const getStripeClass = () => {
    switch (belt.rank) {
      case '1.gup': return 'border-l-[12px] border-l-black';
      case '3.gup': return 'border-l-[12px] border-l-red-500';
      case '5.gup': return 'border-l-[12px] border-l-blue-600';
      case '7.gup': return 'border-l-[12px] border-l-emerald-600';
      case '9.gup': return 'border-l-[12px] border-l-yellow-400';
      default: return '';
    }
  };

  let beltBg = 'bg-gray-950'; let embroideryColor = 'text-gray-200'; let borderColor = 'border-gray-800';
  if (isBlackBelt) { beltBg = 'bg-black'; embroideryColor = 'text-amber-400 font-extrabold'; borderColor = 'border-neon-orange/60'; }
  else { switch (belt.rank) {
      case '1.gup': case '2.gup': beltBg = 'bg-red-600'; embroideryColor = 'text-black'; borderColor = 'border-red-700'; break;
      case '3.gup': case '4.gup': beltBg = 'bg-blue-600'; embroideryColor = 'text-red-200'; borderColor = 'border-blue-700'; break;
      case '5.gup': case '6.gup': beltBg = 'bg-emerald-600'; embroideryColor = 'text-blue-900'; borderColor = 'border-emerald-700'; break;
      case '7.gup': case '8.gup': beltBg = 'bg-yellow-400'; embroideryColor = 'text-emerald-950'; borderColor = 'border-yellow-500'; break;
      case '9.gup': case '10.gup': beltBg = 'bg-white'; embroideryColor = 'text-black'; borderColor = 'border-gray-300'; break;
  } }

  return (
    <div className={`border rounded-xl overflow-hidden ${borderColor}`}>
      <button className={`w-full flex items-center justify-between p-4 uppercase font-black ${beltBg} ${embroideryColor} ${getStripeClass()}`} onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-4">
           {isBlackBelt && <img src="/himzes1.webp" alt="hímzés" className="w-8 h-8 object-contain" />}
           <span className="text-lg">{belt.rank}</span>
           <span className="text-sm font-light opacity-80">{belt.rankEn}</span>
        </div>
        <span className="text-xs opacity-75">({belt.members.length} fő)</span>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {open && (
        <div className="bg-gray-950 p-6">
          <div className="flex flex-wrap gap-2"> {belt.members.map((name) => ( <div key={name} className="px-3 py-1 rounded bg-gray-900 border border-gray-800 text-sm text-gray-300">{name}</div> ))} </div>
          {belt.results && ( <div className="mt-4 pt-4 border-t border-gray-900"> {belt.results.map((r) => ( <div key={r.name} className="text-xs text-gray-500"><strong>{r.name}</strong>: {r.achievements.join(', ')}</div> ))} </div> )}
        </div>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[300px] w-full flex items-center border-b border-gray-800">
        <img src="/tigrisek.webp" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto px-6 w-full"><h1 className="text-5xl font-black text-white">Tagok</h1></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-16"> {belts.map((belt) => <BeltRow key={belt.rank} belt={belt} />)} </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
           <h3 className="text-white font-black text-xl mb-6">Tagoknak — Fontos tudnivalók</h3>
           <ul className="space-y-4 text-sm text-gray-400">
              <li>1. <strong className="text-white">Sportorvosi vizsgálat</strong> — Kötelező.</li>
              <li>2. <strong className="text-white">Fejvédő</strong> — Versenyeken kötelező.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
