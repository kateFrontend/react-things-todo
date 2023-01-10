import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [activity, setActivity] = useState('')

  const getApi = async() => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json()
    console.log(data.activity)
    setActivity(data.activity)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <main>
      <h1>Get bored?</h1>
      <p>Click the button and get a new thing to do so you don't get bored</p>
      <button onClick={getApi}>Click me</button>
      <h3>{activity}</h3>
    </main>
  )
}

export default App