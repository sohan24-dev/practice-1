"use client"

import Link from "next/link";

import { usePathname } from "next/navigation";


const NavLink = ({ children, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    // console.log(href);

    return (
        <Link
            href={href}
            className={isActive ? 'border-b-2 border-purple-500' : ''}
        >
            {children}
        </Link>
    );
};

export default NavLink;