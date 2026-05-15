import type { Section } from '../App';

interface FooterProps {
  onNavigate: (section: Section) => void;
}

const links: { label: string; section: Section }[] = [
  { label: 'Főoldal', section: 'home' },
  { label: 'Hírek', section: 'news' },
  { label: 'Edzések', section: 'training' },
  { label: 'Tagok', section: 'members' },
  { label: 'Taekwon-do', section: 'taekwondo' },
  { label: 'Kapcsolat', section: 'contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-4 group">
              <img
                src="/438129535_10211771062990011_2247256738171596777_n.jpg"
                alt="Tigrisek Logo"
                className="w-10 h-10 group-hover:scale-110 transition-transform"
              />
              <div className="text-left">
                <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
                <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
              </div>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed">
              ITF Taekwon-do klub Budapestről. Hagyomány, becsület, és küzdőszellem — 1990 óta.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Oldalak</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-500 hover:text-neon-orange text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-300 font-bold text-sm uppercase tracking-wider mb-4">Elérhetőség</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:tigrisek@gmail.com" className="block text-gray-500 hover:text-neon-orange transition-colors">
                tigrisek@gmail.com
              </a>
              <a href="tel:+36709415992" className="block text-gray-500 hover:text-neon-orange transition-colors">
                +36-70-941-5992
              </a>
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
          <p className="text-gray-800 text-xs">
            ITF Taekwon-do &mdash; Budapest, Hungary
          </p>
        </div>
      </div>
    </footer>
  );
}
