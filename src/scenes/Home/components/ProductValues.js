/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../../../components/Typography'
import moneySvg from '../../../assets/price.svg'
import productSvg from '../../../assets/robot.svg'
import experienceSvg from '../../../assets/experience.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
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

function ProductValues(props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={experienceSvg}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Experiência de mercado
              </Typography>
              <Typography variant="h5">
                {
                  'Contando com uma mão de obra extremamente qualificada, a Sigmatec conta com funcionários com mais de 40 anos de experiência em soluções industriais'
                }

              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={productSvg}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Melhores serviços
              </Typography>
              <Typography variant="h5">
                {
                  'Temos como missão colocar a necessidade de nossos clientes sempre em primeiro lugar'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={moneySvg}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Melhor preço
              </Typography>
              <Typography variant="h5">
                {
                  'Com soluções especializadas somos capazes de oferecer o melhor custo benefício'
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductValues)
