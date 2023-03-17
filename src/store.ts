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
export function calculateCartTotal(cart: Cart) {
  return cart.products.reduce((total, product) => total + product.price, 0);
}
export const cartTotal = writable<number>(0);

export function resetCart() {
  cart.set({ id: 1, products: [] });
  cartTotal.set(0)
}


export type { Product, Cart };
