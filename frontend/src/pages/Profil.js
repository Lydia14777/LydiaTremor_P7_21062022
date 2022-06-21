import React from "react";
import Log from "../components/Log";

const Profil = () => {

  return (
    <div className="profil-page">
      <div className="log-container">
        <Log />
        <div className="img-container">
            <img src="./img/icon-left-font.svg" alt="img-log" />
        </div>
      </div>
    </div>
  );
};

//La page est exportée dans l'application; elle peut donc être appelée
export default Profil;
