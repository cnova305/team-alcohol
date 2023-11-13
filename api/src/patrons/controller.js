const pool = require("../db");
const queries = require("./queries");

const getPatrons = async (req, res) => {
  try {
    const data = await pool.query(queries.getPatrons);
    res.status(200).send(data.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const getPatronById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await pool.query(queries.getPatronById, [id]);
    res.status(200).send(data.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const addPatron = async (req, res) => {
  const { name, weight, id } = req.body;

  try {
    const data = await pool.query(queries.addPatron, [name, weight, id]);
    res.status(201).send("Patron has been added");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const updatePatron = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const data = await pool.query(queries.updatePatron, [name, id]);
    res.status(200).send("Drink has been added");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deletePatron = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await pool.query(queries.deletePatron, [id]);
    res.status(200).send("Patron has been deleted");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const addDrink = async (req, res) => {
  const id = req.params.id;
  const { strDrink, strIngredient1, strMeasure1, dateModified } = req.body;
  try {
    const data = await pool.query(
      queries.addDrink(strDrink, strIngredient1, strMeasure1, dateModified),
      [id]
    );
    res.status(200).send("Drink has been added");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getPatrons,
  getPatronById,
  addPatron,
  deletePatron,
  updatePatron,
  addDrink,
};
