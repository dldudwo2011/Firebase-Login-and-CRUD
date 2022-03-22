import React, { useState } from "react";
import "./notFound.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "libs/firebase";

import { onAuthStateChanged } from "firebase/auth";

function PageNotFound(props) {
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
    navigator("dashboard");
    return null;
  } else {
    return (
      <>
        <div className="back-ground">
          <div className="stage">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>
      </>
    );
  }
}

export default PageNotFound;
