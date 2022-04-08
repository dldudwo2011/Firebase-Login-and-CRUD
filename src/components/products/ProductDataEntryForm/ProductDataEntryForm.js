import React from "react";
import Select from "react-select";

import {
  ProductDataEntryFormStyles,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductStatus,
  ProductColors,
} from "./styles";

import { SubmitButton } from "components/ui/buttons";
import { Label, Input } from "components/ui/forms";
import { ProductImageDropBox } from "../ProductImageDropBox";

function ProductDataEntryForm({
  children,
  handleProductName,
  handleProductPrice,
  handleProductDescription,
  handleProductStatus,
  handleProductColors,
  handleSubmit,
  setProductImage,
  productPrice,
  ...props
}) {
  const options = [
    { value: "Firm-Ground Football Boot", label: "Firm-Ground" },
    { value: "Soft-Ground Football Boot", label: "Soft-Ground" },
    { value: "Artificial-Grass Football Boot", label: "Artificial-Grass" },
    { value: "Multi-Ground Football Boot", label: "Multi-Ground" },
    { value: "Indoor/Court Football Boot", label: "Indoor/Court" },
    { value: "Turf Foorball Shoe", label: "Turf" },
  ];

  const statusOptions = [
    { value: "Member Access", label: "Member-Only" },
    { value: "Sold Out", label: "Sold-Out" },
    { value: "Sustainable Materials", label: "Sustainable-Materials" },
    { value: "Just In", label: "Just-In" },
    { value: "Customise", label: "Customize" },
  ];

  return (
    <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage} />
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label>Product Name</Label>
          <Input
            onChange={(e) => handleProductName(e.target.value.trim())}
            maxLength={30}
          />
        </ProductName>

        <ProductPrice>
          <Label>Product Price</Label>
          <Input
            className="priceInput"
            onChange={(e) => handleProductPrice(e.target.value.trim())}
            type="number"
            name="MyProp"
            value={productPrice}
          />
        </ProductPrice>
      </fieldset>
      <ProductDescription>
        <Label>Product Description</Label>
        <Select
          options={options}
          onChange={(selectedOption) =>
            handleProductDescription(selectedOption.value)
          }
        />
      </ProductDescription>
      <ProductStatus>
        <Label>Product Status</Label>
        <Select
          options={statusOptions}
          onChange={(selectedOption) =>
            handleProductStatus(selectedOption.value)
          }
        />
      </ProductStatus>
      <ProductColors>
        <Label>Product Colors</Label>
        <Input
          type="number"
          onChange={(e) => handleProductColors(e.target.value.trim())}
        />
      </ProductColors>
      <div>
        <SubmitButton
          width="100%"
          padding="0.75rem 0"
          margin="1.125rem 0 0 0"
          type="submit"
        >
          Add Product
        </SubmitButton>
      </div>
    </ProductDataEntryFormStyles>
  );
}

export default ProductDataEntryForm;
