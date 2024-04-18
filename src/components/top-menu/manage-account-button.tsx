'use client';

import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';

export const ManageAccount = () => {
    const { openUserProfile } = useClerk();

    const handleClick = () => {
        openUserProfile();
    };

    return (
        <Link href="/" onClick={handleClick}>
            Manage Account
        </Link>
    );
};
