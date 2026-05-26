import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Training from './components/Training';
import Members from './components/Members';
import Taekwondo from './components/Taekwondo';
import Oath from './components/Oath';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Calendar as CalendarIcon, Shield, Swords, ExternalLink } from 'lucide-react';

// Bővített szakasz típusok
export type Section = 'home' | 'news' | 'training' | 'members' | 'taekwondo' | 'oath' | 'contact' | 'kickbox' | 'selfdefense' | 'calendar';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Navbar activeSection={activeSection} onNavigate={navigate} scrolled={scrolled} />
      
      <main className="flex-grow">
        {activeSection === 'home' && <Hero onNavigate={navigate} />}
        {activeSection === 'news' && <News />}
        {activeSection === 'training' && <Training />}
        {activeSection === 'members' && <Members />}
        {activeSection === 'taekwondo' && <Taekwondo />}
        {activeSection === 'oath' && <Oath />}
        {activeSection === 'contact' && <Contact />}

        {/* 1. ÚJ OLDAL: KICK-BOX */}
        {activeSection === 'kickbox' && (
          <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-neon-orange/10 text-neon-orange rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-orange/30">
              <Swords className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Kick-box Edzések</h1>
            <p className="text-neon-orange font-bold mb-8">Modern küzdősport &bull; Állóképesség &bull; Dinamizmus</p>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left max-w-2xl mx-auto space-y-4">
              <p className="text-gray-300 leading-relaxed">
                A Budapesti Tigrisek SE kick-box edzésein a hangsúly a robbanékonyságon, a precíz ütés- és rúgástechnikákon, valamint a kiemelkedő erőnlét fejlesztésén van.
              </p>
              <p className="text-gray-400 text-sm">
                Az oldal feltöltés alatt áll. Az edzések pontos időpontjaiért és helyszíneiért kattints az Edzések menüpontra!
              </p>
              <button onClick={() => navigate('training')} className="mt-4 inline-flex items-center gap-2 bg-neon-orange text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all hover:scale-105">
                Edzésrend megtekintése
              </button>
            </div>
          </div>
        )}

        {/* 2. ÚJ OLDAL: ÖNVÉDELEM */}
        {activeSection === 'selfdefense' && (
          <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-amber-600/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-600/30">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Önvédelem oktatás</h1>
            <p className="text-amber-500 font-bold mb-8">Magabiztosság &bull; Hatékonyság &bull; Biztonság</p>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left max-w-2xl mx-auto space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Reális önvédelmi technikák elsajátítása mindennapi helyzetekre. Megtanuljuk a veszélyhelyzetek felismerését, a deeszkalációt, és ha szükséges, a hatékony fizikai hárítást korosztálytól függetlenül.
              </p>
              <p className="text-gray-400 text-sm">
                Az oldal részletes anyaga hamarosan elérhető lesz.
              </p>
            </div>
          </div>
        )}

        {/* 3. ÚJ OLDAL: ESEMÉNYNAPTÁR */}
        {activeSection === 'calendar' && (
          <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-sky-600/10 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-sky-600/30">
              <CalendarIcon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Eseménynaptár 2026</h1>
            <p className="text-sky-400 font-bold mb-8">Vizsgák &bull; Versenyek &bull; Edzőtáborok</p>
            
            {/* Ideiglenes eseménylista dizájn */}
            <div className="space-y-4 max-w-2xl mx-auto text-left">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block mb-1">Hamarosan</span>
                  <h3 className="text-white font-bold">Nyári Edzőtábor</h3>
                </div>
                <span className="text-gray-500 text-sm font-mono">2026. Július</span>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between opacity-75">
                <div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-1">Lezajlott</span>
                  <h3 className="text-white font-bold">1%-os Adófelajánlási kampány</h3>
                </div>
                <span className="text-gray-500 text-sm font-mono">2026. Április 1.</span>
              </div>
              <p className="text-gray-500 text-xs text-center pt-4">
                Tipp: Ha van az egyesületnek közös Google Naptára, ide egy kattintással be tudjuk majd ágyazni!
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
