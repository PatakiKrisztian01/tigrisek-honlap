import { ArrowRight, Clock, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import type { Section } from '../App';

interface OvisTkdProps {
  onNavigate: (section: Section) => void;
}

export default function OvisTkd({ onNavigate }: OvisTkdProps) {
  return (
    <div className="bg-black text-gray-100 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cím és Mini Hero */}
        <div className="text-center lg:text-left mb-12 border-b border-gray-900 pb-8">
          <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-xs sm:text-sm font-semibold tracking-wider uppercase">Budapest Tigers SE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Ovis <span className="text-neon-orange">Taekwon-do</span>
          </h1>
        </div>

        {/* Fő elrendezés: Balra a szövegek, Jobbra az infó blokk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* BAL OLDAL - A te szöveged pontosan */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Miért van szükség a sportra */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight text-neon-orange">
                MIÉRT VAN SZÜKSÉG A SPORTRA?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Sajnos napjainkban felnőttek és gyerekek egyaránt kevesebbet mozognak, mint amennyire szükségük lenne. A mozgáshiány pedig testünket, lelkünket egyaránt megviseli. Még gondos étkezés mellett is gyakori jelenség az elhízás, egyre nehezebb még a kisebb erőfeszítések végrehajtása is. A gyermekeknek szinte minden nap kell sportolniuk, mozogniuk. A kisiskolásoknál közvetlenül kimutatható a tanulás eredményessége, és a rendszeres aktív testmozgás közötti kapcsolat. Például az írástanulással összefüggésbe hozható a gyermekek iskoláskor előtti testnevelése, mert az írás kötött testhelyzetet igényel, aminek fenntartásához megfelelő izmok fejlettsége szükséges.
              </p>
            </div>

            {/* Vezetői célkitűzés */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight text-neon-orange">
                VEZETŐI CÉLKITŰZÉSEM
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                hogy az óvodából kikerülő gyermekek jobban megfeleljenek az iskolai elvárásoknak, amelyhez a Taekwon-do széleskörű képességfejlesztő mozgásanyaga remek eszközül szolgál. ( A Taekwon-do anyaga nem egyoldalúan fejleszti a képességeket, hanem minden izomcsoportot megmozgat.) Például az egymástól független kézhasználat dominál, ami megint csak az írástanulásnál előnyös, mert az író kéz dinamikus és a támaszkodó kéz statikus koordinációs parancsait kell végrehajtania.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Foglalkozás során a gyerekek utasításokat hajtanak végre, még ha ezek az utasítások túlnyomórészt játékos feladatokra vonatkoznak is. Ez alatt pedig fizikailag, mind pszichésen kapnak egyfajta alapot, amellyel azután könnyebben "útnak indulhatnak" A foglalkozásokon nagyon sok játékos feladaton keresztül javul a mozgáskoordinációjuk, figyelemösszpontosító képességük, miközben újabb és újabb sikerélményhez jutnak, és időnként persze a kudarcokat is megízlelik. Minden későbbi sporttevékenység alapjául szolgál.
              </p>
            </div>

            {/* A Taekwon-do specialitása & Hiszünk abban */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight text-neon-orange mb-3">
                  A Taekwon-do specialitása
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  hogy a hagyományos óvodai foglalkozásokkal szemben, szellemi lelki erőt is ad. Megtanulják tisztelni társaikat, partnereiket, nevelőiket. Egy olyan közösségben élnek ahol nem divat a hanyagság, káromkodás vagy később a tiszteletlenség.
                </p>
              </div>

              {/* Hitvallás pontok */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm sm:text-base"><span className="text-white font-bold">Hiszünk abban,</span> - hogy az óvodáskorú gyermekekben lévő mozgásvágyat nem elfojtani, hanem kihasználni kell!</p>
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm sm:text-base"><span className="text-white font-bold">Hiszünk abban,</span> - hogy a mozgáskultúra javítása nemcsak a testi fejlődést segíti, hanem befolyást gyakorol a későbbi szellemi érettségre is!</p>
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm sm:text-base"><span className="text-white font-bold">Hiszünk abban,</span> - hogy a közösségben begyűjtött pozitív élmények meghatározzák a későbbi közösségi magatartást!</p>
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm sm:text-base"><span className="text-white font-bold">Hiszünk abban,</span> - hogy a hagyományaink ismerete bölcsebbé tesz!</p>
                </div>
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm sm:text-base"><span className="text-white font-bold">Hiszünk a szemléltető, gyakorlatias, játszva tanulás erejében!</span></p>
                </div>
              </div>
            </div>

            {/* Egyéb információk blokk */}
            <div className="bg-gray-900/20 border border-gray-800/60 rounded-2xl p-6 space-y-3">
              <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <Star className="w-4 h-4 text-neon-orange" /> Egyéb információk
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                csoportjainkba folyamatosan várjuk a Taekwon-do iránt érdeklődő gyerekeket, felnőtteket. Óvodás edzéseinken játékos formában kezdjük oktatni a Taekwon-do alapjait, a sport, sportmozgások szeretetére neveljük a gyerekeket. Gyermek csoportunkban folytatódik a Taekwondo speciális mozgásanyagának oktatása, bekapcsolódnak a gyerekek a versenyzésbe, övvizsgákon vesznek részt. Ifjúsági és felnőtt, illetve versenyző csoportjainkban folytatjuk a gyerekeknél elkezdett munkát. Szabadidős csoportunkba a mozgás öröméért járnak felnőtt sportolóink, miközben ismerkednek a taekwondo technikáival, önvédelmet tanulnak. Mi ezért a változatosságáért szeretjük a Taekwon-dot, kortól függetlenül -óvodástól felnőttig- mindenki megtalálhatja benne a saját sportját.
              </p>
            </div>

          </div>

          {/* JOBB OLDAL - Pontos edzésadatok kártya */}
          <div className="lg:col-span-4 bg-gray-900 border border-neon-orange/30 rounded-2xl p-6 shadow-xl relative sticky top-28">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-orange" />
            
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-6">Edzések</h3>
            
            <div className="space-y-6">
              {/* Életkor */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Korosztály</h4>
                <p className="text-neon-orange font-black text-xl uppercase">4 éves kortól</p>
              </div>

              {/* Időpontok */}
              <div className="flex gap-3 items-start border-t border-gray-800 pt-4">
                <Clock className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Időpontok</h4>
                  <p className="text-white font-bold text-sm mt-1">Kedd: 16:30 - 17:30-ig</p>
                  <p className="text-white font-bold text-sm">Csütörtök: 16:30 - 17:30-ig</p>
                </div>
              </div>

              {/* Helyszín */}
              <div className="flex gap-3 items-start border-t border-gray-800 pt-4">
                <MapPin className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Helyszín</h4>
                  <p className="text-white font-bold text-sm mt-1">Kondor Béla Művelődési ház</p>
                </div>
              </div>

              {/* Kapcsolat */}
              <div className="flex gap-3 items-start border-t border-gray-800 pt-4">
                <Phone className="w-5 h-5 text-neon-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Kapcsolat</h4>
                  <p className="text-white font-bold text-sm mt-1">Pataki Krisztián</p>
                  <a href="tel:+36709415992" className="text-neon-orange font-bold text-base block hover:underline mt-0.5">06/70-941-5992</a>
                </div>
              </div>
            </div>

            {/* Jelentkezés gomb */}
            <div className="mt-8">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full group flex items-center justify-center gap-2 bg-neon-orange hover:bg-orange-600 text-black py-3 rounded-xl font-bold text-sm transition-all duration-200"
              >
                Kapcsolatfelvétel
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
