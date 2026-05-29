import { ArrowRight, Shield, Heart, Smile, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import type { Section } from '../App';

interface OvisTkdProps {
  onNavigate: (section: Section) => void;
}

export default function OvisTkd({ onNavigate }: OvisTkdProps) {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      
      {/* Mini Hero rész az Ovis edzésekhez */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-950 to-black border-b border-gray-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-xs sm:text-sm font-semibold tracking-wider uppercase">Tigris Kölykök (4–7 évesek)</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Ovis <span className="text-neon-orange">Taekwon-do</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Játékos mozgásfejlesztés, fegyelem és önvédelem a legkisebbeknek biztonságos, támogató környezetben.
          </p>
        </div>
      </section>

      {/* Fő tartalom és részletek */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bal oldal: Leírás és előnyök */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight border-b border-gray-800 pb-3">
                Miért hasznos a Taekwon-do már óvodás korban?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A gyermekek mozgásigénye ebben a korban a legnagyobb. Az ovis Taekwon-do programunkat kifejezetten úgy alakítottuk ki, hogy a harcművészet alapjait játékos formában, a kicsik életkori sajátosságaihoz igazítva adjuk át.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Az edzések során nagy hangsúlyt fektetünk a koordináció, az egyensúlyérzék és a rugalmasság fejlesztésére, miközben észrevétlenül sajátítják el a tiszteletet, a figyelmet és a csoportos fegyelmet.
              </p>
            </div>

            {/* Pillérek / Előnyök ikonokkal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-5 flex items-start gap-4">
                <div className="bg-neon-orange/10 p-2.5 rounded-lg text-neon-orange shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Játékos fejlesztés</h3>
                  <p className="text-gray-400 text-sm">A mozgás örömét koordinációs és ügyességi játékokon keresztül tapasztalják meg.</p>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-5 flex items-start gap-4">
                <div className="bg-neon-orange/10 p-2.5 rounded-lg text-neon-orange shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Magabiztosság & Fegyelem</h3>
                  <p className="text-gray-400 text-sm">Megtanulják a saját határaikat, az egymásra figyelést és a kölcsönös tiszteletet.</p>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-5 flex items-start gap-4">
                <div className="bg-neon-orange/10 p-2.5 rounded-lg text-neon-orange shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Iskolai előkészítés</h3>
                  <p className="text-gray-400 text-sm">A koncentrációs feladatok fejlesztik a fókuszt, ami hatalmas előny lesz az iskolakezdésnél.</p>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-5 flex items-start gap-4">
                <div className="bg-neon-orange/10 p-2.5 rounded-lg text-neon-orange shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Közösségépítés</h3>
                  <p className="text-gray-400 text-sm">Segítőkész, barátságos csapat, ahol életre szóló barátságok köttetnek.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jobb oldal: Edzésinfók kártya (Helyszín, Időpont) */}
          <div className="lg:col-span-4 bg-gray-900 border border-neon-orange/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-orange" />
            
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-6">Edzés Információk</h3>
            
            <div className="space-y-6">
              {/* Időpontok */}
              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Időpontok</h4>
                  <p className="text-gray-300 text-sm mt-1">Hétfő és Csütörtök</p>
                  <p className="text-neon-orange font-bold text-sm">16:30 – 17:30</p>
                </div>
              </div>

              {/* Helyszín */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Helyszín</h4>
                  <p className="text-gray-300 text-sm mt-1 font-semibold">Kondor Béla Általános Iskola</p>
                  <p className="text-gray-400 text-xs">tornaterme</p>
                  <p className="text-gray-400 text-xs mt-1">1181 Budapest, Kondor Béla sétány 7.</p>
                </div>
              </div>

              {/* Kapcsolat */}
              <div className="flex gap-4 items-start pt-4 border-t border-gray-800">
                <Phone className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Érdeklődés</h4>
                  <p className="text-gray-300 text-sm mt-1">Pataki Krisztián (VI. Dan)</p>
                  <a href="tel:+36709415992" className="text-neon-orange font-bold text-sm block hover:underline mt-0.5">+36-70-941-5992</a>
                </div>
              </div>
            </div>

            {/* CTA Gomb */}
            <div className="mt-8">
              <button
                onClick={() => onNavigate('training')}
                className="w-full group flex items-center justify-center gap-2 bg-neon-orange hover:bg-orange-600 text-black py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-neon-orange/20"
              >
                Próbaedzés jelentkezés
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Extra tipp szülőknek */}
      <section className="py-12 bg-neon-orange/5 border-t border-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-white font-bold text-lg mb-2">Mit hozzon magával a gyerkőc az első alkalommal?</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nincs szükség speciális felszerelésre! Első edzésekre teljesen tökéletes egy kényelmes **póló és szabadidőnadrág**. Az edzések mezítláb (vagy igény szerint tiszta talpú váltócipőben/zokniban) folynak. Egy kis üveg szénsavmentes vizet érdemes bekészíteni.
          </p>
        </div>
      </section>
    </div>
  );
}
