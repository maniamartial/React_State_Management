import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Mania", "Joseph", "Rosy", "Aseyo"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName(" ");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={onAddName} className="btn btn-primary btn-block">
        Add Name
      </button>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count ={count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
