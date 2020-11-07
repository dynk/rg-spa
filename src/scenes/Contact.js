import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Header from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import experienceSvg from '../assets/location.svg'
import time from '../assets/time.svg'
import contact from '../assets/contact.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
    maxWidth: '90%',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
})


function Contact(props) {
  const { classes } = props

  return (
    <div>
      <Header />
      <section className={classes.root}>
        <Container maxWidth="sm" component="main" className={classes.container}>
          <Grid  container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={experienceSvg}
                  alt="suitcase"
                />
                <Typography variant="h6" className={classes.title}>
                  Localização
                </Typography>
                <Typography variant="h5">
                  <span>Sigmatec Comércio e Serviços </span>
                  <span>Rua Coronel Lauro Pires 62 </span>
                  <span>Jardim Alvorada 30.810-670</span>
                  <span> Belo Horizonte – MG</span>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={time}
                  alt="graph"
                />
                <Typography variant="h6" className={classes.title}>
                  Horário
                </Typography>
                <Typography variant="h5">
                  <span>8h - 18h </span>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  className={classes.image}
                  src={contact}
                  alt="clock"
                />
                <Typography variant="h6" className={classes.title}>
                  Contatos
                </Typography>
                <Typography variant="h5">
                  <span>comercial@sigmatec.com.br</span><br></br>
                  <span>engenharia@sigmatec.com.br</span><br></br>
                  <span>locação@sigmatec.com</span>

                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default withStyles(styles)(Contact)
