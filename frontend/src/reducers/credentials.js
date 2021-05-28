import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux'
import { API_URL } from '../reusables/urls'

const credentials = createSlice({
    name: 'credentials',
    initialState: {
        username: null,
        accessToken: null,
        error: null
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setError: (store, action) => {
            store.error = action.payload
        },
        logOut: (store, action) => {
            store.username = null
            store.accessToken = null
        }
    }
})

export const authenticate = (username, password, mode) => {
    return (dispatch, getState) => {
        const state = getState()
        const method = mode === 'secret' ? 'GET' : 'POST' 
        fetch(API_URL(mode), {
            method,
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : state.credentials.accessToken
            },
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) { 
                batch(() => {
                    dispatch(credentials.actions.setAccessToken(data.accessToken))
                    dispatch(credentials.actions.setUsername(data.username))
                    dispatch(credentials.actions.setError(null))
                })
            } else {
                dispatch(credentials.actions.setError(data))
            }
        })
        .catch()
    }
}

export default credentials