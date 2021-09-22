import React from 'react'
import "./FooterDesktop.css"
import image from "../../../shared/img/poke1.png"

export const FooterDesktop = () => {
    return (
        <footer className="desktop_footer">
            <div>
                <p className="footer_text">Customer Service</p>
                <p className="footer_text">About IvyShop</p>
                <p className="footer_text">Sign in/Out</p>
            </div>
            <img className="footer_image" src={image} alt="A pokemon"></img>
            <div className="footer_socials">
                <div className="footer_social_icon"></div>
                <div className="footer_social_icon"></div>
                <div className="footer_social_icon"></div>
            </div>
        </footer>
    )
}
