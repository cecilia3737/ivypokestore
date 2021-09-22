import {useContext} from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import "./Profile.css"
import avatar from "../../shared/img/profileimg.png"
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className="profile">
            <img className="profile_img" src={avatar} alt="profile image"></img>
            <span className="profile_name">{authenticatedUser}</span>
            <ProfileDropDown></ProfileDropDown>
        </div>
    )
}