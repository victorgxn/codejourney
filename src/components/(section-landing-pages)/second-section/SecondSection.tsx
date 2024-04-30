import Image from "next/image";

export const SecondSection = () => {

    return (
        <div className="" id="comunidad">
            <div className=" md:flex-row flex-col items-center flex  justify-center pb-10 ">
                <div className="p-5 justify-center md:w-1/3">
                    <div className="text-4xl sm:text-6xl pb-10 font-bold mt-10 text-gradient
              bg-gradient-to-r
              from-blue-500
              to-green-300
              bg-clip-text
              text-transparent text-center">
                        ¡Explora nuestra comunidad!
                    </div>
                    <div className="text-2xl mb-8">
                        Conversa y debate con otros estudiantes sobre los cursos. Únete a nuestra comunidad en Discord. O accede a nuestra comunidad de cursos con Acceso Anticipado desde tu portal de estudiante con tu suscripción Codejourney PRO.
                    </div>
                </div>
                <Image src="/images/vaso.jpeg" alt='vaso-codejourney' width={500} height={300} priority={true}/>
            </div>
        </div>
    );

};
