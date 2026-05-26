import { Shield, Target, AlertTriangle, EyeOff, ShieldCheck } from 'lucide-react';

export default function SelfDefense() {
  return (
    <div className="min-h-screen pt-20">
      {/* Fejléc */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 text-sm font-bold tracking-wider uppercase mb-2">Szakágunk</p>
          <h1 className="text-5xl font-black text-white flex items-center gap-4">
            ÖNVÉDELEM <Shield className="w-10 h-10 text-amber-500 hidden sm:block" />
          </h1>
        </div>
      </div>

      {/* Fő tartalom */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Bevezető */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <p className="text-gray-300 leading-relaxed font-semibold text-lg">
            Napjainkban egyre több hír szól a nők elleni erőszakról, megaláztatásokról. Sok esetben az áldozatok nem tudják, mit tehetnek az ilyen helyzetek elkerülése vagy elhárítása érdekében.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            Tanfolyamaink célja, hogy elméleti és gyakorlati útmutatást nyújtsunk, amelyek segítségével csökkenthető az áldozattá válás esélye, és növelhető a személyes biztonságérzet.
          </p>
        </div>

        {/* Módszertan és pillérek */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3">
            <Target className="w-6 h-6 text-amber-500" /> A képzésünk főbb területei
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl space-y-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h3 className="text-white font-bold text-base">Megelőzés és felismerés</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A veszélyes szituációk időben történő felismerése, a környezet tudatos figyelése és a konfliktusok elkerülésének elméleti alapjai.
              </p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl space-y-3">
              <EyeOff className="w-6 h-6 text-amber-500" />
              <h3 className="text-white font-bold text-base">Pszichés felkészítés</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A támadás okozta sokk és félelem kezelése, a határozott fellépés és a verbális önvédelem (kommunikáció krízishelyzetben).
              </p>
            </div>

            <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl sm:col-span-2 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <h3 className="text-white font-bold text-base">Egyszerű, hatékony fizikai technikák</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Olyan könnyen elsajátítható, anatómiai és biomechanikai alapokon nyugvó szabadulások, ütések, rúgások és hárítások, amelyekhez nincs szükség rendkívüli fizikai erőre vagy előzetes sportmúltra. A technikák a reális, utcai helyzetekben is működnek.
              </p>
            </div>
          </div>
        </div>

        {/* Záró megjegyzés */}
        <div className="text-center text-gray-500 text-xs italic pt-4">
          A tanfolyamok indulásáról, az edzések pontos időpontjairól és a jelentkezési feltételekről érdeklődjön elérhetőségeinken!
        </div>

      </div>
    </div>
  );
}
