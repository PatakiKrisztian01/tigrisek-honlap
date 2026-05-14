import { Clock, MapPin, Users, Star, Swords, Baby } from 'lucide-react';

const programs = [
  {
    icon: Users,
    title: 'ITF Taekwon-do',
    subtitle: 'Felnőtt és Ifjúsági',
    description: 'Hagyományos ITF Taekwon-do edzések minden korosztálynak. Forma (tul), küzdelem és törés technikák elsajátítása.',
    ageGroup: '7 év felett',
    color: 'orange',
  },
  {
    icon: Baby,
    title: 'Ovis Taekwon-do',
    subtitle: 'Óvodás korosztály',
    description: 'Játékos mozgásfejlesztés Taekwondo elemekkel a legkisebbeknek. Koordináció, egyensúly, fegyelem szórakozva.',
    ageGroup: '4–7 év',
    color: 'amber',
  },
  {
    icon: Swords,
    title: 'Kick-box',
    subtitle: 'Haladó szint',
    description: 'Dinamikus Kick-box edzések azoknak, akik komplex küzdősport technikákat szeretnének elsajátítani.',
    ageGroup: '12 év felett',
    color: 'sky',
  },
  {
    icon: Star,
    title: 'Önvédelem',
    subtitle: 'Gyakorlati alkalmazás',
    description: 'Valós szituációkra felkészítő önvédelmi technikák. A megszerzett tudás mindennapi biztonsági tudatosságra épül.',
    ageGroup: 'Minden korosztály',
    color: 'emerald',
  },
];

const schedule = [
  { day: 'Hétfő', times: ['17:00 – 18:00', '18:00 – 19:30'], groups: ['Ovis / Kicsik', 'Ifjúsági / Felnőtt'] },
  { day: 'Szerda', times: ['17:00 – 18:00', '18:00 – 19:30'], groups: ['Ovis / Kicsik', 'Ifjúsági / Felnőtt'] },
  { day: 'Péntek', times: ['17:00 – 18:00', '18:00 – 19:30'], groups: ['Ovis / Kicsik', 'Ifjúsági / Felnőtt'] },
];

const colorMap: Record<string, string> = {
  orange: 'bg-neon-orange/10 border-neon-orange/30 text-neon-orange',
  amber: 'bg-amber-600/10 border-amber-600/20 text-amber-500',
  sky: 'bg-sky-600/10 border-sky-600/20 text-sky-500',
  emerald: 'bg-emerald-600/10 border-emerald-600/20 text-emerald-500',
};

export default function Training() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Csatlakozz</p>
          <h1 className="text-5xl font-black text-white">Edzések</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-8">Programjaink</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-orange/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-4 ${colorMap[prog.color]}`}>
                  <prog.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-black text-lg mb-1">{prog.title}</h3>
                <p className="text-gray-600 text-xs font-bold mb-3">{prog.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{prog.description}</p>
                <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                  <Users className="w-3.5 h-3.5" />
                  {prog.ageGroup}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-8">Heti rend</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {schedule.map((day) => (
              <div key={day.day} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="bg-neon-orange px-6 py-3">
                  <h3 className="text-black font-black text-lg">{day.day}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {day.times.map((time, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-neon-orange" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{time}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{day.groups[i]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">* Az edzésidők változhatnak. Kérjük, egyeztetés céljából vedd fel velünk a kapcsolatot!</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-3xl font-black text-white mb-8">Helyszín</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-neon-orange/10 border border-neon-orange/30 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-neon-orange" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-1">Budapest</h3>
                <p className="text-gray-400">Kérjük, vedd fel velünk a kapcsolatot a pontos helyszínért!</p>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-gray-300 text-sm">
                Az edzések helyszínéről és az éppen aktuális változásokról a klub vezetőitől kaphatsz tájékoztatást.
                Írj nekünk emailt vagy hívj minket bátran!
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-16 bg-neon-orange/5 border border-neon-orange/30 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-white font-black text-3xl mb-4">Készen állsz?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Az első edzés ingyenes! Gyere el és ismerd meg közösségünket. Minden korosztályt szeretettel várunk.
          </p>
          <a
            href="mailto:tigrisek@gmail.com"
            className="inline-flex items-center gap-2 bg-neon-orange hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/40"
          >
            Jelentkezés emailben
          </a>
        </div>
      </div>
    </div>
  );
}
