export const getAllTypes = async () => {
  try {
    const baseUrl = 'https://pokeapi.co/api/v2/type'
    const response = await fetch(baseUrl)
    const types = await response.json()
    return types.results
  } catch (error) {
    console.error(error)
  }
}

export const getAllPokemons = async () => {
  try {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=1118`
    const response = await fetch(baseUrl)
    const pokemons = await response.json()

    return pokemons
  } catch (error) {
    console.error(error)
  }
}

export const getPokemons = async () => {
  try {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon`
    const response = await fetch(baseUrl)
    const pokemons = await response.json()
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
    return pokemons
  } catch (error) {
    console.error(error)
  }
}

export const getNextPokemons = async (pokemons, setPokemons) => {
  try {
    if (pokemons.next) {
      const response = await fetch(pokemons.next)
      setPokemons(await response.json())
    }
  } catch (error) {
    console.error(error)
  }
}

export const getPreviousPokemons = async (pokemons, setPokemons) => {
  try {
    if (pokemons.previous) {
      const response = await fetch(pokemons.previous)
      setPokemons(await response.json())
    }
  } catch (error) {
    console.error(error)
  }
}

export const getPokemonByUrl = async (url = '') => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
export const getPokemonByName = async (name) => {
  try {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(baseUrl)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
export const getPokemonByType = async (type) => {
  try {
    const baseUrl = `https://pokeapi.co/api/v2/type/${type}`
    const response = await fetch(baseUrl)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
