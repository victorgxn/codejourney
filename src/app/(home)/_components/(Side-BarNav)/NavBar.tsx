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
import {AlignJustify, BellIcon} from "lucide-react";
import {SearchBar} from "@/app/(home)/_components/(Side-BarNav)/SearchBar";

export const NavBar = () => {
    return (
        <div> {/* //TODO: Arreglar el boton del responsive y añadirle los <Link/> */}
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
                                            href="/public"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            href="/public"
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
                                    className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent">Codejourney</span>
                            </Link>
                            <SearchBar/>

                        </div>
                        <div className='flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot text-gray-500"><path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><circle cx="18" cy="8" r="3"></circle></svg>
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );

}
