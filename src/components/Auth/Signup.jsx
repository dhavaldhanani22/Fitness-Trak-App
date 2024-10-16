import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!email || !password || !mobile) {
      toast.error('Please fill in all required fields!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    
    toast.success('Signup successful! Redirecting to login...', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    
    setTimeout(() => {
      navigate('/login'); 
    }, 3000); 
  };

  return (
    <div className="container mt-5  py-3" style={{borderRadius:"15px",backgroundColor:"#D2E0FB",border:"4px solid black"}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} >
        <TextField className='bg-light' style={{borderRadius:"10px"}}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField className='bg-light' style={{borderRadius:"10px"}}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField className='bg-light' style={{borderRadius:"10px"}}
          label="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" className="mt-3">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
