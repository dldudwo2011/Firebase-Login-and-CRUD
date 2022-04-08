import React, { useState } from "react";

import { EditProductStyles } from "./styles";
import { ProductEditor } from "components/products/ProductEditor";
import PlaceHolderImage from "assets/images/default.png";
import { useAddNewProduct } from "hooks/useAddNewProduct";
import { EditorFeedBack } from "components/products/EditorFeedBack";

const defaults = {
  description: "Foot Ball Boot",
  name: "Product Name",
  price: "330",
  color: "1",
  status: "Just In",
};

function AddProduct({ children, ...props }) {
  const [isWriting, setIsWriting] = useState(false);
  const [productName, setProductName] = useState(defaults.name);
  const [productPrice, setProductPrice] = useState(defaults.price);
  const [productDescription, setProductDescription] = useState(
    defaults.description
  );
  const [productImage, setProductImage] = useState({
    previewImage: PlaceHolderImage,
    file: null,
  });
  const [productStatus, setProductStatus] = useState(defaults.status);
  const [productColors, setProductColors] = useState(defaults.color);
  const [loading, productLoader] = useAddNewProduct();

  function handleProductName(name) {
    setProductName(name);
  }

  function handleProductPrice(price) {
    let val = price;
    let maxLength = 3;
    let newValue =
      val <= maxLength ? val : parseInt(val.toString().substring(0, maxLength));
    setProductPrice(newValue);
  }
  function handleProductDescription(description) {
    setProductDescription(description);
  }

  function handleProductStatus(status) {
    setProductStatus(status);
  }

  function handleProductColors(color) {
    setProductColors(color);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const productData = {
      title: productName,
      price: productPrice,
      type: productDescription,
      status: productStatus,
      numberOfColours: productColors,
    };
    setIsWriting(true);

    productLoader(productData, productImage.file);
    setProductDescription(defaults.description);
    setProductImage({ previewImage: PlaceHolderImage, file: null });
    setProductColors(defaults.colors);
    setProductPrice(defaults.price);
    setProductName(defaults.name);
    setProductStatus(defaults.status);
  }

  if (isWriting) {
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting} />;
  } else {
    return (
      <EditProductStyles {...props}>
        <ProductEditor
          productName={productName}
          productPrice={productPrice}
          productDescription={productDescription}
          productImage={productImage}
          productStatus={productStatus}
          productColors={productColors}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          handleProductColors={handleProductColors}
          handleProductStatus={handleProductStatus}
          handleSubmit={handleSubmit}
        />
      </EditProductStyles>
    );
  }
}

export default AddProduct;
