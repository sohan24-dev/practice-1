"use client"

import { authClient } from "@/lib/auth-client"
import NavLink from "./NavLink";
import Link from "next/link";


const Navber = () => {
    const { data: session } = authClient.useSession()

    const handleLogout= async()=>{
        await authClient.signOut()
    }
    return (
        <div className="container mx-auto mt-7 flex justify-between items-center">

            <ul className="flex gap-5 justify-center items-center">

                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/details'}>Details</NavLink>
                </li>


            </ul>
            {
                session ? (
                    <>
                        <div className="flex gap-2 items-center"><h2 className="font-bold text-green-500">
                            Hello {session.user.name}
                        </h2>

                            <button onClick={handleLogout} className="btn bg-primary text-white">Logout</button></div>

                    </>
                ) : (
                   
                        <Link className="btn bg-primary text-white" href='/login'>Login</Link>
                 
                )
            }

        </div>
    );
};

export default Navber;