import React from "react";

import { AppBar } from "../../components/appbar";
import { SideBar } from "../../components/sidebar";

function DashBoardPage(props) {
  return (
    <>
      <AppBar />
      <main>
        <div className="d-flex w-100 vh-100">
          <SideBar />
        </div>
      </main>
    </>
  );
}

export default DashBoardPage;
