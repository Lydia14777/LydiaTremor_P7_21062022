//On importe react
import React, { useContext } from "react";
//On importe le dossier Log
import Log from "../components/Log";
//On importe la page AppContext
import { UidContext } from "../components/AppContext";
//On importe la page UpdateProfil
import UpdateProfil from "../components/Profil/UpdateProfil";

//On crée une fonction Profil : la page des profils
const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="../img/logos/gp-red.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

//On exporte la fonction/méthode Profil
export default Profil;
