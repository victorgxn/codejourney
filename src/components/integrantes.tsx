import Image from 'next/image';
export default function Integrantes() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-24 mx-auto">
        <h1
          className="text-4xl font-semibold text-center pb-10 text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
        >
          Nuestro equipo de Codejourney
        </h1>
        <div className="flex flex-wrap -m-2">
          <div className="w-full md:w-1/4 p-2">
            <div className="h-full bg-white px-6 pt-12 pb-20 rounded-lg overflow-hidden text-center relative shadow-sm">
              <Image
                src="/images/victor.jpeg"
                className="block mx-auto w-28 h-28 rounded-full"
                alt="Camera"
                width={112}
                height={112}
              />
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Elliot Moyano Cutler
              </h1>
              <p className="leading-relaxed mb-3">
                Desarrollador full-stack con experiencia en el diseño y
                desarrollo de aplicaciones web y móviles. Especializado en
                tecnologías como React, Node.js y MongoDB. Apasionado por crear
                soluciones tecnológicas innovadoras que satisfagan las
                necesidades del usuario.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="h-full bg-white px-6 pt-12 pb-20 rounded-lg overflow-hidden text-center relative shadow-sm">
              <Image
                src="/images/victor.jpeg"
                className="block mx-auto w-28 h-28 rounded-full"
                alt="Camera"
                width={112}
                height={112}
              />
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Victor Gonzalez Martin
              </h1>
              <p className="leading-relaxed mb-3">
                Desarrollador full-stack con un enfoque en el desarrollo de
                aplicaciones web escalables y robustas. Experto en tecnologías
                como React, Express y MongoDB. Con una sólida comprensión de los
                principios de diseño de software, trabaja para crear productos
                de alta calidad que impulsen el éxito del negocio.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="h-full bg-white px-6 pt-12 pb-20 rounded-lg overflow-hidden text-center relative shadow-sm">
              <Image
                src="/images/jaime.jpg"
                className="block mx-auto w-28 h-28 rounded-full"
                alt="Camera"
                width={112}
                height={112}
              />
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Jaime Hermana Caffarena
              </h1>
              <p className="leading-relaxed mb-3">
                Desarrollador frontend con experiencia en la creación de
                interfaces dinámicas y atractivas utilizando tecnologías como
                React, Vue y Angular. Apasionado por el diseño web y
                comprometido con ofrecer experiencias de usuario excepcionales a
                través de interfaces intuitivas y funcionales.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="h-full bg-white px-6 pt-12 pb-20 rounded-lg overflow-hidden text-center relative shadow-sm">
              <Image
                src="/images/jaime.jpg"
                className="block mx-auto w-28 h-28 rounded-full"
                alt="Camera"
                width={112}
                height={112}
              />
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Ayyoub Amjahed Abed
              </h1>
              <p className="leading-relaxed mb-3">
                Programador backend con experiencia en el desarrollo de sistemas
                escalables y seguros. Especializado en tecnologías como Node.js,
                Python y SQL. Con un enfoque en la eficiencia y la seguridad,
                trabaja para construir soluciones backend robustas que impulsen
                el rendimiento y la fiabilidad de las aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
