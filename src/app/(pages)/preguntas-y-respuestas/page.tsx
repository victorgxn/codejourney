import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ | Codejourney",
  description:
    "Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador. ",
};

export default function PaginaEmpresas() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <div
            className="text-6xl mt-20 flex justify-center font-bold md:px-20 pb-10
            bg-clip-text
            text-transparent"
          >
            <TypewriterEffect
              words={[
                { text: "Preguntas " },
                { text: "y " },
                { text: "respuestas " },
              ]}
            />
          </div>
          <div className="mx-auto max-w-3xl py-2 px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
              <div className="lg:w-1/2 px-4 lg:px-0 lg:mr-4">
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                  <h1 className="text-4xl lg:text-5xl font-bold text-justify lg:text-center mb-10">
                    CodeJourney
                  </h1>
                  <p className="text-center lg:text-center text-gray-700 leading-relaxed">
                    CodeJourney ofrece aprender programación de manera efectiva.
                    Esta aplicación resuelve la necesidad de millones de
                    personas en todo el mundo que desean aprender a programar,
                    pero se sienten abrumadas por la complejidad del proceso.
                    CodeJourney simplifica el aprendizaje de la programación al
                    enseñar conceptos complejos en lecciones fáciles de entender
                    y proyectos prácticos, permitiendo a los usuarios adquirir
                    habilidades de programación de manera gradual y efectiva.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 px-4 lg:px-0 lg:ml-4">
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <video
                    className="w-full"
                    width="640"
                    height="360"
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/videos/faq.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="">
  <div className="flex flex-col justify-center items-center mx-20">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué tipo de cursos ofrecemos?</AccordionTrigger>
            <AccordionContent>
              Ofrecemos una amplia variedad de cursos de programación,
              incluyendo desarrollo front-end, back-end, DevOps, diseño web,
              bases de datos, y mucho más.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              ¿Son los cursos adecuados para principiantes?
            </AccordionTrigger>
            <AccordionContent>
              Sí, nuestros cursos están diseñados para adaptarse a diferentes
              niveles de experiencia, desde principiantes hasta profesionales
              experimentados. Ofrecemos contenido tanto introductorio como
              avanzado.{" "}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Cuál es la duración de los cursos?
            </AccordionTrigger>
            <AccordionContent>
              La duración de nuestros cursos varía según el tema y la
              profundidad del contenido. Algunos cursos pueden durar unas pocas
              semanas, mientras que otros pueden extenderse durante varios
              meses, dependiendo de los objetivos de aprendizaje y la
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              ¿Cómo puedo acceder a los cursos?
            </AccordionTrigger>
            <AccordionContent>
              Nuestros cursos están disponibles en línea a través de nuestra
              plataforma de aprendizaje. Una vez que te hayas registrado y
              matriculado en un curso, podrás acceder al contenido desde
              cualquier lugar y en cualquier momento, siempre que tengas una
              conexión a Internet.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Cuál es el precio de los cursos?
            </AccordionTrigger>
            <AccordionContent>
              El precio de nuestros cursos varía según el curso específico, la
              duración y otros factores. Ofrecemos opciones de pago flexibles,
              incluyendo planes de suscripción mensual y descuentos por pago
              único. Visita nuestra página de precios
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              ¿Cómo puedo inscribirme en un curso?
            </AccordionTrigger>
            <AccordionContent>
              Para inscribirte en un curso, simplemente visita nuestra página de
              cursos, elige el curso que te interesa y sigue los pasos de
              inscripción. Si tienes alguna pregunta o necesitas ayuda, nuestro
              equipo de soporte está disponible para asistirte.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              ¿Ofrecen certificados al completar un curso?
            </AccordionTrigger>
            <AccordionContent>
              Sí, al completar con éxito un curso, recibirás un certificado de
              finalización que podrás compartir en tu perfil profesional o
              incluir en tu currículum vitae.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              ¿Cuáles son los requisitos para inscribirse en un curso?
            </AccordionTrigger>
            <AccordionContent>
              No hay requisitos específicos para inscribirse en la mayoría de
              nuestros cursos. Sin embargo, algunos cursos avanzados pueden
              requerir conocimientos previos en ciertas áreas. Consulta la
              descripción del curso para obtener más detalles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
</div>
    </>
  );
}
