import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './component/Car';
import Home from './component/Home';

import Header from './component/Header';
import Footer from './component/Footer';
import PostDetail from './component/PostDetail';
import Contact from './component/Contact';

import {
    BrowserRouter,
    Route
  } from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
       
        <Route 
          path="/"
          exact
          component={Home}
          />

        <Route 
          path="/post/:slug"
          exact
          component={PostDetail}
          />

        <Route 
          path="/about"
          exact
          component={Car}
          />

          <Route 
          path="/contact"
          exact
          component={Contact}
          />


          <Footer />
     
      </div>
    </BrowserRouter>
  );
}

export default App;
