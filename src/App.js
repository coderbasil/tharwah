import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;


//TODO: Page about Products and their jobs
//TODO: a link that takes to the store website
//TODO: loss calculator (how much does sheep eat and how many have she gave birth to);