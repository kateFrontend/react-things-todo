import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activity, setActivity] = useState("");
  const [images, setImages] = useState([]);

  const fetchApi = async () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "6uAlR2lkS18B_cmrFumIR1BIN67cMab8vx0U9uvcgxY"

    const response = await fetch(`${apiRoot}/photos/random?client_id=${accessKey}&count=1`)
    const data = await response.json()
    console.log(data[0].urls.regular)
    setImages(data[0].urls.regular) 

    const res = await fetch(`http://www.boredapi.com/api/activity/`);
    const dataActivity = await res.json();
    console.log(dataActivity.activity);
    setActivity(dataActivity.activity);
  };

  useEffect(() => {
    fetchApi()
  }, []) 

  return (
    <>
      <div className="main">
        <h1>Get bored?</h1>
        <p>Click the button and get a new thing to do so you don't get bored</p>

        <button onClick={fetchApi}>Fetch Unsplash Api</button>
        <h3>{activity}</h3>
      </div>
      <div>
        <img className="imageUnsplash" src={images} alt="photo" />
      </div>
    </>
  );
}

export default App;
