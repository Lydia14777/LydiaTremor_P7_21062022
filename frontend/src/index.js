//On importe react
import React from "react";
//On importe react-dom : le module react-dom fournit des méthodes spécifiques au DOM 
import ReactDOM from "react-dom";
//On importe la page App
import App from "./App";
//On importe le style
import "./styles/index.scss";
//On importe 
import { Provider } from "react-redux";
//On importe 
import { applyMiddleware, createStore } from "redux";
//On importe 
import thunk from "redux-thunk";
//On importe 
import rootReducer from "./reducers";
//On importe 
import { getUsers } from "./actions/users.actions";
//On importe 
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
//On importe react
import { getPosts } from "./actions/post.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

//render = le rendu final de l'application
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  //On recupère l'élément root du Dom
  document.getElementById('root') 
);

/*
BrowserRouter
- React Router est une extension a React qui permet de gérer les routes d'une application coté client. Il permet de synchroniser (d'associer) des composants graphiques React à des urls
- Le React Router vous fournit deux composants tels que <BrowserRouter> & <HashRouter>. Ces deux composants sont différents dans le type deURL qu'ils créent et synchronisent avec
- <BrowserRouter> est utilisé plus couramment, il utilise le History API incluse dans HTML5 pour surveiller l’historique de votre routeur tandis que <HashRouter> utilise le hash de l’URL (window.location.hash) pour tout mémoriser. Si vous avez l'intention de soutenir des anciens navigateurs, vous devez être scellé contre le <HashRouter> ou créer une application React à l'aide du routeur côté client. <HashRouter> est un choix raisonnable
*/