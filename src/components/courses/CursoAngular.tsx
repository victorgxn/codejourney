import React from 'react';

const CursoAngular: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Curso de Angular</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
          <ul className="list-none pl-6 mb-4">
            <li className="font-bold">893 Lecciones</li>
            <li className="font-bold">80.5 Horas de contenido en video</li>
          </ul>
          <ul className="list-decimal pl-6">
            <li>Introducción a Angular</li>
            <li>Componentes en Angular</li>
            <li>Directivas en Angular</li>
            <li>Servicios y dependencias en Angular</li>
            <li>Rutas y navegación en Angular</li>
            <li>Formularios en Angular</li>
            <li>Gestión de estado en Angular</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CursoAngular;
