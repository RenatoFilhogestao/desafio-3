import { Container, Grid, Typography, Box} from '@mui/material'
import React from 'react'
import logoFooter from "@/app/public/Logofooter.svg"
import facebook from "@/app/public/Facebook.svg"
import instagram from "@/app/public/Instagram.svg"
import twitter from "@/app/public/Twitter.svg"

const FooterBar = ()=> {
  return (
 
    <>
      <Container maxWidth='xl' sx={{
       display:'flex',
       flexDirection:'row',
       height:'239px',
       justifyContent:'flex-start',
       alignItems:'flex-end',
       gap:'80px',
       padding:'40px 80px',
       }}>
        <Box p={0} sx={{display:'flex',
         flexDirection:'column',
          alignItems:'flex-start',
           justifyContent:'end',
            gap:'16px',
          
             }}>       
              <Typography variant ='h4'  >
                  <img src={logoFooter.src} alt="Logo ride" />
              </Typography>
                <Typography variant ='h6' component='h6'  sx={{ fontSize:'16px', color:'#B3B3B3'}} >
                    MyRide Inc., 2nd Floor, New York, NY 10016
                </Typography>
              <Typography variant ='h6' sx={{display:'flex', gap:'30px'}} >
                  <img src={facebook.src} alt="facebook logo" />
                  <img src={instagram.src} alt="instagram logo" />
                  <img src={twitter.src} alt="twitter logo" />
              </Typography>
        </Box>
        
        <Grid container spacing={3} sx={{fontSize:'16px'}}>
           
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant ='h4' sx={{margin:'20px'}} >
                {" "}
                Company
            </Typography>
            
        
                <Typography variant ='h6' sx={{margin:'20px', fontSize:'20px'}} >About us</Typography>
                <Typography variant ='h6' sx={{margin:'20px', fontSize:'16px'}} >News</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Carrers</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >How we Work</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                
                <Typography variant ='h4' sx={{margin:'20px'}} >
                    {" "}
                    Support
                </Typography>
               
                <Typography variant ='h6' sx={{margin:'20px'}} >FAQ</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Us Office</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Asia Office</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Help Center</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                
                <Typography variant ='h4' sx={{margin:'20px'}} >
                    {" "}
                    More
                </Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Become a partner</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Partner a suport</Typography>
                <Typography variant ='h6' sx={{margin:'20px'}} >Mobile App links</Typography>
            </Grid>

        </Grid>
       
      </Container>
    </>
 
  )
}

export default FooterBar
