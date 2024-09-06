import React from "react";
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
    <BrowserRouter basename="/tharwah">
      <div>
        <Header></Header>
        <div>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="ped-blogs" element={<Pedblogs/>}/>
              <Route path="ped-blogs/:blogtitle" 
              loader={({params})=>{console.log(params.blogtitle)}} 
              action={({ params }) => {}}
              element ={<Pedblog/>}/>
              <Route path="excel-sheet" element={<Sheets/>}/>
              <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;


