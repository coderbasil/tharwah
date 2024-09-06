import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pedblogs from "./pages/Pedblogs";
import Pedblog from "./pages/Pedblog";
import Sheets from "./pages/Sheets";
import "./css/styles.css"



function App() {
  return (
      <div>
        <Header></Header>
        <div>
          <BrowserRouter basename="/tharwah">
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/ped-blogs" element={<Pedblogs/>}/>
              <Route path="/ped-blogs/:blogtitle" 
              loader={({params})=>{console.log(params.blogtitle)}} 
              action={({ params }) => {}}
              element ={<Pedblog/>}/>
              <Route path="/excel-sheet" element={<Sheets/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer></Footer>
      </div>

  );
}

export default App;


