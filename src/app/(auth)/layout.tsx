import Image from 'next/image';

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 flex justify-center items-center h-screen">
            <div className="w-1/2 h-full hidden lg:flex">
                <Image
                    src="/publiCartel.jpeg"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    alt="Picture of the author"
                />
            </div>
            <div className="w-1/2 flex items-center justify-center">{children}</div>
        </div>
    );
}
