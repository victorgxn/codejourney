import { Footer, TopMenu } from "@/components";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ | Codejourney",
  description:
    "Codejourney es tu plataforma para el aprendizaje en línea de desarrollo de software. Ofrecemos una amplia gama de cursos especializados en desarrollo de backend y frontend, diseñados para impulsar tu carrera como desarrollador. ",
};

export default function PaginaEmpresas() {
  return (
    <>
      <TopMenu />
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <div
            className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
          >
            <TypewriterEffect
              words={[
                { text: "Preguntas " },
                { text: "y " },
                { text: "respuestas " },
              ]}
            />
          </div>

          <div className="bg-gray-50">
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt=""></img>
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              
                <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Solutions</a>
              
                <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Pricing</a>
              
                <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Docs</a>
              
                <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Company</a>
              
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a href="#" className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
            <a href="#" className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">
              <span className="md:hidden">Sign up</span>
              <span className="hidden md:inline lg:hidden">Create account</span>
              <span className="hidden lg:inline">Create an account</span>
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 lg:hidden">
          
            <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Solutions</a>
          
            <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Pricing</a>
          
            <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Docs</a>
          
            <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Zettelkasten</a>
          
        </div>
      </nav>
    </header>

    <main>
    
      <div>
        <div className="relative bg-indigo-600">
     
          <div aria-hidden="true" className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block"></div>

          <div className="relative mx-auto max-w-2xl px-6 pt-16 text-center sm:pt-32 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="block lg:inline">Simple pricing,</span>
              <span className="block lg:inline">no commitment.</span>
            </h1>
            <p className="mt-4 text-xl text-indigo-100">Everything you need, nothing you don't. Pick a plan that best suits your business.</p>
          </div>

          <h2 className="sr-only">Plans</h2>

        
          <div className="relative mt-12 flex justify-center sm:mt-16">
            <div className="flex rounded-lg bg-indigo-700 p-0.5">
              <button type="button" className="relative whitespace-nowrap rounded-md border-indigo-700 bg-white py-2 px-6 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">Monthly billing</button>
              <button type="button" className="relative ml-0.5 whitespace-nowrap rounded-md border border-transparent py-2 px-6 text-sm font-medium text-indigo-200 hover:bg-indigo-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">Yearly billing</button>
            </div>
          </div>

          <div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
        
            <div aria-hidden="true" className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg bg-indigo-700 lg:block"></div>

            <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
              
                <div className="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-white text-base font-semibold">Starter</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-white text-4xl font-bold tracking-tight">$5</p>
                        <div className="ml-4">
                          <p className="text-white text-sm">USD / mo</p>
                          <p className="text-indigo-200 text-sm">Billed yearly ($56)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Starter</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul role="list" className="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Basic invoicing</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Easy to use accounting</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Mutli-accounts</span>
                      </li>
                    
                  </ul>
                </div>
              
                <div className="bg-white ring-2 ring-indigo-700 shadow-md pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-indigo-600 text-base font-semibold">Scale</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-indigo-600 text-4xl font-bold tracking-tight">$19</p>
                        <div className="ml-4">
                          <p className="text-gray-700 text-sm">USD / mo</p>
                          <p className="text-gray-500 text-sm">Billed yearly ($220)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-indigo-600 text-white hover:bg-indigo-700 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Scale</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul role="list" className="border-gray-200 divide-gray-200 mt-7 border-t divide-y lg:border-t-0">
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">Advanced invoicing</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">Easy to use accounting</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">Mutli-accounts</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">Tax planning toolkit</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">VAT &amp; VATMOSS filing</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-500 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-gray-600 ml-4 text-sm font-medium">Free bank transfers</span>
                      </li>
                    
                  </ul>
                </div>
              
                <div className="bg-indigo-700 lg:bg-transparent pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12">
                  <div>
                    <h3 className="text-white text-base font-semibold">Growth</h3>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                      <div className="mt-3 flex items-center">
                        <p className="text-white text-4xl font-bold tracking-tight">$12</p>
                        <div className="ml-4">
                          <p className="text-white text-sm">USD / mo</p>
                          <p className="text-indigo-200 text-sm">Billed yearly ($140)</p>
                        </div>
                      </div>
                      <a href="#" className="bg-white text-indigo-600 hover:bg-indigo-50 mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full">Buy Growth</a>
                    </div>
                  </div>
                  <h4 className="sr-only">Features</h4>
                  <ul role="list" className="border-indigo-500 divide-indigo-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Basic invoicing</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Easy to use accounting</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Mutli-accounts</span>
                      </li>
                    
                      <li className="flex items-center py-3">
                        <svg className="text-indigo-200 w-5 h-5 flex-shrink-0" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                        <span className="text-white ml-4 text-sm font-medium">Tax planning toolkit</span>
                      </li>
                    
                  </ul>
                </div>
              
            </div>
          </div>
        </div>

   
        <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
          <h2 id="mobile-comparison-heading" className="sr-only">Feature comparison</h2>

          <div className="mx-auto mt-16 max-w-2xl space-y-16 px-6">
            
              <div className="border-t border-gray-200">
                <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-gray-900 text-sm font-bold">Starter</h3>
                  <p className="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="relative mt-6">
          
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-gray-900 text-sm font-medium">3 accounts</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-gray-900 text-sm font-medium">3 invoices</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="relative mt-6">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>
            
              <div className="border-t border-gray-200">
                <div className="border-indigo-600 -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-indigo-600 text-sm font-bold">Scale</h3>
                  <p className="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="relative mt-6">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-indigo-600 text-sm font-medium">Unlimited accounts</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-indigo-600 text-sm font-medium">Unlimited invoices</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="relative mt-6">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>
            
              <div className="border-t border-gray-200">
                <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
                  <h3 className="text-gray-900 text-sm font-bold">Growth</h3>
                  <p className="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
                </div>
                <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                <div className="relative mt-6">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Tax Savings</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Easy to use accounting</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Multi-accounts</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-gray-900 text-sm font-medium">7 accounts</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Invoicing</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              <span className="text-gray-900 text-sm font-medium">10 invoices</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Exclusive offers</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">6 months free advisor</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </dd>
                        </div>
                      
                        <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="pr-4 text-sm font-medium text-gray-600">Mobile and web access</dt>
                          <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>

                <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                <div className="relative mt-6">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
                  </div>

                  <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                    <dl className="divide-y divide-gray-200">
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">24/7 customer support</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Instant notifications</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Budgeting tools</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Digital receipts</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Pots to separate money</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Free bank transfers</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </dd>
                        </div>
                      
                        <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                          <dt className="text-sm font-medium text-gray-600 sm:pr-4">Business debit card</dt>
                          <dd className="text-center sm:px-4">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </dd>
                        </div>
                      
                    </dl>
                  </div>

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                    <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
                  </div>
                </div>
              </div>
            
          </div>
        </section>

        <section aria-labelledby="comparison-heading" className="hidden lg:block">
          <h2 id="comparison-heading" className="sr-only">Feature comparison</h2>

          <div className="mx-auto mt-24 max-w-7xl px-8">
            <div className="flex w-full items-stretch border-t border-gray-200">
              <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
                <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
              </div>
              
                <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                  <div className="border-transparent py-6 border-t-2">
                    <p className="text-gray-900 text-sm font-bold">Starter</p>
                    <p className="mt-2 text-sm text-gray-500">All your essential business finances, taken care of.</p>
                  </div>
                </div>
              
                <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
                  <div className="border-indigo-600 py-6 border-t-2">
                    <p className="text-indigo-600 text-sm font-bold">Scale</p>
                    <p className="mt-2 text-sm text-gray-500">The best financial services for your thriving business.</p>
                  </div>
                </div>
              
                <div aria-hidden="true" className=" -mt-px pl-4 w-1/4">
                  <div className="border-transparent py-6 border-t-2">
                    <p className="text-gray-900 text-sm font-bold">Growth</p>
                    <p className="mt-2 text-sm text-gray-500">Convenient features to take your business to the next level.</p>
                  </div>
                </div>
              
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg bg-white shadow"></div>
                </div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg bg-white shadow-md"></div>
                </div>
                <div className="w-1/4 pl-4">
                  <div className="h-full w-full rounded-lg bg-white shadow"></div>
                </div>
              </div>

              <table className="relative w-full">
                <caption className="sr-only">
                  Business feature comparison
                </caption>
                <thead>
                  <tr className="text-left">
                    <th scope="col">
                      <span className="sr-only">Feature</span>
                    </th>
                    
                      <th scope="col">
                        <span className="sr-only">Starter plan</span>
                      </th>
                    
                      <th scope="col">
                        <span className="sr-only">Scale plan</span>
                      </th>
                    
                      <th scope="col">
                        <span className="sr-only">Growth plan</span>
                      </th>
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                    <tr key="Tax Savings">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Tax Savings</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Easy to use accounting">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Easy to use accounting</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Multi-accounts">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Multi-accounts</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-gray-900 text-sm font-medium">3 accounts</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-indigo-600 text-sm font-medium">Unlimited accounts</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-gray-900 text-sm font-medium">7 accounts</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Invoicing">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Invoicing</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-gray-900 text-sm font-medium">3 invoices</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-indigo-600 text-sm font-medium">Unlimited invoices</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <span className="text-gray-900 text-sm font-medium">10 invoices</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Exclusive offers">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Exclusive offers</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="6 months free advisor">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">6 months free advisor</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Mobile and web access">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Mobile and web access</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                              <span className="sr-only">Yes</span>
                            </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              
                                <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                              <span className="sr-only">No</span>
                            </span>
                        </td>
                      
                    </tr>
                  
                </tbody>
              </table>

              <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                </div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100"></div>
                </div>
                <div className="w-1/4 pl-4">
                  <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                </div>
              </div>
            </div>

            <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

            <div className="relative mt-6">
              <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg bg-white shadow"></div>
                </div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg bg-white shadow-md"></div>
                </div>
                <div className="w-1/4 pl-4">
                  <div className="h-full w-full rounded-lg bg-white shadow"></div>
                </div>
              </div>

              <table className="relative w-full">
                <caption className="sr-only">
                  Perk comparison
                </caption>
                <thead>
                  <tr className="text-left">
                    <th scope="col">
                      <span className="sr-only">Perk</span>
                    </th>
                    
                      <th scope="col">
                        <span className="sr-only">Starter plan</span>
                      </th>
                    
                      <th scope="col">
                        <span className="sr-only">Scale plan</span>
                      </th>
                    
                      <th scope="col">
                        <span className="sr-only">Growth plan</span>
                      </th>
                    
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                    <tr key="24/7 customer support">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">24/7 customer support</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Instant notifications">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Instant notifications</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Budgeting tools">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Budgeting tools</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Digital receipts">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Digital receipts</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Pots to separate money">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Pots to separate money</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Free bank transfers">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Free bank transfers</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                    <tr key="Business debit card">
                      <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">Business debit card</th>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </span>
                        </td>
                      
                        <td className="px-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-indigo-600" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
</svg>
                            <span className="sr-only">Yes</span>
                          </span>
                        </td>
                      
                        <td className="pl-4 relative w-1/4 py-0 text-center">
                          <span className="relative h-full w-full py-3">
                            
                              <svg className="mx-auto h-5 w-5 text-gray-400" x-description="Heroicon name: mini/x-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
</svg>
                            <span className="sr-only">No</span>
                          </span>
                        </td>
                      
                    </tr>
                  
                </tbody>
              </table>

              <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                <div className="w-1/4 pr-4"></div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                </div>
                <div className="w-1/4 px-4">
                  <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100"></div>
                </div>
                <div className="w-1/4 pl-4">
                  <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:py-32 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"></img>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"></img>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"></img>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"></img>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"></img>
          </div>
        </div>
      </div>

      <section aria-labelledby="faq-heading" className="bg-gray-900">
        <div className="mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
              
                <div>
                  <dt className="font-semibold text-white">What's the best thing about Switzerland?</dt>
                  <dd className="mt-3 text-gray-400">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                </div>
              
                <div>
                  <dt className="font-semibold text-white">How do you make holy water?</dt>
                  <dd className="mt-3 text-gray-400">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.</dd>
                </div>
              
                <div>
                  <dt className="font-semibold text-white">What do you call someone with no body and no nose?</dt>
                  <dd className="mt-3 text-gray-400">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.</dd>
                </div>
              
                <div>
                  <dt className="font-semibold text-white">Why do you never see elephants hiding in trees?</dt>
                  <dd className="mt-3 text-gray-400">Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                </div>
              
                <div>
                  <dt className="font-semibold text-white">Why can't you hear a pterodactyl go to the bathroom?</dt>
                  <dd className="mt-3 text-gray-400">Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error.</dd>
                </div>
              
                <div>
                  <dt className="font-semibold text-white">Why did the invisible man turn down the job offer?</dt>
                  <dd className="mt-3 text-gray-400">He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius.</dd>
                </div>
              
            </dl>
          </div>
        </div>
      </section>

      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img className="h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Company name"></img>
              <p className="text-base text-gray-500">Making the world a better place through constructing elegant hierarchies.</p>
              <div className="flex space-x-6">
                
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
</svg>
                  </a>
                
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
</svg>
                  </a>
                
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
                  </a>
                
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
</svg>
                  </a>
                
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Dribbble</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
</svg>
                  </a>
                
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Marketing</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Analytics</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Commerce</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Insights</a>
                      </li>
                    
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</a>
                      </li>
                    
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Partners</a>
                      </li>
                    
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Claim</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a>
                      </li>
                    
                      <li>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a>
                      </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">© 2021 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
