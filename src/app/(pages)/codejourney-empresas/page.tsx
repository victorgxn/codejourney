import { Footer, TopMenu } from "@/components";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export default function PaginaEmpresas() {
  return (
    <>
      <TopMenu />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <div
              className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
            >
              <TypewriterEffect
                words={[
                  { text: "CodeJourney " },
                  { text: "orientado " },
                  { text: "a " },
                  { text: "empresas " },
                ]}
              />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Acelera el crecimiento de tu empresa con nuestros cursos
              personalizados de programación, diseñados para mejorar las
              habilidades de tus desarrolladores y adaptarse perfectamente a las
              necesidades de tu empresa.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-sm">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FRONT-END
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Desarrollo Front-End
                </h1>
                <p className="leading-relaxed mb-3">
                  Aprende React, Vue y Angular para crear interfaces dinámicas y
                  responsivas.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-sm">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BACK-END
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Desarrollo Back-End
                </h1>
                <p className="leading-relaxed mb-3">
                  Domina Node.js, Django y Spring Boot para construir robustos
                  back-ends.
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-sm">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  DEVOPS
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  DevOps
                </h1>
                <p className="leading-relaxed mb-3">
                  Implementa prácticas de CI/CD, contenerización con Docker y
                  orquestación con Kubernetes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <video
              className="rounded-xl"
              width="640"
              height="360"
              autoPlay
              muted
              loop
            >
              <source src="/videos/empresa.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="lg:w-1/2 lg:pl-10 lg:py-6">
            <div>
              <h2 className="text-2xl font-medium title-font mb-4 text-gray-900">
                ¿A quién va dirigido CodeJourney para empresas?
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                CodeJourney para Empresas está dirigido a organizaciones o
                empresas que quieran capacitar a sus colaboradores. Te ofrecemos
                precio preferencial de acuerdo a la cantidad de estudiantes
                inscritos a Codejourney.
              </p>
              <div className="pl-5">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-university mr-2"
                  >
                    <circle cx="12" cy="10" r="1" />
                    <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
                    <path d="M6 17v.01" />
                    <path d="M6 13v.01" />
                    <path d="M18 17v.01" />
                    <path d="M18 13v.01" />
                    <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  </svg>
                  <span className="text-gray-700">
                    Universidades y otros centros de estudio
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user mr-2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-gray-700">
                    Equipos de Trabajo entre 15 - 20 colaboradores
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase-business mr-2"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                  <span className="text-gray-700">
                    Empresas de 15 a más colaboradores
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-primary-500 tracking-widest font-medium title-font mb-1">
              CONTACTO
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Contacto para Empresas
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form action="#" method="post" className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Nombre del Contacto
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
