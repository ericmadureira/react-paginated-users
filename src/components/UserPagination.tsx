import type { Dispatch, SetStateAction } from 'react'

interface UserPaginationProps {
    currentPage: number
    setPage: Dispatch<SetStateAction<number>>
}

const UserPagination = ({ currentPage, setPage }: UserPaginationProps) => {
    const previousPage = () => setPage(Math.min(1, currentPage-1))
    const nextPage = () => setPage(currentPage+1)
    return (
        <div className='flex my-4 justify-center'>
            <button onClick={previousPage}>⬅</button>
            <span className="m-4 p-2 border-1 border-white">{currentPage}</span>
            <button onClick={nextPage}>➡</button>
        </div>
    )
}

export default UserPagination