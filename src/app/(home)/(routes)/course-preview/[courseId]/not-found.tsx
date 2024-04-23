import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line react/display-name,import/no-anonymous-default-export
export default function () {

    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

            <div className="text-center px-5 mx-5">
                <h2 className='antialiased text-9xl'>404</h2>
                <p className="font-semibold text-xl">Whoops! Lo sentimos mucho no disponemos de este curso ahora mismo.</p>
                <p className="font-light">
                    <span>Puedes regresar a la </span>
                    <Link
                        href='/dashboard'
                        className="font-normal hover:underline transition-all"
                    >

                        lista de cursos
                    </Link>
                </p>
            </div>



            <div className="px-5 mx-5">
                <Image
                    src="/images/404/starman_750x750.png"
                    alt="Starman"
                    className="p-5 sm:p-0"
                    width={ 550 }
                    height={ 550 }
                />
            </div>


        </div>
    );
}