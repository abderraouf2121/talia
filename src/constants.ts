/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Talia Coffeeshop",
  address: "56 Rue des Frères Retal, Boufarik",
  hours: "Open daily, closes at 8:30 PM",
  phone: "+213 XXX XX XX XX", // Placeholder as requested
  rating: 4.2,
  reviewsCount: 80,
  description: "Talia Coffeeshop is a cozy and welcoming café located in Boufarik. It offers a relaxing atmosphere where customers can enjoy high-quality coffee, delicious desserts, and refreshing drinks. It is a popular local spot known for its friendly vibe and comfortable setting."
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich and intense classic espresso shot.',
    price: '150 DA',
    category: 'coffee'
  },
  {
    id: 'macchiato',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.',
    price: '350 DA',
    category: 'coffee'
  },
  {
    id: 'choc-banana-ms',
    name: 'Chocolate Banana Milkshake',
    description: 'Creamy blend of rich chocolate, fresh bananas, and milk.',
    price: '450 DA',
    category: 'milkshake'
  },
  {
    id: 'granola-bowl',
    name: 'Granola Bowl',
    description: 'Healthy granola served with yogurt, fresh fruits, and a drizzle of honey.',
    price: '500 DA',
    category: 'bowl'
  },
  {
    id: 'fondant',
    name: 'Fondant au Chocolat',
    description: 'Warm chocolate cake with a melting heart, served with vanilla ice cream.',
    price: '550 DA',
    category: 'dessert'
  },
  {
    id: 'fraisier',
    name: 'Fraisier',
    description: 'Classic French strawberry cake with light cream and sponge.',
    price: '600 DA',
    category: 'dessert'
  },
  {
    id: 'blue-curacao',
    name: 'Blue Curacao Snickers',
    description: 'A unique signature blend of blue curacao and snickers flavors.',
    price: '650 DA',
    category: 'signature'
  },
  {
    id: 'red-passion',
    name: 'Red Passion',
    description: 'Refreshing fruity signature drink with vibrant red notes.',
    price: '650 DA',
    category: 'signature'
  }
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2647&auto=format&fit=crop",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
  dessert: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2670&auto=format&fit=crop",
  interior: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop",
  vibe: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2487&auto=format&fit=crop"
};
