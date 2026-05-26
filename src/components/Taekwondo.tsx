import { useState } from 'react';
import { dictionary, counting } from '../data/dictionary';

type TabId = 'overview' | 'history' | 'techniques' | 'belts' | 'forms' | 'founder' | 'oath' | 'dictionary' | 'rules';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Áttekintés' },
  { id: 'techniques', label: 'Technikák' },
  { id: 'belts', label: 'Övszínek' },
  { id: 'forms', label: '24 Formagyakorlat' },
  { id: 'history', label: 'Történelem' },
  { id: 'founder', label: 'Choi Hong Hi' },
  { id: 'oath', label: 'Eskü' },
  { id: 'dictionary', label: 'Szótár' },
  { id: 'rules', label: 'Szabályok' },
];

const forms = Array.from({ length: 24 }, (_, i) => ({
  num: i + 1,
  image: `https://tigrisek.hu/images/formagyak/p${i + 1}.jpg`,
}));

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [dictLetter, setDictLetter] = useState<string>('A');

  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-800 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-neon-orange text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <blockquote className="text-center text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
              "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
            </blockquote>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.
              </p>
              <p>
                A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete. Ez az elnevezés több szempontból is jó választásnak bizonyult. Egyrészt hasonlít az ősi taek kyon elnevezéshez, így bizonyos szempontból folytonosságot jelez a régi és az új stílus között, másrészt, pedig híven fejezi ki a sportág jellemzőit.
              </p>
              <p>
                A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.
              </p>
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === 'history' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do Története</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                A Taekwon-do szó új keletű, csak az 1950-es évektől kezdte használni Choi Hong Hi a Taekwon-do megalapítója. A Taekwon-do viszonylag új modern harcművészet, a mai technikáinak a túlnyomó többségét a XX. század '50-es '60-as éveiben alakította ki az alapító Koreai mesterek segítségével. Mivel egy dinamikus, fejlődő képes harcművészeti ágazatról van szó, a mai napig is folyamatosan változik, fejlődik.
              </p>
              <p>
                A Taekwon-do eredete az időszámításunk előtti I. századi társadalmakig vezethető vissza. Ebben az időben a Koreai félszigeten három királyság alakult ki: Silla (ie. 57.), Koguryo (ie. 37.) és Baekje (ie. 18.). Ezek a királyságok évszázadokon keresztül harcban álltak egymással a félsziget feletti uralomért.
              </p>
              <p>
                Az első máig fenn maradt harcművészeti vonatkozású emlékek ebből az időből származnak: a Koguryu dinasztiabeli Muyong-chong és Kakchu-chong nevű királyi síremlékek falain, illetve mennyezetén lévő falfestmények, melyek egymással küzdő férfiakat ábrázolnak.
              </p>
              <p>
                Akkoriban a Koguryo tudott a legdinamikusabban terjeszkedni, ahol már ekkor magas színvonalon oktatták a harcművészeteket. Silla 24. királya Chin Heung Konguryo királyával szövetkezve létrehozta az első elit katonai alakulatot a "Hwarangdo"-t. A Hwarangdo kiképzésben nagy hangsúlyt fektettek mind a fegyveres mind a fegyver nélküli közelharc képzésére. Ha hinni lehet a korabeli történeteknek, már ekkor magas színvonalú láb technika jellemezte a stílust. A Hwarangdo képzésben a testi nevelés mellett a szellemi képzéssel is foglalkoztak. Ezt egy Buddhista tanító Won Kwang konfuciusi tanai alapján tették.
              </p>
              <p>
                A konfucionizmus mind a mai napig jellemzi a Koreai harcművészetek nagy részét. Szemben például a Japán harcművészetekkel, ahol többnyire a Zen Buddhizmus adja a szellemi hátteret.
              </p>
              <p>
                Végül Munmu Vang-nak (661-680) Silla királyának, sikerült egyesítenie a Koreai félszigetet uralma alatt 668-ban, bár még Kínával 735-ig voltak háborúk a határ kérdésében.
              </p>
              <p>
                A Silla által létrehozott egységes Koreai állam végül belülről hullott darabjaira, és az országot egy Van Gon (877-943) nevezetű hadvezérnek sikerült újraegyesítenie 935-ben. Az új állam és a dinasztia Koryo néven 1392-ig állt fenn. Innen ered a Korea elnevezése is az Európai nyelvekben.
              </p>
              <p>
                1392-ben a Koryo dinasztiát felváltotta a Li dinasztia. Melynek első királya Li Szong Gé megfosztotta trónjától a Koryo dinasztia utolsó királyát is és Thedzsó néven ült trónra. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták O-Csoszonnak is nevezni. Ez a korszak lényegében 1910-
