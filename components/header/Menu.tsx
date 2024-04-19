'use client'
import useCartService from '@/lib/hook/useCartStore'
import useLayoutService from '@/lib/hook/useLayout'
import { signIn, signOut, useSession } from 'next-auth/react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchBox } from './SearchBox'

const Menu = () => {
    const { items, inits } = useCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    const signoutHandler = () => {
        signOut({ callbackUrl: '/signin' })
        inits()
    }

    const { data: session } = useSession()

    const { theme, toggleTheme } = useLayoutService()

    const handleClick = () => {
        ; (document.activeElement as HTMLElement).blur()
    }

    return (
        <>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                <div className="flex flex-col sm:flex-row">
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">Home</Link>
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/product">Shop</Link>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                    <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                </div>
            </nav>
        </>
    )
}

export default Menu