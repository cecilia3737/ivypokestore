
import React, {useContext} from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import "./ProfileDropDown.css"
import RoutingPath from '../../../routes/RoutingPath'
import LocalStorage from '../../../shared/storage/LocalStorage'
import { useHistory } from 'react-router'
import avatar from "../../../shared/img/profileimg.png"
import { Link } from 'react-router-dom'


export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem(LocalStorage.username)
        history.push({pathname: RoutingPath.homeView})

    }
    return (
        <div className="profile_dropdown">
            <img className="dropdown_profile_img" src={avatar} alt="profile image"></img><br></br>
            <span className="dropdown_profile_name">{authenticatedUser}</span><br></br>
            <nav className="dropdown_nav">
                <span className="dropdown_nav_link" onClick={() => history.push(RoutingPath.profileView)}>View Profile</span><br></br>
                <span className="dropdown_nav_link" onClick={() => history.push(RoutingPath.settingsView)}>Settings</span><br></br>
                <span className="dropdown_nav_link" onClick={() => logout()}>Log out</span>
            </nav>
        </div>
    )
}

export default ProfileDropDown
