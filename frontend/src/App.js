import React, { Fragment } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useEffect } from'react';
//redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuth from './utils/setAuthyToken'

if(localStorage.token) {
  setAuth(localStorage.token);
      }
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
    <NavBar />
    
    
     <Alert/>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
   
    </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
