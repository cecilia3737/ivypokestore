import http from "../PokemonApi"

const searchPokemon = (pokemonName) => {
    return http.get(`pokemon/${pokemonName}`)
}

const getAllPokemon = () => {
    return http.get("pokemon?limit=150")
}

export default {searchPokemon, getAllPokemon}