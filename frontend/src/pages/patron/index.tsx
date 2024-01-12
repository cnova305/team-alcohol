import { Stack, Typography } from "@mui/material";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPatron } from "../../api/firebase/patrons";
import { Drink } from "../../types";
import { getAlcoholABV } from "../../utils";

const Patron = () => {
  const { id } = useParams();

  const { data: patron } = useQuery(["patron", id], () => getPatron(id || ""));

  return (
    <Stack spacing={2} p={5}>
      <h1>Patron</h1>
      <Typography>Name {patron?.name}</Typography>
      <Typography>Weight {patron?.weight}</Typography>
      {patron?.drinks?.map((drink: Drink) => (
        <Stack direction="row">
          <Typography>{drink.strDrink + " "}</Typography>
          <Typography>{getAlcoholABV(drink.strIngredient1) + "%"}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Patron;
