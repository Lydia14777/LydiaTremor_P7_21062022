//On importe react
import React, { useContext } from "react";
//On importe react-redux :
import { useSelector } from "react-redux";
//On importe la page AppContext
import { UidContext } from "../components/AppContext";
//On importe la page LeftNav
import LeftNav from '../components/LeftNav';
//On importe la page Utils
import { isEmpty } from "../components/Utils";
//On importe la page Card
import Card from "../components/Post/Card";
//On importe la page Trends
import Trends from "../components/Trends";
//On importe la page FriendsHint
import FriendsHint from "../components/Profil/FriendsHint";

//On crée un fonction Trending : la page
const Trending = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);

  return <div className="trending-page">
    <LeftNav />
    <div className="main">
      <ul>
        {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id} />)}
      </ul>
    </div>
    <div className="right-side">
      <div className="right-side-container">
        <Trends />
        {uid && <FriendsHint />}
      </div>
    </div>
  </div>;
};

//On exporte la fonction/méthode Trending
export default Trending;
