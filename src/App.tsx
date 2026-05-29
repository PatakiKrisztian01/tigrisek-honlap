import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Training from './components/Training';
import Taekwondo from './components/Taekwondo';
import OvisTkd from './components/OvisTkd'; // Új Ovis TKD komponens importálása
import Kickbox from './components/Kickbox';
import SelfDefense from './components/SelfDefense';
import Members from './components/Members';
import Calendar from './components/Calendar';
import Oath from './components/Oath';
import Contact from './components/Contact';
import Footer from './components/Footer';

// A kért sorrend szerint rendezett szekció típusok
export type Section = 
  | 'home' 
  | 'news' 
  | 'training' 
  | 'taekwondo' 
  | 'ovistkd' // Új szekció típus
  | 'kickbox' 
  | 'selfdefense' 
  | 'members' 
  | 'calendar' 
  | 'oath' 
  | 'contact';

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
        {/* Főoldal */}
        {activeSection === 'home' && <Hero onNavigate={navigate} />}
        
        {/* Aloldalak a kért új sorrendben */}
        {activeSection === 'news' && <News />}
        {activeSection === 'training' && <Training />}
        {activeSection === 'taekwondo' && <Taekwondo />}
        {activeSection === 'ovistkd' && <OvisTkd onNavigate={navigate} />} {/* Új szakasz renderelése */}
        {activeSection === 'kickbox' && <Kickbox onNavigate={navigate} />}
        {activeSection === 'selfdefense' && <SelfDefense />}
        {activeSection === 'members' && <Members />}
        {activeSection === 'calendar' && <Calendar />}
        
        {/* Egyéb kiegészítő oldalak */}
        {activeSection === 'oath' && <Oath />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
