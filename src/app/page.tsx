import {Carousel, FirstSection, Footer, TopMenu} from "@/components";
export default function Home() {
  return (
      <>
        <FirstSection/>
          <Carousel/>
          <div className='text-7xl items-center'>Aqui va un grid con los cursos mas populares</div>
      </>
  );
}
