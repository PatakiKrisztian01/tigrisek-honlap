import { Swords, Flame, Award, Music, Sparkles, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Kickbox() {
  return (
     <div>
      {/* Hero Section - A menüsor alatt kezdődik */}
      <div className="relative w-full bg-black overflow-hidden" style={{ minHeight: '400px', marginTop: '80px' }}>
        {/* Videó háttérként */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/kickbox.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Sötét átfedés */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Felül elhalványulás */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
          {/* Alul elhalványulás */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
          {/* Neon narancs oldalsó fény */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/10 via-transparent to-transparent" />
        </div>

        {/* Hero szöveg */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full" style={{ minHeight: '560px' }}>
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-3">Szakosztályunk</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            KICK-BOX<br />
            <span className="text-neon-orange">FORMAGYAKORLAT</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Mozgás, erő és művészet — egyetlen koreografált mozdulatsorban.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/kapcsolat"
              className="inline-flex items-center gap-2 bg-neon-orange hover:bg-orange-500 text-black font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-neon-orange/40"
            >
              Ingyenes próbaedzés
            </Link>
            <button
              onClick={() => document.getElementById('kickbox-content')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-sm border border-white/20 transition-all"
            >
              Tudj meg többet ↓
            </button>
          </div>
        </div>
      </div>

      {/* ── FŐ TARTALOM ── */}
      <div id="kickbox-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                <Sparkles className="w-6 h-6 text-neon-orange" /> Mozgás és Művészet
              </h2>
              <p className="text-neon-orange font-bold text-lg italic">Mi is az a formagyakorlat (Forms)?</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Képzeld el a harcművészetek eleganciáját és a küzdőszportok erejét egyetlen, előre megkoreografált mozdulatsorban! A kick-box formagyakorlatban a versenyzők valós ellenfél nélkül mutatnak be ütések, rúgások, védések és egyéb technikák sorozatát, pont úgy, mintha egy harcban lennének.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ez egy nemzetközileg elismert versenyszám a WAKO (World Association of Kickboxing Organizations) keretein belül, komoly szabályrendszerre és magas szintű követelményekkel. A cél nem az ellenfél legyőzése, hanem a technika, az erő, a sebesség, a ritmus és az összhang tökéletes bemutatása. A zsűri ezeket az elemeket értékeli a legapróbb részletekig.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                <Flame className="w-6 h-6 text-neon-orange" /> Miért érdemes Kick-box formagyakorlattal foglalkozni?
              </h2>
              <p className="text-gray-400 text-sm">Ez a sportág sokkal többet ad, mint gondolnád! Nemcsak tested, de elméd is fejlődik általa:</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-900/40 border border-gray-800/80 p-5 rounded-xl space-y-2">
                  <Zap className="w-5 h-5 text-neon-orange" />
                  <h3 className="text-white font-bold text-sm">Teljes körű fizikai fejlődés</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Növeli az erőt, robbanékonyságot, koordinációt, egyensúlyt és hajlékonyságot.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-800/80 p-5 rounded-xl space-y-2">
                  <Brain className="w-5 h-5 text-neon-orange" />
                  <h3 className="text-white font-bold text-sm">Mentális fókusz</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Javítja a koncentrációt, memóriát, önfegyelmet és a kreatív gondolkodást.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-800/80 p-5 rounded-xl space-y-2 sm:col-span-2">
                  <Award className="w-5 h-5 text-neon-orange" />
                  <h3 className="text-white font-bold text-sm">Önkifejezés a mozgásban & Lenyűgöző látvány</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    A koreográfiákban a sportoló megmutathatja saját stílusát és egyéniségét. Ez egyfajta "művészeti forma a harcművészeten belül". A formagyakorlat hihetetlenül dinamikus és esztétikus. Különösen népszerűek a fegyveres kategóriák (kard, bot, nunchaku), ahol a sebesség és a kontroll egyszerűen lélegzetelállító!
                  </p>
                </div>
              </div>
            </section>

            {/* KÉPEK SZEKCIÓ - Reszponzív, lebegő, neon-narancs izzó keretes linkek a logók méretére optimalizálva */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 pb-2">
              {/* WAKO Kép és Link */}
              <a 
                href="https://www.wako.sport/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border-2 border-neon-orange/60 bg-black p-4 shadow-[0_0_15px_rgba(255,165,0,0.15)] transition-all duration-300 hover:scale-105 hover:border-neon-orange hover:shadow-[0_0_25px_rgba(255,165,0,0.35)] w-full sm:w-1/2 max-w-sm"
              >
                <img 
                  src="wako.webp" 
                  alt="WAKO Kategóriák" 
                  className="w-full h-32 sm:h-40 object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-wider uppercase bg-neon-orange text-black px-3 py-1.5 rounded-lg shadow-lg">wako.sport ↗</span>
                </div>
              </a>

              {/* MKBSZ Kép és Link */}
              <a 
                href="https://kick-box.hu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border-2 border-neon-orange/60 bg-black p-4 shadow-[0_0_15px_rgba(255,165,0,0.15)] transition-all duration-300 hover:scale-105 hover:border-neon-orange hover:shadow-[0_0_25px_rgba(255,165,0,0.35)] w-full sm:w-1/2 max-w-sm"
              >
                <img 
                  src="MKBSZ.webp" 
                  alt="MKBSZ Szövetség" 
                  className="w-full h-32 sm:h-40 object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-wider uppercase bg-neon-orange text-black px-3 py-1.5 rounded-lg shadow-lg">kick-box.hu ↗</span>
                </div>
              </a>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                Kategóriák a WAKO-ban
              </h2>
              <p className="text-gray-400 text-sm">A formagyakorlatok sokszínűek, és mindenki megtalálhatja a számára megfelelőt:</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                  <span className="text-white font-bold block mb-1">Creative Hard Style (kemény stílusú pusztakezes)</span>
                  <span className="text-gray-400 text-xs">Hagyományos, erőteljes és robbanékony mozdulatok jellemzik.</span>
                </div>
                <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                  <span className="text-white font-bold block mb-1">Hard Style Weapons</span>
                  <span className="text-gray-400 text-xs">Kreatív fegyveres forma (pl. bot, kard, nun-chaku, kama) látványos és kontrollált használata.</span>
                </div>
                <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                  <span className="text-white font-bold block mb-1">Zenés pusztakezes formagyakorlat</span>
                  <span className="text-gray-400 text-xs">Zenére történő bemutató, ahol a mozdulatok és a zene ritmusa, hangulata tökéletes összhangban van, akrobatikus elemekkel.</span>
                </div>
                <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg flex items-center">
                  <span className="text-white font-bold">Zenés fegyveres formagyakorlat</span>
                </div>
              </div>
            </section>
          </div>

          {/* Jobb oldali sáv - Jelentkezési kártya */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-neon-orange/40 rounded-2xl p-6 text-center space-y-4 shadow-[0_0_15px_rgba(255,165,0,0.05)]">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Gyere és próbáld ki!</h3>
              <p className="text-neon-orange font-bold text-sm">Csatlakozz hozzánk!</p>
              <div className="text-gray-400 text-xs space-y-3 text-left leading-relaxed border-t border-b border-gray-800 py-4 my-2">
                <p>Érdekel a kick-box formagyakorlat világa? Szeretnéd fejleszteni a koordinációdat, robbanékonyságodat és egyedi stílusodat?</p>
                <p>Nincs szükség előképzettségre, csak elhivatottságra és a mozgás szeretetére! Tapasztalt edzőink segítenek elsajátítani a technikákat és kihozni belőled a maximumot.</p>
                <p className="text-white font-bold text-center pt-1">Készen állsz egy új kihívásra?</p>
              </div>
              <Link to="/kapcsolat" className="w-full bg-neon-orange text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all hover:bg-white hover:scale-[1.02]">
                Jelentkezz egy próbaedzésre!
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
