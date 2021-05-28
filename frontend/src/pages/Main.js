import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import credentials, { authenticate } from '../reducers/credentials'

import Button from '../components/Button'

const Main = () => {
    const name = useSelector(store => store.credentials.username)
    const accessToken = useSelector(store => store.credentials.accessToken)
    const secret = useSelector(store => store.credentials.secret)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!accessToken) {
            history.push('/login')
        }
    }, [accessToken, history])

    const onLogOut = () => {
        dispatch(credentials.actions.logOut())
    }

    return (
        <>
            <h1>Welcome, {name}!</h1>
            <p>As a member of our secret society, the truth will now be bestowed upon thee.</p>
            <p>The secret message is...</p>
            {secret === 'Invalid Request' ? 'Wait... WHO ARE YOU??' : secret}
            <Button
                text='Log out'
                type='button'
                onClick={onLogOut}
            />
        </>
    )
}

export default Main