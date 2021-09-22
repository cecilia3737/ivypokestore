import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import './SignInView.css'
import { useHistory } from "react-router"
import LocalStorage from "../../shared/storage/LocalStorage"
import poke7 from '../../shared/img/poke7.png'

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
        <main className="signin_main">
                <div className="signin_container">
                    <h1 className="headertext_signin">SIGN IN</h1>
                    <input placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}></input><br></br>
                    <input placeholder="Enter password"></input><br></br>
                    <button onClick={(event) => logIn()}>Sign In</button>
                </div>
                <div className="signin_border_box"></div>
                <img className="signin_poke_image" src={poke7} alt="Image of pokemon"></img>
        </main>
    )
}
