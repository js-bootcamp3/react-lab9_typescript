import React, {useState} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    if (!username || !password) {
      return
    }

    const user = {username, password}
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/list')
  }

  if (!!localStorage.getItem('user')) {
    return <Navigate to="/list" replace />;
  }

  return (  
    <div>
      <h1>Login</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
