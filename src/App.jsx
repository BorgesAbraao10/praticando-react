import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState("Tenho 4 filhas");

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Components App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Ana Borges")}>
        A que eu mais amo?
      </button>
    </div>
  );
}

export default App;
