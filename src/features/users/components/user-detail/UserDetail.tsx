import { Container, makeStyles, Divider } from '@material-ui/core'
import { User } from '../../models/user.model'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'

interface IUserDetailProps {
  user: User
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const UserDetail = ({ user }: IUserDetailProps): JSX.Element => {
  const classes = useStyles()

  return (
    <Container>
      <Box p={4} display="flex" alignItems="center">
        <Avatar
          alt={user.login}
          src={user.avatar_url}
          className={classes.large}
        />
        <Box ml={4}>
          <p>{user.name}</p>
          <span>{user.location || 'No location'}</span>
        </Box>
      </Box>
      <Divider></Divider>
    </Container>
  )
}

export default UserDetail
