
import Link from 'next/link'
import React from 'react'

const AdminLayout = async ({
    activeItem = 'dashboard',
    children,
}: {
    activeItem: string
    children: React.ReactNode
}) => {
    return (
        <div className="relative flex flex-grow">
            <div className="w-full grid md:grid-cols-5">
                <div className="bg-base-200">
                    <ul className="menu">
                        <li>
                            <Link
                                className={'products' === activeItem ? 'active' : ''}
                                href="/admin/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={'users' === activeItem ? 'active' : ''}
                                href="/admin/users"
                            >
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-4 px-4">{children} </div>
            </div>
        </div>
    )
}

export default AdminLayout