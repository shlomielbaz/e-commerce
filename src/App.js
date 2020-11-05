import { React } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
