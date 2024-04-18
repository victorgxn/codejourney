import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ManageAccount } from './manage-account-button';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { SignInButton, SignUpButton, SignOutButton } from '@clerk/nextjs';

import { AlignJustify } from 'lucide-react';

import Link from 'next/link';

import { auth, currentUser } from '@clerk/nextjs';

//TODO : Add the links to the buttons
export const RightSideButtons = () => {
    const { userId } = auth();

    return (
        <div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription>
                                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                    {/* <UserButton afterSignOutUrl="/"></UserButton> */}
                                    {userId ? <Button asChild className="text-md bg-blue-500">
                                        <Link href="/dashboard">Dashboard</Link>
                                    </Button>
                                        : <SignUpButton redirectUrl="/sign-up">
                                            <Button className="text-md bg-blue-500">
                                                Get Started
                                            </Button>
                                        </SignUpButton>
                                    }
                                    {userId ?
                                        undefined
                                        : <SignInButton />}

                                    <Link href="/">Pricing</Link>
                                    <Link href="/">Contact</Link>
                                    <Link href="/">About</Link>

                                    {userId ? <ManageAccount /> : undefined}

                                    {userId ? (
                                        <SignOutButton>
                                            <Link className="btn" href="/">
                                                Sign Out
                                            </Link>
                                        </SignOutButton>
                                    ) : undefined}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:flex md:space-x-4">
                <Button asChild className="text-md" variant="ghost">
                    <Link href={userId ? '/dashboard' : '/sign-in'}>
                        {userId ? 'Dashboard' : 'Sign in'}
                    </Link>
                </Button>
                {/* //TODO : Center img */}

                {userId ? (
                    <div className="flex items-center h-full">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                ) : (
                    <Button asChild className="text-md bg-blue-500">
                        <Link href={userId ? '/' : '/sign-up'}>
                            {userId ? 'Sign out' : 'Get Started'}
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
};
