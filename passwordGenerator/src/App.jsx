import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

//Password Generator App
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charSpecialAllowed, setCharSpecialAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGenerate = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"

    if(charSpecialAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()
                  * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charSpecialAllowed,setPassword])

  useEffect(() => {
    passwordGenerate()
  }, [length, numberAllowed, charSpecialAllowed, passwordGenerate])

  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 my-8 bg-gray-800 text-blue-100 mx-auto">
      <h1 className="text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly 
            value={password}
            className='outline-none w-full bg-gray-700  text-blue-100 px-4 py-2 mb-4 rounded-lg'
            placeholder='password'
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className="outline-none px-3 py-0.5 shrink-0 h-max rounded">Copy</button>
      </div>
          <div className="flex text-sm gap-4 items-center mb-4">
          {/* Length Slider */}
        <div className="flex items-center gap-2 mb-4 w-full">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="accent-blue-500 cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-1 mb-4">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Special Characters Checkbox */}
        <div className="flex items-center gap-1 mb-4">
          <input
            type="checkbox"
            checked={charSpecialAllowed}
            id="characterInput"
            onChange={() => setCharSpecialAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Special Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
