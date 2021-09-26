import http from "../PokemonApi"

const getAllPokemon = () => {
    return http.get("pokemon?limit=150")
}

export default {getAllPokemon}