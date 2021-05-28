import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import credentials, { authenticate } from '../reducers/credentials'

import Button from '../components/Button'

const Main = () => {
    const name = useSelector(store => store.credentials.username)
    const accessToken = useSelector(store => store.credentials.accessToken)
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
            <Button
                text='Log out'
                type='button'
                onClick={onLogOut}
            />
        </>
    )
}

export default Main