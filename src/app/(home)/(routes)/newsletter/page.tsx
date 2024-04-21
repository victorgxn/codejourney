import { EmailForm } from '../../_components/(Newsletter)/EmailForm';

export default function Page() {
  return (
    <section className="bg-gray-50 w-full flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Suscribete para recibir las ultimas noticias
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Estate a la última de todas las novedades y promociones de
              Codejourney, ademas de recibir notificaciones de los nuevos cursos
              que se vayan añadiendo.
            </p>
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
}
