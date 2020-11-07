import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

}));


export default function Pricing() {
  const classes = useStyles();

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
          Experiência no Mercado
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
            A Sigmatec possui profissionais com larga experiência profissional em Engenharia Eletro-Eletrônica,
            Automação, Engenharia Térmica, HVAC e Energia Solar.
          </p>  
          <p>
            São profissionais especializados e reconhecidos no mercado, tendo participado, quando profissionais
            de outras empresas, no desenvolvimento de vários projetos, produtos e soluções, desde a sua
            concepção até a sua implantação e acompanhamento operacional.
          </p>
        
        </Typography>
      </Container>
      
      <Footer />
    </div>
  );
}
