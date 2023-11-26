import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Container>
        <Typography variant='h6'>Contact Information</Typography>
        <Typography variant='body1'>Email: devtahirzahid@gmail.com</Typography>
        <Typography variant='body1'>Phone: +92 322 4969</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
