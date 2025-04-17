import { useState } from 'react'
import './App.css'
import { ClientBuilder } from './services/ClientBuilder';

function App() {
  const [bggJson, setBggJson] = useState("")

  return (
    <>
      <h1>Plan Your Game Nights in Style</h1>
      <div className="card">
        <button onClick={async () => setBggJson(JSON.stringify(await ClientBuilder.getClient().get('/users/', {withCredentials: false})))}>
          Click here to load search {bggJson}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App