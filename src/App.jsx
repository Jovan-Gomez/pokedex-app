import { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './context/authContext'
import { authReducer } from './context/authReducer'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import Layout from './layouts'
import Home from './screens/Home'
import Pokemons from './screens/Pokemons'
import PokemonInfo from './screens/Pokemons/components/PokemonInfo'
import NotFound from './screens/NotFound'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}
function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path='/pokemons'
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Pokemons />} />
            <Route path='/pokemons/:pokemonName' element={<PokemonInfo />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
