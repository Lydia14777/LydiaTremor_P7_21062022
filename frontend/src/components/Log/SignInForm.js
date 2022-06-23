//On importe react
import React, { useState } from "react";
//On importe la librairie axios pour faire des requêtes : Axios est une bibliothèque JavaScript fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes
import axios from "axios";

//On crée une fonction SignInForm
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Le login
  const handleLogin = (e) => {
    //On prévient un comportement par default
    e.preventDefault();
    //On récupère l'erreur sur l'email
    const emailError = document.querySelector(".email.error");
      //On récupère l'erreur sur le mot de passe
    const passwordError = document.querySelector(".password.error");

    //On utilise la méthode axios
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        //S'il y a une erreur
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }
        //Sinon on retourne au /
        else {
          window.location = "/";
        }
      })
      //On renvoit un msg d'erreur
      .catch((err) => {
        console.log(err);
      });
  };

  //On retourne un formulaire
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        //Si l'input change
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

//On exporte la fonction SignInForm
export default SignInForm;

/*
On stocke les erreurs
<div className="email error"></div>
<br />
<div className="password error"></div>
*/