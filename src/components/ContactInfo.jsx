import React from 'react';
import '../style/ContactInfo.css'; // Importa el archivo CSS

const ContactInfo = () => {
    return (
        <div className='p-4 bg-gray-200 rounded-md w-1/4 absolute'>
            <h2 className='text-xl font-bold mb-2'>Información de Contacto</h2>
            <p className='mb-1'><strong className='space-font'>Nombre:</strong> Tu nombre</p>
            <p className='mb-1'><strong>Email:</strong> tu-email@example.com</p>
            <p className='mb-1'><strong>Teléfono:</strong> +1 234 567 890</p>
        </div>
    );
};

export default ContactInfo;