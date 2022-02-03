import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../../components/Loading'
import { getPokemonByUrl } from '../../../services/pokemon.service'

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    getPokemonByUrl(url).then((apiPokemon) =>
      setPokemon({
        name: apiPokemon.name,
        img: apiPokemon.sprites.other['official-artwork'].front_default,
      })
    )
    return () => setPokemon({})
  }, [])

  return (
    <Link to={`/pokemons/${pokemon.name}`}>
      <div className=' w-full p-5 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer shadow-lg hover:translate-y-1'>
        {pokemon.name ? (
          <div className='grid grid-cols-2 items-center'>
            {pokemon.img && <img src={pokemon.img} width={200} alt={pokemon.name} />}
            <p className='capitalize text-center text-2xl font-semibold text-gray-600'>{pokemon.name}</p>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Link>
  )
}

export default PokemonCard
