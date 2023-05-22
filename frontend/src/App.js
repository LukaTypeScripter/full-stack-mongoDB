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
import CreateProfile from './components/profile-form/CreateProfile';
//redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuth from './utils/setAuthyToken'
import EditProfile from './components/profile-form/EditProfile';

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
        
          <NavBar />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes/>}>
              <Route path="/dashboard" element={<DashBoard />} exact />
              <Route path="/create-profile" element={<CreateProfile />} exact />
              <Route path="/edit-profile" element={<EditProfile />} exact />
            </Route>
          </Routes>
        
      </Router>
    </Provider>
  );
}

export default App;
