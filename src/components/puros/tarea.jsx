import React from 'react'
import PropTypes from 'prop-types'
import { TareaModel } from '../../models/tarea.model'

const TareaComponent = ({ task }) => {
  return (
    <div>
      <p>Nombre {task.name}</p>
      <p>Descripción {task.description}</p>
      <p>Level {task.level}</p>
      <p>Completo {task.completed ? 'COMPLETED' : 'PENDING'}</p>
    </div>
  )
}

//utilizamos instanceOf para verificar que task que llega como props a la funcion de tareaComponet sea del tipo que se definio en el modelo si es del ese tipo devuelve un boleano en true si no un false
TareaModel.propTypes = {
    task: PropTypes.instanceOf(TareaModel)
}

export default TareaComponent

