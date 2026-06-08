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

// A 150 szigorúan válogatott kulcsszó csoportosítva
const CORE_WORDS = ['TAEKWON-DO', 'KICK-BOX', 'TIGRISEK', 'TIGERS', 'EDZÉS', 'ÖNVÉDELEM', 'HARCMŰVÉSZET', 'BUDAPEST TIGERS', 'OVIS TKD', 'KÜZDŐSPORT', 'FEKETE ÖV'];
const VALUE_WORDS = ['CSALÁDIAS', 'KÖZÖSSÉG', 'TISZTELET', 'FEGYELEM', 'KITARTÁS', 'ÖNBIZALOM', 'HARCOSSÁG', 'BARÁTSÁG', 'SZERETET', 'ALÁZAT', 'BECSÜLET', 'ERŐ', 'EGYSÉG', 'HIT', 'AKARATERŐ', 'ÖNURALOM', 'ÖSSZETARTÁS', 'BÁTORSÁG', 'ÖNFELÁLDOZÁS', 'CÉLOK', 'FEJLŐDÉS', 'MOTIVÁCIÓ', 'MAGABIZTOSSÁG', 'ÖSSZETARTÓ', 'TÁMOGATÁS', 'CSAPATSZELLEM', 'FEGYELMEZETTSÉG', 'ELSZÁNTSÁG', 'PÉLDAMUTATÁS', 'ÖNFEJLESZTÉS'];
const SEO_WORDS = ['PESTSZENTLŐRINC', '18. KERÜLET', 'BUDAPEST 18', 'HAVANNA', 'KERÜLETI SPORT', 'DÉL-PEST', 'GYEREK EDZÉS', 'FELNŐTT EDZÉS', 'KEZDŐ CSOPORT', 'HALADÓ EDZÉS', 'OVIS EDZÉS', 'NŐI ÖNVÉDELEM', 'FORMAGYAKORLAT', 'KÜZDELEM', 'ERŐNLÉTI EDZÉS', 'NYÚJTÁS', 'ZSÁKMUNKA', 'PAZSMUNKA', 'KONDÍCIÓ', 'KOORDINÁCIÓ', 'MOZGÁSFEJLESZTÉS', 'BEMUTATÓK', 'ÖVVIZSGÁK', 'EDZŐTÁBOR', 'VERSENYZÉS', 'WAKO', 'ITF', 'VILÁGKUPA', 'MAGYAR BAJNOKSÁG', 'MEDÁLOK', 'TRÓFEÁK', 'BAJNOKNEVELÉS', 'ÖNVÉDELMI FOGÁSOK', 'KÜZDELMI TECHNIKA', 'FORMÁK', 'INGYENES ELSŐ EDZÉS', 'CSATLAKOZZ', 'JELENTKEZZ', 'PRÓBAEDZÉS', 'VÁRUNK', 'LÉGY HARCOS', 'KEZDD EL MA', 'TAEKWONDO BUDAPEST', 'KICKBOX BUDAPEST', 'GYERMEK HARCMŰVÉSZET', 'FIATAL HARCOSOK', 'EGÉSZSÉGES ÉLETMÓD', 'SPORTOLJ NÁLUNK', 'MOZGÁS ÖRÖME', 'TIGERS CSALÁD', 'SZELLEMI FEJLŐDÉS', 'FIZIKAI ERŐ', 'ÖNBIZALOM FEJLESZTÉS', 'GYEREKSPORT 18. KERÜLET', 'FITT FELNŐTTEK', 'ÖNVÉDELMI OKTATÁS', 'KÜZDŐSPORT OKTATÁS', 'TAEKWON-DO EDZÉSEK', 'KICK-BOX EDZÉSEK', 'OVIS MOZGÁS', 'ISKOLÁS SPORT', 'KÖZÖSSÉGI ÉLET', 'SPORT EGYESÜLET', 'PROFI EDZŐK', 'MESTEREK', 'DAN VIZSGA', 'KUP VIZSGA', 'TIGERS KLUB', 'SÉRTETLEN ÖNBIZALOM', 'FEGYELMEZETT HARCOSOK', 'KITARTÓ MUNKA', 'SIKERES VIZSGÁK', 'BAJNOKI CÍMEK', 'KÜZDELMI SZELLEM', 'TISZTELETADÁS', 'ALÁZATOS MUNKA', 'ERŐS TEST', 'ERŐS LÉLEK', 'EDZŐTERMI KÖZÖSSÉG', 'CSALÁDIAS HANGULAT', 'BARÁTI KÖR', 'JÓ HANGULAT', 'PONTOSSÁG', 'RÚGÁSOK', 'ÜTÉSEK', 'PAZS EDZÉS', 'ZSÁKOLÁS', 'ERŐNLÉT', 'RUGALMASSÁG', 'GYORSASÁG', 'REAKCIÓIDŐ', 'KEDVEZŐ TAGDÍJ', 'INGYENES PRÓBA', 'VÁRUNK RÁD', 'ALAPÍTVA 2002', '24 ÉV TAPASZTALAT', 'SIKERES SPORTOLÓK', 'BUDAPESTI KICKBOX', 'KERÜLETI TAEKWONDO', 'HAVANNA LAKÓTELEPI SPORT', 'HARCMŰVÉSZET GYEREKEKNEK', 'HARCMŰVÉSZET FELNŐTTEKNEK', 'ÖNVÉDELEM GYEREKEKNEK', 'ÖNVÉDELEM NŐKNEK', 'KÜZDŐSPORT GYEREKEKNEK', 'MINDEN KOROSZTÁLY', 'FEKETE ÖVES MESTEREK', 'ITF HUNGARY', 'WAKO HUNGARY', 'TIGERS SE', 'WWW.TIGRISEK.HU'];

export default function Home() {
  
  // Intelligens felhő generátor: Rács alapú elrendezés szív-matematikával szűrve (Nincs egymásra csúszás)
  const gridWords = useMemo(() => {
    const rows = 12; // Rácssorok száma
    const cols = 9;  // Rácsoszlopok száma
    const words: any[] = [];
    
    // Klónozzuk a listákat, hogy tudjunk belőlük kivenni elemeket
    const coreList = [...CORE_WORDS];
    const valueList = [...VALUE_WORDS];
    const seoList = [...SEO_WORDS];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Normalizáljuk a koordinátákat -1 és 1 közé, ahol a rács közepe (0,0)
        const x = (c - (cols - 1) / 2) / (cols / 2) * 1.3;
        const y = ((rows - 1 - r) - (rows - 1) / 2) / (rows / 2) * 1.3 + 0.2; // kis korrekció felfelé

        // Szív egyenlet matematikai ellenőrzése: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
        const heartValue = Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y;
        const isInsideHeart = heartValue <= 0.05;
        const isCoreArea = Math.abs(x) < 0.4 && Math.abs(y - 0.2) < 0.4; // A szív legközepe

        let selectedText = '';
        let colorClass = '';
        let sizeClass = '';

        if (isInsideHeart) {
          if (isCoreArea && coreList.length > 0) {
            // PIROS KÖZÉPPONT (A legfontosabb szavak)
            selectedText = coreList.shift()!;
            colorClass = 'text-red-500 font-black tracking-tight drop-shadow-[0_2px_4px_rgba(220,38,38,0.4)]';
            sizeClass = 'text-base md:text-2xl';
          } else if (valueList.length > 0 && Math.random() > 0.3) {
            // PIROS/NARANCS ÁTMENET (Pozitív értékek a szív testében)
            selectedText = valueList.shift()!;
            colorClass = 'text-red-400 font-extrabold';
            sizeClass = 'text-xs md:text-lg';
          } else if (seoList.length > 0) {
            // FEHÉR BURKOLAT (A szív külső íveire és szélére kerülő SEO szavak)
            selectedText = seoList.shift()!;
            colorClass = 'text-white font-bold opacity-90';
            sizeClass = 'text-[10px] md:text-sm';
          }
        } else {
          // A SZÍVEN KÍVÜLI TÉR (Kizárólag fehér/szürke SEO és lokális kifejezések egymás mellett)
          if (seoList.length > 0 && Math.random() > 0.15) {
            selectedText = seoList.shift()!;
            colorClass = 'text-gray-300 font-semibold opacity-60 hover:opacity-100 transition-opacity';
            sizeClass = 'text-[9px] md:text-xs';
          }
        }

        if (selectedText) {
          words.push({
            text: selectedText,
            className: `text-center uppercase transition-all duration-300 hover:text-neon-orange hover:scale-105 cursor-default select-none ${colorClass} ${sizeClass}`
          });
        }
      }
    }
    return words;
  }, []);

  return (
    <div>
      {/* Hero Section - MEGEMELT MAGASSÁG: Mobilról is tágas, asztali gépen látványos 650px font-size */}
      <div className="relative w-full bg-black overflow-hidden" style={{ minHeight: '650px', marginTop: '80px' }}>
        {/* Videó háttérként */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/matrix.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Hero szöveg és tartalom */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full" style={{ minHeight: '650px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
            {/* BAL OLDAL: Szövegek */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                <span className="text-neon-orange text-xs sm:text-sm font-semibold tracking-wider uppercase">Budapest Tigers SE</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Légy erősebb <br />
                <span className="text-neon-orange">testben és lélekben</span>
              </h1>

              <div className="text-base sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mb-8 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed">
                <p>ITF Taekwon-do és Kick-box edzések gyerekeknek és felnőtteknek,</p>
                <p className="text-neon-orange font-bold text-sm sm:text-base lg:text-lg uppercase mt-2 tracking-widest">kezdőtől fekete övig.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/edzesek"
                  className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/30"
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
                className="h-72 xl:h-85 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
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

      {/* ÚJ, TISZTA OLVASHATÓ RÁCS-ALAPÚ SZÓFELHŐ (Nincs egymásra csúszás) */}
      <section className="bg-black py-24 flex flex-col items-center justify-center overflow-hidden border-b border-gray-900">
        <div className="max-w-2xl text-center mb-12 px-4">
          <span className="text-sm font-bold uppercase tracking-widest text-neon-orange mb-2 block">A mi világunk</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Értékek, Közösség és Erő</h2>
        </div>

        {/* Flexibilis rácshálózat: a szavak tisztán egymás MELLETT és ALATT jelennek meg, kiadva a formát */}
        <div className="w-full max-w-7xl px-4 flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 items-center justify-items-center bg-gray-950/40 border border-gray-900 p-6 md:p-12 rounded-3xl max-w-5xl">
            {gridWords.map((word, i) => (
              <div key={i} className={word.className}>
                {word.text}
              </div>
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
