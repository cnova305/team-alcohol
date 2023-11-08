import { Stack, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getPatron } from "../../api/nodejs/patrons";

const Patron = () => {
  const { id } = useParams();

  const { data: patron } = useQuery(["patrons", id], () => getPatron(id || ""));

  return (
    <Stack spacing={2} p={5}>
      <h1>Patron</h1>
      <Typography>Name {patron?.name}</Typography>
      <Typography>Weight {patron?.weight}</Typography>
    </Stack>
  );
};

export default Patron;
