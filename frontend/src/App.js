import React, { Fragment } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useEffect } from'react';
import DashBoard from './components/dashboard/DashBoard';
import PrivateRoutes from './components/routing/PrivateRoutes';
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
          <Route path="/" component={<Landing />} />
          <Route path="/register" component={<Register />} />
          <Route path="/login" component={<Login />} />
          <Route path="/dashboard" element={<PrivateRoutes><DashBoard /></PrivateRoutes>} />
        </Routes>
   
    </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
