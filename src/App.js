import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activity, setActivity] = useState("");

  const fetchApi = async () => {

    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
    setActivity(data.activity);
  };

  useEffect(() => {
    fetchApi()
  }, []) 

  return (
      <div className="main">
        <h1>Are you bored?</h1>
        <p>Click the button and get a new thing to do so you don't get bored again</p>
        <button onClick={fetchApi}>Click me</button>
        <h2>{activity}</h2>
      </div>

  );
}

export default App;
