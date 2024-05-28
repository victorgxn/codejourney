//TODO : Repasar el tema lazyload en los videos para mejorar el rendimiento
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
export const FirstSection = () => {
  const { userId } = auth();
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
      <div className="container mx-auto text-center">
        <div
            className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-10
    text-gradient
    bg-gradient-to-r
    from-blue-500
    to-green-300
    bg-clip-text
    text-transparent
    "
        >
          ¡Desbloquea Tu Potencial Hoy Mismo! Tu Centro para Cursos de
          Programación de Primera Categoría.
        </div>

        <p
            className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-black
            to-gray-400
            bg-clip-text
            text-transparent
            font-bold
            "
        >
          Sin importar tu edad o experiencia, nuestra plataforma te prepara para
          el éxito en la programación.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Link href={userId ? "/dashboard" : "/sign-up"}>
            <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">Empieza ahora</button>
          </Link>
          <Link href={userId ? "/dashboard" : "/sign-up"}>
            <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Saber más</button>
          </Link>
        </div>

        <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/videos/hero1.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
};
