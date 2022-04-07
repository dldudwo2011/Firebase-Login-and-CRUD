import React from "react";

import {
  ProductPreviewStyles,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductStatus,
  ProductColors,
} from "./styles";

function ProductPreview({
  children,
  productName,
  productPrice,
  productDescription,
  productImage,
  productStatus,
  productColors,
  ...props
}) {
  return (
    <ProductPreviewStyles {...props}>
      <ProductImage>
        <img
          src={productImage.previewImage}
          className="w-100 mb-3"
          alt="placeholder"
          width="320"
          height="184"
        />
      </ProductImage>
      <ProductStatus>{productStatus}</ProductStatus>
      <ProductName>{productName}</ProductName>
      <ProductDescription>{productDescription}</ProductDescription>
      <ProductColors>{productColors} Colour</ProductColors>
      <ProductPrice>${productPrice}</ProductPrice>
    </ProductPreviewStyles>
  );
}

export default ProductPreview;
