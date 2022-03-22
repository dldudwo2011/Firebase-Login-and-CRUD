import { Routes, Route } from "react-router-dom";

import React from "react";

import { LoginPage, DashBoardPage, PageNotFound } from "./pages";

import {
  AddProductPanel,
  EditProductPanel,
  ViewAllPanel,
} from "components/panels";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPage />}>
          <Route
            index
            element={<ViewAllPanel path="all" title="All Products" />}
          />
          <Route
            path="add"
            element={<AddProductPanel title="Add New Product " />}
          />
          <Route
            path="edit"
            element={<EditProductPanel title="Edit New Product " />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
