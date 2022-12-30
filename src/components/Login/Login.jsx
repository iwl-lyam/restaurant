import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import {setToken} from './useToken'

import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:3030/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login() {
  const navigate = useNavigate()
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token.token);
    navigate('/order')
  }

  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <Link to='/signup'>Signup</Link>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}