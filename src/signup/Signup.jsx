import React from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form className='addUserForm'>
        <div className='inputGropu'>
          <label htmlFor='name'>Name:</label>
          <input 
          type='text' 
          id='name'
          autoComplete='off'
          placeholder='Enter your name' required />
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
          placeholder='Enter password' required />
          <button type="Submit" class="btn btn-success">Sign Up</button>
        </div>
        </form>
        <div className='login'>
          <p>Already have an account ?</p>
          <Link to="/login" type='submit' class='btn btn-primary'>
            Login
          </Link>
        </div>
      
    </div>
  )
}

export default Signup
