

function PokemonCard(props) {
  return (
    <figure>
      {props.pokemon.imgSrc !== undefined ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
  console.log(props);
}
export default PokemonCard;
