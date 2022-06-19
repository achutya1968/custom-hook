import { useState, useEffect } from "react";

export default function useProductHook() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getData() {
      const resp = await fetch(url);
      const data = await resp.json();
      setProduct(data);
      setLoading(false)
    }
    getData();
  }, []);

  return { product,loading };
}