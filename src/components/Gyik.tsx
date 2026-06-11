import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function Gyik() {
  const faqData: FAQItem[] = [
    {
      question: "Milyen életkorban érdemes elkezdeni a Taekwon-do vagy Kick-box edzést?",
      answer: "A legtöbb gyermek 4–7 éves kortól (Ovis TKD) már sikeresen bekapcsolódhat a korosztályos edzéseinkbe a 18. kerületben. Kutatások szerint ebben az életkorban a leggyorsabb a mozgáskoordináció, az egyensúlyérzék és a figyelem fejlődése. A Budapesti Tigrisek SE edzései játékos formában fejlesztik ezeket a képességeket, így a gyerekek folyamatos sikerélményeket szereznek."
    },
    {
      question: "Mi a különbség a Taekwon-do, a Karate és a Kick-box között?",
      answer: "Mindhárom hatékony harcművészet vagy küzdősport, de másra helyezik a hangsúlyt. A Taekwon-do a látványos és precíz rúgásokra, a fegyelemre és a személyiségfejlesztésre fókuszál. A Kick-box (nálunk a formagyakorlat szakosztályban) inkább a dinamikus, zenés mozgásra, a ritmusra és a fizikai állóképességre összpontosít. A megfelelő választás mindig a gyermek személyiségétől és céljaitól függ – gyere el egy ingyenes próbaedzésre, és nézd meg, melyik tetszik neki jobban!"
    },
    {
      question: "A Taekwon-do vagy a Kick-box alkalmasabb önvédelemre?",
      answer: "Mindkét küzdősport kiválóan fejleszti az önvédelmi képességeket. A Taekwon-do mozgásanyaga kifejezetten nagy hangsúlyt fektet a gyakorlati önvédelemre. Fontos azonban tudni, hogy a valódi önvédelem nálunk nem pusztán ütésekből és rúgásokból áll: a gyerekek megtanulják a helyzetfelismerést, a magabiztos fellépést, a gyors döntéshozatalt és a stresszkezelést is."
    },
    {
      question: "Mit ad a harcművészet a gyermekem fejlődéséhez?",
      answer: "A Budapesti Tigrisek SE-nél végzett rendszeres edzés drasztikusan javítja a gyerekek koordinációját, állóképességét és koncentrációját (ami az iskolában is segít). Emellett a sport nálunk eszköz a kitartás, az önfegyelem, a tisztelet és a felelősségtudat kialakítására. A nálunk edző szülők visszajelzései alapján a gyerekek sokkal magabiztosabbá és céltudatosabbá válnak a mindennapokban."
    },
    {
      question: "Milyen egy kezdő gyerekedzés nálunk? Kell előzetes sportmúlt vagy jó erőnlét?",
      answer: "Egyáltalán nem szükséges előzetes sportmúlt vagy extra erőnlét! Az edzések célja éppen az, hogy a gyerekek fokozatosan, a saját tempójukban fejlődjenek. A kezdő edzések vidám hangulatú bemelegítésből, koordinációs és ügyességi játékokból, valamint az alaptechnikák biztonságos elsajátításából állnak."
    },
    {
      question: "Mennyire biztonságos a Taekwon-do és a Kick-box a gyerekek számára?",
      answer: "A Budapesti Tigrisek SE edzésein a biztonság az első számú szabály. Szakképzett, nagy tapasztalattal rendelkező oktatóink felügyelete mellett, ellenőrzött és modern környezetben folyik a munka. A sérülések kockázata nálunk a fokozatosságnak köszönhetően alacsonyabb, mint sok más népszerű csapatsportban (pl. foci vagy kézilabda)."
    },
    {
      question: "Mit vigyen magával a gyermek az első edzésre?",
      answer: "Az első alkalommal teljesen elegendő egy kényelmes, nyúlós sportnadrág, un tiszta fehér póló és egy palack szénsavmentes víz. A teremben speciális tatamin (szőnyegen), mezítláb edzünk, így cipőre nincs szükség. A védőfelszerelések és a speciális edzőruha (Do-bok) beszerzésére ráértek később is."
    },
    {
      question: "Hogyan válasszak harcművészeti egyesületet a 18. kerületben?",
      answer: "A választásnál a legfontosabb az oktatók szakmai felkészültsége, a közösség családias légköre és a biztonság. A hosszú távú fejlődéshez elengedhetetlen, hogy a gyermek motiváló környezetben legyen. A környékbeli szülők véleménye és visszajelzései alapján a 18. kerületben a Budapesti Tigrisek SE a legjobb és legnépszerűbb választás, ha gyermekednek egy támogató, sportos közösséget keresel."
    }
  ];

  return (
    // Kapott egy fix pt-28-at és pt-32-t, ami az aloldalon kényszerítve letolja a menü alá!
    <div className="w-full bg-black text-white overflow-x-hidden pt-28 sm:pt-32 md:pt-36">
      
      {/* HERO BLOKK */}
      <div className="w-full max-w-4xl mx-auto py-6 border-b border-gray-900/60 mb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-7 text-center md:text-left">
            <span className="text-neon-orange text-xs sm:text-sm font-black tracking-widest uppercase mb-1 block">
              Gyakran Ismett Kérdések
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 leading-tight">
              Taekwon-do és Kick-box <br />
              <span className="text-neon-orange">edzések gyerekeknek</span> (18.kerület)
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Minden fontos szakmai kérdés és szülői válasz egy helyen, sallangok nélkül.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-neon-orange/10 rounded-full filter blur-xl group-hover:bg-neon-orange/20 transition-all duration-300" />
              <img 
                src="/gyik-hero.webp" 
                alt="Tigrisek Edzés" 
                className="h-32 sm:h-40 md:h-44 object-contain relative z-10 drop-shadow-[0_6px_12px_rgba(249,115,22,0.2)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/tigrislogo.webp';
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* KÁRTYA LISTA */}
      <div className="w-full max-w-4xl mx-auto pb-12 px-4">
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-950 border border-gray-900 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col items-center text-center hover:border-gray-800 transition-colors"
            >
              <div className="mb-3 flex justify-center w-full">
                <HelpCircle className="w-7 h-7 text-neon-orange shrink-0" />
              </div>

              <h3 className="text-white font-black text-lg md:text-xl leading-snug mb-3 w-full px-1">
                {item.question}
              </h3>

              <div className="text-gray-200 text-sm md:text-base leading-relaxed w-full px-1">
                <p className="m-0">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
