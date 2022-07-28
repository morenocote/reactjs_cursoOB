import React from 'react'
import { ContactoModel } from '../../models/contacto.model';
import ContactoComponent from '../puros/contacto';

const Contacto = () => {

    const cont = new ContactoModel('nombre', 'apellido', '123456@gamil.com', false);

    return (
        <div>
            <ContactoComponent task={ cont }></ContactoComponent>
        </div>
    )
}

export default Contacto
