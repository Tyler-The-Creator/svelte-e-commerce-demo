import { writable } from 'svelte/store';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
}

type Cart = {
  id: number;
  products: Product[];
}

export const cart = writable<Cart>({ id: 1, products: [] });
export type { Product, Cart };