import { Clock, MapPin, Users, Swords, Baby, Shield, Mail, Phone, Map } from 'lucide-react';

const trainers = [
  { name: 'Pataki Krisztián', rank: 'VI.dan', role: 'Klubvezető elnök' },
  { name: 'Leiti Edmond', rank: 'IV.dan', role: '' },
  { name: 'Patakiné Zs. Anikó', rank: 'III.dan', role: 'Klubvezető helyettes' },
  { name: 'Kiss Viktor', rank: 'III.dan', role: '' },
  { name: 'Höfliger Zsolt', rank: 'II.dan', role: '' },
  { name: 'Kardos Zsolt', rank: 'II.dan', role: '' },
];

const videoThumbnails = Array.from({ length: 11 }, (_, i) => {
  const nums = [12, 10, 9, 8, 7, 6, 1, 2, 3, 4, 5];
  return `https://tigrisek.hu/images/video-${nums[i]}.jpg`;
});

export default function Training() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csatlakozz</p>
          <h1 className="text-5xl font-black text-white">Edzések</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-black text-white mb-2">Taekwon-do</h2>
          <p className="text-gray-500 text-sm font-bold mb-4">(látványos koreai harcművészet)</p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Jó hangulat, versenyek, övvizsgák, edzőtáborok, aktív klubélet.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Örömmel tudatom <strong className="text-white">VELED</strong>, hogy kezdő taekwon-do edzés indul, ahonnan már csak <strong className="text-neon-orange">TE</strong> hiányzol.
          </p>
        </div>

        {/* Trainers */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8">Edzők</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainers.map((t) => (
              <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  {t.name === 'Pataki Krisztián' && (
                    <img
                      src="/PatakiKrisztian-removebg-preview.png"
                      alt={t.name}
                      className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{t.name}</h3>
                    <p className="text-neon-orange font-bold text-sm">{t.rank}</p>
                    {t.role && <p className="text-gray-500 text-xs mt-1">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-2">XVIII. Kerület, Pestszentlőrinc</h2>
          <p className="text-gray-500 mb-8">Heti edzésrend</p>

          <div className="space-y-6">
            {/* Hétfő */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="bg-neon-orange px-6 py-3">
                <h3 className="text-black font-black text-lg">Hétfő</h3>
              </div>
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-neon-orange" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">18:00 – 19:30</div>
                      <div className="text-gray-400 text-sm mt-0.5">Küzdelem kicsiknek-nagyoknak</div>
                      <div className="text-neon-orange text-xs font-bold mt-2">fehér öv – fekete öv</div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-300 text-sm font-bold">Kondor Béla Általános Iskola</p>
                        <p className="text-gray-400 text-sm">1181 Budapest, Kondor Béla sétány 7.</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.openstreetmap.org/?q=Kondor+B%C3%A9la+s%C3%A9t%C3%A1ny+7+Budapest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-orange hover:text-orange-500 text-xs font-bold transition-colors"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Térkép
                  </a>
                </div>
                <div className="w-full lg:w-64 flex-shrink-0 bg-gray-800/50 lg:border-l border-gray-700">
                  <img
                    src="/502521670_122172432698301880_4038565149120948853_n.jpg"
                    alt="Küzdelmi edzés"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Szerda - Péntek - Közös helyszín */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="flex-1 p-6">
                  <h3 className="text-gray-300 text-sm font-bold mb-1">Havanna u. 3.</h3>
                  <p className="text-gray-500 text-xs mb-3">A bázis technikai edzések, csoportokra osztva:</p>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-neon-orange flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">
                        1181 Budapest, Havanna u. 3.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.openstreetmap.org/?q=Havanna+u.+3+Budapest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-neon-orange hover:text-orange-500 text-xs font-bold transition-colors mb-6"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Térkép
                  </a>

                  <div className="space-y-4">
                    {/* Szerda */}
                    <div>
                      <div className="bg-neon-orange/10 border border-neon-orange/30 px-4 py-2 rounded-lg mb-3 inline-block">
                        <h4 className="text-neon-orange font-bold text-sm">Szerda</h4>
                      </div>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-neon-orange" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">16:30 – 18:00</div>
                            <div className="text-gray-400 text-sm">Fehér öv sárga csík – zöld övig</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-neon-orange" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">18:00 – 19:30</div>
                            <div className="text-gray-400 text-sm">Zöld öv kék csík – piros övig</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Péntek */}
                    <div className="pt-3">
                      <div className="bg-neon-orange/10 border border-neon-orange/30 px-4 py-2 rounded-lg mb-3 inline-block">
                        <h4 className="text-neon-orange font-bold text-sm">Péntek</h4>
                      </div>
                      <div className="space-y-3 ml-2">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-neon-orange" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">16:30 – 18:00</div>
                            <div className="text-gray-400 text-sm">Kezdő csoport</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-neon-orange" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-sm">18:00 – 19:30</div>
                            <div className="text-gray-400 text-sm">Piros övtől 3.dan-ig</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-64 flex-shrink-0 bg-gray-800/50 lg:border-l border-gray-700">
                  <img
                    src="/555717957_25013974758240728_3275706361721851860_n.jpg"
                    alt="Technikai edzés"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Önvédelem */}
        <div className="mb-16">
          <div className="bg-gray-900 border border-emerald-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Ingyenes önvédelmi edzések</h2>
                    <p className="text-emerald-500 font-bold text-sm">18 éves kortól</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Kedd: 18:00 – 19:00-ig</div>
                    <div className="text-emerald-500 text-xs font-bold mt-2">Havanna u. 3., 1181 Budapest</div>
                  </div>
                </div>
                <a
                  href="https://www.openstreetmap.org/?q=Havanna+u.+3+Budapest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-xs font-bold transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  Térkép
                </a>
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-emerald-600/10 lg:border-l border-emerald-600/30">
                <img
                  src="/555717957_25013974758240728_3275706361721851860_n.jpg"
                  alt="Önvédelmi edzés"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ovis */}
        <div className="mb-16">
          <div className="bg-gray-900 border border-amber-600/30 rounded-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-600/10 border border-amber-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Baby className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Ovis edzések</h2>
                    <p className="text-amber-500 font-bold text-sm">4 éves kortól</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Kedd: 16:30 – 17:30-ig</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Csütörtök: 16:30 – 17:30-ig</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-300 text-sm font-bold">Kondor Béla Művelődési ház</p>
                      <p className="text-gray-400 text-sm">Budapest, Kondor Béla stny. 8, 1181</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.openstreetmap.org/?q=Kondor+B%C3%A9la+Művelődési+ház+Budapest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-xs font-bold transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  Térkép
                </a>
              </div>
              <div className="w-full lg:w-64 flex-shrink-0 bg-amber-600/10 lg:border-l border-amber-600/30">
                <img
                  src="/645785912_26451474827824040_4934349288100951462_n.jpg"
                  alt="Ovis edzés"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Videók */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8">Videók</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoThumbnails.map((src, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={src}
                    alt={`Videó ${i + 1}`}
                    className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-neon-orange/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-neon-orange/5 border border-neon-orange/30 rounded-2xl p-8 sm:p-12">
          <h3 className="text-white font-black text-3xl mb-4">Készen állsz?</h3>
          <p className="text-gray-300 max-w-xl mb-8">
            Az első edzés ingyenes! Gyere el és ismerd meg közösségünket. Minden korosztályt szeretettel várunk.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:tigrisek@gmail.com"
              className="inline-flex items-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/40"
            >
              <Mail className="w-5 h-5" />
              Jelentkezés emailben
            </a>
            <a
              href="tel:+36709415992"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border border-gray-700"
            >
              <Phone className="w-5 h-5 text-neon-orange" />
              +36-70-941-5992
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
