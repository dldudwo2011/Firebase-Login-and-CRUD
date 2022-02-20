import React from "react";

import { AppBar } from "../../components/appbar";
import { SideBar } from "../../components/sidebar";
import { Panels } from "../../components/panels";
function DashBoardProductPage(props) {
  return (
    <>
      <AppBar />
      <main>
        <div className="d-flex w-100 vh-100">
          <SideBar />
          <Panels />
        </div>
      </main>
    </>
  );
}

export default DashBoardProductPage;
