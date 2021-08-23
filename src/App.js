import { useEffect } from 'react';
import {Header} from "./Header.jsx"
import {Body} from "./Body.jsx"
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP'
  }
})

const App = () => {

  useEffect(() => {
    document.title = "Oxypetalum7's Portfolio"
  })
  
  return (
    <ThemeProvider theme={theme}>
          <Header/>
          <Body/>
    </ThemeProvider>

  );
}

export default App;
