import { useEffect } from 'react';
import { ArrowRight, Calendar, Shield, Award, Heart, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Automatikus beolvasás a hírek oldalon használt logikával
const newsFiles = import.meta.glob('/public/data/news/*.json', { eager: true });

export default function Home() {
  const navigate = useNavigate();

  // Kreatív SEO Megoldás: Dinamikus Title és Meta leírás injektálása
  useEffect(() => {
    document.title = "Budapest Tigers SE | Taekwon-do és Kick-box edzések a 18. kerületben";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Budapest Tigers SE: Professzionális ITF Taekwon-do és Kick-box edzések gyerekeknek, ovisoknak és felnőtteknek Pestszentlőrincen, a Havanna lakótelepnél. Ingyenes próbaedzés!');
  }, []);

  // Feldolgozzuk a fájlokat, sorba rendezzük legfrissebb szerint, és kivesszük az első 3-at
  const legfrissebbHirek = Object.entries(newsFiles)
    .map(([path, data]: any) => ({
      ...data,
      id: path.split('/').pop()?.replace('.json', '')
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="w-full bg-black text-gray-300 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full bg-black overflow-hidden" style={{ height: '580px', marginTop: '80px' }}>
        <div className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/matrix.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                <span className="text-neon-orange text-xs sm:text-sm font-black tracking-wider uppercase">Budapest Tigers SE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Légy erősebb <br />
                <span className="text-neon-orange">testben és lélekben</span>
              </h1>

              <h2 className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mb-6 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                ITF Taekwon-do és Kick-box edzések gyerekeknek és felnőtteknek a 18. kerületben, <br />
                <span className="text-neon-orange font-bold text-xs sm:text-sm lg:text-base uppercase mt-1 tracking-widest block">kezdőtől fekete övig.</span>
              </h2>

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

            <div className="hidden lg:flex lg:col-span-4 justify-center lg:justify-end">
              <img
                src="/tigrislogo.webp"
                alt="Budapest Tigers SE - Taekwon-do és Kick-box Egyesület hivatalos logója"
                className="h-64 xl:h-72 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>


      {/* ================= 1. SZÍV BLOKK (Ismerj meg minket) ================= */}
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


      {/* ================= 2. HÍREK (Futó hírfolyam) ================= */}
      <section className="w-full bg-black border-b border-gray-900 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-widest text-neon-orange flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" /> Legfrissebb híreink
          </h2>
          <Link to="/news" className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Összes hír <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="flex flex-row-reverse w-max gap-8 animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] py-3 px-4 cursor-pointer">
            {[...legfrissebbHirek, ...legfrissebbHirek, ...legfrissebbHirek, ...legfrissebbHirek].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => navigate(`/news#${item.id}`)}
                className="w-[340px] sm:w-[400px] inline-block whitespace-normal bg-gray-900/60 border border-gray-800/80 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 shadow-xl group"
              >
                <div className="w-full h-44 relative bg-black overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`Budapest Tigers SE hír: ${item.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center -z-10">
                    <span className="text-neon-orange/20 font-black text-xl uppercase tracking-widest font-mono">Budapest Tigers</span>
                  </div>
                  
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-gray-800 text-[11px] text-gray-300 px-2.5 py-1 rounded-md font-mono flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-neon-orange" /> {item.date}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white font-black text-base sm:text-lg line-clamp-1 group-hover:text-neon-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {item.body.replace(/\s+/g, ' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 3. MOTTÓ (Choi Hong Hi idézet) ================= */}
      <section className="py-16 border-b border-gray-900 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-neon-orange/30 font-serif mb-4">"</div>
          <blockquote className="text-xl sm:text-2xl font-light text-gray-300 leading-relaxed italic mb-6">
            A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.
          </blockquote>
          <p className="text-gray-400 text-sm tracking-wider uppercase">— Choi Hong Hi, az ITF Taekwon-do alapítója</p>
        </div>
      </section>


      {/* ================= 4. TESZT ("A mi világunk" Értékfal) ================= */}
      <section className="bg-black py-24 flex flex-col items-center justify-center overflow-hidden border-b border-gray-900">
        <div className="max-w-2xl text-center mb-12 px-4">
          <span className="text-sm font-bold uppercase tracking-widest text-neon-orange mb-2 block">A mi világunk</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Értékek, Közösség és Erő</h2>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center font-mono font-black uppercase tracking-tighter leading-none select-none px-2 text-[2.2vw] sm:text-xs md:text-sm">
          {/* 1. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-450 opacity-50 inline-block whitespace-nowrap mr-[2vw] sm:mr-4">18. KERÜLET BUDAPEST</span>
            <span className="text-neon-orange bg-orange-950/40 px-1 sm:px-2 rounded inline-block whitespace-nowrap mx-[0.5vw] sm:mx-2">TAEKWON-DO</span>
            <span className="text-gray-450 opacity-40 inline-block whitespace-nowrap mx-[4vw] sm:mx-8">HAVANNA SPORT</span>
            <span className="text-neon-orange bg-orange-950/40 px-1 sm:px-2 rounded inline-block whitespace-nowrap mx-[0.5vw] sm:mx-2">KICK-BOX</span>
            <span className="text-gray-450 opacity-50 inline-block whitespace-nowrap ml-[2vw] sm:ml-4">PESTSZENTLŐRINC CLUB</span>
          </div>

          {/* 2. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-300 opacity-60 inline-block whitespace-nowrap mr-[2vw] sm:mr-4">GYEREK FELNŐTT EDZÉS</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">TIGRISEK—TKD—EDZÉS</span>
            <span className="text-gray-400 opacity-50 inline-block whitespace-nowrap mx-[3vw] sm:mx-6">KÖZÖSSÉG</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">BUDAPEST—TIGERS—SE</span>
            <span className="text-gray-300 opacity-60 inline-block whitespace-nowrap ml-[2vw] sm:ml-4">KERÜLETI KÜZDŐSPORT</span>
          </div>

          {/* 3. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-300 opacity-70 inline-block whitespace-nowrap mr-[1.5vw] sm:mr-3">INGYENES EDZÉS JELENTKEZZ!</span>
            <span className="text-orange-500 bg-orange-950/20 px-1 sm:px-2 rounded inline-block whitespace-nowrap">ÖNVÉDELEM—HARCMŰVÉSZET—CSALÁDIAS—KÖZÖSSÉG—TISZTELET—FEGYELEM—ILLEM</span>
            <span className="text-gray-300 opacity-70 inline-block whitespace-nowrap ml-[1.5vw] sm:ml-3">PRÓBAEDZÉS VÁRUNK RÁD</span>
          </div>

          {/* 4. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-300 opacity-80 inline-block whitespace-nowrap mr-[1.5vw] sm:mr-3">DÉL-PEST KICK-BOX TAEKWONDO</span>
            <span className="text-orange-400 inline-block whitespace-nowrap">KITARTÁS—ÖNBIZALOM—HARCOSSÁG—BARÁTSÁG—SZERETET—ALÁZAT—BECSÜLET—ERŐ—EGYSÉG</span>
            <span className="text-gray-300 opacity-80 inline-block whitespace-nowrap ml-[1.5vw] sm:ml-3">BUDAPESTI SPORT EGYESÜLET</span>
          </div>

          {/* 5. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-200 opacity-90 inline-block whitespace-nowrap mr-[2vw] sm:mr-4">OVIS EDZÉS KEZDŐ CSOPORT</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">TÁMOGATÁS—CSAPATSZELLEM—FEGYELMEZETTSÉG—ELSZÁNTSÁG—PÉLDAMUTATÁS—ÖNFEJLESZTÉS</span>
            <span className="text-gray-200 opacity-90 inline-block whitespace-nowrap ml-[2vw] sm:ml-4">HALADÓ NYILVÁNOS EDZÉSEK</span>
          </div>

          {/* 6. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-white inline-block whitespace-nowrap mr-[2.5vw] sm:mr-5">STRETCHING KÜZDELEM ERŐNLÉT NYÚJTÁS</span>
            <span className="text-orange-400 inline-block whitespace-nowrap">AKARATERŐ—ÖNURALOM—ÖSSZETARTÁS—BÁTORSÁG—FEJLŐDÉS—MOTIVÁCIÓ—MAGABIZTOSSÁG</span>
            <span className="text-white inline-block whitespace-nowrap ml-[2.5vw] sm:ml-5">ZSÁKMUNKA PAJZSMUNKA KONDÍCIÓ MOZGÁS</span>
          </div>

          {/* 7. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-white inline-block whitespace-nowrap mr-[3vw] sm:mr-6">BEMUTATÓK ÖVVIZSGÁK EDZŐTÁBOR VERSENYZÉS WAKO</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">ITF-VILÁGKUPA—MAGYAR-BAJNOKSÁG—MEDÁLOK—TRÓFEÁK—HIT—BAJNOKNEVELÉS</span>
            <span className="text-white inline-block whitespace-nowrap ml-[3vw] sm:ml-6">ÖNVÉDELMI FOGÁSOK KÜZDELMI TECHNIKÁK FORMÁK</span>
          </div>

          {/* 8. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-200 opacity-90 inline-block whitespace-nowrap mr-[4vw] sm:mr-8">GYERMEK HARCMŰVÉSZET HARCOS EGÉSZSÉGES ÉLETMÓD</span>
            <span className="text-orange-400 inline-block whitespace-nowrap">LÉGY HARCOS—KEZDD EL MA—TIGERS CSALÁD—SZELLEMI FEJLŐDÉS</span>
            <span className="text-gray-200 opacity-90 inline-block whitespace-nowrap ml-[4vw] sm:mr-8">SPORTOLJ NÁLUNK MOZGÁS ÖRÖME FITT FELNŐTTEK</span>
          </div>

          {/* 9. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-300 opacity-80 inline-block whitespace-nowrap mr-[6vw] sm:mr-12">ÖNVÉDELMI OKTATÁS KÜZDŐSPORTOK OKTATÁS EDZÉSEK TAEKWON</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">FIZIKAI ERŐ—ÖNBIZALOM-FEJLESZTÉS—UTÁNPÓTLÁS SPORT</span>
            <span className="text-gray-300 opacity-80 inline-block whitespace-nowrap ml-[6vw] sm:ml-12">OVIS MOZGÁS ISKOLÁS SPORT KÖZÖSSÉGI ÉLET PROFI EDZŐK</span>
          </div>

          {/* 10. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-300 opacity-70 inline-block whitespace-nowrap mr-[8vw] sm:mr-16">MESTEREK DAN VIZSGA KUP VIZSGA TIGERS KLUB SÉRTETLEN ÖNBIZALOM</span>
            <span className="text-neon-orange font-black inline-block whitespace-nowrap">FEGYELMEZETT HARCOSOK—SIKERES VIZSGÁK</span>
            <span className="text-gray-300 opacity-70 inline-block whitespace-nowrap ml-[8vw] sm:ml-16">BAJNOKI CÍMEK KÜZDELMI SZELLEM TISZTELETADÁS ALÁZATOS MUNKA</span>
          </div>

          {/* 11. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-400 opacity-60 inline-block whitespace-nowrap mr-[10vw] sm:mr-20">ERŐS TEST ERŐS LÉLEK EDZŐTERMI KÖZÖSSÉG CSALÁDIAS HANGULAT</span>
            <span className="text-neon-orange font-black bg-orange-950/40 px-1 sm:px-2 py-0.5 rounded inline-block whitespace-nowrap">SPORTEGYESÜLET</span>
            <span className="text-gray-400 opacity-60 inline-block whitespace-nowrap ml-[10vw] sm:mr-20">JÓ HANGULAT PONTOSSÁG RÚGÁSOK ÜTÉSEK PAJZS EDZÉS ZSÁKOLÁS</span>
          </div>

          {/* 12. Sor */}
          <div className="flex justify-center items-center py-1.5 w-full whitespace-nowrap">
            <span className="text-gray-400 opacity-50 inline-block whitespace-nowrap mr-[6vw] sm:mr-12">ERŐNLÉT RUGALMASSÁG GYORSASÁG KARATE REAKCIÓIDŐ TAGDÍJ PRÓBA ÓRA</span>
            <span className="text-neon-orange font-black bg-orange-950/40 px-1 sm:px-2 py-0.5 rounded inline-block whitespace-nowrap"> TIGERS</span>
            <span className="text-gray-400 opacity-50 inline-block whitespace-nowrap ml-[6vw] sm:ml-12">BUDAPESTI KICK-BOX KERÜLETI TAEKWONDO HAVANNA LAKÓTELEPI SPORT</span>
          </div>
        </div>
      </section>


      {/* ================= 5. FUTÓ 5 CSILLAGSOR ================= */}
      <section className="w-full bg-gray-950 py-6 border-b border-gray-900 overflow-hidden relative">
        <div className="relative w-full overflow-hidden whitespace-nowrap flex items-center">
          {/* Végtelenített csillagsor animáció (Marquee) */}
          <div className="flex w-max gap-12 animate-[marquee_25s_linear_infinite] py-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-neon-orange font-black tracking-widest uppercase text-sm font-mono">
                <div className="flex items-center gap-0.5">
                  <Star className="w-4 h-4 fill-neon-orange text-neon-orange" />
                  <Star className="w-4 h-4 fill-neon-orange text-neon-orange" />
                  <Star className="w-4 h-4 fill-neon-orange text-neon-orange" />
                  <Star className="w-4 h-4 fill-neon-orange text-neon-orange" />
                  <Star className="w-4 h-4 fill-neon-orange text-neon-orange" />
                </div>
                <span className="text-white ml-1">BUDAPEST TIGERS SE</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 6. KLUBVEZETŐK ================= */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">Klubvezetők</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img src="/patakikrisztian.webp" alt="Pataki Krisztián VI. Dan - Budapest Tigers SE Klubvezető Elnök" className="w-20 h-20 mx-auto mb-4 object-contain" />
              <h3 className="text-white font-black text-xl mb-1">Pataki Krisztián</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">VI.Dan — Klubvezető elnök</p>
              <a href="mailto:tigrisek@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">tigrisek@gmail.com</a>
              <a href="tel:+36709415992" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-941-5992</a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img src="/patakinezsaniko.webp" alt="Patakiné Zs. Anikó III. Dan - Budapest Tigers SE Klubvezető Helyettes" className="w-20 h-20 mx-auto mb-4 object-contain" />
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
            <span className="text-gray-400 text-sm font-medium">Adószám:</span>
            <span className="text-neon-orange font-mono font-bold text-lg tracking-widest">18012020-1-43</span>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Ügyfélkapu: nav.gov.hu → 1+1%-os nyilatkozat → Adószám megadása
          </p>
        </div>
      </section>
    </div>
  );
}
