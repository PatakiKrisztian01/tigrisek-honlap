// src/data/taekwondoData.ts

export interface FormItem {
  num: string | number;
  name: string;
  movements: number;
  type: 'preparatory' | 'official';
  meaning: string;
  diagramImage?: string; // Új lehetőség: kép a tull lépésdiagramjáról
  embedVideoId?: string; // Új lehetőség: konkrét YouTube beágyazási kód (pl. "dQw4w9WgXcQ")
}

export interface TenetItem {
  title: string;
  korean: string;
  text: string;
  imageUrl?: string; // Új lehetőség: kép az adott alapelvhez
  videoId?: string;  // Új lehetőség: magyarázó videó az adott alapelvhez
}

export const formsData: FormItem[] = [
  { 
    num: 'E1', 
    name: 'Saju Jirugi', 
    movements: 14, 
    type: 'preparatory', 
    meaning: 'Négyirányú ütés. Alapvető előkészítő gyakorlat a kezdő tanítványok részére...',
    diagramImage: 'https://tigrisek.hu/images/diagrams/saju_jirugi.jpg', // Opcionális plusz kép
    embedVideoId: '' // Ide jöhet a konkrét YouTube ID, ha nem csak keresni akarsz
  },
  { 
    num: 'E2', 
    name: 'Saju Makgi', 
    movements: 16, 
    type: 'preparatory', 
    meaning: 'Négyirányú hárítás. A második előkészítő gyakorlat...',
    diagramImage: '',
    embedVideoId: ''
  },
  { 
    num: 1, 
    name: 'Chon-Ji', 
    movements: 19, 
    type: 'official', 
    meaning: 'Szó szerint "Menny és Föld"-et jelent...',
    embedVideoId: '' 
  },
  // ... ide jön a többi 23 formagyakorlat változatlanul
];

export const tenetsData: TenetItem[] = [
  {
    title: 'Udvariasság',
    korean: 'Ye Ui',
    text: 'A mesterek felé köszönésként mindenhol és mindenkor meghajlás kötelező!...',
    imageUrl: '/images/tenets/courtesy.jpg' // Specifikus kép csak az udvariassághoz
  },
  {
    title: 'Becsületesség',
    korean: 'Yom Chi',
    text: 'A Taekwon-dos tartsa be adott szavát, és ígéretét soha ne szegje meg...',
    imageUrl: '/images/tenets/integrity.jpg'
  },
  // ... ide jön az Állhatatosság, Önuralom, Rettenthetetlen küzdőszellem
];

export const oathData: string[] = [
  'A Taekwondo tanításainak mindenkor eleget teszek!',
  'Tiszteletet adok mesteremnek és valamennyi társamnak!',
  'Soha nem élek vissza Taekwondo tudásommal!',
  'Ha kell, segítek a bajbajutottakon!',
  'Minden erőmmel a békét építem!',
];
