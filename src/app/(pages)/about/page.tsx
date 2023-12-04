import { Box, Grid, Typography } from '@mui/material';

export default function About() {
  return (
    <Grid container>
      Lets start designing this page from scratch{' '}
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant='body1'>Sample Description </Typography>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Typography variant='body2'>Sample sub Description 1 </Typography>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Typography variant='body2'>Sample sub Description 2 </Typography>
      </Grid>
    </Grid>
  );
}
