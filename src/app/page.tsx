import {Carousel, FirstSection, Footer, TopMenu, SecondSection} from '@/components';
import Integrantes from '@/components/integrantes';
import {Cursos} from '@/components/cursos';

export default function Home() {
    return (
        <>
            <TopMenu/>
            <FirstSection/>
            <Carousel/>
            <SecondSection/>
            <div className="flex flex-wrap flex-col justify-center items-center" id="cursos">
                <h1
                    className="text-4xl sm:text-6xl pb-10 font-bold mt-10 text-gradient
              bg-gradient-to-r
              from-blue-500
              to-green-300
              bg-clip-text
              text-transparent"
                >
                    Cursos que ofrecemos
                </h1>
                <Cursos/>
            </div>
            <Integrantes/>
            <Footer/>
        </>
    );
}
