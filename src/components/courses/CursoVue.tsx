import React from 'react';

const CursoVue: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Curso de Vue.js</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
          <ul className="list-none pl-6 mb-4">
            <li className="font-bold">893 Lecciones</li>
            <li className="font-bold">80.5 Horas de contenido en video</li>
          </ul>
          <ul className="list-decimal pl-6">
            <li>Introducción a Vue.js</li>
            <li>Componentes en Vue.js</li>
            <li>Directivas en Vue.js</li>
            <li>Vue Router</li>
            <li>Estado de la aplicación en Vue.js</li>
            <li>Gestión de formularios en Vue.js</li>
            <li>Vue CLI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CursoVue;
