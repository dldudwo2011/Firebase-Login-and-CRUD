import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ProductImageDropBoxStyles } from "./styles";

function ProductImageDropBox({ setProductImage, ...props }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setProductImage({ previewImage: URL.createObjectURL(file), file });
    },
    [setProductImage]
  );

  const {
    getRootProps,
    getInputProps,

    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg,image/jpg,image/png, image/webp",
    maxFiles: 1,
    onDrop,
  });

  function workingThing() {
    console.log("look");
  }

  return (
    <ProductImageDropBoxStyles
      {...getRootProps({ isFocused, isDragAccept, isDragReject })}
    >
      <input {...getInputProps()} onChange={workingThing} />
      <p>Product Image Upload</p>
    </ProductImageDropBoxStyles>
  );
}

export default ProductImageDropBox;
