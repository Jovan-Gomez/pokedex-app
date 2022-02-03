const Navigation = ({ handlePrevious, handleNext, pokemons }) => {
  return (
    <div className='flex justify-center gap-2 pt-5'>
      {pokemons?.previous !== null && (
        <button
          className='py-2 px-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300'
          onClick={handlePrevious}
        >
          Prev
        </button>
      )}
      {pokemons?.next !== null && (
        <button
          className='py-2 px-3 bg-red-400 text-white font-semibold rounded-full hover:bg-red-500 transition-all duration-300'
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Navigation
