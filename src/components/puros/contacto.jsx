import React from 'react'
import PropTypes from 'prop-types'
import { ContactoModel } from '../../models/contacto.model'

const ContactoComponent = ({ task }) => {
  return (
    <div>
      <p>Nombre : {task.nombre}</p>
      <p>Apellido : {task.apellido}</p>
      <p>Email :{task.email}</p>
      <p>Conectado : {task.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
    </div>
  )
}

ContactoModel.propTypes = {
    task: PropTypes.instanceOf(ContactoModel)
}

export default ContactoComponent