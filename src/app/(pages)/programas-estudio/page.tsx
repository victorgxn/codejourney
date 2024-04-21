import { Footer, TopMenu } from "@/components";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faNodeJs,
  faReact,
  faVuejs,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import CursoAngular from "@/components/courses/CursoAngular";
import CursoReact from "@/components/courses/CursoReact";
import CursoVue from "@/components/courses/CursoVue";
import CursoNode from "@/components/courses/CursoNode";

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
          <div className="flex flex-wrap mb-8 bg-white shadow-lg rounded-lg justify-center max-w-ld mx-auto">
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faCodepen}
                size="2x"
                className="w-10 h-10"
              />
              <p>Fundamentos</p>
            </div>

            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faAngular}
                size="2x"
                className="w-10 h-10"
                style={{ color: 'red' }} 
              />
              <p>Angular</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faReact} size="2x" className="w-10 h-10" style={{ color: 'lightblue' }} />
              <p>React</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faVuejs} size="2x" className="w-10 h-10"  />
              <p>Vue.js</p>
            </div>
            <div className="m-2 text-center hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg p-4 flex flex-col justify-center items-center">
              <FontAwesomeIcon
                icon={faNodeJs}
                size="2x"
                className="w-10 h-10"
                style={{ color: 'green' }} 
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

        <CursoAngular></CursoAngular>
        <CursoReact></CursoReact>
        <CursoVue></CursoVue>
        <CursoNode></CursoNode>
      </div>

      <Footer />
    </>
  );
}
