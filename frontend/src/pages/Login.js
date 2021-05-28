import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Form from '../components/Form.js'

const Login = () => {
    const accessToken = useSelector(store => store.credentials.accessToken)
    const history = useHistory()
    const error = useSelector(store => store.credentials.error)
    
    useEffect(() => {
        if(accessToken) {
          history.push('/')
        }
    }, [accessToken, history])
    
    return (
        <> 
          <Form />
          {error !== null && (error.message === 'User not found') && 
            <div>
              <p>The username/password combination was not found. </p> 
              <p>Please try again, or sign up if you don't have an account</p>
            </div>
          }
        </>
    )
}

export default Login