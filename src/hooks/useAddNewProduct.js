import { useState } from "react";
import { ref, push, set } from "firebase/database";
import { db, storage } from "libs/firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

function useAddNewProduct() {
  const [loading, setLoading] = useState(false);

  const productLoader = async function (productData, imageFile) {
    setLoading(true);
    const newRef = await push(ref(db, "products"));
    const imageRef = await storageRef(
      storage,
      `images/products/${imageFile.name}`
    );
    const uploadRef = await uploadBytes(imageRef);
    const image = await getDownloadURL(imageRef);
    set(newRef, { ...productData });

    let results = Promise.all([newRef, imageRef, uploadRef, image]);

    results
      .then(() => {
        set(newRef, {
          ...productData,
          image,
          imageStoragePath: uploadRef.metadata.fullPath,
          key: newRef.key,
          sku: `soccer-${newRef.key}`,
        });
      })
      .then(() => setLoading(false));
  };

  return [loading, productLoader];
}
export { useAddNewProduct };
