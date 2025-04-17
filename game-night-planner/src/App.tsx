import { useState } from 'react'
import './App.css'
import { BggService } from './services/BggService';
import { UserService } from './services/UserService';


function App() {
  const [games, setGames] = useState([])
  const [hasCookie, setCookieJson] = useState(false)

  return (
    <>
      <h1>Plan Your Game Nights in Style</h1>
      <button onClick={async () => setCookieJson(await UserService.login())}>
          Click here to login: {hasCookie? 'you!' : 'anon'}
      </button>
      <div className="card">
        <button onClick={async () => setGames(await BggService.getUserGames())}>
          Click here to load search
        </button>
        <div className="gameList">
          {games.map((g, key) => <div key={key}><img className="thumbnail" src={g.thumbnail}></img></div>)}
        </div>
      </div>
    </>
  )
}

export default App