// Importing necessary components and functions from Material-UI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from 'next-themes'; // Importing useTheme from next-themes

// Creating a custom bullet point component
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// Main functional component for the About page
export default function About() {
  return (
    <Grid container padding={'2rem'}>
      Lets start designing this page from scratch{' '}
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant='body1'>
          Sample Description Lets thing about the design
        </Typography>
        <Card sx={{ my: 2 }}>
          <CardContent>
            <Typography variant='h5' component='div'>
              Card Titles
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Some content for the card.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            // backgroundColor: theme === 'light' ? 'white' : 'black', // Setting background color based on the theme
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant='body2'>Sample sub Description 1 </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant='body2'>Sample sub Description 2 </Typography>
      </Grid>
    </Grid>
  );
}
