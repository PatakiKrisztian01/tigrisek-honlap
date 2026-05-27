import { Swords, Flame, Award, ShieldAlert, Music, Sparkles, Zap, Brain } from 'lucide-react';

interface KickboxProps {
  onNavigate: (section: any) => void;
}

export default function Kickbox({ onNavigate }: KickboxProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Fejléc */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Szakosztályunk</p>
          <h1 className="text-5xl font-black text-white flex items-center gap-4">
            KICK-BOX FORMAGYAKORLAT <Swords className="w-10 h-10 text-neon-orange hidden sm:block" />
          </h1>
        </div>
      </div>

      {/* Fő tartalom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Bal / Középső hasáb: Ismertető és kategóriák */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Mi az a formagyakorlat */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                <Sparkles className="w-6 h-6 text-neon-orange" /> Mozgás és Művészet
              </h2>
              <p className="text-neon-orange font-bold text-lg italic">
                Mi is az a formagyakorlat (Forms)?
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Képzeld el a harcművészetek eleganciáját és a küzdőszportok erejét egyetlen, előre megkoreografált mozdulatsorban! A kick-box formagyakorlatban a versenyzők valós ellenfél nélkül mutatnak be ütések, rúgások, védések és egyéb technikák sorozatát, pont úgy, mintha egy harcban lennének.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Ez egy nemzetközileg elismert versenyszám a WAKO (World Association of Kickboxing Organizations) keretein belül, komoly szabályrendszerre és magas szintű követelményekkel. A cél nem az ellenfél legyőzése, hanem a technika, az erő, a sebesség, a ritmus és az összhang tökéletes bemutatása. A zsűri ezeket az elemeket értékeli a legapróbb részletekig.
              </p>
            </section>

            {/* Miért érdemes */}
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                <Flame className="w-6 h-6 text-neon-orange" /> Miért érdemes Kick-box formagyakorlattal foglalkozni?
              </h2>
              <p className="text-gray-400 text-sm">
                Ez a sportág sokkal többet ad, mint gondolnád! Nemcsak tested, de elméd is fejlődik általa:
              </p>

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

            {/* Kategóriák */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
                <Music className="w-6 h-6 text-neon-orange" /> Kategóriák a WAKO-ban
              </h2>
              <p className="text-gray-400 text-sm">
                A formagyakorlatok sokszínűek, és mindenki megtalálhatja a számára megfelelőt:
              </p>
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

          {/* Jobb oldali hasáb: Csatlakozás kártya */}
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
