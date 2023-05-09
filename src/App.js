import "./App.css";
import "./index.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Favs from "./components/Favs";
import {
  Link,
  NavLink,
  BrowserRouter,
  Route,
  RoutesSwitch,
  Routes,
  withRouter,
} from "react-router-dom";
import BlogPost from "./components/BlogPost";
import MustWatch from "./components/MustWatch";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { User, useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  return (
    <div>
      <BrowserRouter>
        <div>
          {user && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={user ? "/BlogList" : "/"} element={<BlogList />} />
            <Route path={user ? "/Favs" : "/"} element={<Favs />} />
            <Route path={user ? "/MustWatch" : "/"} element={<MustWatch />} />
            <Route path={user ? "/BlogPost" : "/"} element={<BlogPost />} />
            <Route path={user ? "/dashboard" : "/"} element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
