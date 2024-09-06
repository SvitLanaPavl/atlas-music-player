import React from 'react'

const PlayListItem = ( {title, artist, duration, isCurrent} ) => {
  return (
    <button className={`flex w-full justify-between items-center mb-1 cursor-pointer ${isCurrent ? 'bg-gray-100 rounded-md' : 'bg-transparent'} hover:bg-gray-100 transition duration-150 ease-in-out`}>
      <div className='text-left'>
        <div className='font-medium'>{title}</div>
        <div className='text-sm leading-5 text-gray-500'>{artist}</div>
      </div>
      <div className='text-sm leading-5 text-gray-400'>{duration}</div>
    </button>
  );
}

export default PlayListItem