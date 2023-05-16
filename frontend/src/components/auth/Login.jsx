import React,{useState} from 'react'
import { Link } from 'react-router-dom';
function Login() {
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
    
    console.log('succes');
    
    
  }
  return (
    <section className="container">
      <div className="alert alert-danger">
        Invalid credentials
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" action="dashboard.html">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
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

export default Login