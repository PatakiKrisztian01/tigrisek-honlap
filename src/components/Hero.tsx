import { ArrowRight, Trophy, Users, Calendar, ChevronDown, Shield, Award, Heart } from 'lucide-react';
import type { Section } from '../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const stats = [
  { icon: Calendar, value: '24 év', label: 'Tapasztalat' },
  { icon: Users, value: '100+', label: 'Aktív Tag' },
  { icon: Trophy, value: 'VK', label: 'Aranyérmek' },
  { icon: Trophy, value: 'EB', label: 'Aranyérmek' },
];

const newsItems = [
  {
    date: '2026. Április 1.',
    title: 'Ajánld fel adód 1%-át!',
    excerpt: 'Segíts nekünk az ügyfélkapun keresztül! Adószámunk: 18012020-1-43. Pár kattintás az egész.',
  },
  {
    date: '2025',
    title: 'WAKO Kickbox Világkupa – Jesolo',
    excerpt: 'Büszkék vagyunk versenyzőinkre, akik kiemelkedő eredményeket értek el a Jesolo-i Világkupán.',
  },
  {
    date: '2025',
    title: 'Magyarbajnokság',
    excerpt: 'Tigrisek versenyzői ismét bizonyítottak az országos bajnokságon. Gratulálunk minden résztvevőnek!',
  },
];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div>
      {/* Hero Section hangtalan háttérvideóval */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* YouTube beágyazás: start=21, end=79 (1:19), loop, mute, autoplay */}
          <iframe
            className="w-full h-full scale-125 object-cover"
            src="https://www.youtube.com/embed/hzzh0he36QA?autoplay=1&mute=1&loop=1&playlist=hzzh0he36QA&start=21&end=79&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Budapesti Tigrisek Háttérvideó"
            allow="autoplay; encrypted-media"
            style={{ border: 'none', width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.15)' }}
          />
          {/* Halványító, sötétítő és lágy elmosó maszk a szövegek olvashatóságáért */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-gray-950 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/tigrisátlátszó.png"
              alt="Tigrisek Logo"
              className="h-28 sm:h-36 object-contain drop-shadow-2xl"
              style={{ animation: 'bounce 4s ease-in-out infinite' }}
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-sm font-medium tracking-wider uppercase">Budapest Tigers SE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight uppercase">
            Légy erősebb <br />
            <span className="text-neon-orange">testben és lélekben</span>
          </h1>

          <div className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-medium leading-relaxed tracking-wide">
            <p>ITF Taekwon-do és Kick-box edzések gyerekeknek és felnőtteknek,</p>
            <p className="text-neon-orange font-bold text-base sm:text-lg uppercase mt-2 tracking-widest">kezdőtől fekete övig.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('training')}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/40"
            >
              Jelentkezem az első ingyenes edzésre
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900/80 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border border-neon-orange/30 hover:border-neon-orange"
            >
              Rólunk
            </button>
          </div>

          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-neon-orange transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span className="text-xs tracking-wider uppercase">Görgess lejjebb</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Rólunk Blokk (A korábbi hero bemutatkozó szöveg áthelyezve ide) */}
      <section id="about" className="py-24 bg-gray-950 relative overflow-hidden border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Ismerj meg minket</p>
          <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Fedezd fel a benned rejlő erőt!</h2>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto space-y-6">
              Nálunk a Taekwon-do nemcsak látványos önvédelem és küzdőszellem, hanem egy összetartó, családias közösség is <span className="text-white font-bold">2002 óta</span>. 
              <br /><br />
              Hiszünk abban, hogy az edzőteremben megszerzett magabiztosság, tisztelet és fegyelem az élet minden területén sikeressé teszi a tanítványainkat. Támogató csapattal várunk minden korosztályt, a teljesen kezdőktől a fekete övesekig. 
              <br /><br />
              <span className="text-neon-orange font-bold text-xl block mt-4">Tartozz te is a Tigrisek családjához!</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-neon-orange" />
                <span className="text-white font-bold text-sm">Biztonságos környezet</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-6 h-6 text-neon-orange" />
                <span className="text-white font-bold text-sm">Profi mesterek</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-6 h-6 text-neon-orange" />
                <span className="text-white font-bold text-sm">Családias közösség</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-gray-950 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-neon-orange/10 border border-neon-orange/30 rounded-xl mb-3 group-hover:bg-neon-orange/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-neon-orange" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Legfrissebb</p>
              <h2 className="text-4xl font-black text-white">Hírek</h2>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-neon-orange transition-colors text-sm font-bold"
            >
              Összes hír <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => onNavigate('news')}
              >
                <time className="text-neon-orange text-xs font-bold tracking-wider uppercase mb-3 block">{item.date}</time>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-neon-orange transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <button
              onClick={() => onNavigate('news')}
              className="flex items-center gap-2 text-gray-400 hover:text-neon-orange transition-colors text-sm font-bold"
            >
              Összes hír <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-y border-gray-900 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-neon-orange/30 font-serif mb-4">"</div>
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed italic mb-6">
            A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.
          </blockquote>
          <p className="text-gray-600 text-sm tracking-wider uppercase">— Choi Hong Hi, az ITF Taekwondo alapítója</p>
        </div>
      </section>

      {/* Club Leaders */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Vezetőség</p>
            <h2 className="text-4xl font-black text-white">Klubvezetők</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img
                src="/PatakiKrisztian-removebg-preview.png"
                alt="Pataki Krisztián"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-white font-black text-xl mb-1">Pataki Krisztián</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">VI.Dan — Klubvezető elnök</p>
              <a href="mailto:tigrisek@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">tigrisek@gmail.com</a>
              <a href="tel:+36709415992" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-941-5992</a>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-neon-orange/50 transition-all duration-300">
              <img
                src="/patakinezsaniko.png"
                alt="Patakiné Zs. Anikó"
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-white font-black text-xl mb-1">Patakiné Zs. Anikó</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">III.Dan — Klubvezető helyettes</p>
              <a href="mailto:patakineaniko@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">patakineaniko@gmail.com</a>
              <a href="tel:+36703184834" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-318-4834</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tax 1% Banner */}
      <section className="py-12 bg-neon-orange/5 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-black text-2xl mb-3">Ajánld fel adód 1%-át!</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Segíts nekünk, hogy harcosaink méltó körülmények között készülhessenek!
            Egyetlen forintodba sem kerül.
          </p>
          <div className="inline-flex items-center gap-3 bg-gray-900/60 border border-neon-orange/30 rounded-xl px-6 py-3">
            <span className="text-gray-500 text-sm">Adószám:</span>
            <span className="text-neon-orange font-mono font-bold text-lg tracking-widest">18012020-1-43</span>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Ügyfélkapu: nav.gov.hu → 1+1%-os nyilatkozat → Adószám megadása
          </p>
        </div>
      </section>
    </div>
  );
}
