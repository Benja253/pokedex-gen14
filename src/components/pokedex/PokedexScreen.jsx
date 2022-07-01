import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import PokeCard from './PokeCard'

const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [typeList, setTypeList] = useState()
  const [filterType, setFilterType] = useState('All Pokemons')

  useEffect(() => {
    if(filterType === 'All Pokemons'){
      // Todos los pokemons
      const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      axios.get(URL_POKEMONS)
        .then(res => {
          console.log(res.data.results)
          setPokemons(res.data.results)
        })
        .catch(err => console.log(err))
    } else {
      // Pokemons por tipo
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
      axios.get(URL)
        .then(res => {
          console.log(res.data.pokemon)
          const array = res.data.pokemon.map(e => e.pokemon)
          setPokemons(array)
        })
        .catch(err => console.log(err))
    }
  }, [filterType])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypeList(res.data.results))
      .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    setFilterPokemon(pokemons?.filter(e => e.name.includes(pokeSearch.toLowerCase())))
  }, [pokeSearch])


  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hola {nameUser}, bienvenido a la pokedex </h2>
      <Form 
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setFilterType={setFilterType}
      />
      <div className='card-container'>
        {
          filterPokemon ?
            filterPokemon?.map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
            pokemons?.map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
        }
      </div>
    </div>
  )
}

export default PokedexScreen