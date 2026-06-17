import { useEffect } from 'react';
import { Award, BookOpen, Star, Calendar, Quote } from 'lucide-react';

export default function TaekwondoFounder() {
  
  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    document.title = "Choi Hong Hi Tábornok, a Taekwon-do Alapítója | Budapest Tigers SE";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Ismerd meg Choi Hong Hi tábornok (1918–2002) életútját, aki tudományos alapokra helyezve megalkotta és világszerte elterjesztette az ITF Taekwon-do harcművészetet.');
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Choi Hong Hi Nagymester</h1>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-20 space-y-12">
        
        {/* FŐ PROFIL BLOKK */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-64 bg-black border border-gray-800 rounded-xl overflow-hidden flex-shrink-0 p-1">
            {/* Az alapító képe */}
            <img 
              src="/founder.webp" 
              alt="Choi Hong Hi tábornok, a Taekwon-do megalapítója" 
              className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-neon-orange bg-neon-orange/10 px-2.5 py-1 rounded-md">
              1918. november 9. – 2002. június 15.
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
              A Taekwon-do Megalapítója
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
              Choi Hong Hi tábornok a modern harcművészetek történetének egyik legmeghatározóbb alakja. Nem csupán egy stílust hozott létre, hanem a fizika és a biomechanika törvényeit felhasználva egy olyan tudományos önvédelmi rendszert alkotott meg, amely mára a világ egyik legnépszerűbb harcművészetévé vált.
            </p>
          </div>
        </div>

        {/* IDÉZET BLOKK */}
        <div className="relative bg-gradient-to-r from-gray-950 to-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 italic">
          <Quote className="absolute right-6 top-6 w-12 h-12 text-gray-850 opacity-20 pointer-events-none" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 relative z-10">
            „A Taekwon-do célja nem az agresszió, hanem a béke és az igazságosság előmozdítása, valamint a test és a szellem tökéletes harmóniájának elérése.”
          </p>
          <span className="text-sm font-bold text-white block not-italic">— Choi Hong Hi</span>
        </div>

        {/* ÉLETÚT ÉS MUNKÁSSÁG */}
        <div className="space-y-6">
          <h3 className="text-white font-black text-2xl flex items-center gap-3 px-2">
            <Award className="w-6 h-6 text-neon-orange" /> Életrajzi Áttekintés
          </h3>
          
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-orange"></span> A kezdetek és a harci gyökerek
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
                Choi Hong Hi Észak-Koreában, Hwadae-ben született. Fiatal korában gyenge fizikumú gyermek volt, ami arra késztette szüleit, hogy kalligráfiát taníttassanak vele. Tanára, Han Il Dong, aki titokban a hagyományos koreai <strong className="text-white">Taek Kyon</strong> mestere volt, látva a fiú gyengeségét, elkezdte edzeni őt. Később, amikor Japánba utazott egyetemre, elmélyült a <strong className="text-white">Shotokan Karate</strong> stílusban is, ahol megszerezte a fekete övet.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-orange"></span> Katonai karrier és az Oh Do Kwan
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
                A második világháború alatt besorozták a japán hadseregbe, de részt vett a koreai függetlenségi mozgalomban, amiért börtönbe zárták. A börtönévek alatt is folyamatosan fejlesztette harcművészeti tudását. A háború után a frissen alakuló dél-koreai hadsereg egyik alapító tisztje lett, majd tábornoki rangot kapott. 1953-ban megalapította az <strong className="text-white">Oh Do Kwan</strong>-t (A saját utam iskolája), ahol megkezdte a katonák rendszerszintű harcművészeti képzését.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-orange"></span> A Nemzetközi Taekwon-do Szövetség (ITF)
              </h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
                Miután 1955-ben hivatalosan elfogadták az általa javasolt Taekwon-do nevet, elhivatottan dolgozott a stílus nemzetközi elterjesztésén. <strong className="text-white">1966. március 22-én</strong> megalapította az International Taekwon-do Federation-t (ITF) Szöulban, kilenc alapító ország (köztük Vietnam, Malajzia, Szingapúr és az Egyesült Államok) részvételével. Később politikai okokból Kanadába emigrált, és onnan irányította a szövetséget haláláig.
              </p>
            </div>
          </div>
        </div>

        {/* ÖRÖKSÉG BLOKK */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-neon-orange" /> A Taekwon-do Enciklopédia
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
            A tábornok legnagyobb hagyatéka a technikai precizitás dokumentálása volt. Megírta a **15 kötetes Taekwon-do Enciklopédiát**, amely hajszálpontosan bemutatja mind a 24 formagyakorlatot, a több ezer alaptechnikát, anatómiai pontot és a harcművészet filozófiai hátterét. Ez a monumentális mű ma is az ITF Taekwon-do „bibliájának” számít világszerte.
          </p>
        </div>

      </main>
    </div>
  );
}
