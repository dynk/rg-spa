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
          Sobre a Empresa
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          Atuando nas Áreas de Engenharia e Serviços a Sigmatec é uma empresa especializada em criar
          soluções inovadoras aliando experiência, tecnologia e excelência no atendimento das necessidades
          e objetivos de cada cliente.
          </p>
          <p>
          Apoiada por uma rede de parceiros nas áreas de consultoria, projeto, execução e produção
          oferecemos soluções de alto valor agregado mantendo sempre um compromisso com a qualidade e
          inovação tecnológica.
          </p>

          <br></br>
          <br></br>
          <p>
          Embora, como empresa, seja nova no mercado, a Sigmatec já se apresenta para os seus clientes
          como uma parceira com longa experiência no mercado graças ao seu corpo de profissionais com
          mais de 30 anos de experiência em elétrica e automação com um histórico de trabalho e aplicações
          no Brasil e no exterio.
          </p>
          <p>
          A Sigmatec tem a certeza de sua capacide e competência para oferecer soluções consagradas no
          mundo inteiro para:
            <br></br>
            <br></br>
            <ul>
              {/* TODO - improve styling */}
              <li>Metais e Mineração</li>
              <li>Químico</li>
              <li>Papel e Celulose</li>
              <li>Textil</li>
              <li>Predial</li>
              <li>Agroindústria</li>
              <li>Alimentício</li>
              <li>Fabricante de máquinas</li>
            </ul>

          </p>
          <br>
          </br>


          <br>
          </br>
          <p>
          </p>
          <br>
          </br>

        </Typography>
      </Container>

      <Footer />
    </div>
  )
}
