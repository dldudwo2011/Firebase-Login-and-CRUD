import React from "react";
import { PanelStyles, PanelBody, PanelHeader } from "./styles";
import { AddProduct } from "components/products/widgets/AddProduct";

// import {
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from "firebase/storage";
// import { ref as databaseRef, push, set, get, remove } from "firebase/database";
// import { db, storage } from "libs/firebase";

function AddPanel({title,...props}) {
  return (
    <PanelStyles>
      <PanelHeader>
        <h2>{title || "Display Panel"}</h2>
      </PanelHeader>
      <PanelBody>
        <AddProduct/>
      </PanelBody>
    </PanelStyles>
  );
}

export default AddPanel;
