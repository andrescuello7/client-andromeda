//Herramientas de uso
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
//Rutas de Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Perfil from "./pages/Perfil/Perfil";
import PerfilBuscado from "./pages/PerfilBuscado/PerfilBuscado";
import ProvinciaBuscada from "./pages/ProvinciaBuscada/ProvinciaBuscada";

import Prueba from "./pages/Prueba/Prueba";

//Componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/FooterBasico";
axios.defaults.baseURL = "https://server-andromeda.herokuapp.com/api/";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <Register />
            <Footer />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/buscar">
            <PerfilBuscado />
          </Route>
          <Route path="/provincia">
            <ProvinciaBuscada />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
