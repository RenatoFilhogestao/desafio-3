import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#242424',
      dark:'#2C2C2C',
      light:'#B3B3B3',
      contrastText:'#FFF',
    },
    secondary: {
      main: '#FBA403',
     
      contrastText:'#FFF',
    },
    background:{
      default:'#242424',
      paper:'#242424',

    },
   
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,

  },
});

export default MainTheme;