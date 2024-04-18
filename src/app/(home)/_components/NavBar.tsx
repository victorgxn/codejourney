import Link from "next/link";
import Image from "next/image";
import { UserButton} from "@clerk/nextjs";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {AlignJustify} from "lucide-react";

export const NavBar = () => {
    return (
        <div>
            <nav
                className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <AlignJustify/>
                        </SheetTrigger>
                        <SheetContent className="w-[200px] sm:w-[240px]">
                            <SheetHeader>
                                <SheetDescription>
                                    <div
                                        className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                        <Link
                                            href="/"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            href="/"
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <Link href="/" className="flex ms-2 md:me-24 items-center">
                                <Image
                                    src="/images/logo/codejourneyLogo.png"
                                    className="h-12 w-auto"
                                    width={100}
                                    height={50}
                                    alt="Codejourney logo"
                                />
                                <span
                                    className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Codejourney</span>
                            </Link>

                        </div>
                        <div>
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );

}
