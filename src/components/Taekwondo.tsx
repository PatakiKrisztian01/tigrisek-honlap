import { useState } from 'react';
import { Play, ExternalLink, Shield } from 'lucide-react';
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

type TulData = {
  name: string;
  moves: number | string;
  returnFoot?: string;
  meaning: string[];
  youtubeUrl: string;
};

const alapGyakorlatok: TulData[] = [
  {
    name: 'Saju-Jirugi',
    moves: 'Négyirányú',
    meaning: ['„Négyirányú ütés”. Egyszerű alapvédelmi és támadó gyakorlat, amelyet kezdők számára tanítanak a Taekwon-Do alapjainak és irányváltásainak elsajátítására.'],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Saju+Jirugi',
  },
  {
    name: 'Saju-Makgi',
    moves: 'Négyirányú',
    meaning: ['„Négyirányú védés”. Egyszerű alapvédelmi gyakorlat, amely segít a kezdőknek rögzíteni a hárítások pontos koordinációját.'],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Saju+Makgi',
  },
];

const tulsData: TulData[] = [
  {
    name: 'Chon-Ji',
    moves: 19,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „Chon-Ji” jelentése: „Menny és Föld”. A keleti filozófiában ez a világ teremtését, illetve az emberi történelem kezdetét jelképezi. Ezért ez az első formagyakorlat, amelyet a kezdők megtanulnak.',
      'A minta két hasonló részből áll: az egyik az eget, a másik a földet szimbolizálja.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Chon-Ji+Tul',
  },
  {
    name: 'Dan-Gun',
    moves: 21,
    returnFoot: 'bal láb tér vissza',
    meaning: ['A formát a legendás Dan-Gunról nevezték el, akit Korea alapítójaként tartanak számon Kr. e. 2333-ból.'],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Dan-Gun+Tul',
  },
  {
    name: 'Do-San',
    moves: 24,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A „Do-San” Ahn Chang-Ho (1876–1938) hazafi írói neve volt.',
      'A 24 mozdulat egész életét jelképezi, amelyet Korea oktatásának fejlesztésére és a függetlenségi mozgalom támogatására szentelt.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Do-San+Tul',
  },
  {
    name: 'Won-Hyo',
    moves: 28,
    returnFoot: 'jobb láb tér vissza',
    meaning: ['Won-Hyo híres buddhista szerzetes volt, aki Kr. u. 686-ban elterjesztette a buddhizmust a Silla-dinasztia idején.'],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Won-Hyo+Tul',
  },
  {
    name: 'Yul-Gok',
    moves: 38,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „Yul-Gok” Yi I (1536–1584) nagy filozófus és tudós írói neve volt, akit gyakran „Korea Konfuciuszának” neveztek.',
      'A 38 mozdulat a születési helyének 38. szélességi fokára utal, a diagram pedig a tudóst jelképezi.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Yul-Gok+Tul',
  },
  {
    name: 'Joong-Gun',
    moves: 32,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A formát Ahn Joong-Gun hazafiról nevezték el, aki meggyilkolta Hirobumi Itót, Korea első japán kormányzóját, aki jelentés szerepet játszott Korea japán megszállásában.',
      'A 32 mozdulat Ahn Joong-Gun életkorára utal, amikor 1910-ben kivégezték a Lui-Shung börtönben.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Joong-Gun+Tul',
  },
  {
    name: 'Toi-Gye',
    moves: 37,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A „Toi-Gye” Yi Hwang híres tudós írói neve volt a 16. században, aki a neo-konfucianizmus egyik legnagyobb szakértője volt.',
      'A 37 mozdulat a születési helyének 37. szélességi fokára utal, a diagram pedig a tudóst jelképezi.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Toi-Gye+Tul',
  },
  {
    name: 'Hwa-Rang',
    moves: 29,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A formát a Hwa-Rang ifjúsági csoportról nevezték el, amely a 7. század elején alakult a Silla-dinasztia idején.',
      'A 29 mozdulat a 29. gyaloghadosztályra utal, ahol a Taekwon-Do elérte teljes fejlődését.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Hwa-Rang+Tul',
  },
  {
    name: 'Choong-Moo',
    moves: 30,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'Choong-Moo Yi Soon-Sin admirális posztumusz neve volt a Yi-dinasztia idején.',
      'Neki tulajdonítják az első páncélozott hadihajó, a Kobukson („teknőshajó”) megalkotását 1592-ben, amelyet a mai tengeralattjárók elődjének tartanak.',
      'A forma balkezes támadással végződik, ami tragikus halálát jelképezi: nem volt lehetősége teljes képességeit kibontakoztatni, mert hűsége a királyhoz korlátozta őt.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Choong-Moo+Tul',
  },
  {
    name: 'Kwang-Gae',
    moves: 39,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A formát a híres Kwang-Gae-Toh-Wangról, a Koguryo-dinasztia 19. királyáról nevezték el, aki visszahódította Korea elvesztett területeit, beleértve Mandzsúria nagy részét is.',
      'A diagram a terjeszkedést és az elveszett földek visszaszerzését jelképezi.',
      'A 39 mozdulat a 391-es év első két számjegyére utal, amikor trónra lépett.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Kwang-Gae+Tul',
  },
  {
    name: 'Po-Eun',
    moves: 36,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „Po-Eun” Chong Mong-Chu hűséges államférfi írói neve volt (1400 körül).',
      'Híres költőként ismerték, egyik verse pedig minden koreai számára ismert: „Nem szolgálnék más urat, még ha százszor keresztre is feszítenének.” A fizika tudományának úttörője is volt.',
      'A diagram a királyhoz és hazájához való rendíthetetlen hűségét jelképezi a Koryo-dinasztia végén.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Po-Eun+Tul',
  },
  {
    name: 'Ge-Baek',
    moves: 44,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A formát Ge-Baek tábornokról nevezték el, aki a Baek Je-dinasztia nagy hadvezére volt Kr. u. 660-ban.',
      'A diagram szigorú katonai fegyelmét jelképezi.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Ge-Baek+Tul',
  },
  {
    name: 'Eui-Am',
    moves: 45,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'Az „Eui-Am” Son Byong Hi írói neve volt, aki az 1919. március 1-jei koreai függetlenségi mozgalom vezetője volt.',
      'A 45 mozdulat arra az életkorára utal, amikor 1905-ben a Dong Hak („Keleti Kultúra”) nevét Chondo Kyo-ra („A Mennyei Út Vallása”) változtatta.',
      'A diagram rendíthetetlen szellemét jelképezi, amelyet hazája fejlődésének szolgálatába állított.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Eui-Am+Tul',
  },
  {
    name: 'Choong-Jang',
    moves: 52,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „Choong-Jang” Kim Duk Ryang tábornok írói neve volt a Yi-dinasztia idején.',
      'A forma balkezes támadással fejeződik be, ami tragikus halálát jelképezi: 27 évesen börtönben halt meg, mielőtt elérhette volna teljes érettségét.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Choong-Jang+Tul',
  },
  {
    name: 'Ko-Dang',
    moves: 39,
    meaning: [
      'A „Ko-Dang” Cho Man Sik hazafi írói neve volt, aki egész életét népe oktatásának és Korea függetlenségének szentelte.',
      'A 39 mozdulat börtönéveire és a 39. szélességi körön fekvő szülőhelyére utal.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Ko-Dang+Tul',
  },
  {
    name: 'Juche',
    moves: 45,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A „Juche” filozófiai eszme szerint az ember minden dolog ura, és maga alakítja saját sorsát.',
      'Az elképzelés gyökereit a Baekdu-hegyhez kötik, amely a koreai nép szellemét szimbolizálja.',
      'A diagram a Baekdu-hegyet jelképezi.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Juche+Tul',
  },
  {
    name: 'Sam-Il',
    moves: 33,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A „Sam-Il” Korea 1919. március 1-jén indult függetlenségi mozgalmának történelmi dátumára utal.',
      'A 33 mozdulat a mozgalmat megszervező 33 hazafit jelképezi.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Sam-Il+Tul',
  },
  {
    name: 'Yoo-Sin',
    moves: 68,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A formát Kim Yoo Sin tábornokról nevezték el, aki a Silla-dinasztia egyik vezető hadvezére volt.',
      'A 68 mozdulat a 668-as év utolsó két számjegyére utal, amikor Korea egyesült.',
      'A készenléti állás jobb oldalon viselt kardot jelképez, ami Yoo Sin hibájára utal: királya parancsára idegen erőkkel együtt harcolt saját nemzete ellen.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Yoo-Sin+Tul',
  },
  {
    name: 'Choi-Yong',
    moves: 45,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A formát Choi Yong tábornokról nevezték el, aki a 14. századi Koryo-dinasztia miniszterelnöke és főparancsnoka volt. Hűségéért, hazaszeretetéért és szerénységéért nagy tisztelet övezte.',
      'Végül saját alárendeltjei végezték ki Yi Sung Gae vezetésével, aki később a Lee-dinasztia első királya lett.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Choi-Yong+Tul',
  },
  {
    name: 'Yon-Gae',
    moves: 49,
    returnFoot: 'jobb láb tér vissza',
    meaning: [
      'A formát Yon Gae Somoon tábornokról nevezték el a Koguryo-dinasztia idejéből.',
      'A 49 mozdulat a 649-es évre utal, amikor legyőzte a Tang-dinasztia seregeit, és mintegy 300 000 katonájuk megsemmisítése után kiűzte őket Koreából.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Yon-Gae+Tul',
  },
  {
    name: 'Ul-Ji',
    moves: 42,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A formát Ul-Ji Moon Dok tábornokról nevezték el, aki sikeresen megvédte Koreát a Tang-dinasztia közel egymilliós serege ellen Kr. u. 612-ben. Gerillataktikát alkalmazva hatalmas veszteségeket okozott az ellenségnek.',
      'A diagram az L alakban vezetéknevét jelképezi.',
      'A 42 mozdulat a forma megalkotójának életkorára utal.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Ul-Ji+Tul',
  },
  {
    name: 'Moon-Moo',
    moves: 61,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A forma a Silla-dinasztia 30. királyának, Moon Moo-nak állít emléket. Testét a Dae Wang Am („A Nagy Király Sziklája”) közelében temették el.',
      'Végrendelete szerint: „Lelkem örökké megvédi hazámat a japánoktól.” A legenda szerint a Sok Gul Am („Kőbarlang”) sírjának őrzésére épült.',
      'A 61 mozdulat a 661-es évre utal, amikor trónra lépett.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Moon-Moo+Tul',
  },
  {
    name: 'So-San',
    moves: 72,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „So-San” Choi Hyong Ung nagy buddhista szerzetes írói neve volt a Lee-dinasztia idején (1520–1604).',
      'A 72 mozdulat arra az életkorára utal, amikor tanítványa, Sa Myung Dang segítségével megszervezte a szerzeteshadsereget. Ezek a harcos szerzetesek jelentős szerepet játszottak a japán megszállók visszaverésében 1592-ben.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+So-San+Tul',
  },
  {
    name: 'Se-Jong',
    moves: 24,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A formát Korea egyik legnagyobb uralkodójáról, Se-Jong királyról nevezték el, aki 1443-ban megalkotta a koreai ábécét (Hangul), és kiváló meteorológus is volt.',
      'A diagram a királyt jelképezi, a 24 mozdulat pedig a koreai ábécé 24 betűjére utal.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Se-Jong+Tul',
  },
  {
    name: 'Tong-Il',
    moves: 42,
    returnFoot: 'bal láb tér vissza',
    meaning: [
      'A „Tong-Il” Korea újraegyesítésének vágyát és elhatározását jelképezi, mivel az ország 1945 óta megosztott.',
      'A diagram az egységes koreai nemzetet szimbolizálja.',
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ITF+Taekwondo+Tong-Il+Tul',
  },
];

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
              „A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.”
            </blockquote>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.
              </p>
              <p>
                A taekwon-do kifejezés három szóképből áll: a „tae” rúgást, a lábtechnikák összességét jelenti, a „kwon” a kéztechnikák összefoglaló neve, a „do” jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete. Ez az elnevezés több szempontból is jó választásnak bizonyult. Egyrészt hasonlít az ősi taek kyon elnevezéshez, így bizonyos szempontból folytonosságot jelez a régi és az új stílus között, másrészt, pedig híven fejezi ki a sportág jellemzőit.
              </p>
              <p>
                A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.
              </p>
            </div>
          </div>
        )}

        {/* History */}
        {
