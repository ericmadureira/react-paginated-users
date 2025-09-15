import type { User } from '../types'
import UserRow from './UserRow'

interface UsersListProps {
    users: User[]
}

const UsersList = ({ users }: UsersListProps) => {
    return (
        <div>
            {users.map(user => <UserRow user={user} key={`${user.name.first}${user.email}`} />)}
        </div>
    )
}

export default UsersList