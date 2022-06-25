import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import PokeInfoScreen from './components/pokemonInfo/PokeInfoScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/pokedex' element={<PokedexScreen />} />
        <Route path='/pokedex/:id' element={<PokeInfoScreen />} />
      </Routes>
    </div>
  )
}

export default App
