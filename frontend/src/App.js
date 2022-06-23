//On importe react
import React, { useEffect, useState } from "react";
//On importe le dossier Routes
import Routes from "./components/Routes";
//On importe la constante UidContext
import { UidContext } from "./components/AppContext";
//On importe la librairie axios pour faire des requêtes : Axios est une bibliothèque JavaScript fonctionnant comme un client HTTP. Elle permet de communiquer avec des API en utilisant des requêtes
import axios from "axios";
//On importe 
import { useDispatch } from "react-redux";
//On importe 
import { getUser } from "./actions/user.actions";


///On importe les routes dans App
const App = () => {
  //On stocke uid
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  //Le Hook effect permet l’exécution d’effets de bord dans les fonctions composants, permet de déclencher un effet de bord lors du re-rendering d’un composant
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, 
  [uid, dispatch]);

  return (
    //Chaque objet Contexte est livré avec un composant React Provider qui permet aux composants consommateurs de s’abonner aux mises à jour du contexte
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}


export default App;
