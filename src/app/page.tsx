'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
export default function MultiActionAreaCard() {
  const theme = useTheme();
  console.log(theme);
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