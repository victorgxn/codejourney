import type {Metadata} from "next";
import {SideBarNav} from "@/app/(home)/_components";

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
            <div>
                <div className='h-full w-64 inset-y-0 z-50'>
                    <SideBarNav/>
                </div>
                {children}
            </div>
    )
}