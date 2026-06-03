import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Főoldal', path: '/' },
  { label: 'Hírek', path: '/hirek' },
  { label: 'Edzések', path: '/edzesek' },
  { label: 'Taekwon-do', path: '/taekwondo' },
  { label: 'Ovis TKD', path: '/ovistkd' },
  { label: 'Kick-box', path: '/kickbox' },
  { label: 'Önvédelem', path: '/onvedelem' },
  { label: 'Tagok', path: '/tagok' },
  { label: 'Eseménynaptár', path: '/naptar' },
  { label: 'Kapcsolat', path: '/kapcsolat' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  if (typeof window !== 'undefined') {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-neon-orange/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 xl:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src="/tigrislogo.webp"
              alt="Tigrisek Logo"
              className="w-10 h-10 group-hover:scale-110 transition-transform"
            />
            <div className="text-left hidden sm:block">
              <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
              <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
            </div>
          </Link>

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

          <button
            className="xl:hidden p-2 rounded-lg text-gray-400 hover:text-neon-orange hover:bg-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t border-gray-800 bg-black/98 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 block ${
                  isActive(item.path)
                    ? 'bg-neon-orange text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
