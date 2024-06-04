import Image from 'next/image';
export default function Integrantes() {
  const integrantes = [
    {
      nombre: 'Elliot Moyano',
      imagen: '/images/elliot.jpg',
      descripcion:
        'Desarrollador full-stack con experiencia en el diseño y desarrollo de aplicaciones web y móviles. Especializado en tecnologías como React, Node.js y MongoDB. Apasionado por crear soluciones tecnológicas innovadoras que satisfagan las necesidades del usuario.',
    },
    {
      nombre: 'Victor Gonzalez',
      imagen: '/images/victor.jpeg',
      descripcion:
        'Desarrollador full-stack con un enfoque en el desarrollo de aplicaciones web escalables y robustas. Experto en tecnologías como React, Express y MongoDB. Con una sólida comprensión de los principios de diseño de software, trabaja para crear productos de alta calidad que impulsen el éxito del negocio.',
    },
    {
      nombre: 'Jaime hermana',
      imagen: '/images/jaime.jpg',
      descripcion:
        'Desarrollador frontend con experiencia en la creación de interfaces dinámicas y atractivas utilizando tecnologías como React, Vue y Angular. Apasionado por el diseño web y comprometido con ofrecer experiencias de usuario excepcionales a través de interfaces intuitivas y funcionales..',
    },
    {
      nombre: 'Ayyoub Amjahed',
      imagen: '/images/Ayyoub.jpeg',
      descripcion:
        'Programador backend con experiencia en el desarrollo de sistemas escalables y seguros. Especializado en tecnologías como Node.js, Python y SQL. Con un enfoque en la eficiencia y la seguridad, trabaja para construir soluciones backend robustas que impulsen el rendimiento y la fiabilidad de las aplicaciones.',
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font" id="equipo">
        <div className="container px-4 py-24 mx-auto">
          <h1
            className="text-4xl sm:text-6xl font-semibold text-center pb-10  text-gradient
    bg-gradient-to-r
    from-blue-500
    to-green-300
    bg-clip-text
    text-transparent"
          >
            El equipo de Codejourney
          </h1>
          <div className="flex flex-wrap -m-2">
            {integrantes.map((integrante, index) => (
              <div key={index} className="w-full md:w-1/4 p-2">
                <div className="h-full bg-white px-6 pt-12 pb-20 rounded-lg overflow-hidden text-center relative shadow-sm">
                  <Image
                    src={integrante.imagen}
                    className="block mx-auto w-28 h-28 rounded-full object-cover"
                    alt="Camera"
                    priority={true}
                    width={112}
                    height={112}
                  />
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {integrante.nombre}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {integrante.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
