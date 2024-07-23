import React from 'react'
import myContext from './myContext'

function myState({ children }) {
  return (
    <myContext.Provider value = {{
       
    }}>

     { children }

     </myContext.Provider>

  )
}

export default myState;