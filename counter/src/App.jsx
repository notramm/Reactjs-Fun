import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  const addValue = () => {
    setCounter(counter + 1);
    if (counter >= 20) {
      setCounter(20);
    }
  }

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <button
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
