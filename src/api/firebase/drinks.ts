import axios from "axios";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { database } from "../../firebase";

export const postDrink = async (patronId: string, drinkName: string) => {
  await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
  ).then((response) => {
    const cocktail = response.data;
    const patronRef = doc(database, "patrons", patronId);
    updateDoc(patronRef, {
      drinks: arrayUnion(cocktail.drinks[0]),
    });
  });
};
