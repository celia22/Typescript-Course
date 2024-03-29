import { useState, useEffect } from "react";
import { cartIemsProps } from '../../interfaces/cartItemsInterface';

export default function FetchCart() {

  const [result, setResult] = useState<cartIemsProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);

  return result

}
