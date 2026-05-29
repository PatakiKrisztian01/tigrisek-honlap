import { useState } from 'react';
import { Mail, Phone, ExternalLink, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  // Állapotkezelés: 'idle' (alap), 'submitting' (küldés alatt), 'success' (sikeres)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Bekötve a saját Formspree azonosítód
      const response = await fetch('https://formspree.io/f/xwvzzebv', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Sajnos hiba történt a küldés során. Kérjük, próbáld újra!');
      }
    } catch (error) {
      console.error("Hálózati hiba:", error);
      setStatus('idle');
      alert('Hálózati hiba történt. Kérjük, ellenőrizd az internetkapcsolatod!');
    }
  };

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

            {/* Pataki Krisztián Kártya */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg mb-1 truncate">Pataki Krisztián</h3>
                  <p className="text-neon-orange text-sm font-bold mb-4">VI.Dan — Klubvezető elnök</p>
                  <div className="space-y-2.5">
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
                      <span className="text-sm whitespace-nowrap">+36-70-941-5992</span>
                    </a>
                  </div>
                </div>
                <img
                  src="/PatakiKrisztian-removebg-preview.png"
                  alt="Pataki Krisztián"
                  className="h-40 w-31 sm:h-40 sm:w-32 object-contain flex-shrink-0"
                />
              </div>
            </div>

            {/* Patakiné Zs. Anikó Kártya */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg mb-1 truncate">Patakiné Zs. Anikó</h3>
                  <p className="text-neon-orange text-sm font-bold mb-4">III.Dan — Klubvezető helyettes</p>
                  <div className="space-y-2.5">
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
                      <span className="text-sm whitespace-nowrap">+36-70-941-5992</span>
                    </a>
                  </div>
                </div>
                <img
                  src="/patakinezsaniko.png"
                  alt="Patakiné Zs. Anikó"
                  className="h-36 w-28 sm:h-40 sm:w-32 object-contain flex-shrink-0"
                />
              </div>
            </div>

            {/* Szövetségek */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Szövetségek</h3>
              <div className="space-y-3">
                {[
                  { name: 'ITF – International Taekwondo Federation', url: 'https://itftkd.sport/' },
                  { name: 'AETF – European Taekwondo Federation (ITF Europe)', url: 'https://itfeurope.org/' },
                  { name: 'Magyar ITF Taekwon-do Szövetség', url: 'https://taekwon-do.hu/itfindex.html' },
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

          {/* Contact Form Kártya */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6">Küldj üzenetet</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 min-h-[400px] flex flex-col justify-center">
              
              {status === 'success' ? (
                /* Sikeres küldés képernyő */
                <div className="text-center space-y-4 py-8">
                  <div className="flex justify-center">
                    <CheckCircle className="w-16 h-16 text-neon-orange" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide">Üzenet elküldve!</h3>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                    Köszönjük! Az üzeneted sikeresen beérkezett hozzánk. Hamarosan válaszolunk a megadott e-mail címedre.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 inline-flex bg-gray-800 hover:bg-gray-750 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all border border-gray-700"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                /* Az űrlap */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">Neved</label>
                    <input
                      type="text"
                      name="Név"
                      required
                      disabled={status === 'submitting'}
                      placeholder="Teljes név"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">Email cím</label>
                    <input
                      type="email"
                      name="Email"
                      required
                      disabled={status === 'submitting'}
                      placeholder="neved@gmail.com"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">Tárgy</label>
                    <input
                      type="text"
                      name="Tárgy"
                      disabled={status === 'submitting'}
                      placeholder="Miben segíthetünk?"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">Üzenet</label>
                    <textarea
                      name="Üzenet"
                      required
                      rows={5}
                      disabled={status === 'submitting'}
                      placeholder="Üzeneted..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange transition-colors text-sm resize-none disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-neon-orange hover:bg-orange-600 text-black py-3.5 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-neon-orange/40 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Küldés folyamatban...
                      </>
                    ) : (
                      'Üzenet küldése'
                    )}
                  </button>
                </form>
              )}
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
