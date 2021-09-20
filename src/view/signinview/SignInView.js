import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import './SignInView.css'
import { useHistory } from "react-router"
import LocalStorage from "../../shared/storage/LocalStorage"

export const SignInView = () => {
    const [username, setUsername] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logIn = () => {
        setAuthenticatedUser(username)
        localStorage.setItem(LocalStorage.username, username)
        history.goBack()
    }
    return (
        <main>
            <h1>Sign in View!</h1>
            <input placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}></input><br></br>
            <input placeholder="Enter password"></input><br></br>
            <button onClick={(event) => logIn()}>Sign in</button>

            <h2>{username}</h2>
        </main>
    )
}
