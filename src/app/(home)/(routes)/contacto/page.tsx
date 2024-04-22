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
                <form action="#" className="space-y-8">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Indica el asunto de tu mensaje..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Déjanos aquí tu mensaje
                    </label>
                    <textarea
                      id="message"
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Puedes dejar aquí tu mensaje..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
