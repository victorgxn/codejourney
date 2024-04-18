'use client'
import {Home, BookOpenCheck, Shield, MailPlus} from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

export const Aside = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const menuList = [
        {
            id: 1,
            name: 'Courses',
            icon: BookOpenCheck,
            path: '/courses',
        },
        {
            id: 2,
            name: 'Home',
            icon: Home,
            path: '/',
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade',
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: MailPlus,
            path: '/newsletter',
        }

    ]
    return (
        <aside id="logo-sidebar"
               className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
               aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {menuList.map((item,    index: number) => (
                        <li key={item.id}>
                            <Link href={item.path}
                                  className={`flex items-center p-3 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${ activeIndex === index ? 'bg-gray-100 dark:bg-gray-900' : ''}`}
                                  onClick={() => setActiveIndex(index)}>
                                <item.icon className="w-6 h-6 mr-2"/>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}