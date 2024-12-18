import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSmall() {
  return (
    <Stack spacing={1}>
          <Rating name="size-small" defaultValue={2} size="small"
              sx={{ display: "flex", color: "#FED130" }} />
    </Stack>
  );
}