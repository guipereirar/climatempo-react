import "./Card.css";

function Card(props) {
  return (
    <div className="diaTemp">
      <h2>{props.diaDaSemana}</h2>
      <h3>{props.cidade}</h3>
      <h1>{props.temperatura}</h1>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Card;
