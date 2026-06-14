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
  { num: 1, name: 'Chon-Ji', movements: 19, type: 'official', meaning: 'Szó szerint „Menny és Föld”-et jelent. A Távol-Keleten a világ teremtésének vagy az emberi történelem kezdetének a szimbóluma, ezért ez a kezdő formagyakorlat. Két részből áll: az egyik a Mennyországot, a másik a Földet jelképezi.' },
  { num: 2, name: 'Dan-Gun', movements: 21, type: 'official', meaning: 'A szent Dan-Gun-ról kapta a nevét, aki a legenda szerint i. e. 2333-ban megalapította Koreát (Gojoseon-t).' },
  { num: 3, name: 'Do-San', movements: 24, type: 'official', meaning: 'Ahn Chang-ho (1878–1938) függetlenségi harcos és pedagógus írói álneve. A 24 mozdulat az egész életét jelképezi, amit Korea oktatásának és függetlenségének szentelt.' },
  { num: 4, name: 'Won-Hyo', movements: 28, type: 'official', meaning: 'A neves buddhista szerzetesről kapta a nevét, aki i. sz. 686-ban bevezette a buddhizmust a Silla dinasztiába.' },
  { num: 5, name: 'Yul-Gok', movements: 38, type: 'official', meaning: 'A nagy koreai filozófus és tudós, Yi I (1536–1584) álneve, akit a „Korea Konfuciusza”-ként is emlegetnek. A 38 mozdulat a 38. szélességi fokra utal, ami a szülőhelye, a diagram pedig a „tudóst” jelképezi.' },
  { num: 6, name: 'Joong-Gun', movements: 32, type: 'official', meaning: 'Ahn Joong-Gun függetlenségi harcosról kapta a nevét, aki meggyilkolta Hirobumi Ito-t, az első japán főkormányzót Koreában. A 32 mozdulat az életkorát jelzi, amikor 1910-ben kivégezték Lui-Shung börtönében.' },
  { num: 7, name: 'Toi-Gye', movements: 37, type: 'official', meaning: 'A neves tudós, Yi Hwang (16. század) írói álneve, aki az újkori konfucianizmus szakértője volt. A 37 mozdulat a 37. szélességi fokra utal, ahol született, a diagram pedig a „tudóst” jelenti.' },
  { num: 8, name: 'Hwa-Rang', movements: 29, type: 'official', meaning: 'A Hwarang katonai ifjúsági csoportról kapta a nevét, amely a 7. század elején alakult a Silla dinasztiában. A 29 mozdulat a 29. gyalogos hadosztályra utal, ahol a Taekwon-do kifejlődött.' },
  { num: 9, name: 'Choong-Moo', movements: 30, type: 'official', meaning: 'A nagy Yi Sun-Sin admirális posztumusz neve, aki i. sz. 1592-ben feltalálta az első páncélozott hadihajót (Teknőshajó). A gyakorlat bal kezes támadással ér véget, szimbolizálva sajnálatos, korai halálát.' },
  { num: 10, name: 'Kwang-Gae', movements: 39, type: 'official', meaning: 'Kwang-Gae-Toh-Wang-ról, a Koguryo dinasztia híres királyáról kapta a nevét, aki visszaszerezte az összes elveszített területet, beleértve Mandzsúria nagy részét is. A 39 mozdulat az uralkodásának első két számjegyére utal (i. sz. 391).' },
  { num: 11, name: 'Po-Eun', movements: 36, type: 'official', meaning: 'Chong Mong-Chu (14. század) költő és tudós álneve, akinek „Nem adom fel a hűségem” című verse minden koreai számára ismert. A diagram egy egyenes vonal, amely a király és a haza iránti rendíthetetlen hűségét szimbolizálja.' },
  { num: 12, name: 'Ge-Baek', movements: 44, type: 'official', meaning: 'Ge-Baek nagy generálisról, Baekje híres hadvezéréről kapta a nevét (i. sz. 660). A diagram egy egyenes vonal, ami a szigorú katonai fegyelmet jelképezi.' },
  { num: 13, name: 'Eui-Am', movements: 45, type: 'official', meaning: 'Son Byong Hi írói álneve, aki az 1919. március 1-jei koreai függetlenségi mozgalom vezére volt. A 45 mozdulat az életkorára utal, amikor megváltoztatta a Donghak vallás nevét Chondoizmusra.' },
  { num: 14, name: 'Choong-Jang', movements: 52, type: 'official', meaning: 'Kim Duk-Ryang tábornok álneve, aki a 14. században harcolt a japán invázió ellen. A gyakorlat bal kezes támadással zárul, utalva arra, hogy tragikus módon a börtönben halt meg 25 évesen.' },
  { num: 15, name: 'Juche', movements: 45, type: 'official', meaning: 'A Juche filozófiáról (önerőre támaszkodás) kapta a nevét, amely azt hirdeti, hogy az ember ura a saját sorsának. A diagram a Baekdu-hegyet szimbolizálja (Megjegyzés: Bizonyos kánonokban a Ko-Dang váltótullja).' },
  { num: 16, name: 'Sam-Il', movements: 33, type: 'official', meaning: 'Az 1919. március 1-jén kezdődött történelmi koreai függetlenségi mozgalomra utal. A 33 mozdulat a mozgalmat elindító 33 koreai hazafit jelképezi.' },
  { num: 17, name: 'Yoo-Sin', movements: 68, type: 'official', meaning: 'Kim Yoo-Sin tábornokról, a Silla dinasztia főparancsnokáról kapták a nevét. A 68 mozdulat az i. sz. 668-as évre utal, amikor egyesítette a három királyságot.' },
  { num: 18, name: 'Choi-Yong', movements: 46, type: 'official', meaning: 'Choi Yong tábornokról, a 14. századi Koryo dinasztia fővezéréről kapta a nevét, aki hűségéről és hazaszeretetéről volt híres.' },
  { num: 19, name: 'Yon-Gae', movements: 49, type: 'official', meaning: 'Yon Gae Somoon-ról, a Koguryo dinasztia híres tábornokáról kapta a nevét, aki megvédte az országot a Tang dinasztia inváziójától. A 49 mozdulat az i. sz. 649-es év utolsó két számjegyére utal.' },
  { num: 20, name: 'Ul-Ji', movements: 42, type: 'official', meaning: 'Ul-Ji Moon Dok tábornokról kapta a nevét, akinek i. sz. 612-ben sikerült megvédenie Koreát a közel egymilliós Sui kínai inváziós sereggel szemben a Salsu folyónál.' },
  { num: 21, name: 'Moon-Moo', movements: 61, type: 'official', meaning: 'Munmu király tiszteletére, aki i. sz. 661-ben lépett a trónra és véglegesen egyesítette a királyságokat. Testét a tengerben temették el, hogy halála után is sárkányként védje Koreát.' },
  { num: 22, name: 'So-San', movements: 72, type: 'official', meaning: 'Choi Hyun Ung buddhista szerzetes (1520–1604) álneve. A 72 mozdulat az életkorára utal, amikor szerzetes társaival segített visszaverni a japán kalózok és katonák támadását.' },
  { num: 23, name: 'Se-Jong', movements: 24, type: 'official', meaning: 'A valaha élt legnagyobb koreai királyról, Se-Jong-ról kapta a nevét, aki 1443-ban feltalálta a koreai ábécét (Hangul). A 24 mozdulat a Hangul ábécé 24 betűjére utal.' },
  { num: 24, name: 'Tong-Il', movements: 56, type: 'official', meaning: 'Korea újraegyesítésének (Tong-Il) szent szimbóluma, amely 1945 óta megosztott. A diagram egy egyenes vonal, ami a homogén koreai nép egységét jelképezi.' }
];

// --- SZÓTÁR ÉS SZÁMOLÁS ADATBÁZIS ---
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
      { korean: 'Ap', hungarian: 'Előre / Erste / Elülső', english: 'Front' },
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
      
      {/* 1. FELSŐ FEJLÉC ÉS FŐCÍM */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      {/* TARTALOM ÉS NAVIGÁCIÓ KÖZÖS TÖRZSE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 flex-grow w-full">
        
        {/* 2. LAPFÜLEK TARTALMA */}
        <main className="w-full lg:w-3/4 order-1 lg:order-1">

          {/* OVERVIEW (MÓDOSÍTOTT RÉSZ KÉPJAVÍTÁSSAL ÉS AUTOMATIKUS MOBIL TELJES SZÉLESSÉGŰ VIDEÓVAL) */}
          {activeTab === 'overview' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <blockquote className="text-center text-xl sm:text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
                „A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.”
              </blockquote>
              <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.</p>
                <p>A taekwon-do kifejezés három szóképből áll: a „tae” rúgást, a lábtechnikák összességét jelenti, a „kwon” a kéztechnikák összefoglaló neve, a „do” jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete. Ez az elnevezés több szempontból भी jó választásnak bizonyult. Egyrészt hasonlít az ősi taek kyon elnevezéshez, így bizonyos szempontból folytonosságot jelez a régi és az új stílus között, másrészt pedig híven fejezi ki a sportág jellemzőit.</p>
                 
                 {/* JAVÍTOTT KÉPABLAK: object-contain-nel beletéve a teljes kép */}
                 <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/itfpalma.webp" alt="ITF Taekwon-do pálma" className="w-full h-auto max-h-[400px] object-contain rounded-lg mx-auto" />
                </div>
                
                <p>Más megközelítésben a Taekwon-do tudomány, vagyis a test tudományos alkalmazása a harcművészetben. Az ember, aki az anatómia, biomechanika és fizika törvényszerűségeinek ismeretében, testének intenzív edzése során képes elérni a benne rejlő lehetőségek maximumát! De ne feledjük, pusztán a technikák gyakorlása (legyen az bármilyen magasszintű sporttevékenység) még senkit sem tesz harcművésszé. Ez csak a megfelelő lelki töltéssel és szellemi felkészültséggel párosulva, vele szoros egységet alkotva éri el végső célját.</p>
                 
                 {/* JAVÍTOTT KÉPABLAK: object-contain-nel beletéve a teljes kép */}
                 <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/itfcimer.webp" alt="ITF Taekwon-do címer" className="w-full h-auto max-h-[400px] object-contain rounded-lg mx-auto" />
                </div>
                
                <p>A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.</p>
                
                {/* VIDEÓS KÁRTYA A MENÜPONT LEGALJÁN: Asztalin max-w-2xl, mobilon automatikusan kimegy a szélekig, nincs lekerekítés és szegély */}
                <div className="mt-10 sm:px-0">
                  <div className="bg-gray-950 border-0 sm:border border-gray-800 rounded-none sm:rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-xl">
                    <div className="relative pt-[56.25%] w-full h-0">
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/5D2rC76OQ60" 
                        title="Taekwon-do bemutató videó" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="p-5">
                      <h4 className="text-white font-bold text-lg mb-1">Hivatalos ITF Taekwon-do kedvcsináló</h4>
                      <p className="text-gray-400 text-sm">Tekintsd meg ezt a rövid összefoglalót a Taekwon-do dinamikájáról, technikáiról és a harcművészet szépségéről.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do Története</h2>
              <div className="space-y-5 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>A Taekwon-do szó új keletű, csak az 1950-es évektől kezdte használni Choi Hong Hi, a Taekwon-do megalapítója. A Taekwon-do viszonylag új modern harcművészet, a mai technikáinak a túlnyomó többségét a XX. század ’50-es ’60-as éveiben alakította ki az alapító koreai mesterek segítségével. Mivel egy dinamikus, fejlődőképes harcművészeti ágazatról van szó, a mai napig is folyamatosan változik, fejlődik.</p>
                <p>A Taekwon-do eredete az időszámításunk előtti I. századi társadalmakig vezethető vissza. Ebben az időben a koreai félszigeten három királyság alakult ki: Silla (i. e. 57.), Koguryo (i. e. 37.) és Baekje (i. e. 18.). Ezek a királyságok évszázadokon keresztül harcban álltak egymással a félsziget feletti uralomért.</p>
                
                {/* 1. KÉP-HELYŐRZŐ BLOKK A TÖRTÉNELEMBEN */}
                <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/history4.webp" alt="Ókori koreai falfestmények és királyságok" className="w-full h-auto max-h-[400px] object-cover rounded-lg mx-auto" />
                </div>

                <p>Az első máig fennmaradt harcművészeti vonatkozású emlékek ebből az időből származnak: a Koguryo dinasztiabeli Muyong-chong and Kakchu-chong nevű királyi síremlékek falain, illetve mennyezetén lévő falfestmények, melyek egymással küzdő férfiakat ábrázolnak.</p>
                <p>Akkoriban a Koguryo tudott a legdinamikusabban terjeszkedni, ahol már ekkor magas színvonalon oktatták a harcművészeteket. Silla 24. királya, Chin Heung, Koguryo királyával szövetkezve létrehozta az első elit katonai alakulatot, a „Hwarangdo”-t. A Hwarangdo kiképzésben nagy hangsúlyt fektettek mind a fegyveres, mind a fegyver nélküli közelharc képzésére. Ha hinni lehet a korabeli történeteknek, már ekkor magas színvonalú lábtechnika jellemezte a stílust. A Hwarangdo képzésben a testi nevelés mellett a szellemi képzéssel भी foglalkoztak. Ezt egy buddhista tanító, Won Kwang, konfuciusi tanai alapján tették.</p>
                <p>A konfucianizmus mind a mai napig jellemzi a koreai harcművészetek nagy részét. Szemben például a japán harcművészetekkel, ahol többnyire a zen buddhizmus adja a szellemi hátteret.</p>
                <p>Végül Munmu királynak (661–680), Silla uralkodójának sikerült egyesítenie a koreai félszigetet uralma alatt 668-ban, bár Kínával még 735-ig voltak háborúk a határkérdésben.</p>
                <p>A Silla által létrehozott egységes koreai állam végül belülről hullott darabjaira, és az országot egy Van Gon (877–943) nevezetű hadvezérnek sikerült újraegyesítenie 935-ben. Az egyesített állam és a dinasztia Koryo néven 1392-ig állt fenn. Innen ered Korea elnevezése is az európai nyelvekben.</p>
                
                {/* 2. KÉP-HELYŐRZŐ BLOKK A TÖRTÉNELEMBEN */}
                <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/history2.webp" alt="A Koryo és a Csoszon korszak harcművészetei" className="w-full h-auto max-h-[350px] object-cover rounded-lg mx-auto" />
                </div>

                <p>1392-ben a Koryo dinasztiát felváltotta a Li dinasztia, melynek első királya, Li Szong Ge megfosztotta trónjától a Koryo dinasztia utolsó királyát is, és Thedzso néven ült trónra. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták Ó-Csoszonnak is megnevezni. Ez a korszak lényegében 1910-ig, a japán megszállás kezdetéig tartott.</p>
                <p>Ebben az időben a harcművészeteket elsősorban a hadseregben oktatták, illetve megvoltak a köznépnek is a maga harcművészeti játékai, például a Soo Bak és a Taek Kyon. Máig rendszeresen rendeznek Soo Bak és Taek Kyon versenyeket a Dan-O ünnepek alkalmával (május 5-én és augusztus 15-én). Valószínűleg ebben az időben érték kínai hatások is a koreai harcművészeteket, melyek jellegzetességei néhány mai koreai harcművészeti ágban is megtalálhatóak.</p>
               
                {/* 3. KÉP-HELYŐRZŐ BLOKK A TÖRTÉNELEMBEN */}
                <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/history3.webp" alt="A huszadik század és a modern korszak kezdete" className="w-full h-auto max-h-[350px] object-cover rounded-lg mx-auto" />
                </div>

                <p>A 19. század végén és a 20. század elején Koreáért és a környező területekért három nagyhatalom versenyzett: Kína, Oroszország és Japán. Végül Japán szerezte meg Koreát, és szinte gyarmati sorba taszította. A koreai népet szinte tökéletesen kizsákmányolták és megpróbálták eljapánosítani. Ekkor a koreai középosztály, ha iskoláztatni akarta a gyerekeit, csak Japánba tudta elküldeni őket tanulni. Ezek a Japánban tanuló koreai fiatalok találkoztak a japán harcművészetekkel, és az akkoriban Japánban elterjedő okinawai eredetű karatéval is.</p>
                <p>Ilyen koreai fiatalember volt Choi Hong Hi, aki a Taekwon-do alapítója és később az ITF elnöke lett, illetve Choi Yong Sul is, aki Takeda Sogakutól tanult Daito Ryu Aiki Jitsut (az Aikido elődje), majd hazatérve, kombinálva a koreai stílusokkal Yu Kwon Sul néven oktatta, amelyből később a Hapkido lett. Illetve Hyung Yee Choi is, aki Choi Hong Hi rokona volt, és Masutatsu Oyama néven Japánban a Kyokushin Karate megalapítója lett.</p>
                <p>1945-ben a japán hadsereg megadta magát. Koreába a 38. szélességi körtől délre az amerikai, attól északra pedig a szovjet hadsereg vonult be. Az amerikai zónában a Koreai Köztársaság (Dél-Korea), a szovjet zónában pedig a Koreai Népi Demokratikus Köztársaság (Észak-Korea) jött létre.</p>
                <p>1950. június 25-én kirobbant a háború a két koreai állam között. Az északiak heteken belül elfoglalták Dél-Korea 90%-át. A déliek oldalán előbb az amerikaiak és az ENSZ csapatok kapcsolódtak be a háborúba, majd az északiak oldalán egymillió kínai „önkéntes”. A háború 1953. július 27-én Panmindzsonban fegyverszünettel ért véget. A két Korea területi és politikai megosztottsága máig tart.</p>
                <p>A hosszú japán megszállás után Dél-Koreában a különböző harcművészeti iskolák (Kwan-ok) egymás után nyitották meg kapuikat. Ezekben az iskolákban a legtöbb esetben egymás mellett többféle harcművészeti stílust oktattak, illetve ekkor még nem volt éles határvonal a különböző stílusok között. Később ezeket a harcművészeti stílusokat igyekeztek nemzeti szövetségekben tömöríteni. <strong className="text-white">1955. április 11-én fogadták el hivatalosan a Taekwon-do kifejezést Koreában.</strong></p>
              </div>
            </div>
          )}

          {/* TECHNIQUES */}
          {activeTab === 'techniques' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do mozgásanyagai</h2>
              <div className="space-y-6 text-sm sm:text-base">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">1. Bázistechnika</h3>
                  <p className="text-gray-300">A tradicionális harcművészetek alfája és omegája – így a Taekwon-do tanulásának is soha el nem hagyható alapja! Időről időre, tudásszinttől függetlenül, az alapvető állásokat, kéz- és lábtechnikákat mindenkinek újra és újra gyakorolnia kell! Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik. Az intenzív gyakorlás és nagy ismétlésszám nyomán kialakul az erő fókuszálásának képessége, javul a koordináció, az egyensúly és a térérzék, fejlődik az általános mozgáskultúra. Folyamatosan tökéletesednek: gyorsabbá, pontosabbá és hatásosabbá válnak az egyre magasabb szintű támadó és védekező technikák.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">2. Formagyakorlat (Versenyszám)</h3>
                  <p className="text-gray-300 mb-3">Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok különböző irányokból támadó, képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. A szimmetriára épülő mozgássorozatokban, pontosan kidolgozott koreográfia szerint ütések, hárítások, rúgások, ugró ütések és ugró rúgások logikus kombinációi váltják egymást. A Taekwon-doban összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet (az élet állandó körforgását) szimbolizálják.</p>
                  <p className="text-gray-300">Összesen 24 Tull (formagyakorlat) van az ITF Taekwon-dóban. Ezeket Choi Hong Hi nagymester tervezte és alkotta meg. A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">3. Formai küzdelem</h3>
                  <p className="text-gray-300">(Páros bázis, vagy küzdelmi helyzetgyakorlat). A bázis-, illetve formagyakorlatokból átemelt támadás- és védésminták, szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével. Az idealizált gyakorlatokban előre elképzelt és megtervezett harchelyzeteket imitálva: egy-kettő-három, vagy akár több lépésben folyik az egyre nehezebb kombinációk fokozatos elsajátítása. A páros formai küzdelemben való jártasság lényegében a felkészítés utolsó állomása, mely után következhet a valódi szabad küzdelem.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">4. Szabad küzdelem (Versenyszám)</h3>
                  <p className="text-gray-300">A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti – kötetlen, „éles” harchelyzetben. A Taekwon-do gyakorlói a bázisok, formagyakorlatok és formai küzdelmek során beépült tudás birtokában próbálnak felülkerekedni most már kiszámíthatatlanul támadó ellenfelükon. A siker vagy kudarc azonban nem kis mértékben lelki tényezők és pszichikai felkészültség függvénye! A technikák elsajátítása ugyanis a harcművész útnak csak egyik állomása. A Taekwon-do tanainak 5. pontjában foglalt u.n. „Rettenthetetlen küzdőszellem” nélkül nincs és nem is lehet igazi győzelem!</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">5. Önvédelem</h3>
                  <p className="text-gray-300 mb-3">A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre és harcművész előképzettségre, amivel a kezdők még nem rendelkeznek. Célja a hatásos közelharc- és „túlélő” technikák elsajátítása, melyek képesek elhárítani a valós veszélyhelyzeteket. Lásd pl. fojtásból, fogásból, leszorításból szabadulás, támadás visszaverése szűk helyen, zárt térben, védekezés hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.</p>
                  <p className="text-white font-bold mb-1">Ősi, íratlan szabályok:</p>
                  <ul className="text-gray-300 space-y-1 ml-4 list-disc">
                    <li>inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                    <li>inkább lefogni, visszatartani, mint megsebesíteni</li>
                    <li>inkább megsebesíteni, mint megnyomorítani</li>
                    <li>inkább megnyomorítani, mint megölni</li>
                    <li>inkább megölni, mint hogy téged öljön meg</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">6. Töréstechnika (Versenyszám)</h3>
                  <p className="text-gray-300">A Taekwon-dónak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni. Napjainkra a küzdelmek már védőfelszerelésben, szigorú szabályok között folynak, ezért a Taekwon-dósok különböző szakítószilárdságú tárgyak törésekor mérhetik le egy adott technika tényleges pusztító erejét... A törésekhez használt végtagfelületek edzését, keményítését már fehér övtől elkezdik, és azután soha nem is lehet abbahagyni! A magas szintre edzett testrészek a tudományos elvekre épülő technikával ötvözve lenyűgöző teljesítményekre lesznek képesek. Így fejlődik pl. kezünk idővel életveszélyes „fegyverré”, mely nélkülözhetetlen a törésbemutatóknál, de egyúttal hatásos segítőnkké válik a valódi önvédelemben és közelharcban is.</p>
                </div>
              </div>
            </div>
          )}

          {/* BELTS */}
          {activeTab === 'belts' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
              <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                  <img src="/belt-rank.webp" alt="öv fokozatok" className="w-full h-auto max-h-[400px] object-cover rounded-lg mx-auto" />
                </div>
              <div className="space-y-4 text-sm sm:text-base">
                <div><h3 className="text-white font-bold mb-1">Fehér öv:</h3><p className="text-gray-300">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő Taekwon-dós még nem rendelkezik komoly Taekwon-do tudással.</p></div>
                <div><h3 className="text-white font-bold mb-1">Sárga öv:</h3><p className="text-gray-300">A földet szimbolizálja, melyben az elültetett növény kicsírázik és gyökeret ereszt. Így rögződnek a tudás alapjai is a Taekwon-dósban.</p></div>
                <div><h3 className="text-white font-bold mb-1">Zöld öv:</h3><p className="text-gray-300">A növényt, annak növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak; mint egy bokor, ami terebélyesedik, a tudás is egyre szerteágazóbb lesz.</p></div>
                <div><h3 className="text-white font-bold mb-1">Kék öv:</h3><p className="text-gray-300">Az eget szimbolizálja, amely felé now már magas faként tör a növény. Utal a mind magasabb Taekwon-do tudásra.</p></div>
                <div><h3 className="text-white font-bold mb-1">Piros öv:</h3><p className="text-gray-300">A veszély szimbóluma, mint a tűz és a vár színe. Emlékezteti a tanítványt, hogy now már óvatosan kell bánnia megszerzett Taekwon-do tudásával, de figyelmezteti az ellenfelet is, hogy maradjon távol!</p></div>
                <div><h3 className="text-white font-bold mb-1">Fekete öv:</h3><p className="text-gray-300">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Ellentéte a fehérnek. Az elmélyült és mesterfokú Taekwon-do tudást jelzi.</p></div>
              </div>
            </div>
          )}

          {/* FORMS */}
          {activeTab === 'forms' && (
            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-6">
                <h2 className="text-2xl font-black text-white mb-4">Formagyakorlatok (Tull)</h2>
                <p className="text-gray-300 text-sm mb-2">A 24 tulajdonképpeni tull-t két előkészítő formagyakorlat előzi meg, melyek célja a tanulók alapvető koordináltságának kialakítása és az egyszerűbb technikák kétoldalas ismételtetésén keresztül felkészítenek a nehezebb feladatokra. Ezek a négyirányú ütés (Saju Jirugi) és a négyirányú hárítás (Saju Makgi).</p>
                <p className="text-gray-300 text-sm">A kártyák képeire kattintva automatikusan elindirul egy **YouTube keresés** az adott formagyakorlat pontos nevére és videós anyagaira!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formsData.map((form) => {
                  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`ITF Taekwondo ${form.name} tull`)}`;
                  const imageSrc = form.type === 'preparatory' 
                    ? `https://tigrisek.hu/images/formagyak/p1.jpg` 
                    : `https://tigrisek.hu/images/formagyak/p${form.num}.jpg`;

                  return (
                    <div key={form.name} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/40 transition-all duration-300 flex flex-col sm:flex-row">
                      <a 
                        href={youtubeSearchUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="sm:w-1/3 relative overflow-hidden block bg-black min-h-[140px] group cursor-pointer"
                        title={`Kattints ide a ${form.name} YouTube videóinak megtekintéséhez!`}
                      >
                        <img src={imageSrc} alt={form.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 absolute inset-0" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md opacity-80 group-hover:opacity-100 transition-opacity">YouTube 🎬</span>
                        </div>
                      </a>
                      <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-black text-white">{form.type === 'preparatory' ? 'Előkészítő' : `${form.num}.`} {form.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded-md font-bold ${form.type === 'preparatory' ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-neon-orange'}`}>{form.movements} mozdulat</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">{form.meaning}</p>
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
                <h2 className="text-2xl font-black text-white mb-4">Choi Hong Hi (1918–2002)</h2>
                <p className="text-neon-orange text-sm font-bold mb-6">A Taekwon-do Alapítója és Örökös Elnöke</p>
                <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>Choi Hong Hi nagymester 1918. november 9-én született a mai Észak-Korea területén található Hwade-ben. Fiatal korában törékeny és beteges alkatú volt, ami szüleit állandó aggodalommal töltötte el. Ennek ellenére rendkívül erős akaratú és igazságkereső szellemiség jellemezte.</p>
                  <p>1930-ban, miután kizárták az iskolából a japán megszálló hatóságok elleni tiltakozás miatt, apja elküldte őt, hogy tanuljon kalligráfiát Han Il Dong-tól, aki egyben a hagyományos koreai harcművészet, a Taek Kyon titkos mestere is volt. Han mester, látva a fiú gyenge fizikumát, elkezdte tanítani őt a Taek Kyon kemény lábtechnikáira, hogy megerősítse testét.</p>
                  <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                    <img src="/csoj1.webp" alt="Choi Hong Hi fiatalon" className="w-full h-auto max-h-[450px] object-cover rounded-lg mx-auto" />
                  </div>
                  <p>1937-ben Choi Japánba utazott, hogy továbbtanuljon. Kiotóban, majd Tokióban jogi tanulmányai mellett intenzíven gyakorolta a Shotokan Karatét. Elhivatottságának köszönhetően megszerezte a fekete öv második fokozatát (2. Dan), és elkezdte kombinálni a karate egyenes vonalú, erőteljes kéztechnikáit a Han mestertől tanult íves, rugalmas koreai lábtechnikákkal.</p>
                  <p>A második világháború alatt kényszerrel besorozták a japán hadseregbe, és Phenjanba állomásoztatták. Részt vett a Koreai Diákkatonák Függetlenségi Mozgalmában, amiért letartóztatták, és halálra ítélték. A börtönben, hogy megőrizze fizikai és mentális épségét, cellájában egyedül gyakorolt és fejlesztette technikáit, sőt, rabtársait és az őröket is tanítani kezdte. Az 1945. augusztusi felszabadulás mentette meg az életét, alig néhány nappal a kivégzése előtt.</p>
                  <div className="my-6 rounded-xl overflow-hidden border border-gray-800 bg-black/40 p-2">
                    <img src="/csoj2.webp" alt="Choi Hong Hi oktatás közben" className="w-full h-auto max-h-[450px] object-cover rounded-lg mx-auto" />
                  </div>
                  <p>A háború után az újonnan alakuló Koreai Hadsereg alapító tisztje lett. Itt kapott lehetőséget arra, hogy harcművészetét rendszerszinten oktassa a katonáknak. Folyamatos kutatómunkával, a biomechanika és a fizika törvényeit alapul véve átalakította a technikákat, hogy azok a lehető legnagyobb pusztító erőt fejtsék ki.</p>
                  <p>Törekvései 1955. április 11-én értek célba, amikor a vezető mesterekből, történészekből és politikusokból álló bizottság hivatalosan is elfogadta az általa javasolt **Taekwon-Do** nevet. 1966. március 22-én megalapította az International Taekwon-Do Federation-t (ITF), amelynek haláláig elnöke maradt. Choi Hong Hi 2002. június 15-én hunyt el, szellemi örökségét ma milliók gyakorolják világszerte.</p>
                </div>
              </div>
            </div>
          )}

          {/* OATH */}
          {activeTab === 'oath' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">Taekwon-do Eskü és Alapelvek</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-neon-orange font-bold text-lg mb-4">A Taekwon-do Eskü</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-300 text-sm sm:text-base">
                    <li>I fogadom, hogy megtartom a Taekwon-do szabályait.</li>
                    <li>Fogadom, hogy tisztelem a mesteremet és a felsőbb öveseket.</li>
                    <li>Fogadom, hogy a Taekwon-dót sohasem használom rossz célra.</li>
                    <li>Fogadom, hogy a szabadság és az igazság bajnoka leszek.</li>
                    <li>Fogadom, hogy egy békésebb világot igyekszem felépíteni.</li>
                  </ol>
                </div>
                <hr className="border-gray-800" />
                <div>
                  <h3 className="text-neon-orange font-bold text-lg mb-4">Az 5 Alapelv (Tenets)</h3>
                  <div className="space-y-4 text-sm sm:text-base">
                    <p><strong className="text-white">1. Udvariasság (Ye Ui / Courtesy):</strong> Alapvető tiszteletadás mindenkivel szemben, a rossz szokások elhagyása és a kölcsönös megbecsülés.</p>
                    <p><strong className="text-white">2. Becsületesség (Yom Chi / Integrity):</strong> Képesség a jó és a rossz megkülönböztetésére. Ha valaki hibázik, legyen lelkiereje beismerni azt.</p>
                    <p><strong className="text-white">3. Kitartás (In Nae / Perseverance):</strong> Rendíthetetlen akarat a célok elérésében, a nehézségek leküzdése újra és újra.</p>
                    <p><strong className="text-white">4. Önuralom (Guk Gi / Self-Control):</strong> Nagyon fontos mind a termen belül, mind azon kívül. A düh, az indulatok és a fizikai erő kontrollálása.</p>
                    <p><strong className="text-white">5. Rettenthetetlen küzdőszellem (Baekjul Boolgool / Indomitable Spirit):</strong> Bátorság és hűség az elvekhez. Ha az igazságért kell kiállni, egy Taekwon-dós sosem hátrál meg, legyen az ellenfele bármilyen félelmetes.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DICTIONARY */}
          {activeTab === 'dictionary' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-4">Koreai Terminológia & Szótár</h2>
              <p className="text-gray-400 text-sm mb-6">Használd az alábbi betűválasztót a kifejezések szűréséhez. A koreai kifejezések alatt a magyar és az angol hivatalos ITF megfelelőket találod.</p>
              
              {/* Számolás blokk */}
              <div className="mb-8 bg-black/30 border border-gray-800 rounded-xl p-4">
                <h3 className="text-white font-bold mb-3 text-sm tracking-wide uppercase text-neon-orange">Számolás koreaiul (1–10)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {countingData.map((item, idx) => (
                    <div key={item.korean} className="bg-gray-950 p-2.5 rounded-lg border border-gray-850 text-center">
                      <span className="text-xs text-gray-500 block font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                      <strong className="text-white font-bold block my-0.5 text-sm">{item.korean}</strong>
                      <span className="text-xs text-gray-400 block truncate">{item.hungarian}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-800 mb-6" />

              {/* Betűválasztó */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dictionaryData.map((group) => (
                  <button
                    key={group.letter}
                    onClick={() => setDictLetter(group.letter)}
                    className={`w-9 h-9 font-bold text-xs rounded-lg transition-all ${
                      dictLetter === group.letter 
                        ? 'bg-neon-orange text-black font-black shadow-md shadow-neon-orange/20' 
                        : 'bg-black text-gray-400 border border-gray-850 hover:text-white'
                    }`}
                  >
                    {group.letter}
                  </button>
                ))}
              </div>

              {/* Kifejezések listája */}
              <div className="space-y-3">
                {dictionaryData.find(g => g.letter === dictLetter)?.entries.map((entry) => (
                  <div key={entry.korean} className="bg-black/20 border border-gray-850 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-gray-800 transition-colors">
                    <div>
                      <strong className="text-white text-lg font-bold font-mono tracking-wide">{entry.korean}</strong>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      <span className="bg-gray-800/60 border border-gray-750 text-gray-200 px-2.5 py-1 rounded-md"><span className="text-gray-500 font-bold mr-1">HU:</span>{entry.hungarian}</span>
                      <span className="bg-gray-800/30 border border-gray-800/80 text-gray-400 px-2.5 py-1 rounded-md"><span className="text-gray-600 font-bold mr-1">EN:</span>{entry.english}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RULES */}
          {activeTab === 'rules' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-4">Hivatalos ITF Versenyszabályok</h2>
              <p className="text-gray-400 text-sm mb-6">Rövid összefoglaló a nemzetközi szövetség küzdelmi és technikai szabályrendszeréről.</p>
              <div className="space-y-6 text-sm sm:text-base text-gray-300">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Küzdelmi kategóriák (Matsogi)</h3>
                  <p className="leading-relaxed">A küzdelmek súlycsoportok és korosztályok szerint zajlanak. A felnőtt mérkőzések általában 2 darab 2 perces menetből állnak, 1 perc pihenőidővel. A versenyzők kötelező védőfelszerelést viselnek (fejvédő, fogvédő, nyitottkezes kesztyű, lábvédő, ágyékvédő, illetve lányoknál mellvédő).</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Találati felületek és pontozás</h3>
                  <p className="mb-2">Pontot kizárólag a megengedett támadófelületeken (arc elülső és oldalsó része, test elülső része a köldök felett) lehet elérni, ellenőrzött erővel (semi-contact). A tarkó, a hát és a derékvonal alatti részek támadása szigorúan tilos.</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                    <li><strong className="text-white">1 pont:</strong> Kéztechnika fejre vagy testre.</li>
                    <li><strong className="text-white">2 pont:</strong> Lábtechnika testre, vagy ugró kéztechnika fejre.</li>
                    <li><strong className="text-white">3 pont:</strong> Lábtechnika fejre, vagy ugró lábtechnika testre.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Büntetések (Chuyee és Gam-jum)</h3>
                  <p className="leading-relaxed">A szabálytalanságokért figyelmeztetés (Chuyee - 3 figyelmeztetés után 1 pont levonás jár) vagy közvetlen pontlevonás (Gam-jum) adható. Súlyos sportszerűtlenség vagy szándékos sérülés okozása azonnali kizárást von maga után.</p>
                </div>
              </div>
            </div>
          )}

          {/* THEORY APP */}
          {activeTab === 'theoryapp' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-4">Interaktív Elmélet App</h2>
              <p className="text-gray-400 text-sm mb-6">Készülj fel a következő övvizsgád elméleti kérdéseire ezzel az egyszerűsített kvíz modullal.</p>
              
              <div className="border border-gray-800 bg-black/40 rounded-2xl p-6 text-center max-w-xl mx-auto my-4">
                <span className="bg-neon-orange/10 text-neon-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fejlesztés alatt 🛠</span>
                <h3 className="text-white font-black text-xl mt-4 mb-2">Hamarosan elérhető!</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Ezen a fülön egy interaktív, vizsgaszintekre bontott tesztrendszert találsz majd, amely segít az övvizsga elméleti anyagának villámgyors elsajátításában.</p>
                <div className="space-y-2 text-left max-w-md mx-auto text-xs sm:text-sm bg-black/60 p-4 rounded-xl border border-gray-850">
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-neon-orange text-base pt-0.5">▪</span>
                    <p><strong className="text-white">Övvizsga szűrő:</strong> Csak a te szintednek megfelelő kérdések (pl. 10. Kup-tól 1. Kup-ig).</p>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-neon-orange text-base pt-0.5">▪</span>
                    <p><strong className="text-white">Azonnali kiértékelés:</strong> Részletes magyarázat a helyes válaszokról.</p>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-neon-orange text-base pt-0.5">▪</span>
                    <p><strong className="text-white">Terminológiai Szótár:</strong> Átfogó koreai szakszógyűjtemény a pontos teremvezényekhez.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* 3. MENÜPONTOK */}
        <aside className="w-full lg:w-1/4 order-2 lg:order-2">
          <div className="sticky top-28 bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2">
            <h3 className="text-white font-bold px-1 mb-3 text-lg hidden lg:block">Aloldalak</h3>
            <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
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
