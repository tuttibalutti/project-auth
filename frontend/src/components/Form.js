import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticate } from '../reducers/credentials'

import Button from './Button'
const Form = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState(null)

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(authenticate(username, password, mode))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>Username</label>
      <input type='text' value={username} onChange={onUsernameChange} />
      <label>Password</label>
      <input type='password' value={password} onChange={onPasswordChange} />
      <Button 
        text='Sign in'
        type='submit'
        onClick={() => setMode('signin')}
      />
      <Button 
        text='Sign Up'
        type='submit'
        onClick={() => setMode('signup')}
      />
    </form>
  )
}

export default Form