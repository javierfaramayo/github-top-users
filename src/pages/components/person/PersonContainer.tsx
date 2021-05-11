import Person from './Person'
import Layout from '../../../shared/components/layout/Layout'
import { Container } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { UsersService } from '../../../features/users/services/users.service'
import { User } from '../../../features/users/models/user.model'
import { useParams } from 'react-router-dom'

const PersonContainer = (): JSX.Element => {
  const { username } = useParams<{ username: string }>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    UsersService.getUserByUsername(username).then((user) => setUser(user))
  }, [username])

  return (
    <Layout title="Person" backRoute="/">
      <Container>
        <Person user={user}></Person>
      </Container>
    </Layout>
  )
}

export default PersonContainer
