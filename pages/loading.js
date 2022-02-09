import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 1
    }}>
      <CircularProgress />
    </Box>
  );
}