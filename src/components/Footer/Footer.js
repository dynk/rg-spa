import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '../Typography'
import Box from '@material-ui/core/Box'


function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
      SIGMATEC
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}


const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

export default function AppFooter() {
  const classes = useStyles()
  const footers = [
    {
      title: 'Empresa',
      items: [
        {
          label: 'Time',
          link: '/about',
        },
        {
          label: 'Historia',
          link: '/about',
        },
        {
          label: 'Endereço',
          link: '/contact',
        },
      ],
    },
    {
      title: 'Produtos',
      items: [
        {
          label: 'Automação',
          link: '/solution',
        },
        {
          label: 'Medição',
          link: '/solution',
        },
      ],
    },
    {
      title: 'Serviços',
      items: [
        {
          label: 'Projetos',
          link: '/solution',
        },
        {
          label: 'Consultoria',
          link: '/solution',
        },
      ],
    },
    {
      title: 'Fale conosco',
      items: [
        {
          label: 'Telefone',
          link: '/contact',
        },
        {
          label: 'Email',
          link: '/contact',
        },
      ],
    },
  ]

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map(footer => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.items.map(({ label, link }) => (
                <li key={label}>
                  <Link href={link} variant="subtitle1" color="textSecondary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
