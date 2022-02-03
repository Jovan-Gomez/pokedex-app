import { useEffect, useState } from 'react'
import {
  getAllPokemons,
  getAllTypes,
  getNextPokemons,
  getPokemonByType,
  getPokemons,
  getPreviousPokemons,
} from '../../services/pokemon.service'
import Navigation from './components/Navigation'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState({})
  const [pokemons, setPokemons] = useState(JSON.parse(localStorage.getItem('pokemons')) ?? {})
  const [types, setTypes] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    const getDataFromApi = async () => {
      const [apiPokemons, apiAllPokemons, apiTypes] = await Promise.all([
        getPokemons(),
        getAllPokemons(),
        getAllTypes(),
      ])
      setPokemons(apiPokemons)
      setAllPokemons(apiAllPokemons)
      setTypes(apiTypes)
    }
    getDataFromApi()
  }, [])

  useEffect(() => {
    if (type) {
      getPokemonByType(type).then((apiPokemons) =>
        setPokemons({
          ...pokemons,
          results: apiPokemons.pokemon.map((el) => ({ name: el.pokemon.name, url: el.pokemon.url })),
        })
      )
    }
  }, [type])

  useEffect(() => {
    if (name.length === 0) {
      setPokemons(JSON.parse(localStorage.getItem('pokemons')))
    }
  }, [name])

  const handleName = (e) => {
    setName(e.target.value)
    filterPokemonsByName(e.target.value)
  }
  const handleType = (e) => {
    setType(e.target.value)
  }

  const filterPokemonsByName = (name = '') => {
    const searchResult = allPokemons.results.filter((pokemon) =>
      pokemon.name.toString().toLowerCase().includes(name.toLowerCase())
    )
    setPokemons({ ...pokemons, results: searchResult })
  }

  const handlePrevious = () => getPreviousPokemons(pokemons, setPokemons)
  const handleNext = () => getNextPokemons(pokemons, setPokemons)

  return (
    <div className='my-10'>
      <SearchBar types={types} handleName={handleName} name={name} handleType={handleType} type={type} />
      <Navigation handlePrevious={handlePrevious} handleNext={handleNext} pokemons={pokemons} />
      <div className='pt-10 gap-2 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'>
        {pokemons &&
          pokemons.results &&
          pokemons.results.map((pokemon) => <PokemonCard key={pokemon.name} url={pokemon.url} />)}
      </div>
      <Navigation handlePrevious={handlePrevious} handleNext={handleNext} pokemons={pokemons} />
    </div>
  )
}

export default Pokemons
