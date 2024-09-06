import React from 'react'
import volume from '../assets/volume.svg'

const VolumeControls = () => {
  return (
    <div className='flex items-center space-x-2'>
      <img src={volume} className='w-5 h-5 block align-middle' />
      <div className='flex items-center w-full'>
        <input type='range' className='w-full accent-gray-500 outline-none focus:outline-2 focus:outline-transparent focus:outline-offset-2' />
      </div>
    </div>
  )
}

export default VolumeControls