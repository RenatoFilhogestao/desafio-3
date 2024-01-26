import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CardImage1 from '@/Assets/Card Image (1).png'
import { Box } from '@mui/system';
import CardImage2 from '@/Assets/card image (2).png';

export default function ImgMediaCard() {
  return (
    <>
    <Box sx={{flexDirection:'column', justifyContent:'center', padding:'0'}}>
      <Typography sx={{fontSize:'26px', color:'#FBA403'}}>Why should you ride with us?</Typography>
      <Typography sx={{fontSize:'45px', color:'#FFF'}}>Best in class rides</Typography>
    </Box>
    <Box sx={{flexDirection:'row'}}>
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
        Basic
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The best balance of price and comfort. You will not go wrong with our basic rides.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:'#FBA403',bgcolor:'#B3B3B3' }}>Learn More</Button>
      </CardActions>
    </Card>
    </Box>

<Box>
<Card sx={{ maxWidth: 307 }}>
  <CardMedia
    component="img"
    alt="yellow car"
    height="214px"
    image={CardImage2.src}
  />
  <CardContent sx={{bgcolor:'#B3B3B3'}}>
    <Typography gutterBottom variant="h5" component="div">
     Comfort
    </Typography>
    <Typography variant="body2" color="text.secondary">
    If comfort is your priority, this is the ride for you. It’s spacious and packed with features.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" >Learn More</Button>
  </CardActions>
</Card>
</Box>
</Box>

</>
  );
}