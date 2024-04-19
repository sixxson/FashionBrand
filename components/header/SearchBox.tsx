'use client'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

export const SearchBox = () => {
    const searchParams = useSearchParams()
    const q = searchParams.get('q') || ''
    const category = searchParams.get('category') || 'All'

    const { data: categories, error } = useSWR('/api/products/categories')

    if (error) return error.message
    if (!categories) return 'Loading...'

    return (
        <form action="/search" method="GET">
            <div className="join">
                <select
                    name="category"
                    defaultValue={category}
                    className="join-item select select-bordered "
                >
                    <option value="all">All</option>
                    {categories.map((c: string) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
                <input
                    className="join-item input input-bordered  w-60"
                    placeholder="Search"
                    defaultValue={q}
                    name="q"
                />
                <button className="join-item btn ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </div>
        </form>
    )
}