import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Node Full Stack App</h1>
      <h2>Backend says: {msg}</h2>
    </div>
  );
}

export default App;
