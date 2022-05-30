import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Biography from './components/Biography';
import Activity from './components/Activity';
import Works from './components/Works';
import Link from './components/Link';
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
                <Route path="/" element={<Home />} />
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

