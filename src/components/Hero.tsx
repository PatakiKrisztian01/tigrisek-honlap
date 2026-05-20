import { ArrowRight, Trophy, Users, Calendar, ChevronDown } from 'lucide-react';
import type { Section } from '../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const stats = [
  { icon: Trophy, value: '30+', label: 'Év Tapasztalat' },
  { icon: Users, value: '100+', label: 'Aktív Tag' },
  { icon: Trophy, value: 'VB', label: 'Bronzérem' },
  { icon: Calendar, value: 'EB', label: 'Aranyérem' },
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8611419/pexels-photo-8611419.jpeg"
            alt="Taekwondo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/tigrisátlátszó.png"
              alt="Tigrisek Logo"
              className="h-32 sm:h-40 object-contain drop-shadow-2xl animate-bounce"
              style={{ animation: 'bounce 3s ease-in-out infinite' }}
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-neon-orange/10 border border-neon-orange/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-sm font-medium tracking-wider uppercase">Budapest Tigers Taekwon-do Team</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
            BUDAPESTI
            <span className="block text-neon-orange">TIGRISEK SE</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            ITF Taekwon-do klub Budapestről. Hagyomány, becsület, és küzdőszellem — 1990 óta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onNavigate('training')}
              className="group flex items-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/40"
            >
              Csatlakozz hozzánk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('taekwondo')}
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border border-neon-orange/30 hover:border-neon-orange"
            >
              Mi a Taekwon-do?
            </button>
          </div>

          <a
            href="#stats"
            className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-neon-orange transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span className="text-sm tracking-wider uppercase">Fedezd fel</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-gray-950 border-y border-gray-800">
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
      <section className="py-20">
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
      <section className="py-16 border-y border-gray-800 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-neon-orange/30 font-serif mb-4">"</div>
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed italic mb-6">
            A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie.
          </blockquote>
          <p className="text-gray-600 text-sm tracking-wider uppercase">— Choi Hong Hi, az ITF Taekwondo alapítója</p>
        </div>
      </section>

      {/* Club Leaders */}
      <section className="py-20">
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
              <div className="w-20 h-20 bg-neon-orange/10 border-2 border-neon-orange/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-neon-orange font-black text-lg">PA</span>
              </div>
              <h3 className="text-white font-black text-xl mb-1">Patakiné Zs. Anikó</h3>
              <p className="text-neon-orange font-bold text-sm mb-4">III.Dan — Klubvezető helyettes</p>
              <a href="mailto:patakineaniko@gmail.com" className="text-gray-400 hover:text-neon-orange text-sm transition-colors block mb-1">patakineaniko@gmail.com</a>
              <a href="tel:+36709415992" className="text-gray-400 hover:text-neon-orange text-sm transition-colors">+36-70-941-5992</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tax 1% Banner */}
      <section className="py-12 bg-neon-orange/5 border-y border-neon-orange/20">
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
