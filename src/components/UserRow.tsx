import type { User } from "../types"

interface UserRowProps {
    user: User
}

const UserRow = ({ user }: UserRowProps) => {
    return (
        <p>➡ {user.name.first} - {user.email} </p>
    )
}

export default UserRow