import React from 'react'

const People = ({current}) => {

  return (
    <div>
        <h2>{current.name}</h2>
        <h3><strong>Height:</strong>{current.height}</h3>
        <h3><strong>Mass:</strong>{current.mass}</h3>
        <h3><strong>Hair Color:</strong>{current.hair_color}</h3>
        <h3><strong>Skin Color:</strong>{current.skin_color}</h3>

    </div>
  )
}

export default People