import { Footer, TopMenu } from "@/components";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                  { text: "Preguntas " },
                  { text: "y " },
                  { text: "respuestas " },
                ]}
              />
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Qué tipo de cursos ofrecen?
                </AccordionTrigger>
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
                  Sí, nuestros cursos están diseñados para adaptarse a
                  diferentes niveles de experiencia, desde principiantes hasta
                  profesionales experimentados. Ofrecemos contenido tanto
                  introductorio como avanzado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Cuál es la duración de los cursos?
                </AccordionTrigger>
                <AccordionContent>
                  La duración de nuestros cursos varía según el tema y la
                  profundidad del contenido. Algunos cursos pueden durar unas
                  pocas semanas, mientras que otros pueden extenderse durante
                  varios meses, dependiendo de los objetivos de aprendizaje y la
                  estructura del curso.
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
                  El precio de nuestros cursos varía según el curso específico,
                  la duración y otros factores. Ofrecemos opciones de pago
                  flexibles, incluyendo planes de suscripción mensual y
                  descuentos por pago único. Visita nuestra página de precios
                  para obtener más información.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  ¿Cómo puedo inscribirme en un curso?
                </AccordionTrigger>
                <AccordionContent>
                  Para inscribirte en un curso, simplemente visita nuestra
                  página de cursos, elige el curso que te interesa y sigue los
                  pasos de inscripción. Si tienes alguna pregunta o necesitas
                  ayuda, nuestro equipo de soporte está disponible para
                  asistirte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  ¿Ofrecen certificados al completar un curso?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, al completar con éxito un curso, recibirás un certificado
                  de finalización que podrás compartir en tu perfil profesional
                  o incluir en tu currículum vitae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  ¿Cuáles son los requisitos para inscribirse en un curso?
                </AccordionTrigger>
                <AccordionContent>
                  No hay requisitos específicos para inscribirse en la mayoría
                  de nuestros cursos. Sin embargo, algunos cursos avanzados
                  pueden requerir conocimientos previos en ciertas áreas.
                  Consulta la descripción del curso para obtener más detalles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  ¿Los cursos incluyen proyectos prácticos?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, muchos de nuestros cursos incluyen proyectos prácticos y
                  tareas que te permiten aplicar lo que has aprendido en un
                  entorno real. Estos proyectos son una parte integral de
                  nuestro enfoque de aprendizaje práctico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>
                  ¿Qué tipo de apoyo ofrecen durante el curso?
                </AccordionTrigger>
                <AccordionContent>
                  Ofrecemos soporte técnico y académico durante todo el curso.
                  Nuestros instructores y asistentes están disponibles para
                  responder preguntas, ofrecer retroalimentación sobre proyectos
                  y ayudarte a superar cualquier obstáculo que encuentres.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>
                  ¿Puedo acceder al contenido del curso después de que termine?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, una vez que completes un curso, tendrás acceso continuo al
                  contenido durante un período de tiempo especificado. Esto te
                  permite revisar el material y repasar los conceptos en
                  cualquier momento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>
                  ¿Qué tecnologías y herramientas se utilizan en los cursos?
                </AccordionTrigger>
                <AccordionContent>
                  Utilizamos una variedad de tecnologías y herramientas modernas
                  en nuestros cursos para asegurarnos de que estés preparado
                  para el mundo laboral. Esto puede incluir lenguajes de
                  programación como JavaScript, Python, Java, frameworks como
                  React y Angular, y herramientas de desarrollo como Git y
                  Docker.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-13">
                <AccordionTrigger>
                  ¿Hay algún descuento disponible para estudiantes o grupos?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, ofrecemos descuentos especiales para estudiantes y grupos.
                  Ponte en contacto con nuestro equipo de ventas para obtener
                  más información sobre las opciones de descuento disponibles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-14">
                <AccordionTrigger>
                  ¿Cómo puedo saber si un curso es adecuado para mí?
                </AccordionTrigger>
                <AccordionContent>
                  Recomendamos revisar la descripción del curso, los objetivos
                  de aprendizaje y los requisitos previos para determinar si un
                  curso se adapta a tus necesidades y nivel de habilidad.
                  También puedes consultar las reseñas y testimonios de otros
                  estudiantes para obtener una idea de la experiencia del curso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
