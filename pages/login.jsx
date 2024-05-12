import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/log.css'
function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let [resp,setresp]=useState('');
 let his=useHistory();
async function handleSubmit(e) {
  e.preventDefault();
  try {
    let submition=await axios.post('http://localhost:3001/login',{username,password});
    let data=await submition.data;
    if (submition.status === 200) {
      // Redirect to admin page or any other page
      his.push('/');
    }
  setresp(data)
    console.log(data)
  } catch (error) {
    console.log(error);
  }

}

  return (
    <>
<h1>{resp}</h1>
    <div className="login-container">
  
    <Link to='/'><Button>homepage</Button></Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 
        <button type="submit">Login</button>
      </form>
     
    </div>
    </>
  );
}

export default Login;
