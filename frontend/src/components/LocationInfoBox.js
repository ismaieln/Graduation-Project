import React from 'react'

const LocationInfoBox = ({ info }) => {
  return (
    <div className='location-info'>
      <h2>Farm Info</h2>
      <ul>
        <li>
          <strong>Farm Name: {info.name}</strong>
        </li>
        <li>
          {' '}
          <strong>Address: {info.address}</strong>
        </li>
        <li>
          {' '}
          <strong>Rating: {info.rating}</strong>
        </li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
