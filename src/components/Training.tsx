import { Clock, MapPin, Baby, Shield, Mail, Phone, ExternalLink } from 'lucide-react';
import Gyik from './Gyik'; // <-- 1. IMPORTÁLJUK AZ ÚJ GYIK KOMPONENST

const trainers = [
  { name: 'Pataki Krisztián', rank: 'VI.dan', role: 'Klubvezető elnök', image: '/patakikrisztian.webp' },
  { name: 'Leiti Edmond', rank: 'IV.dan', role: '', image: '/leitiedmond.webp' },
  { name: 'Patakiné Zs. Anikó', rank: 'III.dan', role: 'Klubvezető helyettes', image: '/patakinezsaniko.webp' },
  { name: 'Kiss Viktor', rank: 'III.dan', role: '', image: '/kissviktor.webp' },
  { name: 'Höflinger Zsolt', rank: 'II.dan', role: '', image: '/hoflingerzsolt.webp' },
  { name: 'Kardos Zsolt', rank: 'II.dan', role: '', image: '/kardoszsolt.webp' },
];

function LocationCard({ name, address, mapUrl, accentColor }: { name?: string, address: string, mapUrl: string, accentColor: string }) {
  const iconColor = accentColor === 'emerald' ? 'text-emerald-500' : accentColor === 'amber' ? 'text-amber-500' : 'text-neon-orange';
  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-neon-orange hover:scale-[1.03] hover:shadow-lg hover:shadow-neon-orange/30 transition-all duration-200 cursor-pointer">
      <MapPin className={`w-4 h-4 ${iconColor} flex-shrink-0 mt-0.5 group-hover:text-neon-orange transition-colors`} />
      <div className="flex-1 min-w-0">
        {name && <p className="text-gray-300 text-sm font-bold">{name}</p>}
        <p className="text-gray-400 text-sm">{address}</p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-neon-orange flex-shrink-0 mt-0.5 transition-colors" />
    </a>
  );
}

export default function Training() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csatlakozz</p>
          <h1 className="text-5xl font-black text-white">Edzések</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-black text-white mb-2">Taekwon-do</h2>
          <p className="text-gray-500 text-sm font-bold mb-4">(látványos koreai harcművészet)</p>
          <p className="text-gray-300 leading-relaxed mb-4">Jó hangulat, versenyek, övvizsgák, edzőtáborok, aktív klubélet.</p>
          <p className="text-gray-300 leading-relaxed">
            Örömmel tudatom <strong className="text-white">VELED</strong>, hogy kezdő taekwon-do edzés indul, ahonnan már csak <strong className="text-neon-orange">TE</strong> hiányzol.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8">Edzők</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainers.map((t) => (
              <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg truncate">{t.name}</h3>
                    <p className="text-neon-orange font-bold text-sm">{t.rank}</p>
                    {t.role && <p className="text-gray-500 text-xs mt-1">{t.role}</p>}
                  </div>
                  <img src={t.image} alt={t.name} className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-xl flex-shrink-0 border border-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-2">XVIII. Kerület, Pestszentlőrinc</h2>
          <p className="text-gray-500 mb-8">Heti edzésrend</p>
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
                      <div className="text-neon-orange text-xs font-bold mt-2">fehér öv – fekete öv</div>
                    </div>
                  </div>
                  <LocationCard name="Kondor Béla Általános Iskola" address="1181 Budapest, Kondor Béla sétány 7." mapUrl="https://www.openstreetmap.org/?q=Kondor+B%C3%A9la+s%C3%A9t%C3%A1ny+7+Budapest" accentColor="neon-orange" />
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
                  <p className="text-gray-500 text-xs mb-3">A bázis technikai edzések, csoportokra osztva:</p>
                  <div className="mb-6">
                    <LocationCard address="1181 Budapest, Havanna u. 3." mapUrl="https://www.openstreetmap.org/?q=Havanna+u.+3+Budapest" accentColor="neon-orange" />
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

        <div className="mb-16">
          <div className="bg-gray-900 border border-emerald-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/30 rounded-xl flex items-center justify-center flex-shrink-0"><Shield className="w-6 h-6 text-emerald-500" /></div>
                  <div><h2 className="text-2xl font-black text-white">Ingyenes önvédelmi edzések</h2><p className="text-emerald-500 font-bold text-sm">14 éves kortól</p></div>
                </div>
                <div className="flex items-start gap-3 mb-4"><Clock className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Kedd: 18:00 – 19:00-ig</div></div>
                <LocationCard address="Havanna u. 3., 1181 Budapest" mapUrl="https://www.openstreetmap.org/?q=Havanna+u.+3+Budapest" accentColor="emerald" />
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-emerald-600/10 lg:border-l border-emerald-600/30"><img src="/onvedelem.webp" alt="Önvédelmi edzés" className="w-full h-64 lg:h-full object-cover" /></div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-gray-900 border border-amber-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-xl flex items-center justify-center flex-shrink-0"><Baby className="w-6 h-6 text-amber-500" /></div>
                  <div><h2 className="text-2xl font-black text-white">Ovis edzések</h2><p className="text-amber-500 font-bold text-sm">4 éves kortól</p></div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Kedd: 16:30 – 17:30-ig</div></div>
                  <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /><div className="text-white font-bold text-sm">Csütörtök: 16:30 – 17:30-ig</div></div>
                </div>
                <LocationCard name="Kondor Béla Művelődési ház" address="Budapest, Kondor Béla stny. 8, 1181" mapUrl="https://www.openstreetmap.org/?q=Kondor+B%C3%A9la+M%C5%B1vel%C5%91d%C3%A9si+h%C3%A1z+Budapest" accentColor="amber" />
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-amber-600/10 lg:border-l border-amber-600/30"><img src="/ovis.webp" alt="Ovis edzés" className="w-full h-64 lg:h-full object-cover" /></div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8">Bemutató videó</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/Lb_2QhIdyek" title="YouTube bemutató videó" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        {/* 2. IDE SZÚRTAM BE A KATTINTÁSMENTES GYIK BLOKKOT */}
        <div className="mb-16 border-t border-gray-900 pt-16">
          <Gyik />
        </div>

        {/* Jelentkezési blokk - ID-val ellátva, hogy a footer gombja ide ugorjon */}
        <div id="kapcsolat" className="bg-neon-orange/5 border border-neon-orange/30 rounded-2xl p-8 sm:p-12">
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
