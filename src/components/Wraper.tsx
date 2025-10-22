import React, { createContext, useState } from 'react'

export const todoContext = createContext(null)

const Wraper = (props) => {
    const [todos,setTodos] = useState([
    {id:1,title:"Kaam Kar le",isCompleted:false}
  ])  
  return (
    <todoContext.Provider value={[todos,setTodos]}>
    {props.children}
    </todoContext.Provider>
  )
}

export default Wraper