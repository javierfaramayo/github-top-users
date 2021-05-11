import Home from './Home'
import Layout from '../../../shared/components/layout/Layout'
import { Container } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { UsersService } from '../../../features/users/services/users.service'
import { User } from '../../../features/users/models/user.model'

const HomeContainer = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    UsersService.getAllUsers().then((users) => setUsers(users))
  }, [])

  return (
    <Layout title="Home">
      <Container>
        <Home users={users}></Home>
      </Container>
    </Layout>
  )
}

export default HomeContainer
