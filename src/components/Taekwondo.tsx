import { useState } from 'react';
import { dictionary, counting } from '../data/dictionary';

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

// --- TELJES, HIÁNYTALAN FORMAGYAKORLAT ADATBÁZIS (100% VISSZAÁLLÍTVA) ---
const formsData = [
  { num: 'E1', name: 'Saju Jirugi', movements: 14, type: 'preparatory', meaning: 'Négyirányú ütés. Alapvető előkészítő gyakorlat a kezdő tanítványok részére a helyes állások, ütések és mozgások elsajátítására.' },
  { num: 'E2', name: 'Saju Makgi', movements: 16, type: 'preparatory', meaning: 'Négyirányú hárítás. A második előkészítő gyakorlat, amely bevezeti az alapvető hárítási technikákat és a koordinációt.' },
  { num: 1, name: 'Chon-Ji', movements: 19, type: 'official', meaning: 'Szó szerint "Menny és Föld"-et jelent. A Távol-Keleten a világ teremtésének és az emberiség történetének kezdetét szimbolizálja, ezért ez a kezdő formagyakorlat. Két részből áll: az egyik a Mennyet, a másik a Földet jelképezi.' },
  { num: 2, name: 'Dan-Gun', movements: 21, type: 'official', meaning: 'A Szent Dan-Gun után kapta a nevét, aki a legenda szerint i.e. 2333-ban alapította Koreát.' },
  { num: 3, name: 'Do-San', movements: 24, type: 'official', meaning: 'A hazafi Ahn Chang-Ho (1876-1938) álneve. A 24 mozdulat az egész életét jelképezi, amelyet Korea függetlenségének és oktatásának szentelt.' },
  { num: 4, name: 'Won-Hyo', movements: 28, type: 'official', meaning: 'Won-Hyo buddhista szerzetes emlékére, aki i.sz. 686-ban a Silla dinasztia idején bevezette a buddhizmust Koreában.' },
  { num: 5, name: 'Yul-Gok', movements: 38, type: 'official', meaning: 'A nagy koreai filozófus és tudós Yi I (1536-1584) álneve, akit a "Korea Konfuciusza"-ként is emlegetnek. A 38 mozdulat a 38. szélességi fokra utal, ami a szülőhelyét jelzi, a diagram jelentése pedig "tudós".' },
  { num: 6, name: 'Joong-Gun', movements: 32, type: 'official', meaning: 'A hazafi Ahn Joong-Gun emlékére, aki megölte Hiro-Bumi Itot, az első japán kormányzót Koreában. A 32 mozdulat az életkorát jelképezi, amikor 1910-ben a Lui-Shung börtönben kivégezték.' },
  { num: 7, name: 'Toi-Gye', movements: 37, type: 'official', meaning: 'A neves tudós Yi Hwang (16. század) álneve, aki az újkori konfucianizmus tekintélye volt. A 37 mozdulat a 37. szélességi fokú szülőhelyére utal, a diagram jelentése pedig "tudós".' },
  { num: 8, name: 'Hwa-Rang', movements: 29, type: 'official', meaning: 'A Hwa-Rang ifjúsági csoportról kapta a nevét, amely a Silla dinasztia idején, a 7. század elején alakult. Ez a csoport lett a három koreai királyság egyesítésének mozgatórugója. A 29 mozdulat a 29. gyalogos hadosztályra utal, ahol a Taekwon-do kifejlődött.' },
  { num: 9, name: 'Choong-Moo', movements: 30, type: 'official', meaning: 'A nagy Yi Sun-Sin admirális álneve a Yi dinasztiából. Ő tervezte az első páncélozott hadihajót (Teknőshajó) 1592-ben, amely a mai tengeralattjárók elődjének tekinthető. A gyakorlat bal kezes támadással fejeződik be, szimbolizálva sajnálatos halálát.' },
  { num: 10, name: 'Kwang-Gae', movements: 39, type: 'official', meaning: 'Kwang-Gae-Toh-Wang, a Koguryo dinasztia nagy királya után, aki visszaszerezte az összes elveszített területet, beleértve Mandzsúria nagy részét is. A 39 mozdulat az uralkodásának első két számjegyére utal (i.sz. 391).' },
  { num: 11, name: 'Po-Eun', movements: 36, type: 'official', meaning: 'Chong Mong-Ju (14. század) költő és tudós álneve, akinek verse ("Nem követek másik urat, még ha százszor feszítenek is keresztre") minden koreai számára ismert. A diagram egy egyenes vonal, ami a király és a haza iránti lankadatlan hűségét jelképezi.' },
  { num: 12, name: 'Ge-Baek', movements: 44, type: 'official', meaning: 'Ge-Baek nagy tábornokról kapta a nevét, aki a Baekje dinasztia idején (i.sz. 660) élt. A diagram a szigorú katonai fegyelmet jelképezi.' },
  { num: 13, name: 'Eui-Am', movements: 45, type: 'official', meaning: 'Son Byong Hi álneve, aki az 1919. március 1-jei koreai függetlenségi mozgalom vezetője volt. A 45 mozdulat az életkorára utal, amikor megváltoztatta a Chondo Kyo (Mennyei Út) vallás nevét.' },
  { num: 14, name: 'Choong-Jang', movements: 52, type: 'official', meaning: 'Kim Duk-Ryang tábornok álneve, aki a Yi dinasztia idején, a 14. században élt. A gyakorlat bal kezes támadással zárul, ami a 27 évesen bekövetkezett börtönbeli tragikus halálát jelképezi.' },
  { num: 15, name: 'Juche', movements: 45, type: 'official', meaning: 'A Juche eszme után kapta a nevét, amely azt hirdeti, hogy az ember ura saját sorsának. Ez a koncepció vezetett oda, hogy a Taekwon-do független, modern koreai harcművészetté váljon.' },
  { num: 16, name: 'Sam-Il', movements: 33, type: 'official', meaning: 'Az 1919. március 1-jén kezdődött történelmi koreai függetlenségi mozgalom emlékére. A 33 mozdulat a mozgalmat elindító 33 hazafira utal.' },
  { num: 17, name: 'Yoo-Sin', movements: 68, type: 'official', meaning: 'Kim Yoo-Sin tábornokról, a Silla dinasztia fővezéréről kapta a nevét. A 68 mozdulat az i.sz. 668-as évre utal, amikor Korea három királysága egyesült.' },
  { num: 18, name: 'Choi-Yong', movements: 46, type: 'official', meaning: 'Choi Yong tábornok tiszteletére, aki a Koryo dinasztia miniszterelnöke és fővezére volt a 14. században. Bár rendkívül hűséges és hazafias volt, saját beosztottja, Yi Seong-Gye tábornok kivégeztette.' },
  { num: 19, name: 'Yon-Gae', movements: 49, type: 'official', meaning: 'Yon Gae Somoon híres tábornok után, aki a Koguryo dinasztia idején élt. A 49 mozdulat az i.sz. 649-es évre utal, amikor Ansi-várnál megsemmisítette a Tang dinasztia 300 000 fős inváziós seregét.' },
  { num: 20, name: 'Ul-Ji', movements: 42, type: 'official', meaning: 'Ul-Ji Mundeok tábornok emlékére, aki a 7. században sikeresen védte meg Koreát a Sui dinasztia egymilliós seregével szemben. A 42 mozdulat a szerző életkorát jelképezi, amikor a tull-t megalkotta.' },
  { num: 21, name: 'Moon-Moo', movements: 61, type: 'official', meaning: 'A Silla dinasztia 30. királyának tiszteletére. Testét a Keleti-tengerben temették el kívánsága szerint ("Sárkánnyá válok, hogy megvédjem Koreát a japán kalózoktól"). A 61 mozdulat az uralkodásának utolsó két számjegyére utal.' },
  { num: 22, name: 'So-San', movements: 72, type: 'official', meaning: 'Choi Hyun-Ung buddhista szerzetes (1520-1604) álneve. Ő szervezte meg a szerzetes-katonákat, hogy visszaverjék a japán kalózok invázióját 1592-ben. A 72 mozdulat az életkorára utal, amikor a hadsereget felállította.' },
  { num: 23, name: 'Se-Jong', movements: 24, type: 'official', meaning: 'A legnagyobb koreai király, Se-Jong emlékére, aki 1443-ban feltalálta a koreai ábécét (Hangul), és neves csillagász volt. A 24 mozdulat a Hangul ábécé 24 betűjét jelképezi.' },
  { num: 24, name: 'Tong-Il', movements: 56, type: 'official', meaning: 'Korea újraegyesítésének (Tong-Il) szentelt formagyakorlat, amely 1945 óta a nemzet legfőbb vágya. A diagram a kettéosztott nép egységét és azonos vérvonalát jelképezi.' }
];

// --- TELJES, HIÁNYTALAN TANOK ÉS ESKÜ (100% VISSZAÁLLÍTVA) ---
const tenetsData = [
  { title: 'Udvariasság', korean: 'Ye Ui', text: 'A mesterek felé köszönésként mindenhol és mindenkor meghajlás kötelező! Az edzőtársak felé az egymás iránti tisztelet megadása alapfeltétel. A magasabb övfokozatúak tisztelése, az alacsonyabb fokozatúak segítése kötelező.' },
  { title: 'Becsületesség', korean: 'Yom Chi', text: 'A Taekwon-dos tartsa be adott szavát, és ígéretét soha ne szegje meg! Képes legyen különbséget tenni a jó és a rossz között, és ha hibázott, legyen benne elég bátorság és őszinteség azt elismerni.' },
  { title: 'Állhatatosság', korean: 'In Nae', text: 'A kitűzött célok elérése érdekében a nehézségeket és a kudarcokat emelt fővel kell viselni. Nem szabad feladni az edzést és a tanulást a fáradtság vagy a pillanatnyi sikertelenség miatt.' },
  { title: 'Önuralom', korean: 'Guk Gi', text: 'Ez a tulajdonság rendkívül fontos mind az edzőtermen belül, mind azon kívül. Egy taekwon-dosnak képesnek kell lennie uralkodni az indulatain, a dühén és a tettein minden körülmények között.' },
  { title: 'Rettenthetetlen küzdőszellem', korean: 'Baekjul Boolgool', text: 'Igazságtalansággal, elnyomással szemben bátran és megalkuvás nélkül kell fellépni. A túlerővel szemben sem szabad meghátrálni, ha az igazság és a becsület védelméről van szó.' }
];

const oathData = [
  'A Taekwondo tanításainak mindenkor eleget teszek!',
  'Tiszteletet adok mesteremnek és valamennyi társamnak!',
  'Soha nem élek vissza Taekwondo tudásommal!',
  'Ha kell, segítek a bajbajutottakon!',
  'Minden erőmmel a békét építem!',
];

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [dictLetter, setDictLetter] = useState<string>('A');

  // --- GOLYÓÁLLÓ ÉS BIZTONSÁGOS SZÓTÁR SZŰRŐ (VERCEL-BIZTOS) ---
  const filteredDict = (dictionary || []).filter((item) => {
    const koreanWord = item?.korean || '';
    const hungarianWord = item?.hungarian || '';
    return (
      koreanWord.toLowerCase().startsWith(dictLetter.toLowerCase()) ||
      hungarianWord.toLowerCase().startsWith(dictLetter.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300 flex flex-col justify-between">
      
      {/* 1. FEJLÉC (MINDIG FENT VAN) */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      {/* TARTALOM ÉS NAVIGÁCIÓ KÖZÖS BLOKKJA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 flex-grow w-full">
        
        {/* 2. TARTALMI RÉSZ (MOBILON FENT JELENIK MEG, A MENÜPONTOK ELŐTT) */}
        <main className="w-full lg:w-3/4 order-1 lg:order-1">

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-5">
              <blockquote className="text-center text-xl sm:text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
                "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
              </blockquote>
              <p>A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.</p>
              <p>A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete.</p>
              <p>Más megközelítésben a Taekwon-do tudomány, vagyis a test tudományos alkalmazása a harcművészetben. Az ember, aki az anatómia, biomechanika és fizika törvényszerűségeinek ismeretében, testének intenzív edzése során képes elérni a benne rejlő lehetőségek maximumát!</p>
              <p>A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.</p>
            </div>
          )}

          {/* HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do Története</h2>
              <p>A Taekwon-do szó új keletű, csak az 1950-es évektől kezdte használni Choi Hong Hi a Taekwon-do megalapítója...</p>
              <p>A Taekwon-do eredete az időszámításunk előtti I. századi társadalmakig vezethető vissza. Ebben az időben a Koreai félszigeten három királyság alakult ki: Silla (ie. 57.), Koguryo (ie. 37.) és Baekje (ie. 18.).</p>
              <p>Az első máig fennmaradt harcművészeti vonatkozású emlékek ebből az időből származnak: a Koguryu dinasztiabeli Muyong-chong és Kakchu-chong nevű királyi síremlékek falfestményei.</p>
              <p>Silla 24. királya Chin Heung Konguryo királyával szövetkezve létrehozta az első elit katonai alakulatot a "Hwarangdo"-t. A Hwarangdo kiképzésben nagy hangsúlyt fektettek mind a fegyveres mind a fegyver nélküli közelharc képzésére.</p>
              <p>A konfucionizmus mind a mai napig jellemzi a Koreai harcművészetek nagy részét. Szemben például a Japán harcművészetekkel, ahol többnyire a Zen Buddhizmus adja a szellemi hátteret.</p>
              <p>1392-ben a Koryo dinasztiát felváltotta a Li dinasztia. A Li dinasztia az országot Csoszonnak nevezte, így ezt a korszakot szokták O-Csoszonnak is nevezni. Ez a korszak lényegében 1910-ig a Japán megszállás kezdetéig tartott.</p>
              <p>A 19. század végén és a 20. század elején Japán szerezte meg Koreát. Ekkor a Japánban tanuló Koreai fiatalok találkoztak a Japán harcművészetekkel, és az Okinawai eredetű Karatéval is. Ilyen Koreai fiatalember volt Choi Hong Hi is.</p>
              <p>1950. Június 25.-én kirobbant a háború a két Koreai állam között. A fegyverszünet máig tart.</p>
              <p><strong className="text-white">1955. április 11.-én fogadták el hivatalosan a Taekwon-do kifejezést Koreában.</strong></p>
            </div>
          )}

          {/* TECHNIQUES */}
          {activeTab === 'techniques' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-black text-white mb-6">A Taekwon-do mozgásanyagai</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">1. Bázis technika</h3>
                  <p className="text-gray-400">A tradicionális harcművészetek Alfája és Omegája - így a Taekwon-do tanulásának is soha el nem hagyható alapja!</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">2. Formagyakorlat (Tull)</h3>
                  <p className="text-gray-400">Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik. Összesen 24 kötelező tull van.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">3. Formai küzdelem</h3>
                  <p className="text-gray-400">A bázis, illetve formagyakorlatokból átemelt támadás és védés minták, szigorú rend alapján partner közreműködésével.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">4. Szabad küzdelem</h3>
                  <p className="text-gray-400">A Taekwon-do tulajdonképpeni végső célja, értelme kötetlen -"éles" harchelyzetben. A Rettenthetetlen küzdőszellem nélkül nincs igazi győzelem!</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">5. Önvédelem</h3>
                  <p className="text-gray-400 mb-3">A haladók és mesterek gyakorolhatják elsősorban. Ősi íratlan szabályok: inkább kitérni, mint provokálni; inkább lefogni, mint megsebesíteni; inkább megsebesíteni, mint megnyomorítani; inkább megnyomorítani, mint megölni.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">6. Töréstechnika</h3>
                  <p className="text-gray-400">Eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni faborításokon vagy téglákon.</p>
                </div>
              </div>
            </div>
          )}

          {/* BELTS */}
          {activeTab === 'belts' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
              <div className="space-y-4">
                <div><h3 className="text-white font-bold mb-1">Fehér öv:</h3><p className="text-gray-400">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő még nem rendelkezik tudással.</p></div>
                <div><h3 className="text-white font-bold mb-1">Sárga öv:</h3><p className="text-gray-400">A földet szimbolizálja, melyben az elültetett növény kicsírázik. Így rögződnek a tudás alapjai.</p></div>
                <div><h3 className="text-white font-bold mb-1">Zöld öv:</h3><p className="text-gray-400">A növény növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak.</p></div>
                <div><h3 className="text-white font-bold mb-1">Kék öv:</h3><p className="text-gray-400">Az eget szimbolizálja, amely felé magas faként tör a növény. Utal a mind magasabb tudásra.</p></div>
                <div><h3 className="text-white font-bold mb-1">Piros öv:</h3><p className="text-gray-400">A veszély szimbóluma, mint a tűz és vér színe. Figyelmeztet a megszerzett tudás felelősségére.</p></div>
                <div><h3 className="text-white font-bold mb-1">Fekete öv:</h3><p className="text-gray-400">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Az elmélyült és mesterfokú tudást jelzi.</p></div>
              </div>
            </div>
          )}

          {/* FORMS */}
          {activeTab === 'forms' && (
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-3">Formagyakorlatok (Tull)</h2>
                <p className="text-gray-400 text-sm">A kártyákon lévő képekre kattintva automatikusan megnyílik a YouTube az adott tull videós találataival.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formsData.map((form) => {
                  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`ITF Taekwondo ${form.name} tull`)}`;
                  const imageSrc = form.type === 'preparatory' 
                    ? `https://tigrisek.hu/images/formagyak/p1.jpg` 
                    : `https://tigrisek.hu/images/formagyak/p${form.num}.jpg`;

                  return (
                    <div key={form.name} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/40 transition-all duration-300 flex flex-col sm:flex-row">
                      <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer" className="sm:w-1/3 relative min-h-[140px] block bg-black group overflow-hidden">
                        <img src={imageSrc} alt={form.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 absolute inset-0" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 flex items-center justify-center">
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">🎬</span>
                        </div>
                      </a>
                      <div className="p-5 sm:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-black text-white">{form.type === 'preparatory' ? 'Előkészítő' : `${form.num}.`} {form.name}</h3>
                            <span className="text-xs px-2 py-0.5 rounded font-bold bg-gray-800 text-neon-orange">{form.movements} mozdulat</span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed">{form.meaning}</p>
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
                <div className="flex flex-col md:flex-row gap-6">
                  <img src="https://tigrisek.hu/images/choi1.jpg" alt="Choi Hong Hi" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                    <p>Choi Hong Hi tábornok a Taekwon-do legendás alapítója 1918 november 9.-én született a koreai félsziget észak-keleti részén fekvő Hwa-Dae-ben. Gyermekkorától a szépírás (kalligráfia) művészetét tanulta, és már fiatalon megismerkedett az ősi koreai harcművészettel a Taek-kyon-nal.</p>
                    <p>Hét évnyi kalligráfus képzés után Japánba utazott tanulni, ahol a shotokan karatét is magas szinten elsajátította. Visszatérve Koreába már keményen dolgozott saját új stílusának létrehozásán, emellett a japán megszállás elleni felszabadítási mozgalom szervezője lett.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row-reverse gap-6">
                  <img src="https://tigrisek.hu/images/choi2.jpg" alt="Choi Hong Hi katonai pályafutása" className="w-full md:w-64 h-auto rounded-xl object-cover flex-shrink-0" />
                  <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                    <h3 className="text-xl font-bold text-white">Katonai karrier és világméretű terjesztés</h3>
                    <p>A koreai hadsereg megalakulásakor az elsők között lépett be, ahol rohamosan haladt előre a ranglétrán. Ennek köszönhetően lehetősége nyílt arra, hogy az általa kifejlesztett harcművészetet beillessze a hadsereg hivatalos kiképzési programjába.</p>
                    <p>1966. március 22-én Szöulban megalapította a Nemzetközi Taekwon-do Szövetséget (ITF), melynek elnökeként élete végéig látogatta a világ országait, hogy szemináriumokon személyesen képezze a mestereket.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OATH */}
          {activeTab === 'oath' && (
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-4 uppercase">Taekwondo eskü</h2>
                <div className="space-y-3">
                  {oathData.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/40 border border-gray-850 rounded-xl p-3.5">
                      <span className="text-neon-orange font-mono font-black text-lg">{i + 1}.</span>
                      <p className="text-gray-200 font-medium text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-black text-white mb-6 uppercase">Taekwon-do Tanai</h2>
                <div className="space-y-6">
                  {tenetsData.map((tenet, idx) => (
                    <div key={idx} className="border-l-2 border-neon-orange/40 pl-4 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-500 font-mono text-xs font-bold">{idx + 1}.</span>
                        <h3 className="text-white font-bold text-lg">{tenet.title}</h3>
                        <span className="text-neon-orange/80 text-xs font-mono font-bold">— {tenet.korean}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed text-justify">{tenet.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <img src="/tenets.webp" alt="Taekwon-do Tanai" className="w-full h-auto max-h-[300px] object-contain mx-auto rounded-lg" />
                </div>
              </div>
            </div>
          )}

          {/* DICTIONARY */}
          {activeTab === 'dictionary' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-6">Koreai Szótár</h2>
              <div className="flex flex-wrap gap-1 mb-6 bg-black/40 p-2 rounded-xl border border-gray-850">
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setDictLetter(letter)}
                    className={`w-7 h-7 rounded-md text-xs font-bold transition-all ${
                      dictLetter === letter ? 'bg-neon-orange text-black' : 'text-gray-400 hover:text-white hover:bg-gray-850'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDict.length > 0 ? (
                  filteredDict.map((item, idx) => (
                    <div key={idx} className="bg-black/20 border border-gray-850 p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="text-neon-orange font-black text-sm tracking-wide">{item.korean}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.hungarian}</p>
                      </div>
                      <span className="text-[10px] bg-gray-850 px-2 py-0.5 rounded text-gray-500 font-mono uppercase">{item.category}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-xs italic col-span-2 py-4">Nincs találat ezzel a betűvel: "{dictLetter}"</p>
                )}
              </div>
            </div>
          )}

          {/* RULES */}
          {activeTab === 'rules' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-black text-white mb-6">Versenyszabályzat és Általános Szabályok</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>A hivatalos ITF Taekwon-do versenyrendszer 5 fő kategóriára oszlik: Formagyakorlat (Tull), Szabad küzdelem (Matsogi), Erőtörés (Kyokpa), Speciális fegyvertechnikai törés, valamint Tradicionális küzdelem.</p>
                <p>A szabályok pontos betartása mind az edzőteremben (Dojang), mind a versenyeken kötelező a sérülések elkerülése és a kölcsönös tisztelet megőrzése érdekében.</p>
              </div>
            </div>
          )}

          {/* THEORY APP */}
          {activeTab === 'theoryapp' && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <h2 className="text-2xl font-black text-white">Taekwon-do Elmélet Mobilapplikáció</h2>
                <p className="text-neon-orange text-sm font-bold mt-1">Minden elméleti tudás a zsebedben</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Az alkalmazás célja, hogy segítse a klub tagjait és minden Taekwon-do gyakorlót az övvizsgákra való felkészülésben. Nem kell többé papíralapú jegyzeteket keresgélned.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-black/40 border border-gray-850 p-4 rounded-xl space-y-1">
                  <h4 className="text-neon-orange font-bold text-sm">📖 Övvizsga Anyagok</h4>
                  <p className="text-gray-400 text-xs">Szintekre bontott kérdés-felelet adatbázis a vizsgakövetelményekhez.</p>
                </div>
                <div className="bg-black/40 border border-gray-850 p-4 rounded-xl space-y-1">
                  <h4 className="text-neon-orange font-bold text-sm">🥋 Tull-ok Jelentése</h4>
                  <p className="text-gray-400 text-xs">A 24 formagyakorlat pontos történelmi háttere és mozdulatszámai.</p>
                </div>
                <div className="bg-black/40 border border-gray-850 p-4 rounded-xl space-y-1">
                  <h4 className="text-neon-orange font-bold text-sm">🗣️ Koreai Szakszavak</h4>
                  <p className="text-gray-400 text-xs">Vezényszavak, állások, ütések és rúgások pontos gyűjteménye.</p>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* 3. ALUL JELENIK MEG MOBILON A MENÜPONT RÁCS (PC-N MARAD A STICKY OLDALSÁV) */}
        <aside className="w-full lg:w-1/4 order-2 lg:order-2">
          <div className="sticky top-28 bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2">
            <h3 className="text-white font-bold px-1 mb-3 text-lg hidden lg:block">Aloldalak</h3>
            {/* Mobilon egy kényelmes, 2 oszlopos rács az oldal alján, PC-n függőleges gomb-lista */}
            <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    // Mobilon automatikusan felugrik a képernyő a tartalom tetejére gombnyomáskor
                    window.scrollTo({ top: 150, behavior: 'smooth' });
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
