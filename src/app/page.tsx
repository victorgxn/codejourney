import Image from "next/image";
import {Carousel, FirstSection, TopMenu} from "@/components";
export default function Home() {
  return (
      <>
        <TopMenu/>
        <FirstSection/>
          <Carousel/>
      </>

  );
}
