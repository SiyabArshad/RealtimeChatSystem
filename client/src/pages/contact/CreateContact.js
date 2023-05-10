import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../utils/http';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  CircularProgress
} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"
import axios from 'axios';

export default function CreateContact({user}) {
    const [userDetails, setUserDetails] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        user: user?._id
      });
      const [error, setError] = useState(null);
      const [loading ,setloading]=useState(false)
      let navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
          return { ...prev, [name]: value };
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
         const { data } = await http.post('/chat/contact', userDetails);
         console.log(data)
          toast.success('Contact Added SuccessFully', {
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
        finally{
            setloading(false)
        }
      };
  return (
    <div className='cccon'>
          <ToastContainer/>
          <div className='loginformchild'>
            <div>
              <p className='login'>
                Add Contact
              </p>
            </div>
            <form className='form' 
            onSubmit={handleSubmit}
            >
            <TextField
        label="FirstName"
        name="first_name"
        value={userDetails.first_name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
       <TextField
        label="LastName"
        name="last_name"
        value={userDetails.last_name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
        <TextField
        label="Phone Number"
        name="phone"
        value={userDetails.phone}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button disabled={loading} type="submit" variant="contained" color="primary" fullWidth={true}>
       {
        loading?  <CircularProgress />:"Create Contact"
       } 
      </Button>
              </form>
          </div>
    </div>
  )
}
