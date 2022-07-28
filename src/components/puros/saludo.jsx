import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Saludo = props => {
    
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
        Hola mundo funcional { props.name }
        <p>Contador { contador }</p>
        <button onClick={ sumar }> Sumar </button>
        <button onClick={ restar }> Restar </button>
        </div>
    )

}



Saludo.propTypes = {
    name: PropTypes.string
}

export default Saludo
