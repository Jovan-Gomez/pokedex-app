import React from 'react'

const Modal = ({ children, openModal, title, onClose }) => {
  return (
    <div
      className={`w-screen h-screen  top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center p-1 ${
        openModal ? 'fixed' : 'hidden'
      }`}
    >
      <div
        className={`w-max md:w-1/2 max-w-3xl rounded-lg shadow-lg p-5 bg-white relative  transition-all duration-700`}
      >
        <div className='flex items-center justify-between pb-1 border-b-2 border-gray-100'>
          <h3 className='text-base md:text-xl font-medium text-red-600'>{title}</h3>
          <button
            className='w-7 h-7 bg-red-600 font-bold text-white transition-colors hover:bg-red-700 rounded-full'
            onClick={onClose}
          >
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
