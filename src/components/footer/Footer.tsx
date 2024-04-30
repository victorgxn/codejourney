import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-4 mt-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Image
              src="/images/logo/codejourneyLogo.png"
              className="h-12 w-auto"
              width={100}
              height={50}
              alt="Codejourney logo"
            />
            <span
              className="self-center text-xl font-medium sm:text-2xl whitespace-nowrap text-white
                    bg-clip-text"
            >
              Codejourney
            </span>
          </div>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <Link href="/" className="text-white hover:text-blue-400">
                Inicio
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link
                href="/programas-estudio"
                className="text-white hover:text-blue-400"
              >
                Programas de estudio
              </Link>
            </li>
            <li>
              <Link
                href="/codejourney-empresas"
                className="text-white hover:text-blue-400"
              >
                CodeJourney para empresas
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link
                href="/preguntas-y-respuestas"
                className="text-white hover:text-blue-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-blue-200 hover:text-blue-400"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 sm:justify-center">
            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-slate-200 flex justify-center items-center hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-white">
              ©CodeJourney 2024, Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
