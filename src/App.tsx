import { useState, useEffect } from 'react'

import UsersList from './components/UsersList'
import UserPagination from './components/UserPagination'
import UserSearch from './components/UserSearch'
import type { User } from './types'

import './App.css'

const BASE_API_URL = "https://randomuser.me/api/"


function App() {
  const [users, setUsers] = useState<User[]>([{name: { first: 'Eric' }, email: 'eric@test.com'}])
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    try {
      fetch(`${BASE_API_URL}?page=${page}&results=5`)
        .then(response => response.json())
        .then(data => {
          console.log('data.results: ', data.results)
          setUsers(data.results)
        })
    } catch(error) {
      console.log("Error during fetch: ", error)
    }
  }, [page])

  const filteredUsers = users.filter(user => user.name.first.includes(search) || user.email.includes(search))

  return (
    <div className='flex flex-col'>
      <h1>React - Paginated Users</h1>
      <UserSearch search={search} setSearch={setSearch} />
      <UsersList users={filteredUsers} />
      <UserPagination currentPage={page} setPage={setPage} />
    </div>
  )
}

export default App
