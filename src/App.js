import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './Home';
import Biography from './Biography';
import Activity from './Activity';
import Works from './Works';
import Link from './Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
          main:'rgba(0,0,0,0.80)',
        },
      text: {
        primary: 'rgba(255,255,255)',
      },
      background: {
        paper:'rgba(0,0,0,0.80)',
      }
    },
  });

const App = () => {
  
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route  exact path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/works" element={<Works />} />
              <Route path="/link" element={<Link/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;

