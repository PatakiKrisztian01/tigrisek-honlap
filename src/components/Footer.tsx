import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const links = [
  { label: 'Főoldal', path: '/' },
  { label: 'Hírek', path: '/hirek' },
  { label: 'Edzések', path: '/edzesek' },
  { label: 'Taekwon-do', path: '/taekwondo' },
  { label: 'Ovis Taekwon-do', path: '/ovistkd' },
  { label: 'Kick-box', path: '/kickbox' },
  { label: 'Önvédelem', path: '/onvedelem' },
  { label: 'Eseménynaptár', path: '/naptar' },
  { label: 'Tagok', path: '/tagok' },
  { label: 'Eskü és Tanai', path: '/esku' },
  { label: 'Kapcsolat', path: '/kapcsolat' },
  { label: 'Adatvédelem', path: '/adatvedelem' },
];

export default function Footer() {
  const scrollToContact = () => {
    setTimeout(() => {
      const element = document.getElementById('kapcsolat');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src="/tigrislogo.webp" alt="Tigrisek Logo" className="w-10 h-10 group-hover:scale-110 transition-transform object-contain" />
              <div className="text-left">
                <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
                <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
              </div>
            </Link>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2">
              <p className="font-semibold text-white">Több mint harcművészet. Tradíció, fegyelem és közösség.</p>
              <p className="text-gray-500">Ahol a tradíció találkozik a küzdőszellemmel.<br /> Harcművészet oktatás gyerekeknek és felnőtteknek, 2002 óta.</p>
              <p className="text-neon-orange font-bold tracking-wide pt-1 cursor-pointer hover:text-white" onClick={scrollToContact}>Lépj a bajnokok útjára!</p>
            </div>
          </div>

          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Oldalak</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-500 hover:text-neon-orange text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Elérhetőség</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:tigrisek@gmail.com" className="block text-gray-500 hover:text-neon-orange transition-colors">tigrisek@gmail.com</a>
              <a href="tel:+36709415992" className="block text-gray-500 hover:text-neon-orange transition-colors">+36-70-941-5992</a>
              <div className="pt-2">
                <a href="https://www.facebook.com/BudapestTigers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-all duration-300">
                  Kövess minket Facebookon
                </a>
              </div>
              <div className="pt-2 text-gray-700 text-xs">Adószám: <span className="font-mono text-gray-600">18012020-1-43</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">&copy; {new Date().getFullYear()} Budapesti Tigrisek SE. Minden jog fenntartva.</p>
          <div className="flex items-center gap-4">
            <Link to="/adatvedelem" className="text-gray-700 hover:text-gray-400 text-xs transition-colors">Adatvédelmi Tájékoztató</Link>
            <p className="text-gray-800 text-xs">ITF Taekwon-do — Budapest, Hungary</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
