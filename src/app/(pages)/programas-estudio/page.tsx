import { Footer, TopMenu } from "@/components";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faNodeJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

export default function ProgramaEstudio() {
  return (
    <>
      <TopMenu />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 ">
          <TypewriterEffect
              words={[
              { text: "Programas " },
              { text: "de " },
              { text: "Estudios " },
            ]}
          />
        </div>
        <div className="text-center">
          <p className="mb-8">
            Agrupados por tecnología y fundamentales. Creamos cada listado en un
            orden que sugerimos seguir, así tendrás la mejor base para estudiar
            cada programa.
          </p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap justify-center">
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4">
              <FontAwesomeIcon
                icon={faAngular}
                size="2x"
                className="w-10 h-10"
              />
              <p>Angular</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4">
              <FontAwesomeIcon icon={faReact} size="2x" className="w-10 h-10" />
              <p>React</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4">
              <FontAwesomeIcon icon={faVuejs} size="2x" className="w-10 h-10" />
              <p>Vue.js</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4">
              <FontAwesomeIcon
                icon={faNodeJs}
                size="2x"
                className="w-10 h-10"
              />
              <p>Node.js</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
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
                <li>
                  GIT+GitHub: Todo un sistema de control de versiones de cero
                </li>
                <li>JavaScript Moderno: Guía para dominar el lenguaje</li>
                <li>TypeScript: Tu completa guía y manual de mano</li>
                <li>Principios SOLID y Clean Code</li>
                <li>SQL de cero: Tu guía práctica con PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

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

      </div>

      <Footer />
    </>
  );
}
