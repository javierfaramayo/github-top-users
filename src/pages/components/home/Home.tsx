import UsersList from '../../../features/users/components/users-list/UsersList'
import { User } from '../../../features/users/models/user.model'

interface IHomeProps {
  users: User[]
}

const Home = ({ users }: IHomeProps): JSX.Element => {
  return (
    <>
      <h1>Top 5 GitHub Users</h1>
      <p>Tap the username to see more information</p>
      <UsersList users={users}></UsersList>
    </>
  )
}

export default Home
