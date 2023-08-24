import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunc }) {
  console.log("Sorted Render");

  const sortedList = useMemo(() => {
    console.log("Running sorted list");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>Sorted List is = {sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["Rosy", "Bakely", "Mania", "Brown"]);

  const sortednames = useMemo(() => [...names].sort(), [names]);
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <div>
      <div>Total:{total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>Sorted Names: {sortednames.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
    </div>
  );
}

export default App;
