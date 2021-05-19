import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Dashboard from './pages/AdminDashboard/index'
import CarOn from './pages/VeiculosOn'
import CarOff from './pages/VeiculosOff'
import Points from './pages/Points'
import { MoreInfo } from './pages/MoreInfo';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/admin' component={Dashboard}/>
    <Route exact path='/veiculos-on-line' component={CarOn}/>
    <Route exact path='/veiculos-offline' component={CarOff}/>
    <Route exact path='/points' component={Points}/>
    <Route exact path='/more-info' component={MoreInfo}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
