export const load = ({ fetch, params }: any) => {
  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return await res.json();
  }

  return {
    product: fetchProduct(params.productId)
  }
};