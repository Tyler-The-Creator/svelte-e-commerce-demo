export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
}

export type Cart = {
  id: number;
  products: Product[];
}
