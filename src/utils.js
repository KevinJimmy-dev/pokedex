export const firstUpperCase = (word) => {
    return word[0].toUpperCase() + word.substr(1)
}

export const labelVersionPokemon = (version) => {
    switch (version) {    
        case "front_default":   
            return "default"
            break

        default:
            return version
            break
    }
}