import React from 'react'
import Proptypes from 'prop-types'

const TercerComponente = ({name, lastname, ficha}) => {
  return (
    <div>
      <h1>Comnicación entre componentes</h1>
      <ul>
        <li>{name}</li>
        <li>{lastname}</li>
        <li>{ficha.peso}</li>
      </ul>
      
    </div>
  )
}
TercerComponente.propTypes = {
  name: Proptypes.string.isRequired,
  lastname: Proptypes.string.isRequired,
  ficha: Proptypes.object
}
export default TercerComponente