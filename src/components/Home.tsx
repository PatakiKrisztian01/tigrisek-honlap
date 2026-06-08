import { ArrowRight, Users, Calendar, Shield, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const newsItems = [
  {
    date: '2026. Április 1.',
    title: 'Ne hagyd veszni adód 1%-át!',
    excerpt: 'Segíts nekünk az ügyfélkapun keresztül! Adószámunk: 18012020-1-43. Pár kattintás az egész.',
  },
  {
    date: '2025',
    title: 'WAKO Kickbox Világkupa – Jesolo',
    excerpt: 'Büszkék vagyunk versenyzőinkre, akik kiemelkedő eredményeket értek el a Jesolo-i Világkupán.',
  },
  {
    date: '2025',
    title: 'Magyarbajnokság',
    excerpt: 'Tigrisek versenyzői ismét bizonyítottak az országos bajnokságon. Gratulálunk minden résztvevőnek!',
  },
];

// 150 darab, szigorúan válogatott, rátok szabott kulcsszó
const WORD_CLOUD_WORDS = [
  // Fő mag - Legfontosabbak (Piros)
  { text: 'TAEKWON-DO', type: 'core' as const, weight: 4 },
  { text: 'KICK-BOX', type: 'core' as const, weight: 4 },
  { text: 'TIGRISEK', type: 'core' as const, weight: 4 },
  { text: 'TIGERS', type: 'core' as const, weight: 4 },
  { text: 'EDZÉS', type: 'core' as const, weight: 3 },
  { text: 'ÖNVÉDELEM', type: 'core' as const, weight: 3 },
  { text: 'HARCMŰVÉSZET', type: 'core' as const, weight: 3 },
  { text: 'BUDAPEST TIGERS', type: 'core' as const, weight: 3 },
  { text: 'OVIS TKD', type: 'core' as const, weight: 3 },
  { text: 'KÜZDŐSPORT', type: 'core' as const, weight: 3 },
  { text: 'FEKETE ÖV', type: 'core' as const, weight: 3 },
  
  // Pozitív értékek és klubszellem (Piros / Belső mag kitöltés)
  { text: 'CSALÁDIAS', type: 'value' as const, weight: 2.5 },
  { text: 'KÖZÖSSÉG', type: 'value' as const, weight: 2.5 },
  { text: 'TISZTELET', type: 'value' as const, weight: 2.5 },
  { text: 'FEGYELEM', type: 'value' as const, weight: 2.5 },
  { text: 'KITARTÁS', type: 'value' as const, weight: 2.5 },
  { text: 'ÖNBIZALOM', type: 'value' as const, weight: 2.5 },
  { text: 'HARCOSSÁG', type: 'value' as const, weight: 2.5 },
  { text: 'BARÁTSÁG', type: 'value' as const, weight: 2.5 },
  { text: 'SZERETET', type: 'value' as const, weight: 2.5 },
  { text: 'ALÁZAT', type: 'value' as const, weight: 2 },
  { text: 'BECSÜLET', type: 'value' as const, weight: 2 },
  { text: 'ERŐ', type: 'value' as const, weight: 2.5 },
  { text: 'EGYSÉG', type: 'value' as const, weight: 2 },
  { text: 'HIT', type: 'value' as const, weight: 2 },
  { text: 'AKARATERŐ', type: 'value' as const, weight: 2 },
  { text: 'ÖNURALOM', type: 'value' as const, weight: 2 },
  { text: 'ÖSSZETARTÁS', type: 'value' as const, weight: 2 },
  { text: 'BÁTORSÁG', type: 'value' as const, weight: 2 },
  { text: 'ÖNFELÁLDOZÁS', type: 'value' as const, weight: 1.5 },
  { text: 'CÉLOK', type: 'value' as const, weight: 2 },
  { text: 'FEJLŐDÉS', type: 'value' as const, weight: 2 },
  { text: 'MOTIVÁCIÓ', type: 'value' as const, weight: 2 },
  { text: 'MAGABIZTOSSÁG', type: 'value' as const, weight: 2 },
  { text: 'ÖSSZETARTÓ', type: 'value' as const, weight: 2 },
  { text: 'TÁMOGATÁS', type: 'value' as const, weight: 2 },
  { text: 'CSAPATSZELLEM', type: 'value' as const, weight: 2 },
  { text: 'FEGYELMEZETTSÉG', type: 'value' as const, weight: 2 },
  { text: 'ELSZÁNTSÁG', type: 'value' as const, weight: 2 },
  { text: 'PÉLDAMUTATÁS', type: 'value' as const, weight: 1.5 },
  { text: 'ÖNFEJLESZTÉS', type: 'value' as const, weight: 2 },

  // Szakmai kifejezések és SEO (Fehér / Külső burok)
  { text: 'PESTS ZENTLŐRINC', type: 'seo' as const, weight: 2 },
  { text: '18. KERÜLET', type: 'seo' as const, weight: 2.5 },
  { text: 'BUDAPEST 18', type: 'seo' as const, weight: 2 },
  { text: 'HAVANNA', type: 'seo' as const, weight: 1.8 },
  { text: 'KERÜLETI SPORT', type: 'seo' as const, weight: 1.5 },
  { text: 'DÉL-PEST', type: 'seo' as const, weight: 1.5 },
  { text: 'GYEREK EDZÉS', type: 'seo' as const, weight: 2 },
  { text: 'FELNŐTT EDZÉS', type: 'seo' as const, weight: 2 },
  { text: 'KEZDŐ CSOPORT', type: 'seo' as const, weight: 1.8 },
  { text: 'HALADÓ EDZÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'OVIS EDZÉS', type: 'seo' as const, weight: 2 },
  { text: 'NŐI ÖNVÉDELEM', type: 'seo' as const, weight: 1.8 },
  { text: 'FORMAGYAKORLAT', type: 'seo' as const, weight: 1.5 },
  { text: 'KÜZDELEM', type: 'seo' as const, weight: 1.8 },
  { text: 'ERŐNLÉTI EDZÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'NYÚJTÁS', type: 'seo' as const, weight: 1.2 },
  { text: 'ZSÁKMUNKA', type: 'seo' as const, weight: 1.5 },
  { text: 'PAZSMUNKA', type: 'seo' as const, weight: 1.5 },
  { text: 'KONDÍCIÓ', type: 'seo' as const, weight: 1.5 },
  { text: 'KOORDINÁCIÓ', type: 'seo' as const, weight: 1.5 },
  { text: 'MOZGÁSFEJLESZTÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'BEMUTATÓK', type: 'seo' as const, weight: 1.2 },
  { text: 'ÖVVIZSGÁK', type: 'seo' as const, weight: 1.8 },
  { text: 'EDZŐTÁBOR', type: 'seo' as const, weight: 1.8 },
  { text: 'VERSENYZÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'WAKO', type: 'seo' as const, weight: 1.5 },
  { text: 'ITF', type: 'seo' as const, weight: 1.5 },
  { text: 'VILÁGKUPA', type: 'seo' as const, weight: 1.8 },
  { text: 'MAGYAR BAJNOKSÁG', type: 'seo' as const, weight: 2 },
  { text: 'MEDÁLOK', type: 'seo' as const, weight: 1.2 },
  { text: 'TRÓFEÁK', type: 'seo' as const, weight: 1.2 },
  { text: 'BAJNOKNEVELÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'ÖNVÉDELMI FOGÁSOK', type: 'seo' as const, weight: 1.5 },
  { text: 'KÜZDELMI TECHNIKA', type: 'seo' as const, weight: 1.5 },
  { text: 'FORMÁK', type: 'seo' as const, weight: 1.2 },

  // Marketing és Akció (Fehér / Külső burok)
  { text: 'INGYENES ELSŐ EDZÉS', type: 'seo' as const, weight: 2.2 },
  { text: 'CSATLAKOZZ', type: 'seo' as const, weight: 1.8 },
  { text: 'JELENTKEZZ', type: 'seo' as const, weight: 2.2 },
  { text: 'PRÓBAEDZÉS', type: 'seo' as const, weight: 1.8 },
  { text: 'VÁRUNK', type: 'seo' as const, weight: 1.5 },
  { text: 'LÉGY HARCOS', type: 'seo' as const, weight: 1.8 },
  { text: 'KEZDD EL MA', type: 'seo' as const, weight: 1.8 },

  // Ismétlések, variációk és Sűrítő szavak (SEO és formaépítés céljából)
  { text: 'TAEKWONDO BUDAPEST', type: 'seo' as const, weight: 1.6 },
  { text: 'KICKBOX BUDAPEST', type: 'seo' as const, weight: 1.6 },
  { text: 'GYERMEK HARCMŰVÉSZET', type: 'seo' as const, weight: 1.5 },
  { text: 'FIATAL HARCOSOK', type: 'seo' as const, weight: 1.5 },
  { text: 'EGÉSZSÉGES ÉLETMÓD', type: 'seo' as const, weight: 1.5 },
  { text: 'SPORTOLJ NÁLUNK', type: 'seo' as const, weight: 1.5 },
  { text: 'MOZGÁS ÖRÖME', type: 'seo' as const, weight: 1.5 },
  { text: 'TIGERS CSALÁD', type: 'seo' as const, weight: 1.8 },
  { text: 'SZELLEMI FEJLŐDÉS', type: 'seo' as const, weight: 1.5 },
  { text: 'FIZIKAI ERŐ', type: 'seo' as const, weight: 1.5 },
  { text: 'ÖNBIZALOM FEJLESZTÉS', type: 'seo' as const, weight: 1.6 },
  { text: 'GYEREKSPORT 18. KERÜLET', type: 'seo' as const, weight: 1.8 },
  { text: 'FITT FELNŐTTEK', type: 'seo' as const, weight: 1.5 },
  { text: 'ÖNVÉDELMI OKTATÁS', type: 'seo' as const, weight: 1.6 },
  { text: 'KÜZDŐSPORT OKTATÁS', type: 'seo' as const, weight: 1.6 },
  { text: 'TAEKWON-DO EDZÉSEK', type: 'seo' as const, weight: 1.8 },
  { text: 'KICK-BOX EDZÉSEK', type: 'seo' as const, weight: 1.8 },
  { text: 'OVIS MOZGÁS', type: 'seo' as const, weight: 1.5 },
  { text: 'ISKOLÁS SPORT', type: 'seo' as const, weight: 1.5 },
  { text: 'KÖZÖSSÉGI ÉLET', type: 'seo' as const, weight: 1.5 },
  { text: 'SPORT EGYESÜLET', type: 'seo' as const, weight: 1.6 },
  { text: 'PROFI EDZŐK', type: 'seo' as const, weight: 1.6 },
  { text: 'MESTEREK', type: 'seo' as const, weight: 1.5 },
  { text: 'DAN VIZSGA', type: 'seo' as const, weight: 1.4 },
  { text: 'KUP VIZSGA', type: 'seo' as const, weight: 1.4 },
  { text: 'TIGERS KLUB', type: 'seo' as const, weight: 1.6 },
  { text: 'SÉRTETLEN ÖNBIZALOM', type: 'seo' as const, weight: 1.4 },
  { text: 'FEGYELMEZETT HARCOSOK', type: 'seo' as const, weight: 1.5 },
  { text: 'KITARTÓ MUNKA', type: 'seo' as const, weight: 1.4 },
  { text: 'SIKERES VIZSGÁK', type: 'seo' as const, weight: 1.5 },
  { text: 'BAJNOKI CÍMEK', type: 'seo' as const, weight: 1.6 },
  { text: 'KÜZDELMI SZELLEM', type: 'seo' as const, weight: 1.5 },
  { text: 'TISZTELETADÁS', type: 'seo' as const, weight: 1.4 },
  { text: 'ALÁZATOS MUNKA', type: 'seo' as const, weight: 1.4 },
  { text: 'ERŐS TEST', type: 'seo' as const, weight: 1.8 },
  { text: 'ERŐS LÉLEK', type: 'seo' as const, weight: 1.8 },
  { text: 'EDZŐTERMI KÖZÖSSÉG', type: 'seo' as const, weight: 1.5 },
  { text: 'CSALÁDIAS HANGULAT', type: 'seo' as const, weight: 1.5 },
  { text: 'BARÁTI KÖR', type: 'seo' as const, weight: 1.4 },
  { text: 'JÓ HANGULAT', type: 'seo' as const, weight: 1.4 },
  { text: 'PONTOSSÁG', type: 'seo' as const, weight: 1.2 },
  { text: 'RÚGÁSOK', type: 'seo' as const, weight: 1.4 },
  { text: 'ÜTÉSEK', type: 'seo' as const, weight: 1.4 },
  { text: 'PAZS EDZÉS', type: 'seo' as const, weight: 1.4 },
  { text: 'ZSÁKOLÁS', type: 'seo' as const, weight: 1.4 },
  { text: 'ERŐNLÉT', type: 'seo' as const, weight: 1.5 },
  { text: 'RUGALMASSÁG', type: 'seo' as const, weight: 1.2 },
  { text: 'GYORSASÁG', type: 'seo' as const, weight: 1.4 },
  { text: 'REAKCIÓIDŐ', type: 'seo' as const, weight: 1.4 },
  { text: 'KEDVEZŐ TAGDÍJ', type: 'seo' as const, weight: 1.4 },
  { text: 'INGYENES PRÓBA', type: 'seo' as const, weight: 1.5 },
  { text: 'VÁRUNK RÁD', type: 'seo' as const, weight: 1.4 },
  { text: 'ALAPÍTVA 2002', type: 'seo' as const, weight: 1.6 },
  { text: '24 ÉV TAPASZTALAT', type: 'seo' as const, weight: 1.6 },
  { text: 'SIKERES SPORTOLÓK', type: 'seo' as const, weight: 1.5 },
  { text: 'BUDAPESTI KICKBOX', type: 'seo' as const, weight: 1.6 },
  { text: 'KERÜLETI TAEKWONDO', type: 'seo' as const, weight: 1.6 },
  { text: 'HAVANNA LAKÓTELEPI SPORT', type: 'seo' as const, weight: 1.5 },
  { text: 'HARCMŰVÉSZET GYEREKEKNEK', type: 'seo' as const, weight: 1.6 },
  { text: 'HARCMŰVÉSZET FELNŐTTEKNEK', type: 'seo' as const, weight: 1.6 },
  { text: 'ÖNVÉDELEM GYEREKEKNEK', type: 'seo' as const, weight: 1.6 },
  { text: 'ÖNVÉDELEM NŐKNEK', type: 'seo' as const, weight: 1.5 },
  { text: 'KÜZDŐSPORT GYEREKEKNEK', type: 'seo' as const, weight: 1.6 },
  { text: 'MINDEN KOROSZTÁLY', type: 'seo' as const, weight: 1.5 },
  { text: 'FEKETE ÖVES MESTEREK', type: 'seo' as const, weight: 1.6 },
  { text: 'ITF HUNGARY', type: 'seo' as const, weight: 1.4 },
  { text: 'WAKO HUNGARY', type: 'seo' as const, weight: 1.4 },
  { text: 'TIGERS SE', type: 'seo' as const, weight: 1.5 },
  { text: 'WWW.TIGRISEK.HU', type: 'seo' as const, weight: 1.8 }
];

export default function Home() {
  // Matematikai szív-egyenlet alapú elrendezés generálása, hogy tökéletes formát kapjunk
  const positionedWords = useMemo(() => {
    return WORD_CLOUD_WORDS.map((word, index) => {
      // Elosztjuk az indexeket 0 és 2*PI közé egyenletesen
      const t = (index / WORD_CLOUD_WORDS.length) * 2 * Math.PI;
      
      // A híres parametrikus szív-egyenlet formula
      let x = 16 * Math.pow(Math.sin(t), 3);
      let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
      
      // Egy kis véletlenszerű eltolás (jitter), hogy ne legyenek túl steril sorban, de az alakzat megmaradjon
      const randomOffset = 1.8;
      x += (Math.random() - 0.5) * randomOffset;
      y += (Math.random() - 0.5) * randomOffset;

      // Átváltás százalékos pozícióvá a konténeren belül (középpont: 50%, 45%)
      // A Y tengelyt invertáljuk, mert a CSS fentről lefelé növekszik
      const left = 50 + x * 2.4; 
      const top = 45 - y * 2.4; 

      // Színmeghatározás: a mag és az értékek pirosak, a SEO szavak fehérek
      let colorClass = 'text-white hover:text-neon-orange';
      if (word.type === 'core') {
        colorClass = 'text-red-500 font-black drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)]';
      } else if (word.type === 'value') {
        colorClass = 'text-red-400 font-extrabold';
      } else {
        // Időnként egy-egy halványabb szürke a mélységérzet miatt
        colorClass = index % 4 === 0 ? 'text-gray-400 font-medium' : 'text-gray-200 font-bold';
      }

      return {
        ...word,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          transform: 'translate(-50%, -50%)',
          fontSize: `${word.weight * 7.5 + 6}px`, // Skálázható méretek
        },
        className: `absolute transition-all duration-300 whitespace-nowrap uppercase select-none tracking-tight ${colorClass}`
      };
    });
  }, []);

  return (
    <div>
      {/* Hero Section - A menüsor alatt kezdődik, 480px magas */}
      <div className="relative w-full bg-black overflow-hidden" style={{ minHeight: '400px', marginTop: '80px' }}>
        {/* Videó háttérként */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/matrix.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/10 via-transparent to-transparent" />
        </div>

        {/* Hero szöveg és tartalom */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full" style={{ minHeight: '400px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* BAL OLDAL: Szövegek */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                <span className="text-neon-orange text-xs sm:text-sm font-semibold tracking-wider uppercase">Budapest Tigers SE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Légy erősebb <br />
                <span className="text-neon-orange">testben és lélekben</span>
              </h1>

              <div className="text-sm sm:text-lg lg:text-xl text-gray-200 max-w-2xl mb-6 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <p>ITF Taekwon-do és Kick-box edzések gyerekeknek és felnőtteknek,</p>
                <p className="text-neon-orange font-bold text-xs sm:text-sm lg:text-base uppercase mt-1 tracking-widest">kezdőtől fekete övig.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/edzesek"
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/30"
                >
                  Ingyenes első edzés
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* JOBB OLDAL: Mozgó tigris logó */}
            <div className="hidden lg:flex lg:col-span-4 justify-center lg:justify-end">
              <img
                src="/tigrislogo.webp"
                alt="Tigrisek Logo"
                className="h-64 xl:h-72 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rólunk Blokk */}
      <section id="about" className="py-20 bg-gray-950 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Ismerj meg minket</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 uppercase tracking-tight">Fedezd fel a benned rejlő erőt!</h2>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 sm:p-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto space-y-6">
              Nálunk a Taekwon-do nemcsak látványos önvédelem és küzdőszellem, hanem egy összetartó, családias közösség is <span className="text-white font-bold">2002 óta</span>.
              <br /><br />
              Hiszünk abban, hogy az edzőteremben megszerzett magabiztosság, tisztelet és fegyelem az élet minden területén sikeressé teszi a tanítványainkat. Támogató csapattal várunk minden korosztályt, a teljesen kezdőktől a fekete övesekig.
              <br /><br />
              <span className="text-neon-orange font-bold text-lg block mt-4">Tartozz te is a Tigrisek családjához!</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-800/60">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-5 h-5 text-neon-orange" />
                <span className="text-white font-bold text-sm">Biztonságos környezet</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-5 h-5 text-neon-orange" />
                <span className="text-white font-bold text-sm">Profi mesterek</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-5 h-5 text-neon-orange" />
                <span className="text-white font-bold text-sm">Családias közösség</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TŰSŰRŰ MATEMATIKAI SZÓFELHŐ - IGAZI SZÍV ALAKZAT */}
      <section className="bg-black py-24 flex flex-col items-center justify-center overflow-hidden border-b border-gray-900">
        <div className="max-w-2xl text-center mb-10 px-4">
          <span className="text-sm font-bold uppercase tracking-widest text-neon-orange mb-2 block">A mi világunk</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Értékek, Közösség és Erő</h2>
        </div>

        {/* Óriási, tágas 750px-es konténer, amiben a 150 szó gyönyörűen kirajzolódik egymás mellett */}
        <div className="relative w-full max-w-[400px] aspect-square md:max-w-[750px] bg-gray-950/20 rounded-3xl border border-gray-900/30 overflow-hidden shadow-inner">
          <div className="absolute inset-0 w-full h-full">
            {positionedWords.map((word, i) => (
              <span key={i} style={word.style} className={word.className}>
                {word.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Legfrissebb</p>
              <h2 className="text-4xl font-black text-white">Hírek</h2>
            </div>
            <Link to="/hirek" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-neon-orange transition-colors text-sm font-bold">
              Összes hír <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <Link key={i} to="/hirek">
                <article className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <time className="text-neon-orange text-xs font-bold tracking-wider uppercase mb-3 block">{item.date}</time>
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-neon-orange transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-y border-gray-900 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-neon-orange/30 font-serif mb-4">"</div>
          <blockquote className="text-xl sm:text-2xl font-light text-gray-300 leading-relaxed italic mb-6">
            A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.
          </blockquote>
          <p className="text-gray-600 text-sm tracking-wider uppercase">— Choi Hong Hi, az ITF Taekwondo alapítója</p>
        </div>
      </section>

      {/* Club Leaders */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Klubvezetők</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img src="/patakikrisztian.webp" alt="Pataki Krisztián" className="w-20 h-20 mx-auto mb-4 object-contain" />
              <h3 className="text-white font-black text-xl mb-1">Pataki Krisztián</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">VI.Dan — Klubvezető elnök</p>
              <a href="mailto:tigrisek@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">tigrisek@gmail.com</a>
              <a href="tel:+36709415992" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-941-5992</a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img src="/patakinezsaniko.webp" alt="Patakiné Zs. Anikó" className="w-20 h-20 mx-auto mb-4 object-contain" />
              <h3 className="text-white font-black text-xl mb-1">Patakiné Zs. Anikó</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">III.Dan — Klubvezető helyettes</p>
              <a href="mailto:patakineaniko@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">patakineaniko@gmail.com</a>
              <a href="tel:+36703184834" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-318-4834</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tax 1% Banner */}
      <section className="py-12 bg-neon-orange/5 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-black text-2xl mb-3">Ajánld fel adód 1%-át!</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Segíts nekünk, hogy harcosaink méltó körülmények között készülhessenek!
            Egyetlen forintodba sem kerül.
          </p>
          <div className="inline-flex items-center gap-3 bg-gray-900/60 border border-neon-orange/30 rounded-xl px-6 py-3">
            <span className="text-gray-500 text-sm">Adószám:</span>
            <span className="text-neon-orange font-mono font-bold text-lg tracking-widest">18012020-1-43</span>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Ügyfélkapu: nav.gov.hu → 1+1%-os nyilatkozat → Adószám megadása
          </p>
        </div>
      </section>
    </div>
  );
}
