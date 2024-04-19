'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import { signIn, signOut, useSession } from 'next-auth/react'
import useCartService from '@/lib/hooks/useCartStore'

const Header = () => {

    const signoutHandler = () => {
        signOut({ callbackUrl: '/signin' })
    }

    const { data: session } = useSession()

    const handleClick = () => {
        ; (document.activeElement as HTMLElement).blur()
    }
    return (
        <header>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="hidden w-full text-gray-600 md:flex md:items-center">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                        </svg>
                        <span className="mx-1 text-sm">NY</span>
                    </div>
                    <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        <Link href={'/'}> Brand</Link>
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <Link href={'/cart'} className="text-gray-600 focus:outline-none mx-4 sm:mx-0 btn btn-ghost rounded-btn " >
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </Link>
                        {session && session.user ? (
                            <div>
                                <li className='list-none'>
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost rounded-btn">
                                            {session.user.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </label>
                                        <ul
                                            tabIndex={0}
                                            className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 "
                                        >
                                            {session.user.isAdmin && (
                                                <li onClick={handleClick}>
                                                    <Link href="/admin/products">Admin</Link>
                                                </li>
                                            )}

                                            <li onClick={handleClick}>
                                                <Link href="/order-history">Order history </Link>
                                            </li>
                                            <li onClick={handleClick}>
                                                <Link href="/profile">Profile</Link>
                                            </li>
                                            <li onClick={handleClick}>
                                                <button type="button" onClick={signoutHandler}>
                                                    Sign out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                        ) : (
                            <li className='list-none'>
                                <button
                                    className="btn btn-ghost rounded-btn"
                                    type="button"
                                    onClick={() => signIn()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#4b5563 " width="30px" height="30px" viewBox="0 0 32 32"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" /></svg>
                                </button>
                            </li>
                        )}

                        <div className="flex sm:hidden">
                            <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header