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


export default function Solution() {
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
          Soluções Industriais
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          Com uma equipe técnico-comercial especializada, a Sigmatec pode oferecer soluções customizadas
          e otimizar o desempenho de processos nas mais diversas áreas da indústria, propondo adaptações e
          inovações para melhorar a performance dos equipamentos e sistemas com ganhos em custos de manutenção.
          </p>  
          <p>
          A Sigmatec propõe uma pareceria com seus clientes na qual ela garanta um elevado desempenho
          de processos de seus processos com produtos de alta qualidade e você assume o controle sobre os
          resultados do seu negócio.
          </p>
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Automação
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          A Sigmatec oferece soluções para Projeto, Fornecimento e Desenvolvimento de Sistemas de
          Automação para Supervisão e Controle de pequenos sistemas utilizando softwares dedicados e
          softwares específicos, levando em conta plataformas e protocolos existentes ou criação de novos
          sistemas completos e plenamente operacionais.
          </p>  
        </Typography>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Sistemas de Medição
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          A Sigma se apresenta como uma parceira de confiança para medição de temperatura, umidade,
          pressão, potência e demais parâmetros elétricos, com instrumentação para medições confiáveis e
          precisas nas aplicações mais diversas com o intuito de propor soluções e melhorias em seu sistema
          produtivo, possibilitando você manter os níveis ideais em seus processos.
          </p>  
        </Typography>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Desenvolvimento de produtos
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          Sabendo que muitas vezes um cliente demanda produtos ou soluções específicas e que não é um
          item de “prateleira”, a Sigma desenvolve, em parceria com seus parceiros e fornecedores de
          hardwares, soluções dedicadas a aplicações demandadas por cada cliente.
          </p> 
          <p>
          A Sigmatec pode apresentar soluções robustas e eficientes que trazem o que há de mais tecnológico
          e atual para os mais diversos setores industriais.
          </p>  
        </Typography>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Locação de Equipamentos
        </Typography>
        <Typography
          variant="h5"
          align="center"
          component="p"
        >
          <p>
          Locação de equipamentos de ar condicionado para estabelecimentos comerciais e industriais,
diversos modelos e capacidades.
          </p> 
          <p>
          Locação de geradores de energia e transformadores.
          </p> 
          <p>
          Locação de sistemas de medição remoto/local de: temperatura, umidade, pressão, potência e demais
          parâmetros elétricos.
          </p>  
        </Typography>        

      </Container>
      
      <Footer />
    </div>
  );
}
