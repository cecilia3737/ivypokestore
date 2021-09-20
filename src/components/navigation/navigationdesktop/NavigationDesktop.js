import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './NavigationDesktop.css'
import logo from "../../../shared/img/navlogo.png"

export const NavigationDesktop = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const renderLogin = () => {
        if(authenticatedUser)
        return (
            <span>
                <span className="navbar_login_desktop">
                    <Profile></Profile>
                </span>
            </span>
        )
        return (
            <Link to={RoutingPath.signInView}> Sign in</Link>
        )
    }
    return (
        <div className="nav_desktopbar">
            <img className="logo_img" src={logo} alt="company logo"></img>
            <nav>
                <Link to={RoutingPath.homeView}> Home </Link>
                <Link to={RoutingPath.storeView}> Store </Link>
            </nav>
            {renderLogin()}
        </div>
    )
}
