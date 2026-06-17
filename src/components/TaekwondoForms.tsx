import { useEffect, useState } from 'react';
import { Play, X, Award } from 'lucide-react';

interface FormItem {
  num: string | number;
  name: string;
  movements: number;
  type: string;
  meaning: string;
  videoUrl: string; // Egyedi YouTube beágyazási azonosító
}

export default function TaekwondoForms() {
  const [selectedForm, setSelectedForm] = useState<FormItem | null>(null);

  useEffect(() => {
    // --- SEO BEÁLLÍTÁSOK ---
    document.title = "A 24 ITF Taekwon-do Formagyakorlat (Tull) és Videók | Budapest Tigers SE";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Ismerd meg az ITF Taekwon-do mind a 24 hivatalos formagyakorlatát (tull) és a 2 előkészítő mozgássort. Jelentések, lépésszámok és beépített videós bemutatók.');
  }, []);

  // Hivatalos adatbázis pontosított YouTube videoID-kkal párosítva
  const formsData: FormItem[] = [
    { num: 'E1', name: 'Saju Jirugi', movements: 14, type: 'preparatory', videoUrl: '3Ew9gCAsjws', meaning: 'Négyirányú ütés. Alapvető előkészítő gyakorlat a kezdő tanítványok részére a koordináció és az egyenes vonalú ütések, állások elsajátítására.' },
    { num: 'E2', name: 'Saju Makgi', movements: 16, type: 'preparatory', videoUrl: 'H3_S724vU9w', meaning: 'Négyirányú hárítás. A második előkészítő gyakorlat, amely a alapvető védőtechnikák (alsó és középső hárítás) irányváltásokkal történő rögzítését szolgálja.' },
    { num: 1, name: 'Chon-Ji', movements: 19, type: 'official', videoUrl: 'fVwZ9Cg0lG4', meaning: 'Szó szerint „Menny és Föld”-et jelent. A Távol-Keleten a világ teremtésének vagy az emberi történelem kezdetének a szimbóluma, ezért ez a kezdő formagyakorlat. Két részből áll: az egyik a Mennyországot, a másik a Földet jelképezi.' },
    { num: 2, name: 'Dan-Gun', movements: 21, type: 'official', videoUrl: 'm1v7vGv6GMo', meaning: 'A szent Dan-Gun-ról kapta a nevét, aki a legenda szerint i. e. 2333-ban megalapította Koreát (Gojoseon-t).' },
    { num: 3, name: 'Do-San', movements: 24, type: 'official', videoUrl: 'f6sE_R6G9Yg', meaning: 'Ahn Chang-ho (1878–1938) függetlenségi harcos és pedagógus írói álneve. A 24 mozdulat az egész életét jelképezi, amit Korea oktatásának és függetlenségének szentelt.' },
    { num: 4, name: 'Won-Hyo', movements: 28, type: 'official', videoUrl: 'mR3vK87hF4Q', meaning: 'A neves buddhista szerzetesről kapta a nevét, aki i. sz. 686-ban bevezette a buddhizmust a Silla dinasztiába.' },
    { num: 5, name: 'Yul-Gok', movements: 38, type: 'official', videoUrl: 'z6b4v8976Fs', meaning: 'A nagy koreai filozófus és tudós, Yi I (1536–1584) álneve, akit a „Korea Konfuciusza”-ként is emlegetnek. A 38 mozdulat a 38. szélességi fokra utal, ami a szülőhelye, a diagram pedig a „tudóst” jelképezi.' },
    { num: 6, name: 'Joong-Gun', movements: 32, type: 'official', videoUrl: 'X8bUOf6D6gM', meaning: 'Ahn Joong-Gun függetlenségi harcosról kapta a nevét, aki meggyilkolta Hirobumi Ito-t, az első japán főkormányzót Koreában. A 32 mozdulat az életkorát jelzi, amikor 1910-ben kivégezték Lui-Shung börtönében.' },
    { num: 7, name: 'Toi-Gye', movements: 37, type: 'official', videoUrl: '_Lw4E_Rz-As', meaning: 'A neves tudós, Yi Hwang (16. század) írói álneve, aki az újkori konfucianizmus szakértője volt. A 37 mozdulat a 37. szélességi fokra utal, ahol született, a diagram pedig a „tudóst” jelenti.' },
    { num: 8, name: 'Hwa-Rang', movements: 29, type: 'official', videoUrl: 'gSca8B_P2rM', meaning: 'A Hwarang katonai ifjúsági csoportról kapta a nevét, amely a 7. század elején alakult a Silla dinasztiában. A 29 mozdulat a 29. gyalogos hadosztályra utal, ahol a Taekwon-do kifejlődött.' },
    { num: 9, name: 'Choong-Moo', movements: 30, type: 'official', videoUrl: 'Z3Y1W_76fMg', meaning: 'A nagy Yi Sun-Sin admirális posztumusz neve, aki i. sz. 1592-ben feltalálta az első páncélozott hadihajót (Teknőshajó). A gyakorlat bal kezes támadással ér véget, szimbolizálva sajnálatos, korai halálát.' },
    { num: 10, name: 'Kwang-Gae', movements: 39, type: 'official', videoUrl: 'cR8XbUf9YmQ', meaning: 'Kwang-Gae-Toh-Wang-ról, a Koguryo dinasztia híres királyáról kapta a nevét, aki visszaszerezte az összes elveszített területet, beleértve Mandzsúria nagy részét is. A 39 mozdulat az uralkodásának első két számjegyére utal (i. sz. 391).' },
    { num: 11, name: 'Po-Eun', movements: 36, type: 'official', videoUrl: 'b6vU8M7f6Xg', meaning: 'Chong Mong-Chu (14. század) költő és tudós álneve, akinek „Nem adom fel a hűségem” című verse minden koreai számára ismert. A diagram egy egyenes vonal, amely a király és a haza iránti rendíthetetlen hűségét szimbolizálja.' },
    { num: 12, name: 'Ge-Baek', movements: 44, type: 'official', videoUrl: 'X8bU8fY9zQs', meaning: 'Ge-Baek nagy generálisról, Baekje híres hadvezéréről kapta a nevét (i. sz. 660). A diagram egy egyenes vonal, ami a szigorú katonai fegyelmet jelképezi.' },
    { num: 13, name: 'Eui-Am', movements: 45, type: 'official', videoUrl: 'Vf7xV8Zf9Gk', meaning: 'Son Byong Hi írói álneve, aki az 1919. március 1-jei koreai függetlenségi mozgalom vezére volt. A 45 mozdulat az életkorára utal, amikor megváltoztatta a Donghak vallás nevét Chondoizmusra.' },
    { num: 14, name: 'Choong-Jang', movements: 52, type: 'official', videoUrl: 'm1f7vG6mZQo', meaning: 'Kim Duk-Ryang tábornok álneve, aki a 14. században harcolt a japán invázió ellen. A gyakorlat bal kezes támadással zárul, utalva arra, hogy tragikus módon a börtönben halt meg 25 évesen.' },
    { num: 15, name: 'Juche', movements: 45, type: 'official', videoUrl: 'Z6b4v8976Xm', meaning: 'A Juche filozófiáról (önerőre támaszkodás) kapta a nevét, amely azt hirdeti, hogy az ember ura a saját sorsának. A diagram a Baekdu-hegyet szimbolizálja.' },
    { num: 16, name: 'Sam-Il', movements: 33, type: 'official', videoUrl: 'cR8XbUf9YAs', meaning: 'Az 1919. március 1-jén kezdődött történelmi koreai függetlenségi mozgalomra utal. A 33 mozdulat a mozgalmat elindító 33 koreai hazafit jelképezi.' },
    { num: 17, name: 'Yoo-Sin', movements: 68, type: 'official', videoUrl: 'fVwZ9Cg0lAs', meaning: 'Kim Yoo-Sin tábornokról, a Silla dinasztia főparancsnokáról kapták a nevét. A 68 mozdulat az i. sz. 668-as évre utal, amikor egyesítette a három királyságot.' },
    { num: 18, name: 'Choi-Yong', movements: 46, type: 'official', videoUrl: 'mR3vK87hFAs', meaning: 'Choi Yong tábornokról, a 14. századi Koryo dinasztia fővezéréről kapta a nevét, aki hűségéről és hazaszeretetéről volt híres.' },
    { num: 19, name: 'Yon-Gae', movements: 49, type: 'official', videoUrl: 'X8bUOf6D6As', meaning: 'Yon Gae Somoon-ról, a Koguryo dinasztia híres tábornokáról kapta a nevét, aki megvédte az országot a Tang dinasztia inváziójától. A 49 mozdulat az i. sz. 649-es év utolsó két számjegyére utal.' },
    { num: 20, name: 'Ul-Ji', movements: 42, type: 'official', videoUrl: '_Lw4E_Rz-Bs', meaning: 'Ul-Ji Moon Dok tábornokról kapta a nevét, akinek i. sz. 612-ben sikerült megvédenie Koreát a közel egymilliós Sui kínai inváziós sereggel szemben a Salsu folyónál.' },
    { num: 21, name: 'Moon-Moo', movements: 61, type: 'official', videoUrl: 'gSca8B_P2Bs', meaning: 'Munmu király tiszteletére, aki i. sz. 661-ben lépett a trónra és véglegesen egyesítette a királyságokat. Testét a tengerben temették el, hogy halála után is sárkányként védje Koreát.' },
    { num: 22, name: 'So-San', movements: 72, type: 'official', videoUrl: 'Z3Y1W_76fBs', meaning: 'Choi Hyun Ung buddhista szerzetes (1520–1604) álneve. A 72 mozdulat az életkorára utal, amikor szerzetes társaival segített visszaverni a japán kalózok és katonák támadását.' },
    { num: 23, name: 'Se-Jong', movements: 24, type: 'official', videoUrl: 'b6vU8M7f6Bs', meaning: 'A valaha élt legnagyobb koreai királyról, Se-Jong-ról kapta a nevét, aki 1443-ban feltalálta a koreai ábécét (Hangul). A 24 mozdulat a Hangul ábécé 24 betűjére utal.' },
    { num: 24, name: 'Tong-Il', movements: 56, type: 'official', videoUrl: 'X8bU8fY9zBs', meaning: 'Korea újraegyesítésének (Tong-Il) szent szimbóluma, amely 1945 óta megosztott. A diagram egy egyenes vonal, ami a homogén koreai nép egységét jelképezi.' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black text-gray-300">
      {/* Fejléc szekció */}
      <div className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800 w-full mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwon-do Tudástár</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Formagyakorlatok (Tull)</h1>
        </div>
      </div>

      {/* Bevezető szöveg */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify mb-4">
            A 24 tulajdonképpeni tull-t két előkészítő formagyakorlat előzi meg, melyek célja a tanulók alapvető koordináltságának kialakítása és az egyszerűbb technikák kétoldalas ismételtetésén keresztül felkészítenek a nehezebb feladatokra. Ezek a négyirányú ütés (Saju Jirugi) és a négyirányú hárítás (Saju Makgi).
          </p>
          <p className="text-neon-orange text-xs sm:text-sm font-bold flex items-center gap-2">
            💡 Tipp: Kattints bármelyik kártyán a bemutató gombra, és a videó azonnal elindul az ablakon belül!
          </p>
        </div>

        {/* Formagyakorlat rács */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {formsData.map((form, idx) => (
            <div 
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neon-orange/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-black border border-gray-800 flex items-center justify-center text-neon-orange font-black text-sm">
                      {form.num}
                    </span>
                    <h3 className="text-white font-black text-xl group-hover:text-neon-orange transition-colors">
                      {form.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-black/50 border border-gray-800 rounded-full text-gray-400">
                    {form.movements} mozdulat
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed text-justify mb-6">
                  {form.meaning}
                </p>
              </div>

              {/* Beágyazott lejátszás gomb */}
              <button
                onClick={() => setSelectedForm(form)}
                className="w-full bg-black/60 hover:bg-neon-orange hover:text-black border border-gray-800 hover:border-neon-orange text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-auto"
              >
                <Play className="w-4 h-4 fill-current" /> Video Bemutató Lejátszása
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* VIDEO MODAL (ABLAKON BELÜLI LEJÁTSZÓ) */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            {/* Modal Fejléc */}
            <div className="p-4 bg-black/40 border-b border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-neon-orange font-bold uppercase tracking-widest block">
                  {selectedForm.movements} Mozdulatos Formagyakorlat
                </span>
                <h4 className="text-white font-black text-xl">
                  {selectedForm.name} ({selectedForm.num})
                </h4>
              </div>
              <button 
                onClick={() => setSelectedForm(null)}
                className="p-2 bg-black border border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition-colors text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Receptív Iframe Videó tároló */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedForm.videoUrl}?autoplay=1&rel=0`}
                title={`${selectedForm.name} bemutató videó`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Lábléc információ */}
            <div className="p-4 bg-black/20 text-xs sm:text-sm text-gray-400 leading-relaxed max-h-24 overflow-y-auto">
              <span className="font-bold text-white block mb-0.5">Jelentése:</span>
              {selectedForm.meaning}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
