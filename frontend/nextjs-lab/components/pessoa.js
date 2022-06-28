export default function Pessoa(props) {
  return (
    <div className="pessoa">
      <b>nome</b>:{props.nome}
      <br />
      <b>Idade</b>: {props.idade}
      <br />
      <br />

    </div>
  );
}