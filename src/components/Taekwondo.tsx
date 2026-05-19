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
                1392-ben a Koryo dinasztiát felváltotta a Li dinasztia. Melynek első királya Li Szong Gé megfosztotta trónjától a Koryo dinasztia utolsó királyát is és Thedzsó néven ült trónra. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták O-Csoszonnak is nevezni. Ez a korszak lényegében 1910-ig a Japán megszállás kezdetéig tartott.
              </p>
              <p>
                Ebben az időben a harcművészeteket elsősorban a hadseregben oktatták, illetve megvoltak a köznépnek is a maga harcművészeti játékai, például a Soo Bak és a Taek Kyon. Máig rendszeresen rendeznek Soo Bak és Taek Kyon versenyeket a Dan-O ünnepek alkalmával (Május 5.-én és Augusztus 15.-én). Valószínűleg ebben az időben érték Kínai hatások is a Koreai harcművészeteket melyek jellegzetességei néhány mai Koreai harcművészeti ágban is megtalálhatóak.
              </p>
              <p>
                A 19. század végén és a 20. század elején, Koreáért és a környező területekért, három nagyhatalom versenyzett, Kína, Oroszország és Japán. Végül Japán szerezte meg Koreát, és szinte gyarmati sorba taszította. A Koreai népet szinte tökéletesen kizsákmányolták és megpróbálták eljapánosítani. Ekkor a Koreai középosztály, ha iskoláztatni akarta a gyerekeit, csak Japánba tudta elküldeni őket tanulni. Ezek a Japánban tanuló Koreai fiatalok találkoztak a Japán harcművészetekkel, és az akkoriban Japánban elterjedő Okinawai eredetű Karatéval is.
              </p>
              <p>
                Ilyen Koreai fiatalember volt Choi Hong Hi, aki a Taekwon-do alapítója és később az ITF elnöke lett, illetve Choi Yong Sul is, aki Takeda Sogakutól tanult Daito Ryu Aiki Jitsut (az Aikido elődje), majd hazatérve kombinálva Koreai stílusokkal Yu Kwon Sul néven oktatta, amelyből később a Hapkido lett. Illetve Hyung Yee Choi is, aki Choi Hong Hi rokona volt és Masutatsu Oyama néven Japánban a Kyokushin Karate megalapítója lett.
              </p>
              <p>
                1945-ben a Japán hadsereg megadta magát. Koreába a 38. szélességi körtől délre az Amerikai, attól északra pedig a Szovjet hadsereg vonult be. Az Amerikai zónában a Koreai Köztársaság (Dél-Korea), a Szovjet zónában pedig a Koreai Népi Demokratikus Köztársaság (Észak-Korea) jött létre.
              </p>
              <p>
                1950. Június 25.-én kirobbant a háború a két Koreai állam között. Az Északiak hetek alatt elfoglalták Dél-Korea 90%-át. A Déliek oldalán előbb az Amerikaiak és az ENSZ csapatok kapcsolódtak be a háborúba majd az Északiak oldalán 1 millió Kínai "önkéntes". A háború 1953. Július 27.-én Panmindzsonban fegyverszünettel ért véget. A két Korea területi és politikai megosztottsága máig tart.
              </p>
              <p>
                A hosszú Japán megszállás után Dél-Koreában, a különböző harcművészeti iskolák (Kwan-ok) egymás után nyitották meg a kapuikat. Ezekben az iskolákban a legtöbb esetben egymás mellett többféle harcművészeti stílust oktattak, illetve ekkor még nem volt éles határvonal a különböző stílusok között. Ezeknek az iskoláknak a közös jellemzője volt, hogy egy jelesebb mester, az iskola vezetője köré tömörültek. Tulajdonképpen ez adta nekik az összetartó erőt. Értelemszerűen ekkor még nem léteztek a stílusoknak sem szervezetei, sem szövetségei. Később ezeket a harcművészeti stílusokat igyekeztek nemzeti szövetségekben tömöríteni. <strong className="text-white">1955. április 11.-én fogadták el hivatalosan a Taekwon-do kifejezést Koreában.</strong>
              </p>
            </div>
          </div>
        )}

        {/* Techniques */}
        {activeTab === 'techniques' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Technikák</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-3">1. Bázis technika</h3>
                <p className="text-gray-400">
                  A tradicionális harcművészetek Alfája és Omegája - így a Taekwon-do tanulásának is soha el nem hagyható alapja! Időről időre tudás szinttől függetlenül, az alapvető állásokat, kéz és lábtechnikákat mindenkinek újra és újra gyakorolnia kell! Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik. Az intenzív gyakorlás és nagy ismétlésszám nyomán kialakul az erő fókuszálásának képessége, javul a koordináció, az egyensúly és térérzék, fejlődik az általános mozgáskultúra. Folyamatosan tökéletesednek: gyorsabbá, pontosabbá és hatásosabbá válnak az egyre magasabb szintű támadó és védekező technikák.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">2. Formagyakorlat (Versenyszám)</h3>
                <p className="text-gray-400 mb-4">
                  Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. A szimmetriára épülő mozgássorozatokban, pontosan kidolgozott koreográfia szerint, ütések, hárítások, rúgások, ugró ütések és ugró rúgások logikus kombinációi váltják egymást. A Taekwon-doban összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet (az élet állandó körforgását) szimbolizálják.
                </p>
                <p className="text-gray-400">
                  Összesen 24 Tull - formagyakorlat van az ITF taekwon-dóban. Ezeket Choi Hong Hi nagymester tervezte és alkotta meg. A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">3. Formai küzdelem</h3>
                <p className="text-gray-400">
                  (Páros bázis, vagy küzdelmi helyzet gyakorlat). A bázis, illetve formagyakorlatokból átemelt támadás és védés minták, szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével. Az idealizált gyakorlatokban előre elképzelt és megtervezett harchelyzeteket imitálva: egy-kettő-három, vagy akár több lépésben folyik az egyre nehezebb kombinációk fokozatos elsajátítása. A páros formai küzdelemben való jártasság lényegében a felkészítés utolsó állomása, mely után következhet a valódi szabad küzdelem.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">4. Szabad küzdelem (Versenyszám)</h3>
                <p className="text-gray-400">
                  A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti - kötetlen -"éles" harchelyzetben. A Taekwon-do gyakorlói a bázisok, formagyakorlatok és formai küzdelmek során beépült tudás birtokában próbálnak felülkerekedni most már kiszámíthatatlanul támadó ellenfelükön. A siker vagy kudarc azonban nem kis mértékben lelki tényezők és pszichikai felkészültség függvénye! A technikák elsajátítása ugyanis a harcművész útnak csak egyik állomása. A Taekwon-do tanainak 5. pontjában foglalt ún. "Rettenthetetlen küzdőszellem" nélkül nincs és nem is lehet igazi győzelem!
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">5. Önvédelem</h3>
                <p className="text-gray-400 mb-4">
                  A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre és harcművész előképzettségre, amivel kezdők még nem rendelkeznek. Célja a hatásos közelharc és "túlélő" technikák elsajátítása, melyek képesek elhárítani valós veszélyhelyzeteket. Lásd pl. fojtásból, fogásból, leszorításból szabadulás, támadás visszaverése szűk helyen zárt térben, védekezés hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.
                </p>
                <p className="text-white font-bold mb-2">Ősi íratlan szabályok:</p>
                <ul className="text-gray-400 space-y-1 ml-4">
                  <li>- inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                  <li>- inkább lefogni, visszatartani, mint megsebesíteni</li>
                  <li>- inkább megsebesíteni, mint megnyomorítani</li>
                  <li>- inkább megnyomorítani, mint megölni</li>
                  <li>- inkább megölni, mint hogy téged öljön meg</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">6. Töréstechnika (Versenyszám)</h3>
                <p className="text-gray-400">
                  A Taekwon-donak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni. Napjainkra a küzdelmek már védőfelszerelésben, szigorú szabályok között folynak, ezért a Taekwon-dosok különböző szakítószilárdságú tárgyak törésekor mérhetik le egy adott technika tényleges pusztító erejét... A törésekhez használt végtagfelületek edzését, keményítését már fehér övtől el kell kezdeni és azután soha nem is lehet abbahagyni! A magas szintre edzett testrészek a tudományos elvekre épülő technikával ötvözve lenyűgöző teljesítményekre lesznek képesek. Így fejlődik pl. kezünk idővel életveszélyes "fegyverré", mely nélkülözhetetlen a törésbemutatóknál, de egyúttal hatásos segítőnkké válik a valódi önvédelemben és közelharcban is.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Belts */}
        {activeTab === 'belts' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
            <div className="space-y-4">
              <div><h3 className="text-white font-bold mb-2">Fehér öv:</h3><p className="text-gray-400">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő taekwon-dos még nem rendelkezik komoly taekwon-do tudással.</p></div>
              <div><h3 className="text-white font-bold mb-2">Sárga öv:</h3><p className="text-gray-400">A földet szimbolizálja, melyben az elültetett növény kicsírázik, és gyökeret ereszt. Így rögződnek a tudás alapjai is a taekwon-dosban.</p></div>
              <div><h3 className="text-white font-bold mb-2">Zöld öv:</h3><p className="text-gray-400">A növényt, növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak.</p></div>
              <div><h3 className="text-white font-bold mb-2">Kék öv:</h3><p className="text-gray-400">Az eget szimbolizálja, amely felé most már terebélyes faként tör a növény. Utal a mind magasabb taekwon-do tudásra.</p></div>
              <div><h3 className="text-white font-bold mb-2">Piros öv:</h3><p className="text-gray-400">A tűz, a vér és a veszély szimbóluma. Emlékezteti a tanítványt, hogy most már óvatosan kell bánnia megszerzett taekwon-do tudásával, de figyelmezteti ellenfelét is, hogy maradjon távol!</p></div>
              <div><h3 className="text-white font-bold mb-2">Fekete öv:</h3><p className="text-gray-400">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Ellentéte a fehérnek. Az elmélyült és mesterfokú taekwon-do tudást jelzi.</p></div>
            </div>
          </div>
        )}

        {/* Forms */}
        {activeTab === 'forms' && (
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-black text-white mb-4">24 Formagyakorlat (Tull)</h2>
              <p className="text-gray-400 mb-2">
                A 24 tulajdonképpeni tull-okat két előkészítő formagyakorlat előzi meg, melyek célja a tanulók alapvető koordináltságának kialakítása és az egyszerűbb technikák kétoldalas ismételtetésén keresztül rákészítés a nehezebb feladatokra. Ezek a négyirányú ütés (Sajoo Chirugi) és a négyirányú hárítás (Sajoo Makgi).
              </p>
              <p className="text-gray-400">
                A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {forms.map((form) => (
                <a key={form.num} href={form.image} target="_blank" rel="noopener noreferrer"
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 group">
                  <img src={form.image} alt={`Formagyakorlat ${form.num}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="p-3 text-center"><p className="text-neon-orange font-bold">Tull {form.num}</p></div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Founder */}
        {activeTab === 'founder' && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Choi Hong Hi</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img
                  src="https://tigrisek.hu/images/choi1.jpg"
                  alt="Choi Hong Hi"
                  className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0"
                />
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Choi Hong Hi tábornok a Taekwon-do legendás alapítója 1918 november 9.-én született a koreai félsziget észak-keleti részén fekvő Hwa-Dae-ben, Myong-Chun tartományban. Gyermekkorától a szépírás (kalligráfia) művészetét tanulta, és már fiatalon megismerkedett az ősi koreai harcművészettel a Taek-kyon-nal.
                  </p>
                  <p>
                    Hét évnyi kalligráfus képzés és intenzív Taek-kyon edzés után felsőfokú tanulmányainak megkezdésére Japánba utazott. Kyoto-ban először főiskolára járt, majd Tokyo-ban a Choong Ang egyetem jogi karának végzése mellett magas fokon elsajátította a shotokan karatét is. Visszatérve Koreába már keményen dolgozott saját új stílusának létrehozásán, emellett a japán megszállás elleni felszabadítási mozgalom szervezője és egyik élharcosa lett, amiért a japánok bebörtönözték és később halálra ítélték. Szerencsére azonban a kivégzés előtt három nappal, 1945 augusztus 15.-én Korea felszabadult és Choi szabad emberként léphetett ki a börtön kapuján.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row-reverse gap-6 mb-6">
                <img
                  src="https://tigrisek.hu/images/choi2.jpg"
                  alt="Choi Hong Hi katonai pályafutása"
                  className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0"
                />
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Choi Hong Hi a katonai pályát választotta hivatásul és a Szöul-i Katonai Akadémián szerzett diplomát 1946-ban. Az új Dél-koreai fegyveres erők egyik megalapítójaként fényes katonai karriert futott be és egészen a kétcsillagos tábornoki rangig vitte. Befolyásos katonatisztként az 1950-es évek közepére létrehozta tudományos elvekre, a koreai szellemiségre és különleges lábtechnikákra épülő, új, kihívást jelentő harcművészetét, ami először a hadseregben került bevezetésre. A Taekwon-dot - melyet ezért a nyugati világban eleinte még "Military Taekwon-do" néven is emlegettek - a saját parancsnoksága alá tartozó 29.-es gyalogsági hadosztály, az u.n. "ököl divízió" katonáinak körében kezdte el oktatni és ők próbálták ki először éles harchelyzetben is.
                  </p>
                  <p>
                    Choi kezdeményezésére a "Taekwon-do" elnevezést hivatalosan <strong className="text-white">1955 április 11.-én</strong> fogadták el Koreában és azóta ez a nap a Taekwon-do Születésnapja!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  General Choi elnökletével 1959 szeptemberében megalakult az első koreai Taekwon-do Szövetség. 1961-ben erős politikai nyomás hatására visszavonult a katonai pályától, de később 1962-ben diplomataként kinevezték Korea malaysiai nagykövetévé. <strong className="text-white">1966 március 22.-én</strong> kilenc tagország részvételével Szöul-ban megalapította a Nemzetközi Taekwon-do Szövetséget (International Taekwon-do Federation), melynek elnöki posztját haláláig Ő töltötte be. General Choi az 1970-es évek elejére végleg szembekerült az akkori Dél-koreai diktátor-elnök rezsimjével és ezért 1972-ben politikai menekültként Kanadába emigrálni kényszerült, ahol állampolgárságot kapott.
                </p>
                <p>
                  1973-tól kezdve Choi Hong Hi a Taekwon-do valóságos "utazó nagykövete" lett. Repülő járatról járatra szállva, az elmúlt évtizedek során földünk szinte valamennyi országába ellátogatott, hogy harcművészetét ismertté és elismertté tegye. Még idős korában is fáradhatatlan energiával tartotta a bemutatókat, edzőtáborokat, övvizsgákat, továbbképző szemináriumokat - kizárólag a Taekwon-donak szentelve életét! Igazi géniusz volt, született vezető és milliók számára követendő példakép. Szuggesztív egyéniségével és óriási tudásanyagával képes volt tanítványok millióit vonzani az edzőtermekbe. Életének nemes célját, a Taekwon-do világméretű elterjesztését végül teljes siker koronázta.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://tigrisek.hu/images/choi3.jpg"
                  alt="Choi Hong Hi - A Taekwon-do Atyja"
                  className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0"
                />
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    A Taekwon-do az 1990-es évek végére hihetetlen tömegbázisra tett szert, futótűz sebességével hódítva meg a világot. Napjainkban ez az egyik legnagyobb létszámú harcművészeti ág, melyet öt kontinens több, mint száz tagországában sok millióan űznek.
                  </p>
                  <p>
                    A Taekwon-do Atyját, vagy ahogy életrajzírói kedvesen említik a "Kis Óriást" 84 éves korában, rövid ideig tartó súlyos betegség után Phenjan-ban, Észak-Koreában érte a halál. A XX. század utolsó nagy harcművész stílusalapítója <strong className="text-white">2002 június 15.-én</strong> örökre eltávozott...
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-neon-orange font-bold text-lg mb-6">Életrajzi mérföldkövek</h3>
              <div className="space-y-4">
                {[
                  { year: '1918', event: 'Született Hwa-Dae-ben, Myong-Chun tartományban' },
                  { year: '1930-as évek', event: 'Kalligráfia és Taek-kyon képzés; Japánban shotokan karate' },
                  { year: '1945', event: 'Felszabadulás a börtönből Korea felszabadulásakor' },
                  { year: '1946', event: 'Diploma a Szöul-i Katonai Akadémián' },
                  { year: '1955', event: 'A "Taekwon-do" elnevezés hivatalos elfogadása (április 11.)' },
                  { year: '1959', event: 'Első koreai Taekwon-do Szövetség megalakulása' },
                  { year: '1966', event: 'ITF (International Taekwon-do Federation) alapítása (március 22.)' },
                  { year: '1972', event: 'Kanadába emigrál politikai menekültként' },
                  { year: '1973-tól', event: 'A Taekwon-do "utazó nagykövete" - világkörüli turnék' },
                  { year: '2002', event: 'Elhunyt Phenjanban, Észak-Koreában (június 15.)' },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-28 text-neon-orange font-bold text-sm text-right pt-0.5">
                      {item.year}
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-neon-orange rounded-full mt-2" />
                    <p className="text-gray-300 text-sm">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Oath */}
        {activeTab === 'oath' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Eskü</h2>
            <p className="text-gray-400 mb-6">Az edzések elején és versenyeken a taekwon-do-sok a következő esküt mondják:</p>
            <div className="space-y-3 mb-8">
              {[
                'Betartom a Taekwon-do alapelveit.',
                'Tisztelem az instruktort és idősebb tagjait.',
                'Soha nem élek vissza a Taekwon-dóval.',
                'Igazságos és becsületes emberi életet élek.',
                'Taekwon-dót egy erőteljesebb, békésebb világ érdekében gyakorlom.',
              ].map((point, i) => (
                <p key={i} className="text-gray-300"><span className="text-neon-orange font-bold">{i + 1}.</span> {point}</p>
              ))}
            </div>
          </div>
        )}

        {/* Dictionary */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white">Koreai–Magyar–Angol Szótár</h2>

            {/* Counting */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <h3 className="text-white font-bold text-lg">Számolás</h3>
              </div>
              <div className="grid grid-cols-3 bg-gray-800/50 px-6 py-2 text-xs font-bold text-gray-400 border-b border-gray-700">
                <span>Koreai</span><span>Magyar</span><span>Angol</span>
              </div>
              <div className="divide-y divide-gray-800">
                {counting.map((entry, i) => (
                  <div key={i} className={`grid grid-cols-3 px-6 py-2 text-sm ${i % 2 === 0 ? '' : 'bg-gray-900/50'}`}>
                    <span className="text-neon-orange font-bold">{entry.korean}</span>
                    <span className="text-gray-300">{entry.hungarian}</span>
                    <span className="text-gray-500">{entry.english}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Letter filter */}
            <div className="flex flex-wrap gap-2">
              {dictionary.map((group) => (
                <button
                  key={group.letter}
                  onClick={() => setDictLetter(group.letter)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                    dictLetter === group.letter
                      ? 'bg-neon-orange text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {group.letter}
                </button>
              ))}
            </div>

            {/* Dictionary entries */}
            {dictionary.filter((g) => g.letter === dictLetter).map((group) => (
              <div key={group.letter} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                  <h3 className="text-neon-orange font-bold text-xl">{group.letter}</h3>
                </div>
                <div className="grid grid-cols-3 bg-gray-800/50 px-6 py-2 text-xs font-bold text-gray-400 border-b border-gray-700">
                  <span>Koreai</span><span>Magyar</span><span>Angol</span>
                </div>
                <div className="divide-y divide-gray-800">
                  {group.entries.map((entry, i) => (
                    <div key={i} className={`grid grid-cols-3 px-6 py-2 text-sm ${i % 2 === 0 ? '' : 'bg-gray-900/50'}`}>
                      <span className="text-neon-orange font-bold">{entry.korean}</span>
                      <span className="text-gray-300">{entry.hungarian}</span>
                      <span className="text-gray-500">{entry.english}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rules */}
        {activeTab === 'rules' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white">Szabályok</h2>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-neon-orange font-bold text-lg mb-4">Általános rendelkezések</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  1. Belépéskor a tagok kijelentik, hogy semmilyen általuk ismert testi, vagy szervi elváltozásban nem szenvednek. A taekwon-dosok egészségi állapotuk és fizikai teher-bíró képességük ismeretében, saját felelősségükre vesznek részt az edzéseken, bemutatókon edzőtáborokon, vizsgákon és a versenyeken! A rendszeres sportorvosi vizsgálatra eljárnak.
                </p>
                <p>
                  2. A tagok továbbá kijelentik, hogy korábban büntetve nem voltak. Taekwon-do tudásukat kívülálló személyeknek nem adhatják át (csak az edző engedélyével)! A tagok kijelentik, hogy megszerzett Taekwon-do tudásukkal semmilyen körülmények között nem élnek vissza!
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-neon-orange font-bold text-lg mb-4">Edzőtermi előírások</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>1. Az edzőterembe utcai cipővel belépni, ott enni, inni; dohányozni, hangosan beszélgetni, komolytalanul viselkedni szigorúan tilos! (Ez a látogatókra is vonatkozik!)</p>
                <p>2. A Dojangba való be-, illetve kilépéskor minden taekwon-dos meghajlással köteles köszönni a teremben tartózkodó legmagasabb övfokozatú mester irányába. Fekete övesek távolléte esetén a jelenlevő rangidős edzésvezető, vagy a csapatzászló felé történik a tiszteletadás. Ha nincs csapatzászló, a meghajlás a terem közepe felé történik. Tiszteletadásnál a törzs 30°-os, a fej 45°-os szögben hajlik meg.</p>
                <p>3. Köszönésként a mesterek felé - mind az edzőteremben, mind pedig az utcán, vagy egyéb helyeken is - a meghajlás kötelező! (Minden esetben az alacsonyabb övfokozatú hajoljon meg először). A mester megszólítása Sabom-nim - magyarul: mester.</p>
                <p>4. Mindenkinek be kell tartani a magasabb övfokozatúak felé a tiszteletadás szabályait.</p>
                <p>5. Az edzés csakis a klubvezető-mester, vagy a megbízott helyettese jelenlétében (illetve tudtával és engedélyével) kezdhető el.</p>
                <p>6. Az edzésekről késni, vagy hamarabb elmenni nem, vagy csak nagyon indokolt esetben lehet.</p>
                <p>7. A sorakozó után érkezők kötelesek az ajtóban megállva várakozni és csak mesterük intésére állhatnak be! Az edzések menetét fegyelmezetlenkedéssel, beszélgetéssel senki sem zavarhatja! Előzetes engedély nélkül a sorból kilépni, az edzőtermet elhagyni, illetve az edzésekre beállni szigorúan tilos!</p>
                <p>8. A sérülések megelőzése végett a tanítványok nem viselhetnek az edzéseken sem ékszereket, sem fémtárgyakat (órát, gyűrűt, láncot, fülbevalót, karkötőt, stb.) szemüvegben tilos küzdeni, de az edzéseken saját felelősségére bárki használhatja. Minden tanítvány köteles kéz- és lábkörmeit rendszeresen rövidre vágni, a foglalkozásokon tisztára mosott ruhában, ápoltan megjelenni.</p>
                <p>9. Taekwon-do egyenruhában (dobok) a teremben tartózkodók csak a földre ülhetnek pihenés céljából!</p>
                <p>10. A klubban a rendért a legmagasabb övfokozatú színes övesek a felelősek és kötelességük a fegyelem bármilyen eszközzel való betarttatása!</p>
                <p>11. A foglalkozások megkezdése előtti időt a tanítványok technikai tudásuk, fizikai képességeik fejlesztésére fordítsák.</p>
                <p>12. A tanfolyami és tagdíjakat pontosan fizessék be, aki többszöri felszólításra sem rendezi anyagi lemaradását, fegyelmi büntetést kap. Folyamatos és/vagy igazolatlan távolmaradások öv vizsgáról való eltiltást, a klubból való kizárást eredményezik.</p>
                <p>13. Az edzésre hozott értéktárgyakért semmilyen felelőséget sem vállal a klub vezetősége, az öltöző zárhatóságától függetlenül.</p>
                <p>14. Mindenki hang nélkül és a legjobb tudását nyújtva, keményen dolgozzon meg az eredményekért.</p>
                <p>15. Tudni kell önfegyelemmel viselni a terhelések okozta fájdalomérzetet, fáradságot, kellemetlenséget.</p>
                <p>16. Egy edzőtermet - az oda belépők alázatos magatartása, - az ott végzett kemény munka, - a Taekwon-do szelleme teszi Dojanggá!</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-neon-orange font-bold text-lg mb-4">Meghajlások</h3>
              <p className="text-white font-bold mb-3">Mikor kell meghajolni?</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>- terembe be- és kilépéskor</li>
                <li>- páros gyakorlatok előtt, után a párod felé</li>
                <li>- magasabb öves felé, megszólítás előtt, majd megköszönni a válaszát</li>
                <li>- töréstechnika előtt, után, bemutatón a közönség felé, vizsgán a vizsgáztató felé</li>
                <li>- edzőtermen kívül is, ha magasabb övessel vagy mesterrel találkozol, köszönés képpen</li>
                <li>- versenyen, mérkőzés előtt, után a bírók és az ellenfeled felé</li>
                <li>- övvizsga területére be- és kilépéskor</li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-neon-orange font-bold text-lg mb-4">Tanítványok figyelmébe!</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>A tanítvány soha ne fáradjon bele a tanulásba. Bárhol és bármikor gyakoroljon ahol lehetősége nyílik rá: ez a tudás alapja!</p>
                <p>Igyekezzék saját mércéjét és technikai felkészültségét mindig a lehető legmagasabbra állítani és tudásával előbbre vinni az egész taekwon-do-sport ügyét. A tanítvány által elért eredmények jelentik az edzők számára a legnagyobb jutalmat fáradozásaikért. A tanuló hozzon áldozatot mesteréért és klubjáért és olyan legyen akire számítani lehet! Ha szükség van rá, versenyezzen és vegyen részt a bemutatókon, magasabb fokozatúak pedig nyújtsanak segítséget az edzésvezetői munkában!</p>
                <p>A növendék viselkedésében és emberi tulajdonságaiban mutasson jó példát! Legyen szerény, visszafogott és tisztelettudó. Tudásával ne kérkedjen, sporttársait ne bírálja.</p>
                <p>Legyen hűséges és kitartó, soha ne kritizálja mások előtt mesterét, és az általa képviselt stílust, vagy iskolát.</p>
                <p>Ha instruktorától új technikát tanul, szorgalmasan gyakorolja addig, amíg tökéletesen el nem sajátítja.</p>
                <p>Jusson eszébe, hogy az edzőtermen kívüli viselkedésével és életmódjával a Taekwon-do egészére vet fényt.</p>
                <p>Ha egy tanuló olyan technikákat, vagy technikai megoldásokat szed fel, amellyek saját mestere szerint helytelenek, akkor azonnal fel kell hogy hagyjon a gyakorlásával. Amennyiben az illető erre nem hajlandó, akkor inkább menjen el! Valaki vagy elfogadja és maradéktalanul magáévá teszi mestere tanácsait, vagy pedig nincs keresnivalója a klubban!</p>
                <p>Minden tanítvány törődjék bele, hogy edzésen, társai rovására semmiféle előjogokat nem érhet el, a magasabböveseknek is részt kell venniük az edzésmunkában, ha csak edzőjük más feladatot nem ró ki rájuk.</p>
                <p>Amenyiben úgy érzi a tanuló, hogy egy technikai kérdésben nem biztos, akkor feltétlenül forduljon instruktorához! A közönyös, érdektelen növendék soha nem lesz képes eredmények elérésére.</p>
                <p>A tanítvány soha ne éljen vissza a belé helyezett bizalommal!</p>
                <p>Ha ezek közül a szabályok közül a tanítvány akár csak egyet is megszeg, önfegyelemmel viselje a következményeit.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
