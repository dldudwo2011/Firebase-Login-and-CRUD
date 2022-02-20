import React from "react";

import { NavBar } from "../../components/navbar";
import { SideBar } from "../../components/sidebar";

function DashBoardPage(props) {
  return (
    <>
      <NavBar />
      <main>
        <div className="d-flex w-100 vh-100">
          <SideBar />
        </div>
      </main>
    </>
  );
}

export default DashBoardPage;
