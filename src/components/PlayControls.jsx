import React from 'react'
import play from '../assets/play.svg'
import forward from '../assets/forward.svg'
import shuffle from '../assets/shuffle.svg'

const PlayControls = () => {
  return (
    <div className='mb-4 flex items-center justify-between'>
      <button className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out'>
        <span className='text-lg text-slate-800'>1x</span>
      </button>
      <button className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
          <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
        </svg>
      </button>

      <button className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out outline outline-solid'>
        <img src={play} className="h-6 w-6"/>
      </button>
      <button className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out'>
        <img src={forward} className="h-6 w-6"/>
      </button>
      <button className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm leading-5 font-medium transition duration-150 ease-in-out'>
        <img src={shuffle} className="h-6 w-6"/>
      </button>
    </div>
  )
}

export default PlayControls