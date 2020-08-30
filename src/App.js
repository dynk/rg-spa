import React, { Suspense } from 'react';
import './App.css';
import Home from './onepirate/Home'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Company from './Pages/Company'
import themeProvider from './provider/Theme/withRoot'

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/empresa" component={Company} />
      <Route path="/produtos" component={Company} />
      <Route path="/servicos" component={Company} />
      <Route path="/noticias" component={Company} />
      <Route path="/contato" component={Company} />
      v
      <Redirect to="/" />
    </Switch>
  )
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
    // <Home />
    // <Blog />
  );
}

export default withRouter(themeProvider(App))
