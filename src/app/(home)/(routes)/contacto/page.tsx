import { ContactForm } from '../../_components/(Contact)/ContactForm';

export default function Page() {
  return (
    <section className="bg-gray-50 w-full flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <div className="max-w-lg mx-auto">
                <h2 className="mb-8 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
                  Contáctanos
                </h2>
                <p className="mb-5 text-lg text-center text-gray-600 dark:text-gray-400">
                  ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para
                  ayudarte!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
