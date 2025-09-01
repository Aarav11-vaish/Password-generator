import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [incspecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = useCallback(() => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let s = "";
    s += alphabet;
    let pass = "";
    if (includeNumbers) {
      s += numbers;
    }
    if (incspecialChars) {
      s += special;
    }
    for (let i = 0; i < length; i++) {
      let char = s.charAt(Math.floor(Math.random() * s.length + 1));
      pass += char;
    }
    setPassword(pass);
  }, [length, includeNumbers, incspecialChars, setPassword]);

  useEffect(()=>{
   generatePassword();

  }, [generatePassword])

  return (
    <div className="bg-slate-800 h-screen text-white">

      <div className='flex  align-center justify-center '>
        <div className='text-xl font-bold text-center m-6'>
          Password Generator
          <input className='rounded-xl bg-white border-2 text-black flex items-center'
            type="text"
            value={password}
            readOnly
          />
        </div>
      </div>
      <div className='flex items-center  justify-center text-sm flex gap-x-1  items-left'>

        <label >range: {length} </label>
        <input className='' type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => { setLength(e.target.value) }}
        />

        <input type="checkbox"
          onChange={(e) => { setIncludeNumbers(e.target.checked) }}
          checked={includeNumbers}

        />
        <label>Include numbers</label>
        <input type="checkbox" 

          onChange={(e) => { setIncludeSpecialChars(e.target.checked) }}
          checked={incspecialChars}

        
        />
        <label>Include special characters</label>
      </div>
    </div>
  )
}

export default App
