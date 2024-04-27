import React from 'react';
//import { ModeToggle } from '@/components/darkmodeButton'; 

import { Carousel, FirstSection, Footer, TopMenu } from '@/components';
import Integrantes from '@/components/integrantes';
import { Cursos } from '@/components/cursos';
{/*import { ThemeProvider } from "@/components/theme-provider";*/}

export default function Home() {
  return (
    <>
      <TopMenu />
      {/* <ModeToggle />  */}
      {/*<ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
  >*/}
        <FirstSection />
        <Carousel />
        <div className="flex flex-wrap flex-col justify-center items-center">
          <h1
            className="text-4xl pb-10 font-bold mt-10 text-gradient
              bg-gradient-to-r
              from-blue-500
              to-green-300
              bg-clip-text
              text-transparent"
          >
            Cursos que ofrecemos
          </h1>
          <Cursos />
        </div>
        <Integrantes />
      {/* </ThemeProvider>*/}
      <Footer />
    </>
  );
}
