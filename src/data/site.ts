export interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
}

const px = (id: number, w = 900, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const siteImages = {
  hero: px(26898066, 2000, 2600),
  heroSecondary: px(3641059, 1200, 1500),
  story: px(7167019, 1400, 1000),
  bridal: px(11474252, 1600, 1000),
  contact:
    'https://images.pexels.com/photos/39648/lady-black-dress-jewellery-dress-39648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
};

export const collectionGrid: { id: string; image: string }[] = [
  { id: 'I', image: px(2849742) },
  { id: 'II', image: px(19869445) },
  { id: 'III', image: px(9428790) },
  { id: 'IV', image: px(30541177) },
  { id: 'V', image: px(5737290, 1200, 1200) },
  { id: 'VI', image: px(16562977) },
];

export const featuredProducts: Product[] = [
  {
    id: 'p1',
    name: 'Céleste Solitaire Ring',
    category: 'Rings',
    material: '18k Gold · Diamond',
    price: 4800,
    image: px(2849742),
  },
  {
    id: 'p2',
    name: 'Aurelia Pendant Necklace',
    category: 'Necklaces',
    material: '18k Gold',
    price: 2650,
    image: px(19869445),
  },
  {
    id: 'p3',
    name: 'Perle Royale Earrings',
    category: 'Earrings',
    material: 'South Sea Pearl',
    price: 1980,
    image: px(9428790),
  },
  {
    id: 'p4',
    name: 'Éternité Band',
    category: 'Rings',
    material: 'Platinum · Pavé Diamond',
    price: 3950,
    image: px(30541177),
  },
  {
    id: 'p5',
    name: 'Lumière Stud Earrings',
    category: 'Earrings',
    material: 'White Gold · Diamond',
    price: 2400,
    image: px(5737290, 1200, 1200),
  },
  {
    id: 'p6',
    name: 'Vague Diamond Bracelet',
    category: 'Bracelets',
    material: 'White Gold · Diamond',
    price: 5200,
    image: px(16562977),
  },
  {
    id: 'p7',
    name: 'Fleur de Nuit Necklace',
    category: 'Necklaces',
    material: 'Rose Gold · Diamond',
    price: 3350,
    image: px(27357168),
  },
  {
    id: 'p8',
    name: 'Ovale Signature Ring',
    category: 'Rings',
    material: '18k Gold · Pear Diamond',
    price: 6100,
    image: px(9838994),
  },
];

export const categories: Category[] = [
  { id: 'rings', name: 'Rings', image: px(28843741, 900, 1100) },
  { id: 'necklaces', name: 'Necklaces', image: px(29013500, 900, 1100) },
  { id: 'earrings', name: 'Earrings', image: px(5370644, 900, 1100) },
  { id: 'bracelets', name: 'Bracelets', image: px(4735895, 900, 1100) },
];

export const collections: Collection[] = [
  {
    id: 'celeste',
    name: 'Céleste',
    tagline: 'Inspired by starlight on still water',
    image: px(39017189, 1200, 900),
  },
  {
    id: 'aurelia',
    name: 'Aurélie',
    tagline: 'The warmth of golden hour, held forever',
    image: px(4735895, 1200, 900),
  },
  {
    id: 'sirene',
    name: 'Sirène',
    tagline: 'Pearls born of the sea, set in light',
    image: px(9429420, 1200, 900),
  },
];

export const materials: Material[] = [
  {
    id: 'diamond',
    name: 'Diamond',
    description: 'Ethically sourced, flawlessly cut stones chosen one by one.',
    image: px(12427696, 900, 1100),
  },
  {
    id: 'gold',
    name: '18k Gold',
    description: 'Warm, enduring gold in yellow, rose and white tones.',
    image: px(29043373, 900, 1100),
  },
  {
    id: 'pearl',
    name: 'Pearl',
    description: 'Lustrous South Sea and Akoya pearls of rare character.',
    image: px(6718757, 900, 1100),
  },
  {
    id: 'sapphire',
    name: 'Sapphire',
    description: 'Deep blue gemstones with a story in every facet.',
    image: px(32988651, 900, 1100),
  },
];
