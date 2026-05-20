export default function Oath() {
  const tenets = [
    {
      title: 'Udvariasság - Ye Ui',
      description: 'A mesterek felé köszönésként mindenhol és mindenkor meghajlás kötelező! A taekwondosok előzékenyen és udvariasan viselkedjenek mindenkivel szemben. Vitás helyzeteknél alkalmazzák a kölcsönös engedmény alapelvét. Ne legyenek önzőek vagy irigyek, tudjanak örülni társaik örömének is. A közös érdekeket mindig helyezzék az egyéni szempontok elé! Tegyenek különbséget mester és tanítvány vagy rangidős és kezdő között. A magasabb fokozatúakban becsüljék a nagyobb tudást, szakmai tapasztalatot s tartsák be feléjük a kötelező tiszteletadás szabályait. Csak azok várjanak el tiszteletet és megbecsülést, akik ehhez méltóan viselkednek, és akik maguk is képesek arra, hogy tiszteljenek másokat. A tiszteletadással visszaélni szigorúan tilos!',
    },
    {
      title: 'Becsületesség - Yom Chi',
      description: 'A Taekwon-dos tartsa be adott szavát, és ígéretét soha ne szegje meg. Bármilyen egyéni sikereket ér el az életben, soha ne feledkezzék meg azokról, akikkel együtt kezdett és segítették, és akiknek ezért a belé fektetett munkáért nagyon sokat köszönhet. A taekwondos soha semmilyen körülmények között se hazudjon! A taekwondos tartsa be adott szavát, ígéretét soha ne szegje meg. Legyen hűséges hazájához, a Taekwondohoz, mesteréhez és sporttársaihoz. Minden esetben maradjon szerény, nyílt és természetes. Igyekezzen a Taekwondo érdekeit a saját érdekei elé helyezni. A taekwondos ne felejtse el, hogy mindenkor és minden helyzetben a Taekwondot képviseli. Viselkedésével a kívülálló képet kap a Taekwondoról.',
    },
    {
      title: 'Állhatatosság - In Nae',
      description: '"A türelem megismeréshez és boldoguláshoz vezet." Csak akinek van megfelelő kitartása, az remélheti, hogy vágyai egyszer teljesülni fognak. A taekwondos legyen türelmes, ne hajszolja az övfokozatokat, várja ki a kötelező várakozási időket, és minden alkalmat ragadjon meg saját elméleti és gyakorlati tudásának gyarapítására. Rendszeresen járjon edzésre, mert a hébe-hóba lejáró tanítványról senki sem hiszi el, hogy egyszer fekete öves mester akar lenni. Csak az járjon edzésre, aki örömmel teszi azt.',
    },
    {
      title: 'Önuralom - Guk Gi',
      description: 'A sportbeli ellenfeleken kívül a mindennapok nehézségeit és akadályait is le kell küzdeni, amire csak az lesz képes, aki nagyfokú önuralommal és önfegyelemmel rendelkezik. A taekwondos soha ne elégedjen meg önmagával, ugyanakkor önfegyelemmel viselje a kudarc és a siker élményét.',
    },
    {
      title: 'Rettenthetetlen küzdőszellem - Baekjul Boolgool',
      description: 'A Taekwon-dos legyen bátor és elszánt. Ne keresse a veszélyt, de ne is hátráljon meg előle. Ha igazságtalansággal találkozik, szálljon síkra a gyengébb védelmében. Amennyiben pedig harcra kerülne a sor, függetlenül az ellenfél erejétől, félelem és tétovázás nélkül álljon helyt. A taekwondosnak a küzdelemben mindent el kell követnie szabályos keretek között a győzelem érdekében. Az életben ne keresse a veszélyt, ne kezdeményezzen verekedést. Ha vele szemben kezdeményeznek, akkor próbálja meg elkerülni azt. Ha harcra kerül a sor, akkor viszont ne hátráljon meg. Ha igazságtalansággal találkozik, szálljon szembe a gyengébb védelmében.',
    },
  ];

  const oath = [
    '1. A Taekwondo tanításainak mindenkor eleget teszek!',
    '2. Tiszteletet adok mesteremnek és valamennyi társamnak!',
    '3. Soha nem élek vissza Taekwondo tudásommal!',
    '4. Ha kell, segítek a bajbajutottakon!',
    '5. Minden erőmmel a békét építem!',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Taekwondo alapelvei</p>
          <h1 className="text-5xl font-black text-white">Eskü és Tanai</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Oath Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-white mb-8">Taekwondo Eskü</h2>
          <div className="bg-gray-900 border border-neon-orange/30 rounded-2xl p-8 mb-8">
            <div className="space-y-4">
              {oath.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-neon-orange/10 border border-neon-orange/30">
                      <span className="text-neon-orange font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tenets Section */}
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Taekwon-do Tanai</h2>
          <p className="text-gray-400 mb-12">Taekwon-do Jungshin</p>

          <div className="space-y-8">
            {tenets.map((tenet, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-neon-orange/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-neon-orange/10 border border-neon-orange/30">
                      <span className="text-neon-orange font-black">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-neon-orange">{tenet.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-14">{tenet.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 py-12 px-8 bg-neon-orange/5 border border-neon-orange/20 rounded-2xl">
          <div className="text-center">
            <p className="text-gray-400 text-sm tracking-wider uppercase mb-3">Choi Hong Hi, az ITF Taekwondo alapítója</p>
            <p className="text-2xl sm:text-3xl font-light text-gray-200 italic leading-relaxed">
              "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
