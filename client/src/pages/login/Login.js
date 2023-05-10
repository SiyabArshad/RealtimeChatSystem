import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../utils/http';
import "./login.css"
import googlimagge from "./google.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dashboadriamge from "./dashboard.jpg"
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ user }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  let navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post('/auth', userDetails);
      console.log("loggin data",data)
      localStorage.setItem('token', data);
      window.location = '/';
      toast.success('Loggedin SuccessFully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError(error.response.data);
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });  
          return
      }
      toast.error(error?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });   
    }
  };
  return (
    <div className='mncont1'>
        <ToastContainer/>
        <div className='mncont2'>
          <div className='loginformchild'>
            <div className='logo'>
              <span>United Ui</span>
            </div>
            <div>
              <p className='login'>
                Login
              </p>
              <p className='wback'>
                Welcome back! Please enter your details
              </p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='formcomp'>
              <TextField
        label="Email"
        name="email"
        onChange={handleChange}
        value={userDetails.email}
        margin="normal"
        variant="outlined"
        fullWidth
      />
              </div>
              <div className='formcomp'>
              <TextField
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        value={userDetails.password}
        margin="normal"
        variant="outlined"
        fullWidth
      />
              </div>
              <div className='rembermecon'>
                  <p>
                    Forgot Password?
                  </p>
              </div>
              <div className='signin'>
              <Button type="submit" variant="contained" color="primary" fullWidth={true} className='signbtn1'>
        LOGIN
      </Button>
      </div>
              <div className='signup'>
                <span className='dh'>
                  Dont have an account?
                </span>
                <Link to={"/register"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className='sup'>
                  Signup
                </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className='mncont3'>
          <div className='sliderparent'> 
          <Carousel
          showStatus={false}
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          >
                <div>
                    <img src={dashboadriamge} />
                </div>
                <div>
                    <img src={dashboadriamge} />
                </div>
                <div>
                    <img src={dashboadriamge} />
                </div>
            </Carousel>
          </div>
        </div>
    </div>







    /*
    <form className="signup_form" onSubmit={handleSubmit}>
      <label htmlFor="Email">Email</label>
      <input type="email" name="email" onChange={handleChange} />

      <label htmlFor="Password">Password</label>
      <input type="password" name="password" onChange={handleChange} />

      {error && (
        <div className="error_container">
          <p className="form_error">{error}</p>
        </div>
      )}

      <button type="submit">Login</button>
    </form>
    */
  );
  
};

export default Login;
