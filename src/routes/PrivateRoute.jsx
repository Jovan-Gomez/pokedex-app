import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  return !user.logged ? <Navigate to='/' /> : children
}

export default PrivateRoute
