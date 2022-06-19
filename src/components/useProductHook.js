import { useState, useEffect } from "react";

export default function useProductHook() {
  const [product, setProduct] = useState(null);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getData() {
      const resp = await fetch(url);
      const data = await resp.json();
      setProduct(data);
    }
    getData();
  }, []);

  return { product };
}