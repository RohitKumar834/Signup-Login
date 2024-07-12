import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='addUser'>
      <h3>Sign In</h3>
      <form className='addUserForm'>
        <div className='inputGropu'>
          <label htmlFor='email'>Email:</label>
          <input 
          type='email' 
          id='email'
          autoComplete='off'
          placeholder='Enter your Email' required />

          <label htmlFor='password'>Password:</label>
          <input 
          type='passwor' 
          id='passwor'
          autoComplete='off'
          placeholder='Enter password'  required/>
          <button type="Submit" class="btn btn-primary">Login</button>
        </div>
        </form>
        <div className='login'>
          <p>Don't have  Account ?</p>
          <Link to="/" type='submit' class='btn btn-success'>
            Sign Up
          </Link>
        </div>
      
    </div>
  )
}

export default Login
