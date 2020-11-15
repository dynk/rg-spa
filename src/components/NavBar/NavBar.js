import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '@material-ui/core/Link'
import logo from '../../assets/logo.png'

const drawerWidth = 240

const navivationItems = [
  { label: 'Quem somos', link: '/about' },
  { label: 'Experiência no Mercado', link: '/experience' },
  { label: 'Soluções Industriais', link: '/solution' },
  { label: 'Fale Conosco', link: '/contact' },
]


const useStyles = makeStyles(theme => ({
  DesktopMenu: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    direction: 'revert',
    padding: '0px 20px 0px 20px',
  },
  root: {
    display: 'flex',
  },
  logo: {
    height: '40px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    color: theme.palette.common.white,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))

export default function PersistentDrawerRight() {
  const classes = useStyles()
  const theme = useTheme()
  const isDesktopWindow = useMediaQuery(theme.breakpoints.up('sm'))
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title} >
            <Link color="inherit" href="/" >
              <img
                src={logo}
                className={classes.logo}
                alt="logo"
              />
            </Link>
          </Typography>
          {isDesktopWindow ? <div className={classes.DesktopMenu}>
            {navivationItems.map((item, index) => (
              <Typography variant="h7" >
                <Link key={index} color="black" href={item.link} >
                  {item.label}
                </Link>
              </Typography>
            ))}
          </div> : null}

          {isDesktopWindow ? null :
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>}

        </Toolbar>

      </AppBar>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main> */}
      {isDesktopWindow ? null :
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {navivationItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText>
                  <Link color="inherit" href={item.link} >
                    {item.label}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      }
    </div>
  )
}
