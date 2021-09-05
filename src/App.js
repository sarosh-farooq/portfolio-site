import React from 'react'
import Achievements from "./components/Achievements";
import Contact_us from "./components/Contact_us";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Mywork from "./components/Mywork";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Qualities from "./components/Qualities";
import Reviews from "./components/Reviews";
import prot_data from './components/Portfolio_data'

function App() {
  return (
    <div>
       <Header />
       <Home />    
        <Mywork />
        <Portfolio data={prot_data}/>
       <Achievements />
        <Qualities /> 
        <Partners />
        <Reviews />
        <Contact_us />
        <Footer />
    </div>
  );
}

export default App;
