import React from 'react'
import '../styles/Formulario.css'
const LeerTareas = ({item , setTareas}) => {

const eliminaTodo = (id) => {
  setTareas((old) => old.filter((item) => item.id !== id))
}

  const {nombre, descripcion , estado,id} = item
  return (
    <>
 <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                {nombre} {estado ? ("Finalizada") : ("Pendiente")}
                </div>
                <p>{descripcion}</p>
                <div></div> </div>
<div className='botones'>
<button type="submit" className="boton-eliminar" onClick={() => eliminaTodo(id)}>Eliminar</button>
</div>
</li>

    </>
  )
}

export default LeerTareas