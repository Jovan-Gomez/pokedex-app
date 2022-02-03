import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import { AuthContext } from '../../context/authContext'
import { types } from '../../context/types'

const Home = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClose = () => setIsOpenModal(false)
  const handleLogin = () => {
    if (name.length === 0) {
      setError('You must enter a name :c')
      return
    }
    if (name.length < 4) {
      setError('You must enter a name of at least 4 characters :c')
      return
    }
    dispatch({
      type: types.login,
      payload: { name },
    })
    navigate('/pokemons', { replace: true })
  }
  return (
    <div className='bg-background bg-no-repeat h-screen bg-center relative '>
      <div className='absolute top-[47%] left-[44%] md:top-[48%] md:left-[47%] lg:top-[46%] xl:left-[48%]'>
        <button
          onClick={() => setIsOpenModal(true)}
          className='text-white font-semibold rounded-full h-20 w-20 bg-red-500 hover:bg-red-600 transfor transition-all duration-500'
        >
          PRESS
        </button>
      </div>

      <Modal title='Hi!' openModal={isOpenModal} onClose={handleClose}>
        <div className='flex  items-center pt-3 gap-2'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Write your name'
            className='py-2 px-3 outline-none  border-2 border-red-500 rounded-lg text-gray-400'
          />
          <button
            onClick={handleLogin}
            className='inline-block border-2 border-red-600 rounded-full py-1 px-2 text-white font-semibold bg-red-600 transition duration-300 hover:bg-white hover:text-gray-500'
          >
            Start
          </button>
        </div>
        {error && <p className='text-red-600'>{error}</p>}
      </Modal>
    </div>
  )
}

export default Home
