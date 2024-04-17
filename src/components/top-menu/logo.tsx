import Image from "next/image";

export const LeftLogo = () => {
    return (
        <div>
            <Image
                src="/images/logo/codejourneyLogo.png"
                width={200}
                height={200}
                alt="logo"
            />
        </div>
    );
}