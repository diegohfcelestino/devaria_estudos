import { useState } from "react";
import Pessoa from "../components/pessoa.js";

export default function Home() {
  const [idadeDiego, setIdadeDiego] = useState(30);

  const incrementaIdadeDiego = () => {
    setIdadeDiego(++idadeDiego);
  };
  return (
    <>
      <h1>Olá mundo</h1>
      <Pessoa nome="Diego" idade={idadeDiego} />
      <Pessoa nome="Douglas" idade={30} />
      <button onClick={incrementaIdadeDiego}>Incrementa idade do Diego</button>
    </>
  );
}
