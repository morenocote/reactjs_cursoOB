import React, { useState, useEffect } from 'react'

const ClockFunctionComponent = () => {

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState('nombre');
    const [apellido, setApellido] = useState('apellido');

    useEffect(() => {
        const timerID = setInterval(() => {
          setEdad(edad => edad + 1);
          setFecha( fecha => fecha = new Date());
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
         <h2>
         Hora Actual:
         { fecha.toLocaleTimeString() }
         </h2>
         <h3>{ nombre } { apellido }</h3>
         <h1>Edad: { edad }</h1>
         </div>
    )
}

export default ClockFunctionComponent
