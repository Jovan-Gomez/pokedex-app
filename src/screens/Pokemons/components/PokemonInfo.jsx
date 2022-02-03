import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getPokemonByName } from '../../../services/pokemon.service'

const PokemonInfo = () => {
  const { pathname } = useLocation()

  const [pokemon, setPokemon] = useState({})
  const [isSelect, setIsSelect] = useState({ about: true, moves: false })

  const pokemonName = pathname.split('/')[2]

  useEffect(() => {
    getPokemonByName(pokemonName).then((apiPokemon) =>
      setPokemon({
        id: apiPokemon.id,
        name: apiPokemon.name,
        weight: apiPokemon.weight,
        height: apiPokemon.height,
        img: apiPokemon.sprites.other.home.front_default,
        types: apiPokemon.types.map((el) => el.type.name),
        abilities: apiPokemon.abilities.map((el) => el.ability.name),
        moves: apiPokemon.moves.map((el) => el.move.name),
      })
    )

    return () => setIsSelect({ about: true, moves: false })
  }, [])

  return (
    <div className='py-10'>
      <Link to='/' className='text-3xl hover:text-red-600'>
        <i className='bi bi-arrow-left-circle'></i>
      </Link>
      {pokemon.name && (
        <div className='pt-10'>
          <div className='md:text-center'>
            <h2 className='text-4xl text-blue-500 capitalize font-semibold'>
              <span className='font-semibold'>#{pokemon.id} </span>
              {pokemon.name}
            </h2>
            <p className='flex md:justify-center gap-2 pt-3'>
              {pokemon.types.map((type) => (
                <span key={type} className='bg-red-400 font-semibold text-white rounded-full py-1 px-2'>
                  {type}
                </span>
              ))}
            </p>
          </div>
          <div className='w-full mx-auto max-w-4xl'>
            <img src={pokemon.img} alt={pokemon.name} className=' block w-full max-w-xs mx-auto' />
            <div className='bg-yellow-300 rounded-3xl '>
              <nav className='flex gap-5 justify-center py-5'>
                <span
                  onClick={() => setIsSelect({ about: true, moves: false })}
                  className={`text-[#03599A] inline-block cursor-pointer ${
                    isSelect.about && 'border-b-2 border-[#03599A]'
                  } font-bold uppercase`}
                >
                  About
                </span>
                <span
                  onClick={() => setIsSelect({ about: false, moves: true })}
                  className={`text-[#03599A] inline-block cursor-pointer ${
                    isSelect.moves && 'border-b-2 border-[#03599A]'
                  } font-bold uppercase`}
                >
                  Moves
                </span>
              </nav>
              <div className='pb-10 px-5'>
                {isSelect.about ? (
                  <>
                    <div className='flex justify-center gap-4 pb-2'>
                      <p className='uppercase  text-[#03599A]'>
                        Weight
                        <span className='block text-center bg-red-400 font-semibold text-white rounded-full  px-2'>
                          {' '}
                          {pokemon.weight}
                        </span>
                      </p>
                      <p className='uppercase  text-[#03599A]'>
                        Height
                        <span className='block text-center bg-red-400 font-semibold text-white rounded-full px-2'>
                          {pokemon.height}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className='text-center uppercase  text-[#03599A]'>Abilities</h3>
                      <p className='flex justify-center gap-2 pt-3'>
                        {pokemon.abilities.map((ability) => (
                          <span key={ability} className='bg-red-400 font-semibold text-white rounded-full py-1 px-2'>
                            {ability}
                          </span>
                        ))}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className='grid grid-cols-3 gap-2 md:grid-cols-4'>
                    {pokemon.moves.map((move) => (
                      <span
                        key={move}
                        className='bg-red-400 hover:bg-red-500 font-semibold text-white rounded-full p-1 text-center flex items-center justify-center'
                      >
                        {move}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonInfo
