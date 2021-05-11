import UserDetail from '../../../features/users/components/user-detail/UserDetail'
import { User } from '../../../features/users/models/user.model'

interface IPersonProps {
  user: User | null
}

const Person = ({ user }: IPersonProps): JSX.Element | null => {
  if (user) return <UserDetail user={user}></UserDetail>
  return null
}

export default Person
