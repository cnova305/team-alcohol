import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { postDrink } from "../../api/drinks";
import { deletePatron } from "../../api/patrons";
import { useNavigate } from "react-router-dom";
import { Patron } from "../../types";
import {
  calculateAlcoholSaturation,
  getAlcoholABV,
  timeSinceConsumption,
} from "../../utils";

const PatronCard = ({ patron }: { patron: Patron }) => {
  const [viewDrinks, setViewDrinks] = useState(false);
  const [addDrink, setAddDrink] = useState(false);
  const navigator = useNavigate();

  const alcoholSaturation = 0.002; //estimated limit

  const getSaturation = (patron: Patron) => {
    let saturation = 0;
    for (const drink of patron.drinks) {
      saturation += calculateAlcoholSaturation(
        getAlcoholABV(drink.strIngredient1),
        parseInt(patron.weight, 10),
        timeSinceConsumption(drink.dateModified)
      );
    }
    return saturation;
  };
  const currentSaturation = getSaturation(patron);

  console.log(currentSaturation);

  const formik = useFormik({
    initialValues: {
      drink: "",
    },
    onSubmit: (values, { resetForm }) => {
      postDrink(patron.id, values.drink);
      resetForm();
      setAddDrink(false);
      setViewDrinks(false);
    },
  });

  return (
    <Stack direction="column">
      <Card sx={{ width: "300px", height: "300px" }}>
        <Stack
          sx={{ width: "100%", height: "100%" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography>Name {patron.name}</Typography>
          <Typography>Weight {patron.weight}</Typography>
          <Typography
            sx={{
              color: currentSaturation < alcoholSaturation ? "black" : "red",
            }}
          >
            Id {patron.id}
          </Typography>
          <Button onClick={() => setAddDrink(true)} variant="contained">
            Add Drinks
          </Button>
          <Button onClick={() => setViewDrinks(true)} variant="outlined">
            View Drinks
          </Button>
          <Button
            onClick={() => {
              deletePatron(patron.id);
              navigator("/");
            }}
            variant="text"
          >
            Delete
          </Button>
        </Stack>
      </Card>
      {addDrink && (
        <Card>
          <form onSubmit={formik.handleSubmit}>
            <Stack
              p={2}
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                id="drink"
                name="drink"
                label="Drink"
                type="drink"
                onChange={formik.handleChange}
                value={formik.values.drink}
              />
              <Button variant="contained" type="submit">
                Add
              </Button>
              <Button onClick={() => setAddDrink(false)}>Cancel</Button>
            </Stack>
          </form>
        </Card>
      )}
      {viewDrinks && (
        <Card>
          <Stack justifyContent="center" alignItems="center">
            <Typography>Drinks</Typography>
            <CardContent>
              {patron.drinks.map((drink) => (
                <Stack direction="row">
                  <Typography>{drink.strDrink + " "}</Typography>
                  <Typography>
                    {getAlcoholABV(drink.strIngredient1) + "%"}
                  </Typography>
                </Stack>
              ))}
            </CardContent>
            <Button onClick={() => setViewDrinks(false)}>Close</Button>
          </Stack>
        </Card>
      )}
    </Stack>
  );
};

export default PatronCard;