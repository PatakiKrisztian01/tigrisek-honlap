import { useState } from 'react';

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

// --- HIVATALOS FORMAGYAKORLAT ADATBÁZIS ---
const formsData = [
  { num: 'E1', name: 'Saju Jirugi', movements: 14, type: 'preparatory', meaning: 'Négyirányú ütés. Alapvető előkészítő gyakorlat a kezdő tanítványok részére a koordináció és az egyenes vonalú ütések, állások elsajátítására.' },
  { num: 'E2', name: 'Saju Makgi', movements: 16, type: 'preparatory', meaning: 'Négyirányú hárítás. A második előkészítő gyakorlat, amely a alapvető védőtechnikák (alsó és középső hárítás) irányváltásokkal történő rögzítését szolgálja.' },
  { num: 1, name: 'Chon-Ji', movements: 19, type: 'official', meaning: 'Szó szerint "Menny és Föld"-et jelent. A Távol-Keleten a világ teremtésének vagy az emberi történelem kezdetének a szimbóluma, ezért ez a kezdő formagyakorlat. Két részből áll: az egyik a Mennyországot, a másik a Földet jelképezi.' },
  { num: 2, name: 'Dan-Gun', movements: 21, type: 'official', meaning: 'A szent Dan-Gun-ról kapta the nevét, aki a legenda szerint i.e. 2333-ban megalapította Koreát (Gojoseon-t).' },
  { num: 3, name: 'Do-San', movements: 24, type: 'official', meaning: 'Ahn Chang-ho (1878–1938) függetlenségi harcos és pedagógus írói álneve. A 24 mozdulat az egész életét jelképezi, amit Korea oktatásának és függetlenségének szentelt.' },
  { num: 4, name: 'Won-Hyo', movements: 28, type: 'official', meaning: 'A neves buddhista szerzetesről kapta a nevét, aki i.sz. 686-ban bevezette a buddhizmust a Silla dinasztiába.' },
  { num: 5, name: 'Yul-Gok', movements: 38, type: 'official', meaning: 'A nagy koreai filozófus és tudós, Yi I (1536–1584) álneve, akit a "Korea Konfuciusza"-ként is emlegetnek. A 38 mozdulat a 38. szélességi fokra utal, ami a szülőhelye, a diagram pedig a "tudóst" jelképezi.' },
  { num: 6, name: 'Joong-Gun', movements: 32, type: 'official', meaning: 'Ahn Joong-Gun függetlenségi harcosról kapta a nevét, aki meggyilkolta Hirobumi Ito-t, az első japán főkormányzót Koreában. A 32 mozdulat az életkorát jelzi, amikor 1910-ben kivégezték Lui-Shung börtönében.' },
  { num: 7, name: 'Toi-Gye', movements: 37, type: 'official', meaning: 'A neves tudós, Yi Hwang (16. század) írói álneve, aki az újkori konfucianizmus szakértője volt. A 37 mozdulat a 37. szélességi fokra utal, ahol született, a diagram pedig a "tudóst" jelenti.' },
  { num: 8, name: 'Hwa-Rang', movements: 29, type: 'official', meaning: 'A Hwarang katonai ifjúsági csoportról kapta a nevét, amely a 7. század elején alakult a Silla dinasztiában. A 29 mozdulat a 29. gyalogos hadosztályra utal, ahol a Taekwon-do kifejlődött.' },
  { num: 9, name: 'Choong-Moo', movements: 30, type: 'official', meaning: 'A nagy Yi Sun-Sin admirális posztumusz neve, aki i.sz. 1592-ben feltalálta az első páncélozott hadihajót (Teknőshajó). A gyakorlat bal kezes támadással ér véget, szimbolizálva sajnálatos, korai halálát.' },
  { num: 10, name: 'Kwang-Gae', movements: 39, type: 'official', meaning: 'Kwang-Gae-Toh-Wang-ról, a Koguryo dinasztia híres királyáról kapta a nevét, aki visszaszerezte az összes elveszített területet, beleértve Mandzsúria nagy részét is. A 39 mozdulat az uralkodásának első két számjegyére utal (i.sz. 391).' },
  { num: 11, name: 'Po-Eun', movements: 36, type: 'official', meaning: 'Chong Mong-Chu (14. század) költő és tudós álneve, akinek "Nem adom fel a hűségem" című verse minden koreai számára ismert. A diagram egy egyenes vonal, amely a király és a haza iránti rendíthetetlen hűségét szimbolizálja.' },
  { num: 12, name: 'Ge-Baek', movements: 44, type: 'official', meaning: 'Ge-Baek nagy generálisról, Baekje híres hadvezéréről kapta a nevét (i.sz. 660). A diagram egy egyenes vonal, ami a szigorú katonai fegyelmet jelképezi.' },
  { num: 13, name: 'Eui-Am', movements: 45, type: 'official', meaning: 'Son Byong Hi írói álneve, aki az 1919. március 1-jei koreai függetlenségi mozgalom vezére volt. A 45 mozdulat az életkorára utal, amikor megváltoztatta a Donghak vallás nevét Chondoizmusra.' },
  { num: 14, name: 'Choong-Jang', movements: 52, type: 'official', meaning: 'Kim Duk-Ryang tábornok álneve, aki a 14. században harcolt a japán invázió ellen. A gyakorlat bal kezes támadással zárul, utalva arra, hogy tragikus módon a börtönben halt meg 25 évesen.' },
  { num: 15, name: 'Juche', movements: 45, type: 'official', meaning: 'A Juche filozófiáról (önerőre támaszkodás) kapta a nevét, amely azt hirdeti, hogy az ember ura a saját sorsának. A diagram a Baekdu-hegyet szimbolizálja (Megjegyzés: Bizonyos kánonokban a Ko-Dang váltótullja).' },
  { num: 16, name: 'Sam-Il', movements: 33, type: 'official', meaning: 'Az 1919. március 1-jén kezdődött történelmi koreai függetlenségi mozgalomra utal. A 33 mozdulat a mozgalmat elindító 33 koreai hazafit jelképezi.' },
  { num: 17, name: 'Yoo-Sin', movements: 68, type: 'official', meaning: 'Kim Yoo-Sin tábornokról, a Silla dinasztia főparancsnokáról kapták a nevét. A 68 mozdulat az i.sz. 668-as évre utal, amikor egyesítette a három királyságot.' },
  { num: 18, name: 'Choi-Yong', movements: 46, type: 'official', meaning: 'Choi Yong tábornokról, a 14. századi Koryo dinasztia fővezéréről kapta a nevét, aki hűségéről és hazaszeretetéről volt híres.' },
  { num: 19, name: 'Yon-Gae', movements: 49, type: 'official', meaning: 'Yon Gae Somoon-ról, a Koguryo dinasztia híres tábornokáról kapta a nevét, aki megvédte az országot a Tang dinasztia inváziójától. A 49 mozdulat az i.sz. 649-es év utolsó két számjegyére utal.' },
  { num: 20, name: 'Ul-Ji', movements: 42, type: 'official', meaning: 'Ul-Ji Moon Dok tábornokról kapta a nevét, akinek i.sz. 612-ben sikerült megvédenie Koreát a közel egymilliós Sui kínai inváziós sereggel szemben a Salsu folyónál.' },
  { num: 21, name: 'Moon-Moo', movements: 61, type: 'official', meaning: 'Munmu király tiszteletére, aki i.sz. 661-ben lépett a trónra és véglegesen egyesítette a királyságokat. Testét a tengerben temették el, hogy halála után is sárkányként védje Koreát.' },
  { num: 22, name: 'So-San', movements: 72, type: 'official', meaning: 'Choi Hyun Ung buddhista szerzetes (1520–1604) álneve. A 72 mozdulat az életkorára utal, amikor szerzetes társaival segített visszaverni a japán kalózok és katonák támadását.' },
  { num: 23, name: 'Se-Jong', movements: 24, type: 'official', meaning: 'A valaha élt legnagyobb koreai királyról, Se-Jong-ról kapta a nevét, aki 1443-ban feltalálta a koreai ábécét (Hangul). A 24 mozdulat a Hangul ábécé 24 betűjére utal.' },
  { num: 24, name: 'Tong-Il', movements: 56, type: 'official', meaning: 'Korea újraegyesítésének (Tong-Il) szent szimbóluma, amely 1945 óta megosztott. A diagram egy egyennes vonal, ami a homogén koreai nép egységét jelképezi.' }
];

// --- SZÓTÁR ÉS SZÁMOLÁS ADATBÁZIS (TELJESEN BEÉPÍTVE) ---
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

const dictionaryData = [
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
      { korean: 'Daebi', hungarian: 'Küzdő / Védő', english: 'Guarding' },
      { korean: 'Dae', hungarian: 'Nagy', english: 'Big' },
      { korean: 'Dojang', hungarian: 'Edzőterem', english: 'Gym / Training hall' },
      { korean: 'Dobok', hungarian: 'Taekwon-do egyenruha', english: 'Uniform' }
    ]
  },
  {
    letter: 'G',
    entries: [
      { korean: 'Gunnun', hungarian: 'Sétáló', english: 'Walking' },
      { korean: 'Goman', hungarian: 'Elég / Állj (Vezényszó)', english: 'Stop' }
    ]
  },
  {
    letter: 'J',
    entries: [
      { korean: 'Jirugi', hungarian: 'Ütés (egyenesvonalú szúró kéztechnika)', english: 'Punch' },
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

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [dictLetter, setDictLetter] = useState<string>('A');

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300 flex flex-col justify-between">
      
      {/* 1. FIX FELSŐ FEJLÉC ÉS FŐCÍM */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      {/* TARTALOM ÉS NAVIGÁCIÓ KÖZÖS TÖRZSE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 flex-grow w-full">
        
        {/* 2. LAPFÜLEK TARTALMA (MOBILON FENT, MERT A MENÜ ALUL VAN) */}
        <main className="w-full lg:w-3/4 order-1 lg:order-1">

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <blockquote className="text-center text-xl sm:text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
                "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
              </blockquote>
              <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, and gondoskodik ezek életben tartásáról.</p>
                <p>A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete. Ez az elnevezés több szempontból is jó választásnak bizonyult. Egyrészt hasonlít az ősi taek kyon elnevezéshez, így bizonyos szempontból folytonosságot jelez a régi és az új stílus között, másrészt, pedig híven fejezi ki a sportág jellemzőit.</p>
                <p>Más megközelítésben a Taekwon-do tudomány, vagyis a test tudományos alkalmazása a harcművészetben. Az ember, aki az anatómia, biomechanika és fizika törvényszerűségeinek ismeretében, testének intensiv edzése során képes elérni a benne rejlő lehetőségek maximumát! De ne feledjük, pusztán a technikák gyakorlása (legyen az bármilyen magasszintű sporttevékenység) még senkit sem tesz harcművésszé. Ez csak a megfelelő lelki töltéssel és szellemi felkészültséggel párosulva, vele szoros egységet alkotva éri el végső célját.</p>
                <p>A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.</p>
              </div>
            </div>
          )}

          {/* HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do Története</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>A Taekwon-do szó új keletű, csak az 1950-es évektől kezdte használni Choi Hong Hi a Taekwon-do megalapítója. A Taekwon-do viszonylag új modern harcművészet, a mai technikáinak a túlnyomó többségét a XX. század \'50-es \'60-as éveiben alakította ki az alapító Koreai mesterek segítségével. Mivel egy dinamikus, fejlődő képes harcművészeti ágazatról van szó, a mai napig is folyamatosan változik, fejlődik.</p>
                <p>A Taekwon-do eredete az időszámításunk előtti I. századi társadalmakig vezethető vissza. Ebben az időben a Koreai félszigeten three királyság alakult ki: Silla (ie. 57.), Koguryo (ie. 37.) és Baekje (ie. 18.). Ezek a királyságok évszázadokon keresztül harcban álltak egymással a félsziget feletti uralorért.</p>
                <p>Az első máig fenn maradt harcművészeti vonatkozású emlékek ebből az időből származnak: a Koguryu dinasztiabeli Muyong-chong és Kakchu-chong nevű királyi síremlékek falain, illetve mennyezetén lévő falfestmények, melyek egymással küzdő férfiakat ábrázolnak.</p>
                <p>Akkoriban a Koguryo tudott a legdinamikusabban terjeszkedni, ahol már ekkor magas színvonalon oktatták a harcművészeteket. Silla 24. királya Chin Heung Konguryo királyával szövetkezve létrehozta az első elit katonai alakulatot a "Hwarangdo"-t. A Hwarangdo kiképzésben nagy hangsúlyt fektettek mind a fegyveres mind a fegyver nélküli közelharc képzésére. Ha hinni lehet a korabeli történeteknek, már ekkor magas színvonalú láb technika jellemezte a stílust. A Hwarangdo képzésben a testi nevelés mellett a szellemi képzéssel is foglalkoztak. Ezt egy Buddhista tanító Won Kwang konfuciusi tanai alapján tették.</p>
                <p>A konfucionizmus mind a mai napig jellemzi a Koreai harcművészetek nagy részét. Szemben például a Japán harcművészetekkel, ahol többnyire a Zen Buddhizmus adja a szellemi hátteret.</p>
                <p>Végül Munmu Vang-nak (661-680) Silla királyának, sikerült egyesítenie a Koreai félszigetet uralma alatt 668-ban, bár még Kínával 735-ig voltak háborúk a határ kérdésében.</p>
                <p>A Silla által létrehozott egységes Koreai állam végül belülről hullott darabjaira, és az országot egy Van Gon (877-943) nevezetű hadvezérnek sikerült újraegyesítenie 935-ben. Az untested állam és a dinasztia Koryo néven 1392-ig állt fenn. Innen ered a Korea elnevezése is az Európai nyelvekben.</p>
                <p>1392-ben a Koryo dinasztiát felváltotta a Li dinasztia. Melynek első királya Li Szong Gé megfosztotta trónjától a Koryo dinasztia utolsó királyát is és Thedzsó néven ült trónra. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták O-Csoszonnak is neon-orange. Ez a korszak lényegében 1910-ig a Japán megszállás kezdetéig tartott.</p>
                <p>Ebben az időben a harcművészeteket elsősorban a hadseregben oktatták, illetve megvoltak a köznépnek is a maga harcművészeti játékai, például a Soo Bak és a Taek Kyon. Máig rendszeresen rendeznek Soo Bak és Taek Kyon versenyeket a Dan-O ünnepek alkalmával (Május 5.-én és Augusztus 15.-én). Valószínűleg ebben az időben érték Kínai hatások is a Koreai harcművészeteket melyek jellegzetességei néhány mai Koreai harcművészeti ágban is megtalálhatóak.</p>
                <p>A 19. század végén és a 20. század elején, Koreáért és a környező területekért, three nagyhatalom versenyzett, Kína, Oroszország és Japán. Végül Japán szerezte meg Koreát, és szinte gyarmati sorba taszította. A Koreai népet szinte tökéletesen kizsákmányolták és megpróbálták eljapánosítani. Ekkor a Koreai középosztály, ha iskoláztatni akarta a gyerekeit, csak Japánba tudta elküldeni őket tanulni. Ezek a Japánban tanuló Koreai fiatalok találkoztak a Japán harcművészetekkel, és az akkoriban Japánban elterjedő Okinawai eredetű Karatéval is.</p>
                <p>Ilyen Koreai fiatalember volt Choi Hong Hi, aki a Taekwon-do alapítója és később az ITF elnöke lett, illetve Choi Yong Sul is, aki Takeda Sogakutól tanult Daito Ryu Aiki Jitsut (az Aikido elődje), majd hazatérve kombinálva Koreai stílusokkal Yu Kwon Sul néven oktatta, amelyből később a Hapkido lett. Illetve Hyung Yee Choi is, aki Choi Hong Hi rokona volt és Masutatsu Oyama néven Japánban a Kyokushin Karate megalapítója lett.</p>
                <p>1945-ben a Japán hadsereg megadta magát. Koreába a 38. szélességi körtől délre az Amerikai, attól északra pedig a Szovjet hadsereg vonult be. Az Amerikai zónában a Koreai Köztársaság (Dél-Korea), a Szovjet zónában pedig a Koreai Népi Demokratikus Köztársaság (Észak-Korea) jött létre.</p>
                <p>1950. Június 25.-én kirobbant a háború a két Koreai állam között. Az Északiak hetek alatt elfoglalták Dél-Korea 90%-át. A Déliek oldalán előbb az Amerikaiak és az ENSZ csapatok kapcsolódtak be a háborúba majd az Északiak oldalán 1 millió Kínai "önkéntes". A háború 1953. Július 27.-én Panmindzsonban fegyverszünettel ért véget. A két Korea területi és politikai megosztottsága máig tart.</p>
                <p>A hosszú Japán megszállás után Dél-Koreában, a különböző harcművészeti iskolák (Kwan-ok) egymás után nyitották meg a kapuikat. Ezekben az iskolákban a legtöbb esetben egymás mellett többféle harcművészeti stílust oktattak, illetve ekkor még nem volt éles határvonal a különböző stílusok között. Ezeknek az iskoláknak a közös jellemzője volt, hogy egy jelesebb mester, az iskola vezetője köré tömörültek. Tulajdonképpen ovo adta nekik az összetartó erőt. Értelemszerűen ekkor még nem léteztek a stílusoknak sem szervezetei, sem szövetségei. Később ezeket a harcművészeti stílusokat igyekeztek nemzeti szövetségekben tömöríteni. <strong className="text-white">1955. április 11.-én fogadták el hivatalosan a Taekwon-do kifejezést Koreában.</strong></p>
              </div>
            </div>
          )}

          {/* TECHNIQUES */}
          {activeTab === 'techniques' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do mozgásanyagai</h2>
              <div className="space-y-6 text-sm sm:text-base">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">1. Bázis technika</h3>
                  <p className="text-gray-400">A tradicionális harcművészetek Alfája és Omegája - így a Taekwon-do tanulásának is soha el nem hagyható alapja! Időről időre tudás szinttől függetlenül, az alapvető állásokat, kéz és lábtechnikákat mindenkinek újra és újra gyakorolnia kell! Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik. Az intenzív gyakorlás és nagy ismétlésszám nyomán kialakul az erő fókuszálásának képessége, javul a koordináció, az egyensúly és térérzék, fejlődik az általános mozgáskultúra. Folyamatosan tökéletesednek: gyorsabbá, pontosabbá és hatásosabbá válnak az egyre magasabb szintű támadó és védekező technikák.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">2. Formagyakorlat (Versenyszám)</h3>
                  <p className="text-gray-400 mb-3">Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. A szimmetriára épülő mozgássorozatokban, pontosan kidolgozott koreográfia szerint, ütések, hárítások, rúgások, ugró ütések és ugró rúgások logikus kombinációi váltják egymást. A Taekwon-doban összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet (az élet állandó körforgását) szimbolizálják.</p>
                  <p className="text-gray-400">Összesen 24 Tull - formagyakorlat van az ITF taekwon-dóban. Ezeket Choi Hong Hi nagymester tervezte és alkotta meg. A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">3. Formai küzdelem</h3>
                  <p className="text-gray-400">(Páros bázis, vagy küzdelmi helyzet gyakorlat). A bázis, illetve formagyakorlatokból átemelt támadás és védés minták, szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével. Az idealizált gyakorlatokban előre elképzelt és megtervezett harchelyzeteket imitálva: egy-kettő-három, vagy akár több lépésben folyik az egyre nehezebb kombinációk fokozatos elsajátítása. A páros formai küzdelemben való jártasság lényegében a felkészítés utolsó állomása, mely után következhet a valódi szabad küzdelem.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">4. Szabad küzdelem (Versenyszám)</h3>
                  <p className="text-gray-400">A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti - kötetlen -"éles" harchelyzetben. A Taekwon-do gyakorlói a bázisok, formagyakorlatok és formai küzdelmek során beépült tudás birtokában próbálnak felülkerekedni most már kiszámíthatatlanul támadó ellenfelükön. A siker vagy kudarc azonban nem kis mértékben lelki tényezők és pszichikai felkészültség függvénye! A technikák elsajátítása ugyanis a harcművész útnak csak egyik állomása. A Taekwon-do tanainak 5. pontjában foglalt ún. "Rettenthetetlen küzdőszellem" nélkül nincs és nem is lehet igazi győzelem!</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">5. Önvédelem</h3>
                  <p className="text-gray-400 mb-3">A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre és harcművész előképzettségre, amivel kezdők még nem rendelkeznek. Célja a hatásos közelharc és "túlélő" technikák elsajátítása, melyek képesek elhárítani valós veszélyhelyzeteket. Lásd pl. fojtásból, fogásból, leszorításból szabadulás, támadás visszaverése szűk helyen zárt térben, védekezés hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.</p>
                  <p className="text-white font-bold mb-1">Ősi íratlan szabályok:</p>
                  <ul className="text-gray-400 space-y-1 ml-4 list-disc">
                    <li>inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                    <li>inkább lefogni, visszatartani, mint megsebesíteni</li>
                    <li>inkább megsebesíteni, mint megnyomorítani</li>
                    <li>inkább megnyomorítani, mint megölni</li>
                    <li>inkább megölni, mint hogy téged öljön meg</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">6. Töréstechnika (Versenyszám)</h3>
                  <p className="text-gray-400">A Taekwon-donak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni. Napjainkra a küzdelmek már védőfelszerelésben, szigorú szabályok között folnyak, ezért a Taekwon-dosok különböző szakítószilárdságú tárgyak törésekor mérhetik le egy adott technika tényleges pusztító erejét... A törésekhez használt végtagfelületek edzését, keményítését már fehér övtől el kezdik és azután soha nem is lehet abbahagyni! A magas szintre edzett testrészek a tudományos elvekre épülő technikával ötvözve lenyűgöző teljesítményekre lesznek képesek. Így fejlődik pl. kezünk idővel életveszélyes "fegyverré", mely nélkülözhetetlen a törésbemutatóknál, de egyúttal hatásos segítőnkké válik a valódi önvédelemben és közelharcban is.</p>
                </div>
              </div>
            </div>
          )}

          {/* BELTS */}
          {activeTab === 'belts' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <div><h3 className="text-white font-bold mb-1">Fehér öv:</h3><p className="text-gray-400">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő taekwon-dos még nem rendelkezik komoly taekwon-do tudással.</p></div>
                <div><h3 className="text-white font-bold mb-1">Sárga öv:</h3><p className="text-gray-400">A földet szimbolizálja, melyben az elültetett növény kicsírázik, és gyökeret ereszt. Így rögződnek a tudás alapjai is a taekwon-dosban.</p></div>
                <div><h3 className="text-white font-bold mb-1">Zöld öv:</h3><p className="text-gray-400">A növényt, növekedését szimbolizálja. Jelzi, hogy a technikák भी igazi fejlődésnek indulnak, mint egy bokor ami terebélyesedik, a tudás is egyre szerteágazóbb lesz.</p></div>
                <div><h3 className="text-white font-bold mb-1">Kék öv:</h3><p className="text-gray-400">Az eget szimbolizálja, amely felé most már magas faként tör a növény. Utal a mind magasabb taekwon-do tudásra.</p></div>
                <div><h3 className="text-white font-bold mb-1">Piros öv:</h3><p className="text-gray-400">A veszély szimbóluma, mint a tűz és vér színe. Emlékezteti a tanítványt, hogy most már óvatosan kell bánnia megszerzett taekwon-do tudásával, de figyelmezteti ellenfelét is, hogy maradjon távol!</p></div>
                <div><h3 className="text-white font-bold mb-1">Fekete öv:</h3><p className="text-gray-400">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Ellentéte a fehérnek. Az elmélyült és mesterfokú taekwon-do tudást jelzi.</p></div>
              </div>
            </div>
          )}

          {/* FORMS */}
          {activeTab === 'forms' && (
            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-6">
                <h2 className="text-2xl font-black text-white mb-4">Formagyakorlatok (Tull)</h2>
                <p className="text-gray-400 text-sm mb-2">A 24 tulajdonképpeni tull-okat két előkészítő formagyakorlat előzi meg, melyek célja a tanulók alapvető koordináltságának kialakítása és az egyszerűbb technikák kétoldalas ismételtetésén keresztül rákészítés a nehezebb feladatokra. Ezek a négyirányú ütés (Saju Jirugi) és a négyirányú hárítás (Saju Makgi).</p>
                <p className="text-gray-400 text-sm">A kártyák képeire kattintva automatikusan elindul egy **YouTube keresés** az adott formagyakorlat pontos nevére és videós anyagaira!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formsData.map((form) => {
                  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`ITF Taekwondo ${form.name} tull`)}`;
                  const imageSrc = form.type === 'preparatory' 
                    ? `https://tigrisek.hu/images/formagyak/p1.jpg` 
                    : `https://tigrisek.hu/images/formagyak/p${form.num}.jpg`;

                  return (
                    <div key={form.name} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/40 transition-all duration-300 flex flex-col sm:flex-row">
                      <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer" className="sm:w-1/3 relative overflow-hidden block bg-black min-h-[140px] group cursor-pointer" title={`Kattints ide a ${form.name} YouTube videóinak megtekintéséhez!`}>
                        <img src={imageSrc} alt={form.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 absolute inset-0" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md opacity-80 group-hover:opacity-100 transition-opacity">YouTube 🎬</span>
                        </div>
                      </a>
                      <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-black text-white">{form.type === 'preparatory' ? 'Előkészítő' : `${form.num}.`} {form.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded-md font-bold ${form.type === 'preparatory' ? 'bg-gray-850 text-gray-400' : 'bg-gray-800 text-neon-orange'}`}>{form.movements} mozdulat</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{form.meaning}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* FOUNDER */}
          {activeTab === 'founder' && (
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-6">Choi Hong Hi</h2>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <img src="https://tigrisek.hu/images/choi1.jpg" alt="Choi Hong Hi" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                    <p>Choi Hong Hi tábornok a Taekwon-do legendás alapítója 1918 november 9.-én született a koreai félsziget észak-keleti részén fekvő Hwa-Dae-ben, Myong-Chun tartományban. Gyermekkorától a szépírás (kalligráfia) művészetét tanulta, and már fiatalon megismerkedett az ősi koreai harcművészettel a Taek-kyon-nal.</p>
                    <p>Hét évnyi kalligráfus képzés és intensiv Taek-kyon edzés után felsőfokú tanulmányainak megkezdésére Japánba utazott. Kyoto-ban először főiskolára járt, majd Tokyo-ban a Choong Ang egyetem jogi karának végzése mellett magas fokon elsajátította a shotokan karatét is. Visszatérve Koreába már keményen dolgozott saját új stílusának létrehozásán, emellett a japán megszállás elleni felszabadítási mozgalom szervezője és egyik élharcosa lett, amiért a japánok bebörtönözték és később halálra ítélték. Szerencsére azonban a kivégzés előtt három nappal, 1945 augusztus 15.-én Korea felszabadult és Choi szabad emberként léphetett ki a börtön kapuján.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row-reverse gap-6 mb-6">
                  <img src="https://tigrisek.hu/images/choi2.jpg" alt="Choi Hong Hi katonai pályafutása" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                    <p>Choi Hong Hi a katonai pályát választotta hivatásul és a Szöul-i Katonai Akadémián szerzett diplomát 1946-ban. Az új Dél-koreai fegyveres erők egyik megalapítójaként fényes katonai karriert futott be és egészen a kétcsillagos tábornoki rangig vitte. Befolyásos katonatisztként az 1950-es évek közepére létrehozta tudományos elvekre, a koreai szellemiségre és különleges lábtechnikákra épülő, új, kihívást jelentő harcművészetét, ami először a hadseregben került bevezetésre. A Taekwon-dot - ezt a nyugati világban eleinte még "Military Taekwon-do" néven is emlegettek - a saját parancsnoksága alá tartozó 29.-es gyalogsági hadosztály, az u.n. "ököl divízió" katonáinak körében kezdte el oktatni és ők próbálták ki először éles harchelyzetben is.</p>
                    <p>Choi kezdeményezésére a "Taekwon-do" elnevezést hivatalosan <strong className="text-white">1955 április 11.-én</strong> fogadták el Koreában és azóta ez a nap a Taekwon-do Születésnapja!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                  <p>General Choi elnökletével 1959 szeptemberében megalakult az első koreai Taekwon-do Szövetség. 1961-ben erős politikai nyomás hatására visszavonult a katonai pályától, de később 1962-ben diplomataként kinevezték Korea malaysiai nagykövetévé. <strong className="text-white">1966 március 22.-én</strong> kilenc tagország részvételével Szöul-ban megalapította a Nemzetközi Taekwon-do Szövetséget (International Taekwon-do Federation), melynek elnöki posztját haláláig Ő töltötte be. General Choi az 1970-es évek elejére végleg szembekerült az akkori Dél-koreai diktátor-elnök rezsimjével és ezért 1972-ben politikai menekültként Kanadába emigrálni kényszerült, ahol állampolgárságot kapott.</p>
                  <p>1973-tól kezdve Choi Hong Hi a Taekwon-do valóságos "utazó nagykövete" lett. Repülő járatról járatra szállva, az elmúlt évtizedek során földünk szinte valamennyi országába ellátogatott, hogy harcművészetét ismertté és elismertté tegye. Még idős korában is fáradhatatlan energiával tartotta a bemutatókat, edzőtáborokat, övvizsgákat, továbbképző szemináriumokat - kizárólag a Taekwon-donak szentelve életét! Igazi géniusz volt, született vezető és milliók számára követendő példakép. Szuggesztív egyéniségével és óriási tudásanyagával képes volt tanítványok millióit vonzani az edzőtermekbe. Életének nemes célját, a Taekwon-do világméretű elterjesztését végül teljes siker koronázta.</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img src="https://tigrisek.hu/images/choi3.jpg" alt="Choi Hong Hi - A Taekwon-do Atyja" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                    <p>A Taekwon-do az 1990-es évek végére hihetetlen tömegbázisra tett szert, futótűz sebességével hódítva meg a világot. Napjainkra ovo az egyik legnagyobb létszámú harcművészeti ág, melyet öt kontinens több, mint száz tagországában sok millióan űznek.</p>
                    <p>A Taekwon-do Atyját, vagy ahogy életrajzírói kedvesen említik a "Kis Óriást" 84 éves korában, rövid ideig tartó súlyos betegség után Phenjan-ban, Észak-Koreában érte a halál. A XX. század utolsó nagy harcművész stílusalapítója <strong className="text-white">2002 június 15.-én</strong> örökre eltávozott...</p>
                  </div>
                </div>
              </div>

              {/* TIMELINE */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
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
                      <div className="flex-shrink-0 w-24 text-neon-orange font-bold text-sm text-right pt-0.5">{item.year}</div>
                      <div className="flex-shrink-0 w-2 h-2 bg-neon-orange rounded-full mt-2" />
                      <p className="text-gray-300 text-xs sm:text-sm">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* OATH */}
          {activeTab === 'oath' && (
            <div className="space-y-12">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Taekwondo eskü</h2>
                <p className="text-gray-400 mb-6 text-sm">Az edzések elején és versenyeken a taekwon-do-sok a következő esküt mondják:</p>
                <div className="space-y-3.5">
                  {[
                    'A Taekwondo tanításainak mindenkor eleget teszek!',
                    'Tiszteletet adok mesteremnek és valamennyi társamnak!',
                    'Soha nem élek vissza Taekwondo tudásommal!',
                    'Ha kell, segítek a bajbajutottakon!',
                    'Minden erőmmel a békét építem!',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/40 border border-gray-800/60 rounded-xl p-3.5 hover:border-neon-orange/20 transition-colors">
                      <span className="text-neon-orange font-mono font-black text-lg leading-none">{i + 1}.</span>
                      <p className="text-gray-250 text-sm sm:text-base font-medium">{point}</p>
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
                  {[
                    { title: 'Udvariasság', korean: 'Ye Ui', text: 'A mesterek felé köszönésként mindenhol és mindenkor meghajlás kötelező! A taekwondosok előzékenyen és udvariasan viselkedjenek mindenkivel szemben. Vitás helyzeteknél alkalmazzák a kölcsönös engedmény alapelvét. Ne legyenek önzőek vagy irigyek, tudjanak örülni társaik örömének is. A közös érdekeket mindig helyezzék az egyéni szempontok elé! Tegyenek különbséget mester és tanítvány vagy rangidős és kezdő között. A magasabb fokozatúakban becsüljék a nagyobb tudást, szakmai tapasztalatot s tartsák be feléjük a kötelező tiszteletadás szabályait. Csak azok várjanak el tiszteletet és megbecsülést, akik ehhez méltóan viselkednek, és akik maguk is képesek arra, hogy tiszteljenek másokat. A tiszteletadással visszaélni szigorúan tilos!' },
                    { title: 'Becsületesség', korean: 'Yom Chi', text: 'A Taekwon-dos tartsa be adott szavát, és ígéretét soha ne szegje meg. Bármilyen egyéni sikereket ér el az életben, soha ne feledkezzék meg azokról, akikkel együtt kezdett és segítették, és akiknek ezért a belé fektetett munkáért nagyon sokat köszönhet. A taekwondos soha semmilyen körülmények között se hazudjon! Legyen hűséges hazájához, a Taekwondohoz, mesteréhez és sporttársaihoz. Minden esetben maradjon szerény, nyílt és természetes. Igyekezzen a Taekwondo érdekeit a saját érdekei elé helyezni. A taekwondos ne felejtse el, hogy mindenkor és minden helyzetben a Taekwondot képviseli. Viselkedésével a kívülálló képet kap a Taekwondoról.' },
                    { title: 'Állhatatosság', korean: 'In Nae', text: '"A türelem megismeréshez és boldoguláshoz vezet." Csak akinek van megfelelő kitartása, az remélheti, hogy vágyai egyszer teljesülni fognak. A taekwondos legyen türelmes, ne hajszolja az övfokozatokat, várja ki a kötelező várakozási időket, és minden alkalmat ragadjon meg saját elméleti és gyakorlati tudásának gyarapítására. Rendszeresen járjon edzésre, mert a hébe-hóba lejáró tanítványról senki sem hiszi el, hogy egyszer fekete öves mester akar lenni. Csak az járjon edzésre, aki örömmel teszi azt.' },
                    { title: 'Önuralom', korean: 'Guk Gi', text: 'A sportbeli ellenfeleken kívül a mindennapok nehézségeit és akadályait is le kell küzdeni, amire csak az lesz képes, aki nagyfokú önuralommal és önfegyelemmel rendelkezik. A taekwondos soha ne elégedjen meg önmagával, ugyanakkor önfegyelemmel viselje a kudarc és a siker élményét.' },
                    { title: 'Rettenthetetlen küzdőszellem', korean: 'Baekjul Boolgool', text: 'A Taekwon-dos legyen bátor és elszánt. Ne keresse a veszélyt, de ne is hátráljon meg előle. Ha igazságtalansággal találkozik, szálljon síkra a gyengébb védelmében. Amennyiben pedig harcra kerülne a sor, függetlenül az ellenfél erejétől, félelem és tétovázás nélkül álljon helyt. A taekwondosnak a küzdelemben mindent el kell követnie szabályos keretek között a győzelem érdekében. Az életben ne keresse a veszélyt, ne kezdeményezzen verekedést. Ha vele szemben kezdeményeznek, akkor próbálja meg elkerülni azt. Ha harcra kerül a sor, akkor viszont ne hátráljon meg. Ha igazságtalansággal találkozik, szálljon szembe a gyengébb védelmében.' }
                  ].map((tenet, idx) => (
                    <div key={idx} className="border-l-2 border-neon-orange/40 pl-4 sm:pl-6 space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-gray-500 font-mono text-sm font-bold">{idx + 1}.</span>
                        <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide">{tenet.title}</h3>
                        <span className="text-neon-orange/80 text-xs font-mono font-bold sm:ml-1">— {tenet.korean}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed text-justify">{tenet.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-black/50 group">
                    <img src="/tenets.webp" alt="Taekwon-do Tanai illusztráció" className="w-full h-auto max-h-[450px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DICTIONARY */}
          {activeTab === 'dictionary' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">Koreai–Magyar–Angol Szótár</h2>

              {/* Számolás szekció */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                  <h3 className="text-white font-bold text-lg">Számolás</h3>
                </div>
                <div className="grid grid-cols-3 bg-gray-800/50 px-6 py-2 text-xs font-bold text-gray-400 border-b border-gray-700">
                  <span>Koreai</span><span>Magyar</span><span>Angol</span>
                </div>
                <div className="divide-y divide-gray-800">
                  {countingData.map((entry, i) => (
                    <div key={i} className={`grid grid-cols-3 px-6 py-2 text-sm ${i % 2 === 0 ? '' : 'bg-gray-900/50'}`}>
                      <span className="text-neon-orange font-bold">{entry.korean}</span>
                      <span className="text-gray-300">{entry.hungarian}</span>
                      <span className="text-gray-500">{entry.english}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Betű szűrők */}
              <div className="flex flex-wrap gap-2">
                {dictionaryData.map((group) => (
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

              {/* Kiválasztott betűhöz tartozó szavak */}
              {dictionaryData.filter((g) => g.letter === dictLetter).map((group) => (
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

          {/* RULES */}
          {activeTab === 'rules' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white">Szabályok</h2>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-neon-orange font-bold text-lg mb-4">Általános rendelkezések</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                  <p>1. Belépéskor a tagok kijelentik, hogy semmilyen általuk ismert testi, vagy szervi elváltozásban nem szenvednek. A taekwon-dosok egészségi állapotuk és fizikai teher-bíró képességük ismeretében, saját felelősségükre vesznek részt az edzéseken, bemutatókon edzőtáborokon, vizsgákon és a versenyeken! A rendszeres sportorvosi vizsgálatra eljárnak.</p>
                  <p>2. A tagok továbbá kijelentik, hogy korábban büntetve nem voltak. Taekwon-do tudásukat kívülálló személyeknek nem adhatják át (csak az edző engedélyével)! A tagok kijelentik, hogy megszerzett Taekwon-do tudásukmal semmilyen körülmények között nem élnek vissza!</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-neon-orange font-bold text-lg mb-4">Edzőtermi előírások</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                  <p>1. Az edzőterembe utcai cipővel belépni, ott enni, inni; dohányozni, hangosan beszélgetni, komolytalanul viselkedni szigorúan tilos! (Ez a látogatókra is vonatkozik!)</p>
                  <p>2. A Dojangba való be-, illetve kilépéskor minden taekwon-dos meghajlással köteles köszönni a teremben tartózkodó legmagashatöbb övfokozatú mester irányába. Fekete övesek távolléte esetén a jelenlevő rangidős edzésvezető, vagy a csapatzászló felé történik a tiszteletadás. Ha nincs csapatzászló, a meghajlás a terem közepe felé történik. Tiszteletadásnál a törzs 30°-os, a fej 45°-os szögben hajlik meg.</p>
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
                  <p>14. Mindenkinki hang nélkül és a legjobb tudását nyújtva, keményen dolgozzon meg az eredményekért.</p>
                  <p>15. Tudni kell önfegyelemmel viselni a terhelések okozta fájdalomérzetet, fáradságot, kellemetlenséget.</p>
                  <p>16. Egy edzőtermet - az oda belépők alázatos magatartása, - az ott végzett kemény munka, - a Taekwon-do szelleme teszi Dojanggá!</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-neon-orange font-bold text-lg mb-4">Meghajlások</h3>
                <p className="text-white font-bold mb-3 text-sm">Mikor kell meghajolni?</p>
                <ul className="text-gray-300 space-y-1.5 ml-4 list-disc text-sm">
                  <li>terembe be- és kilépéskor</li>
                  <li>páros gyakorlatok előtt, után a párod felé</li>
                  <li>magasabb öves felé, megszólítás előtt, majd megköszönni a válaszát</li>
                  <li>töréstechnika előtt, után, bemutatón a közönség felé, vizsgán a vizsgáztató felé</li>
                  <li>edzőtermen kívül is, ha magasabb övessel vagy mesterrel találkozol, köszönés képpen</li>
                  <li>versenyen, mérkőzés előtt, után a bírók és az ellenfeled felé</li>
                  <li>övvizsga területére be- és kilépéskor</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-neon-orange font-bold text-lg mb-4">Tanítványok figyelmébe!</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                  <p>A tanítvány soha ne fáradjon bele a tanulásba. Bárhol és bármikor gyakoroljon ahol lehetősége nyílik rá: ovo a tudás alapja!</p>
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

          {/* THEORY APP */}
          {activeTab === 'theoryapp' && (
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-orange/10 blur-3xl rounded-full group-hover:bg-neon-orange/20 transition-colors duration-500" />
                <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
                  <div className="shrink-0">
                    <div className="w-24 h-24 bg-black border-2 border-neon-orange rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,165,0,0.2)]">
                      <svg className="w-10 h-10 text-neon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow text-center lg:text-left space-y-3">
                    <div className="inline-flex items-center gap-1.5 bg-black/50 border border-gray-800 rounded-full px-3 py-1 mb-2">
                      <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">Edzői Ajánlás</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Taekwon-Do <span className="text-neon-orange">Theory</span> Alkalmazás</h2>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">Készülj fel az övvizsgák elméleti kérdéseire interaktívan! Edzéseinken is előszeretettel használjuk és ajánljuk ezt az Android alkalmazást, amely rendszerezetten tartalmazza az ITF Taekwon-do teljes elméleti hátterét, koreai kifejezéseit és formagyakorlatait.</p>
                  </div>
                  <div className="shrink-0 w-full lg:w-auto">
                    <a href="https://play.google.com/store/apps/details?id=info.vladalas.taekwondotheory" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-neon-orange hover:bg-orange-600 text-black px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-neon-orange/20 w-full whitespace-nowrap">
                      Letöltés Androidra
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-white font-bold text-lg mb-6">Miben segít az applikáció az edzéseken kívül?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                    <h4 className="text-neon-orange font-bold text-base">📖 Övvizsga Anyagok</h4>
                    <p className="text-gray-400 leading-relaxed">Szintekre bontott kérdés-felelet adatbázis, ami segít lépésről lépésre memorizálni a vizsgakövetelményeket.</p>
                  </div>
                  <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                    <h4 className="text-neon-orange font-bold text-base">🥋 Tull-ok Jelentése</h4>
                    <p className="text-gray-400 leading-relaxed">A 24 formagyakorlat pontos történelmi háttere, mozdulatszámai és diagramjai azonnal kéznél vannak a zsebedben.</p>
                  </div>
                  <div className="bg-black/40 border border-gray-850 p-5 rounded-xl space-y-2">
                    <h4 className="text-neon-orange font-bold text-base">🗣️ Koreai Szakszavak</h4>
                    <p className="text-gray-400 leading-relaxed">A teremben használt vezényszavak, rúgások, ütések és állások koreai elnevezéseinek pontos gyűjteménye.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* 3. MENÜPONTOK (MOBILON ALUL JELENIK MEG EGY KÉNYELMES RÁCSBAN, PC-N OLDALSÁV) */}
        <aside className="w-full lg:w-1/4 order-2 lg:order-2">
          <div className="sticky top-28 bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2">
            <h3 className="text-white font-bold px-1 mb-3 text-lg hidden lg:block">Aloldalak</h3>
            <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    // Amikor rákattint, felugrik a leírás tetejére mobilon
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 text-center lg:text-left truncate ${
                    activeTab === tab.id
                      ? 'bg-neon-orange text-black shadow-lg shadow-neon-orange/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800 bg-black/40 lg:bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
