import './App.css';
import { useEffect } from 'react';
import {Header} from "./Header.js"
import {Body} from "./Body.js"

const App = () => {

  useEffect(() => {
    document.title = "Oxypetalum7's Portfolio"
  })
  
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
