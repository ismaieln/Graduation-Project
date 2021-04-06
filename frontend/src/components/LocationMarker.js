import React from 'react'
import { Icon } from '@iconify/react'

import manFarmer from '@iconify-icons/twemoji/man-farmer'

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='marker' onClick={onClick}>
      <Icon icon={manFarmer} className='location-icon' />
    </div>
  )
}

export default LocationMarker
