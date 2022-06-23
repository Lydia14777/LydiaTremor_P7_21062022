//On importe React
import React, { useContext } from "react";
//On importe la page AppContext
import { UidContext } from "../components/AppContext";
//On importe la page LeftNav
import LeftNav from "../components/LeftNav";
//On importe la page NewPostForm
import NewPostForm from "../components/Post/NewPostForm";
//On importe la page Thread
import Thread from "../components/Thread";
//On importe le dossier Log
import Log from "../components/Log";
//On importe la page Trends
import Trends from "../components/Trends";
//On importe la page FriendsHint
import FriendsHint from "../components/Profil/FriendsHint";

//On crée un fonction Home : la page d'accueil
const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
            {uid && <FriendsHint />}
          </div>
        </div>
      </div>
    </div>
  );
};

//On exporte la fonction/méthode Home
export default Home;
