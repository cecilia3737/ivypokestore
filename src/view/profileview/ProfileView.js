import React, {useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './ProfileView.css'
import avatar from "../../shared/img/profileimg.png"
import poke5 from '../../shared/img/poke5.png'

export const ProfileView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <main className="profile_main">
            <div className="profile_container">
                <h1 className="profile_headertext">PROFILE</h1>
                <p className="profile_text">Hello {authenticatedUser}, here in Profile you can see all your purchases</p>
                <img className="profile_profile_img" src={avatar} alt="profile image"></img>
                <h2 className="profile_username_text">{authenticatedUser}</h2>
            </div>
        <div className="profile_border_box"><img className="profile_poke_image" src={poke5} alt="Image of pokemon"></img></div>
</main>
    )
}
