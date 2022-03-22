import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { AppBar } from "../../components/appbar";
import { SideBar } from "../../components/sidebar";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

function DashBoardPage(props) {
  const [isUser, setIsUser] = useState(false);
  const navigator = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });

  if (isUser) {
    return (
      <>
        <AppBar />
        <main>
          <div className="d-flex w-100 vh-100">
            <SideBar />
            <Outlet />
          </div>
        </main>
      </>
    );
  } else {
    return null;
  }
}

export default DashBoardPage;
