import React from 'react';

const ContactInfo = () => {
    return (
        <div className='p-4 bg-gray-200 rounded-md w-2/3 text-right float-right m-3 h-64'>
            <h2 className='text-xl font-bold mb-2'>Información de Contacto</h2>
            <p className='mb-1'><strong>Nombre:</strong> Tu nombre</p>
            <p className='mb-1'><strong>Email:</strong> tu-email@example.com</p>
            <p className='mb-1'><strong>Teléfono:</strong> +1 234 567 890</p>
        </div>
    );
};

export default ContactInfo;