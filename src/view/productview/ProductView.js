import {useState, useEffect} from 'react'
import './ProductView.css'
import { useLocation } from 'react-router'
import axios from 'axios'

export const ProductView = () => {
    const location = useLocation()
    const [serverData, setServerData] = useState()
    const fetchData = async () => {
        await axios.get(location?.state?.url)
        .then((response) => {setServerData(response.data)})
    }

    const displayData = () => {
        return serverData ? (
            <div className="product_container">
                <h1 className="product_id">#{serverData?.id}</h1>
                <h1 className="product_name">{serverData?.name}</h1>
                <div className="product_type_container">
                <div className="type_header_wrapper">
                    <h3>Type</h3>
                </div>
                    <p className="type_text">{(serverData?.types[0]?.type?.name)}</p>
                    <p className="type_text">{(serverData?.types[1]?.type?.name)}</p>
                </div>
                <img className="product_img" src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${serverData?.id}.png`}></img>
                <div className="product_size_container">
                    <div className="type_header_wrapper">
                    <h3>Size</h3>
                    </div>
                    <p>Weight: {(serverData?.weight * 0.1).toFixed(2)} kg</p>
                    <p>Height: {(serverData?.height * 0.1).toFixed(2)} m</p>
                </div>
               
            </div>
        ) : <div>Loading...</div>
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="product_main">
            {displayData()}
            
        </main>
    )
}
