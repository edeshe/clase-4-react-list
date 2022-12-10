import { useState, useEffect } from "react";

import Character from "../../character";
import { getSomeCharacters } from "../../../libs/fetch";

import props from "./props";

const CharactersPage = (ids) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getSomeCharacters(ids).then((charactersData) => setCharacters(charactersData))
    }, [ids]);

    return (
        <>
            {characters.map((character) =>{
                return (
                    <Character
                        key={`CharactersPage-Character-${character.id}`}
                        name={character.name}
                        image={character.image}
                    />
                );
            })}
        </>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default CharactersPage;