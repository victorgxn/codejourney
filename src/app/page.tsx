import Image from "next/image";
import {Carousel, FirstSection, Footer, TopMenu} from "@/components";
export default function Home() {
  return (
      <>
        <TopMenu/>
        <FirstSection/>
          <Carousel/>
          <div className='text-7xl items-center'>Aqui va un grid con los cursos mas populares, jaime mariquita</div>
          <Footer/>
      </>
  );
}
