import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Training from './components/Training';
import Taekwondo from './components/Taekwondo';
import OvisTkd from './components/OvisTkd';
import Kickbox from './components/Kickbox';
import SelfDefense from './components/SelfDefense';
import Members from './components/Members';
import Calendar from './components/Calendar';
import Oath from './components/Oath';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NewsDetail from './components/NewsDetail';
import Gyik from './components/Gyik'; 
import TigrisAnalizator from './components/TigrisAnalizator'; // <-- Új analizátor importálása
import Bajnokaink from './components/Bajnokaink'; // <-- PONTOSÍTVA: a te fájlneved szerint!

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hirek" element={<News />} />
            <Route path="/edzesek" element={<Training />} />
            <Route path="/taekwondo" element={<Taekwondo />} />
            <Route path="/ovistkd" element={<OvisTkd />} />
            <Route path="/kickbox" element={<Kickbox />} />
            <Route path="/onvedelem" element={<SelfDefense />} />
            <Route path="/tagok" element={<Members />} />
            <Route path="/naptar" element={<Calendar />} />
            <Route path="/esku" element={<Oath />} />
            <Route path="/kapcsolat" element={<Contact />} />
            <Route path="/adatvedelem" element={<Privacy />} />
            <Route path="/hirek/:slug" element={<NewsDetail />} />
            
            {/* GYIK aloldal beállítva a felső P-húzattal */}
            <Route path="/gyik" element={<Gyik isFullPage={true} />} /> 
            
            {/* Új, titkos analizátor aloldal – szintén felső távolsággal a menü miatt */}
            <Route path="/teszt" element={<TigrisAnalizator isFullPage={true} />} /> 

            {/* Bajnokaink (Hall of Fame) Tabló aloldal */}
            <Route path="/bajnokaink" element={<Bajnokaink />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
