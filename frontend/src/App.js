import React, { Fragment } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
function App() {
  return (
    <Router>
      <Fragment>
    <NavBar />
    
    
      <Routes>
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        </section>
      </Routes>
   
    </Fragment>
  </Router>
  );
}

export default App;
