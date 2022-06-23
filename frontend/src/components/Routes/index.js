//On importe react
import React from 'react';
//On importe le router react et ses méthodes
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//On importe la page Home
import Home from '../../pages/Home';
//On importe la page Profil
import Profil from '../../pages/Profil';
//On importe la page Trending
import Trending from '../../pages/Trending';
//On importe la page Navbar
import Navbar from '../Navbar';

//On crée une fonction index
const index = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Route path='*' element={<Navigate to='/Home' />} />
      </BrowserRouter>
    </div>
  );
};
//On renvoit à la page home s'il ne trouve pas les chemins déclarés
//ou =  <Route path='/' element={<Navigate to='/home' replace />} />


/*On importe le router react et ses méthodes
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const index = () => {
  return (
    <div>
      //La page Navbar
      <Navbar />
      //Le router
      <Router>
        //Switch est unique en ce qu'il affiche exclusivement un itinéraire
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/trending" element={<Trending />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};
*/

//On exporte la fonction index
export default index;