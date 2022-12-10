const API_DOMAIN = "https://rickandmortyapi.com/api";
const API_CHARACTER_ENDPOINT = "/character";

const getSomeCharacters = async ({ids = []}) => {
    return await fetch(`${API_DOMAIN}${API_CHARACTER_ENDPOINT}/${ids}`)
        .then((response) => response.json() )
        .then((characters) => {
            if (characters.error) return [];
            return characters.id
            ? [characters]
            : characters
        })
        .catch(() => []);
};

export { getSomeCharacters };