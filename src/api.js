const apiUrl = import.meta.env.VITE_API;

export const searchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${apiUrl}/pokemon/${pokemon}`)

        return await response.json()
    } catch (error) {
        console.log("error: ", error);
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        const response = await fetch(`${apiUrl}/pokemon?limit=${limit}&offset=${offset}`)

        return await response.json()
    } catch (error) {
        console.log("error: ", error);
    }
}

export const getData = async (url) => {
    try {
        const response = await fetch(url)

        return await response.json()
    } catch (error) {
        console.log("error: ", error);
    }
}

