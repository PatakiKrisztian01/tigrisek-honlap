import { useEffect } from 'react';

export default function TaekwondoBelts() {
  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    document.title = "ITF Taekwon-do Övszínek és Fokozatok Jelentése | Budapest Tigers SE";
    
    let metaDesc = document.querySelector('meta[name=\"description\"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Az ITF Taekwon-do övszíneinek teljes rendszere a fehér övtől a fekete övig. Ismerd meg a tanuló (gup) és mester (dan) fokozatok szimbolikus jelentését.');
  }, []);

  // Övszín adatok strukturálva
  const beltRanks = [
    { color: "Fehér öv", gup: "10. Gup", meaning: "A tisztaságot jelképezi. A kezdő tanítvány „tiszta lap”, akinek még nincs semmilyen előzetes tudása a Taekwon-dóról." },
    { color: "Sárga jelzés fehér övön", gup: "9. Gup", meaning: "A fehér és a sárga öv közötti átmenet, a fejlődés megindulását jelzi." },
    { color: "Sárga öv", gup: "8. Gup", meaning: "A földet jelképezi, amelybe a Taekwon-do magvát elvetik, és amelyből a növény gyökeret ereszt, mikor az alapokat lerakják." },
    { color: "Zöld jelzés sárga övön", gup: "7. Gup", meaning: "A sárga és a zöld öv közötti átmenet, a technikák elmélyülését mutatja." },
    { color: "Zöld öv", gup: "6. Gup", meaning: "A növény zöldellő színét jelképezi, utalva arra, hogy a Taekwon-do tudás fejlődésnek indult, a technikák kezdenek kibontakozni." },
    { color: "Kék jelzés zöld övön", gup: "5. Gup", meaning: "A zöld és a kék öv közötti átmenet, a magasabb szintű tudás kapuja." },
    { color: "Kék öv", gup: "4. Gup", meaning: "Az eget jelképezi, amely felé a növény növekszik, magasodik, miközben a Taekwon-do tudás is folyamatosan mélyül és emelkedik." },
    { color: "Piros jelzés kék övön", gup: "3. Gup", meaning: "A kék és a piros öv közötti átmenet, a komoly felelősség előszele." },
    { color: "Piros öv", gup: "2. Gup", meaning: "Veszélyt jelent. Figyelmezteti a tanítványt, hogy gyakoroljon önkontrollt, az ellenfelet pedig, hogy óvakodjon a már komoly tudású harcostól." },
    { color: "Fekete jelzés piros övön", gup: "1. Gup", meaning: "A legmagasabb tanuló fokozat. Közvetlen felkészülés a mesterré válásra és az I. Dan vizsgára." },
    { color: "Fekete öv", gup: "1-9. Dan", meaning: "A fehér ellentéte, a Taekwon-do technikákban való jártasságot, a mesteri szintet jelképezi. Jelzi továbbá, hogy viselője immunis a sötétséggel és a félelemmel szemben." }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Övszínek és Fokozatok</h1>
        </div>
      </div>

      {/* Tartalom szekció */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Bevezető leírás */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-white font-bold text-2xl mb-4">A Fokozati Rendszer Felépítése</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify mb-4">
            A Taekwon-doban a tanulók előmenetelét **10 tanuló fokozat (Gup)** jelzi, míg a mestereket **9 mester fokozat (Dan)** különbözteti meg. 
            A fokozatok számozása szimbolikus jelentéssel bír: a tanulóknál 10-estől haladunk lefelé az 1-es felé (ahogy közelednek a mester szinthez), 
            míg a mestereknél 1-estől emelkednek a fokozatok egészen a 9. Danig.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
            A 9-es szám a keleti kultúrában a legmagasabb egyjegyű szám, a teljesség és az érettség jelképe, ezért a legmagasabb elérhető nagymesteri rang a 9. Dan.
          </p>
        </div>

        {/* Övszínek listája */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-2xl px-2 mb-4">Az övek és jelentéseik</h2>
          
          {beltRanks.map((belt, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="sm:w-1/3">
                <span className="text-xs font-bold text-neon-orange uppercase tracking-wider block mb-1">
                  {belt.gup}
                </span>
                <h3 className="text-white font-black text-xl">
                  {belt.color}
                </h3>
              </div>
              <div className="sm:w-2/3 border-t sm:border-t-0 sm:border-l border-gray-800 pt-3 sm:pt-0 sm:pl-6">
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {belt.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alsó megjegyzés a mester szintekről */}
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 border border-gray-800 rounded-2xl p-6 mt-8">
          <h3 className="text-white font-bold text-lg mb-2">Mester fokozatok (Dan) felosztása:</h3>
          <ul className="text-gray-400 space-y-2 text-sm ml-4 list-disc">
            <li><strong className="text-white">I. - III. Dan:</strong> Nem asszisztens / Segédedző (Bo-Sabum)</li>
            <li><strong className="text-white">IV. - VI. Dan:</strong> Nemzetközi Instruktor / Edző (Sabum)</li>
            <li><strong className="text-white">VII. - VIII. Dan:</strong> Mester (Sahyun)</li>
            <li><strong className="text-white">IX. Dan:</strong> Nagymester (Saseong)</li>
          </ul>
        </div>

      </main>
    </div>
  );
}
