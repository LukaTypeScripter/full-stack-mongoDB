import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
 function NavBar({auth: {isAuthenticated,loading},logout}) {
  const authLinks = (
    <ul>
      <li>
          <Link to="/dashboard">
          <i class="fas fa-user" aria-hidden="true"></i>{' '}
          <span className="hide-sm"> Dashboard</span></Link>
        </li>
    <li>
      <Link onClick={logout} href="#">
      <i class="fas fa-sign-out" aria-hidden="true"></i>{' '}
      <span className="hide-sm">Logout</span> </Link>
    </li>
   
  </ul>
  )

  const guestLinks = (
    <ul>
        <li>
          <Link href="#!">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
  )

  
  
  
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={"/"}>
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
  );
}

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps,{logout})(NavBar);
