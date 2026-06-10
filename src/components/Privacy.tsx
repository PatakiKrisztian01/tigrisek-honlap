import { Shield, Mail, MapPin, Phone, FileText } from 'lucide-react';
import type { Section } from '../App';

export default function Privacy() {
  return (
    <div className="bg-black text-gray-100 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 border-b border-gray-900 pb-8">
          <Shield className="w-12 h-12 text-neon-orange mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Adatvédelmi <span className="text-neon-orange">Tájékoztató</span>
          </h1>
          <p className="text-gray-400">Hatályos: 2026. [június] [09].-tól</p>
        </div>

        <div className="space-y-10">
          
          {/* Adatkezelő adatai */}
          <section className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-neon-orange" /> 1. Az Adatkezelő adatai
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-400 uppercase tracking-wider text-xs mb-1 font-semibold">Név</p>
                <p className="text-white font-bold">Budapesti Tigrisek Sportegyesület (B.T.SE)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-wider text-xs mb-1 font-semibold">Képviselő</p>
                <p className="text-white font-bold">Pataki Krisztián (Elnök)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-wider text-xs mb-1 font-semibold">Székhely</p>
                <p className="text-gray-300">1181 Budapest, Csontváry u. 13/57.</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-wider text-xs mb-1 font-semibold">Adószám</p>
                <p className="text-gray-300">18012020-1-43</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase tracking-wider text-xs mb-1 font-semibold">Nyilvántartási szám</p>
                <p className="text-gray-300">13683 (Fővárosi Törvényszék)</p>
              </div>
              <div className="space-y-2 pt-2">
                <a href="mailto:tigrisek@gmail.com" className="flex items-center gap-2 text-neon-orange hover:text-orange-400">
                  <Mail className="w-4 h-4" /> tigrisek@gmail.com
                </a>
                <a href="tel:+36709415992" className="flex items-center gap-2 text-neon-orange hover:text-orange-400">
                  <Phone className="w-4 h-4" /> +36 70/941-5992
                </a>
              </div>
            </div>
          </section>

          {/* Kezelt adatok köre */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-neon-orange pl-3">2. A kezelt adatok köre</h2>
            <p className="text-gray-300 leading-relaxed">
              Az adatkezelés során a Portálon (www.tigrisek.hu) történő megjelenítéshez és a kapcsolatfelvételhez az alábbi személyes adatok kezelésére kerülhet sor:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-2">
              <li>Természetes személyazonosító adatok (név)</li>
              <li>Elérhetőségek (elektronikus levelezési cím, telefonszám)</li>
              <li>Rendezvényeken és edzéseken készült arckép, testsúly, foglalkozások helye és időpontja</li>
              <li>Szakmai adatok (tevékenység végzéséhez előírt szakképzettség, nemzetközi Dan igazolvány száma, ID azonosító, edzésvezetői Plaque azonosító szám)</li>
              <li>Hazai és nemzetközi befizetésekkel kapcsolatos adatok</li>
            </ul>
          </section>

          {/* Adatkezelés célja */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-neon-orange pl-3">3. Az adatkezelés célja és jogalapja</h2>
            <p className="text-gray-300 leading-relaxed">
              Az adatkezelés célja az Alapító Okiratban meghatározott alapcél szerinti tevékenység végzése, az elérhetőség biztosítása, a tevékenységről való tájékoztatás, a Portálon történő megjelenítés, valamint elektronikus hírlevél vagy tájékoztató eljuttatása.
            </p>
            <p className="text-gray-300 leading-relaxed">
              A jogalap az érintett önkéntes hozzájárulása (Infotv. 5. § (1) bekezdés a) pontja, GDPR 6. cikk (1) bekezdés a) pontja, illetve az Ektv. 13/A. § (4) bekezdése alapján). Az adatokat a B.T.SE csak a Portálon jeleníti meg, és az adatfeldolgozást végző alvállalkozókon kívül harmadik félnek nem adja át.
            </p>
          </section>

          {/* Időtartam */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-neon-orange pl-3">4. Az adatkezelés időtartama</h2>
            <p className="text-gray-300 leading-relaxed">
              A személyes adatok kezelése a hozzájárulás megadásának napján megkezdődik, és a személyes adatok kérelemre való törléséig, az adatkezelési cél megszűnéséig, az adatkezelés megtiltásáig, vagy az egyesületi tagság fennállásának végéig tart.
            </p>
          </section>

          {/* Jogok */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-neon-orange pl-3">5. Érintetti jogok és jogorvoslat</h2>
            <div className="bg-gray-900/20 border border-gray-800 rounded-xl p-5 space-y-4">
              <div>
                <h3 className="text-white font-bold mb-1">Tájékoztatás kérése</h3>
                <p className="text-gray-400 text-sm">A Felhasználó tájékoztatást kérhet adatai kezeléséről, melyre az Egyesület legkésőbb 25 napon belül írásban válaszol.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Helyesbítés, törlés, zárolás</h3>
                <p className="text-gray-400 text-sm">A Felhasználó kérheti adatainak helyesbítését, zárolását vagy törlését. A kérelem beérkezését követően 5 munkanapon belül megtörténik a módosítás. Elutasítás esetén a döntésről 30 napon belül indoklással ellátott értesítést küldünk.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Jogorvoslati lehetőségek</h3>
                <p className="text-gray-400 text-sm">A Felhasználó tiltakozhat személyes adatai kezelése ellen. Jogsérelem esetén a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat vizsgálat lefolytatása céljából, vagy bírósági jogorvoslattal élhet (törvényszék).</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
