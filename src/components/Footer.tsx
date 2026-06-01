import type { Section } from '../App';

interface FooterProps {
  onNavigate: (section: Section) => void;
}

const links: { label: string; section: Section }[] = [
  { label: 'Főoldal', section: 'home' },
  { label: 'Hírek', section: 'news' },
  { label: 'Edzések', section: 'training' },
  { label: 'Taekwon-do', section: 'taekwondo' },
  { label: 'Ovis Taekwon-do', section: 'ovistkd' },
  { label: 'Kick-box', section: 'kickbox' },
  { label: 'Önvédelem', section: 'selfdefense' },
  { label: 'Eseménynaptár', section: 'calendar' },
  { label: 'Tagok', section: 'members' },
  { label: 'Eskü és Tanai', section: 'oath' },
  { label: 'Kapcsolat', section: 'contact' },
  { label: 'Adatvédelem', section: 'privacy' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand & Description */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-4 group">
              <img
                src="/tigrislogo.webp"
                alt="Tigrisek Logo"
                className="w-10 h-10 group-hover:scale-110 transition-transform object-contain"
              />
              <div className="text-left">
                <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
                <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
              </div>
            </button>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2">
              <p className="font-semibold text-white">Több mint harcművészet. Tradíció, fegyelem és közösség.</p>
              <p className="text-gray-500">
                Ahol a tradíció találkozik a küzdőszellemmel.<br />
                Harcművészet oktatás gyerekeknek és felnőtteknek,<br /> 
                2002 óta.
              </p>
              <p className="text-neon-orange font-bold tracking-wide pt-1">Lépj a bajnokok útjára!</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Oldalak</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-500 hover:text-neon-orange text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Elérhetőség</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:tigrisek@gmail.com" className="block text-gray-500 hover:text-neon-orange transition-colors">
                tigrisek@gmail.com
              </a>
              <a href="tel:+36709415992" className="block text-gray-500 hover:text-neon-orange transition-colors">
                +36-70-941-5992
              </a>
              
              {/* Közvetlen Facebook gomb tokenek nélkül */}
              <div className="pt-2">
                <a 
                  href="https://www.facebook.com/BudapestTigers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black font-bold text-xs uppercase tracking-wider px-4 py-2 rounded transition-all duration-300 shadow-[0_0_10px_rgba(255,165,0,0.1)] hover:shadow-[0_0_15px_rgba(255,165,0,0.4)]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                  Kövess minket Facebookon
                </a>
              </div>

              <div className="pt-2 text-gray-700 text-xs">
                Adószám: <span className="font-mono text-gray-600">18012020-1-43</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} Budapesti Tigrisek SE. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('privacy')}
              className="text-gray-700 hover:text-gray-400 text-xs transition-colors"
            >
              Adatvédelmi Tájékoztató
            </button>
            <p className="text-gray-800 text-xs">
              ITF Taekwon-do &mdash; Budapest, Hungary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
