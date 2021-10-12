import "./Pokecard.css";

function getImgSrc(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const Pokecard = ({
    name = "Pokemon",
    id = 1,
    type = "normal",
    exp = 0
}) => (
    <figure className="Pokecard">
        <h2>
            {name}
        </h2>
        <img src={getImgSrc(id)} alt="pokemon"/>
        <ul>
            <li>
                <strong>Type:</strong> {type}
            </li>
            <li>
                <strong>EXP:</strong> {exp}
            </li>
        </ul>
    </figure>
);

export default Pokecard;
