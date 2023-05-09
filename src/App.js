import './App.css';
import'./index.css'
import React, { Component } from "react";
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import Favs from './components/Favs';
import {Link, NavLink, BrowserRouter, Route, RoutesSwitch, Routes, withRouter } from "react-router-dom";
import BlogPost from './components/BlogPost';
import MustWatch from './components/MustWatch';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
            <Route  path="/" element={<BlogList/>} />
            <Route  path="/Favs" element={<Favs/>} />
            <Route  path="/MustWatch" element={<MustWatch/>} />
            <Route  path="/BlogPost/:id" element={<BlogPost/>} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
