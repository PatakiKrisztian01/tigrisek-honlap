import { Swords, Flame, Award, Music, Sparkles, Zap, Brain } from 'lucide-react';

interface KickboxProps {
  onNavigate: (section: any) => void;
}

export default function Kickbox({ onNavigate }: KickboxProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Szekció - Fix 480px magasra állítva, mint a Hero */}
      <div className="relative w-full bg-black overflow-hidden h-[480px]">
        
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/kickbox.webm" type="video/webm" />
          </video>
          
          {/* Sötétítés: felül fekete, középen átlátszó, alul fekete */}
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
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
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-neon-orange hover:bg-orange-500 text-black font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-neon-orange/40"
            >
              Ingyenes próbaedzés
            </button>
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

            <div className="space-y-4">
              <div className="w-full rounded-2xl overflow-hidden border border-gray-850 shadow-md">
                <img 
                  src="wako.jpg" 
                  alt="WAKO Kategóriák" 
                  className="w-full h-auto object-cover max-h-72"
                />
              </div>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                  <Music className="w-6 h-6 text-neon-orange" /> Kategóriák a WAKO-ban
                </h2>
                <p className="text-gray-400 text-sm">A formagyakorlatok sokszínűek, és mindenki megtalálhatja a számára megfelelőt:</p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                    <span className="text-white font-bold block mb-1">Hard Style (kemény stílus)</span>
                    <span className="text-gray-400 text-xs">Hagyományos, erőteljes és robbanékony mozdulatok jellemzik.</span>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                    <span className="text-white font-bold block mb-1">Hard Style Weapons</span>
                    <span className="text-gray-400 text-xs">Hagyományos fegyverek (pl. bot, kard) látványos és kontrollált használata.</span>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
                    <span className="text-white font-bold block mb-1">Zenés formagyakorlat</span>
                    <span className="text-gray-400 text-xs">Zenére történő bemutató, ahol a mozdulatok és a zene ritmusa, hangulata tökéletes összhangban van.</span>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg flex items-center">
                    <span className="text-white font-bold">Zenés fegyveres formagyakorlat</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-neon-orange/40 rounded-2xl p-6 text-center space-y-4 shadow-[0_0_15px_rgba(255,165,0,0.05)]">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Gyere és próbáld ki!</h3>
              <p className="text-neon-orange font-bold text-sm">Csatlakozz hozzánk!</p>
              <div className="text-gray-400 text-xs space-y-3 text-left leading-relaxed border-t border-b border-gray-800 py-4 my-2">
                <p>Érdekel a kick-box formagyakorlat világa? Szeretnéd fejleszteni a koordinációdat, robbanékonyságodat és egyedi stílusodat?</p>
                <p>Nincs szükség előképzettségre, csak elhivatottságra és a mozgás szeretetére! Tapasztalt edzőink segítenek elsajátítani a technikákat és kihozni belőled a maximumot.</p>
                <p className="text-white font-bold text-center pt-1">Készen állsz egy új kihívásra?</p>
              </div>
              <button onClick={() => onNavigate('contact')} className="w-full bg-neon-orange text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all hover:bg-white hover:scale-[1.02]">
                Jelentkezz egy ingyenes próbaedzésre!
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
