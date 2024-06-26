import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React JS",
  ]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label> <br />
        <input
          placeholder="Digite seu nome"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />

      <ul>
        {tarefas.map((tarefas) => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
