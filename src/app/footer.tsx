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
        mt: 'auto', // This ensures the footer stays at the bottom of the page
      }}
    >
      <Container>
        <Typography variant='h6'>Contact Information</Typography>
        <Typography variant='body1'>Email: your@email.com</Typography>
        <Typography variant='body1'>Phone: +123 456 7890</Typography>
        {/* Add any other contact information or links you want */}
      </Container>
    </Box>
  );
};

export default Footer;
