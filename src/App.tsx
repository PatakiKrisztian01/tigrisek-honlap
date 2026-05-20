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

export type Section = 'home' | 'news' | 'training' | 'members' | 'taekwondo' | 'oath' | 'contact';

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
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar activeSection={activeSection} onNavigate={navigate} scrolled={scrolled} />
      {activeSection === 'home' && <Hero onNavigate={navigate} />}
      {activeSection === 'news' && <News />}
      {activeSection === 'training' && <Training />}
      {activeSection === 'members' && <Members />}
      {activeSection === 'taekwondo' && <Taekwondo />}
      {activeSection === 'oath' && <Oath />}
      {activeSection === 'contact' && <Contact />}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
