export const load = ({ fetch, params }: any) => {
  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  }

  return {
    product: fetchProduct(params.productId)
  }
};