import { Stack } from "@mui/material";
import BarCard from "../../components/bar-card";

const Home = () => {
  return (
    <>
      <Stack
        sx={{ width: "100%", height: "100%", border: "1px solid red" }}
        justifyContent="center"
        alignItems="center"
      >
        <BarCard />
      </Stack>
    </>
  );
};

export default Home;
