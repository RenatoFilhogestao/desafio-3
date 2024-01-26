"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import AvatarUser from '@/app/public/user-avatar.svg'
import Logo from '@/app/public/Logo.svg'
import BellNotification from '@/app/public/bell-icon.svg'
import { Tabs, Tab } from '@mui/material';

const Header = () => {
  
  return (
    <AppBar position="static" sx={{bgcolor:"#242424", boxShadow:"0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
        <img src={Logo.src} alt="logo" />
        </Typography>
      
          <Tabs sx={{ marginLeft:'auto', justifyContent:'space-between', Width:'full', textDecoration:'none', fontSize:'16px'}} >
            <Tab label  = 'Home' sx={{color:'#FBA403'}} />
            <Tab label='Getting a Taxi' sx={{color:'#FFF'}}/>
            <Tab label='Mobile App' sx={{color:'#FFF'}}/>
            <Tab label='Contact Us' sx={{color:'#FFF'}}/>
          </Tabs>            
            
            <Box sx={{ flexGrow: 0, marginLeft:'auto'}}>
              <IconButton  sx={{ p: 0, gap:'40px'}}>
                <Typography sx={{ }}>
                  <img src={BellNotification.src} alt="notification" />
                </Typography>
                <Typography>
                  <img src={AvatarUser.src} alt="Avatar" />
                </Typography>
              </IconButton> 
           
           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;