import React from 'react';

const CursoNode: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Curso de Node.js</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
          <ul className="list-none pl-6 mb-4">
            <li className="font-bold">893 Lecciones</li>
            <li className="font-bold">80.5 Horas de contenido en video</li>
          </ul>
          <ul className="list-decimal pl-6">
            <li>Introducción a Node.js</li>
            <li>Gestión de paquetes con npm</li>
            <li>Creación de servidores con Express</li>
            <li>Manejo de bases de datos con MongoDB</li>
            <li>Autenticación y autorización</li>
            <li>Despliegue de aplicaciones Node.js</li>
            <li>Pruebas unitarias y de integración</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CursoNode;
