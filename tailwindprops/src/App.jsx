import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let obj = {name: "Tailwindprops"};
  let arr = [1,2,3,4,5];

  return (
    <>
      <h1 className=" text-2xl font-bold bg-green-400 rounded-2xl p-4 m-2 bg-center flex items-center justify-center">Tailwind</h1>
      <Card username="Big Time" btnText="ClickMe" />
      <Card username="Gamble"  />

    </>
  )
}

export default App
