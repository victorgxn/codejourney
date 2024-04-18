import {SideBarNav} from "@/app/(home)/_components/SideBarNav";
import type {Metadata} from "next";

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
                <div>
                    <SideBarNav/>
                </div>
                {children}
            </div>
    )
}