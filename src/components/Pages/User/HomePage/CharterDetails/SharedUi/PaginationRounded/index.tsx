import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "black", // Default text color
            "&.Mui-selected": {
              backgroundColor: "#FED130", // Selected background
              color: "black", // Selected text color
            },
            "&:hover": {
              backgroundColor: "#FED130", // Hover background
              color: "black", // Hover text color
            },
          },
        }}
      />
    </Stack>
  );
}
