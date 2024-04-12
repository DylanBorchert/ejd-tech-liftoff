'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

function AuthButton() {
    const { data: session } = useSession()
    return (
        <div className='flex w-full justify-between border-b-[1px] border-gray-500 p-2'>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="btn-signin"
            >
                {session ? 'Sign out' : 'Sign in'}
            </button>
            <p>{
                session ? `Signed in as ${session?.user?.name}` : 'Not signed in'
            }</p>
        </div>
    )
}

export default function NavMenu() {
    return (
        <nav>
            <AuthButton />
        </nav>
    )
}