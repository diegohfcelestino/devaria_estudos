import { useState } from "react";
import Pessoa from "../components/pessoa.js";

export default function Home() {
  const [idadeDiego, setIdadeDiego] = useState(15);
  const pessoas = [
    {
      nomePessoa: "Ademir",
      idadePessoa: 20
    },
    {
      nomePessoa: "Paulo",
      idadePessoa: 16
    },
    {
      nomePessoa: "Julio",
      idadePessoa: 18
    },
    {
      nomePessoa: "Tais",
      idadePessoa: 29
    }
  ];

  const incrementaIdadeDiego = () => {
    setIdadeDiego(++idadeDiego);
  };

  const decrementaIdadeDiego = () => {
    setIdadeDiego(--idadeDiego);
  };
  return (
    <>
      <h1>Olá mundo</h1>
      <Pessoa nome="Diego" idade={idadeDiego} />
      <Pessoa nome="Douglas" idade={30} />
      {pessoas.map(({ nomePessoa, idadePessoa }, index) => <Pessoa key={index} nome={nomePessoa} idade={idadePessoa} />)}
      <button onClick={incrementaIdadeDiego}>Incrementa idade do Diego</button>
      <br />
      <br />
      <button onClick={decrementaIdadeDiego}>Decrementa idade do Diego</button>
    </>
  );
}
