import axios from "axios";
import { urls } from "../../config/urls";

export const postDrink = async (id: string, drinkName: string) => {
  await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
  ).then((response) => {
    const drink = response.data.drinks[0];

    const cocktail = {
      strDrink: drink.strDrink,
      strIngredient1: drink.strIngredient1,
      strMeasure1: drink.strMeasure1,
      dateModified: `${new Date()}`,
    };

    axios.put(`${urls.api.addDrink}${id}`, { ...cocktail });
    return;
  });
};
