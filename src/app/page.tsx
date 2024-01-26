import * as React from 'react';
import Container from '@mui/material/Container';
import Header from '@/components/header';
import type { NextPage } from 'next';
import FooterBar from '@/components/footer';
import BookingForm from '@/components/bookingform';
import ImgMediaCard from '@/components/cards';




const Home: NextPage =() => {
 
  return (
   
    <Container maxWidth="xl" >
       <Header/>
    <BookingForm/>
    <ImgMediaCard/>
    
     <FooterBar/>
    </Container>
  );
}
export default Home
