import React from 'react'

const Planets = ({current}) => {

  return (
    <div>
        <h2>{current.name}</h2>
        <h3><strong>Climate:</strong>{current.climate}</h3>
        <h3><strong>Terrain:</strong>{current.terrain}</h3>
        <h3><strong>Surface Water:</strong>{current.surface_water}</h3>
        <h3><strong>Population:</strong>{current.population}</h3>
    </div>
  )
}

export default Planets