'use client';

import Card from '@mui/material/Card';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MultiActionAreaCard() {
  return (
    <Container>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}
      >
        <Card sx={{ display: 'flex', maxWidth: '30rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>ok ok ok</Box>
        </Card>
      </Box>
    </Container>
  );
}
