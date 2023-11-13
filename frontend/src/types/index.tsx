export interface Patron {
  id: string;
  name: string;
  weight: string;
  drinks: Drink[];
}

export interface Drink {
  strDrink: string;
  strIngredient1: string;
  strMeasure1: string;
  dateModified: string;
}
