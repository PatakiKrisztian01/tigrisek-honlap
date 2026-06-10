import { Shield, MapPin, Users, Award, Scroll, ExternalLink } from 'lucide-react';

export default function SelfDefense() {
  return (
    <div className="min-h-screen bg-black pt-20">
      
      {/* HERO SZEKCIÓ - A kép a menü alatt kezdődik */}
      <div className="relative h-[300px] w-full flex items-center overflow-hidden border-b border-gray-800">
        <img 
          src="/selfdefense.webp" 
          alt="Budapest Tigers SE Önvédelem" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Sötétítés a kép tetején és alján */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-2">A XVIII. kerületieknek ingyenes</p>
          <h1 className="text-5xl font-black text-white flex items-center gap-4">
            ÖNVÉDELEM <Shield className="w-10 h-10 text-amber-400 hidden sm:block" />
          </h1>
        </div>
      </div>

      {/* Fő tartalom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
        
        {/* Bal és középső oszlop: Szöveges tartalom */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Civil önvédelem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
              <Users className="w-6 h-6 text-neon-orange" /> Civil önvédelem
            </h2>
            <p className="text-neon-orange font-bold text-sm">
              Célja a hatásos közelharc és "túlélő" technikák elsajátítása, melyek képesek elhárítani valós veszélyhelyzeteket.
            </p>
            <p className="text-gray-400 text-xs italic">
              Lásd pl. fojtásból, fogásból, leszorításból szabadulás,攻击 visszaverése szűk helyen zárt térben, védekezés például hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              A leggyakoribb képzési forma, a civileknek oktatott önvédelmi képzés, melynek során olyan technikákkal, mentális felkészítéssel, erőnléttel találkozik a gyakorló, melyeknek a segítségével hazánk jogrendszerének megfelelően tudja megvédeni magát, vagy mások testi épségét. Mivel abból indulunk ki, hogy jogos védelmi helyzetben fogja a gyakorló megvédeni magát, így az is szempont, hogy olyan rendszerrel ismertessük meg az oktatás során, mely hatásos és egyszerű, mégis sikeresen be lehet vele tartani az "arányosság elvét", melyet minden súlyos testi sértéssel végződött incidens után vizsgál a hatóság.
            </p>
          </section>

          {/* Hivatásosok képzése */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white flex items-center gap-2 border-b border-gray-800 pb-3 uppercase tracking-tight">
              <Award className="w-6 h-6 text-neon-orange" /> Hivatásos képzés
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              A hivatásosok munkájuk során fokozottan vannak veszélynek kitéve, kiemelten a rendőrök, katonák, tűzoltók, de a mentősök, biztonsági őrök szintén. Nekik is tudunk foglalkozáshoz szabott képzést kínálni, melynek nem csak technikai része van, hanem a mentális felkészítés is komoly szerephez jut. A szakma fortélyaihoz nem tudunk hozzátenni, de ahhoz igen, hogy gyakorlása közben lehetőleg ne legyen semmi bajod. <span className="text-neon-orange font-bold">Mindenkit hazavárnak!</span>
            </p>
          </section>

          {/* Ősi íratlan szabályok */}
          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2 text-amber-400 uppercase tracking-wider">
              <Scroll className="w-5 h-5" /> Ősi íratlan szabályok
            </h3>
            <ul className="space-y-3 font-medium text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-neon-orange">&bull;</span> inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
              <li className="flex gap-2"><span className="text-neon-orange">&bull;</span> inkább lefogni, visszatartani, mint megsebesíteni</li>
              <li className="flex gap-2"><span className="text-neon-orange">&bull;</span> inkább megsebesíteni, mint megnyomorítani</li>
              <li className="flex gap-2"><span className="text-neon-orange">&bull;</span> inkább megnyomorítani, mint megölni</li>
              <li className="flex gap-2"><span className="text-neon-orange">&bull;</span> inkább megölni, mint hogy téged öljön meg</li>
            </ul>
          </section>

        </div>

        {/* Jobb oszlop: Edzés infó és jelentkezési kártya */}
        <div className="space-y-6">
          <div className="bg-gray-900 border-2 border-neon-orange/40 rounded-2xl p-6 space-y-4 shadow-[0_0_15px_rgba(255,165,0,0.05)]">
            <div className="bg-neon-orange text-black font-black text-xs uppercase tracking-widest px-3 py-1 rounded-md inline-block">
              Lakossági Program 14 éves kortól!
            </div>
            <h3 className="text-2xl font-black text-white">Edzések</h3>
            
            <div className="space-y-3 text-sm text-gray-300 pt-2">
              {/* KATTINTHATÓ CÍM GOOGLE TÉRKÉPPEL */}
              <a 
                href="https://maps.google.com/?q=Tigers+Gym+Budapest+Havanna+utca+3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex gap-3 items-start p-2 rounded-xl border border-transparent hover:border-neon-orange/30 hover:bg-gray-800/40 transition-all duration-200"
              >
                <MapPin className="w-5 h-5 text-neon-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <p className="font-bold text-white flex items-center gap-1.5 group-hover:text-neon-orange transition-colors">
                    Tigers Gym <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-neon-orange" />
                  </p>
                  <p className="text-xs text-gray-400">1181 Budapest, Havanna u. 3.</p>
                </div>
              </a>

              <div className="border-t border-gray-800 pt-3">
                <p className="font-bold text-white">Minden Kedd 18:00 - 19:00 óráig</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Az Ingyenes <span className="text-neon-orange font-bold">"lendületbe hozzuk"</span> lakossági program keretén belül önvédelmi oktatást indít a Budapesti Tigrisek SE.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
