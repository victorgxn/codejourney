import React from 'react';

const CursoReact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Curso de React</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
          <ul className="list-none pl-6 mb-4">
            <li className="font-bold">893 Lecciones</li>
            <li className="font-bold">80.5 Horas de contenido en video</li>
          </ul>
          <ul className="list-decimal pl-6">
            <li>Introducción a React</li>
            <li>Componentes en React</li>
            <li>Estado y ciclo de vida en React</li>
            <li>Manejo de eventos en React</li>
            <li>React Hooks</li>
            <li>Routing en React</li>
            <li>Manejo de formularios en React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CursoReact;
