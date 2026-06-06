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
  { rank: '1.gup', rankEn: 'Fekete csík', members: ['Borzsák Endre', 'Hegyi Márton', 'Käfer Dóra', 'Kiss Judit', 'Kovács Anna Viola', 'Nas Timur', 'Pribelszki Dóra', 'Trepka Zsolt'] },
  { rank: '2.gup', rankEn: 'Piros öv', members: ['Béres Dominik', 'Epres Barnabás', 'Héni Petra', 'Horváth Anna Eszter', 'Nijhuis Sam', 'Wieser Melinda'] },
  { rank: '3.gup', rankEn: 'Kék öv — Piros csík', members: ['Gervai Milán', 'Gódor Julianna', 'Kiss Enikő', 'Nas Mira', 'Nász József Péter', 'Orha Virág', 'Pataki Marcell'] },
  { rank: '4.gup', rankEn: 'Kék öv', members: ['Baranyai Réka', 'Fekete Lilien', 'Hamar Bence', 'Hegedűs István', 'Hegyi Áron', 'Héni Kristóf', 'Horváth Fruzsina', 'Id. Talián István', 'ifj. Talián István', 'Mireisz Zsolt'] },
  { rank: '5.gup', rankEn: 'Zöld öv — Kék csík', members: ['Balázs Olivér', 'Baltovics Beáta', 'Ferencz Botond', 'Fülöp Zoltán', 'Gervai Tamás', 'Kopsa Alexander', 'Kovács Lehel', 'Lovas Ádám', 'Patkós Gábor', 'Pintér Mold Illés', 'Szepesi Henriett', 'Ványi Nimród', 'Varga Ádám Zsolt', 'Virág József'] },
  { rank: '6.gup', rankEn: 'Zöld öv', members: ['Bihari Gábor', 'Csáki István', 'Epres Péter', 'Ferencz Orsolya', 'Gondás Lionel Martin', 'Kupi Alina', 'Mireisz Kornél', 'Pataki Aida', 'Sidlo Ádám'] },
  { rank: '7.gup', rankEn: 'Sárga öv — Zöld csík', members: ['Antalicz Viktória', 'Hajdú Zalán', 'Fehérvári Zoltán', 'Gárdonyi Bálint', 'Gazsi Gergő', 'Gervai Bence', 'Horváth Bálint', 'Nijhuis Philip', 'Horváth Zsolt', 'Kovarik Zsombor', 'Néveri Béla', 'Néveri Dávid', 'Pécsi Benedek', 'Pécsi József', 'Pécsi-Kincses Regina', 'Somodi Márk'] },
  { rank: '8.gup', rankEn: 'Sárga öv', members: ['Babák Piroska', 'Gazsi Gábor', 'Mireisz Kornél Tibor', 'Somodi Viktor', 'Vajler Ádám', 'Veron-Nagy Gergő'] },
  { rank: '9.gup', rankEn: 'Fehér öv — Sárga csík', members: ['Cserni Miranda', 'Pintér Levente', 'Gárdonyi Ágoston', 'Hu Linhao Alen', 'Hu Linbo Bower', 'Simon Attila', 'Spitz Benedek', 'Szabó Levente', 'Szép-Magyar Izabella', 'Moravek Sámuel Zoltán'] },
  { rank: '10.gup', rankEn: 'Fehér öv', members: ['Varga Vendel', 'Vágány Benedek', 'Hu Shanyan Emi', 'Laapotti Petra', 'Hu Zhenqi Leo', 'Csutak Nimród Balázs'] },
];

function BeltRow({ belt }: { belt: Belt }) {
  const [open, setOpen] = useState(false);
  const isBlackBelt = belt.rank.includes('Dan');
  
  // Csík meghatározása színek alapján
  const getStripeColor = () => {
    if (belt.rank === '1.gup') return 'bg-black';
    if (belt.rank === '3.gup') return 'bg-red-500';
    if (belt.rank === '5.gup') return 'bg-blue-600';
    if (belt.rank === '7.gup') return 'bg-emerald-600';
    if (belt.rank === '9.gup') return 'bg-yellow-400';
    return null;
  };

  const stripeColor = getStripeColor();
  
  let beltBg = 'bg-gray-950'; let embroideryColor = 'text-gray-200'; let borderColor = 'border-gray-800'; let customClasses = 'hover:border-gray-700';
  if (isBlackBelt) { beltBg = 'bg-black'; embroideryColor = 'text-amber-400 font-extrabold tracking-wider'; borderColor = 'border-neon-orange/60'; customClasses = 'hover:border-neon-orange hover:-translate-y-1 shadow-[0_0_15px_rgba(255,90,0,0.15)] hover:shadow-[0_0_25px_rgba(255,90,0,0.35)]'; }
  else { switch (belt.rank) {
      case '1.gup': case '2.gup': beltBg = 'bg-red-600'; embroideryColor = 'text-black'; borderColor = 'border-red-700'; break;
      case '3.gup': case '4.gup': beltBg = 'bg-blue-600'; embroideryColor = 'text-red-200'; borderColor = 'border-blue-700'; break;
      case '5.gup': case '6.gup': beltBg = 'bg-emerald-600'; embroideryColor = 'text-blue-900'; borderColor = 'border-emerald-700'; break;
      case '7.gup': case '8.gup': beltBg = 'bg-yellow-400'; embroideryColor = 'text-emerald-950'; borderColor = 'border-yellow-500'; break;
      case '9.gup': case '10.gup': beltBg = 'bg-white'; embroideryColor = 'text-black'; borderColor = 'border-gray-300'; break;
  } }

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${borderColor} ${customClasses}`}>
      <button className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-all uppercase tracking-wider font-black font-serif ${beltBg} ${embroideryColor}`} onClick={() => setOpen(!open)}>
        <div className="flex items-center justify-between flex-1 pr-4">
          <div className="flex items-center gap-6">
            {isBlackBelt ? (
               <img src="/himzes1.webp" alt="Taekwon-do hímzés" className="w-10 h-10 object-contain flex-shrink-0" /> 
            ) : (
              <div className="relative flex items-center h-8 w-12 rounded-sm border border-black/10 overflow-hidden">
                {stripeColor && <div className={`absolute inset-y-0 left-1/2 w-2 ${stripeColor}`}></div>}
              </div>
            )}
            <span className="text-base sm:text-lg font-serif">{belt.rankEn}</span>
          </div>
          <span className="text-xs font-sans normal-case opacity-75">({belt.members.length} fő)</span>
        </div>
        {open ? <ChevronUp className="w-5 h-5 opacity-80" /> : <ChevronDown className="w-5 h-5 opacity-80" />}
      </button>
      {open && (
        <div className="bg-gray-950 border-t border-gray-900 p-4 sm:p-6">
          <div className="flex flex-wrap gap-2.5"> {belt.members.map((name) => ( <div key={name} className="flex items-center gap-2 text-sm font-bold rounded-lg px-4 py-2 border bg-gray-900/40 text-gray-300 border-gray-800">{name === 'Pataki Krisztián' && <img src="/patakikrisztian.webp" alt={name} className="w-5 h-5 object-cover rounded bg-gray-800" />} <span>{name}</span></div> ))} </div>
          {belt.results && belt.results.length > 0 && ( <div className="mt-6 border-t border-gray-900 pt-4 space-y-4"> {belt.results.map((r) => ( <div key={r.name} className="bg-black/20 p-4 rounded-xl border border-gray-900"> <h4 className="text-amber-400 font-extrabold text-sm uppercase tracking-wider mb-2 font-serif">{r.name} — Kiemelt Eredmények</h4> <ul className="space-y-1.5"> {r.achievements.map((a, i) => ( <li key={i} className="text-gray-400 text-xs flex items-start gap-2"><span className="text-amber-500 flex-shrink-0">•</span>{a}</li> ))} </ul> </div> ))} </div> )}
        </div>
      )}
    </div>
  );
}

export default function Members() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[300px] w-full flex items-center overflow-hidden border-b border-gray-800">
        <img src="/tigrisek.webp" alt="Budapest Tigers SE" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"><p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csapatunk</p><h1 className="text-5xl font-black text-white">Tagok</h1></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-black text-white mb-6">Tagok övszín szerint</h2>
        <div className="space-y-4 mb-16"> {belts.map((belt) => <BeltRow key={belt.rank} belt={belt} />)} </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
            <span className="w-2 h-6 bg-neon-orange rounded-full"></span>
            Tagoknak — Fontos tudnivalók
          </h3>
          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="flex items-start gap-4">
              <span className="text-neon-orange font-bold text-lg">01.</span>
              <div className="space-y-2">
                <p><strong className="text-white">Sportorvosi vizsgálat</strong> — Gyerekeknek fél évente, felnőtteknek évente kötelező.</p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a href="https://online.osei.hu/bejelentkezes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neon-orange hover:text-white font-bold underline transition-colors"><span>OSEI online időpontfoglalás</span> <ExternalLink className="w-3 h-3" /></a>
                  <a href="https://osei.hu/images/stories/osei/Sportoli-krdv-20260310-szerkeszthet-.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white font-bold underline transition-colors"><span>Letöltendő kérdőív (PDF)</span> <Download className="w-3 h-3" /></a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-neon-orange font-bold text-lg">02.</span>
              <p><strong className="text-white">Fejvédő</strong> — Versenyeken kötelező, edzéseken erősen ajánlott. Versenyzőknek mindkét színből (piros és kék) kell legyen!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
