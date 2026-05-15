import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Section } from '../App';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  scrolled: boolean;
}

const navItems: { label: string; section: Section }[] = [
  { label: 'Főoldal', section: 'home' },
  { label: 'Hírek', section: 'news' },
  { label: 'Edzések', section: 'training' },
  { label: 'Tagok', section: 'members' },
  { label: 'Taekwon-do', section: 'taekwondo' },
  { label: 'Kapcsolat', section: 'contact' },
];

export default function Navbar({ activeSection, onNavigate, scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section: Section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-neon-orange/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/tigrisátlátszó.png"
              alt="Tigrisek Logo"
              className="w-10 h-10 group-hover:scale-110 transition-transform"
            />
            <div className="text-left hidden sm:block">
              <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
              <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.section
                    ? 'bg-neon-orange text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-neon-orange hover:bg-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.section
                    ? 'bg-neon-orange text-black font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
