import React, { useState } from 'react'
import "./Register.css"

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
    <div className='register'>
        <form className='register-form' onSubmit={register}>
            <h1>Register</h1>
            <input type='text'
                  placeholder='Username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  />
            <input type='Password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register