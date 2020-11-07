import React, { Suspense } from 'react';
import './Layout.css';
import Home from '../scenes/Home/Home'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Experience from '../scenes/Experience'
import About from '../scenes/About'
import Solution from '../scenes/Solution'
import Contact from '../scenes/Contact'
import themeProvider from '../provider/Theme/withRoot'

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
