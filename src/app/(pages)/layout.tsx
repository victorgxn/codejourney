import type {Metadata} from "next";
import {Outfit} from "next/font/google";

const font = Outfit({ subsets: ["latin"] });
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
        <div className={`${font.className} bg-gray-50 min-h-screen`}>{children}</div>
    )
}