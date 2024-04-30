import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: 'Pagina cursos | Codejourney',
    description: 'Pagina de visualizado de cursos para nuestros miembros.',
};

export default function CourseLayout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <Toaster />
        </div>);
}
