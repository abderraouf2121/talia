/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'milkshake' | 'bowl' | 'dessert' | 'signature';
  image?: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  hours: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  description: string;
}
