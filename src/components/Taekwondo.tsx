import { useState } from 'react';
import { dictionary, counting } from '../data/dictionary';
import { formsData, tenetsData, oathData } from '../data/taekwondoData';

type TabId = 'overview' | 'history' | 'techniques' | 'belts' | 'forms' | 'founder' | 'oath' | 'dictionary' | 'rules' | 'theoryapp';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'A Taekwon-do' },
  { id: 'techniques', label: 'Mozgásanyagok' },
  { id: 'belts', label: 'Övszínek' },
  { id: 'forms', label: 'Formagyakorlatok' },
  { id: 'history', label: 'Történelem' },
  { id: 'founder', label: 'Choi Hong Hi' },
  { id: 'oath', label: 'Eskü' },
  { id: 'dictionary', label: 'Szótár' },
  { id: 'rules', label: 'Szabályok' },
  { id: 'theoryapp', label: 'Elmélet App' },
];

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [dictLetter, setDictLetter] = useState<string>('A');

  // EZ AZ ÚJ, GOLYÓÁLLÓ VÁLTOZAT:
const filteredDict = dictionary.filter((item) => {
  const koreanWord = item?.korean || '';
  const hungarianWord = item?.hungarian || '';
  
  return (
    koreanWord.toLowerCase().startsWith(dictLetter.toLowerCase()) ||
    hungarianWord.toLowerCase().startsWith(dictLetter.toLowerCase())
  );
});

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* FEJLÉC */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      {/* FŐ ELRENDEZÉS: PC-n egymás mellett, mobilon egymás alatt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* NAVIGÁCIÓS OLDALSÁV (PC-n jobb oldalon ragad, mobilon a szöveg alatt jelenik meg) */}
        <aside className="w-full lg:w-1/4 order-1 lg:order-2">
          <div className="sticky top-28 bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2">
            <h3 className="text-white font-bold px-3 mb-3 text-lg hidden lg:block">Aloldalak</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 text-left truncate ${
                    activeTab === tab.id
                      ? 'bg-neon-orange text-black shadow-lg shadow-neon-orange/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800 bg-gray-950/50 lg:bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* TARTALMI RÉSZ */}
        <main className="w-full lg:w-3/4 order-2 lg:order-1">

          {/* 1. OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <blockquote className="text-center text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
                "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
              </blockquote>
              <p>
                A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, and gondoskodik ezek életben tartásáról.
              </p>
              <p>
                A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete.
              </p>
              <p>
                Más megközelítésben a Taekwon-do tudomány, vagyis a test tudományos alkalmazása a harcművészetben. Az ember, aki az anatómia, biomechanika és fizika törvényszerűségeinek ismeretében, testének intenzív edzése során képes elérni a benne rejlő mogelijkheden maximumát!
              </p>
              <p>
                A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.
              </p>
            </div>
          )}

          {/* 2. HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do Története</h2>
              <p>A Taekwon-do szó új keletű, csak az 1950-es évektől kezdte használni Choi Hong Hi a Taekwon-do megalapítója...</p>
              <p>A Taekwon-do eredete az időszámításunk előtti I. századi társadalmakig vezethető vissza. Ebben az időben a Koreai félszigeten three királyság alakult ki: Silla (ie. 57.), Koguryo (ie. 37.) és Baekje (ie. 18.).</p>
              <p>Az első máig fenn maradt harcművészeti vonatkozású emlékek ebből az időből származnak: a Koguryu dinasztiabeli Muyong-chong és Kakchu-chong nevű királyi síremlékek falfestményei.</p>
              <p>Silla 24. királya Chin Heung Konguryo királyával szövetkezve létrehozta az első elit katonai alakulatot a "Hwarangdo"-t. A Hwarangdo kiképzésben nagy hangsúlyt fektettek mind a fegyveres mind a fegyver nélküli közelharc képzésére.</p>
              <p>A konfucionizmus mind a mai napig jellemzi a Koreai harcművészetek nagy részét. Szemben például a Japán harcművészetekkel, ahol többnyire a Zen Buddhizmus adja a szellemi hátteret.</p>
              <p>1392-ben a Koryo dinasztiát felváltotta a Li dinasztia. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták O-Csoszonnak is nevezni. Ez a korszak lényegében 1910-ig a Japán megszállás kezdetéig tartott.</p>
              <p>A 19. század végén és a 20. század elején Japán szerezte meg Koreát. Ekkor a Japánban tanuló Koreai fiatalok találkoztak a Japán harcművészetekkel, és az Okinawai eredetű Karatéval is. Ilyen Koreai fiatalember volt Choi Hong Hi is.</p>
              <p>1950. Június 25.-én kirobbant a háború a két Koreai állam között. A háború 1953. Július 27.-én Panmindzsonban fegyverszünettel ért véget. A két Korea területi és politikai megosztottsága máig tart.</p>
              <p>A hosszú Japán megszállás után Dél-Koreában a különböző harcművészeti iskolák egymás után nyitották meg kapuikat. <strong className="text-white">1955. április 11.-én fogadták el hivatalosan a Taekwon-do kifejezést Koreában.</strong></p>
            </div>
          )}

          {/* 3. TECHNIQUES */}
          {activeTab === 'techniques' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do mozgásanyagai</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">1. Bázis technika</h3>
                  <p className="text-gray-400">A tradicionális harcművészetek Alfája és Omegája - így a Taekwon-do tanulásának is soha el nem hagyható alapja! Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">2. Formagyakorlat (Versenyszám)</h3>
                  <p className="text-gray-400">Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. A Taekwon-doban összesen 24 kötelező formagyakorlat van.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">3. Formai küzdelem</h3>
                  <p className="text-gray-400">(Páros bázis, vagy küzdelmi helyzet gyakorlat). A bázis, illetve formagyakorlatokból átemelt támadás és védés minták, szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">4. Szabad küzdelem (Versenyszám)</h3>
                  <p className="text-gray-400">A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti - kötetlen -"éles" harchelyzetben. A Taekwon-do tanainak 5. pontjában foglalt ún. "Rettenthetetlen küzdőszellem" nélkül nincs igazi győzelem!</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">5. Önvédelem</h3>
                  <p className="text-gray-400 mb-4">A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre, amivel kezdők még nem rendelkeznek.</p>
                  <p className="text-white font-bold mb-2">Ősi íratlan szabályok:</p>
                  <ul className="text-gray-400 space-y-1 ml-4 list-disc">
                    <li>inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                    <li>inkább lefogni, visszatartani, mint megsebesíteni</li>
                    <li>inkább megsebesíteni, mint megnyomorítani</li>
                    <li>inkább megnyomorítani, mint megölni</li>
                    <li>inkább megölni, mint hogy téged öljön meg</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">6. Töréstechnika (Versenyszám)</h3>
                  <p className="text-gray-400">A Taekwon-donak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni.</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. BELTS */}
          {activeTab === 'belts' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
              <div className="space-y-4">
                <div><h3 className="text-white font-bold mb-2">Fehér öv:</h3><p className="text-gray-400">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő taekwon-dos még nem rendelkezik komoly taekwon-do tudással.</p></div>
                <div><h3 className="text-white font-bold mb-2">Sárga öv:</h3><p className="text-gray-400">A földet szimbolizálja, melyben az elültetett növény kicsírázik, és gyökeret ereszt. Így rögződnek a tudás alapjai is a taekwon-dosban.</p></div>
                <div><h3 className="text-white font-bold mb-2">Zöld öv:</h3><p className="text-gray-400">A növényt, növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak.</p></div>
                <div><h3 className="text-white font-bold mb-2">Kék öv:</h3><p className="text-gray-400">Az eget szimbolizálja, amely felé most már magas faként tör a növény. Utal a mind magasabb taekwon-do tudásra.</p></div>
                <div><h3 className="text-white font-bold mb-2">Piros öv:</h3><p className="text-gray-400">A veszély szimbóluma, mint a tűz és vér színe. Emlékezteti a tanítványt, hogy most már óvatosan kell bánnia megszerzett taekwon-do tudásával.</p></div>
                <div><h3 className="text-white font-bold mb-2">Fekete öv:</h3><p className="text-gray-400">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Ellentéte a fehérnek. Az elmélyült és mesterfokú taekwon-do tudást jelzi.</p></div>
              </div>
            </div>
          )}

          {/* 5. FORMS (AZ ÚJ ADATOKAT HASZNÁLÓ FORMÁK) */}
          {activeTab === 'forms' && (
            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-6">
                <h2 className="text-2xl font-black text-white mb-4">Formagyakorlatok (Tull)</h2>
                <p className="text-gray-400">
                  A 24 tulajdonképpeni tull-okat két előkészítő formagyakorlat előzi meg. A kártyák képeire kattintva automatikusan elindul egy **YouTube keresés** az adott formagyakorlat pontos nevére!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formsData.map((form) => {
                  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`ITF Taekwondo ${form.name} tull`)}`;
                  const imageSrc = form.type === 'preparatory' 
                    ? `https://tigrisek.hu/images/formagyak/p1.jpg` 
                    : `https://tigrisek.hu/images/formagyak/p${form.num}.jpg`;

                  return (
                    <div key={form.name} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/40 transition-all duration-300 flex flex-col">
                      <div className="flex flex-col sm:flex-row flex-grow">
                        <a 
                          href={youtubeSearchUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="sm:w-1/3 relative overflow-hidden block bg-black min-h-[140px] group cursor-pointer"
                        >
                          <img src={imageSrc} alt={form.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 absolute inset-0" />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center">
                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">YouTube 🎬</span>
                          </div>
                        </a>

                        <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-xl font-black text-white">
                                {form.type === 'preparatory' ? 'Előkészítő' : `${form.num}.`} {form.name}
                              </h3>
                              <span className="text-xs px-2 py-1 rounded-md font-bold bg-gray-800 text-neon-orange">
                                {form.movements} mozdulat
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{form.meaning}</p>
                          </div>
                        </div>
                      </div>

                      {/* Ha az új adatfájlban megadsz diagramImage-et, itt jelenik meg pluszban */}
                      {form.diagramImage && (
                        <div className="p-4 bg-black/30 border-t border-gray-850 flex items-center gap-4">
                          <span className="text-xs text-gray-500 font-bold uppercase">Diagram / Extra kép:</span>
                          <img src={form.diagramImage} alt={`${form.name} diagram`} className="h-12 w-auto rounded border border-gray-700 object-contain bg-white" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6. FOUNDER */}
          {activeTab === 'founder' && (
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-6">Choi Hong Hi</h2>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <img src="https://tigrisek.hu/images/choi1.jpg" alt="Choi Hong Hi" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>Choi Hong Hi tábornok a Taekwon-do legendás alapítója 1918 november 9.-én született a koreai félsziget észak-keleti részén fekvő Hwa-Dae-ben. Gyermekkorától a szépírás (kalligráfia) művészetét tanulta, és már fiatalon megismerkedett az ősi koreai harcművészettel a Taek-kyon-nal.</p>
                    <p>Hét évnyi kalligráfus képzés után Japánba utazott tanulni, ahol a shotokan karatét is magas szinten elsajátította. Visszatérve Koreába már keményen dolgozott saját új stílusának létrehozásán, emellett a japán megszállás elleni felszabadítási mozgalom szervezője lett.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row-reverse gap-6">
                  <img src="https://tigrisek.hu/images/choi2.jpg" alt="Choi Hong Hi katonai pályafutása" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <h3 className="text-xl font-bold text-white">Katonai karrier és világméretű terjesztés</h3>
                    <p>A koreai hadsereg megalakulásakor az elsők között lépett be, ahol rohamosan haladt előre a ranglétrán. Ennek köszönhetően lehetősége nyílt arra, hogy az általa kifejlesztett harcművészetet beillessze a hadsereg hivatalos kiképzési programjába.</p>
                    <p>1966. március 22-én Szöulban megalapította a Nemzetközi Taekwon-do Szövetséget (ITF), melynek elnökeként élete végéig látogatta a világ országait, hogy szemináriumokon személyesen képezze a mestereket.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. OATH & TENETS (AZ ÚJ ADATOKAT HASZNÁLÓ ESKÜ ÉS TANOK) */}
          {activeTab === 'oath' && (
            <div className="space-y-12">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Taekwondo eskü</h2>
                <p className="text-gray-400 mb-6 text-sm">Az edzések elején és versenyeken a taekwon-do-sok a következő esküt mondják:</p>
                <div className="space-y-3">
                  {oathData.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/40 border border-gray-800/60 rounded-xl p-3.5">
                      <span className="text-neon-orange font-mono font-black text-lg">{i + 1}.</span>
                      <p className="text-gray-200 font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="mb-8">
                  <p className="text-neon-orange text-xs font-bold tracking-widest uppercase mb-1">Taekwon-do Jungshin</p>
                  <h2 className="text-3xl font-black text-white uppercase tracking-wide">Taekwon-do Tanai</h2>
                </div>

                <div className="space-y-8">
                  {tenetsData.map((tenet, idx) => (
                    <div key={idx} className="border-l-2 border-neon-orange/40 pl-6 space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-500 font-mono text-sm font-bold">{idx + 1}.</span>
                        <h3 className="text-white font-bold text-xl tracking-wide">{tenet.title}</h3>
                        <span className="text-neon-orange/80 text-xs font-mono font-bold">— {tenet.korean}</span>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row gap-4 items-start">
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{tenet.text}</p>
                        {tenet.imageUrl && (
                          <div className="w-full lg:w-48 shrink-0 rounded-xl overflow-hidden border border-gray-800 bg-black">
                            <img src={tenet.imageUrl} alt={tenet.title} className="w-full h-32 object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/50">
                    <img src="/tenets.webp" alt="Taekwon-do Tanai illusztráció" className="w-full h-auto max-h-[450px] object-contain mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8. DICTIONARY */}
          {activeTab === 'dictionary' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">Koreai Szótár</h2>
              
              <div className="flex flex-wrap gap-1.5 mb-8 bg-black/40 p-2 rounded-xl border border-gray-850 max-h-32 overflow-y-auto">
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setDictLetter(letter)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      dictLetter === letter ? 'bg-neon-orange text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDict.length > 0 ? (
                  filteredDict.map((item, idx) => (
                    <div key={idx} className="bg-black/30 border border-gray-850 p-4 rounded-xl flex justify-between items-center group hover:border-gray-700 transition-colors">
                      <div>
                        <p className="text-neon-orange font-black text-base tracking-wide group-hover:text-white transition-colors">{item.korean}</p>
                        <p className="text-gray-400 text-sm mt-0.5">{item.hungarian}</p>
                      </div>
                      <span className="text-xs bg-gray-850 px-2 py-1 rounded text-gray-500 font-mono uppercase">{item.category}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic col-span-2 py-4">Nincs találat ezzel a betűvel: "{dictLetter}"</p>
                )}
              </div>
            </div>
          )}

          {/* 9. RULES */}
          {activeTab === 'rules' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-black text-white mb-6">Versenyszabályzat és Általános Szabályok</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>A hivatalos ITF Taekwon-do versenyrendszer 5 fő kategóriára oszlik: Formagyakorlat (Tull), Szabad küzdelem (Matsogi), Erőtörés (Kyokpa), Speciális fegyvertechnikai törés, valamint Tradicionális küzdelem.</p>
                <p>A szabályok pontos betartása mind az edzőteremben (Dojang), mind a versenyeken kötelező a sérülések elkerülése és a kölcsönös tisztelet megőrzése érdekében.</p>
              </div>
            </div>
          )}

          {/* 10. THEORY APP */}
          {activeTab === 'theoryapp' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <h2 className="text-2xl font-black text-white">Taekwon-do Elmélet Mobilapplikáció</h2>
                <p className="text-neon-orange text-sm font-bold mt-1">Minden elméleti tudás a zsebedben</p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Az alkalmazás célja, hogy segítse a klub tagjait és minden Taekwon-do gyakorlót az övvizsgákra való felkészülésben. Nem kell többé papíralapú jegyzeteket keresgélned.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                  <h4 className="text-neon-orange font-bold text-base flex items-center gap-2"><span>📖</span> Övvizsga Anyagok</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Szintekre bontott kérdés-felelet adatbázis, ami segít lépésről lépésre memorizálni a vizsgakövetelményeket.</p>
                </div>
                <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                  <h4 className="text-neon-orange font-bold text-base flex items-center gap-2"><span>🥋</span> Tull-ok Jelentése</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">A 24 formagyakorlat pontos történelmi háttere, mozdulatszámai és diagramjai azonnal kéznél vannak.</p>
                </div>
                <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                  <h4 className="text-neon-orange font-bold text-base flex items-center gap-2"><span>🗣️</span> Koreai Szakszavak</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">A teremben használt vezényszavak, rúgások, ütések és állások pontos gyűjteménye.</p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
