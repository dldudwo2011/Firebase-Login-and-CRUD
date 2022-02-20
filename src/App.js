import { Routes, Route } from "react-router-dom";

import {
  LoginPage,
  DashBoardPage,
  DashBoardProductPage,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard/product" element={<DashBoardProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
