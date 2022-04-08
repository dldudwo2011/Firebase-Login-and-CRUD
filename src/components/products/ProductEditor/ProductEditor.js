import React from "react";

import { ProductEditorStyles } from "./styles";

import { ProductDataEntryForm } from "./../ProductDataEntryForm"
import { ProductPreview } from "./../ProductPreview"



function ProductEditor({ children, productName, productPrice, productDescription, productImage, handleSubmit, productStatus, productColors, handleProductName, handleProductPrice, handleProductDescription, setProductImage, handleProductStatus, handleProductColors, ...props }) {
  return (
    <ProductEditorStyles {...props}>
      <ProductDataEntryForm handleProductName={handleProductName} handleProductPrice={handleProductPrice} handleProductDescription={handleProductDescription} setProductImage={setProductImage} handleProductStatus={handleProductStatus} handleProductColors={handleProductColors} handleSubmit={handleSubmit} productPrice={productPrice}/>
      <ProductPreview productName={productName} productPrice={productPrice} productDescription={productDescription} productImage={productImage} productStatus={productStatus} productColors={productColors}/>
    </ProductEditorStyles>
  );
}

export default ProductEditor;
