import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(time);
      setTime((time) => {
        console.log(time);
        return time + 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <div>Time: {time}</div>
    </div>
  );
};
function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);
  return (
    <div>
      <div>
        <Stopwatch />
        Names:{" "}
        {names.map((name) => (
          <button onClick={() => setSelectedName(name)}>{name}</button>
        ))}
      </div>

      <div>{selectedName}</div>
    </div>
  );
}

export default App;
