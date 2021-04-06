import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderMain } from './cmps/HeaderMain/HeaderMain';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import './App.scss';

export function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <Switch>
          {/* <Route component={ContactEditPage} path='/contact/edit/:id?' /> */}
          <Route component={ContactDetailsPage} path='/contact/:id' />
          <Route component={ContactPage} path='/contact' />
          <Route component={StatisticPage} path='/statistic' />
          <Route component={HomePage} path='/' />
        </Switch>
      </div>
    </Router>  
  );
}


