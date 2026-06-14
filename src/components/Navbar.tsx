import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Newspaper, 
  Dumbbell, 
  Award, 
  Baby, 
  Shield, 
  Users, 
  Calendar as CalendarIcon, 
  Phone 
} from 'lucide-react';

// Menüpontok kibővítve a hozzájuk tartozó ikonokkal
const navItems = [
  { label: 'Főoldal', path: '/', icon: Home },
  { label: 'Hírek', path: '/hirek', icon: Newspaper },
  { label: 'Edzések', path: '/edzesek', icon: Dumbbell },
  { label: 'Taekwon-do', path: '/taekwondo', icon: Award },
  { label: 'Ovis TKD', path: '/ovistkd', icon: Baby },
  { label: 'Kick-box', path: '/kickbox', icon: Award },
  { label: 'Önvédelem', path: '/onvedelem', icon: Shield },
  { label: 'Tagok', path: '/tagok', icon: Users },
  { label: 'Eseménynaptár', path: '/naptar', icon: CalendarIcon },
  { label: 'Kapcsolat', path: '/kapcsolat', icon: Phone },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Biztonságos és tiszta scroll eseménykezelés useEffect-en belül
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-neon-orange/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 xl:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <img
              src="/tigrislogo.webp"
              alt="Tigrisek Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform"
            />
            <div className="text-left">
              <div className="text-white font-bold text-[10px] sm:text-xs leading-tight">BUDAPESTI</div>
              <div className="text-neon-orange font-black text-xs sm:text-sm leading-tight tracking-wider">TIGRISEK SE</div>
            </div>
          </Link>

          {/* ASZTALI NAVIGÁCIÓ (PC) */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 py-2 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-neon-orange text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* MOBIL MENÜ GOMB */}
          <button
            className="xl:hidden p-2 rounded-lg text-gray-400 hover:text-neon-orange hover:bg-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── MOBILOS LENYÍLÓ MENÜ (Az Időkép mintájára testreszabva) ── */}
      {menuOpen && (
        <div className="xl:hidden border-t border-gray-900 bg-black max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col w-full">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-black uppercase tracking-widest transition-all duration-150 border-b border-neon-orange/10 group ${
                    active
                      ? 'bg-neon-orange/10 text-neon-orange border-l-4 border-l-neon-orange'
                      : 'text-white hover:bg-gray-950'
                  }`}
                >
                  {/* Narancssárga ikonok a felirat előtt */}
                  <IconComponent className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${
                    active ? 'text-neon-orange' : 'text-neon-orange/80'
                  }`} />
                  
                  <span className={active ? 'text-neon-orange' : 'group-hover:text-neon-orange/90 transition-colors'}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
