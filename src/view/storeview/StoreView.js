import {useState, useEffect} from 'react'
import PokemonApiService from '../../shared/api/service/PokemonApiService'
import './StoreView.css'

export const StoreView = () => {
    const [serverData, setServerData] = useState()

    const fetchData = async () => {
        const {data} = await PokemonApiService.getAllPokemon()
        setServerData(data)
    }

    const displayData = () => {
            return serverData?.results.map((pokemon) => (
                <div key={pokemon.name}>
                    <p>{pokemon.name}</p>
                </div>
            ))
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <h1>Store View</h1>
            {displayData()}

        </main>
    )
}
