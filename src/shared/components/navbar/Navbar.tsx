import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useLocation, Link } from 'react-router-dom'

interface INavbarProps {
  backRoute: string
  title: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
    textAlign: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = ({ backRoute, title }: INavbarProps): JSX.Element => {
  const classes = useStyles()
  const location = useLocation()

  const getIcon = (): JSX.Element | null => {
    if (location.pathname !== '/') {
      return (
        <Link to={backRoute}>
          <IconButton edge="start" color="secondary">
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      )
    }
    return null
  }

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {getIcon()}
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
