import React from 'react'
import bg from '../../shared/img/homebg.png'
import pokelogo from '../../shared/img/pokemonlogo.png'
import poke2 from '../../shared/img/poke2.png'
import poke4 from '../../shared/img/poke4.png'
import './HomeView.css'

export const HomeView = () => {
    return (
        <main>
            <div className="main_background" style={{backgroundImage: `url(${bg})`}}>
            <div className="main_container">
            <h1>WELCOME TO THE GREEN</h1>
            <img className="main_logo_image" src={pokelogo} alt="An image of the pokemon logo"/>
            <span className="main_text">STORE</span>
            </div>
            </div>
            <div className="second_main_container">
                <img className="main_poke_image_1" src={poke2} alt="An image of the pokemon bulbasaur"/>
                <div className="second_main_usp_wrapper">
                    <div className="second_main_usp_card">
                        <h2>TRAINED</h2> 
                        <br></br><h2>&</h2><br></br>
                        <h2>FRIENDLY</h2>
                        <p className="usp_card_text">All pokémons are raised in a
                        friendly home since hatching.
                        They live with foster-trainers 
                        who care and train them to be 
                        the best companions.</p>
                    </div>
                    <div className="second_main_usp_card">
                        <h2>ALL ORGANIC</h2>
                        <br></br><h2>&</h2><br></br>
                        <h2>NO GMO</h2>
                        <p className="usp_card_text">All Pokémons are GMO free 
                        and organic. They get fed with 
                        healty foods and snacks also 
                        all organic! We belive in sustainable 
                        enviroment and Pokémons!</p>
                    </div>
                </div>
                <img className="main_poke_image_2" src={poke4} alt="An image of the pokemon Plumsomthing"/>
            </div>
        </main>
    )
}
