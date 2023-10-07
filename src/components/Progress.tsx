import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const CircularIndeterminate: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      <CircularProgress aria-label="loading..." sx={{ color: "#000" }} />
    </Box>
  );
};
