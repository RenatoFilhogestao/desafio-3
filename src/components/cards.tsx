import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardImage1 from '@/Assets/Card Image (1).png'
import { Box } from '@mui/system';

export default function ImgMediaCard() {
  return (
    <Box>
    <Card sx={{ maxWidth: 307 }}>
      <CardMedia
        component="img"
        alt="yellow car"
        height="214px"
        image={CardImage1.src}
      />
      <CardContent sx={{bgcolor:'#B3B3B3'}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The best balance of price and comfort. You will not go wrong with our basic rides.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}