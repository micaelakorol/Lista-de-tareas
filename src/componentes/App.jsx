import React, { useState } from 'react'

import Formulario from './Formulario'
import LeerTareas from './LeerTareas'

const App = () => {

  const [tareas , setTareas] = useState([])

  const recibeTodo = (tarea) => {
      setTareas((old) => [...old , tarea])
  }
  return (
    <div>
<Formulario recibeTodo={recibeTodo}/>

<ul className="list-group list-group-numbered">
                {tareas.map((item) => (
                    <LeerTareas key={item.id} item={item} setTareas={setTareas} recibeTodo={recibeTodo}/>
                ))}
            </ul>
    </div>
  )
}

export default App