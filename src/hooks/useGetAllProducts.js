import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "libs/firebase";

// view all panel..
function useGetAllProducts() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProductData() {
      const productRef = ref(db, "products");
      const productDataSnapShot = await get(productRef);
      setProducts(Object.values(productDataSnapShot.val()));
    }
    getProductData();
  }, []);

  return products;
}

export { useGetAllProducts };
