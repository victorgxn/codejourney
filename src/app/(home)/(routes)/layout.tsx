import type {Metadata} from "next";
import {MainEstructure} from "@/app/(home)/_components";

export const metadata: Metadata = {
    title: "Dashboard | Codejourney",
    description: "Pagina de cursos para nuestros miembros.",
};

export default function HomeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col h-full'>
            <div className='flex-1'>
                <MainEstructure/>
                <div className='lg:pl-72 pt-[80px]'>
                    {children}
                </div>

            </div>
        </div>
    )
}