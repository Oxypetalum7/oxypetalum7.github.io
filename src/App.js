import { useEffect } from 'react';
import {Header} from "./Header"
import {Body} from "./Body"
import { Activities } from './Activities'
import { createTheme, adaptV4Theme } from '@mui/material';
import './App.css'

const App = () => {

  useEffect(() => {
    document.title = "Oxypetalum7's Portfolio"
  })
  
  return (
    <div>
      <Header/>
      <Body/>
      <Activities/>
    </div>
  );
}

export default App;
