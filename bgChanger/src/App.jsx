import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap shadow-xl justify-center gap-3 bg-white px-3 py-2 rounded-3xl ">
      <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "red"}}>Red</button>
      <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "blue"}}>Blue</button>
      <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "green"}}>Green</button>
      <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "pink"}}>Pink</button>
      <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "black"}}>Black</button>
      <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "orange"}}>Orange</button>
      <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "yellow"}}>Yellow</button>
      <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "violet"}}>Violet</button>
      <button onClick={() => setColor("indigo")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "indigo"}}>Indigo</button>
      <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-2xl bg-gray-200 hover:bg-gray-300 duration-150 text-white font-semibold shadow-md cursor-pointer'style={{backgroundColor: "lavender"}}>Lavender</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
