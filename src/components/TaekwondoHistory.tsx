import { useEffect } from 'react';
import { Calendar, Shield, Swords, Flag, Award, Globe } from 'lucide-react';

export default function TaekwondoHistory() {
  
  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    document.title = "A Taekwon-do Története | Budapest Tigers SE";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Ismerd meg az ITF Taekwon-do történetét az ókori három koreai királyságtól a Hwarangdo elit harcosain át Choi Hong Hi nagymester modern alapításáig.');
  }, []);

  // Strukturált idővonal adatok a gyári szöveg alapján
  const timelineEvents = [
    {
      date: 'I. század (i.e. 57 – i.e. 18)',
      title: 'A Három Királyság Kora',
      icon: Shield,
      text: 'A koreai félszigeten három királyság alakult ki: Silla (i.e. 57), Koguryo (i.e. 37) és Baekje (i.e. 18). Ezek a királyságok évszázadokon keresztül harcban álltak egymással a félsziget feletti uralomért. A Koguryo dinasztiabeli uralkodói síremlékek (Muyong-chong és Kakchu-chong) falain máig fennmaradtak egymással küzdő férfiakat ábrázoló falfestmények.',
      image: '/history4.webp',
      imageAlt: 'Ókori koreai falfestmények és királyságok'
    },
    {
      date: 'VII. század (i.sz. 668)',
      title: 'A Hwarangdo és az Egyesítés',
      icon: Swords,
      text: 'Silla 24. királya létrehozta az első elit katonai alakulatot, a „Hwarangdo”-t, ahol magas színvonalú fegyveres és fegyver nélküli közelharcot oktattak, már ekkor kiemelkedő lábtechnikával. A szellemi hátteret Won Kwang buddhista tanító konfuciusi tanai adták. Végül Munmu királynak sikerült egyesítenie a koreai félszigetet Silla uralkodása alatt 668-ban.',
      image: null
    },
    {
      date: '935 – 1910',
      title: 'Koryo és Csoszon Korszakok',
      icon: Flag,
      text: 'Van Gon hadvezér újraegyesítette az országot 935-ben Koryo néven (innen ered a Korea elnevezés). 1392-ben a Li dinasztia vette át a hatalmat, az országot Csoszonnak nevezve. Ebben a korszakban a harcművészeteket elsősorban a hadseregben oktatták, de a köznép körében is éltek az olyan harcművészeti játékok, mint a Soo Bak és a Taek Kyon.',
      image: '/history2.webp',
      imageAlt: 'A Koryo és a Csoszon korszak harcművészetei'
    },
    {
      date: '1910 – 1945',
      title: 'Japán Megszállás és Külföldi Hatások',
      icon: Globe,
      text: 'Japán megszállta Koreát, megpróbálva eljapánosítani a kultúrát. A Japánban tanuló koreai fiatalok – köztük Choi Hong Hi (a Taekwon-do alapítója) és Choi Yong Sul (a Hapkido alapítója) – találkoztak az okinawai eredetű karatéval és japán stílusokkal. A második világháború végén, 1945-ben Korea felszabadult, de a 38. szélességi kör mentén északi és déli zónára szakadt.',
      image: '/history3.webp',
      imageAlt: 'A huszadik század és a modern korszak kezdete'
    },
    {
      date: '1955. április 11.',
      title: 'A Taekwon-do Hivatalos Születése',
      icon: Award,
      text: 'A koreai háborút (1950–1953) követően a különböző harcművészeti iskolák (Kwan-ok) megnyitották kapuikat Dél-Koreában. A széttagolt stílusokat igyekeztek nemzeti szövetségbe tömöríteni. Hosszú egyeztetések után, Choi Hong Hi tábornok vezetésével 1955. április 11-én fogadták el hivatalosan a „Taekwon-do” elnevezést, amely egy modern, tudományos alapokra helyezett harcművészetté vált.',
      image: null
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">A Taekwon-do Története</h1>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-20">
        
        {/* Bevezető szöveg blokk */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-16 backdrop-blur-sm">
          <p className="leading-relaxed text-gray-300">
            A <strong className="text-white">Taekwon-do</strong> szó új keletű, csak az 1950-es évektől kezdte használni <span className="text-neon-orange font-bold">Choi Hong Hi</span>, a Taekwon-do megalapítója. Bár maga a modern technikai rendszer a XX. század közepén kristályosodott ki a tudomány, a biomechanika és a fizika törvényszerűségei alapján, gyökerei és szellemisége több mint kétezer éves koreai történelmi múltba nyúlnak vissza.
          </p>
        </div>

        {/* VERTIKÁLIS IDŐVONAL */}
        <div className="relative border-l border-gray-800 ml-4 sm:ml-6 space-y-12 pb-8">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className="relative pl-8 sm:pl-10">
                
                {/* Idővonal ikon kör */}
                <div className="absolute -left-[17px] top-1 bg-black border-2 border-gray-800 text-neon-orange p-1.5 rounded-full z-10 shadow-md shadow-black">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Esemény kártya */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-neon-orange tracking-wider bg-neon-orange/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                    {event.date}
                  </span>
                  
                  <h3 className="text-xl font-black text-white mb-3 tracking-wide">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {event.text}
                  </p>

                  {/* Csatolt kép, ha van az adott mérföldkőhöz */}
                  {event.image && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-gray-850 bg-black/45 p-1.5">
                      <img 
                        src={event.image} 
                        alt={event.imageAlt || 'Történelmi kép'} 
                        className="w-full h-auto max-h-[350px] object-cover rounded-lg mx-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
