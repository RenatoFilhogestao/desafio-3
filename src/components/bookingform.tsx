import React from 'react'
import ImageCar from '@/Assets/ImageCar.svg'
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import TextField  from '@mui/material/TextField';
import { Button } from '@mui/material';






const BookingForm = () => {
  return (
    <Container maxWidth='xl'>
        <Box sx={{flexDirection:'row', display:'flex', gap:'80px'}}>
        <Box 
        sx={{
            paddingTop:'74px',
            paddingLeft:'89px',

        }}>
    <img src={ImageCar.src} alt="carApp" />
    </Box>
     <Box   sx={{
   
      my: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap:'42px',
      
        }}>

 
       
            <Typography color='#FFF' variant="h6" component="h6" >
                 Need a ride?
            </Typography>
    
            <Typography color='#FFF' variant='h4'component='h4' sx={{justifyContent:'flex-start'}} >
                 Book with <i>my</i>RIDE  now!
            </Typography>
            <Box
            sx={{
             justifyContent:'center',
             alignItems:'flex-start',
             padding: '30px 33px',
             backgroundColor:'#2C2C2C',
             alignSelf: 'stretch'
             }}>
            <Box sx={{flexDirection:'column',}}>
                <FormLabel sx={{fontSize:'24px', color:'#FFF'}}>
                    Find a ride now
                </FormLabel>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <Box sx={{display:'flex', flexDirection:'column', gap:'8px',justifyItems:'center'}}>
                            <Box>
                                <TextField
                                sx={{ padding:'15px 0px',color:'#FFF'}}
                                    required
                                    id="outlined-required"
                                    label="Your Pickup"
                                    defaultValue="Current Location"
                                   
                                    
                                />
                                </Box>
                                <Box >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Your Destination"
                        
                                />
                                </Box>
                                
                               <Button variant= 'contained'
                               sx={{display:'flex',
                                width:'544px',
                                height: '56px',
                                padding:' 6px 6px 6px 8px',
                                justifyContent:'center',
                                alignItems:'center', 
                                bgcolor:'#FBA403' }}>
                                Find a Driver
                                </Button>
                               
                        </Box>
                </Box>
            </Box>  
        </Box>
   
        
     
    </Box>
    
    </Box>
  
  </Container>
  )
}

export default BookingForm
