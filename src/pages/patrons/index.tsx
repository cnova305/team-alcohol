import React from "react";
import PatronCard from "../../components/patron-card";
import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { getPatrons } from "../../api/nodejs/patrons";
import useInterval from "../../hooks/use-interval";

const Patrons = () => {
  const query = useQuery({ queryKey: ["patrons"], queryFn: getPatrons });

  const delay = 1000;

  const refetchData = () => {
    query.refetch();
  };

  useInterval(refetchData, delay);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      useFlexGap
      flexWrap="wrap"
      spacing={2}
    >
      {query.data?.map((patron) => (
        <PatronCard key={patron.id} patron={patron} />
      ))}
    </Stack>
  );
};

export default Patrons;
