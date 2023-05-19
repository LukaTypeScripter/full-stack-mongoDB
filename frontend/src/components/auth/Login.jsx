import React,{useState} from 'react'
import { Link, Navigate  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions/auth'

function Login({loginUser,isAuthenticated}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {  email, password,  } = formData;
  //for more useage of code
  const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

  //onSubimit to store input data in it

  const onSubmit = async e => {
    e.preventDefault();
    loginUser(email, password);
    console.log(loginUser(email, password));
  }

  //redirect if looged in 
  if(isAuthenticated) {
    return <Navigate to="/dashboard" />
  }
  return (
    <section className="container">
      
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" action="dashboard.html" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  )
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{loginUser})(Login); 