import React, { useState } from 'react'
import { MostrarError } from './MostrarError'
import '../styles/Formulario.css'
import { useHandle } from '../Hooks/Hook'
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
const Formulario = ({recibeTodo}) => {
  const [error , setError] = useState(false)
const initialState ={
nombre:"",
descripcion:"",
estado:"pendiente",
id:uuidv4(),
}

const [state , handleChange,reset] = useHandle(initialState)

const {nombre, descripcion, estado} = state

const handleSubmit= (e) => {
e.preventDefault()
  if(!nombre.trim() || !descripcion.trim()){
    setError(true)
    return
  } 
  swal("Tarea Agregada!", "Chequea debajo", "success");


recibeTodo({
  nombre,
  descripcion,
  estado:estado === "pendiente" ? false : true,
  id:uuidv4()
})

reset(initialState)
}

  return (
    <>
    {
      error && <MostrarError /> 
    }

<div className='contenedor-formulario'>
<form className='form' onSubmit={handleSubmit}>
<h4>Lista de tareas</h4>
<input type="text" 
name="nombre"
className='input'
placeholder='Ingrese su tarea'
autoComplete='off'
value={nombre}
onChange={handleChange}
 />

<textarea 
className='text'
name='descripcion'
placeholder='Ingrese la descripción de la tarea'  
value={descripcion} 
onChange={handleChange}
/>

<select
name="estado"
value={estado}
onChange={handleChange}
className="form-control mb-2">
<option value="pendiente">Pendiente</option>
<option value="finalizado">Finalizado</option>
                </select>
<div className='botones'>
<button type="submit" className="boton" >Agregar</button>

</div>
</form>
</div>
    </>
  )
}

export default Formulario