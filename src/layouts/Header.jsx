import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { types } from '../context/types'

const Header = () => {
  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    })
    navigate('/', { replace: true })
  }
  return (
    <header>
      <nav className='flex flex-col  md:flex-row justify-between items-center gap-2'>
        <Link to='/pokemons'>
          <div className='bg-logo h-20 w-56 bg-cover'></div>
        </Link>
        <div className='flex justify-between w-full md:justify-end gap-10 items-center'>
          <p className='text-lg text-blue-500'>
            <i className='bi bi-person-circle'></i> {user.name}
          </p>
          <button onClick={handleLogout} className='text-2xl text-red-600'>
            <i className='bi bi-box-arrow-right'></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
