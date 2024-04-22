import Image from 'next/image';
import Link from 'next/link';

export const LeftLogo = () => {
  return (
    <div className="flex justify-center">
      <div className="hidden md:block">
        <Link href="/">
          <Image
            src="/images/logo/codejourneyLogo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </Link>
      </div>
      <div className="block md:hidden">
        <Link href="/">
          <Image
            src="/images/logo/codejourneyLogo.png"
            width={120} // Cambia el tamaño de la imagen para móviles
            height={120} // Cambia el tamaño de la imagen para móviles
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
};
