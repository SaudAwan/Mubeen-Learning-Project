import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0:'',
  0.5: '',
  1: '',
  1.5: '',
  2: '',
  2.5: '',
  3: '',
  3.5: '',
  4: '',
  4.5: '',
  5: '',
};

export default function TextRating() {
  const value = 5;

  return (
    <Box sx={{ width: "auto", display: 'flex', alignItems: 'center', }}>
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{display: "flex", gap:1, color:"#FED130"}}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
