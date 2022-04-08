import { useState } from 'react'

export const useHandle = (initialState = {}) => {

const [state, setState] = useState(initialState)


const handleChange = (e) => {
  const {name , value , checked , type} = e.target
    setState((old) => ({  
      ...old, 
    [name]: type === "checkbox" ? checked : value,
    }))
}

const reset = () => {
    setState(initialState) //reiniciar el formulario
}
//devolvemos:
  return [state,handleChange,reset]
}
