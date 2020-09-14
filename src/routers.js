import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import { AboutPage } from "./views/about";
import {ContactsPage} from './views/contact'
import { HomePage} from './views/home'

export const AppRouter = () => {
  return (
    <Router>                
        <Switch>
          <Route path='/about' component= {AboutPage} />
          <Route path='/contacts' component= {ContactsPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={HomePage} />
        </Switch>      
    </Router>
  );
}