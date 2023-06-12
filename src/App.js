import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform"
import About from "./components/About";



function App() {
  const[mode, setMode]= useState('dark'); //whether dark mode is enable or not
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode = 'dark'
    }else{
      setMode = 'light'
    }
    
  }

  return (
    <>
     <Navbar title="React-Tutorial" mode={mode} aboutText="About" toggleMode={toggleMode} />
     <div className="container my-3">
      
     <Textform heading="Enter the text to analyze below"/> 
     <About/>
     </div>

      </>
  );
}

export default App;
