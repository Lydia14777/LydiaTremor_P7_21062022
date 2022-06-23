//On importe react
import React, { useState } from "react";
//On importe la page SignInForm
import SignInForm from "./SignInForm";
//On importe la page SignUpForm
import SignUpForm from "./SignUpForm";

//Utilise un hook : on stock les composants signUpModal (page s'inscrire) et setSignUpModal (page se connecter)
const Log = ( props ) => {
  const [signUpModal, setSignUpModal] = useState(props.signup); //1er sur true
  const [signInModal, setSignInModal] = useState(props.signin); //2eme sur false

  //La fonction handleModals
  const handleModals = (e) => {
    //Récupère l'évènement cliqué
    //Si c'est l'id register qui est sélectionné
    if (e.target.id === "register") {
      //Seul la page se connecter s'affiche
      setSignInModal(false);
      setSignUpModal(true);
    }
    //Sinon, on utilise id login
    else if (e.target.id === "login") {
      //Seul la page s'inscrire s'affiche
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  //Renvoit le rendu visuel final
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />} 
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

//On exporte la constante Log
export default Log;

/*
//Lors du click, on lance la fonction handleModals
<li onClick={handleModals}
  id="register"
  className={signUpModal ? "active-btn" : null}>
  S'inscrire
</li>
<li onClick={handleModals}
  id="login"
  className={signInModal ? "active-btn" : null}>
  Se connecter
</li>
*/

/*
Si sur true = affiche la page s'inscrire
{signUpModal && <SignUpForm />} 
Si sur false = affiche la page se connecter
{signInModal && <SignInForm />}
*/