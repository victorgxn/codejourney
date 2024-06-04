export default function PlanPremium() {
  return (
    <div className="">
      <div>
        <h2 className="text-5xl font-bold tracki text-center mt-12 sm:text-5x1 text-blue-600">
            Planes de precios de CodeJourney
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Elige el plan que mejor se adapte a tus necesidades
        </p>
      </div>
      <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Básico</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                9,99€
              </span>
              <span className="ml-1 text-xl font-semibold">/mes</span>
            </p>
            <p className="mt-6 ">Solo quieres descubrir</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-blue-800"
                    aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Acceso ilimitado a toda la plataforma</span>
              </li>
              <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-blue-800"
                    aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 "> Acceso al chat con ia con GPT-3.5</span>
              </li>
              <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-blue-800"
                    aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Cursos</span>
              </li>
              <li className="flex">
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
                    className="flex-shrink-0 w-6 h-6 text-blue-800"
                    aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Clases en vivo</span>
              </li>
            </ul>
          </div>
          <a
              className="bg-gradient-to-r
            from-blue-900
            to-blue-500 text-white hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border-w-0 border-transparent rounded-md text-center font-medium"
              href="#"
          >
            Comprar
          </a>
        </div>
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Pro</h3>
            <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-r
            from-blue-500
            to-green-300 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
              Más popular
            </p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                99,99€
              </span>
              <span className="ml-1 text-xl font-semibold">/año</span>
            </p>
            <p className="mt-6 ">
              Adquiere 1 año entero de suscripción al precio de 10 meses
            </p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
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
                  className="flex-shrink-0 w-6 h-6 text-blue-800"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Acceso ilimitado a toda la plataforma</span>
              </li>
              <li className="flex">
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
                  className="flex-shrink-0 w-6 h-6 text-blue-800"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">
                  Acceso al chat con ia con GPT-4 (más preciso)
                </span>
              </li>
              <li className="flex">
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
                  className="flex-shrink-0 w-6 h-6 text-blue-800"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Cursos</span>
              </li>
              <li className="flex">
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
                  className="flex-shrink-0 w-6 h-6 text-blue-800"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Clases en vivo</span>
              </li>
              <li className="flex">
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
                  className="flex-shrink-0 w-6 h-6 text-blue-800"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Acceso anticipado a cursos en construcción.</span>
              </li>
            </ul>
          </div>
          <a
            className="bg-gradient-to-r
            from-blue-500
            to-green-300 text-white  mt-8 block w-full py-3 px-6 border-w-0 border-transparent rounded-md text-center font-medium"
            href="#"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
