'use client';
import { EnrollCourse, PublishCourse } from '@/app/_microservices';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import fetch from 'node-fetch';
import Link from 'next/link';

export default function EnrollmentSection({
  courseDetails,
  userEnrollCourses,
}: any) {
  //console.log(userEnrollCourses[0].courseId);
  //console.log(courseDetails.id);

  const router = useRouter();

  {
    /*En una function porque si no me dejaba usarlo xD*/
  }
  const handleContinue = () => {
    router.push('/view-course/' + courseDetails.id);
  };

  const { user } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const EnrollCourseFunction = async () => {
    try {
      setLoading(true);
      const response = await EnrollCourse(
        courseDetails?.id,
        user?.primaryEmailAddress?.emailAddress
      ).then(async response => {
        //console.log('EnrollCourseResponse -->', response);
        if (response) {
          // @ts-ignore
          const { createUserEnrollCourse } = response;
          if (createUserEnrollCourse && createUserEnrollCourse.id) {
            await PublishCourse(createUserEnrollCourse.id).then(result => {
              //console.log(result);
              if (result) {
                // @ts-ignore
                handleContinue();
              }
            });
          }
        }
      });
    } catch (error) {
      console.error('Error enrolling in course:', error);
    } finally {
      // setLoading(false);
    }
  };

  const EnrollCourseFunctionPay = async () => {
    setLoading(true);
    try {
      const response = await EnrollCourse(
        courseDetails?.id,
        user?.primaryEmailAddress?.emailAddress
      ).then(async response => {
        //console.log('EnrollCourseResponse -->', response);
        if (response) {
          // @ts-ignore
          const { createUserEnrollCourse } = response;
          if (createUserEnrollCourse && createUserEnrollCourse.id) {
            await PublishCourse(createUserEnrollCourse.id).then(result => {
              //console.log(result)
            });
          }
        }
      });
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };
  {
    /*Primer ternario comprueba si el usuario está inscrito en el curso o no, en el caso que no este inscrito si el curso es de pago o no y el div de la membresia siempre sale*/
  }

  const handlePay = async (courseList: any) => {
    await EnrollCourseFunctionPay();
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(courseList),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const session = await response.json();
    const data: any = {
      username: user?.username,
      email: user?.primaryEmailAddress?.emailAddress,
      courseList: courseList,
    };

    await fetch('../../../../../api/sendReceipt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    window.location = session.url;
  };

  return (
    <div>
      {userEnrollCourses.some(
        (course: any) => course.courseId === courseDetails.id
      ) ? (
        <>
          <div className="mt-5 border rounded-lg p-2 text-center">
            <p className="text-gray-500">
              Sigue aprendiendo y construyendo de forma interactiva con nuestro
              curso.
            </p>
            <button
              className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700"
              onClick={handleContinue}
            >
              {' '}
              Continuar viendo
            </button>
          </div>
          <div className="mt-5 border rounded-lg p-2 text-center">
            <h2>¡Únete a nuestra membresía mensual!</h2>
            <p className="text-gray-500">
              Accede a todos nuestros cursos premium con nuestra membresía
              mensual. Desarrolla tus habilidades de manera continua y sin
              límites.
            </p>
            <button className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700">
              <Link href="/plan-premium"> Explora la membresía</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          {courseDetails.free ? (
            <div className="mt-5 border rounded-lg p-2 text-center">
              <p className="text-gray-500">
                Aprende, y construye este mini-curso
              </p>
              <p className="text-gray-500">
                ¡Pero espera, eso no es todo! Te invitamos a explorar nuestras
                opciones premium donde obtendrás una variedad de cursos
                diseñados para llevar tus habilidades de desarrollo al siguiente
                nivel.
              </p>
              <Button
                disabled={loading}
                className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700 disabled:bg-gray-200
                disabled:pointer-events-none
                disabled:border-none"
                onClick={() => EnrollCourseFunction()}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Cargando...' : 'Inscribirse GRATIS'}
              </Button>
            </div>
          ) : (
            <div className="mt-5 border rounded-lg p-2 text-center">
              <p className="text-gray-500">
                Adquiere el curso con un único pago de forma vitalicia, con
                acceso a la comunidad y posibles actualizaciones futuras.
              </p>
              <Button
                disabled={loading}
                className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700 disabled:bg-gray-200 disabled:cursor-not-allowed"
                onClick={() => handlePay(courseDetails)}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Cargando...' : 'Comprar ahora por 3,99€'}
              </Button>
            </div>
          )}
          <div className="mt-5 border rounded-lg p-2 text-center">
            <h2>¡Únete a nuestra membresía mensual!</h2>
            <p className="text-gray-500">
              Accede a todos nuestros cursos premium con nuestra membresía
              mensual. Desarrolla tus habilidades de manera continua y sin
              límites.
            </p>
            <button className="p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700">
              <Link href="/plan-premium"> Explora la membresía</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
