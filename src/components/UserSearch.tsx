import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface UserSearchProps {
	search: string
	setSearch: Dispatch<SetStateAction<string>>
}

const UserSearch = ({ search, setSearch }: UserSearchProps) => {
	return (
		<div className='my-6'>
			<span>Search for users: </span>
			<input
				type="text"
				placeholder='  Search here...'
				value={search}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value as string)}
			/>
		</div>
	)
}

export default UserSearch