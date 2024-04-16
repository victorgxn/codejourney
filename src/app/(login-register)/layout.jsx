import Image from 'next/image';

export default function LoginLayout({ children }) {
    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-900 flex justify-center items-center h-screen">
            <div className="w-1/2 h-full hidden lg:flex">
                <Image
                    src="/publiCartel.png"
                    width={500}
                    height={500}
                    className='object-cover w-full h-full'
                    alt="Picture of the author"
                />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}
