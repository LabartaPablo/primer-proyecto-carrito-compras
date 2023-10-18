import React from 'react'

const MiComponente = ({ miProp }) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'lalalala'} />
  )
}


export default App
