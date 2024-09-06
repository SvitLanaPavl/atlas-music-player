import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControls from './VolumeControls'

const CurrentlyPlaying = () => {
  return (
    <div>
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  )
}

export default CurrentlyPlaying