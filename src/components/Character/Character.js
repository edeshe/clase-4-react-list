import props from "./props";

const Character = ({id, name, image, episode}) => {
    return (
        <>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            {episode.map((url, index) => (
                <div>{index + 1}: <a href={url}>{url}</a></div>
            ))}
        </>
    );
};

Character.propTypes = props.propTypes;
Character.defaultProps = props.defaultProps;

export default Character;