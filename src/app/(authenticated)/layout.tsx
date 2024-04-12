import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import NavMenu from "@/components/NavMenu";
import { signIn } from "next-auth/react";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    )
}