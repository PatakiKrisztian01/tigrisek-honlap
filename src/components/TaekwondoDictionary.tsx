import { useEffect, useState } from 'react';
import { BookOpen, Hash, ArrowRight } from 'lucide-react';

interface DictionaryEntry {
  korean: string;
  hungarian: string;
  english: string;
}

interface LetterGroup {
  letter: string;
  entries: DictionaryEntry[];
}

export default function TaekwondoDictionary() {
  // A gyári adatok alapján feltöltött kezdőállapot
  const [activeLetter, setActiveLetter] = useState<string>('A');

  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    document.title = "Koreai Szótár és Számolás (Terminológia) | Budapest Tigers SE";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'ITF Taekwon-do koreai-magyar terminológiai szótár és számolás. Hivatalos edzőtermi vezényszavak, technikák és kifejezések gyűjteménye vizsgára való felkészüléshez.');
  }, []);

  // Hivatalos koreai tizes számolás adatai
  const countingData = [
    { korean: 'Hana', hungarian: 'Egy', english: 'One' },
    { korean: 'Dool', hungarian: 'Kettő', english: 'Two' },
    { korean: 'Set', hungarian: 'Három', english: 'Three' },
    { korean: 'Net', hungarian: 'Négy', english: 'Four' },
    { korean: 'Dasot', hungarian: 'Öt', english: 'Five' },
    { korean: 'Yosot', hungarian: 'Hat', english: 'Six' },
    { korean: 'Ilgop', hungarian: 'Hét', english: 'Seven' },
    { korean: 'Yodol', hungarian: 'Nyolc', english: 'Eight' },
    { korean: 'Ahop', hungarian: 'Kilenc', english: 'Nine' },
    { korean: 'Yool', hungarian: 'Tíz', english: 'Ten' }
  ];

  // Strukturált, betűrendbe szedett hivatalos szótár adatbázis
  const dictionaryData: LetterGroup[] = [
    {
      letter: 'A',
      entries: [
        { korean: 'Anuro', hungarian: 'Belülről / Befelé', english: 'Inward' },
        { korean: 'Ap', hungarian: 'Előre / Első / Elülső', english: 'Front' },
        { korean: 'Arae', hungarian: 'Alsó szekció', english: 'Low' }
      ]
    },
    {
      letter: 'B',
      entries: [
        { korean: 'Bakat', hungarian: 'Kívülről / Kifelé', english: 'Outward' },
        { korean: 'Bandae', hungarian: 'Ellentétes oldali', english: 'Reverse' },
        { korean: 'Baro', hungarian: 'Azonos oldali', english: 'Obverse' }
      ]
    },
    {
      letter: 'C',
      entries: [
        { korean: 'Charyot', hungarian: 'Vigyázz állás (Vezényszó)', english: 'Attention' },
        { korean: 'Chigi', hungarian: 'Ütés / Csapás (íves kéztechnika)', english: 'Strike' },
        { korean: 'Chookgyo', hungarian: 'Feltartóztató / Emelő', english: 'Rising' }
      ]
    },
    {
      letter: 'D',
      entries: [
        { korean: 'Dae', hungarian: 'Nagy', english: 'Big' },
        { korean: 'Dojang', hungarian: 'Edzőterem', english: 'Gym / Training hall' },
        { korean: 'Dobok', hungarian: 'Taekwon-do egyenruha', english: 'Uniform' }
      ]
    },
    {
      letter: 'G',
      entries: [
        { korean: 'Gunnun', hungarian: 'Sétáló (állás)', english: 'Walking' },
        { korean: 'Goman', hungarian: 'Elég / Állj (Vezényszó)', english: 'Stop' }
      ]
    },
    {
      letter: 'J',
      entries: [
        { korean: 'Jirugi', hungarian: 'Ütés (egyenes vonalú szúró kéztechnika)', english: 'Punch' },
        { korean: 'Junbi', hungarian: 'Felkészülni / Készenlét (Vezényszó)', english: 'Ready' }
      ]
    },
    {
      letter: 'M',
      entries: [
        { korean: 'Makgi', hungarian: 'Hárítás / Védés', english: 'Block' },
        { korean: 'Matsogi', hungarian: 'Küzdelem', english: 'Sparring' }
      ]
    },
    {
      letter: 'N',
      entries: [
        { korean: 'Niunja', hungarian: 'L-állás', english: 'L-stance' },
        { korean: 'Noophi', hungarian: 'Magasság / Szekció', english: 'Section' }
      ]
    },
    {
      letter: 'O',
      entries: [
        { korean: 'Oryun', hungarian: 'Jobb oldal', english: 'Right side' },
        { korean: 'Oun', hungarian: 'Bal oldal', english: 'Left side' }
      ]
    },
    {
      letter: 'T',
      entries: [
        { korean: 'Tae', hungarian: 'Rúgás, lábtechnikák összessége', english: 'To kick' },
        { korean: 'Tull', hungarian: 'Formagyakorlat', english: 'Pattern' }
      ]
    }
  ];

  // Kiválasztott kezdőbetűhöz tartozó szavak kikeresése
  const currentGroup = dictionaryData.find(g => g.letter === activeLetter);

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Terminológiai Szótár</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* BAL OSZLOP: KOREAI SZÁMOLÁS (1-10) */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-black rounded-xl border border-gray-800 text-neon-orange">
                <Hash className="w-5 h-5" />
              </div>
              <h2 className="text-white font-black text-xl">Számolás (1–10)</h2>
            </div>
            
            <div className="divide-y divide-gray-800 bg-black/40 border border-gray-800 rounded-xl overflow-hidden">
              {countingData.map((num, index) => (
                <div key={index} className="px-4 py-3 flex items-center justify-between hover:bg-gray-900/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-500 w-4">
                      {index + 1}.
                    </span>
                    <strong className="text-white font-bold text-base tracking-wide">
                      {num.korean}
                    </strong>
                  </div>
                  <div className="text-right">
                    <span className="text-neon-orange font-bold text-sm block">
                      {num.hungarian}
                    </span>
                    <span className="text-[10px] text-gray-500 block uppercase font-mono">
                      {num.english}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* JOBB OSZLOP: BETŰRENDES SZAKSZÓTÁR */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-black rounded-xl border border-gray-800 text-neon-orange">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-white font-black text-xl">Edzőtermi Kifejezések</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Válassz ki egy kezdőbetűt a hivatalos vezényszavak, állások, támadások és védések szűréséhez. Ez a gyűjtemény elengedhetetlen a sikeres övvizsgák elméleti részéhez.
            </p>

            {/* Betűválasztó fülek */}
            <div className="flex flex-wrap gap-2 mb-8 bg-black/40 border border-gray-800 p-2 rounded-xl">
              {dictionaryData.map((group) => (
                <button
                  key={group.letter}
                  onClick={() => setActiveLetter(group.letter)}
                  className={`w-10 h-10 rounded-lg text-sm font-black transition-all duration-200 ${
                    activeLetter === group.letter
                      ? 'bg-neon-orange text-black font-black shadow-md shadow-neon-orange/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {group.letter}
                </button>
              ))}
            </div>

            {/* Szavak listája az adott betűhöz */}
            <div className="space-y-4">
              {currentGroup && currentGroup.entries.map((entry, idx) => (
                <div 
                  key={idx}
                  className="bg-black/60 border border-gray-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-700 transition-colors"
                >
                  <div>
                    <span className="text-[10px] text-neon-orange font-mono tracking-widest uppercase block mb-0.5">Koreai szakszó</span>
                    <h3 className="text-white font-black text-lg tracking-wide">{entry.korean}</h3>
                  </div>
                  <div className="flex items-center gap-3 sm:text-right flex-row-reverse sm:flex-row justify-end">
                    <div className="sm:text-right">
                      <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-0.5">Magyar / Angol</span>
                      <p className="text-gray-200 font-bold text-sm sm:text-base">{entry.hungarian}</p>
                      <p className="text-gray-400 text-xs italic font-light">{entry.english}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neon-orange hidden sm:block opacity-40" />
                  </div>
                </div>
              ))}

              {(!currentGroup || currentGroup.entries.length === 0) && (
                <p className="text-center text-gray-500 text-sm py-8">Nincs bejegyzés ehhez a betűhöz.</p>
              )}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
