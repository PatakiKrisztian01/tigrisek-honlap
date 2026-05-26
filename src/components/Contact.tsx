import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Írj nekünk</p>
          <h1 className="text-5xl font-black text-white">Kapcsolat</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white mb-6">Lépj kapcsolatba velünk</h2>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300">
              <div className="flex items-end gap-4 p-6">
                <img
                  src="/PatakiKrisztian-removebg-preview.png"
                  alt="Pataki Krisztián"
                  className="h-40 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">Pataki Krisztián</h3>
                  <p className="text-neon-orange text-sm font-bold mb-3">VI.Dan — Klubvezető elnök</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:tigrisek@gmail.com"
                      className="flex items-center gap-2.5 text-gray-300 hover:text-neon-orange transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-gray-500 group-hover:text-neon-orange transition-colors flex-shrink-0" />
                      <span className="text-sm truncate">tigrisek@gmail.com</span>
                    </a>
                    <a
                      href="tel:+36709415992"
                      className="flex items-center gap-2.5 text-gray-300 hover:text-neon-orange transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-gray-500 group-hover:text-neon-orange transition-colors flex-shrink-0" />
                      <span className="text-sm">+36-70-941-5992</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300">
              <h3 className="text-white font-bold text-lg mb-1">Patakiné Zs. Anikó</h3>
              <p className="text-neon-orange text-sm font-bold mb-4">III.Dan — Klubvezető helyettes</p>
              <div className="space-y-2">
                <a
                  href="mailto:patakineaniko@gmail.com"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-neon-orange transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-neon-orange transition-colors flex-shrink-0" />
                  <span className="text-sm truncate">patakineaniko@gmail.com</span>
                </a>
                <a
                  href="tel:+36709415992"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-neon-orange transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-neon-orange transition-colors flex-shrink-0" />
                  <span className="text-sm">+36-70-941-5992</span>
                </a>
              </div>
            </div>

            {/* Social / Federation Links */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Szövetségek</h3>
              <div className="space-y-3">
                {[
                  { name: 'ITF – International Taekwondo Federation', url: 'https://itftkd.sport/' },
                  { name: 'ATF – Asian Taekwondo Federation (ITF Europe)', url: 'https://itfeurope.org/' },
                  { name: 'Magyar Taekwondo Szövetség', url: 'https://taekwon-do.hu/itfindex.html' },
                ].map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-neon-orange text-sm transition-colors group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-neon-orange transition-colors" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6">Küldj üzenetet</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:tigrisek@gmail.com';
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Neved</label>
                  <input
                    type="text"
                    required
                    placeholder="Teljes név"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Email cím</label>
                  <input
                    type="email"
                    required
                    placeholder="neved@email.hu"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Tárgy</label>
                  <input
                    type="text"
                    placeholder="Miben segíthetünk?"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Üzenet</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Üzeneted..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon-orange hover:bg-orange-600 text-black py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-neon-orange/40"
                >
                  Küldés emailben
                </button>
              </form>
            </div>

            {/* Tax info */}
            <div className="mt-6 bg-neon-orange/5 border border-neon-orange/30 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Támogasd az adód 1%-ával!</h3>
              <p className="text-gray-400 text-sm mb-3">Adószámunk:</p>
              <div className="font-mono text-neon-orange font-bold text-xl tracking-widest">18012020-1-43</div>
              <p className="text-gray-600 text-xs mt-2">eszja.nav.gov.hu → 1+1%-os nyilatkozat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
