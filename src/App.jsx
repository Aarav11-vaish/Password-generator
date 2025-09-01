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

  useEffect(() => {
    generatePassword();
  }, [generatePassword])

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center gap-2 mb-6">
          <input
            className="flex-1 rounded-lg px-3 py-2 border border-slate-600 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={password}
            readOnly
          />
          <button
            onClick={generatePassword}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium"
          >
            Generate
          </button>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Length: {length}
            </label>
            <input
              className="w-full"
              type="range"
              min="8"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numbers"
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              checked={includeNumbers}
            />
            <label htmlFor="numbers" className="text-sm">Include numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="special"
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              checked={incspecialChars}
            />
            <label htmlFor="special" className="text-sm">Include special characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
