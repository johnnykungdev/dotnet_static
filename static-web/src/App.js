import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [toons, setToons] = useState([]);

  useEffect(() => {
    (async function() {
      const resp = await fetch("http://localhost:7071/api/toons", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await resp.json();
      console.log(data);
      setToons(data);
    })()
  }, [])

  let toonCards = toons.map(toon => (
    <div>
      <div>{toon.id}: {toon.firstName} {toon.lastName}, {toon.occupation}</div>
    </div>
  ))

  return (
    <div className="App">
      <header className="App-header">
        {toonCards}
      </header>
    </div>
  );
}

export default App;
