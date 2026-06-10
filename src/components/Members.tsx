import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Belt = {
  rank: string;
  rankEn: string;
  members: string[];
  results?: { name: string; achievements: string[] }[];
};

const belts: Belt[] = [
  { rank: 'VI. Dan', rankEn: '', members: ['Pataki Krisztián'], results: [{ name: 'Pataki Krisztián', achievements: ['2008 Lengyelország EB – tradicionális küzdelem: 1. hely', '2007 Quebec Világbajnokság – tradicionális küzdelem: 3. hely', '2007 Szeged OB – formagyakorlat: 1. hely', '2007 Szeged OB – tradicionális küzdelem: 1. hely', '2006 Constanca EB – formagyakorlat: 3. hely'] }] },
  { rank: 'IV. Dan', rankEn: '', members: ['Leiti Edmond'], results: [{ name: 'Leiti Edmond', achievements: ['2006 Hatvan Európa Kupa – küzdelem -63kg: 1. hely', '2005 Budapest OB – küzdelem -63kg: 3. hely'] }] },
  { rank: 'III. Dan', rankEn: '', members: ['Kiss Viktor', 'Patakiné Zs. Anikó'] },
  { rank: 'II. Dan', rankEn: '', members: ['Almási Zsolt', 'Csáki Máté', 'Dányi Leonetta', 'Höflinger Zsolt', 'Jakab Norbert', 'Kardos Zsolt', 'Kökény Bence', 'Schäfer Péter', 'Takács Ágnes'] },
  { rank: 'I. Dan', rankEn: '', members: ['Fodor Andrea', 'Horváth Gergő', 'Králik Csaba', 'Mireisz Tibor', 'Nagy Varga Bence', 'Nagy Varga Csenge', 'Nas Levente', 'Orha Noémi', 'Papp Alexandra', 'Simon Gábor', 'Solymosi Hanna Zoé', 'Tar Balázs', 'Vajler Éva'] },
  { rank: '1.gup', rankEn: '', members: ['Borzsák Endre', 'Hegyi Márton', 'Käfer Dóra', 'Kiss Judit', 'Kovács Anna Viola', 'Nas Timur', 'Pribelszki Dóra', 'Nijhuis Sam', 'Trepka Zsolt'] },
  { rank: '2.gup', rankEn: '', members: ['Béres Dominik', 'Epres Barnabás', 'Héni Petra', 'Horváth Anna Eszter', 'Pataki Marcell', 'Wieser Melinda'] },
  { rank: '3.gup', rankEn: '', members: ['Gervai Milán', 'Gódor Julianna', 'Kiss Enikő', 'Nas Mira', 'Nász József Péter', 'Orha Virág'] },
  { rank: '4.gup', rankEn: '', members: ['Baranyai Réka', 'Fekete Lilien', 'Hamar Bence', 'Hegedűs István', 'Hegyi Áron', 'Héni Kristóf', 'Horváth Fruzsina', 'Id. Talián István', 'ifj. Talián István', 'Mireisz Zsolt'] },
  { rank: '5.gup', rankEn: '', members: ['Balázs Olivér', 'Baltovics Beáta', 'Ferencz Botond', 'Fülöp Zoltán', 'Gervai Tamás', 'Kopsa Alexander', 'Kovács Lehel', 'Lovas Ádám', 'Patkós Gábor', 'Pintér Mold Illés', 'Szepesi Henriett', 'Ványi Nimród', 'Varga Ádám Zsolt', 'Virág József'] },
  { rank: '6.gup', rankEn: '', members: ['Bihari Gábor', 'Csáki István', 'Epres Péter', 'Ferencz Orsolya', 'Gondás Lionel Martin', 'Kupi Alina', 'Mireisz Kornél', 'Pataki Aida', 'Sidlo Ádám'] },
  { rank: '7.gup', rankEn: '', members: ['Antalicz Viktória', 'Hajdú Zalán', 'Fehérvári Zoltán', 'Gárdonyi Bálint', 'Gazsi Gergő', 'Gervai Bence', 'Horváth Bálint', 'Nijhuis Philip', 'Horváth Zsolt', 'Kovarik Zsombor', 'Néveri Béla', 'Néveri Dávid', 'Pécsi Benedek', 'Pécsi József', 'Pécsi-Kincses Regina', 'Somodi Márk'] },
  { rank: '8.gup', rankEn: '', members: ['Babák Piroska', 'Gazsi Gábor', 'Mireisz Kornél Tibor', 'Mucsi Danica', 'Somodi Viktor', 'Vajler Ádám', 'Veron-Nagy Gergő'] },
  { rank: '9.gup', rankEn: '', members: ['Cserni Miranda', 'Pintér Levente', 'Gárdonyi Ágoston', 'Hu Linhao Alen', 'Hu Linbo Bower', 'Simon Attila', 'Spitz Benedek', 'Szabó Levente', 'Szép-Magyar Izabella', 'Moravek Sámuel Zoltán'] },
  { rank: '10.gup', rankEn: '', members: ['Varga Vendel', 'Vágány Benedek', 'Hu Shanyan Emi', 'Laapotti Petra', 'Hu Zhenqi Leo', 'Csutak Nimród Balázs', 'Vajda Zoé'] },
];

function BeltRow({ belt }: { belt: Belt }) {
  const [open, setOpen] = useState(false);
  const isBlackBelt = belt.rank.includes('Dan');
  
  const getStripeColor = () => {
    switch(belt.rank) {
      case '1.gup': return 'bg-black';
      case '3.gup': return 'bg-red-600';
      case '5.gup': return 'bg-blue-700';
      case '7.gup': return 'bg-emerald-600';
      case '9.gup': return 'bg-yellow-400';
      default: return null;
    }
  };

  let beltBg = 'bg-gray-950', embroideryColor = 'text-gray-200', borderColor = 'border-gray-800';
  if (isBlackBelt) { 
    beltBg = 'bg-black'; embroideryColor = 'text-amber-400 font-black tracking-[0.2em] font-serif'; borderColor = 'border-amber-900'; 
  } else { 
    switch (belt.rank) {
      case '1.gup': case '2.gup': beltBg = 'bg-red-600'; embroideryColor = 'text-black'; borderColor = 'border-red-700'; break;
      case '3.gup': case '4.gup': beltBg = 'bg-blue-700'; embroideryColor = 'text-red-900'; borderColor = 'border-blue-800'; break;
      case '5.gup': case '6.gup': beltBg = 'bg-emerald-600'; embroideryColor = 'text-blue-800'; borderColor = 'border-emerald-700'; break;
      case '7.gup': case '8.gup': beltBg = 'bg-yellow-400'; embroideryColor = 'text-emerald-950'; borderColor = 'border-yellow-500'; break;
      case '9.gup': case '10.gup': beltBg = 'bg-white'; embroideryColor = 'text-black'; borderColor = 'border-gray-300'; break;
    }
  }

  return (
    <div className={`border rounded-xl overflow-hidden ${borderColor}`}>
      <button 
        className={`relative w-full flex items-center justify-between p-5 uppercase tracking-widest font-black font-serif ${beltBg} ${embroideryColor}`} 
        onClick={() => setOpen(!open)}
      >
        {getStripeColor() && <div className={`absolute left-32 top-0 bottom-0 w-3 ${getStripeColor()}`}></div>}
        <div className="flex items-center">
           {isBlackBelt && <img src="/himzes1.webp" alt="hímzés" className="w-8 h-8 mr-4 object-contain" />}
           <span className="text-xl">{belt.rank}</span>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-xs normal-case tracking-normal opacity-70">({belt.members.length} fő)</span>
           {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      {open && (
        <div className="bg-gray-950 p-6 border-t border-gray-900">
          <div className="flex flex-wrap gap-2"> {belt.members.map((name) => ( <div key={name} className="px-3 py-1 rounded bg-gray-900 border border-gray-800 text-sm text-gray-300">{name}</div> ))} </div>
          {belt.results && ( <div className="mt-4 pt-4 border-t border-gray-900"> {belt.results.map((r) => ( <div key={r.name} className="text-xs text-gray-400 font-medium"><strong>{r.name}</strong>: {r.achievements.join(', ')}</div> ))} </div> )}
        </div>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero szekció */}
      <div className="relative h-[300px] w-full mt-16 md:mt-20 flex items-center border-b border-gray-800 overflow-hidden">
        <img src="/tigrisek.webp" className="absolute inset-0 w-full h-full object-cover" alt="Tigrisek" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 w-full">
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Tagjaink</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-white">
        <div className="space-y-4 mb-16"> {belts.map((belt) => <BeltRow key={belt.rank} belt={belt} />)} </div>
        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="font-black text-xl mb-6 flex items-center gap-3"><span className="w-2 h-6 bg-orange-500 rounded-full"></span>Tagoknak — Fontos tudnivalók</h3>
          <ul className="space-y-6 text-sm text-gray-400">
            <li className="flex items-start gap-4">
              <span className="text-orange-500 font-bold text-lg">01.</span>
              <div><p><strong className="text-white">Sportorvosi vizsgálat</strong> — Gyerekeknek fél évente, felnőtteknek évente kötelező.</p>
                <div className="flex gap-4 pt-2"><a href="https://online.osei.hu/bejelentkezes" className="text-orange-500 underline">OSEI időpont</a><a href="https://osei.hu/images/stories/osei/Sportoli-krdv-20260310-szerkeszthet-.pdf" className="text-gray-300 underline">Kérdőív letöltése</a></div></div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-orange-500 font-bold text-lg">02.</span>
              <p><strong className="text-white">Fejvédő</strong> — Versenyeken kötelező, edzéseken ajánlott. Versenyzőknek mindkét színből (piros és kék) kell rendelkezniük.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
