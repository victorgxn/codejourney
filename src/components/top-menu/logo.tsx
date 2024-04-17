import Image from "next/image";

export const LeftLogo = () => {
    return (
        <div className="flex justify-center">
            <div className="hidden md:block">
                <Image
                    src="/images/logo/codejourneyLogo.png"
                    width={200}
                    height={200}
                    alt="logo"
                />
            </div>
            <div className="block md:hidden">
                <Image
                    src="/images/logo/codejourneyLogo.png"
                    width={120} // Cambia el tamaño de la imagen para móviles
                    height={120} // Cambia el tamaño de la imagen para móviles
                    alt="logo"
                />
            </div>
        </div>
    );
}
