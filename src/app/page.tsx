import { Carousel, FirstSection, Footer, TopMenu } from "@/components";
import Integrantes from "@/components/integrantes";

export default function Home() {
  return (
    <>
      <TopMenu />
      <FirstSection />
      <Carousel />
      <div className="text-7xl items-center">
        Aqui va un grid con los cursos mas populares
      </div>
      <Integrantes/>
      <Footer />
    </>
  );
}
