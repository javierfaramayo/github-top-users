import { Container } from '@material-ui/core'
import { User } from '../../models/user.model'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

interface IUsersListProps {
  users: User[]
}

const UsersList = ({ users }: IUsersListProps): JSX.Element => {
  return (
    <Container>
      <Grid container spacing={2}>
        {users.map((user: User) => (
          <Grid item key={user.id}>
            <Link to={`/user/${user.login}`}>
              <Button variant="contained" color="secondary">
                {user.login}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default UsersList
