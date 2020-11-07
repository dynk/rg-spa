/* eslint-disable max-len */
import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Header from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles(theme => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

}))


export default function Pricing() {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
        >
          PAGE
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet aliquam id diam. Eu lobortis elementum nibh tellus molestie nunc non. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Augue neque gravida in fermentum et sollicitudin ac. Tincidunt ornare massa eget egestas purus viverra. Id neque aliquam vestibulum morbi blandit cursus risus at.
          </p>
          <p>
          Aliquet nibh praesent tristique magna sit amet purus gravida quis. Morbi tristique senectus et netus et malesuada fames ac turpis. Eros donec ac odio tempor orci. Vitae congue mauris rhoncus aenean vel. Et malesuada fames ac turpis egestas integer eget aliquet. Arcu bibendum at varius vel. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Phasellus faucibus scelerisque eleifend donec pretium. Eget aliquet nibh praesent tristique magna sit amet purus gravida.
          </p>

          <br></br>
          <br></br>
          <p>
          Venenatis lectus magna fringilla urna. Sodales ut eu sem integer vitae justo eget magna fermentum. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Commodo odio aenean sed adipiscing diam. Nibh mauris cursus mattis molestie. Hac habitasse platea dictumst quisque. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.
          </p>

        </Typography>
      </Container>

      <Footer />
    </div>
  )
}
