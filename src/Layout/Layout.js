import React, { Suspense } from 'react';
import './Layout.css';
import Home from './onepirate/Home'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Experience from './Pages/Experience'
import About from './Pages/About'
import Solution from './Pages/Solution'
import Contact from './Pages/Contact'
import themeProvider from './provider/Theme/withRoot'

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/solution" component={Solution} />
      <Route path="/contact" component={Contact} />
      <Route path="/experience" component={Experience} />
      
      <Redirect to="/" />
    </Switch>
  )
  return (
    <div>
      <Suspense fallback={<p>Carregando...</p>}>{routes}</Suspense>
    </div>
  );
}

export default withRouter(themeProvider(App))
