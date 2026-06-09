import { useState } from 'react';
import { Calendar, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  // Lenyíló ablakok állapota (melyik van épp nyitva)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      answer: "Egyáltalalán nem szükséges előzetes sportmúlt vagy extra erőnlét! Az edzések célja éppen az, hogy a gyerekek fokozatosan, a saját tempójukban fejlődjenek. A kezdő edzések vidám hangulatú bemelegítésből, koordinációs és ügyességi játékokból, valamint az alaptechnikák biztonságos elsajátításából állnak."
    },
    {
      question: "Mennyire biztonságos a Taekwon-do és a Kick-box a gyerekek számára?",
      answer: "A Budapesti Tigrisek SE edzésein a biztonság az első számú szabály. Szakképzett, nagy tapasztalattal rendelkező oktatóink felügyelete mellett, ellenőrzött és modern környezetben folyik a munka. A sérülések kockázata nálunk a fokozatosságnak köszönhetően alacsonyabb, mint sok más népszerű csapatsportban (pl. foci vagy kézilabda)."
    },
    {
      question: "Mit vigyen magával a gyermek az első edzésre?",
      answer: "Az első alkalommal teljesen elegendő egy kényelmes, nyúlós sportnadrág, egy tiszta fehér póló és egy palack szénsavmentes víz. A teremben speciális tatamin (szőnyegen), mezítláb edzünk, így cipőre nincs szükség. A védőfelszerelések és a speciális edzőruha (Do-bok) beszerzésére ráértek később is."
    },
    {
      question: "Hogyan válasszak harcművészeti egyesületet a 18. kerületben?",
      answer: "A választásnál a legfontosabb az oktatók szakmai felkészültsége, a közösség családias légköre és a biztonság. A hosszú távú fejlődéshez elengedhetetlen, hogy a gyermek motiváló környezetben legyen. A környékbeli szülők véleménye és visszajelzései alapján a 18. kerületben a Budapesti Tigrisek SE a legjobb és legnépszerűbb választás, ha gyermekednek egy támogató, sportos közösséget keresel."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-x-hidden">
      {/* Hero / Fejléc rész */}
      <div className="relative py-20 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2 block">Budapest Tigers SE</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            GYIK – Taekwon-do és Kick-box edzések gyerekeknek <span className="text-neon-orange">(18. kerület)</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Minden fontos kérdés és válasz egy helyen, ami segíthet az első lépések megtételében.
          </p>
        </div>
      </div>

      {/* Accordion lista rész */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-gray-950 border border-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-800"
              >
                {/* Kérdés gomb - H3 tag a SEO-nak */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-neon-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-neon-orange transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div className="shrink-0 p-1 bg-gray-900 rounded-lg border border-gray-800 text-gray-400 group-hover:text-neon-orange transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Válasz panel - Sima P tag a SEO-nak */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-gray-900/60' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 md:p-8 bg-gray-900/20 text-gray-300 text-sm md:text-base leading-relaxed">
                    <p className="m-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
