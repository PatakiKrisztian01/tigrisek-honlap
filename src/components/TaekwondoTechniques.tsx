import { useEffect } from 'react';

export default function TaekwondoTechniques() {
  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    // Ez jelenik meg a böngésző fülén és a Google találati listáján címsorként
    document.title = "ITF Taekwon-do Mozgásanyagok és Harci Technikák | Budapest Tigers SE";
    
    // Ez a leírás jelenik meg a Google találat alatt
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Ismerd meg az ITF Taekwon-do 6 fő mozgásanyagát: bázistechnika, formagyakorlatok (tull), formai és szabad küzdelem, önvédelem, valamint a látványos töréstechnika.');
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Mozgásanyagok</h1>
        </div>
      </div>

      {/* Tartalom szekció */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-8">
          
          {/* 1. Bázistechnika */}
          <div className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">1.</span> Bázistechnika
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              A tradicionális harcművészetek alfája és omegája – így a Taekwon-do tanulásának is soha el nem hagyható alapja! 
              Időről időre, tudásszinttől függetlenül, az alapvető állásokat, kéz- és lábtechnikákat mindenkinek újra és újra gyakorolnia kell! 
              Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik. 
              Az intenzív gyakorlás és nagy ismétlésszám nyomán kialakul az erő fókuszálásának képessége, javul a koordináció, az egyensúly és a térérzék, fejlődik az általános mozgáskultúra. 
              Folyamatosan tökéletesednek: gyorsabbá, pontosabbá és hatásosabbá válnak az egyre magasabb szintű támadó és védekező technikák.
            </p>
          </div>

          {/* 2. Formagyakorlat */}
          <div className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">2.</span> Formagyakorlat (Versenyszám)
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify mb-4">
              Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok különböző irányokból támadó, képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. 
              A szimmetriára épülő mozgássorozatokban, pontosan kidolgozott koreográfia szerint ütések, hárítások, rúgások, ugró ütések és ugró rúgások logikus kombinációi váltják egymást. 
              A Taekwon-doban összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet (az élet állandó körforgását) szimbolizálják.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              Összesen 24 Tull (formagyakorlat) van az ITF Taekwon-dóban. Ezeket Choi Hong Hi nagymester tervezte és alkotta meg. 
              A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.
            </p>
          </div>

          {/* 3. Formai küzdelem */}
          <div className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">3.</span> Formai küzdelem
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              (Páros bázis, vagy küzdelmi helyzetgyakorlat). A bázis-, illetve formagyakorlatokból átemelt támadás- és védésminták, 
              szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével. Az idealizált gyakorlatokban 
              előre elképzelt és megtervezett harchelyzeteket imitálva: egy-kettő-három, vagy akár több lépésben folyik az egyre nehezebb kombinációk fokozatos elsajátítása. 
              A páros formai küzdelemben való jártasság lényegében a felkészítés utolsó állomása, mely után következhet a valódi szabad küzdelem.
            </p>
          </div>

          {/* 4. Szabad küzdelem */}
          <div className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">4.</span> Szabad küzdelem (Versenyszám)
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti – kötetlen, „éles” harchelyzetben. 
              A Taekwon-do gyakorlói a bázisok, formagyakorlatok és formai küzdelmek során beépült tudás birtokában próbálnak felülkerekedni most már kiszámíthatatlanul támadó ellenfelükön. 
              A siker vagy kudarc azonban nem kis mértékben lelki tényezők és pszichikai felkészültség függvénye! A technikák elsajátítása ugyanis a harcművész útnak csak egyik állomása. 
              A Taekwon-do tanainak 5. pontjában foglalt u.n. „Rettenthetetlen küzdőszellem” nélkül nincs és nem is lehet igazi győzelem!
            </p>
          </div>

          {/* 5. Önvédelem */}
          <div className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">5.</span> Önvédelem
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify mb-4">
              A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre és harcművész előképzettségre, 
              amivel a kezdők még nem rendelkeznek. Célja a hatásos közelharc- és „túlélő” technikák elsajátítása, melyek képesek elhárítani a valós veszélyhelyzeteket. 
              Lásd pl. fojtásból, fogásból, leszorításból szabadulás, támadás visszaverése szűk helyen, zárt térben, védekezés hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.
            </p>
            
            <div className="bg-black/40 border border-gray-800 rounded-xl p-4 mt-2">
              <p className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Ősi, íratlan szabályok:</p>
              <ul className="text-gray-300 space-y-1.5 ml-4 list-disc text-sm">
                <li>Inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                <li>Inkább lefogni, visszatartani, mint megsebesíteni</li>
                <li>Inkább megsebesíteni, mint megnyomorítani</li>
                <li>Inkább megnyomorítani, mint megölni</li>
                <li>Inkább megölni, mint hogy téged öljön meg</li>
              </ul>
            </div>
          </div>

          {/* 6. Töréstechnika */}
          <div className="last:pb-0">
            <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              <span className="text-neon-orange">6.</span> Töréstechnika (Versenyszám)
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              A Taekwon-dónak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni. 
              Napjainkra a küzdelmek már védőfelszerelésben, szigorú szabályok között folynak, ezért a Taekwon-dósok különböző szakítószilárdságú tárgyak törésekor mérhetik le egy adott technika tényleges pusztító erejét... 
              A törésekhez használt végtagfelületek edzését, keményítését már fehér övtől elkezdik, és azután soha nem is lehet abbahagyni! A magas szintre edzett testrészek a tudományos elvekre épülő technikával ötvözve lenyűgöző teljesítményekre lesznek képesek. 
              Így fejlődik pl. kezünk idővel életveszélyes „fegyverré”, mely nélkülözhetetlen a törésbemutatóknál, de egyúttal hatásos segítőnkké válik a valódi önvédelemben és közelharcban is.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
