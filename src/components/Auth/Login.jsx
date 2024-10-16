import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
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

    // Add authentication logic here (e.g., API call)

    setUser({ email }); // Mock user data
    navigate('/workout-log');
  };

  return (
    <div className="container mt-5 ">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='p-4 ' style={{border:"4px solid black" ,borderRadius:"10px" ,backgroundColor:"grey"}} >
        <TextField className='my-2' style={{borderRadius:"5px",backgroundColor:"#D2E0FB"}}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField  className='my-2' style={{borderRadius:"5px",backgroundColor:"grey"}}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" className="mt-3">Login</Button>
      </form>
    </div>
  );
};

export default Login;
