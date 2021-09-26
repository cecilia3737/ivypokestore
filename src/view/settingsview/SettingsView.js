import React, {useState, useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './SettingsView.css'
import poke6 from '../../shared/img/poke6.png'
import LocalStorage from "../../shared/storage/LocalStorage"

export const SettingsView = () => {
    const [username, setUsername] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const submitchanges = () => {
        setAuthenticatedUser(username)
        localStorage.setItem(LocalStorage.username, username)
    }
    return (
        <main className="settings_main">
            <div className="settings_container">
                <h1 className="settings_headertext">SETTINGS</h1>
                <p className="settings_text">Here you can change your personal information</p>
                <p className="settings_text">Insert your new username and/or password here:</p>
                <input className="settings_username_input" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}></input><br></br>
                    <input placeholder="Enter password"></input><br></br>
                    <button onClick={(event) => submitchanges()}>Submit</button>
                    <img className="settings_poke_image" src={poke6} alt="Image of pokemon"></img>
            </div>
        <div className="settings_border_box"></div>
</main>
    )
}
