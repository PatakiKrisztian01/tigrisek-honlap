import { Clock, MapPin, Baby, Shield, Mail, Phone, ExternalLink, Quote, Award } from 'lucide-react';
import Gyik from './Gyik';

// Frissített edzői tömb a pontos mottókkal
const trainers = [
  { 
    name: 'Pataki Krisztián', 
    rank: 'VI.dan', 
    role: 'Klubvezető elnök', 
    image: '/patakikrisztian.webp',
    motto: 'Amit a cél elérésével kapunk közel sem olyan fontos, mint amivé válunk, amíg azt elérjük.'
  },
  { 
    name: 'Leiti Edmond', 
    rank: 'IV.dan', 
    role: '', 
    image: '/leitiedmond.webp',
    motto: 'A siker nem fogja lejjebb adni. Nekünk kell felemelkedni hozzá.'
  },
  { 
    name: 'Patakiné Zs. Anikó', 
    rank: 'III.dan', 
    role: 'Klubvezető helyettes', 
    image: '/patakinezsaniko.webp',
    motto: 'Azok emelik fel, és mozdítják előre a világot, akik többet biztatnak, mint kritizálnak.'
  },
  { 
    name: 'Kiss Viktor', 
    rank: 'III.dan', 
    role: '', 
    image: '/kissviktor.webp',
    motto: 'Gyakorold azt, amit már tudsz, és ez segíteni fog felismerni azt, amit még nem tudsz.'
  },
  { 
    name: 'Höflinger Zsolt', 
    rank: 'II.dan', 
    role: '', 
    image: '/hoflingerzsolt.webp',
    motto: 'Oda kell figyelni ellenségeinkre, mert ők az elsők, akik fölfedezik hibáinkat!'
  },
  { 
    name: 'Kardos Zsolt', 
    rank: 'II.dan', 
    role: '', 
    image: '/kardoszsolt.webp',
    motto: 'Az életed végtelenül leegyszerűsödik, ha kéred és elfogadod a segítséget hozzá.'
  },
];

function LocationCard({ name, address, mapUrl, accentColor }: { name?: string, address: string, mapUrl: string, accentColor: string }) {
  const iconColor = accentColor === 'emerald' ? 'text-emerald-400' : accentColor === 'amber' ? 'text-amber-400' : 'text-neon-orange';
  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-neon-orange hover:scale-[1.03] hover:shadow-lg hover:shadow-neon-orange/30 transition-all duration-200 cursor-pointer">
      <MapPin className={`w-4 h-4 ${iconColor} flex-shrink-0 mt-0.5 group-hover:text-neon-orange transition-colors`} />
      <div className="flex-1 min-w-0">
        {name && <p className="text-gray-300 text-sm font-bold">{name}</p>}
        <p className="text-gray-400 text-sm">{address}</p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-neon-orange flex-shrink-0 mt-0.5 transition-colors" />
    </a>
  );
}

export default function Training() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csatlakozz</p>
          <h1 className="text-5xl font-black text-white">Edzések</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-black text-white mb-2">Taekwon-do</h2>
          <p className="text-gray-400 text-sm font-bold mb-4">(látványos koreai harcművészet)</p>
          <p className="text-gray-300 leading-relaxed mb-4">Jó hangulat, versenyek, övvizsgák, edzőtáborok, aktív klubélet.</p>
          <p className="text-gray-300 leading-relaxed">
            Örömmel tudatom <strong className="text-white">VELED</strong>, hogy kezdő taekwon-do edzés indul, ahonnan már csak <strong className="text-neon-orange">TE</strong> hiányzol.
          </p>
        </div>

        {/* ÁTALAKÍTOTT EDZŐK SZEKCIÓ: 1 SOR = 1 EMBER, FOTÓ JOBB OLDALON, CSILLOGÓ ARANY KERET */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Edzőink & Mestereink</h2>
          <div className="flex flex-col gap-8">
            {trainers.map((t) => {
              const vanKep = t.image && t.image.trim() !== "";
              return (
                <div 
                  key={t.name} 
                  className="bg-gradient-to-l from-gray-950 via-gray-950 to-gray-900 border border-gray-800/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group relative"
                >
                  
                  {/* BAL OLDAL: SZÖVEGES INFÓK & MOTTO */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center order-2 md:order-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                        {t.name}
                      </h3>
                      <div className="h-[2px] w-12 bg-neon-orange mt-1 mb-2 group-hover:w-24 group-hover:bg-amber-500 transition-all duration-500" />
                      <div className="flex items-center gap-2">
                        <span className="text-neon-orange font-black text-xs uppercase tracking-widest bg-neon-orange/10 px-2 py-0.5 rounded border border-neon-orange/20">
                          {t.rank}
                        </span>
                        {t.role && (
                          <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                            • {t.role}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* IDÉZET / MOTTO BLOKK */}
                    {t.motto && (
                      <div className="relative bg-black/40 border-l-2 border-amber-500/60 p-4 rounded-r-xl mt-2 max-w-2xl">
                        <Quote size={20} className="absolute -top-2.5 right-2 text-gray-800/30 pointer-events-none transform rotate-180" />
                        <p className="text-xs sm:text-sm italic text-gray-300 font-medium leading-relaxed tracking-wide">
                          „{t.motto}”
                        </p>
                      </div>
                    )}
                  </div>

                  {/* JOBB OLDAL: TELJES MAGASSÁGÚ KÉP VASTAG CSILLOGÓ ARANY KERETBEN */}
                  <div className="w-full md:w-[260px] bg-black flex-shrink-0 flex items-stretch order-1 md:order-2 p-2 md:p-0">
                    <div className="relative w-full h-full min-h-[240px] md:min-h-full p-[4px] bg-gradient-to-br from-amber-400 via-yellow-600 to-amber-700 shadow-[0_0_15px_rgba(217,119,6,0.1)] group-hover:shadow-[0_0_35px_rgba(217,119,6,0.45)] group-hover:from-yellow-400 group-hover:via-amber-400 group-hover:to-yellow-200 transition-all duration-700 md:rounded-r-3xl md:rounded-l-none rounded-2xl overflow-hidden flex-1">
                      
                      <div className="w-full h-full md:rounded-r-[22px] md:rounded-l-none rounded-[18px] overflow-hidden bg-gray-950 flex items-center justify-center relative">
                        {vanKep ? (
                          <img 
                            src={t.image} 
                            alt={t.name}
                            className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-950 to-gray-900">
                            <Award size={32} className="text-gray-800 group-hover:text-amber-500/40 transition-colors duration-500" />
                            <span className="text-[9px] text-gray-600 uppercase font-black tracking-widest mt-1">FOTÓ KÉSZÜL</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 md:from-black/30 via-transparent to-transparent opacity-60" />
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* XVIII. KERÜLET EDZÉSREND */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-2">XVIII. Kerület, Pestszentlőrinc</h2>
          <p className="text-gray-400 mb-8">Heti edzésrend</p>
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="bg-neon-orange px-6 py-3">
                <h3 className="text-black font-black text-lg">Hétfő</h3>
              </div>
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold text-sm">18:00 – 19:30</div>
                      <div className="text-gray-400 text-sm mt-0.5">Küzdelem kicsiknek-nagyoknak</div>
                      <div className="text-neon-orange text-xs font-black mt-2">fehér öv – fekete öv</div>
                    </div>
                  </div>
                  <LocationCard name="Kondor Béla Általános Iskola" address="1181 Budapest, Kondor Béla sétány 7." mapUrl="https://www.google.com/maps/search/?api=1&query=Kondor+Bela+Altalanos+Iskola+Budapest" accentColor="neon-orange" />
                </div>
                <div className="w-full lg:w-64 flex-shrink-0 bg-gray-800/50 lg:border-l border-gray-700">
                  <img src="/kondor.webp" alt="Küzdelmi edzés" className="w-full h-64 lg:h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-6">
                  <h3 className="text-gray-300 text-sm font-bold mb-1">TigersGym</h3>
                  <p className="text-gray-400 text-xs mb-3">A bázis technikai edzések, csoportokra osztva:</p>
                  <div className="mb-6">
                    <LocationCard address="1181 Budapest, Havanna u. 3." mapUrl="https://www.google.com/maps/search/?api=1&query=1181+Budapest+Havanna+u.+3" accentColor="neon-orange" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="bg-neon-orange/10 border border-neon-orange/30 px-4 py-2 rounded-lg mb-3 inline-block">
                        <h4 className="text-neon-orange font-bold text-sm">Szerda</h4>
                      </div>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                          <div><div className="text-white font-bold text-sm">16:30 – 18:00</div><div className="text-gray-400 text-sm">Fehér öv sárga csík – zöld övig</div></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                          <div><div className="text-white font-bold text-sm">18:00 – 19:30</div><div className="text-gray-400 text-sm">Zöld öv kék csík – piros övig</div></div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="bg-neon-orange/10 border border-neon-orange/30 px-4 py-2 rounded-lg mb-3 inline-block">
                        <h4 className="text-neon-orange font-bold text-sm">Péntek</h4>
                      </div>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                          <div><div className="text-white font-bold text-sm">16:30 – 18:00</div><div className="text-gray-400 text-sm">Kezdő csoport</div></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                          <div><div className="text-white font-bold text-sm">18:00 – 19:30</div><div className="text-gray-400 text-sm">Piros övtől 3.dan-ig</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-64 flex-shrink-0 bg-gray-800/50 lg:border-l border-gray-700">
                  <img src="/tigersgym.webp" alt="Technikai edzés" className="w-full h-64 lg:h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INGYENES ÖNVÉDELEM */}
        <div className="mb-16">
          <div className="bg-gray-900 border border-emerald-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/30 rounded-xl flex items-center justify-center flex-shrink-0"><Shield className="w-6 h-6 text-emerald-400" /></div>
                  <div><h2 className="text-2xl font-black text-white">Ingyenes önvédelmi edzések</h2><p className="text-emerald-400 font-bold text-sm">14 éves kortól</p></div>
                </div>
                <div className="flex items-start gap-3 mb-4"><Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Kedd: 18:00 – 19:00-ig</div></div>
                <LocationCard address="Havanna u. 3., 1181 Budapest" mapUrl="https://www.google.com/maps/search/?api=1&query=1181+Budapest+Havanna+u.+3" accentColor="emerald" />
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-emerald-600/10 lg:border-l border-emerald-600/30"><img src="/onvedelem.webp" alt="Önvédelmi edzés" className="w-full h-64 lg:h-full object-cover" /></div>
            </div>
          </div>
        </div>

        {/* OVIS EDZÉSEK */}
        <div className="mb-12">
          <div className="bg-gray-900 border border-amber-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-xl flex items-center justify-center flex-shrink-0"><Baby className="w-6 h-6 text-amber-400" /></div>
                  <div><h2 className="text-2xl font-black text-white">Ovis edzések</h2><p className="text-amber-400 font-bold text-sm">4 éves kortól</p></div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Kedd: 16:30 – 17:30-ig</div></div>
                  <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Csütörtök: 16:30 – 17:30-ig</div></div>
                </div>
                <LocationCard name="Kondor Béla Művelődési ház" address="Budapest, Kondor Béla stny. 8, 1181" mapUrl="https://www.google.com/maps/search/?api=1&query=Kondor+Bela+Muvelodesi+Haz+Budapest" accentColor="amber" />
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-amber-600/10 lg:border-l border-amber-600/30"><img src="/ovis.webp" alt="Ovis edzés" className="w-full h-64 lg:h-full object-cover" /></div>
            </div>
          </div>
        </div>

        {/* VIDEÓ BLOKK */}
        <div className="mb-6 w-full max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="absolute top-0 left-0 right-0 h-8 sm:h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <iframe 
              className="w-full h-full relative z-0" 
              src="https://www.youtube.com/embed/Lb_2QhIdyek" 
              title="YouTube bemutató videó" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* GYIK KONTÉNER */}
        <div className="mb-10 w-full max-w-4xl mx-auto -mt-24 sm:-mt-28 md:-mt-32">
          <Gyik />
        </div>

        {/* JELENTKEZÉSI BLOKK */}
        <div id="kapcsolat" className="w-full max-w-4xl mx-auto bg-neon-orange/5 border border-neon-orange/30 rounded-2xl p-8 sm:p-12">
          <h3 className="text-white font-black text-3xl mb-4">Készen állsz?</h3>
          <p className="text-gray-300 max-w-xl mb-8">Az első edzés ingyenes! Gyere el és ismerd meg közösségünket. Minden korosztályt szeretettel várunk.</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:tigrisek@gmail.com" className="inline-flex items-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/40">
              <Mail className="w-5 h-5" /> Jelentkezés emailben
            </a>
            <a href="tel:+36709415992" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border border-gray-700">
              <Phone className="w-5 h-5 text-neon-orange" /> +36-70-941-5992
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
