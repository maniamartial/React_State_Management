import { useRef, useState, useEffect } from "react";

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setName] = useState([]);

  const onAddName = () => {
    setName([...names, inputRef.current.value]);
    inputRef.current.value = " ";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add name</button>
      <div>Names are : {names.join(", ")}</div>
    </div>
  );
}

export default App;
