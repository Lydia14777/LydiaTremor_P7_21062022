//On importe react
import React, { useEffect, useState } from "react";
//On importe le dossier Routes
import Routes from "./components/Routes";
//On importe 
import { UidContext } from "./components/AppContext";
//On importe 
import axios from "axios";
//On importe 
import { useDispatch } from "react-redux";
//On importe 
import { getUser } from "./actions/user.actions";

/*
///On importe les routes dans App
const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

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
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}
*/

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  )
}

export default App;
