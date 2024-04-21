import { useState } from 'react';
import CursoAngular from './courses/CursoAngular';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CursoNode from './courses/CursoNode';
import CursoReact from './courses/CursoReact';
import CursoVue from './courses/CursoVue';

export default function CursoSelector() {
  const [selectedTechnology, setSelectedTechnology] = useState('');

  const renderCursoComponent = () => {
    switch (selectedTechnology) {
      case 'Angular':
        return <CursoAngular />;
      case 'React':
        return <CursoReact />;
      case 'Vue.js':
        return <CursoVue />;
      case 'Node.js':
        return <CursoNode />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
        <div className="flex flex-wrap justify-center">
          <div
            className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4"
            onClick={() => setSelectedTechnology('Angular')}
          >
            <FontAwesomeIcon icon={faAngular} size="2x" className="w-10 h-10" />
            <p>Angular</p>
          </div>
          {/* Resto de las opciones de tecnología */}
        </div>
      </div>
      {renderCursoComponent()}
    </div>
  );
}
