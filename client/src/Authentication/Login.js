import React, { useState } from 'react';
import {Navigate} from 'react-router-dom'
import "./Login.css"

const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  // const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        // setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='login' onSubmit={login}>
        <form className='login-form'>
            <h1>Login</h1>
            <input  type='text'
                    placeholder='Username'
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}/>
            <input  type='Password'
                    placeholder='Password'
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login