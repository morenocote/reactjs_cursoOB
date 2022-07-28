import React from 'react'
import { TareaModel } from '../../models/tarea.model';
import { LEVEL } from '../../models/level';
import TareaComponent from '../puros/tarea';

const Tareas = () => {

    const defaultTarea = new TareaModel( 'ejemplo', 'descripcion de tarea', false, LEVEL.NORMAL)

    return (
        <div>
        <div>
            <TareaComponent task={ defaultTarea }></TareaComponent>
        </div>
        </div>
    )
}



export default Tareas
