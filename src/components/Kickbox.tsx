import { Swords, Flame, Award, ShieldAlert, CheckCircle2 } from 'lucide-react';

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
            KICK-BOX <Swords className="w-10 h-10 text-neon-orange hidden sm:block" />
          </h1>
        </div>
      </div>

      {/* Fő tartalom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Ismertető és szabályrendszerek */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3">
                <Flame className="w-6 h-6 text-neon-orange" /> Mi az a Kick-box?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A kick-box egy modern küzdősport, amely az 1970-es évek elején alakult ki Amerikában és Japánban. Létrehozói a hagyományos harcművészetek (mint a Taekwon-do és a Karate) technikáit ötvözték a klasszikus ökölvívás elemeivel, létrehozva egy rendkívül dinamikus és hatékony rendszert.
              </p>
              <p className="text-gray-300 leading-relaxed">
                A Budapesti Tigrisek SE kick-box edzésein a hangsúly a robbanékonyságon, a precíz ütés- és rúgástechnikákon, valamint a kiemelkedő erőnlét fejlesztésén van, legyen szó hobbi szintű edzésről vagy versenyfelkészülésről.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3">
                <Award className="w-6 h-6 text-neon-orange" /> Versenyzési Szabályrendszerek
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Tatami */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/20 transition-all">
                  <h3 className="text-neon-orange font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-orange"></span>
                    Tatami Rendszerek
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li><strong className="text-white">Pointfighting:</strong> Megszakított küzdelem, minden tiszta találat után pontot ítélnek.</li>
                    <li><strong className="text-white">Light-contact:</strong> Folyamatos küzdelem mérsékelt erejű technikákkal, ahol a technikai fölény dönt.</li>
                    <li><strong className="text-white">Kick-light:</strong> Hasonló a light-contacthoz, de itt a comb rúgása is engedélyezett.</li>
                  </ul>
                </div>

                {/* Ring */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/20 transition-all">
                  <h3 className="text-amber-500 font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Ring Rendszerek
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li><strong className="text-white">Full-contact:</strong> Folyamatos küzdelem kiütésre (KO), találatok övvonal felett.</li>
                    <li><strong className="text-white">Low-kick:</strong> Teljes erejű küzdelem, ahol a combok rúgása is megengedett.</li>
                    <li><strong className="text-white">K1 szabályrendszer:</strong> A legkeményebb ág comb- és térdrúgásokkal, korlátozott fogással.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Jobb sáv */}
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-neon-orange" /> Felszerelés az edzésekhez
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" /> Boxkesztyű (10 vagy 12 oz)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" /> Fogvédő (kötelező)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" /> Lábszár- és lábfejvédő</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" /> Bandázs és szuszpenzor</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-neon-orange/30 rounded-2xl p-6 text-center space-y-4">
              <h3 className="text-lg font-bold text-white">Próbáld ki ingyen!</h3>
              <p className="text-gray-400 text-sm">Az első edzés nálunk teljesen ingyenes!</p>
              <button onClick={() => onNavigate('training')} className="w-full bg-neon-orange text-black font-black text-xs uppercase tracking-wider py-3 rounded-xl transition-all hover:bg-white">
                Edzésrend megtekintése
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
