'use client'
import {EnrollCourse, PublishCourse} from "@/app/_microservices";
import {useUser} from "@clerk/nextjs";

export default function EnrollmentSection({courseDetails}: any) {

    const {user} = useUser();

    const EnrollCourseFunction = async () => {
        try {
            const response = await EnrollCourse(courseDetails.id, user.primaryEmailAddress.emailAddress)
                .then(async response => {
                    console.log("EnrollCourseResponse -->", response);
                    if (response) {
                        await PublishCourse(response.createUserEnrollCourse.id)
                            .then(result => {
                                console.log(result);
                            })
                    }
                });

        } catch (error) {
            console.error("Error enrolling in course:", error);
        }
    }

    return (
        <div>
            {courseDetails.free ? (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <p className='text-gray-500'>Aprende, y construye este mini-curso</p>
                    <p className='text-gray-500'>¡Pero espera, eso no es todo! Te invitamos a explorar nuestras opciones
                        premium donde obtendrás una variedad de cursos diseñados para llevar tus habilidades de
                        desarrollo al siguiente nivel.</p>
                    <button
                        className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'
                        onClick={() => EnrollCourseFunction()}> Inscribirse GRATIS
                    </button>
                </div>
            ) : (
                <div className='mt-5 border rounded-lg p-2 text-center'>
                    <p className='text-gray-500'>Adquiere el curso con un único pago de forma vitalicia, con acceso a la
                        comunidad y posibles actualizaciones futuras.</p>
                    <button
                        className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Comprar
                        ahora por 3,99€
                    </button>
                </div>
            )}
            <div className='mt-5 border rounded-lg p-2 text-center'>
                <h2>¡Únete a nuestra membresía mensual!</h2>
                <p className='text-gray-500'>Accede a todos nuestros cursos premium con nuestra membresía mensual.
                    Desarrolla tus habilidades de manera continua y sin límites.</p>
                <button
                    className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'> Explora
                    la membresía
                </button>
            </div>
        </div>
    );
}
