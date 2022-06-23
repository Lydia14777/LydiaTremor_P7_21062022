//On importe createContext de la bibliothèque react : Le Contexte offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau
import { createContext } from 'react';

//On exporte la constante UidContext
export const UidContext = createContext();