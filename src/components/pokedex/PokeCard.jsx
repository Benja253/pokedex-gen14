import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const clickCard = () => navigate(`/pokemon/${pokemon.id}`)

  console.log(pokemon)

  return (
    <article onClick={clickCard} className='card-pokemon'>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h3>{pokemon?.name}</h3>
    </article>
  )
}

export default PokeCard