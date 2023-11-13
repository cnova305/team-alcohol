const getPatrons = "SELECT * FROM patrons";
const getPatronById = "SELECT * FROM patrons WHERE id = $1";
const addPatron = "INSERT INTO patrons (name, weight, id) VALUES ($1, $2, $3)";
const updatePatron = "UPDATE patrons SET name = $1 WHERE id = $2";
const deletePatron = "DELETE FROM patrons WHERE id = $1";
const addDrink = (
  strDrink,
  strIngredient1,
  strMeasure1,
  dateModified
) => `UPDATE patrons
      SET drinks = array_append(drinks, '{"strDrink": "${strDrink}", "strIngredient1": "${strIngredient1}", "strMeasure1": "${strMeasure1}", "dateModified": "${dateModified}"}')
      WHERE id = $1;`;

module.exports = {
  getPatrons,
  getPatronById,
  addPatron,
  deletePatron,
  updatePatron,
  addDrink,
};
