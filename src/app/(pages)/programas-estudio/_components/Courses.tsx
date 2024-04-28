export const Course = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold mb-4">Fundamentos</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-lg">
        <ul className="list-none pl-6 mb-4">
          <li className="font-bold">893 Lecciones</li>
          <li className="font-bold">80.5 Horas de contenido en video</li>
        </ul>
        <ul className="list-decimal pl-6">
          <li>Programación para principiantes: Primeros pasos</li>
          <li>Visual Studio Code: Mejora tu velocidad para codificar</li>
          <li>GIT+GitHub: Todo un sistema de control de versiones de cero</li>
          <li>JavaScript Moderno: Guía para dominar el lenguaje</li>
          <li>TypeScript: Tu completa guía y manual de mano</li>
          <li>Principios SOLID y Clean Code</li>
          <li>SQL de cero: Tu guía práctica con PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
};
