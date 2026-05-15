import { useState } from 'react';

type TabId = 'history' | 'founder' | 'oath' | 'dictionary' | 'rules' | 'belts' | 'techniques';

const tabs: { id: TabId; label: string }[] = [
  { id: 'history', label: 'Történelem' },
  { id: 'techniques', label: 'Technikák' },
  { id: 'belts', label: 'Övszínek' },
  { id: 'founder', label: 'Choi Hong Hi' },
  { id: 'oath', label: 'Eskü' },
  { id: 'dictionary', label: 'Szótár' },
  { id: 'rules', label: 'Szabályok' },
];

const dictionary = [
  { korean: 'Charyot', hungarian: 'Vigyázz!' },
  { korean: 'Kyong-ye', hungarian: 'Tisztelegjetek!' },
  { korean: 'Joonbi', hungarian: 'Készülj!' },
  { korean: 'Shijak', hungarian: 'Kezdjetek!' },
  { korean: 'Koman', hungarian: 'Megállj!' },
  { korean: 'Paro', hungarian: 'Vissza alapállásba!' },
  { korean: 'Haessan', hungarian: 'Széjjel!' },
  { korean: 'Tul', hungarian: 'Formagyakorlat' },
  { korean: 'Matsogi', hungarian: 'Küzdelem' },
  { korean: 'Baro', hungarian: 'Helyes!' },
  { korean: 'Ibo matsogi', hungarian: 'Kétlépéses küzdelem' },
  { korean: 'Sambo matsogi', hungarian: 'Háromfokozatú küzdelem' },
  { korean: 'Hosinsul', hungarian: 'Önvédelem' },
  { korean: 'Twigi', hungarian: 'Ugró technika' },
  { korean: 'Dollyo chagi', hungarian: 'Forduló rúgás' },
  { korean: 'Ap chagi', hungarian: 'Előre rúgás' },
  { korean: 'Bandae dollyo chagi', hungarian: 'Visszafelé forduló rúgás' },
  { korean: 'Yop chagi', hungarian: 'Oldal rúgás' },
  { korean: 'Dwit chagi', hungarian: 'Hátra rúgás' },
  { korean: 'Nopunde', hungarian: 'Magas szint' },
  { korean: 'Kaunde', hungarian: 'Középső szint' },
  { korean: 'Najunde', hungarian: 'Alacsony szint' },
  { korean: 'Olgul', hungarian: 'Arc / Magas fokozat' },
  { korean: 'Momtong', hungarian: 'Törzs / Középső szint' },
  { korean: 'Bakat palmok', hungarian: 'Külső csukló' },
  { korean: 'An palmok', hungarian: 'Belső csukló' },
];

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('history');

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
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

        {/* Tab Content */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">A Taekwon-do Története</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5 text-gray-300 leading-relaxed">
              <p>
                A Taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.
              </p>
              <p>
                A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete.
              </p>
              <p>
                A Taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.
              </p>
              <p>
                Az ITF (International Taekwondo Federation) 1966-ban alakult meg Choi Hong Hi vezetésével, aki a harcművészetet a világ minden tájára elvitte. Az ITF Taekwon-do hangsúlyt fektet a hagyományos formagyakorlatokra (Tul), az önvédelemre és a filozofiai alapokra.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'belts' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">Övszínek Magyarázata</h2>
            <div className="space-y-4">
              {[
                {
                  color: 'Fehér',
                  desc: 'Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő taekwon-dos még nem rendelkezik komoly taekwon-do tudással.',
                  icon: '⚪',
                },
                {
                  color: 'Sárga',
                  desc: 'A földet szimbolizálja, melyben az elültetett növény kicsírázik, és gyökeret ereszt. Így rögződnek a tudás alapjai is a taekwon-dosban.',
                  icon: '🟡',
                },
                {
                  color: 'Zöld',
                  desc: 'A növényt, növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak.',
                  icon: '🟢',
                },
                {
                  color: 'Kék',
                  desc: 'Az eget szimbolizálja, amely felé terebélyes faként tör a növény. Utal a mind magasabb taekwon-do tudásra.',
                  icon: '🔵',
                },
                {
                  color: 'Piros',
                  desc: 'A tűz, a vér és a veszély szimbóluma. Emlékezteti a tanítványt, hogy óvatosan kell bánnia tudásával, de figyelmezteti ellenfelét is.',
                  icon: '🔴',
                },
                {
                  color: 'Fekete',
                  desc: 'Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Az elmélyült és mesterfokú taekwon-do tudást jelzi.',
                  icon: '⚫',
                },
              ].map((belt) => (
                <div key={belt.color} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{belt.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{belt.color} öv</h3>
                      <p className="text-gray-400">{belt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'techniques' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">Taekwon-do Technikák</h2>
            <div className="space-y-6">
              {[
                {
                  title: '1. Bázis Technika',
                  desc: 'A tradicionális harcművészetek Alfája és Omegája. Az alapvető állásokat, kéz és lábtechnikákat mindenkinek folyamatosan gyakorolnia kell. Az intenzív gyakorlás nyomán kialakul az erő fókuszálásának képessége, javul a koordináció és egyensúly.',
                },
                {
                  title: '2. Formagyakorlat (Tul)',
                  desc: 'Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik. Összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet szimbolizálják.',
                },
                {
                  title: '3. Formai Küzdelem',
                  desc: 'Páros bázis vagy küzdelmi helyzet gyakorlat. A bázis és formagyakorlatokból átemelt támadás és védés minták szigorú rend alapján történnek partner közreműködésével.',
                },
                {
                  title: '4. Szabad Küzdelem',
                  desc: 'A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti. Kötetlen, "éles" harchelyzetben próbálnak felülkerekedni a taekwon-dosok kiszámíthatatlanul támadó ellenfelükön.',
                },
                {
                  title: '5. Önvédelem',
                  desc: 'A haladók és mesterek gyakorolhatják elsősorban. Célja a hatásos közelharc és "túlélő" technikák elsajátítása, melyek képesek elhárítani valós veszélyhelyzeteket.',
                },
                {
                  title: '6. Töréstechnika',
                  desc: 'A Taekwon-donak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni.',
                },
              ].map((tech) => (
                <div key={tech.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-3">{tech.title}</h3>
                  <p className="text-gray-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'founder' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">Choi Hong Hi</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="sm:w-48 flex-shrink-0">
                  <div className="w-full aspect-square bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                    <span className="text-gray-500 text-4xl font-black">CHH</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-2">1918 – 2002</p>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Choi Hong Hi tábornok (1918–2002) a modern ITF Taekwon-do megalapítója és az "Oh Do Kwan" iskola megteremtője. Koreában született és katonai pályafutása során fejlesztette ki azt a rendszert, amely ma ITF Taekwon-do néven ismert.
                  </p>
                  <p>
                    Choi Hong Hi 1966-ban alapította meg a Nemzetközi Taekwon-do Szövetséget (ITF), amelynek célja volt a Taekwon-do harcművészet terjesztése és egységesítése a világ minden táján.
                  </p>
                  <p className="text-lg font-light italic text-gray-200 border-l-4 border-neon-orange pl-4 py-2">
                    "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'oath' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">A Taekwon-do Eskü</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-400 mb-6 text-sm">Az edzések elején és versenyeken a taekwon-do-sok a következő esküt mondják:</p>
              <div className="space-y-4 mb-8">
                {[
                  'Betartom a Taekwon-do alapelveit.',
                  'Tisztelem az instruktort és idősebb tagjait.',
                  'Soha nem élek vissza a Taekwon-dóval.',
                  'Igazságos és becsületes emberi életet élek.',
                  'Taekwon-dót egy erőteljesebb, békésebb világ érdekében gyakorlom.',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon-orange/20 border border-neon-orange/30 rounded-lg flex items-center justify-center">
                      <span className="text-neon-orange font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed pt-1">{point}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-white font-bold mb-4">Az 5 alapelv (Tenets):</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { korean: 'Yeui', hungarian: 'Udvariasság' },
                    { korean: 'Yom-chi', hungarian: 'Integritás' },
                    { korean: 'In-naè', hungarian: 'Kitartás' },
                    { korean: 'Guk-gi', hungarian: 'Önuralom' },
                    { korean: 'Baekjool-boolgool', hungarian: 'Legyőzhetetlen szellem' },
                  ].map((p) => (
                    <div key={p.korean} className="bg-gray-800 rounded-xl p-3 text-center border border-gray-700">
                      <div className="text-neon-orange font-bold text-sm mb-1">{p.korean}</div>
                      <div className="text-gray-300 text-xs">{p.hungarian}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dictionary' && (
          <div>
            <h2 className="text-3xl font-black text-white mb-6">Koreai–Magyar Szótár</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-800 px-6 py-3 border-b border-gray-700">
                <span className="text-gray-300 font-bold text-sm">Koreai</span>
                <span className="text-gray-300 font-bold text-sm">Magyar</span>
              </div>
              <div className="divide-y divide-gray-800">
                {dictionary.map((entry, i) => (
                  <div key={i} className={`grid grid-cols-2 px-6 py-3 hover:bg-gray-800/50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-900/50'}`}>
                    <span className="text-neon-orange font-bold text-sm">{entry.korean}</span>
                    <span className="text-gray-300 text-sm">{entry.hungarian}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-6">Versenyszabályok</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Küzdelem (Matsogi)',
                  points: [
                    'A mérkőzés 3x2 perces körökből áll.',
                    'Pontot jelent az engedélyezett területre mért találat.',
                    'Tilos az ütés a fejre és az ágyék területére.',
                    'A bíró megállíthatja a meccset, ha valamelyik fél védtelen.',
                    'Figyelmeztetést (Kyong-go) kap a versenyző szabálysértésért.',
                  ],
                },
                {
                  title: 'Formagyakorlat (Tul)',
                  points: [
                    'A formákat egyedül vagy szinkronban hajtják végre.',
                    'Értékelési szempontok: pontosság, erő, sebesség és egyensúly.',
                    'Az előírt szinthez tartozó tulokat kell bemutatni.',
                    'Összesen 24 Tul van az ITF taekwon-dóban, amelyeket Choi Hong Hi nagymester tervezett.',
                  ],
                },
                {
                  title: 'Törés (Kyokpa)',
                  points: [
                    'Erőtörés: maximális erővel kell eltörni a deszkát.',
                    'Speciális törés: különleges, akrobatikus technikával hajtják végre.',
                    'Távolsági törés: az ugrás távolságát is értékelik.',
                    'Minden törési kategóriában pontokat kapnak a versenyzők.',
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-neon-orange flex-shrink-0 mt-0.5">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
