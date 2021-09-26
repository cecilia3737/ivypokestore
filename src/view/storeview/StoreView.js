import {useState, useEffect} from 'react'
import {useHistory} from "react-router"
import RoutingPath from '../../routes/RoutingPath'
import PokemonApiService from '../../shared/api/service/PokemonApiService'
import './StoreView.css'

export const StoreView = () => {
    const [serverData, setServerData] = useState()
    const history = useHistory()

    const fetchData = async () => {
        const {data} = await PokemonApiService.getAllPokemon()
        setServerData(data)
    }

    const displayData = () => {
            return serverData?.results.map((pokemon, i) => (
                <div className="product_card" key={pokemon.name}>
                    <img className="product_image" src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`}></img>
                    <p className="product_card_text">{pokemon.name} #{i+1}</p>
                    <p className="product_card_price">2500$</p>
                    <button className="product_card_button" onClick={() =>
                    history.push({pathname: RoutingPath.productView, 
                                    state: pokemon})}>
                    More info
                    </button>
                </div>
            ))
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="store_main">
            <div className="storeview_container">
                <h1 className="store_headertext">STORE</h1>
            </div>
            <div className="store_product_container">
                    {displayData()}
            </div>
        </main>
    )
}
