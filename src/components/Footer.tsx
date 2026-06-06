import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo és bevezető */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/tigrislogo.webp" alt="Tigrisek Logo" className="w-10 h-10 group-hover:scale-110 transition-transform object-contain" />
              <div className="text-left">
                <div className="text-white font-bold text-xs leading-tight">BUDAPESTI</div>
                <div className="text-neon-orange font-black text-sm leading-tight tracking-wider">TIGRISEK SE</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Több mint harcművészet. Tradíció, fegyelem és közösség. Csatlakozz a Tigrisek családjához!
            </p>
            {/* A kért ugró gomb */}
            <Link 
              to="/edzesek#kapcsolat" 
              className="inline-block bg-neon-orange text-black font-black text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-white transition-all hover:scale-105"
            >
              Lépj a bajnokok útjára!
            </Link>
          </div>

          {/* Navigáció */}
          <div>
            <h4 className="text-white font-bold mb-4">Oldaltérkép</h4>
            <ul className="space-y-2">
              {['Főoldal', 'Hírek', 'Edzések', 'Rólunk', 'Galéria', 'Kapcsolat'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-gray-400 hover:text-neon-orange text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elérhetőségek */}
          <div>
            <h4 className="text-white font-bold mb-4">Kapcsolat</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-neon-orange transition-colors">
                <Mail className="w-4 h-4" /> tigrisek@gmail.com
              </li>
              <li className="flex items-center gap-2 hover:text-neon-orange transition-colors">
                <Phone className="w-4 h-4" /> +36-70-941-5992
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Kövess minket</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-neon-orange hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-neon-orange hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Budapesti Tigrisek SE. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
