//On importe react
import React, { useContext } from "react";
//On importe le dossier Log
import Log from "../components/Log";
//On importe la constante UidContext
import { UidContext } from "../components/AppContext";
//On importe la page UpdateProfil
import UpdateProfil from "../components/Profil/UpdateProfil";

//On crée une fonction Profil : la page des profils
const Profil = () => {
  //On stocke la valeur de UidContext
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="btn-principaux">
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

//Si uid est true = uid ?
//: => s'il n'y a pas cette valeur