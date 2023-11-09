import { Card, CircularProgress, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { postPatron } from "../../api/nodejs/patrons";
import { useState } from "react";

import { getPatrons } from "../../api/nodejs/patrons";

const BarCard = () => {
  const [addPatron, setAddPatron] = useState(false);
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["patrons"], queryFn: getPatrons });
  const navigator = useNavigate();

  const mutation = useMutation({
    mutationFn: postPatron,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["patrons"] });
      setAddPatron(false);
    },
  });

  const formik = useFormik({
    initialValues: { name: "", weight: "" },
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <>
      <Card>
        <Stack
          sx={{ width: "500px", height: "500px" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {!addPatron && (
            <>
              <h1>Patrons</h1>
              {query.isLoading && <CircularProgress />}
              {query.data && <h1>{query.data.length}</h1>}

              <Button onClick={() => setAddPatron(true)} variant="contained">
                Add a Patron
              </Button>
              <Button
                onClick={() => {
                  navigator("/patrons");
                }}
                variant="outlined"
              >
                View Patrons
              </Button>
            </>
          )}
          {addPatron && (
            <>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                  <h1>Add a Patron</h1>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <label htmlFor="name">Weight</label>
                  <input
                    id="weight"
                    name="weight"
                    type="weight"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                  />
                  <button type="submit">Add Patron</button>
                </Stack>
              </form>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
};

export default BarCard;
