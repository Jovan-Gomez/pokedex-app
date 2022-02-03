const SearchBar = ({ types, handleName, name, handleType, type }) => {
  return (
    <div className='flex flex-col md:flex-row md:justify-center items-center gap-4'>
      <div className='py-2 px-4 border-2 border-red-600 rounded-full shadow-md'>
        <label htmlFor='search' className='text-gray-500'>
          {' '}
          <i className='bi bi-search'></i>
        </label>
        <input
          id='search'
          type='text'
          placeholder='Search by name'
          className='outline-none px-2 text-lg text-gray-400'
          value={name}
          onChange={handleName}
        />
      </div>
      <div className='py-2 px-4 border-2 border-red-600 rounded-full shadow-md'>
        <select value={type} onChange={handleType} className='text-gray-500 outline-none text-l'>
          <option value=''>--Type--</option>
          {types.map((type) => (
            <option key={type.url}>{type.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
